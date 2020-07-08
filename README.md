# use-effect-once-when
React useEffect() that waits for a condition to be met, then runs only once.

## Installation

Install use-effect-once-when locally within your project folder, like so:

```shell
npm install use-effect-once-when
```

Or with yarn:

```shell
yarn add use-effect-once-when
```

## Basic Usage

You can use this hook as an alternative to useEffect() when you want the effect to be run only once.

useEffectOnceWhen() will wait for a condition to be met, and then will run the effect only once.
useEffectOnce() will run once on first render only without waiting for any condition to be met.

### Typescript
```ts
import { useEffectOnceWhen } from 'use-effect-once-when';

useEffectOnceWhen(
    dataHasLoaded,
    () => {
        // Do something with data
    },
    []);

```

### Javascript
```js
import { useEffectOnceWhen } from 'use-effect-once-when';

useEffectOnceWhen(
    dataHasLoaded,
    () => {
        // Do something with data
    },
    []);

```

## Typescript
This package is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
