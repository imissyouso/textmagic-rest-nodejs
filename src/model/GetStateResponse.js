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
    root.TextmagicClient.GetStateResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetStateResponse model module.
   * @module model/GetStateResponse
   * @version 2.0.308
   */

  /**
   * Constructs a new <code>GetStateResponse</code>.
   * @alias module:model/GetStateResponse
   * @class
   * @param systemCacheClear {Number} 
   * @param systemExit {Number} 
   * @param systemAlert {Number} 
   * @param systemAccountStateChanged {Number} 
   * @param messageDeleted {Number} 
   * @param messageIncoming {Number} 
   * @param messageIncomingDeleted {Number} 
   * @param messageStateChanged {Number} 
   * @param messageBulkEnd {Number} 
   * @param messageWipeEnd {Number} 
   * @param messageSent {Number} 
   * @param messageSessionDeleted {Number} 
   * @param messageCacheClear {Number} 
   * @param messageIncomingCacheClear {Number} 
   * @param messageScheduleAdded {Number} 
   * @param messageScheduleStateChanged {Number} 
   * @param messageScheduleDeleted {Number} 
   * @param messageScheduleCacheClear {Number} 
   * @param messageTemplateCacheClear {Number} 
   * @param callFinished {Number} 
   * @param chatCreated {Number} 
   * @param chatMarkedAsRead {Number} 
   * @param chatMuted {Number} 
   * @param chatUnmuted {Number} 
   * @param chatDeleted {Number} 
   * @param chatClosed {Number} 
   * @param chatReopened {Number} 
   * @param chatCacheClear {Number} 
   * @param contactAdded {Number} 
   * @param contactDeleted {Number} 
   * @param contactStateChanged {Number} 
   * @param listAdded {Number} 
   * @param listDeleted {Number} 
   * @param listStateChanged {Number} 
   * @param contactWipeEnd {Number} 
   * @param contactImportEnd {Number} 
   * @param contactCacheClear {Number} 
   * @param listCacheClear {Number} 
   * @param customFieldsCacheClear {Number} 
   */
  var exports = function(systemCacheClear, systemExit, systemAlert, systemAccountStateChanged, messageDeleted, messageIncoming, messageIncomingDeleted, messageStateChanged, messageBulkEnd, messageWipeEnd, messageSent, messageSessionDeleted, messageCacheClear, messageIncomingCacheClear, messageScheduleAdded, messageScheduleStateChanged, messageScheduleDeleted, messageScheduleCacheClear, messageTemplateCacheClear, callFinished, chatCreated, chatMarkedAsRead, chatMuted, chatUnmuted, chatDeleted, chatClosed, chatReopened, chatCacheClear, contactAdded, contactDeleted, contactStateChanged, listAdded, listDeleted, listStateChanged, contactWipeEnd, contactImportEnd, contactCacheClear, listCacheClear, customFieldsCacheClear) {
    var _this = this;

    _this['systemCacheClear'] = systemCacheClear;
    _this['systemExit'] = systemExit;
    _this['systemAlert'] = systemAlert;
    _this['systemAccountStateChanged'] = systemAccountStateChanged;
    _this['messageDeleted'] = messageDeleted;
    _this['messageIncoming'] = messageIncoming;
    _this['messageIncomingDeleted'] = messageIncomingDeleted;
    _this['messageStateChanged'] = messageStateChanged;
    _this['messageBulkEnd'] = messageBulkEnd;
    _this['messageWipeEnd'] = messageWipeEnd;
    _this['messageSent'] = messageSent;
    _this['messageSessionDeleted'] = messageSessionDeleted;
    _this['messageCacheClear'] = messageCacheClear;
    _this['messageIncomingCacheClear'] = messageIncomingCacheClear;
    _this['messageScheduleAdded'] = messageScheduleAdded;
    _this['messageScheduleStateChanged'] = messageScheduleStateChanged;
    _this['messageScheduleDeleted'] = messageScheduleDeleted;
    _this['messageScheduleCacheClear'] = messageScheduleCacheClear;
    _this['messageTemplateCacheClear'] = messageTemplateCacheClear;
    _this['callFinished'] = callFinished;
    _this['chatCreated'] = chatCreated;
    _this['chatMarkedAsRead'] = chatMarkedAsRead;
    _this['chatMuted'] = chatMuted;
    _this['chatUnmuted'] = chatUnmuted;
    _this['chatDeleted'] = chatDeleted;
    _this['chatClosed'] = chatClosed;
    _this['chatReopened'] = chatReopened;
    _this['chatCacheClear'] = chatCacheClear;
    _this['contactAdded'] = contactAdded;
    _this['contactDeleted'] = contactDeleted;
    _this['contactStateChanged'] = contactStateChanged;
    _this['listAdded'] = listAdded;
    _this['listDeleted'] = listDeleted;
    _this['listStateChanged'] = listStateChanged;
    _this['contactWipeEnd'] = contactWipeEnd;
    _this['contactImportEnd'] = contactImportEnd;
    _this['contactCacheClear'] = contactCacheClear;
    _this['listCacheClear'] = listCacheClear;
    _this['customFieldsCacheClear'] = customFieldsCacheClear;
  };

  /**
   * Constructs a <code>GetStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStateResponse} obj Optional instance to populate.
   * @return {module:model/GetStateResponse} The populated <code>GetStateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('systemCacheClear')) {
        obj['systemCacheClear'] = ApiClient.convertToType(data['systemCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('systemExit')) {
        obj['systemExit'] = ApiClient.convertToType(data['systemExit'], 'Number');
      }
      if (data.hasOwnProperty('systemAlert')) {
        obj['systemAlert'] = ApiClient.convertToType(data['systemAlert'], 'Number');
      }
      if (data.hasOwnProperty('systemAccountStateChanged')) {
        obj['systemAccountStateChanged'] = ApiClient.convertToType(data['systemAccountStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageDeleted')) {
        obj['messageDeleted'] = ApiClient.convertToType(data['messageDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageIncoming')) {
        obj['messageIncoming'] = ApiClient.convertToType(data['messageIncoming'], 'Number');
      }
      if (data.hasOwnProperty('messageIncomingDeleted')) {
        obj['messageIncomingDeleted'] = ApiClient.convertToType(data['messageIncomingDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageStateChanged')) {
        obj['messageStateChanged'] = ApiClient.convertToType(data['messageStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageBulkEnd')) {
        obj['messageBulkEnd'] = ApiClient.convertToType(data['messageBulkEnd'], 'Number');
      }
      if (data.hasOwnProperty('messageWipeEnd')) {
        obj['messageWipeEnd'] = ApiClient.convertToType(data['messageWipeEnd'], 'Number');
      }
      if (data.hasOwnProperty('messageSent')) {
        obj['messageSent'] = ApiClient.convertToType(data['messageSent'], 'Number');
      }
      if (data.hasOwnProperty('messageSessionDeleted')) {
        obj['messageSessionDeleted'] = ApiClient.convertToType(data['messageSessionDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageCacheClear')) {
        obj['messageCacheClear'] = ApiClient.convertToType(data['messageCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageIncomingCacheClear')) {
        obj['messageIncomingCacheClear'] = ApiClient.convertToType(data['messageIncomingCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleAdded')) {
        obj['messageScheduleAdded'] = ApiClient.convertToType(data['messageScheduleAdded'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleStateChanged')) {
        obj['messageScheduleStateChanged'] = ApiClient.convertToType(data['messageScheduleStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleDeleted')) {
        obj['messageScheduleDeleted'] = ApiClient.convertToType(data['messageScheduleDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleCacheClear')) {
        obj['messageScheduleCacheClear'] = ApiClient.convertToType(data['messageScheduleCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageTemplateCacheClear')) {
        obj['messageTemplateCacheClear'] = ApiClient.convertToType(data['messageTemplateCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('callFinished')) {
        obj['callFinished'] = ApiClient.convertToType(data['callFinished'], 'Number');
      }
      if (data.hasOwnProperty('chatCreated')) {
        obj['chatCreated'] = ApiClient.convertToType(data['chatCreated'], 'Number');
      }
      if (data.hasOwnProperty('chatMarkedAsRead')) {
        obj['chatMarkedAsRead'] = ApiClient.convertToType(data['chatMarkedAsRead'], 'Number');
      }
      if (data.hasOwnProperty('chatMuted')) {
        obj['chatMuted'] = ApiClient.convertToType(data['chatMuted'], 'Number');
      }
      if (data.hasOwnProperty('chatUnmuted')) {
        obj['chatUnmuted'] = ApiClient.convertToType(data['chatUnmuted'], 'Number');
      }
      if (data.hasOwnProperty('chatDeleted')) {
        obj['chatDeleted'] = ApiClient.convertToType(data['chatDeleted'], 'Number');
      }
      if (data.hasOwnProperty('chatClosed')) {
        obj['chatClosed'] = ApiClient.convertToType(data['chatClosed'], 'Number');
      }
      if (data.hasOwnProperty('chatReopened')) {
        obj['chatReopened'] = ApiClient.convertToType(data['chatReopened'], 'Number');
      }
      if (data.hasOwnProperty('chatCacheClear')) {
        obj['chatCacheClear'] = ApiClient.convertToType(data['chatCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('contactAdded')) {
        obj['contactAdded'] = ApiClient.convertToType(data['contactAdded'], 'Number');
      }
      if (data.hasOwnProperty('contactDeleted')) {
        obj['contactDeleted'] = ApiClient.convertToType(data['contactDeleted'], 'Number');
      }
      if (data.hasOwnProperty('contactStateChanged')) {
        obj['contactStateChanged'] = ApiClient.convertToType(data['contactStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('listAdded')) {
        obj['listAdded'] = ApiClient.convertToType(data['listAdded'], 'Number');
      }
      if (data.hasOwnProperty('listDeleted')) {
        obj['listDeleted'] = ApiClient.convertToType(data['listDeleted'], 'Number');
      }
      if (data.hasOwnProperty('listStateChanged')) {
        obj['listStateChanged'] = ApiClient.convertToType(data['listStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('contactWipeEnd')) {
        obj['contactWipeEnd'] = ApiClient.convertToType(data['contactWipeEnd'], 'Number');
      }
      if (data.hasOwnProperty('contactImportEnd')) {
        obj['contactImportEnd'] = ApiClient.convertToType(data['contactImportEnd'], 'Number');
      }
      if (data.hasOwnProperty('contactCacheClear')) {
        obj['contactCacheClear'] = ApiClient.convertToType(data['contactCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('listCacheClear')) {
        obj['listCacheClear'] = ApiClient.convertToType(data['listCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('customFieldsCacheClear')) {
        obj['customFieldsCacheClear'] = ApiClient.convertToType(data['customFieldsCacheClear'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} systemCacheClear
   */
  exports.prototype['systemCacheClear'] = undefined;
  /**
   * @member {Number} systemExit
   */
  exports.prototype['systemExit'] = undefined;
  /**
   * @member {Number} systemAlert
   */
  exports.prototype['systemAlert'] = undefined;
  /**
   * @member {Number} systemAccountStateChanged
   */
  exports.prototype['systemAccountStateChanged'] = undefined;
  /**
   * @member {Number} messageDeleted
   */
  exports.prototype['messageDeleted'] = undefined;
  /**
   * @member {Number} messageIncoming
   */
  exports.prototype['messageIncoming'] = undefined;
  /**
   * @member {Number} messageIncomingDeleted
   */
  exports.prototype['messageIncomingDeleted'] = undefined;
  /**
   * @member {Number} messageStateChanged
   */
  exports.prototype['messageStateChanged'] = undefined;
  /**
   * @member {Number} messageBulkEnd
   */
  exports.prototype['messageBulkEnd'] = undefined;
  /**
   * @member {Number} messageWipeEnd
   */
  exports.prototype['messageWipeEnd'] = undefined;
  /**
   * @member {Number} messageSent
   */
  exports.prototype['messageSent'] = undefined;
  /**
   * @member {Number} messageSessionDeleted
   */
  exports.prototype['messageSessionDeleted'] = undefined;
  /**
   * @member {Number} messageCacheClear
   */
  exports.prototype['messageCacheClear'] = undefined;
  /**
   * @member {Number} messageIncomingCacheClear
   */
  exports.prototype['messageIncomingCacheClear'] = undefined;
  /**
   * @member {Number} messageScheduleAdded
   */
  exports.prototype['messageScheduleAdded'] = undefined;
  /**
   * @member {Number} messageScheduleStateChanged
   */
  exports.prototype['messageScheduleStateChanged'] = undefined;
  /**
   * @member {Number} messageScheduleDeleted
   */
  exports.prototype['messageScheduleDeleted'] = undefined;
  /**
   * @member {Number} messageScheduleCacheClear
   */
  exports.prototype['messageScheduleCacheClear'] = undefined;
  /**
   * @member {Number} messageTemplateCacheClear
   */
  exports.prototype['messageTemplateCacheClear'] = undefined;
  /**
   * @member {Number} callFinished
   */
  exports.prototype['callFinished'] = undefined;
  /**
   * @member {Number} chatCreated
   */
  exports.prototype['chatCreated'] = undefined;
  /**
   * @member {Number} chatMarkedAsRead
   */
  exports.prototype['chatMarkedAsRead'] = undefined;
  /**
   * @member {Number} chatMuted
   */
  exports.prototype['chatMuted'] = undefined;
  /**
   * @member {Number} chatUnmuted
   */
  exports.prototype['chatUnmuted'] = undefined;
  /**
   * @member {Number} chatDeleted
   */
  exports.prototype['chatDeleted'] = undefined;
  /**
   * @member {Number} chatClosed
   */
  exports.prototype['chatClosed'] = undefined;
  /**
   * @member {Number} chatReopened
   */
  exports.prototype['chatReopened'] = undefined;
  /**
   * @member {Number} chatCacheClear
   */
  exports.prototype['chatCacheClear'] = undefined;
  /**
   * @member {Number} contactAdded
   */
  exports.prototype['contactAdded'] = undefined;
  /**
   * @member {Number} contactDeleted
   */
  exports.prototype['contactDeleted'] = undefined;
  /**
   * @member {Number} contactStateChanged
   */
  exports.prototype['contactStateChanged'] = undefined;
  /**
   * @member {Number} listAdded
   */
  exports.prototype['listAdded'] = undefined;
  /**
   * @member {Number} listDeleted
   */
  exports.prototype['listDeleted'] = undefined;
  /**
   * @member {Number} listStateChanged
   */
  exports.prototype['listStateChanged'] = undefined;
  /**
   * @member {Number} contactWipeEnd
   */
  exports.prototype['contactWipeEnd'] = undefined;
  /**
   * @member {Number} contactImportEnd
   */
  exports.prototype['contactImportEnd'] = undefined;
  /**
   * @member {Number} contactCacheClear
   */
  exports.prototype['contactCacheClear'] = undefined;
  /**
   * @member {Number} listCacheClear
   */
  exports.prototype['listCacheClear'] = undefined;
  /**
   * @member {Number} customFieldsCacheClear
   */
  exports.prototype['customFieldsCacheClear'] = undefined;



  return exports;
}));


