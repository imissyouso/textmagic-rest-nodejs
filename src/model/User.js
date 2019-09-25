/**
 * TextMagic API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ApiClient', 'model/Country', 'model/Currency', 'model/Timezone', 'model/UserImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'), require('./Currency'), require('./Timezone'), require('./UserImage'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.User = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Country, root.TextmagicClient.Currency, root.TextmagicClient.Timezone, root.TextmagicClient.UserImage);
  }
}(this, function(ApiClient, Country, Currency, Timezone, UserImage) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 2.0.396
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param id {Number} 
   * @param username {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param email {String} 
   * @param status {String} 
   * @param balance {Number} 
   * @param phone {String} 
   * @param company {String} 
   * @param currency {module:model/Currency} 
   * @param country {module:model/Country} 
   * @param timezone {module:model/Timezone} 
   * @param subaccountType {String} 
   * @param emailAccepted {Boolean} 
   * @param phoneAccepted {Boolean} 
   * @param avatar {module:model/UserImage} 
   */
  var exports = function(id, username, firstName, lastName, email, status, balance, phone, company, currency, country, timezone, subaccountType, emailAccepted, phoneAccepted, avatar) {
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
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
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
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
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
   * @member {String} subaccountType
   */
  exports.prototype['subaccountType'] = undefined;
  /**
   * @member {Boolean} emailAccepted
   */
  exports.prototype['emailAccepted'] = undefined;
  /**
   * @member {Boolean} phoneAccepted
   */
  exports.prototype['phoneAccepted'] = undefined;
  /**
   * @member {module:model/UserImage} avatar
   */
  exports.prototype['avatar'] = undefined;



  return exports;
}));


