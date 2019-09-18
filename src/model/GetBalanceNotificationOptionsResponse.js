/**
 * TextMagic API Documentation
 * # Overview ## Introduction 22 <img style=\"float: right; margin-left: 10px; width: 100px;\" src=\"images/phone.png\"> TextMagic SMS API is a platform for building your own messaging app using our messaging infrastructure. It allows you to send and receive SMS text messages, query information about inbound and outbound messages, manage contacts, create templates (i.e. message formats and static texts) and schedule recurrent SMS messages as well as process bulk SMS messages. <button name=\"button\" onclick=\"http://www.google.com\" class=\"btn\">Try TextMagic API for Free</button>  ### Two Ways to Use TextMagic API * [REST API](https://www.textmagic.com/docs/api/start/) – get full access to TextMagic’s messaging gateway features * [Email to SMS API](https://www.textmagic.com/docs/api/send-email-to-sms/) – set up two-way SMS communication without the need to write any additional code  ### Code Libraries We have created a set of client libraries for the most popular programming languages (such as REST API Java and REST API PHP). These libraries allow you to integrate our API into your code in minutes. Just choose your preferred language to get started:  ## Getting started Get Started with the TextMagic REST API To start sending text messages using the TextMagic REST API, just follow these steps: 1. Generate the API credentials 1. Connect to our API endpoint This page provides all the information you need to get started. Here, we explain the following steps:  How to obtain the API credentials The API endpoint How the REST API works The next step How to obtain the API credentials  ### How to obtain the API credentials To start sending text messages, you need to create an API key. API keys are similar to an account password; the difference is that an API key only provides access to the API: you cannot log in to TextMagic Online using the API key.  Your program sends the login credentials with each API request as HTTP headers: `X-TM-Username` is your TextMagic username, while `X-TM-Key` is your API key.  How to obtain an API key:  1. Log in to TextMagic (or start a free trial if you haven’t registered yet). 1. Go to the API settings page. 1. Click the Add new API key button. 1. Enter an app name for this key. Note, it’s just a label, so pick any name. 1. Click Generate new key. 1. You should now see your new API key in the green notification banner above the table:  ![alt text](images/credentials.png)  > Note for API v1 users > V1 keys are not compatible with the V2 version of the TextMagic REST API, so you will need to generate a new API key to use the V2 endpoint.  ### The API endpoint The TextMagic REST API endpoint is: ``` https://rest.textmagic.com/api/v2 ``` All the URLs referenced in this documentation should use this base URL.  ### How the REST API works REST APIs use the HTTP protocol to send and receive messages. REST messages are usually encoded as JSON documents and are an improvement over older methods such as the XML based SOAP protocol. REST APIs use the same set of methods that web browsers use: POST, GET, PUT or DELETE. These correspond to the CRUD operations: create, read, update and delete. Often, REST URIs provide direct CRUD access to entities or collections of entities, for example: http://api.foo.com/people. In this instance, to delete a person’s endpoint, you might simply call the endpoint DELETE http://api.foo.com/people/{id}. REST makes these types of operations simple.  > Example > > Let’s take the entity most often used in messaging: contacts. Imagine you want to perform operations on your contacts list: well, it’s only a matter of calling the following endpoints: > * GET /api/v2/contacts (get all of your contacts) > * GET /api/v2/contacts/{id} (get a specific contact) > * POST /api/v2/contacts (create a new contact) > * PUT /api/v2/contacts/{id} (update an existing contact) > * DELETE /api/v2/contacts/{id} (delete an existing contact) It’s that simple! In fact, that’s all you need to do to manage the contacts in your TextMagic account!  ## Sandbox Sandbox is a tool to test TextMagic REST API requests without the need to install any applications or write any code. Here, we explain the following details about Sandbox: * The credentials area * Command documentation * How it works  <a href=\"\">Go to TextMagic Sandbox</a>  ### The credentials area To make requests using your TextMagic account, you need to enter your account username and your API key into the corresponding fields. You may also Save them in your browser or press Clear to erase them.  ![alt text](images/sandbox.png) 
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
    root.TextmagicClient.GetBalanceNotificationOptionsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetBalanceNotificationOptionsResponse model module.
   * @module model/GetBalanceNotificationOptionsResponse
   * @version 2.0.298
   */

  /**
   * Constructs a new <code>GetBalanceNotificationOptionsResponse</code>.
   * @alias module:model/GetBalanceNotificationOptionsResponse
   * @class
   * @param _1 {String} Contains sign of currency in Unicode hex code
   * @param _2 {String} Contains sign of currency in Unicode hex code
   * @param _3 {String} Contains sign of currency in Unicode hex code
   * @param _5 {String} Contains sign of currency in Unicode hex code
   * @param _10 {String} Contains sign of currency in Unicode hex code
   * @param _20 {String} Contains sign of currency in Unicode hex code
   * @param _30 {String} Contains sign of currency in Unicode hex code
   * @param _50 {String} Contains sign of currency in Unicode hex code
   * @param _100 {String} Contains sign of currency in Unicode hex code
   * @param _500 {String} Contains sign of currency in Unicode hex code
   * @param _1000 {String} Contains sign of currency in Unicode hex code
   */
  var exports = function(_1, _2, _3, _5, _10, _20, _30, _50, _100, _500, _1000) {
    var _this = this;

    _this['1'] = _1;
    _this['2'] = _2;
    _this['3'] = _3;
    _this['5'] = _5;
    _this['10'] = _10;
    _this['20'] = _20;
    _this['30'] = _30;
    _this['50'] = _50;
    _this['100'] = _100;
    _this['500'] = _500;
    _this['1000'] = _1000;
  };

  /**
   * Constructs a <code>GetBalanceNotificationOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBalanceNotificationOptionsResponse} obj Optional instance to populate.
   * @return {module:model/GetBalanceNotificationOptionsResponse} The populated <code>GetBalanceNotificationOptionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('1')) {
        obj['1'] = ApiClient.convertToType(data['1'], 'String');
      }
      if (data.hasOwnProperty('2')) {
        obj['2'] = ApiClient.convertToType(data['2'], 'String');
      }
      if (data.hasOwnProperty('3')) {
        obj['3'] = ApiClient.convertToType(data['3'], 'String');
      }
      if (data.hasOwnProperty('5')) {
        obj['5'] = ApiClient.convertToType(data['5'], 'String');
      }
      if (data.hasOwnProperty('10')) {
        obj['10'] = ApiClient.convertToType(data['10'], 'String');
      }
      if (data.hasOwnProperty('20')) {
        obj['20'] = ApiClient.convertToType(data['20'], 'String');
      }
      if (data.hasOwnProperty('30')) {
        obj['30'] = ApiClient.convertToType(data['30'], 'String');
      }
      if (data.hasOwnProperty('50')) {
        obj['50'] = ApiClient.convertToType(data['50'], 'String');
      }
      if (data.hasOwnProperty('100')) {
        obj['100'] = ApiClient.convertToType(data['100'], 'String');
      }
      if (data.hasOwnProperty('500')) {
        obj['500'] = ApiClient.convertToType(data['500'], 'String');
      }
      if (data.hasOwnProperty('1000')) {
        obj['1000'] = ApiClient.convertToType(data['1000'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 1
   */
  exports.prototype['1'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 2
   */
  exports.prototype['2'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 3
   */
  exports.prototype['3'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 5
   */
  exports.prototype['5'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 10
   */
  exports.prototype['10'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 20
   */
  exports.prototype['20'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 30
   */
  exports.prototype['30'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 50
   */
  exports.prototype['50'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 100
   */
  exports.prototype['100'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 500
   */
  exports.prototype['500'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code
   * @member {String} 1000
   */
  exports.prototype['1000'] = undefined;



  return exports;
}));


