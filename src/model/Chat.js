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
    define(['ApiClient', 'model/Contact', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contact'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.Chat = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Contact, root.TextmagicClient.Country);
  }
}(this, function(ApiClient, Contact, Country) {
  'use strict';




  /**
   * The Chat model module.
   * @module model/Chat
   * @version 2.0.339
   */

  /**
   * Constructs a new <code>Chat</code>.
   * @alias module:model/Chat
   * @class
   * @param id {Number} 
   * @param originalId {Number} 
   * @param phone {String} 
   * @param contact {module:model/Contact} 
   * @param unsubscribedContactId {Number} 
   * @param unread {Number} 
   * @param updatedAt {Date} 
   * @param status {String} 
   * @param mute {Number} 
   * @param lastMessage {String} 
   * @param direction {String} 
   * @param from {String} 
   * @param mutedUntil {String} 
   * @param timeLeftMute {Number} 
   * @param country {module:model/Country} 
   */
  var exports = function(id, originalId, phone, contact, unsubscribedContactId, unread, updatedAt, status, mute, lastMessage, direction, from, mutedUntil, timeLeftMute, country) {
    var _this = this;

    _this['id'] = id;
    _this['originalId'] = originalId;
    _this['phone'] = phone;
    _this['contact'] = contact;
    _this['unsubscribedContactId'] = unsubscribedContactId;
    _this['unread'] = unread;
    _this['updatedAt'] = updatedAt;
    _this['status'] = status;
    _this['mute'] = mute;
    _this['lastMessage'] = lastMessage;
    _this['direction'] = direction;
    _this['from'] = from;
    _this['mutedUntil'] = mutedUntil;
    _this['timeLeftMute'] = timeLeftMute;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>Chat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Chat} obj Optional instance to populate.
   * @return {module:model/Chat} The populated <code>Chat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('originalId')) {
        obj['originalId'] = ApiClient.convertToType(data['originalId'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = Contact.constructFromObject(data['contact']);
      }
      if (data.hasOwnProperty('unsubscribedContactId')) {
        obj['unsubscribedContactId'] = ApiClient.convertToType(data['unsubscribedContactId'], 'Number');
      }
      if (data.hasOwnProperty('unread')) {
        obj['unread'] = ApiClient.convertToType(data['unread'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Number');
      }
      if (data.hasOwnProperty('lastMessage')) {
        obj['lastMessage'] = ApiClient.convertToType(data['lastMessage'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('mutedUntil')) {
        obj['mutedUntil'] = ApiClient.convertToType(data['mutedUntil'], 'String');
      }
      if (data.hasOwnProperty('timeLeftMute')) {
        obj['timeLeftMute'] = ApiClient.convertToType(data['timeLeftMute'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} originalId
   */
  exports.prototype['originalId'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {module:model/Contact} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * @member {Number} unsubscribedContactId
   */
  exports.prototype['unsubscribedContactId'] = undefined;
  /**
   * @member {Number} unread
   */
  exports.prototype['unread'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} mute
   */
  exports.prototype['mute'] = undefined;
  /**
   * @member {String} lastMessage
   */
  exports.prototype['lastMessage'] = undefined;
  /**
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {String} mutedUntil
   */
  exports.prototype['mutedUntil'] = undefined;
  /**
   * @member {Number} timeLeftMute
   */
  exports.prototype['timeLeftMute'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


