[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/finance-factors.svg)](https://badge.fury.io/js/finance-factors)
[![Build Status](https://travis-ci.org/diegofigs/finance-factors.svg?branch=master)](https://travis-ci.org/diegofigs/finance-factors)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

# finance-factors

A Node.js package for calculation of basic financial factors.

## Usage

First, install the package using npm:
```
npm install finance-factors --save
```
Then, require the package and use it like so:
```
// RequireJS
var financeFactors = require('finance-factors');

// ES6
import * as financeFactors from 'finance-factors';

// Present Worth Factor based on Single Payment
// with a 5% interest from 12 periods
console.log(financeFactors.singlePW(5, 12));

// Future Worth Factor based on Single Payment
// with a 5% interest over 12 periods
console.log(financeFactors.singleFW(5, 12));
```

## License

This library is licensed under MIT.