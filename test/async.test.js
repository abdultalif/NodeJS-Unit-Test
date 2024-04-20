import { sayHelloAsync } from "../src/async.js";

test('async', async () => {
    // ini menggunakan async biasa
    const result = await sayHelloAsync("Talif");
    expect(result).toBe("Hello Talif");
})


test('async matcher', async () => {
    // ini menggunakan async versi matcher
    await expect(sayHelloAsync("Talif")).resolves.toBe("Hello Talif");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})