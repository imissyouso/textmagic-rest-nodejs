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
    root.TextmagicClient.UploadMessageAttachmentResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UploadMessageAttachmentResponse model module.
   * @module model/UploadMessageAttachmentResponse
   * @version 2.0.454
   */

  /**
   * Constructs a new <code>UploadMessageAttachmentResponse</code>.
   * @alias module:model/UploadMessageAttachmentResponse
   * @class
   * @param chars {Number} 
   * @param href {String} 
   * @param name {String} 
   * @param size {Number} 
   */
  var exports = function(chars, href, name, size) {
    var _this = this;

    _this['chars'] = chars;
    _this['href'] = href;
    _this['name'] = name;
    _this['size'] = size;
  };

  /**
   * Constructs a <code>UploadMessageAttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadMessageAttachmentResponse} obj Optional instance to populate.
   * @return {module:model/UploadMessageAttachmentResponse} The populated <code>UploadMessageAttachmentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chars')) {
        obj['chars'] = ApiClient.convertToType(data['chars'], 'Number');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} chars
   */
  exports.prototype['chars'] = undefined;
  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


