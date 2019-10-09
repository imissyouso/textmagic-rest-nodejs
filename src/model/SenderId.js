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
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.SenderId = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.User);
  }
}(this, function(ApiClient, User) {
  'use strict';




  /**
   * The SenderId model module.
   * @module model/SenderId
   * @version 2.0.589
   */

  /**
   * Constructs a new <code>SenderId</code>.
   * @alias module:model/SenderId
   * @class
   * @param id {Number} Numeric sender ID.
   * @param senderId {String} Alphanumeric ID.
   * @param user {module:model/User} 
   * @param status {module:model/SenderId.StatusEnum} *   **P** for Pending. This Sender ID is being reviewed by our support team. *   **R** for Rejected. Our support team rejected your application for this Sender ID. *   **A** for Active. 
   */
  var exports = function(id, senderId, user, status) {
    var _this = this;

    _this['id'] = id;

    _this['senderId'] = senderId;
    _this['user'] = user;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>SenderId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SenderId} obj Optional instance to populate.
   * @return {module:model/SenderId} The populated <code>SenderId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('displayTimeFormat')) {
        obj['displayTimeFormat'] = ApiClient.convertToType(data['displayTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('senderId')) {
        obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Numeric sender ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Format for representation of time
   * @member {String} displayTimeFormat
   */
  exports.prototype['displayTimeFormat'] = undefined;
  /**
   * Alphanumeric ID.
   * @member {String} senderId
   */
  exports.prototype['senderId'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * *   **P** for Pending. This Sender ID is being reviewed by our support team. *   **R** for Rejected. Our support team rejected your application for this Sender ID. *   **A** for Active. 
   * @member {module:model/SenderId.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "R"
     * @const
     */
    "R": "R",
    /**
     * value: "P"
     * @const
     */
    "P": "P"  };


  return exports;
}));


