test('truthiness', () => {
    let value = null;
    expect(value).toBeNull(); // Memastikan value adalah null
    expect(value).toBeDefined(); // Memastikan value adalah bukan undifined
    expect(value).toBeFalsy(); // Memastikan value adalah false jika di dalam if stastement karena null bukan true

    value = undefined;
    expect(value).toBeUndefined(); // Memastikan value adalah undefined
    expect(value).toBeFalsy(); // Memastikan value adalah false jika di dalam if stastement karena undifine bukan true


    value = "Talif";
    expect(value).toBeTruthy(); // Memastikan value adalah true jika di dalam if stastement karena string bukan false melainkan true
});

