import {describe, expect, test} from '@jest/globals';
import {sieveOfEratosthenes} from "./primes";

describe('sieveOfEratosthenes', () => {
    test('computes primes < 10', () => {
        const primes = sieveOfEratosthenes(10);

        expect(primes).toHaveLength(5);
        expect(primes).toContain(1);
        expect(primes).toContain(2);
        expect(primes).toContain(3);
        expect(primes).toContain(5);
        expect(primes).toContain(7);
    });

    test('computes a large prime', () => {
        const primes = sieveOfEratosthenes(1_000_000);

        expect(primes).toContain(999983);
    })
});
