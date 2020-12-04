var a = [
    [0, 1, 2, 3, 4],
    [4, 3, 2, 1, 0],
    [5, 6, 7, 8, 9]
];
let n = 1;

function deleteCol(a, column) {
    do {
        for (i = 0; i < a.length; i++) {
            a[i].splice(column[0] - n, 1)
        }
        column.splice(0,1);
        n++;
    } while (column.length > 0)
    return a;
}

function deleteRow(a, row) {
    do {
        a.splice(row[0] - n, 1);
        row.splice(0,1);
        n++;
    } while (row.length > 0)
    return a;
}

let row = [1, 2];

deleteRow(a, row);

let column = [2, 3];

deleteCol(a, column);

console.log(a);
