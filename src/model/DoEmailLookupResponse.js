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
    root.TextmagicClient.DoEmailLookupResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DoEmailLookupResponse model module.
   * @module model/DoEmailLookupResponse
   * @version 2.0.333
   */

  /**
   * Constructs a new <code>DoEmailLookupResponse</code>.
   * @alias module:model/DoEmailLookupResponse
   * @class
   * @param address {String} 
   * @param addressType {String} 
   * @param emailRole {String} 
   * @param reason {String} 
   * @param status {module:model/DoEmailLookupResponse.StatusEnum} 
   * @param deliverability {String} 
   * @param isDisposableAddress {Boolean} 
   * @param localPart {String} 
   * @param domainPart {String} 
   * @param exchange {String} 
   * @param isInWhiteList {Boolean} 
   * @param isInBlackList {Boolean} 
   * @param hasMx {Boolean} 
   * @param hasAa {Boolean} 
   * @param hasAaaa {Boolean} 
   * @param risk {String} 
   * @param preference {Number} 
   * @param suggestion {String} 
   */
  var exports = function(address, addressType, emailRole, reason, status, deliverability, isDisposableAddress, localPart, domainPart, exchange, isInWhiteList, isInBlackList, hasMx, hasAa, hasAaaa, risk, preference, suggestion) {
    var _this = this;

    _this['address'] = address;
    _this['addressType'] = addressType;
    _this['emailRole'] = emailRole;
    _this['reason'] = reason;
    _this['status'] = status;
    _this['deliverability'] = deliverability;
    _this['isDisposableAddress'] = isDisposableAddress;
    _this['localPart'] = localPart;
    _this['domainPart'] = domainPart;
    _this['exchange'] = exchange;
    _this['isInWhiteList'] = isInWhiteList;
    _this['isInBlackList'] = isInBlackList;
    _this['hasMx'] = hasMx;
    _this['hasAa'] = hasAa;
    _this['hasAaaa'] = hasAaaa;
    _this['risk'] = risk;
    _this['preference'] = preference;
    _this['suggestion'] = suggestion;
  };

  /**
   * Constructs a <code>DoEmailLookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DoEmailLookupResponse} obj Optional instance to populate.
   * @return {module:model/DoEmailLookupResponse} The populated <code>DoEmailLookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('addressType')) {
        obj['addressType'] = ApiClient.convertToType(data['addressType'], 'String');
      }
      if (data.hasOwnProperty('emailRole')) {
        obj['emailRole'] = ApiClient.convertToType(data['emailRole'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('deliverability')) {
        obj['deliverability'] = ApiClient.convertToType(data['deliverability'], 'String');
      }
      if (data.hasOwnProperty('isDisposableAddress')) {
        obj['isDisposableAddress'] = ApiClient.convertToType(data['isDisposableAddress'], 'Boolean');
      }
      if (data.hasOwnProperty('localPart')) {
        obj['localPart'] = ApiClient.convertToType(data['localPart'], 'String');
      }
      if (data.hasOwnProperty('domainPart')) {
        obj['domainPart'] = ApiClient.convertToType(data['domainPart'], 'String');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('isInWhiteList')) {
        obj['isInWhiteList'] = ApiClient.convertToType(data['isInWhiteList'], 'Boolean');
      }
      if (data.hasOwnProperty('isInBlackList')) {
        obj['isInBlackList'] = ApiClient.convertToType(data['isInBlackList'], 'Boolean');
      }
      if (data.hasOwnProperty('hasMx')) {
        obj['hasMx'] = ApiClient.convertToType(data['hasMx'], 'Boolean');
      }
      if (data.hasOwnProperty('hasAa')) {
        obj['hasAa'] = ApiClient.convertToType(data['hasAa'], 'Boolean');
      }
      if (data.hasOwnProperty('hasAaaa')) {
        obj['hasAaaa'] = ApiClient.convertToType(data['hasAaaa'], 'Boolean');
      }
      if (data.hasOwnProperty('risk')) {
        obj['risk'] = ApiClient.convertToType(data['risk'], 'String');
      }
      if (data.hasOwnProperty('preference')) {
        obj['preference'] = ApiClient.convertToType(data['preference'], 'Number');
      }
      if (data.hasOwnProperty('suggestion')) {
        obj['suggestion'] = ApiClient.convertToType(data['suggestion'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} addressType
   */
  exports.prototype['addressType'] = undefined;
  /**
   * @member {String} emailRole
   */
  exports.prototype['emailRole'] = undefined;
  /**
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {module:model/DoEmailLookupResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} deliverability
   */
  exports.prototype['deliverability'] = undefined;
  /**
   * @member {Boolean} isDisposableAddress
   */
  exports.prototype['isDisposableAddress'] = undefined;
  /**
   * @member {String} localPart
   */
  exports.prototype['localPart'] = undefined;
  /**
   * @member {String} domainPart
   */
  exports.prototype['domainPart'] = undefined;
  /**
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * @member {Boolean} isInWhiteList
   */
  exports.prototype['isInWhiteList'] = undefined;
  /**
   * @member {Boolean} isInBlackList
   */
  exports.prototype['isInBlackList'] = undefined;
  /**
   * @member {Boolean} hasMx
   */
  exports.prototype['hasMx'] = undefined;
  /**
   * @member {Boolean} hasAa
   */
  exports.prototype['hasAa'] = undefined;
  /**
   * @member {Boolean} hasAaaa
   */
  exports.prototype['hasAaaa'] = undefined;
  /**
   * @member {String} risk
   */
  exports.prototype['risk'] = undefined;
  /**
   * @member {Number} preference
   */
  exports.prototype['preference'] = undefined;
  /**
   * @member {String} suggestion
   */
  exports.prototype['suggestion'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "valid"
     * @const
     */
    "valid": "valid",
    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid"  };


  return exports;
}));


