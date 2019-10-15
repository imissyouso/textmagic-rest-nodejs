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
    root.TextmagicClient.SendMessageInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendMessageInputObject model module.
   * @module model/SendMessageInputObject
   * @version 2.0.630
   */

  /**
   * Constructs a new <code>SendMessageInputObject</code>.
   * @alias module:model/SendMessageInputObject
   * @class
   * @param text {String} Message text. Required if **template_id** is not set.
   * @param phones {String} Comma separated array of E.164 phone numbers message will be sent to.
   */
  var exports = function(text, phones) {
    var _this = this;

    _this['text'] = text;






    _this['phones'] = phones;









  };

  /**
   * Constructs a <code>SendMessageInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendMessageInputObject} obj Optional instance to populate.
   * @return {module:model/SendMessageInputObject} The populated <code>SendMessageInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
      }
      if (data.hasOwnProperty('sendingTime')) {
        obj['sendingTime'] = ApiClient.convertToType(data['sendingTime'], 'Number');
      }
      if (data.hasOwnProperty('sendingDateTime')) {
        obj['sendingDateTime'] = ApiClient.convertToType(data['sendingDateTime'], 'String');
      }
      if (data.hasOwnProperty('sendingTimezone')) {
        obj['sendingTimezone'] = ApiClient.convertToType(data['sendingTimezone'], 'String');
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
      if (data.hasOwnProperty('cutExtra')) {
        obj['cutExtra'] = ApiClient.convertToType(data['cutExtra'], 'Boolean');
      }
      if (data.hasOwnProperty('partsCount')) {
        obj['partsCount'] = ApiClient.convertToType(data['partsCount'], 'Number');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Number');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
      }
      if (data.hasOwnProperty('createChat')) {
        obj['createChat'] = ApiClient.convertToType(data['createChat'], 'Boolean');
      }
      if (data.hasOwnProperty('tts')) {
        obj['tts'] = ApiClient.convertToType(data['tts'], 'Boolean');
      }
      if (data.hasOwnProperty('local')) {
        obj['local'] = ApiClient.convertToType(data['local'], 'Boolean');
      }
      if (data.hasOwnProperty('localCountry')) {
        obj['localCountry'] = ApiClient.convertToType(data['localCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * Message text. Required if **template_id** is not set.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Template used instead of message text. Required if **text** is not set.
   * @member {Number} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now.
   * @member {Number} sendingTime
   */
  exports.prototype['sendingTime'] = undefined;
  /**
   * Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to **sendingTimezone**.
   * @member {String} sendingDateTime
   */
  exports.prototype['sendingDateTime'] = undefined;
  /**
   * ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone.
   * @member {String} sendingTimezone
   */
  exports.prototype['sendingTimezone'] = undefined;
  /**
   * Comma separated array of contact resources id message will be sent to.
   * @member {String} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Comma separated array of list resources id message will be sent to.
   * @member {String} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Comma separated array of E.164 phone numbers message will be sent to.
   * @member {String} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
   * @member {Boolean} cutExtra
   * @default false
   */
  exports.prototype['cutExtra'] = false;
  /**
   * Maximum message parts count (TextMagic allows sending 1 to 6 message parts).
   * @member {Number} partsCount
   */
  exports.prototype['partsCount'] = undefined;
  /**
   * Custom message reference id which can be used in your application infrastructure.
   * @member {Number} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](http://docs.textmagictesting.com/#tag/Sender-IDs).
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
   * @member {String} rule
   */
  exports.prototype['rule'] = undefined;
  /**
   * Should sending method try to create new Chat(if not exist) with specified recipients.
   * @member {Boolean} createChat
   * @default false
   */
  exports.prototype['createChat'] = false;
  /**
   * Send Text to Speech message.
   * @member {Boolean} tts
   * @default false
   */
  exports.prototype['tts'] = false;
  /**
   * Treat phone numbers passed in \\'phones\\' field as local.
   * @member {Boolean} local
   * @default false
   */
  exports.prototype['local'] = false;
  /**
   * 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is account country.
   * @member {String} localCountry
   */
  exports.prototype['localCountry'] = undefined;



  return exports;
}));


