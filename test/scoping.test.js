beforeAll(() => console.log("Before All Outer"));
afterAll(() => console.log("After All Outer"));
beforeEach(() => console.log("Before Each Outer"));
afterEach(() => console.log("After Each Outer"));



test('test Outer', () => console.log('test outer'))



// describe berfungsi sebagai grouping 
describe('inner', () => {
    test('test Inner', () => console.log('test Inner'))
    beforeEach(() => console.log("Before Each Outer"));

    afterEach(() => console.log("After Each Outer"));

});
