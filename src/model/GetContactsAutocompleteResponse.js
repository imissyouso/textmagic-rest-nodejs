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
    root.TextmagicClient.GetContactsAutocompleteResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetContactsAutocompleteResponse model module.
   * @module model/GetContactsAutocompleteResponse
   * @version 2.0.406
   */

  /**
   * Constructs a new <code>GetContactsAutocompleteResponse</code>.
   * @alias module:model/GetContactsAutocompleteResponse
   * @class
   * @param entityId {Number} Id of entity. 0 if object is a Reply
   * @param entityType {module:model/GetContactsAutocompleteResponse.EntityTypeEnum} 
   * @param value {String} Id of contact/list if entityType is contact/list OR phone number if entityType is reply
   * @param label {String} Name of the contact/list if entityType is contact/list OR phone number if entityType is reply
   * @param sharedBy {String} If contact or list was shared by another user then name if this user will be shown
   * @param avatar {String} 
   * @param favorited {Boolean} If contact was marked as favourited
   * @param userId {Number} Owner id of the contact/list (if it was shared)
   * @param countryName {String} 
   * @param qposition {Number} 
   * @param rposition {Number} 
   */
  var exports = function(entityId, entityType, value, label, sharedBy, avatar, favorited, userId, countryName, qposition, rposition) {
    var _this = this;

    _this['entityId'] = entityId;
    _this['entityType'] = entityType;
    _this['value'] = value;
    _this['label'] = label;
    _this['sharedBy'] = sharedBy;
    _this['avatar'] = avatar;
    _this['favorited'] = favorited;
    _this['userId'] = userId;
    _this['countryName'] = countryName;
    _this['qposition'] = qposition;
    _this['rposition'] = rposition;
  };

  /**
   * Constructs a <code>GetContactsAutocompleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactsAutocompleteResponse} obj Optional instance to populate.
   * @return {module:model/GetContactsAutocompleteResponse} The populated <code>GetContactsAutocompleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
      }
      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('sharedBy')) {
        obj['sharedBy'] = ApiClient.convertToType(data['sharedBy'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('favorited')) {
        obj['favorited'] = ApiClient.convertToType(data['favorited'], 'Boolean');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('qposition')) {
        obj['qposition'] = ApiClient.convertToType(data['qposition'], 'Number');
      }
      if (data.hasOwnProperty('rposition')) {
        obj['rposition'] = ApiClient.convertToType(data['rposition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Id of entity. 0 if object is a Reply
   * @member {Number} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * 
   * @member {module:model/GetContactsAutocompleteResponse.EntityTypeEnum} entityType
   */
  exports.prototype['entityType'] = undefined;
  /**
   * Id of contact/list if entityType is contact/list OR phone number if entityType is reply
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Name of the contact/list if entityType is contact/list OR phone number if entityType is reply
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * If contact or list was shared by another user then name if this user will be shown
   * @member {String} sharedBy
   */
  exports.prototype['sharedBy'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * If contact was marked as favourited
   * @member {Boolean} favorited
   */
  exports.prototype['favorited'] = undefined;
  /**
   * Owner id of the contact/list (if it was shared)
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * @member {Number} qposition
   */
  exports.prototype['qposition'] = undefined;
  /**
   * @member {Number} rposition
   */
  exports.prototype['rposition'] = undefined;


  /**
   * Allowed values for the <code>entityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityTypeEnum = {
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "contact"
     * @const
     */
    "contact": "contact",
    /**
     * value: "reply"
     * @const
     */
    "reply": "reply"  };


  return exports;
}));


