var PokemonsContainer = require( '../pokemons-container/pokemons-container.js' );

module.exports = function () {

    var pokemonsContainer = new PokemonsContainer({});

    function render() {
        $('.content').html(pokemonsContainer.render().el);
    }
    
    return {
        render: function () {
            render();
        }
    };
};
