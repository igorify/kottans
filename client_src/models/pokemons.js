var host = 'http://pokeapi.co';

module.exports = helper.Model.extend( {

    getPokemons: function (uri) {
        return $.ajax({
            method: 'GET',
            url: host + uri,
            dataType: 'JSON',
            beforeSend: function () {
                $('.pokemon-spinner').addClass('show');
                $('.pokemons-more__btn').attr("disabled", "disabled");
            },
            success: function () {
                $('.pokemon-spinner').removeClass('show');
                $('.pokemons-more__btn').removeAttr("disabled");
            }
        });
    }

} );
