document.getElementById('modal-launcher').onclick = function (){
    modal.open({
        header: 'The Title',
        body: `And now here's just text...just some text`,
    });
}

document.getElementById('error-launcher').onclick = function (){
    modal.open({
        header: 'The Title',
        headerStyle: 'error-header',
        body: `And now here's just text...just some text`,
        icon: 'fa fa-exclamation-circle'
    });
}

document.getElementById('info-launcher').onclick = function (){
    modal.open({
        header: 'The Title',
        headerStyle: 'info-header',
        body: `And now here's just text...just some text`,
        icon: 'fa fa-info-circle'
    });
}

document.getElementById('success-launcher').onclick = function (){
    modal.open({
        header: 'The Title',
        headerStyle: 'success-header',
        body: `And now here's just text...just some text`,
        icon: 'fa fa-check-circle-o'
    });
}