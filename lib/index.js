//@ts-check
const hijackPushStateAPI = require('./hijack-pushstate');
const { getWindowObject } = require('./utils');

function main(windowObject) {
  hijackPushStateAPI(windowObject, {
    getBeforeCallback,
    getAfterCallback
  });
}

function getBeforeCallback() {
  return [
    function(state) {
      console.log('before!', state);
    }
  ];
}

function getAfterCallback() {
  return [
    function(state) {
      console.log('after!', state);
    },
    getOnRouteChangeCallbackFromWindow(getWindowObject())
  ];
}

function getOnRouteChangeCallbackFromWindow(windowObject) {
  return windowObject.onroutechange;
}

module.exports = main;
