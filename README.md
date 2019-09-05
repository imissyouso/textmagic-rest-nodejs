# TextMagic JavaScript SDK

JavaScript client for TextMagic API

For more information, please visit [https://www.textmagic.com/docs/api/](https://www.textmagic.com/docs/api/)

## Installation

```shell
npm install textmagic-client --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
    rules: [
        {
            parser: {
                amd: false
            }
        }
    ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TextMagicApi = require('textmagic-client');

var defaultClient = TextMagicApi.ApiClient.instance;

var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR_USERNAME';
BasicAuth.password = 'YOUR_PASSWORD';

var api = new TextMagicApi.TextMagicApi();

api.ping().then(function (data) {
    console.log(data);
}).catch(function(err){
    console.error(err);
});
```