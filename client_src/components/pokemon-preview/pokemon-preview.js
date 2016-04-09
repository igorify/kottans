module.exports = function (options) {
    var elem = $('<div></div>');

    var pokemon = options.pokemon;


    function render() {

        elem.html($(App.templates['pokemon-preview']({
            pokemon: pokemon
        })));

        return this;
    }


    return {
        render: render,
        el: elem
    };
};
