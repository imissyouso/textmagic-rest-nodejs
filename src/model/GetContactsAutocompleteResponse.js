/**
 * TextMagic API Documentation
 * # Overview ## Introduction test <img style=\"float: right; margin-left: 10px; width: 100px;\" src=\"images/phone.png\"> TextMagic SMS API is a platform for building your own messaging app using our messaging infrastructure. It allows you to send and receive SMS text messages, query information about inbound and outbound messages, manage contacts, create templates (i.e. message formats and static texts) and schedule recurrent SMS messages as well as process bulk SMS messages. <button name=\"button\" onclick=\"http://www.google.com\" class=\"btn\">Try TextMagic API for Free</button>  ### Two Ways to Use TextMagic API * [REST API](https://www.textmagic.com/docs/api/start/) – get full access to TextMagic’s messaging gateway features * [Email to SMS API](https://www.textmagic.com/docs/api/send-email-to-sms/) – set up two-way SMS communication without the need to write any additional code  ### Code Libraries We have created a set of client libraries for the most popular programming languages (such as REST API Java and REST API PHP). These libraries allow you to integrate our API into your code in minutes. Just choose your preferred language to get started:  ## Getting started Get Started with the TextMagic REST API To start sending text messages using the TextMagic REST API, just follow these steps: 1. Generate the API credentials 1. Connect to our API endpoint This page provides all the information you need to get started. Here, we explain the following steps:  How to obtain the API credentials The API endpoint How the REST API works The next step How to obtain the API credentials  ### How to obtain the API credentials To start sending text messages, you need to create an API key. API keys are similar to an account password; the difference is that an API key only provides access to the API: you cannot log in to TextMagic Online using the API key.  Your program sends the login credentials with each API request as HTTP headers: `X-TM-Username` is your TextMagic username, while `X-TM-Key` is your API key.  How to obtain an API key:  1. Log in to TextMagic (or start a free trial if you haven’t registered yet). 1. Go to the API settings page. 1. Click the Add new API key button. 1. Enter an app name for this key. Note, it’s just a label, so pick any name. 1. Click Generate new key. 1. You should now see your new API key in the green notification banner above the table:  ![alt text](images/credentials.png)  > Note for API v1 users > V1 keys are not compatible with the V2 version of the TextMagic REST API, so you will need to generate a new API key to use the V2 endpoint.  ### The API endpoint The TextMagic REST API endpoint is: ``` https://rest.textmagic.com/api/v2 ``` All the URLs referenced in this documentation should use this base URL.  ### How the REST API works REST APIs use the HTTP protocol to send and receive messages. REST messages are usually encoded as JSON documents and are an improvement over older methods such as the XML based SOAP protocol. REST APIs use the same set of methods that web browsers use: POST, GET, PUT or DELETE. These correspond to the CRUD operations: create, read, update and delete. Often, REST URIs provide direct CRUD access to entities or collections of entities, for example: http://api.foo.com/people. In this instance, to delete a person’s endpoint, you might simply call the endpoint DELETE http://api.foo.com/people/{id}. REST makes these types of operations simple.  > Example > > Let’s take the entity most often used in messaging: contacts. Imagine you want to perform operations on your contacts list: well, it’s only a matter of calling the following endpoints: > * GET /api/v2/contacts (get all of your contacts) > * GET /api/v2/contacts/{id} (get a specific contact) > * POST /api/v2/contacts (create a new contact) > * PUT /api/v2/contacts/{id} (update an existing contact) > * DELETE /api/v2/contacts/{id} (delete an existing contact) It’s that simple! In fact, that’s all you need to do to manage the contacts in your TextMagic account!  ## Sandbox Sandbox is a tool to test TextMagic REST API requests without the need to install any applications or write any code. Here, we explain the following details about Sandbox: * The credentials area * Command documentation * How it works  <a href=\"\">Go to TextMagic Sandbox</a>  ### The credentials area To make requests using your TextMagic account, you need to enter your account username and your API key into the corresponding fields. You may also Save them in your browser or press Clear to erase them.  ![alt text](images/sandbox.png) 
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
    root.TextmagicClient.GetContactsAutocompleteResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetContactsAutocompleteResponse model module.
   * @module model/GetContactsAutocompleteResponse
   * @version 2.0.251
   */

  /**
   * Constructs a new <code>GetContactsAutocompleteResponse</code>.
   * @alias module:model/GetContactsAutocompleteResponse
   * @class
   * @param entityId {Number} Id of entity. 0 if object is a Reply
   * @param entityType {module:model/GetContactsAutocompleteResponse.EntityTypeEnum} 
   * @param value {String} Id of contact/list if entityType is contact/list OR phone number if entityType is reply
   * @param label {String} Name of the contact/list if entityType is contact/list OR phone number if entityType is reply
   * @param sharedBy {String} If contact or list was shared by another user then name if this user will be shown
   * @param avatar {String} 
   * @param favorited {Boolean} If contact was marked as favourited
   * @param userId {Number} Owner id of the contact/list (if it was shared)
   * @param countryName {String} 
   * @param qposition {Number} 
   * @param rposition {Number} 
   */
  var exports = function(entityId, entityType, value, label, sharedBy, avatar, favorited, userId, countryName, qposition, rposition) {
    var _this = this;

    _this['entityId'] = entityId;
    _this['entityType'] = entityType;
    _this['value'] = value;
    _this['label'] = label;
    _this['sharedBy'] = sharedBy;
    _this['avatar'] = avatar;
    _this['favorited'] = favorited;
    _this['userId'] = userId;
    _this['countryName'] = countryName;
    _this['qposition'] = qposition;
    _this['rposition'] = rposition;
  };

  /**
   * Constructs a <code>GetContactsAutocompleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactsAutocompleteResponse} obj Optional instance to populate.
   * @return {module:model/GetContactsAutocompleteResponse} The populated <code>GetContactsAutocompleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
      }
      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('sharedBy')) {
        obj['sharedBy'] = ApiClient.convertToType(data['sharedBy'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('favorited')) {
        obj['favorited'] = ApiClient.convertToType(data['favorited'], 'Boolean');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('qposition')) {
        obj['qposition'] = ApiClient.convertToType(data['qposition'], 'Number');
      }
      if (data.hasOwnProperty('rposition')) {
        obj['rposition'] = ApiClient.convertToType(data['rposition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Id of entity. 0 if object is a Reply
   * @member {Number} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * 
   * @member {module:model/GetContactsAutocompleteResponse.EntityTypeEnum} entityType
   */
  exports.prototype['entityType'] = undefined;
  /**
   * Id of contact/list if entityType is contact/list OR phone number if entityType is reply
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Name of the contact/list if entityType is contact/list OR phone number if entityType is reply
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * If contact or list was shared by another user then name if this user will be shown
   * @member {String} sharedBy
   */
  exports.prototype['sharedBy'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * If contact was marked as favourited
   * @member {Boolean} favorited
   */
  exports.prototype['favorited'] = undefined;
  /**
   * Owner id of the contact/list (if it was shared)
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * @member {Number} qposition
   */
  exports.prototype['qposition'] = undefined;
  /**
   * @member {Number} rposition
   */
  exports.prototype['rposition'] = undefined;


  /**
   * Allowed values for the <code>entityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityTypeEnum = {
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "contact"
     * @const
     */
    "contact": "contact",
    /**
     * value: "reply"
     * @const
     */
    "reply": "reply"  };


  return exports;
}));


