import { callMe, myException } from "../src/exception.js"

test('exception', () => {
    // Wajib menggunakan closure function agar tidak langsung terjadi exceptionnya
    // Memastikan terjadi exception apapun
    expect(() => callMe("Talif")).toThrow();
    // Memastikan terjadi exception sesuai dengan expected exception
    expect(() => callMe("Talif")).toThrow(myException);
    // Memastikan terjadi exception sesuai dengan string message
    expect(() => callMe("Talif")).toThrow("Ups my exception happens");
})

test('exception not happens', () => {
    expect(callMe("Arif")).toBe('ok');
})