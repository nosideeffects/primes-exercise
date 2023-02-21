
// Produce primes < n
function sieveOfEratosthenes(n) {
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
    }, []);
}

console.log("hello");

console.log(sieveOfEratosthenes(10));
