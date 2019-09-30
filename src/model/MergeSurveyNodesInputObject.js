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
    root.TextmagicClient.MergeSurveyNodesInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MergeSurveyNodesInputObject model module.
   * @module model/MergeSurveyNodesInputObject
   * @version 2.0.428
   */

  /**
   * Constructs a new <code>MergeSurveyNodesInputObject</code>.
   * @alias module:model/MergeSurveyNodesInputObject
   * @class
   * @param firstNode {Number} First node id
   * @param secondNode {Number} Second node id
   */
  var exports = function(firstNode, secondNode) {
    var _this = this;

    _this['firstNode'] = firstNode;
    _this['secondNode'] = secondNode;
  };

  /**
   * Constructs a <code>MergeSurveyNodesInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MergeSurveyNodesInputObject} obj Optional instance to populate.
   * @return {module:model/MergeSurveyNodesInputObject} The populated <code>MergeSurveyNodesInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstNode')) {
        obj['firstNode'] = ApiClient.convertToType(data['firstNode'], 'Number');
      }
      if (data.hasOwnProperty('secondNode')) {
        obj['secondNode'] = ApiClient.convertToType(data['secondNode'], 'Number');
      }
    }
    return obj;
  }

  /**
   * First node id
   * @member {Number} firstNode
   */
  exports.prototype['firstNode'] = undefined;
  /**
   * Second node id
   * @member {Number} secondNode
   */
  exports.prototype['secondNode'] = undefined;



  return exports;
}));


