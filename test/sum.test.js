import { sum } from '../src/sum.js';

test('test sum function 1', () => {
    const result = sum(2, 2)
    expect(result).toBe(4);
})

test('test sum function 2', () => {
    const result = sum(1, 2)
    // di jest ini disebut matcher(pencocokan). saya menggunakan method expect() untuk ekspetasi dan menggunakan method toBe() untuk mencocokan data dengan yang diharapkan dari hasil ekspetasi jika tidak cocok maka akan terdapat error di unit test
    expect(result).toBe(3);
})