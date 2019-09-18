/**
 * TextMagic API Documentation
 * # Overview ## Introduction         test <img style=\"float: right; margin-left: 10px; width: 100px;\" src=\"images/phone.png\"> TextMagic SMS API is a platform for building your own messaging app using our messaging infrastructure. It allows you to send and receive SMS text messages, query information about inbound and outbound messages, manage contacts, create templates (i.e. message formats and static texts) and schedule recurrent SMS messages as well as process bulk SMS messages. <button name=\"button\" onclick=\"http://www.google.com\" class=\"btn\">Try TextMagic API for Free</button>  ### Two Ways to Use TextMagic API * [REST API](https://www.textmagic.com/docs/api/start/) – get full access to TextMagic’s messaging gateway features * [Email to SMS API](https://www.textmagic.com/docs/api/send-email-to-sms/) – set up two-way SMS communication without the need to write any additional code  ### Code Libraries We have created a set of client libraries for the most popular programming languages (such as REST API Java and REST API PHP). These libraries allow you to integrate our API into your code in minutes. Just choose your preferred language to get started:  ## Getting started Get Started with the TextMagic REST API To start sending text messages using the TextMagic REST API, just follow these steps: 1. Generate the API credentials 1. Connect to our API endpoint This page provides all the information you need to get started. Here, we explain the following steps:  How to obtain the API credentials The API endpoint How the REST API works The next step How to obtain the API credentials  ### How to obtain the API credentials To start sending text messages, you need to create an API key. API keys are similar to an account password; the difference is that an API key only provides access to the API: you cannot log in to TextMagic Online using the API key.  Your program sends the login credentials with each API request as HTTP headers: `X-TM-Username` is your TextMagic username, while `X-TM-Key` is your API key.  How to obtain an API key:  1. Log in to TextMagic (or start a free trial if you haven’t registered yet). 1. Go to the API settings page. 1. Click the Add new API key button. 1. Enter an app name for this key. Note, it’s just a label, so pick any name. 1. Click Generate new key. 1. You should now see your new API key in the green notification banner above the table:  ![alt text](images/credentials.png)  > Note for API v1 users > V1 keys are not compatible with the V2 version of the TextMagic REST API, so you will need to generate a new API key to use the V2 endpoint.  ### The API endpoint The TextMagic REST API endpoint is: ``` https://rest.textmagic.com/api/v2 ``` All the URLs referenced in this documentation should use this base URL.  ### How the REST API works REST APIs use the HTTP protocol to send and receive messages. REST messages are usually encoded as JSON documents and are an improvement over older methods such as the XML based SOAP protocol. REST APIs use the same set of methods that web browsers use: POST, GET, PUT or DELETE. These correspond to the CRUD operations: create, read, update and delete. Often, REST URIs provide direct CRUD access to entities or collections of entities, for example: http://api.foo.com/people. In this instance, to delete a person’s endpoint, you might simply call the endpoint DELETE http://api.foo.com/people/{id}. REST makes these types of operations simple.  > Example > > Let’s take the entity most often used in messaging: contacts. Imagine you want to perform operations on your contacts list: well, it’s only a matter of calling the following endpoints: > * GET /api/v2/contacts (get all of your contacts) > * GET /api/v2/contacts/{id} (get a specific contact) > * POST /api/v2/contacts (create a new contact) > * PUT /api/v2/contacts/{id} (update an existing contact) > * DELETE /api/v2/contacts/{id} (delete an existing contact) It’s that simple! In fact, that’s all you need to do to manage the contacts in your TextMagic account!  ## Sandbox Sandbox is a tool to test TextMagic REST API requests without the need to install any applications or write any code. Here, we explain the following details about Sandbox: * The credentials area * Command documentation * How it works  <a href=\"\">Go to TextMagic Sandbox</a>  ### The credentials area To make requests using your TextMagic account, you need to enter your account username and your API key into the corresponding fields. You may also Save them in your browser or press Clear to erase them.  ![alt text](images/sandbox.png) 
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
    root.TextmagicClient.SendMessageInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendMessageInputObject model module.
   * @module model/SendMessageInputObject
   * @version 2.0.281
   */

  /**
   * Constructs a new <code>SendMessageInputObject</code>.
   * @alias module:model/SendMessageInputObject
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>SendMessageInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendMessageInputObject} obj Optional instance to populate.
   * @return {module:model/SendMessageInputObject} The populated <code>SendMessageInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
      }
      if (data.hasOwnProperty('sendingTime')) {
        obj['sendingTime'] = ApiClient.convertToType(data['sendingTime'], 'Number');
      }
      if (data.hasOwnProperty('sendingDateTime')) {
        obj['sendingDateTime'] = ApiClient.convertToType(data['sendingDateTime'], 'String');
      }
      if (data.hasOwnProperty('sendingTimezone')) {
        obj['sendingTimezone'] = ApiClient.convertToType(data['sendingTimezone'], 'String');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'String');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], 'String');
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], 'String');
      }
      if (data.hasOwnProperty('cutExtra')) {
        obj['cutExtra'] = ApiClient.convertToType(data['cutExtra'], 'Boolean');
      }
      if (data.hasOwnProperty('partsCount')) {
        obj['partsCount'] = ApiClient.convertToType(data['partsCount'], 'Number');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Number');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
      }
      if (data.hasOwnProperty('createChat')) {
        obj['createChat'] = ApiClient.convertToType(data['createChat'], 'Boolean');
      }
      if (data.hasOwnProperty('tts')) {
        obj['tts'] = ApiClient.convertToType(data['tts'], 'Boolean');
      }
      if (data.hasOwnProperty('local')) {
        obj['local'] = ApiClient.convertToType(data['local'], 'Boolean');
      }
      if (data.hasOwnProperty('localCountry')) {
        obj['localCountry'] = ApiClient.convertToType(data['localCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * Message text. Required if template_id is not set
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Template used instead of message text. Required if text is not set
   * @member {Number} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now
   * @member {Number} sendingTime
   */
  exports.prototype['sendingTime'] = undefined;
  /**
   * Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to sendingTimezone
   * @member {String} sendingDateTime
   */
  exports.prototype['sendingDateTime'] = undefined;
  /**
   * ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone
   * @member {String} sendingTimezone
   */
  exports.prototype['sendingTimezone'] = undefined;
  /**
   * Comma separated array of contact resources id message will be sent to
   * @member {String} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Comma separated array of list resources id message will be sent to
   * @member {String} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Comma separated array of E.164 phone numbers message will be sent to
   * @member {String} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. Default is false
   * @member {Boolean} cutExtra
   */
  exports.prototype['cutExtra'] = undefined;
  /**
   * Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6
   * @member {Number} partsCount
   */
  exports.prototype['partsCount'] = undefined;
  /**
   * Custom message reference id which can be used in your application infrastructure
   * @member {Number} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details
   * @member {String} rule
   */
  exports.prototype['rule'] = undefined;
  /**
   * Should sending method try to create new Chat(if not exist) with specified recipients. Default is false
   * @member {Boolean} createChat
   */
  exports.prototype['createChat'] = undefined;
  /**
   * Send Text to Speech message. Default is false
   * @member {Boolean} tts
   */
  exports.prototype['tts'] = undefined;
  /**
   * Treat phone numbers passed in \\'phones\\' field as local. Default is false
   * @member {Boolean} local
   */
  exports.prototype['local'] = undefined;
  /**
   * 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is account country
   * @member {String} localCountry
   */
  exports.prototype['localCountry'] = undefined;



  return exports;
}));


