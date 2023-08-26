import { singleton } from 'tsyringe';

import BaseStore, { Action } from './BaseStore';

const initialState = {
  count: 0,
  name: '',
};

export type State = typeof initialState;

const reducers: Record<string, (state: State, action: Action<number>) => State> = {
  increase(state: State, action: Action<number>): State {
    return {
      ...state,
      count: state.count + (action.payload ?? 1),
    };
  },
  decrease(state: State, action: Action<number>): State {
    return {
      ...state,
      count: state.count - (action.payload ?? 1),
    };
  },
};

export function increase(step?: number) {
  return { type: 'increase', payload: step };
}

export function decrease(step?: number) {
  return { type: 'decrease', payload: step };
}

@singleton()
class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}

export default Store;
