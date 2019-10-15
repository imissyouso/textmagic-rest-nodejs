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
    root.TextmagicClient.Timezone = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timezone model module.
   * @module model/Timezone
   * @version 2.0.631
   */

  /**
   * Constructs a new <code>Timezone</code>.
   * @alias module:model/Timezone
   * @class
   * @param id {Number} Internal timezone ID.
   * @param area {String} Timezone area.
   * @param dst {Number} Is Daylight saving time used in this timezone?
   * @param offset {Number} Offset from UTC time in seconds. In this example it is 21600/60/60=6 hours.
   * @param timezone {String} User-friendly timezone name (with spaces replaced by underscores).
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
   * Internal timezone ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Timezone area.
   * @member {String} area
   */
  exports.prototype['area'] = undefined;
  /**
   * Is Daylight saving time used in this timezone?
   * @member {Number} dst
   */
  exports.prototype['dst'] = undefined;
  /**
   * Offset from UTC time in seconds. In this example it is 21600/60/60=6 hours.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * User-friendly timezone name (with spaces replaced by underscores).
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


