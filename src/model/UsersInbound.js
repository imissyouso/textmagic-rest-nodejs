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
    define(['ApiClient', 'model/Country', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.UsersInbound = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Country, root.TextmagicClient.User);
  }
}(this, function(ApiClient, Country, User) {
  'use strict';




  /**
   * The UsersInbound model module.
   * @module model/UsersInbound
   * @version 2.0.431
   */

  /**
   * Constructs a new <code>UsersInbound</code>.
   * @alias module:model/UsersInbound
   * @class
   * @param id {Number} 
   * @param user {module:model/User} 
   * @param purchasedAt {Date} 
   * @param expireAt {Date} 
   * @param status {module:model/UsersInbound.StatusEnum} A - active, in use (at least one message was sent/received from/to this number), U - never used before
   * @param country {module:model/Country} 
   */
  var exports = function(id, user, purchasedAt, expireAt, status, country) {
    var _this = this;

    _this['id'] = id;
    _this['user'] = user;
    _this['purchasedAt'] = purchasedAt;
    _this['expireAt'] = expireAt;
    _this['status'] = status;
    _this['country'] = country;

  };

  /**
   * Constructs a <code>UsersInbound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersInbound} obj Optional instance to populate.
   * @return {module:model/UsersInbound} The populated <code>UsersInbound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('purchasedAt')) {
        obj['purchasedAt'] = ApiClient.convertToType(data['purchasedAt'], 'Date');
      }
      if (data.hasOwnProperty('expireAt')) {
        obj['expireAt'] = ApiClient.convertToType(data['expireAt'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Date} purchasedAt
   */
  exports.prototype['purchasedAt'] = undefined;
  /**
   * @member {Date} expireAt
   */
  exports.prototype['expireAt'] = undefined;
  /**
   * A - active, in use (at least one message was sent/received from/to this number), U - never used before
   * @member {module:model/UsersInbound.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "U"
     * @const
     */
    "U": "U",
    /**
     * value: "A"
     * @const
     */
    "A": "A"  };


  return exports;
}));


