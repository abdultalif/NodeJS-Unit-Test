import { calculate } from "../src/sum";

test('test mock matchers', () => {
    const callback = jest.fn();

    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10,], callback);

    // memastiikan mock pernah di panggil
    expect(callback).toHaveBeenCalled();

    // memastikan mock pernah di panggil sebanyak number
    expect(callback).toHaveBeenCalledTimes(2);

    // memastikan mock pernah di panggil dengan paramater
    expect(callback).toHaveBeenCalledWith(30);
    expect(callback).toHaveBeenCalledWith(50);
})