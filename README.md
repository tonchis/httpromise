HTTPromise
==========

Small, silly library to make `XMLHttpRequest`s with a JavaScript `Promise`.

Usage
-----

```javascript
var httpromise = new HTTPromise({
  method: "GET",
  url: "/some/path",
  headers: {
    "Content-Type": "application/awesome"
  },
  data: JSON.stringify({some: "param"}),
  resolve: function(data) {
    // function called when using resolve.
    // It recieves request.responseText as a single argument.
    JSON.parse(data);
  },
  reject: function(error) {
    // function called when using reject. It recieves a single argument.
    // It recieves request.responseText as a single argument.
    alert(JSON.parse(error));
  }
});
```

The `resolve` function will be called in the `request.onload` callback if the status is 200.
The `reject` function will be called in the `request.onerror` and in `onload` if the status isn't 200.

