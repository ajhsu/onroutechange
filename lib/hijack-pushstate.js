/**
 * Hijack and replace `window.history.pushState` with a customized version.
 * @param {Window} windowObject
 * @param {Object} Callback
 * @param {Function} [Callback.getBeforeCallback]
 * @param {Function} [Callback.getAfterCallback]
 */
function hijackPushStateAPI(
  windowObject,
  { getBeforeCallback, getAfterCallback }
) {
  // Do nothing if callbacks were not assigned.
  if (
    typeof getBeforeCallback !== 'function' &&
    typeof getAfterCallback !== 'function'
  ) {
    return;
  }

  const originalPushState = windowObject.history.pushState;
  windowObject.history.pushState = function (state, title, url) {
    invokeCallbacks(getBeforeCallback, { state, title, url });

    const executedResult = originalPushState.apply(
      windowObject.history,
      arguments
    );

    invokeCallbacks(getAfterCallback, { state, title, url });

    return executedResult;
  };
}

function invokeCallbacks(getCallback, pushStateParams) {
  if (typeof getCallback !== 'function') return;
  let callbacks = getCallback();
  if (callbacks.length <= 0) return;

  callbacks.forEach(function (callback) {
    if (typeof callback === 'function') {
      callback.call(null, pushStateParams);
    }
  });
}

module.exports = hijackPushStateAPI;
