# onroutechange
The polyfill enables you to listen to route changes by customized `window.onroutechange` callback.

It's quite similar to [`window.onhashchange`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange) API, but for `history.pushState`. Could be useful for single-page applications.

## Usage

Step1. Insert the following script tag into your webpage:
```html
<script src="https://unpkg.com/onroutechange/dist/onroutechange.min.js"></script>
```

Step2. Register the `window.onroutechange` callback, for example:

```js
window.onroutechange = function(state) {
  console.log('Route updated!');
};
```

## License

MIT