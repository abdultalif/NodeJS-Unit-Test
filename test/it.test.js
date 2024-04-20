import { sum, sumAll } from "../src/sum.js";


describe('when call sumAll()', () => {
    // it ini fungsi nya sama dengan method test yaitu membuat unit test    
    it('should get 30 with parameter [10, 10, 10]', () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });

    it('should get 10 with parameter 10, 10', () => {
        expect(sum(10, 10)).toBe(20);
    });

});
