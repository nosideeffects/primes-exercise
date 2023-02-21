import {describe, expect, test} from '@jest/globals';
import {generatePrimes, sieveOfEratosthenes} from "./primes";

describe('sieveOfEratosthenes', () => {
    test('computes primes < 10', () => {
        const primes = sieveOfEratosthenes(10).primes;

        expect(primes).toHaveLength(4);
        expect(primes).toContain(2);
        expect(primes).toContain(3);
        expect(primes).toContain(5);
        expect(primes).toContain(7);
    });

    test('computes a large prime', () => {
        const primes = sieveOfEratosthenes(1_000_000).primes;

        expect(primes).toContain(999983);
    })
});

const PRIME_ONE_MILLION = 15485863;
describe('generatePrimes', () => {
   test('can generate one million primes', () => {
       const primes = generatePrimes(1_000_000);

       expect(primes).toHaveLength(1_000_000);
       expect(primes).toContain(PRIME_ONE_MILLION);
   })
});
