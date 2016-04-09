var host = 'http://pokeapi.co',
    uri = '/api/v1/pokemon/';

module.exports = helper.Model.extend( {

    getPokemon:function (id) {
        return $.ajax({
            method: 'GET',
            url: host + uri + id + '/',
            dataType: 'JSON',
            beforeSend: function () {
                $('.pokemon-spinner').addClass('show');
            },
            success: function () {
                $('.pokemon-spinner').removeClass('show');
                $('.pokemon-preview').addClass('pokemon-preview_bg');
            }
        });
    }

});

