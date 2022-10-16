import {
    isLife,
    gameOfLife,
    searchNeighbours,
    newBorn
} from './gameOfLife.js';

describe('testing searchNeighbours', () => {
    test('If ejeX = 1, ejeY = 1, result should be 2', () => {
        expect(searchNeighbours(1, 1)).toBe(2);
    });
    test('If ejeX = 1, ejeY = 2, result should be 3', () => {
        expect(searchNeighbours(1, 2)).toBe(3);
    });
    test('If ejeX = 1, ejeY = 3, result should be 2', () => {
        expect(searchNeighbours(1, 3)).toBe(2);
    });
    test('If ejeX = 2, ejeY = 1, result should be 2', () => {
        expect(searchNeighbours(2, 1)).toBe(2);
    });
    test('If ejeX = 2, ejeY = 2, result should be 3', () => {
        expect(searchNeighbours(2, 2)).toBe(3);
    });
    test('If ejeX = 2, ejeY = 3, result should be 2', () => {
        expect(searchNeighbours(2, 3)).toBe(2);
    });
    test('If ejeX = 3, ejeY = 2, result should be 3', () => {
        expect(searchNeighbours(3, 2)).toBe(3);
    });
    test('If ejeX = 0, ejeY = 0, result should be 0', () => {
        expect(searchNeighbours(0, 0)).toBe(0);
    });
    test('If ejeX = -1, ejeY = -1, result should be 0', () => {
        expect(searchNeighbours(-1, -1)).toBe(0);
    });
});

describe('testing gameOfLife', () => {
    test('If arrayLife is [[1, 2],[2, 2],[3, 2]], result should be undefined', () => {
        const arrayLife = [
            [1, 2],
            [2, 2],
            [3, 2],
        ];
        expect(gameOfLife(arrayLife)).toBe(undefined);
    });
});

describe('testing newBorn', () => {
    test('If ejeX = 2, ejeY = 2, result should be [[1, 2], [3, 2]]', () => {
        expect(newBorn(2, 2)).toStrictEqual([
            [1, 2],
            [3, 1],
            [3, 3],
        ]);
    });
    test('If ejeX = -1, ejeY = -1, result should be []', () => {
        expect(newBorn(-1, -1)).toEqual([]);
    });
});

describe('testing isLife', () => {
    test('If isLive is [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],]; array result should be [[2, 1],[2, 2],[2, 3]]', () => {
        const array = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        expect(isLive(array)).toStrictEqual([
            [2, 1],
            [2, 2],
            [2, 3],
        ]);
    });
    test('If isLife is [[0, 0, 0, 0, 0],[0, 0, 1, 0, 0],[0, 0, 1, 0, 0],[0, 0, 1, 0, 0],[0, 0, 0, 0, 0],] array result should be [[1, 2],[2, 2],[3, 2]]', () => {
        const array = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        expect(isLife(array)).toStrictEqual([
            [1, 2],
            [2, 2],
            [3, 2],
        ]);
    });
});
