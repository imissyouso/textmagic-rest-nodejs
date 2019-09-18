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
    define(['ApiClient', 'model/MessageSession', 'model/MessagesIcsParameters', 'model/MessagesIcsTextParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSession'), require('./MessagesIcsParameters'), require('./MessagesIcsTextParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.MessagesIcs = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession, root.TextmagicClient.MessagesIcsParameters, root.TextmagicClient.MessagesIcsTextParameters);
  }
}(this, function(ApiClient, MessageSession, MessagesIcsParameters, MessagesIcsTextParameters) {
  'use strict';




  /**
   * The MessagesIcs model module.
   * @module model/MessagesIcs
   * @version 2.0.278
   */

  /**
   * Constructs a new <code>MessagesIcs</code>.
   * @alias module:model/MessagesIcs
   * @class
   * @param id {Number} 
   * @param nextSend {Date} 
   * @param rrule {String} 
   * @param session {module:model/MessageSession} 
   * @param lastSent {Date} 
   * @param contactName {String} 
   * @param parameters {module:model/MessagesIcsParameters} 
   * @param type {String} 
   * @param summary {String} 
   * @param textParameters {module:model/MessagesIcsTextParameters} 
   * @param firstOccurrence {Date} 
   * @param lastOccurrence {Date} 
   * @param recipientsCount {Number} 
   * @param timezone {String} 
   * @param completed {Boolean} 
   * @param avatar {String} 
   * @param createdAt {Date} 
   */
  var exports = function(id, nextSend, rrule, session, lastSent, contactName, parameters, type, summary, textParameters, firstOccurrence, lastOccurrence, recipientsCount, timezone, completed, avatar, createdAt) {
    var _this = this;

    _this['id'] = id;
    _this['nextSend'] = nextSend;
    _this['rrule'] = rrule;
    _this['session'] = session;
    _this['lastSent'] = lastSent;
    _this['contactName'] = contactName;
    _this['parameters'] = parameters;
    _this['type'] = type;
    _this['summary'] = summary;
    _this['textParameters'] = textParameters;
    _this['firstOccurrence'] = firstOccurrence;
    _this['lastOccurrence'] = lastOccurrence;
    _this['recipientsCount'] = recipientsCount;
    _this['timezone'] = timezone;
    _this['completed'] = completed;
    _this['avatar'] = avatar;
    _this['createdAt'] = createdAt;
  };

  /**
   * Constructs a <code>MessagesIcs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcs} obj Optional instance to populate.
   * @return {module:model/MessagesIcs} The populated <code>MessagesIcs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('nextSend')) {
        obj['nextSend'] = ApiClient.convertToType(data['nextSend'], 'Date');
      }
      if (data.hasOwnProperty('rrule')) {
        obj['rrule'] = ApiClient.convertToType(data['rrule'], 'String');
      }
      if (data.hasOwnProperty('session')) {
        obj['session'] = MessageSession.constructFromObject(data['session']);
      }
      if (data.hasOwnProperty('lastSent')) {
        obj['lastSent'] = ApiClient.convertToType(data['lastSent'], 'Date');
      }
      if (data.hasOwnProperty('contactName')) {
        obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = MessagesIcsParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('textParameters')) {
        obj['textParameters'] = MessagesIcsTextParameters.constructFromObject(data['textParameters']);
      }
      if (data.hasOwnProperty('firstOccurrence')) {
        obj['firstOccurrence'] = ApiClient.convertToType(data['firstOccurrence'], 'Date');
      }
      if (data.hasOwnProperty('lastOccurrence')) {
        obj['lastOccurrence'] = ApiClient.convertToType(data['lastOccurrence'], 'Date');
      }
      if (data.hasOwnProperty('recipientsCount')) {
        obj['recipientsCount'] = ApiClient.convertToType(data['recipientsCount'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} nextSend
   */
  exports.prototype['nextSend'] = undefined;
  /**
   * @member {String} rrule
   */
  exports.prototype['rrule'] = undefined;
  /**
   * @member {module:model/MessageSession} session
   */
  exports.prototype['session'] = undefined;
  /**
   * @member {Date} lastSent
   */
  exports.prototype['lastSent'] = undefined;
  /**
   * @member {String} contactName
   */
  exports.prototype['contactName'] = undefined;
  /**
   * @member {module:model/MessagesIcsParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * @member {module:model/MessagesIcsTextParameters} textParameters
   */
  exports.prototype['textParameters'] = undefined;
  /**
   * @member {Date} firstOccurrence
   */
  exports.prototype['firstOccurrence'] = undefined;
  /**
   * @member {Date} lastOccurrence
   */
  exports.prototype['lastOccurrence'] = undefined;
  /**
   * @member {Number} recipientsCount
   */
  exports.prototype['recipientsCount'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {Boolean} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;



  return exports;
}));


