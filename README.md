# Primes

Super simple command line utility to compute some number of primes, then display a data table of each of their multiples.

## Requirements

- Latest stable [Node.js](https://nodejs.org/en/)
- Latest stable [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## How to run

```
$ npm i                     // Install dependencies
$ npm run build             // Compile TypeScript
$ npm run primes <number>   // Run the utility with desired primes
```

Example:

```
$ npm run primes 5

> primes-exercise@1.0.0 primes
> node main.js 5

|     |   2 |   3 |   5 |   7 |  11 |
|   2 |   4 |   6 |  10 |  14 |  22 |
|   3 |   6 |   9 |  15 |  21 |  33 |
|   5 |  10 |  15 |  25 |  35 |  55 |
|   7 |  14 |  21 |  35 |  49 |  77 |
|  11 |  22 |  33 |  55 |  77 | 121 |
```
## Thoughts

Overall, the code was pretty straightforward to implement. It was interesting learning about the various sieve
algorithms for computing primes. If I had more time, or even just more familiarity with the current tools available
for snapshot testing, I would have used that to add tests around the formatting functionality. The current unit tests
for formatting are pretty silly.
