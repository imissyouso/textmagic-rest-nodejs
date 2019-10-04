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
    define(['ApiClient', 'model/MessageSession', 'model/MessagesIcsParameters', 'model/MessagesIcsTextParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSession'), require('./MessagesIcsParameters'), require('./MessagesIcsTextParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.MessagesIcs = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession, root.TextmagicClient.MessagesIcsParameters, root.TextmagicClient.MessagesIcsTextParameters);
  }
}(this, function(ApiClient, MessageSession, MessagesIcsParameters, MessagesIcsTextParameters) {
  'use strict';




  /**
   * The MessagesIcs model module.
   * @module model/MessagesIcs
   * @version 2.0.487
   */

  /**
   * Constructs a new <code>MessagesIcs</code>.
   * @alias module:model/MessagesIcs
   * @class
   * @param id {Number} Schedule ID.
   * @param nextSend {Date} Next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format. 
   * @param rrule {String} [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string. 
   * @param session {module:model/MessageSession} 
   * @param lastSent {Date} 
   * @param contactName {String} 
   * @param parameters {module:model/MessagesIcsParameters} 
   * @param type {String} 
   * @param summary {String} 
   * @param textParameters {module:model/MessagesIcsTextParameters} 
   * @param firstOccurrence {Date} 
   * @param lastOccurrence {Date} 
   * @param recipientsCount {Number} 
   * @param timezone {String} 
   * @param completed {Boolean} 
   * @param avatar {String} 
   * @param createdAt {Date} 
   */
  var exports = function(id, nextSend, rrule, session, lastSent, contactName, parameters, type, summary, textParameters, firstOccurrence, lastOccurrence, recipientsCount, timezone, completed, avatar, createdAt) {
    var _this = this;

    _this['id'] = id;
    _this['nextSend'] = nextSend;
    _this['rrule'] = rrule;
    _this['session'] = session;
    _this['lastSent'] = lastSent;
    _this['contactName'] = contactName;
    _this['parameters'] = parameters;
    _this['type'] = type;
    _this['summary'] = summary;
    _this['textParameters'] = textParameters;
    _this['firstOccurrence'] = firstOccurrence;
    _this['lastOccurrence'] = lastOccurrence;
    _this['recipientsCount'] = recipientsCount;
    _this['timezone'] = timezone;
    _this['completed'] = completed;
    _this['avatar'] = avatar;
    _this['createdAt'] = createdAt;
  };

  /**
   * Constructs a <code>MessagesIcs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcs} obj Optional instance to populate.
   * @return {module:model/MessagesIcs} The populated <code>MessagesIcs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('nextSend')) {
        obj['nextSend'] = ApiClient.convertToType(data['nextSend'], 'Date');
      }
      if (data.hasOwnProperty('rrule')) {
        obj['rrule'] = ApiClient.convertToType(data['rrule'], 'String');
      }
      if (data.hasOwnProperty('session')) {
        obj['session'] = MessageSession.constructFromObject(data['session']);
      }
      if (data.hasOwnProperty('lastSent')) {
        obj['lastSent'] = ApiClient.convertToType(data['lastSent'], 'Date');
      }
      if (data.hasOwnProperty('contactName')) {
        obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = MessagesIcsParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('textParameters')) {
        obj['textParameters'] = MessagesIcsTextParameters.constructFromObject(data['textParameters']);
      }
      if (data.hasOwnProperty('firstOccurrence')) {
        obj['firstOccurrence'] = ApiClient.convertToType(data['firstOccurrence'], 'Date');
      }
      if (data.hasOwnProperty('lastOccurrence')) {
        obj['lastOccurrence'] = ApiClient.convertToType(data['lastOccurrence'], 'Date');
      }
      if (data.hasOwnProperty('recipientsCount')) {
        obj['recipientsCount'] = ApiClient.convertToType(data['recipientsCount'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Schedule ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format. 
   * @member {Date} nextSend
   */
  exports.prototype['nextSend'] = undefined;
  /**
   * [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string. 
   * @member {String} rrule
   */
  exports.prototype['rrule'] = undefined;
  /**
   * @member {module:model/MessageSession} session
   */
  exports.prototype['session'] = undefined;
  /**
   * @member {Date} lastSent
   */
  exports.prototype['lastSent'] = undefined;
  /**
   * @member {String} contactName
   */
  exports.prototype['contactName'] = undefined;
  /**
   * @member {module:model/MessagesIcsParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * @member {module:model/MessagesIcsTextParameters} textParameters
   */
  exports.prototype['textParameters'] = undefined;
  /**
   * @member {Date} firstOccurrence
   */
  exports.prototype['firstOccurrence'] = undefined;
  /**
   * @member {Date} lastOccurrence
   */
  exports.prototype['lastOccurrence'] = undefined;
  /**
   * @member {Number} recipientsCount
   */
  exports.prototype['recipientsCount'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {Boolean} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;



  return exports;
}));


