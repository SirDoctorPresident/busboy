var table = (function(config){

    if(!(config.items instanceof Array)) {
        throw new Error('Items must be of type array');
    }

    let items = config.items || [];

    let table = utils.createElement('table');

    //create table headings
    let headerRow = utils.createElement('tr');
    let columns = [];
    for(let prop in items[0]) {
        let cell = utils.createElement('th');
        cell.innerText = '' + prop;
        headerRow.appendChild(cell);

        columns.push(prop);
    }
    table.appendChild(headerRow);

    //create table rows
    for(let i = 0; i < items.length; i++) {
        let row = utils.createElement('tr');
        
        for(let j = 0; j < columns.length; j++) {
            let cell = utils.createElement('td');
            cell.innerText = items[i][columns[j]];

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    document.body.appendChild(table);
})({items : [
    {one: 'test1', two: 'test2'},
    {one: 'test3', two: 'test4'}
]})