import { sayHello } from "../src/sayHello.js"

test('sayHello success', () => {
    expect(sayHello("Talif")).toBe("Hai Talif");
});

// method failing digunakan untuk skenario gagal, jadi jika menggunakan method tersebut jika gagal maka akan tetap sukses di unit test nya
test.failing("sayHello error", () => {
    sayHello()
})