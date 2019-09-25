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
    define(['ApiClient', 'model/Contact', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contact'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.Chat = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Contact, root.TextmagicClient.Country);
  }
}(this, function(ApiClient, Contact, Country) {
  'use strict';




  /**
   * The Chat model module.
   * @module model/Chat
   * @version 2.0.397
   */

  /**
   * Constructs a new <code>Chat</code>.
   * @alias module:model/Chat
   * @class
   * @param id {Number} 
   * @param originalId {Number} 
   * @param phone {String} 
   * @param contact {module:model/Contact} 
   * @param unsubscribedContactId {Number} 
   * @param unread {Number} 
   * @param updatedAt {Date} 
   * @param status {String} 
   * @param mute {Number} 
   * @param lastMessage {String} 
   * @param direction {String} 
   * @param from {String} 
   * @param mutedUntil {String} 
   * @param timeLeftMute {Number} 
   * @param country {module:model/Country} 
   */
  var exports = function(id, originalId, phone, contact, unsubscribedContactId, unread, updatedAt, status, mute, lastMessage, direction, from, mutedUntil, timeLeftMute, country) {
    var _this = this;

    _this['id'] = id;
    _this['originalId'] = originalId;
    _this['phone'] = phone;
    _this['contact'] = contact;
    _this['unsubscribedContactId'] = unsubscribedContactId;
    _this['unread'] = unread;
    _this['updatedAt'] = updatedAt;
    _this['status'] = status;
    _this['mute'] = mute;
    _this['lastMessage'] = lastMessage;
    _this['direction'] = direction;
    _this['from'] = from;
    _this['mutedUntil'] = mutedUntil;
    _this['timeLeftMute'] = timeLeftMute;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>Chat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Chat} obj Optional instance to populate.
   * @return {module:model/Chat} The populated <code>Chat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('originalId')) {
        obj['originalId'] = ApiClient.convertToType(data['originalId'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = Contact.constructFromObject(data['contact']);
      }
      if (data.hasOwnProperty('unsubscribedContactId')) {
        obj['unsubscribedContactId'] = ApiClient.convertToType(data['unsubscribedContactId'], 'Number');
      }
      if (data.hasOwnProperty('unread')) {
        obj['unread'] = ApiClient.convertToType(data['unread'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('mute')) {
        obj['mute'] = ApiClient.convertToType(data['mute'], 'Number');
      }
      if (data.hasOwnProperty('lastMessage')) {
        obj['lastMessage'] = ApiClient.convertToType(data['lastMessage'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('mutedUntil')) {
        obj['mutedUntil'] = ApiClient.convertToType(data['mutedUntil'], 'String');
      }
      if (data.hasOwnProperty('timeLeftMute')) {
        obj['timeLeftMute'] = ApiClient.convertToType(data['timeLeftMute'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} originalId
   */
  exports.prototype['originalId'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {module:model/Contact} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * @member {Number} unsubscribedContactId
   */
  exports.prototype['unsubscribedContactId'] = undefined;
  /**
   * @member {Number} unread
   */
  exports.prototype['unread'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} mute
   */
  exports.prototype['mute'] = undefined;
  /**
   * @member {String} lastMessage
   */
  exports.prototype['lastMessage'] = undefined;
  /**
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {String} mutedUntil
   */
  exports.prototype['mutedUntil'] = undefined;
  /**
   * @member {Number} timeLeftMute
   */
  exports.prototype['timeLeftMute'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


