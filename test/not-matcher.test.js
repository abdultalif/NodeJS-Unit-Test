// not berungsi untuk kebalikan di matcher 
// contoh toBe adalah sama dengan jika menggunakan not maka bukan sama dengan lagi

test('not string', () => {
    const name = "Abdul Talif Parinduri"
    expect(name).not.toBe("Abdul Talif")
})


test('not number', () => {
    const value = 2 + 2;

    // Memastikan toBeGreaterThan boleh lebih besar dari 3 karena menggunakan not
    expect(value).not.toBeGreaterThan(6);


    // Memastikan toBeGreaterThanOrEqual boleh lebih besar dari 4 karena menggunakan not
    expect(value).not.toBeGreaterThanOrEqual(6);
})