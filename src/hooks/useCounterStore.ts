import { useEffect } from 'react';
import { container } from 'tsyringe';

import useForceUpdate from './useForceUpdate';

import CounterStore from '../stores/CounterStore';
import ObjectStore from '../stores/ObjectStore';

function useObjectStore<T extends ObjectStore>(store: T): T {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => {
      store.removeListener(forceUpdate);
    };
  }, [store, forceUpdate]);

  return store;
}

function useCounterStore() {
  const store = container.resolve(CounterStore);
  return useObjectStore(store);
}

export default useCounterStore;
