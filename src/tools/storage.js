let storage = {
  get(key) {
    return window.sessionStorage.getItem(key);
  },
  set(key, val) {
    window.sessionStorage.setItem(
      key,
      typeof val !== "string" ? JSON.stringify(val) : val
    );
  },
  delete(key) {
    window.sessionStorage.removeItem(key);
  },
  clean() {
    window.sessionStorage.clear();
  }
};
export default storage;