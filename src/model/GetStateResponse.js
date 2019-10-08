/**
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
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
    root.TextmagicClient.GetStateResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetStateResponse model module.
   * @module model/GetStateResponse
   * @version 2.0.543
   */

  /**
   * Constructs a new <code>GetStateResponse</code>.
   * @alias module:model/GetStateResponse
   * @class
   * @param systemCacheClear {Number} 
   * @param systemExit {Number} 
   * @param systemAlert {Number} 
   * @param systemAccountStateChanged {Number} 
   * @param messageDeleted {Number} 
   * @param messageIncoming {Number} 
   * @param messageIncomingDeleted {Number} 
   * @param messageStateChanged {Number} 
   * @param messageBulkEnd {Number} 
   * @param messageWipeEnd {Number} 
   * @param messageSent {Number} 
   * @param messageSessionDeleted {Number} 
   * @param messageCacheClear {Number} 
   * @param messageIncomingCacheClear {Number} 
   * @param messageScheduleAdded {Number} 
   * @param messageScheduleStateChanged {Number} 
   * @param messageScheduleDeleted {Number} 
   * @param messageScheduleCacheClear {Number} 
   * @param messageTemplateCacheClear {Number} 
   * @param callFinished {Number} 
   * @param chatCreated {Number} 
   * @param chatMarkedAsRead {Number} 
   * @param chatMuted {Number} 
   * @param chatUnmuted {Number} 
   * @param chatDeleted {Number} 
   * @param chatClosed {Number} 
   * @param chatReopened {Number} 
   * @param chatCacheClear {Number} 
   * @param contactAdded {Number} 
   * @param contactDeleted {Number} 
   * @param contactStateChanged {Number} 
   * @param listAdded {Number} 
   * @param listDeleted {Number} 
   * @param listStateChanged {Number} 
   * @param contactWipeEnd {Number} 
   * @param contactImportEnd {Number} 
   * @param contactCacheClear {Number} 
   * @param listCacheClear {Number} 
   * @param customFieldsCacheClear {Number} 
   */
  var exports = function(systemCacheClear, systemExit, systemAlert, systemAccountStateChanged, messageDeleted, messageIncoming, messageIncomingDeleted, messageStateChanged, messageBulkEnd, messageWipeEnd, messageSent, messageSessionDeleted, messageCacheClear, messageIncomingCacheClear, messageScheduleAdded, messageScheduleStateChanged, messageScheduleDeleted, messageScheduleCacheClear, messageTemplateCacheClear, callFinished, chatCreated, chatMarkedAsRead, chatMuted, chatUnmuted, chatDeleted, chatClosed, chatReopened, chatCacheClear, contactAdded, contactDeleted, contactStateChanged, listAdded, listDeleted, listStateChanged, contactWipeEnd, contactImportEnd, contactCacheClear, listCacheClear, customFieldsCacheClear) {
    var _this = this;

    _this['systemCacheClear'] = systemCacheClear;
    _this['systemExit'] = systemExit;
    _this['systemAlert'] = systemAlert;
    _this['systemAccountStateChanged'] = systemAccountStateChanged;
    _this['messageDeleted'] = messageDeleted;
    _this['messageIncoming'] = messageIncoming;
    _this['messageIncomingDeleted'] = messageIncomingDeleted;
    _this['messageStateChanged'] = messageStateChanged;
    _this['messageBulkEnd'] = messageBulkEnd;
    _this['messageWipeEnd'] = messageWipeEnd;
    _this['messageSent'] = messageSent;
    _this['messageSessionDeleted'] = messageSessionDeleted;
    _this['messageCacheClear'] = messageCacheClear;
    _this['messageIncomingCacheClear'] = messageIncomingCacheClear;
    _this['messageScheduleAdded'] = messageScheduleAdded;
    _this['messageScheduleStateChanged'] = messageScheduleStateChanged;
    _this['messageScheduleDeleted'] = messageScheduleDeleted;
    _this['messageScheduleCacheClear'] = messageScheduleCacheClear;
    _this['messageTemplateCacheClear'] = messageTemplateCacheClear;
    _this['callFinished'] = callFinished;
    _this['chatCreated'] = chatCreated;
    _this['chatMarkedAsRead'] = chatMarkedAsRead;
    _this['chatMuted'] = chatMuted;
    _this['chatUnmuted'] = chatUnmuted;
    _this['chatDeleted'] = chatDeleted;
    _this['chatClosed'] = chatClosed;
    _this['chatReopened'] = chatReopened;
    _this['chatCacheClear'] = chatCacheClear;
    _this['contactAdded'] = contactAdded;
    _this['contactDeleted'] = contactDeleted;
    _this['contactStateChanged'] = contactStateChanged;
    _this['listAdded'] = listAdded;
    _this['listDeleted'] = listDeleted;
    _this['listStateChanged'] = listStateChanged;
    _this['contactWipeEnd'] = contactWipeEnd;
    _this['contactImportEnd'] = contactImportEnd;
    _this['contactCacheClear'] = contactCacheClear;
    _this['listCacheClear'] = listCacheClear;
    _this['customFieldsCacheClear'] = customFieldsCacheClear;
  };

  /**
   * Constructs a <code>GetStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStateResponse} obj Optional instance to populate.
   * @return {module:model/GetStateResponse} The populated <code>GetStateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('systemCacheClear')) {
        obj['systemCacheClear'] = ApiClient.convertToType(data['systemCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('systemExit')) {
        obj['systemExit'] = ApiClient.convertToType(data['systemExit'], 'Number');
      }
      if (data.hasOwnProperty('systemAlert')) {
        obj['systemAlert'] = ApiClient.convertToType(data['systemAlert'], 'Number');
      }
      if (data.hasOwnProperty('systemAccountStateChanged')) {
        obj['systemAccountStateChanged'] = ApiClient.convertToType(data['systemAccountStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageDeleted')) {
        obj['messageDeleted'] = ApiClient.convertToType(data['messageDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageIncoming')) {
        obj['messageIncoming'] = ApiClient.convertToType(data['messageIncoming'], 'Number');
      }
      if (data.hasOwnProperty('messageIncomingDeleted')) {
        obj['messageIncomingDeleted'] = ApiClient.convertToType(data['messageIncomingDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageStateChanged')) {
        obj['messageStateChanged'] = ApiClient.convertToType(data['messageStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageBulkEnd')) {
        obj['messageBulkEnd'] = ApiClient.convertToType(data['messageBulkEnd'], 'Number');
      }
      if (data.hasOwnProperty('messageWipeEnd')) {
        obj['messageWipeEnd'] = ApiClient.convertToType(data['messageWipeEnd'], 'Number');
      }
      if (data.hasOwnProperty('messageSent')) {
        obj['messageSent'] = ApiClient.convertToType(data['messageSent'], 'Number');
      }
      if (data.hasOwnProperty('messageSessionDeleted')) {
        obj['messageSessionDeleted'] = ApiClient.convertToType(data['messageSessionDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageCacheClear')) {
        obj['messageCacheClear'] = ApiClient.convertToType(data['messageCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageIncomingCacheClear')) {
        obj['messageIncomingCacheClear'] = ApiClient.convertToType(data['messageIncomingCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleAdded')) {
        obj['messageScheduleAdded'] = ApiClient.convertToType(data['messageScheduleAdded'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleStateChanged')) {
        obj['messageScheduleStateChanged'] = ApiClient.convertToType(data['messageScheduleStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleDeleted')) {
        obj['messageScheduleDeleted'] = ApiClient.convertToType(data['messageScheduleDeleted'], 'Number');
      }
      if (data.hasOwnProperty('messageScheduleCacheClear')) {
        obj['messageScheduleCacheClear'] = ApiClient.convertToType(data['messageScheduleCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('messageTemplateCacheClear')) {
        obj['messageTemplateCacheClear'] = ApiClient.convertToType(data['messageTemplateCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('callFinished')) {
        obj['callFinished'] = ApiClient.convertToType(data['callFinished'], 'Number');
      }
      if (data.hasOwnProperty('chatCreated')) {
        obj['chatCreated'] = ApiClient.convertToType(data['chatCreated'], 'Number');
      }
      if (data.hasOwnProperty('chatMarkedAsRead')) {
        obj['chatMarkedAsRead'] = ApiClient.convertToType(data['chatMarkedAsRead'], 'Number');
      }
      if (data.hasOwnProperty('chatMuted')) {
        obj['chatMuted'] = ApiClient.convertToType(data['chatMuted'], 'Number');
      }
      if (data.hasOwnProperty('chatUnmuted')) {
        obj['chatUnmuted'] = ApiClient.convertToType(data['chatUnmuted'], 'Number');
      }
      if (data.hasOwnProperty('chatDeleted')) {
        obj['chatDeleted'] = ApiClient.convertToType(data['chatDeleted'], 'Number');
      }
      if (data.hasOwnProperty('chatClosed')) {
        obj['chatClosed'] = ApiClient.convertToType(data['chatClosed'], 'Number');
      }
      if (data.hasOwnProperty('chatReopened')) {
        obj['chatReopened'] = ApiClient.convertToType(data['chatReopened'], 'Number');
      }
      if (data.hasOwnProperty('chatCacheClear')) {
        obj['chatCacheClear'] = ApiClient.convertToType(data['chatCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('contactAdded')) {
        obj['contactAdded'] = ApiClient.convertToType(data['contactAdded'], 'Number');
      }
      if (data.hasOwnProperty('contactDeleted')) {
        obj['contactDeleted'] = ApiClient.convertToType(data['contactDeleted'], 'Number');
      }
      if (data.hasOwnProperty('contactStateChanged')) {
        obj['contactStateChanged'] = ApiClient.convertToType(data['contactStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('listAdded')) {
        obj['listAdded'] = ApiClient.convertToType(data['listAdded'], 'Number');
      }
      if (data.hasOwnProperty('listDeleted')) {
        obj['listDeleted'] = ApiClient.convertToType(data['listDeleted'], 'Number');
      }
      if (data.hasOwnProperty('listStateChanged')) {
        obj['listStateChanged'] = ApiClient.convertToType(data['listStateChanged'], 'Number');
      }
      if (data.hasOwnProperty('contactWipeEnd')) {
        obj['contactWipeEnd'] = ApiClient.convertToType(data['contactWipeEnd'], 'Number');
      }
      if (data.hasOwnProperty('contactImportEnd')) {
        obj['contactImportEnd'] = ApiClient.convertToType(data['contactImportEnd'], 'Number');
      }
      if (data.hasOwnProperty('contactCacheClear')) {
        obj['contactCacheClear'] = ApiClient.convertToType(data['contactCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('listCacheClear')) {
        obj['listCacheClear'] = ApiClient.convertToType(data['listCacheClear'], 'Number');
      }
      if (data.hasOwnProperty('customFieldsCacheClear')) {
        obj['customFieldsCacheClear'] = ApiClient.convertToType(data['customFieldsCacheClear'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} systemCacheClear
   */
  exports.prototype['systemCacheClear'] = undefined;
  /**
   * @member {Number} systemExit
   */
  exports.prototype['systemExit'] = undefined;
  /**
   * @member {Number} systemAlert
   */
  exports.prototype['systemAlert'] = undefined;
  /**
   * @member {Number} systemAccountStateChanged
   */
  exports.prototype['systemAccountStateChanged'] = undefined;
  /**
   * @member {Number} messageDeleted
   */
  exports.prototype['messageDeleted'] = undefined;
  /**
   * @member {Number} messageIncoming
   */
  exports.prototype['messageIncoming'] = undefined;
  /**
   * @member {Number} messageIncomingDeleted
   */
  exports.prototype['messageIncomingDeleted'] = undefined;
  /**
   * @member {Number} messageStateChanged
   */
  exports.prototype['messageStateChanged'] = undefined;
  /**
   * @member {Number} messageBulkEnd
   */
  exports.prototype['messageBulkEnd'] = undefined;
  /**
   * @member {Number} messageWipeEnd
   */
  exports.prototype['messageWipeEnd'] = undefined;
  /**
   * @member {Number} messageSent
   */
  exports.prototype['messageSent'] = undefined;
  /**
   * @member {Number} messageSessionDeleted
   */
  exports.prototype['messageSessionDeleted'] = undefined;
  /**
   * @member {Number} messageCacheClear
   */
  exports.prototype['messageCacheClear'] = undefined;
  /**
   * @member {Number} messageIncomingCacheClear
   */
  exports.prototype['messageIncomingCacheClear'] = undefined;
  /**
   * @member {Number} messageScheduleAdded
   */
  exports.prototype['messageScheduleAdded'] = undefined;
  /**
   * @member {Number} messageScheduleStateChanged
   */
  exports.prototype['messageScheduleStateChanged'] = undefined;
  /**
   * @member {Number} messageScheduleDeleted
   */
  exports.prototype['messageScheduleDeleted'] = undefined;
  /**
   * @member {Number} messageScheduleCacheClear
   */
  exports.prototype['messageScheduleCacheClear'] = undefined;
  /**
   * @member {Number} messageTemplateCacheClear
   */
  exports.prototype['messageTemplateCacheClear'] = undefined;
  /**
   * @member {Number} callFinished
   */
  exports.prototype['callFinished'] = undefined;
  /**
   * @member {Number} chatCreated
   */
  exports.prototype['chatCreated'] = undefined;
  /**
   * @member {Number} chatMarkedAsRead
   */
  exports.prototype['chatMarkedAsRead'] = undefined;
  /**
   * @member {Number} chatMuted
   */
  exports.prototype['chatMuted'] = undefined;
  /**
   * @member {Number} chatUnmuted
   */
  exports.prototype['chatUnmuted'] = undefined;
  /**
   * @member {Number} chatDeleted
   */
  exports.prototype['chatDeleted'] = undefined;
  /**
   * @member {Number} chatClosed
   */
  exports.prototype['chatClosed'] = undefined;
  /**
   * @member {Number} chatReopened
   */
  exports.prototype['chatReopened'] = undefined;
  /**
   * @member {Number} chatCacheClear
   */
  exports.prototype['chatCacheClear'] = undefined;
  /**
   * @member {Number} contactAdded
   */
  exports.prototype['contactAdded'] = undefined;
  /**
   * @member {Number} contactDeleted
   */
  exports.prototype['contactDeleted'] = undefined;
  /**
   * @member {Number} contactStateChanged
   */
  exports.prototype['contactStateChanged'] = undefined;
  /**
   * @member {Number} listAdded
   */
  exports.prototype['listAdded'] = undefined;
  /**
   * @member {Number} listDeleted
   */
  exports.prototype['listDeleted'] = undefined;
  /**
   * @member {Number} listStateChanged
   */
  exports.prototype['listStateChanged'] = undefined;
  /**
   * @member {Number} contactWipeEnd
   */
  exports.prototype['contactWipeEnd'] = undefined;
  /**
   * @member {Number} contactImportEnd
   */
  exports.prototype['contactImportEnd'] = undefined;
  /**
   * @member {Number} contactCacheClear
   */
  exports.prototype['contactCacheClear'] = undefined;
  /**
   * @member {Number} listCacheClear
   */
  exports.prototype['listCacheClear'] = undefined;
  /**
   * @member {Number} customFieldsCacheClear
   */
  exports.prototype['customFieldsCacheClear'] = undefined;



  return exports;
}));


