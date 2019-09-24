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
    root.TextmagicClient.MessageOut = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageOut model module.
   * @module model/MessageOut
   * @version 2.0.357
   */

  /**
   * Constructs a new <code>MessageOut</code>.
   * @alias module:model/MessageOut
   * @class
   * @param id {Number} 
   * @param contactId {Number} 
   * @param sessionId {Number} 
   * @param messageTime {Date} 
   * @param status {module:model/MessageOut.StatusEnum} q - queued s - scheduled queue e - sending error r - enroute a - acked d - delivered b - buffered f - failed u - unknown j - rejected i - bulk insert p - scheduled suspend h - queue suspend
   * @param avatar {String} 
   * @param text {String} 
   * @param charset {String} 
   * @param charsetLabel {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param country {String} 
   * @param partsCount {Number} 
   */
  var exports = function(id, contactId, sessionId, messageTime, status, avatar, text, charset, charsetLabel, firstName, lastName, country, partsCount) {
    var _this = this;

    _this['id'] = id;
    _this['contactId'] = contactId;
    _this['sessionId'] = sessionId;

    _this['messageTime'] = messageTime;
    _this['status'] = status;
    _this['avatar'] = avatar;
    _this['text'] = text;

    _this['charset'] = charset;
    _this['charsetLabel'] = charsetLabel;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['country'] = country;



    _this['partsCount'] = partsCount;










  };

  /**
   * Constructs a <code>MessageOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageOut} obj Optional instance to populate.
   * @return {module:model/MessageOut} The populated <code>MessageOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'Number');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
      }
      if (data.hasOwnProperty('messageTime')) {
        obj['messageTime'] = ApiClient.convertToType(data['messageTime'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('charset')) {
        obj['charset'] = ApiClient.convertToType(data['charset'], 'String');
      }
      if (data.hasOwnProperty('charsetLabel')) {
        obj['charsetLabel'] = ApiClient.convertToType(data['charsetLabel'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('partsCount')) {
        obj['partsCount'] = ApiClient.convertToType(data['partsCount'], 'Number');
      }
      if (data.hasOwnProperty('fromEmail')) {
        obj['fromEmail'] = ApiClient.convertToType(data['fromEmail'], 'String');
      }
      if (data.hasOwnProperty('fromNumber')) {
        obj['fromNumber'] = ApiClient.convertToType(data['fromNumber'], 'String');
      }
      if (data.hasOwnProperty('smscId')) {
        obj['smscId'] = ApiClient.convertToType(data['smscId'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('deliveredCount')) {
        obj['deliveredCount'] = ApiClient.convertToType(data['deliveredCount'], 'Number');
      }
      if (data.hasOwnProperty('numbersCount')) {
        obj['numbersCount'] = ApiClient.convertToType(data['numbersCount'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('creditsPrice')) {
        obj['creditsPrice'] = ApiClient.convertToType(data['creditsPrice'], 'String');
      }
      if (data.hasOwnProperty('chars')) {
        obj['chars'] = ApiClient.convertToType(data['chars'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * @member {Number} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * @member {String} receiver
   */
  exports.prototype['receiver'] = undefined;
  /**
   * @member {Date} messageTime
   */
  exports.prototype['messageTime'] = undefined;
  /**
   * q - queued s - scheduled queue e - sending error r - enroute a - acked d - delivered b - buffered f - failed u - unknown j - rejected i - bulk insert p - scheduled suspend h - queue suspend
   * @member {module:model/MessageOut.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * @member {String} charset
   */
  exports.prototype['charset'] = undefined;
  /**
   * @member {String} charsetLabel
   */
  exports.prototype['charsetLabel'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} partsCount
   */
  exports.prototype['partsCount'] = undefined;
  /**
   * @member {String} fromEmail
   */
  exports.prototype['fromEmail'] = undefined;
  /**
   * @member {String} fromNumber
   */
  exports.prototype['fromNumber'] = undefined;
  /**
   * @member {String} smscId
   */
  exports.prototype['smscId'] = undefined;
  /**
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Number} deliveredCount
   */
  exports.prototype['deliveredCount'] = undefined;
  /**
   * @member {Number} numbersCount
   */
  exports.prototype['numbersCount'] = undefined;
  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} creditsPrice
   */
  exports.prototype['creditsPrice'] = undefined;
  /**
   * @member {Number} chars
   */
  exports.prototype['chars'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "q"
     * @const
     */
    "q": "q",
    /**
     * value: "s"
     * @const
     */
    "s": "s",
    /**
     * value: "e"
     * @const
     */
    "e": "e",
    /**
     * value: "r"
     * @const
     */
    "r": "r",
    /**
     * value: "a"
     * @const
     */
    "a": "a",
    /**
     * value: "d"
     * @const
     */
    "d": "d",
    /**
     * value: "b"
     * @const
     */
    "b": "b",
    /**
     * value: "f"
     * @const
     */
    "f": "f",
    /**
     * value: "u"
     * @const
     */
    "u": "u",
    /**
     * value: "j"
     * @const
     */
    "j": "j",
    /**
     * value: "i"
     * @const
     */
    "i": "i",
    /**
     * value: "p"
     * @const
     */
    "p": "p",
    /**
     * value: "h"
     * @const
     */
    "h": "h"  };


  return exports;
}));


