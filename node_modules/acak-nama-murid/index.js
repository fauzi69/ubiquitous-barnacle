const _ = require('lodash');

const namaMurid = [
    "Alice", "Bob", "Charlie", "David", "Eve"
];

const namaMuridAcak = _.shuffle(namaMurid);

console.log('Nama murid acak:', namaMuridAcak);
