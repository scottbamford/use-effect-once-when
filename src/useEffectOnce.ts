import * as React from 'react';
import { useEffectOnceWhen } from './useEffectOnceWhen';

/**
 * React useEffect() that will run only once.
 * 
 * This is a convinence wrapper around useEffectOnceWhen() that passes true as the condition.  It doesn't really offer anything useEffect() doesn't.
 * 
 * @effect Effect function to run
 * @deps Dependencies for effect..
 */
export function useEffectOnce(effect: React.EffectCallback, deps?: React.DependencyList) {
    return useEffectOnceWhen(true, effect, deps);
}
