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
    root.TextmagicClient.UpdateSurveyNodeInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateSurveyNodeInputObject model module.
   * @module model/UpdateSurveyNodeInputObject
   * @version 2.0.488
   */

  /**
   * Constructs a new <code>UpdateSurveyNodeInputObject</code>.
   * @alias module:model/UpdateSurveyNodeInputObject
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UpdateSurveyNodeInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSurveyNodeInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateSurveyNodeInputObject} The populated <code>UpdateSurveyNodeInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('isEndNode')) {
        obj['isEndNode'] = ApiClient.convertToType(data['isEndNode'], 'Boolean');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('sendDelay')) {
        obj['sendDelay'] = ApiClient.convertToType(data['sendDelay'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Node label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Define node is ending for survey. Default is false
   * @member {Boolean} isEndNode
   */
  exports.prototype['isEndNode'] = undefined;
  /**
   * Node body
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Define delay for sending question to recipients after previous answer. Default is 0
   * @member {Number} sendDelay
   */
  exports.prototype['sendDelay'] = undefined;



  return exports;
}));


