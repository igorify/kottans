module.exports = function (options) {
    var elem = $('<div></div>');

    var types = options.types;

    function render() {
        elem.html($(App.templates['pokemons-filter']({
            types: types
        })));

        return this;
    }


    return {
        render: render,
        el: elem
    };
};
