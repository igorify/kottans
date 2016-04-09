(function () {
    var helper = {}; 

    helper.extend = function ( props ) {
        var parent = this;
        var child = function () {
            return parent.apply( this, arguments );
        };

        child.prototype = $.extend( {}, parent.prototype, props );
        return child;
    };

    window.helper = helper; 
})();

