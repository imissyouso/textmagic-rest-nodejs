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
    root.TextmagicClient.DoAuthResponseMinVersions = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DoAuthResponseMinVersions model module.
   * @module model/DoAuthResponseMinVersions
   * @version 2.0.450
   */

  /**
   * Constructs a new <code>DoAuthResponseMinVersions</code>.
   * @alias module:model/DoAuthResponseMinVersions
   * @class
   * @param ios {Number} 
   * @param android {Number} 
   * @param desktop {Number} 
   */
  var exports = function(ios, android, desktop) {
    var _this = this;

    _this['ios'] = ios;
    _this['android'] = android;
    _this['desktop'] = desktop;
  };

  /**
   * Constructs a <code>DoAuthResponseMinVersions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DoAuthResponseMinVersions} obj Optional instance to populate.
   * @return {module:model/DoAuthResponseMinVersions} The populated <code>DoAuthResponseMinVersions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ios')) {
        obj['ios'] = ApiClient.convertToType(data['ios'], 'Number');
      }
      if (data.hasOwnProperty('android')) {
        obj['android'] = ApiClient.convertToType(data['android'], 'Number');
      }
      if (data.hasOwnProperty('desktop')) {
        obj['desktop'] = ApiClient.convertToType(data['desktop'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ios
   */
  exports.prototype['ios'] = undefined;
  /**
   * @member {Number} android
   */
  exports.prototype['android'] = undefined;
  /**
   * @member {Number} desktop
   */
  exports.prototype['desktop'] = undefined;



  return exports;
}));


