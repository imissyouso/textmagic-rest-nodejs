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
    root.TextmagicClient.ForwardedCall = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ForwardedCall model module.
   * @module model/ForwardedCall
   * @version 2.0.477
   */

  /**
   * Constructs a new <code>ForwardedCall</code>.
   * @alias module:model/ForwardedCall
   * @class
   * @param id {Number} 
   * @param callTime {Date} 
   * @param caller {String} 
   * @param via {String} Inbound id
   * @param receiver {String} 
   */
  var exports = function(id, callTime, caller, via, receiver) {
    var _this = this;

    _this['id'] = id;
    _this['callTime'] = callTime;
    _this['caller'] = caller;
    _this['via'] = via;
    _this['receiver'] = receiver;
  };

  /**
   * Constructs a <code>ForwardedCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForwardedCall} obj Optional instance to populate.
   * @return {module:model/ForwardedCall} The populated <code>ForwardedCall</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('callTime')) {
        obj['callTime'] = ApiClient.convertToType(data['callTime'], 'Date');
      }
      if (data.hasOwnProperty('caller')) {
        obj['caller'] = ApiClient.convertToType(data['caller'], 'String');
      }
      if (data.hasOwnProperty('via')) {
        obj['via'] = ApiClient.convertToType(data['via'], 'String');
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} callTime
   */
  exports.prototype['callTime'] = undefined;
  /**
   * @member {String} caller
   */
  exports.prototype['caller'] = undefined;
  /**
   * Inbound id
   * @member {String} via
   */
  exports.prototype['via'] = undefined;
  /**
   * @member {String} receiver
   */
  exports.prototype['receiver'] = undefined;



  return exports;
}));


