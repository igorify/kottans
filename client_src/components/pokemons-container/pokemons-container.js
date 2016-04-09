var PokemonsList = require( '../pokemons-list/pokemons-list.js' );
var PokemonPreview = require( '../pokemon-preview/pokemon-preview.js' );
var PokemonsFilter = require( '../pokemons-filter/pokemons-filter.js' );

var PokemonsModel = require( '../../models/pokemons.js' );
var PokemonPreviewModel = require( '../../models/pokemon-preview.js' );
var PokemonsFilterModel = require( '../../models/pokemons-filter.js' );

module.exports = function () {
    var elem = $('<div></div>');
    var CHUNK_SET = 212; //You also can set your quantity per chunk pokemons
    var FIRST_URI = '/api/v1/pokemon/?limit=' + CHUNK_SET;
    var uri = FIRST_URI;


    var pokemonsModel = new PokemonsModel();
    var pokemonPreviewModel = new PokemonPreviewModel();
    var pokemonsFilterModel = new PokemonsFilterModel();

    var pokemonsList,
        pokemonPreview,
        pokemonsFilter;


    function render() {

        // Pokemons List Component
        pokemonsModel.getPokemons(uri).done(function (data) {

            elem.html($( App.templates['pokemons-container']()));

            if (uri === FIRST_URI) {
                pokemonsList = new PokemonsList({
                    pokemons: data.objects
                });

                uri = data.meta.next;
            }

            elem.find('.pokemons-list').append(pokemonsList.render().el);
            pokemonsPreview();
            pokemonsTypeFilter();


            // Load More Logic
            $('.pokemons-more__btn').on('click', function () {

                pokemonsModel.getPokemons(uri).done( function (data) {
                    uri = data.meta.next;

                    pokemonsList = new PokemonsList({
                        pokemons: data.objects
                    });

                    elem.find('.pokemons-list').append(pokemonsList.render().el);

                    if (data.meta.next === null) {$('.pokemons-more__btn').hide();}

                    pokemonsPreview();
                    pokemonsTypeFilter();
                });

            });


            // Pokemons Preview Component
            function pokemonsPreview() {
                $('.pokemons-list').on('click', function (event) {
                var id = $(event.target).closest('.pokemon-item').data('id');

                pokemonPreviewModel.getPokemon(id).done( function (data) {

                    pokemonPreview = new PokemonPreview({
                            pokemon: data
                        });

                    elem.find('.pokemon-preview').html(pokemonPreview.render().el);

                    });
                });
            }

        });

        // Pokemons Filter Component
        function pokemonsTypeFilter() {
            pokemonsFilterModel.getPokemonTypes().done( function (data) {

                pokemonsFilter = new PokemonsFilter({
                    types: data.objects
                });

                elem.find('.pokemons-filter').html(pokemonsFilter.render().el);

                var $item = $('.pokemon-item');
                var $filter = $('.pokemons-filter'),
                    $filterSelect = $filter.find('.pokemons-filter__select'),
                    $filterBtnFind = $filter.find('.pokemons-filter__btn_find'),
                    $filterBtnClear = $filter.find('.pokemons-filter__btn_clear');

                $filterBtnFind.on('click', function () {

                    var selectedType = $filterSelect.find(":selected").data('type');

                    $item.each( function (i, el) {
                        $(this).removeClass('hide');

                        var type = $(this).find('.pokemon-item__types-elem').data('type');

                        if ( selectedType !== type ) {
                            $(el).addClass('hide');
                        }
                    });

                    $filterBtnClear.on('click', function () {
                        $item.each( function () {
                            $(this).removeClass('hide');
                        });
                    });
                });

            });

        }

        return this;
    }



    return {
        render: render,
        el: elem
    };
};

