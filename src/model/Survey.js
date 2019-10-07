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
    define(['ApiClient', 'model/SurveyRecipient', 'model/SurveySenderCountries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SurveyRecipient'), require('./SurveySenderCountries'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.Survey = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.SurveyRecipient, root.TextmagicClient.SurveySenderCountries);
  }
}(this, function(ApiClient, SurveyRecipient, SurveySenderCountries) {
  'use strict';




  /**
   * The Survey model module.
   * @module model/Survey
   * @version 2.0.496
   */

  /**
   * Constructs a new <code>Survey</code>.
   * @alias module:model/Survey
   * @class
   * @param id {Number} 
   * @param name {String} 
   * @param status {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   */
  var exports = function(id, name, status, createdAt, updatedAt) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['status'] = status;
    _this['createdAt'] = createdAt;
    _this['updatedAt'] = updatedAt;


  };

  /**
   * Constructs a <code>Survey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Survey} obj Optional instance to populate.
   * @return {module:model/Survey} The populated <code>Survey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('receipents')) {
        obj['receipents'] = ApiClient.convertToType(data['receipents'], [SurveyRecipient]);
      }
      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], [SurveySenderCountries]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {Array.<module:model/SurveyRecipient>} receipents
   */
  exports.prototype['receipents'] = undefined;
  /**
   * @member {Array.<module:model/SurveySenderCountries>} countries
   */
  exports.prototype['countries'] = undefined;



  return exports;
}));


