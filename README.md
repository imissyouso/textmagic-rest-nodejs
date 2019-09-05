# TextMagic JavaScript SDK

JavaScript client for TextMagic API

For detailed documentation, please visit [https://www.textmagic.com/docs/api/](https://www.textmagic.com/docs/api/)

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
const textmagicClient = require('textmagic-client');

let client = textmagicClient.ApiClient.instance;
let auth = client.authentications['BasicAuth'];

auth.username = 'YOUR_USERNAME';
auth.password = 'YOUR_PASSWORD';

let api = new textmagicClient.TextMagicApi();

api.sendMessage({
    'text': 'I love TextMagic!',
    'phones': '+12341234123'
}).then(function (data) {
    console.log(data);
}).catch(function(err){
    console.error(err);
});
```