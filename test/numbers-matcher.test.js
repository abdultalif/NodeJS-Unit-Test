// toBeGreaterThan : Memastikan value lebih besar dari n
// toBeGreaterThanOrEqual : Memastikan value lebih besar dari atau sama dengan n
// toBeLessThan : Memastikan value lebih kecil dari n
// toBeLessThanOrEqual : Memastikan value lebih kecil dari atau sama dengan n
// toBe : Memastikan value sama dengan n



test('number matcher', () => {
    const value = 2 + 2;

    // Memastikan toBeGreaterThan tidak boleh lebih besar dari 3
    expect(value).toBeGreaterThan(3);


    // Memastikan toBeGreaterThanOrEqual tidak boleh lebih besar dari 4
    expect(value).toBeGreaterThanOrEqual(4);


    // Memastikan toBeLessThan tidak boleh lebih kecil dari 5
    expect(value).toBeLessThan(5);


    // Memastikan toBeLessThanOrEqual tidak boleh lebih kecil dari 4
    expect(value).toBeLessThanOrEqual(4);


    // Memastikan toBe wajib sama dengan 4 karena value 2 + 2 = 4
    expect(value).toBe(4)
})