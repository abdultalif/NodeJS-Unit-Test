test('test to Be', () => {
    let name = 'Talif';
    let hallo = `Hello ${name}`;

    expect(hallo).toBe("Hello Talif");
});


test('test toEqual', () => {
    let person = { id: "Abdul" }
    Object.assign(person, { name: "Talif" });

    // kalo toEqual merupakan Matcher (pencocokan) yang digunakan untuk membandingkan apakah suatu nilai sama dengan value secara rekursif biasanya ini di gunakan untuk membandingkan object atau array
    expect(person).toEqual({ id: "Abdul", name: "Talif" });
})