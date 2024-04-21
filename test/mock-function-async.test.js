import { getBalance } from "../src/sum";

test('mock test function', async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000)

    await expect(getBalance("Talif", from)).resolves.toEqual({
        name: "Talif",
        balance: 1000
    })


    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000)
})


test.failing("mock async function rejecred", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Upss Error"));

    await getBalance("Talif", from);
})


test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Talif", from)).rejects.toBe("Rejected");
})