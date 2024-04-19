test('string matcher', () => {
    const name = "Abdul Talif Parinduri"

    expect(name).toBe("Abdul Talif Parinduri");

    // Memastikan regex string 'alif' ada di dalam name 
    expect(name).toMatch(/alif/);
})