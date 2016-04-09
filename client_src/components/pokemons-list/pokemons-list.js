module.exports = function (options) {
    var elem = $('.pokemons-list');
    var pokemons = options.pokemons;


    function render() {

        elem.append($(App.templates['pokemons-chunk']({
            pokemons: pokemons
        })));

        return this;
    }

    Handlebars.registerHelper('typeColorHelper', function () {
        var resource_uri = Handlebars.escapeExpression(this.resource_uri);

        switch (resource_uri) {
            case "/api/v1/type/1/":
                return new Handlebars.SafeString('violet');
                break;
            case "/api/v1/type/2/":
                return new Handlebars.SafeString('cornflowerblue');
                break;
            case "/api/v1/type/3/":
                return new Handlebars.SafeString('saddlebrown');
                break;
            case "/api/v1/type/4/":
                return new Handlebars.SafeString('blueviolet');
                break;
            case "/api/v1/type/5/":
                return new Handlebars.SafeString('brown');
                break;
            case "/api/v1/type/6/":
                return new Handlebars.SafeString('grey');
                break;
            case "/api/v1/type/7/":
                return new Handlebars.SafeString('mediumvioletred');
                break;
            case "/api/v1/type/8/":
                return new Handlebars.SafeString('lightgray');
                break;
            case "/api/v1/type/9/":
                return new Handlebars.SafeString('cornflowerblue');
                break;
            case "/api/v1/type/10/":
                return new Handlebars.SafeString('red');
                break;
            case "/api/v1/type/11/":
                return new Handlebars.SafeString('lightseagreen');
                break;
            case "/api/v1/type/12/":
                return new Handlebars.SafeString('green');
                break;
            case "/api/v1/type/13/":
                return new Handlebars.SafeString('yellow');
                break;
            case "/api/v1/type/14/":
                return new Handlebars.SafeString('darkblue');
                break;
            case "/api/v1/type/15/":
                return new Handlebars.SafeString('blue');
                break;
            case "/api/v1/type/16/":
                return new Handlebars.SafeString('lawngreen');
                break;
            case "/api/v1/type/17/":
                return new Handlebars.SafeString('orange');
                break;
            case "/api/v1/type/18/":
                return new Handlebars.SafeString('darkslategray');
                break;
            default:
                return new Handlebars.SafeString('transparent');
        }

    });


    return {
        render: render,
        el: elem
    };
};
