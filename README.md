# onroutechange
The polyfill enables you to listen to SPA's route change events via a customized `window.onroutechange` callback.

*(Similar to [`window.onhashchange`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange) API, but the customized callback is for `history.pushState`)*

## Usage

Step1. Include the following script tag:
```html
<script src="https://rawgit.com/ajhsu/onroutechange/master/dist/onroutechange.min.js"></script>
```

Step2. Register the `window.onroutechange` callback, for example:

```js
window.onroutechange = function(state) {
  console.log('Route updated!');
};
```

## License

DON'T BE A DICK PUBLIC LICENSE, see [LICENSE](https://github.com/ajhsu/onroutechange/blob/master/LICENSE) file for details.