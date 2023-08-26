import { useEffect } from 'react';
import { container } from 'tsyringe';

import useForceUpdate from './useForceUpdate';

import Store from '../stores/Store';

function useStore() {
  const store = container.resolve(Store);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => {
      store.removeListener(forceUpdate);
    };
  }, [store, forceUpdate]);

  return store;
}

export default useStore;
