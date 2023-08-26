import { useEffect, useState, useRef } from 'react';
import { container } from 'tsyringe';

import useForceUpdate from './useForceUpdate';

import Store, { State } from '../stores/Store';

type Selector<T> = (state: State) => T;

function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  const state = useRef(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);
      if (newState !== state.current) {
        state.current = newState;
        forceUpdate();
      }
    };
    store.addListener(update);

    return () => {
      store.removeListener(update);
    };
  }, [store, forceUpdate]);

  return selector(store.state);
}

export default useSelector;
