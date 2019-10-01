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
    root.TextmagicClient.SurveySenderCountries = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SurveySenderCountries model module.
   * @module model/SurveySenderCountries
   * @version 2.0.430
   */

  /**
   * Constructs a new <code>SurveySenderCountries</code>.
   * @alias module:model/SurveySenderCountries
   * @class
   * @param id {Number} 
   * @param countryName {String} 
   * @param fromNumber {String} 
   * @param allowDedicated {Boolean} 
   */
  var exports = function(id, countryName, fromNumber, allowDedicated) {
    var _this = this;

    _this['id'] = id;
    _this['countryName'] = countryName;
    _this['fromNumber'] = fromNumber;
    _this['allowDedicated'] = allowDedicated;
  };

  /**
   * Constructs a <code>SurveySenderCountries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveySenderCountries} obj Optional instance to populate.
   * @return {module:model/SurveySenderCountries} The populated <code>SurveySenderCountries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('fromNumber')) {
        obj['fromNumber'] = ApiClient.convertToType(data['fromNumber'], 'String');
      }
      if (data.hasOwnProperty('allowDedicated')) {
        obj['allowDedicated'] = ApiClient.convertToType(data['allowDedicated'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * @member {String} fromNumber
   */
  exports.prototype['fromNumber'] = undefined;
  /**
   * @member {Boolean} allowDedicated
   */
  exports.prototype['allowDedicated'] = undefined;



  return exports;
}));


