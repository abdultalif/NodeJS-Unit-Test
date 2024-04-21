import { calculate, calculateAndReturn } from "../src/sum";

test('test calculate', () => {
    // jest.fn() ini digunakan untuk membuat mock function (fungsi tiruan)
    const callback = jest.fn();

    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);

    // memeriksa apakah mock function ini dipanggil 2 kali
    expect(callback.mock.calls.length).toBe(2);

    // console.info(callback.mock.results);
    // ini di buat untuk mencek daftar semua panggilan yang dijalankan oleh mock function
    console.info(callback.mock.calls);

    // memeriksa apakah mock function ini dipanggil dengan parameter 30
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
})


test('test mock return value', () => {
    const callback = jest.fn();
    // mockReturnValueOnce digunakan untuk menentukan return value mock function
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
    expect(calculateAndReturn([10, 10, 10], callback)).toBe(80);

    console.log(callback.mock.results);
    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(80);
});


test('test mock implementation', () => {
    const callback = jest.fn();
    // mockImplementation digunakan untuk menentukan implementasi mock function
    callback.mockImplementation(total => {
        return total * 2;
    })

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
    expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(80);
})