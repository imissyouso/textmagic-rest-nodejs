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
   * @version 2.0.487
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


