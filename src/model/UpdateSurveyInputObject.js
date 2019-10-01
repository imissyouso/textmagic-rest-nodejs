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
    root.TextmagicClient.UpdateSurveyInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateSurveyInputObject model module.
   * @module model/UpdateSurveyInputObject
   * @version 2.0.431
   */

  /**
   * Constructs a new <code>UpdateSurveyInputObject</code>.
   * @alias module:model/UpdateSurveyInputObject
   * @class
   * @param name {String} Survey name
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;




  };

  /**
   * Constructs a <code>UpdateSurveyInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSurveyInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateSurveyInputObject} The populated <code>UpdateSurveyInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'String');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], 'String');
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], Object);
      }
    }
    return obj;
  }

  /**
   * Survey name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Array of contact resources id message will be sent to
   * @member {String} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Array of list resources id message will be sent to
   * @member {String} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Array of E.164 phone numbers message will be sent to
   * @member {String} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Country values mapping (country => inbound phone id), e.g. country[GB] = \"123\", country[US] = \"123\"
   * @member {Object} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


