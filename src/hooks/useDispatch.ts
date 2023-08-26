import { container } from 'tsyringe';

import Store from '../stores/Store';
import { type Action } from '../stores/BaseStore';

function useDispatch<Payload>() {
  const store = container.resolve(Store);
  return (action: Action<Payload>) => store.dispatch(action);
}

export default useDispatch;
