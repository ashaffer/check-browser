# check-browser

Ultra-thin wrapper around bowser with simple declarative interface

## Usage

```javascript
var isSupported = require('check-browser')({
  msie: 7,
  chrome: 10,
  firefox: 3
});
```

Returns true if the browser version is >= the specified version.