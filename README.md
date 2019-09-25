# TextMagic JavaScript SDK
This library provides you with an easy solution to send SMS and receive replies by integrating TextMagic SMS Gateway to your JavaScript application.

## What is TextMagic?
TextMagic's application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.

For detailed documentation and more examples, please visit [http://docs.textmagictesting.com/](http://docs.textmagictesting.com/)

## Installation

```shell
npm install textmagic-client@2.0.396 --save
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

## Usage Example

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const textmagicClient = require('textmagic-client');

const fs = require('fs');
const client = textmagicClient.ApiClient.instance;
const auth = client.authentications['BasicAuth'];

auth.username = 'YOUR_USERNAME';
auth.password = 'YOUR_PASSWORD';

const api = new textmagicClient.TextMagicApi();

// Simple ping request example
api.ping().then(function (data) {
    console.log(data.ping);
}).catch(function(err){
    console.error(err);
});

// Send a new message request example
api.sendMessage({
    'text': 'I love TextMagic!',
    'phones': '+12341234123'
}).then(function (data) {
    console.log(data.id);
}).catch(function(err){
    console.error(err);
});

// Get all outgoing messages request example
api.getAllOutboundMessages({
    'page': 1,
    'limit': 200
}).then(function (data) {
    console.log(data.resources[0].text);
}).catch(function(err){
    console.error(err);
});

// Upload new avatar for contacts list (group) with Id 3223 example
let stream = new fs.ReadStream('test.jpg');
api.uploadListAvatar(stream, 3223).then(function (data) {
    console.log(data.id);
}).catch(function(err){
    console.error(err);
});
```

## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).