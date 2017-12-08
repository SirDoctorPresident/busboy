var modal = (function(options){
    var options = options || {}
    console.log(options);
    var modal = document.createElement('div');
    var content = document.createElement('div');

    modal.setAttribute('class', 'modal');
    content.setAttribute('class', 'content');
    modal.appendChild(content);

    open = function(){
       document.body.appendChild(modal);
    }

    close = function(){
        modal.remove();
    }

    modal.onclick = close;
    return {
        open: open,
        close: close,
    }
}());

var thd = {modal: modal};