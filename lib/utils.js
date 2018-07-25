function getWindowObject() {
  if (!window) throw new Error('Global `window` object cannot be found!');
  return window;
}

module.exports = {
  getWindowObject
};
