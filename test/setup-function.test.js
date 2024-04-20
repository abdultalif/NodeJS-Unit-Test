import { sum } from "../src/sum.js";

// method beforeEach akan di eksekusi sebelum unit test berjalan misal ada 5 unit test di file ini maka beforeEach akan berjalan 5 kali sebelum unit test dijalankan
// jika ingin hanya berjalan sekali saja sebelum di unit test di jalankan ganti method nya menjadi beforeAll
beforeEach(() => {
    console.log("Before Each");
});


// method afterEach akan di eksekusi setelah unit test berjalan misal ada 5 unit test di file ini maka after Each akan berjalan 5 kali setelah unit test
// jika ingin hanya berjalan sekali saja setelah unit test di jalankan ganti method nya menjadi afterAll
afterEach(() => {
    console.log("After Each");
});




test('first test', () => {
    expect(sum(5, 5)).toBe(10);
    console.log("First test");
})

test('second test', () => {
    expect(sum(5, 5)).toBe(10);
    console.log("Second test");
})