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
    root.TextmagicClient.MuteChatInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MuteChatInputObject model module.
   * @module model/MuteChatInputObject
   * @version 2.0.441
   */

  /**
   * Constructs a new <code>MuteChatInputObject</code>.
   * @alias module:model/MuteChatInputObject
   * @class
   * @param id {Number} Chat ID
   * @param mute {Boolean} Mute value
   */
  var exports = function(id, mute) {
    var _this = this;

    _this['id'] = id;
    _this['mute'] = mute;

  };

  /**
   * Constructs a <code>MuteChatInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MuteChatInputObject} obj Optional instance to populate.
   * @return {module:model/MuteChatInputObject} The populated <code>MuteChatInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
      }
      if (data.hasOwnProperty('for')) {
        obj['for'] = ApiClient.convertToType(data['for'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Chat ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Mute value
   * @member {Boolean} mute
   */
  exports.prototype['mute'] = undefined;
  /**
   * Mute for N hours
   * @member {Number} for
   */
  exports.prototype['for'] = undefined;



  return exports;
}));


