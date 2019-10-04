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
    root.TextmagicClient.GetSurveyNodesResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSurveyNodesResponse model module.
   * @module model/GetSurveyNodesResponse
   * @version 2.0.475
   */

  /**
   * Constructs a new <code>GetSurveyNodesResponse</code>.
   * @alias module:model/GetSurveyNodesResponse
   * @class
   * @param nodes {Object} 
   * @param rows {Object} 
   */
  var exports = function(nodes, rows) {
    var _this = this;

    _this['nodes'] = nodes;
    _this['rows'] = rows;
  };

  /**
   * Constructs a <code>GetSurveyNodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSurveyNodesResponse} obj Optional instance to populate.
   * @return {module:model/GetSurveyNodesResponse} The populated <code>GetSurveyNodesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodes')) {
        obj['nodes'] = ApiClient.convertToType(data['nodes'], Object);
      }
      if (data.hasOwnProperty('rows')) {
        obj['rows'] = ApiClient.convertToType(data['rows'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} nodes
   */
  exports.prototype['nodes'] = undefined;
  /**
   * @member {Object} rows
   */
  exports.prototype['rows'] = undefined;



  return exports;
}));


