/**
 * TextMagic API Documentation
 * # Overview ## Introduction <img style=\"float: right; margin-left: 10px; width: 100px;\" src=\"images/phone.png\"> TextMagic SMS API is a platform for building your own messaging app using our messaging infrastructure. It allows you to send and receive SMS text messages, query information about inbound and outbound messages, manage contacts, create templates (i.e. message formats and static texts) and schedule recurrent SMS messages as well as process bulk SMS messages. <button name=\"button\" onclick=\"http://www.google.com\" class=\"btn\">Try TextMagic API for Free</button>  ### Two Ways to Use TextMagic API * [REST API](https://www.textmagic.com/docs/api/start/) – get full access to TextMagic’s messaging gateway features * [Email to SMS API](https://www.textmagic.com/docs/api/send-email-to-sms/) – set up two-way SMS communication without the need to write any additional code  ### Code Libraries We have created a set of client libraries for the most popular programming languages (such as REST API Java and REST API PHP). These libraries allow you to integrate our API into your code in minutes. Just choose your preferred language to get started:  ## Getting started Get Started with the TextMagic REST API To start sending text messages using the TextMagic REST API, just follow these steps: 1. Generate the API credentials 1. Connect to our API endpoint This page provides all the information you need to get started. Here, we explain the following steps:  How to obtain the API credentials The API endpoint How the REST API works The next step How to obtain the API credentials  ### How to obtain the API credentials To start sending text messages, you need to create an API key. API keys are similar to an account password; the difference is that an API key only provides access to the API: you cannot log in to TextMagic Online using the API key.  Your program sends the login credentials with each API request as HTTP headers: `X-TM-Username` is your TextMagic username, while `X-TM-Key` is your API key.  How to obtain an API key:  1. Log in to TextMagic (or start a free trial if you haven’t registered yet). 1. Go to the API settings page. 1. Click the Add new API key button. 1. Enter an app name for this key. Note, it’s just a label, so pick any name. 1. Click Generate new key. 1. You should now see your new API key in the green notification banner above the table:  ![alt text](images/credentials.png)  > Note for API v1 users > V1 keys are not compatible with the V2 version of the TextMagic REST API, so you will need to generate a new API key to use the V2 endpoint.  ### The API endpoint The TextMagic REST API endpoint is: ``` https://rest.textmagic.com/api/v2 ``` All the URLs referenced in this documentation should use this base URL.  ### How the REST API works REST APIs use the HTTP protocol to send and receive messages. REST messages are usually encoded as JSON documents and are an improvement over older methods such as the XML based SOAP protocol. REST APIs use the same set of methods that web browsers use: POST, GET, PUT or DELETE. These correspond to the CRUD operations: create, read, update and delete. Often, REST URIs provide direct CRUD access to entities or collections of entities, for example: http://api.foo.com/people. In this instance, to delete a person’s endpoint, you might simply call the endpoint DELETE http://api.foo.com/people/{id}. REST makes these types of operations simple.  > Example > > Let’s take the entity most often used in messaging: contacts. Imagine you want to perform operations on your contacts list: well, it’s only a matter of calling the following endpoints: > * GET /api/v2/contacts (get all of your contacts) > * GET /api/v2/contacts/{id} (get a specific contact) > * POST /api/v2/contacts (create a new contact) > * PUT /api/v2/contacts/{id} (update an existing contact) > * DELETE /api/v2/contacts/{id} (delete an existing contact) It’s that simple! In fact, that’s all you need to do to manage the contacts in your TextMagic account!  ## Sandbox Sandbox is a tool to test TextMagic REST API requests without the need to install any applications or write any code. Here, we explain the following details about Sandbox: * The credentials area * Command documentation * How it works  <a href=\"\">Go to TextMagic Sandbox</a>  ### The credentials area To make requests using your TextMagic account, you need to enter your account username and your API key into the corresponding fields. You may also Save them in your browser or press Clear to erase them.  ![alt text](images/sandbox.png) 
 *
 * OpenAPI spec version: 2
 * Contact: support@textmagi.biz
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.MessagingStatItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessagingStatItem model module.
   * @module model/MessagingStatItem
   * @version 2.0.320
   */

  /**
   * Constructs a new <code>MessagingStatItem</code>.
   * @alias module:model/MessagingStatItem
   * @class
   * @param replyRate {Number} 
   * @param _date {Date} 
   * @param deliveryRate {Number} 
   * @param costs {Number} 
   * @param messagesReceived {Number} 
   * @param messagesSentDelivered {Number} 
   * @param messagesSentAccepted {Number} 
   * @param messagesSentBuffered {Number} 
   * @param messagesSentFailed {Number} 
   * @param messagesSentRejected {Number} 
   * @param messagesSentParts {Number} 
   */
  var exports = function(replyRate, _date, deliveryRate, costs, messagesReceived, messagesSentDelivered, messagesSentAccepted, messagesSentBuffered, messagesSentFailed, messagesSentRejected, messagesSentParts) {
    var _this = this;

    _this['replyRate'] = replyRate;
    _this['date'] = _date;
    _this['deliveryRate'] = deliveryRate;
    _this['costs'] = costs;
    _this['messagesReceived'] = messagesReceived;
    _this['messagesSentDelivered'] = messagesSentDelivered;
    _this['messagesSentAccepted'] = messagesSentAccepted;
    _this['messagesSentBuffered'] = messagesSentBuffered;
    _this['messagesSentFailed'] = messagesSentFailed;
    _this['messagesSentRejected'] = messagesSentRejected;
    _this['messagesSentParts'] = messagesSentParts;
  };

  /**
   * Constructs a <code>MessagingStatItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagingStatItem} obj Optional instance to populate.
   * @return {module:model/MessagingStatItem} The populated <code>MessagingStatItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replyRate')) {
        obj['replyRate'] = ApiClient.convertToType(data['replyRate'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('deliveryRate')) {
        obj['deliveryRate'] = ApiClient.convertToType(data['deliveryRate'], 'Number');
      }
      if (data.hasOwnProperty('costs')) {
        obj['costs'] = ApiClient.convertToType(data['costs'], 'Number');
      }
      if (data.hasOwnProperty('messagesReceived')) {
        obj['messagesReceived'] = ApiClient.convertToType(data['messagesReceived'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentDelivered')) {
        obj['messagesSentDelivered'] = ApiClient.convertToType(data['messagesSentDelivered'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentAccepted')) {
        obj['messagesSentAccepted'] = ApiClient.convertToType(data['messagesSentAccepted'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentBuffered')) {
        obj['messagesSentBuffered'] = ApiClient.convertToType(data['messagesSentBuffered'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentFailed')) {
        obj['messagesSentFailed'] = ApiClient.convertToType(data['messagesSentFailed'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentRejected')) {
        obj['messagesSentRejected'] = ApiClient.convertToType(data['messagesSentRejected'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentParts')) {
        obj['messagesSentParts'] = ApiClient.convertToType(data['messagesSentParts'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} replyRate
   */
  exports.prototype['replyRate'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} deliveryRate
   */
  exports.prototype['deliveryRate'] = undefined;
  /**
   * @member {Number} costs
   */
  exports.prototype['costs'] = undefined;
  /**
   * @member {Number} messagesReceived
   */
  exports.prototype['messagesReceived'] = undefined;
  /**
   * @member {Number} messagesSentDelivered
   */
  exports.prototype['messagesSentDelivered'] = undefined;
  /**
   * @member {Number} messagesSentAccepted
   */
  exports.prototype['messagesSentAccepted'] = undefined;
  /**
   * @member {Number} messagesSentBuffered
   */
  exports.prototype['messagesSentBuffered'] = undefined;
  /**
   * @member {Number} messagesSentFailed
   */
  exports.prototype['messagesSentFailed'] = undefined;
  /**
   * @member {Number} messagesSentRejected
   */
  exports.prototype['messagesSentRejected'] = undefined;
  /**
   * @member {Number} messagesSentParts
   */
  exports.prototype['messagesSentParts'] = undefined;



  return exports;
}));


