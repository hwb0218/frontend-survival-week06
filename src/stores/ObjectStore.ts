type Listener = () => void;

class ObjectStore {
  count = 0;

  private listeners = new Set<Listener>();

  addListener(listener: Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener) {
    this.listeners.delete(listener);
  }

  protected publish() {
    this.listeners.forEach((listener) => listener());
  }
}

export default ObjectStore;
