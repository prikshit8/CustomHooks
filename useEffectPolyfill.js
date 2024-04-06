import {useRef} from 'react';

export const useEffectPolyfill = (effect, deps) => {
    const isFirstRender = useRef(true);
    // keeping it [] so that it handles only 1 render case
    const prevDeps = useRef([]);
    const cleanup = useRef(null);

    if(isFirstRender.current){
        isFirstRender.current = false;
        cleanup.current = effect();
    }
    else{
        // if deps exist then only we need to compare with prevDeps
        const shallItRerender = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;
        if(shallItRerender){
            if(cleanup.current && cleanup.current instanceof Function){
                cleanup();
            }
            cleanup.current = effect();
        }
    }
    prevDeps.current = deps;
    return;
};
