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
    root.TextmagicClient.Currency = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Currency model module.
   * @module model/Currency
   * @version 2.0.488
   */

  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:model/Currency
   * @class
   * @param id {String} Three-letter ISO currency ID.
   * @param unicodeSymbol {String} Unicode-compatible currency symbol.
   * @param htmlSymbol {String} HTML-compatible currency symbol.
   */
  var exports = function(id, unicodeSymbol, htmlSymbol) {
    var _this = this;

    _this['id'] = id;
    _this['unicodeSymbol'] = unicodeSymbol;
    _this['htmlSymbol'] = htmlSymbol;
  };

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Currency} obj Optional instance to populate.
   * @return {module:model/Currency} The populated <code>Currency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('unicodeSymbol')) {
        obj['unicodeSymbol'] = ApiClient.convertToType(data['unicodeSymbol'], 'String');
      }
      if (data.hasOwnProperty('htmlSymbol')) {
        obj['htmlSymbol'] = ApiClient.convertToType(data['htmlSymbol'], 'String');
      }
    }
    return obj;
  }

  /**
   * Three-letter ISO currency ID.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Unicode-compatible currency symbol.
   * @member {String} unicodeSymbol
   */
  exports.prototype['unicodeSymbol'] = undefined;
  /**
   * HTML-compatible currency symbol.
   * @member {String} htmlSymbol
   */
  exports.prototype['htmlSymbol'] = undefined;



  return exports;
}));


