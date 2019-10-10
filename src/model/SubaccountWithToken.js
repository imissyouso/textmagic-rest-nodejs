/**
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
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
    define(['ApiClient', 'model/Country', 'model/Currency', 'model/Timezone', 'model/UserImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'), require('./Currency'), require('./Timezone'), require('./UserImage'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.SubaccountWithToken = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Country, root.TextmagicClient.Currency, root.TextmagicClient.Timezone, root.TextmagicClient.UserImage);
  }
}(this, function(ApiClient, Country, Currency, Timezone, UserImage) {
  'use strict';




  /**
   * The SubaccountWithToken model module.
   * @module model/SubaccountWithToken
   * @version 2.0.604
   */

  /**
   * Constructs a new <code>SubaccountWithToken</code>.
   * @alias module:model/SubaccountWithToken
   * @class
   * @param id {Number} Sub-account ID.
   * @param username {String} Username.
   * @param firstName {String} Account first name.
   * @param lastName {String} Account last name.
   * @param email {String} Account Email address.
   * @param status {module:model/SubaccountWithToken.StatusEnum} Current account status: * **A** for Active * **T** for Trial. 
   * @param balance {Number} Account balance (in account currency).
   * @param phone {String} Contact phone number.
   * @param company {String} Account company name.
   * @param currency {module:model/Currency} 
   * @param country {module:model/Country} 
   * @param timezone {module:model/Timezone} 
   * @param subaccountType {module:model/SubaccountWithToken.SubaccountTypeEnum} Type of account: *   **A** for Administrator sub-account *   **U** for Regular User 
   * @param emailAccepted {Boolean} Is account has confirmed Email.
   * @param phoneAccepted {Boolean} Is account has confirmed Phone number.
   * @param avatar {module:model/UserImage} 
   * @param token {String} Access token of account.
   */
  var exports = function(id, username, firstName, lastName, email, status, balance, phone, company, currency, country, timezone, subaccountType, emailAccepted, phoneAccepted, avatar, token) {
    var _this = this;

    _this['id'] = id;
    _this['username'] = username;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['email'] = email;
    _this['status'] = status;
    _this['balance'] = balance;
    _this['phone'] = phone;
    _this['company'] = company;
    _this['currency'] = currency;
    _this['country'] = country;
    _this['timezone'] = timezone;
    _this['subaccountType'] = subaccountType;
    _this['emailAccepted'] = emailAccepted;
    _this['phoneAccepted'] = phoneAccepted;
    _this['avatar'] = avatar;
    _this['token'] = token;
  };

  /**
   * Constructs a <code>SubaccountWithToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubaccountWithToken} obj Optional instance to populate.
   * @return {module:model/SubaccountWithToken} The populated <code>SubaccountWithToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = Currency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = Timezone.constructFromObject(data['timezone']);
      }
      if (data.hasOwnProperty('subaccountType')) {
        obj['subaccountType'] = ApiClient.convertToType(data['subaccountType'], 'String');
      }
      if (data.hasOwnProperty('emailAccepted')) {
        obj['emailAccepted'] = ApiClient.convertToType(data['emailAccepted'], 'Boolean');
      }
      if (data.hasOwnProperty('phoneAccepted')) {
        obj['phoneAccepted'] = ApiClient.convertToType(data['phoneAccepted'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = UserImage.constructFromObject(data['avatar']);
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sub-account ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Username.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * Account first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Account last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Account Email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Current account status: * **A** for Active * **T** for Trial. 
   * @member {module:model/SubaccountWithToken.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Account balance (in account currency).
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Contact phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Account company name.
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {module:model/Currency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/Timezone} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * Type of account: *   **A** for Administrator sub-account *   **U** for Regular User 
   * @member {module:model/SubaccountWithToken.SubaccountTypeEnum} subaccountType
   */
  exports.prototype['subaccountType'] = undefined;
  /**
   * Is account has confirmed Email.
   * @member {Boolean} emailAccepted
   */
  exports.prototype['emailAccepted'] = undefined;
  /**
   * Is account has confirmed Phone number.
   * @member {Boolean} phoneAccepted
   */
  exports.prototype['phoneAccepted'] = undefined;
  /**
   * @member {module:model/UserImage} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * Access token of account.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "T"
     * @const
     */
    "T": "T"  };

  /**
   * Allowed values for the <code>subaccountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubaccountTypeEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "U"
     * @const
     */
    "U": "U"  };


  return exports;
}));


