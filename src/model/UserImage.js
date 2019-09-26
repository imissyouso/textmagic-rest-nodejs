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
    root.TextmagicClient.UserImage = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserImage model module.
   * @module model/UserImage
   * @version 2.0.406
   */

  /**
   * Constructs a new <code>UserImage</code>.
   * @alias module:model/UserImage
   * @class
   * @param href {String} 
   */
  var exports = function(href) {
    var _this = this;

    _this['href'] = href;
  };

  /**
   * Constructs a <code>UserImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserImage} obj Optional instance to populate.
   * @return {module:model/UserImage} The populated <code>UserImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;



  return exports;
}));


