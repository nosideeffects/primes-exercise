
/**
 * Produce primes < n using the Sieve of Eratosthenes
 *
 * Wiki: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 *
 * @param n Upper bound for prime value
 * @param previousSieve Resulting sieve from previous run, to save some work
 * @returns {*[]}
 */
export function sieveOfEratosthenes(n: number, previousSieve?: Uint8Array): SieveResult {
    const isPrime = (new Uint8Array(n)).fill(1);
    if (previousSieve) {
        previousSieve.forEach((v, i) => {
            isPrime[i] = v;
        });
    }
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

    return {
        sieveArray: isPrime,
        primes: isPrime.reduce((primes, primeness, number) => {
            if (primeness === 1) {
                primes.push(number);
            }

            return primes;
        }, [] as number[]).slice(2) // chop 0 and 1
    };
}

export function generatePrimes(n: number): number[] {
    let bound = n * 14;
    let sieve = undefined;
    let primes = [];
    do {
        const sieveResult = sieveOfEratosthenes(bound, sieve);
        sieve = sieveResult.sieveArray;
        primes = sieveResult.primes;
        bound *= 2;
    } while (primes.length < n)

    return primes.slice(0, n);
}

export type SieveResult = {
    sieveArray: Uint8Array
    primes: number[]
}
