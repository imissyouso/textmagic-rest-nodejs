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
    root.TextmagicClient.DoEmailLookupResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DoEmailLookupResponse model module.
   * @module model/DoEmailLookupResponse
   * @version 2.0.544
   */

  /**
   * Constructs a new <code>DoEmailLookupResponse</code>.
   * @alias module:model/DoEmailLookupResponse
   * @class
   * @param address {String} The email address passed to the call.
   * @param status {module:model/DoEmailLookupResponse.StatusEnum} The email is `valid` or `invalid`.
   * @param deliverability {String} The delivery status of the email address is`deliverable`, `undeliverable`  or `unknown`.
   * @param reason {String} The reason why the checked email is invalid/undeliverable.
   * @param risk {module:model/DoEmailLookupResponse.RiskEnum} The risk score of the email is`high`, `medium`, `low` or `null`.
   * @param addressType {module:model/DoEmailLookupResponse.AddressTypeEnum} The email address type (domain) is `free` or `corporate`.
   * @param isDisposableAddress {Boolean} This is be `true` if the domain is in the list of disposable email addresses, otherwise returns as `false`.
   * @param suggestion {String} Null if nothing is suggested, however, if there is a potential typo in the email address, the closest suggestion is provided.
   * @param emailRole {String} Checks the mailbox part of the email whether it matches a specific role type (‘admin’, ‘sales’, ‘webmaster’)
   * @param localPart {String} The local part of the email address.
   * @param domainPart {String} The domain part of the email address.
   * @param exchange {String} Email exchange server domain name (MX record value).
   * @param preference {Number} MX record preference.
   * @param isInWhiteList {Boolean} `true` if the email address exists in TextMagic whitelist. 
   * @param isInBlackList {Boolean} `true` if the email address exists in TextMagic blacklist. 
   * @param hasMx {Boolean} `true` if the email address domain has an MX record. 
   * @param hasAa {Boolean} 
   * @param hasAaaa {Boolean} `true` if the email address domain has an AAAA record (IPv6). 
   */
  var exports = function(address, status, deliverability, reason, risk, addressType, isDisposableAddress, suggestion, emailRole, localPart, domainPart, exchange, preference, isInWhiteList, isInBlackList, hasMx, hasAa, hasAaaa) {
    var _this = this;

    _this['address'] = address;
    _this['status'] = status;
    _this['deliverability'] = deliverability;
    _this['reason'] = reason;
    _this['risk'] = risk;
    _this['addressType'] = addressType;
    _this['isDisposableAddress'] = isDisposableAddress;
    _this['suggestion'] = suggestion;
    _this['emailRole'] = emailRole;
    _this['localPart'] = localPart;
    _this['domainPart'] = domainPart;
    _this['exchange'] = exchange;
    _this['preference'] = preference;
    _this['isInWhiteList'] = isInWhiteList;
    _this['isInBlackList'] = isInBlackList;
    _this['hasMx'] = hasMx;
    _this['hasAa'] = hasAa;
    _this['hasAaaa'] = hasAaaa;
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('deliverability')) {
        obj['deliverability'] = ApiClient.convertToType(data['deliverability'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('risk')) {
        obj['risk'] = ApiClient.convertToType(data['risk'], 'String');
      }
      if (data.hasOwnProperty('addressType')) {
        obj['addressType'] = ApiClient.convertToType(data['addressType'], 'String');
      }
      if (data.hasOwnProperty('isDisposableAddress')) {
        obj['isDisposableAddress'] = ApiClient.convertToType(data['isDisposableAddress'], 'Boolean');
      }
      if (data.hasOwnProperty('suggestion')) {
        obj['suggestion'] = ApiClient.convertToType(data['suggestion'], 'String');
      }
      if (data.hasOwnProperty('emailRole')) {
        obj['emailRole'] = ApiClient.convertToType(data['emailRole'], 'String');
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
      if (data.hasOwnProperty('preference')) {
        obj['preference'] = ApiClient.convertToType(data['preference'], 'Number');
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
    }
    return obj;
  }

  /**
   * The email address passed to the call.
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The email is `valid` or `invalid`.
   * @member {module:model/DoEmailLookupResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The delivery status of the email address is`deliverable`, `undeliverable`  or `unknown`.
   * @member {String} deliverability
   */
  exports.prototype['deliverability'] = undefined;
  /**
   * The reason why the checked email is invalid/undeliverable.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The risk score of the email is`high`, `medium`, `low` or `null`.
   * @member {module:model/DoEmailLookupResponse.RiskEnum} risk
   */
  exports.prototype['risk'] = undefined;
  /**
   * The email address type (domain) is `free` or `corporate`.
   * @member {module:model/DoEmailLookupResponse.AddressTypeEnum} addressType
   */
  exports.prototype['addressType'] = undefined;
  /**
   * This is be `true` if the domain is in the list of disposable email addresses, otherwise returns as `false`.
   * @member {Boolean} isDisposableAddress
   */
  exports.prototype['isDisposableAddress'] = undefined;
  /**
   * Null if nothing is suggested, however, if there is a potential typo in the email address, the closest suggestion is provided.
   * @member {String} suggestion
   */
  exports.prototype['suggestion'] = undefined;
  /**
   * Checks the mailbox part of the email whether it matches a specific role type (‘admin’, ‘sales’, ‘webmaster’)
   * @member {String} emailRole
   */
  exports.prototype['emailRole'] = undefined;
  /**
   * The local part of the email address.
   * @member {String} localPart
   */
  exports.prototype['localPart'] = undefined;
  /**
   * The domain part of the email address.
   * @member {String} domainPart
   */
  exports.prototype['domainPart'] = undefined;
  /**
   * Email exchange server domain name (MX record value).
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * MX record preference.
   * @member {Number} preference
   */
  exports.prototype['preference'] = undefined;
  /**
   * `true` if the email address exists in TextMagic whitelist. 
   * @member {Boolean} isInWhiteList
   */
  exports.prototype['isInWhiteList'] = undefined;
  /**
   * `true` if the email address exists in TextMagic blacklist. 
   * @member {Boolean} isInBlackList
   */
  exports.prototype['isInBlackList'] = undefined;
  /**
   * `true` if the email address domain has an MX record. 
   * @member {Boolean} hasMx
   */
  exports.prototype['hasMx'] = undefined;
  /**
   * @member {Boolean} hasAa
   */
  exports.prototype['hasAa'] = undefined;
  /**
   * `true` if the email address domain has an AAAA record (IPv6). 
   * @member {Boolean} hasAaaa
   */
  exports.prototype['hasAaaa'] = undefined;


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

  /**
   * Allowed values for the <code>risk</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RiskEnum = {
    /**
     * value: "high"
     * @const
     */
    "high": "high",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "low"
     * @const
     */
    "low": "low"  };

  /**
   * Allowed values for the <code>addressType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AddressTypeEnum = {
    /**
     * value: "corporate"
     * @const
     */
    "corporate": "corporate",
    /**
     * value: "free"
     * @const
     */
    "free": "free"  };


  return exports;
}));


