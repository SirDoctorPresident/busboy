var modal = (function(){
    var modal = utils.createElement('div', 'modal');
    var content = utils.createElement('div', 'modal-content');
    var overlay = utils.createElement('div', 'modal-overlay');

    var header = utils.createElement('div', 'modal-header');
    var titleIcon = utils.createElement('i', 'modal-icon');
    var title = utils.createElement('div', 'modal-title');
    var closeIcon = utils.createElement('i','close-icon fa fa-times');
    
    header.appendChild(titleIcon);
    header.appendChild(title);
    header.appendChild(closeIcon);
    

    var body = utils.createElement('div', 'modal-body');

    var footer = utils.createElement('div','modal-footer');

    modal.appendChild(content);
    modal.appendChild(overlay);

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);
    
    open = function(options){
        var options = options || {};
        var closable = options.closable;
        var headerStyle = options.headerStyle || '';
        var iconClass = options.icon || '';

        if (options.closable === undefined) {
            closable = true;
        }

        header.className = 'modal-header ' + headerStyle;
        titleIcon.className = 'modal-icon ' + iconClass;
        if(!closable) {
            closeIcon.style.display = 'none';
        }
        title.innerHTML = options.header || '';
        body.innerHTML = options.body || '';

        document.body.appendChild(modal);
    }
    
    close = function(){
        modal.remove();
    }

    closeIcon.onclick = close;
    overlay.onclick = close;


    return {
        open: open,
        close: close,
    }
}());
