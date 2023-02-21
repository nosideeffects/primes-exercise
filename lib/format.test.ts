import {describe, expect, test} from '@jest/globals';
import {cell, row} from "./format";

describe('cell', () => {
   test('should left pad content smaller than width', () => {
       const small = '13';
       const width = 5;

       const formatted = cell(width, small);
       expect(formatted).toHaveLength(5);
       expect(formatted).toEqual('   13')
   });

   test('should not pad content as wide or wider than width', () => {
       const medium = '12769'
       const large = '15485863';
       const width = 5;

       const mediumFormatted = cell(width, medium);
       expect(mediumFormatted).toHaveLength(5);
       expect(mediumFormatted).toEqual(medium)

       const largeFormatted = cell(width, large);
       expect(largeFormatted).toHaveLength(large.length);
       expect(largeFormatted).toEqual(large);
   });
});

describe('cell', () => {
    test('should add left and right pipe borders', () => {
        const formatted = row(1, "1");

        expect(formatted.substring(0, 2)).toEqual("| ");
        expect(formatted.substring(formatted.length - 2, formatted.length)).toEqual(" |");
    });

    test('should separate items with a pipe', () => {
        const formatted = row(1, "1", "2", "3");

        expect(formatted).toEqual("| 1 | 2 | 3 |");
    });
});
