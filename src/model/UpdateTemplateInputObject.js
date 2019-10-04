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
    root.TextmagicClient.UpdateTemplateInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateTemplateInputObject model module.
   * @module model/UpdateTemplateInputObject
   * @version 2.0.477
   */

  /**
   * Constructs a new <code>UpdateTemplateInputObject</code>.
   * @alias module:model/UpdateTemplateInputObject
   * @class
   * @param name {String} Template name
   * @param content {String} Template text. May contain tags inside braces
   */
  var exports = function(name, content) {
    var _this = this;

    _this['name'] = name;
    _this['content'] = content;
  };

  /**
   * Constructs a <code>UpdateTemplateInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateTemplateInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateTemplateInputObject} The populated <code>UpdateTemplateInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * Template name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Template text. May contain tags inside braces
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


