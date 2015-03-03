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

Returns true if the browser version is >= the specified version.  You may also use the `others` property to toggle whitelist/blacklist behavior.  E.g.

```javascript
checkBrowser({chrome: 33}) // Returns false for Firefox
checkBrowser({chrome: 33, others: true}) // Returns true for Firefox
```