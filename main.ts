import {generatePrimes} from "./lib/primes";
import {row} from "./lib/format";

(function () {
    const numberOfPrimes = process.argv[2];
    const number = parseInt(numberOfPrimes);

    if (isNaN(number)) {
        console.log("Valid integer required, but received: " + numberOfPrimes)
        process.exit(1);
    }

    const primes = generatePrimes(number);

    const largestPrime = primes[primes.length - 1];
    const largestNumber = largestPrime * largestPrime;
    const cellWidth = Math.max(largestNumber.toString(10).length, 4);

    // Header row
    console.log(row(cellWidth,
        " ", ...primes.map((prime) => prime.toString())));

    // Data rows
    for (let rowPrime of primes) {
        const products = primes.map((columnPrime) => (rowPrime * columnPrime).toString());
        console.log(row(cellWidth,
            rowPrime.toString(), ...products))
    }
})();