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
    root.TextmagicClient.Invoice = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Invoice model module.
   * @module model/Invoice
   * @version 2.0.430
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   * @class
   * @param id {Number} 
   * @param bundle {Number} 
   * @param currency {String} 
   * @param vat {Number} 
   * @param paymentMethod {String} 
   */
  var exports = function(id, bundle, currency, vat, paymentMethod) {
    var _this = this;

    _this['id'] = id;
    _this['bundle'] = bundle;
    _this['currency'] = currency;
    _this['vat'] = vat;
    _this['paymentMethod'] = paymentMethod;
  };

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoice} obj Optional instance to populate.
   * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('bundle')) {
        obj['bundle'] = ApiClient.convertToType(data['bundle'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('vat')) {
        obj['vat'] = ApiClient.convertToType(data['vat'], 'Number');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} bundle
   */
  exports.prototype['bundle'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Number} vat
   */
  exports.prototype['vat'] = undefined;
  /**
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;



  return exports;
}));


