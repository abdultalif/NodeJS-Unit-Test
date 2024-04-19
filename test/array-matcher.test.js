test('array simple', () => {
    const name = ["Abdul", "Talif", "Parinduri"];

    // toEqual : pencocokan array/object dari seluruh value jadi harus di cek semua isinya
    expect(name).toEqual(["Abdul", "Talif", "Parinduri"]);

    // toContain : pencocokan array/object dari salah satu value saja tidak semuanya tetapi array nya harus string jika array nya terdapat objek atau array lagi test nya menggunakan toContainEqual
    expect(name).toContain("Parinduri");
});




test('array obeject', () => {
    const Mahasiswa = [
        {
            nim: 12200767,
            name: "Abdul Talif"
        },
        {
            nim: 12200844,
            name: "Ryan fatturahman"
        },
    ]

    // ini pencocokan array/object dari salah satu value saja yang di dalam array nya terdapat objek bukan string biasanya menggunakan toContainEqual
    expect(Mahasiswa).toContainEqual({
        nim: 12200767,
        name: "Abdul Talif"
    })
})