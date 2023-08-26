import { singleton } from 'tsyringe';

import ObjectStore from './ObjectStore';

@singleton()
class CounterStore extends ObjectStore {
  count = 0;

  increase() {
    this.count += 1;
    this.publish();
  }

  decrease() {
    this.count -= 1;
    this.publish();
  }
}

export default CounterStore;
