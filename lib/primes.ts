
/**
 * Produce primes < n using the Sieve of Eratosthenes
 *
 * Wiki: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 *
 * @param n Upper bound for prime value
 * @returns {*[]}
 */
export function sieveOfEratosthenes(n: number): number[] {
    const isPrime = (new Uint8Array(n)).fill(1);
    const sqrtN = Math.sqrt(n);

    for (let i = 2; i < sqrtN; i++) {
        if (isPrime[i] === 1) {
            let j = Math.pow(i, 2);
            while (j <= n) {
                isPrime[j] = 0;
                j = j + i;
            }
        }
    }

    return isPrime.reduce((primes, primeness, number) => {
        if (primeness === 1) {
            primes.push(number);
        }

        return primes;
    }, [] as number[]);
}
