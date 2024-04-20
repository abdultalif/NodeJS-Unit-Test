import { sumAll } from "../src/sum.js";

const table = [
    {
        numbers: [],
        expected: 0
    },
    {
        numbers: [10],
        expected: 10
    },
    {
        numbers: [10, 10, 10],
        expected: 30
    },
    {
        numbers: [10, 10, 10, 10, 10],
        expected: 50
    },
];


// method each di gunakan untuk jika terdapat kode yang sama yang beda hanya parameter dan hasilnya saja maka gunakan method each. jadi kita masukan parameter dan expected nya object lalu tinggal panggil saja tanpa perlu menulis ulang semua code 
test.each(table)('test sumAll($numbers) should result in $expected', ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
});
