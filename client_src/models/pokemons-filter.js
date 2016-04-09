var host = 'http://pokeapi.co',
    uri = '/api/v1/type/?limit=999';

module.exports = helper.Model.extend( {

    getPokemonTypes: function () {
        return $.ajax({
            method: 'GET',
            url: host + uri,
            dataType: 'JSON'
        });
    }

} );
