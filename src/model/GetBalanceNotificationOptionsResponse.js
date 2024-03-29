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
   * @version 2.0.650
   */

  /**
   * Constructs a new <code>GetBalanceNotificationOptionsResponse</code>.
   * @alias module:model/GetBalanceNotificationOptionsResponse
   * @class
   * @param _1 {String} Contains sign of currency in Unicode hex code.
   * @param _2 {String} Contains sign of currency in Unicode hex code.
   * @param _3 {String} Contains sign of currency in Unicode hex code.
   * @param _5 {String} Contains sign of currency in Unicode hex code.
   * @param _10 {String} Contains sign of currency in Unicode hex code.
   * @param _20 {String} Contains sign of currency in Unicode hex code.
   * @param _30 {String} Contains sign of currency in Unicode hex code.
   * @param _50 {String} Contains sign of currency in Unicode hex code.
   * @param _100 {String} Contains sign of currency in Unicode hex code.
   * @param _500 {String} Contains sign of currency in Unicode hex code.
   * @param _1000 {String} Contains sign of currency in Unicode hex code.
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
   * Contains sign of currency in Unicode hex code.
   * @member {String} 1
   */
  exports.prototype['1'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 2
   */
  exports.prototype['2'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 3
   */
  exports.prototype['3'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 5
   */
  exports.prototype['5'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 10
   */
  exports.prototype['10'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 20
   */
  exports.prototype['20'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 30
   */
  exports.prototype['30'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 50
   */
  exports.prototype['50'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 100
   */
  exports.prototype['100'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 500
   */
  exports.prototype['500'] = undefined;
  /**
   * Contains sign of currency in Unicode hex code.
   * @member {String} 1000
   */
  exports.prototype['1000'] = undefined;



  return exports;
}));


