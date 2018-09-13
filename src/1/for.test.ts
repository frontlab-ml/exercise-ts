import { grid } from "./for";

describe('1', () => {
    it('base', () => {
        expect(grid(4, 4)).toEqual([
            '*...',
            '.*..',
            '..*.',
            '...*',
        ]);
        expect(grid(5, 5)).toEqual([
            '*....',
            '.*...',
            '..*..',
            '...*.',
            '....*',
        ]);
        expect(grid(6, 5)).toEqual([
            '*....',
            '.*...',
            '..*..',
            '...*.',
            '....*',
            '.....',
        ]);
    })
})