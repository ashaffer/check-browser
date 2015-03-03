# check-browser

Ultra-thin wrapper around bowser with simple declarative interface

## Usage

check-browser takes a single argument, a map of browser names to minimum version numbers, and returns a boolean value indicating whether or not the current browser is equal to or greater than one of the allowed ones.  The browser names it uses are the same as [bowser's](ded/bowser) keys:

    * `chrome`
    * `safari`
    * `msie`
    * `opera`
    * `seamonkey`
    * `blackberry`
    * `bada`
    * `tizen`
    * `sailfish`
    * `android`
    * `windowsphone`
    * `ios` (`iphone` / `ipad` / `ipod`)
    * `firefoxos`
    * `webos'

(not all of these are browsers, I know, but they will all work)

You may also use the `others` property to toggle whitelist/blacklist behavior.  If `others` is true, browsers not explicitly listed will be considered valid.  `others` defaults to false.

check-browser is also forgiving about capitalization, chrome/Chrome/CHROME, are all acceptable.

## Examples

```javascript
require('check-browser')({
  msie: 7,
  chrome: 10,
  firefox: 3
});
```

```javascript
checkBrowser({chrome: 33}) // Returns false for Firefox
checkBrowser({chrome: 33, others: true}) // Returns true for Firefox
```