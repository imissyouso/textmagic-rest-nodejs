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
    root.TextmagicClient.GetMessagingCountersResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMessagingCountersResponse model module.
   * @module model/GetMessagingCountersResponse
   * @version 2.0.611
   */

  /**
   * Constructs a new <code>GetMessagingCountersResponse</code>.
   * @alias module:model/GetMessagingCountersResponse
   * @class
   * @param contacts {Number} Total contacts amount.
   * @param sent {Number} Total sent messages amount.
   * @param received {Number} Total received messages amount.
   */
  var exports = function(contacts, sent, received) {
    var _this = this;

    _this['contacts'] = contacts;
    _this['sent'] = sent;
    _this['received'] = received;
  };

  /**
   * Constructs a <code>GetMessagingCountersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMessagingCountersResponse} obj Optional instance to populate.
   * @return {module:model/GetMessagingCountersResponse} The populated <code>GetMessagingCountersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'Number');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
      }
      if (data.hasOwnProperty('received')) {
        obj['received'] = ApiClient.convertToType(data['received'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Total contacts amount.
   * @member {Number} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * Total sent messages amount.
   * @member {Number} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * Total received messages amount.
   * @member {Number} received
   */
  exports.prototype['received'] = undefined;



  return exports;
}));


