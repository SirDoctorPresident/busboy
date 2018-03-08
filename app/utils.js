var utils = (function (){
    var createElement = function(tagName, className) {
        var el = document.createElement(tagName);

        if(className) {
            el.setAttribute('class', className);
        }

        return el;
    }

    return {
        createElement: createElement
    }
}());