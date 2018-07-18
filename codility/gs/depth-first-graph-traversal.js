// 2d array - largest connected region of shaded cells

const VISITED = 'V';

let array_to_test = [
    [1,1,0,0],
    [1,0,0,1],
    [0,0,1,1],
    [0,0,1,1]
];

function getAdjacentCells(cell, rows, columns) {
    // cell = [1,1]
    const row = cell[0];
    const column = cell[1];
    let cells = [];

    if(cell[1] +1 <= columns ){
        //right
        cells.push([row, cell[1] +1]);
    }
    if(cell[0] +1 <= rows){
        //down
        cells.push([cell[0] +1, column]);
    }
    if(cell[1] -1 >= 0){
        //left
        cells.push([row, cell[1] -1]);
    }
    if(cell[0] -1 >= 0){
        //up
        cells.push([cell[0] -1, column]);
    }
    return cells;
}

function depth_first_traversal(array, row, column) {
    const rows = array.length - 1;
    const columns = array[0].length -1;
    let stack = [];
    let count = 0;

    stack.push([row, column]);

    while(stack.length > 0){
        const [row, column] = stack.pop();

        if(array[row][column] === 1) {
            count++;
            array[row][column] = VISITED;
            const children = getAdjacentCells([row, column], rows, columns);
            
            for(let i=0; i<children.length; i++) {
                stack.push(children[i]);
            }
        }
    }
    return count;
}

function traverse(array) {
    let largest_connected_region = 0;
    const rows = array.length;
    
    for(let i=0; i < rows; i++) {
        const columns = array[i].length;
        for(let j=0; j<columns; j++) {
            let cell_value = array[i][j];
            if(cell_value === 1) {
                const count = depth_first_traversal(array, i, j);
                largest_connected_region = Math.max(count, largest_connected_region);
            }
        }
    }
    return largest_connected_region;
}

console.log("result ==> ", traverse(array_to_test));