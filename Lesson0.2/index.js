import flat from "./tasks/flat.js";


console.log(flat([1, [2, [3, [4]]], 5]));
console.log(flat([1, [[2], [3, [4]]], 5], 2));
/*
    [ 1, 2, [ 3, [ 4 ] ], 5 ]
    [ 1, 2, 3, [ 4 ], 5 ]
*/
