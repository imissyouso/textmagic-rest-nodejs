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
    root.TextmagicClient.Timezone = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timezone model module.
   * @module model/Timezone
   * @version 2.0.396
   */

  /**
   * Constructs a new <code>Timezone</code>.
   * @alias module:model/Timezone
   * @class
   * @param id {Number} 
   * @param area {String} 
   * @param dst {Number} 
   * @param offset {Number} 
   * @param timezone {String} 
   */
  var exports = function(id, area, dst, offset, timezone) {
    var _this = this;

    _this['id'] = id;
    _this['area'] = area;
    _this['dst'] = dst;
    _this['offset'] = offset;
    _this['timezone'] = timezone;
  };

  /**
   * Constructs a <code>Timezone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timezone} obj Optional instance to populate.
   * @return {module:model/Timezone} The populated <code>Timezone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('area')) {
        obj['area'] = ApiClient.convertToType(data['area'], 'String');
      }
      if (data.hasOwnProperty('dst')) {
        obj['dst'] = ApiClient.convertToType(data['dst'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} area
   */
  exports.prototype['area'] = undefined;
  /**
   * @member {Number} dst
   */
  exports.prototype['dst'] = undefined;
  /**
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


