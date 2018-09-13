import { processFn1, processFn2, processFn3 } from "./3";

describe('3', () => {
    it('basic', () => {

        expect(
            processFn1([1,2,3,4,5,6,7,8,9])
        ).toEqual(
            [7,8,9]
        );

        expect(
            processFn2([7,8,9])
        ).toEqual(
            [14, 15, 16]
        );

        expect(
            processFn3(['aa', 'bb', 'cc', 4, 5, 6, 'ggg'])
        ).toEqual(
            ['aa', 'bb', 'cc', 'ggg']
        );
    });
})