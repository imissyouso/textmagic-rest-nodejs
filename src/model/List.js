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
    define(['ApiClient', 'model/ListImage', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ListImage'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.List = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.ListImage, root.TextmagicClient.User);
  }
}(this, function(ApiClient, ListImage, User) {
  'use strict';




  /**
   * The List model module.
   * @module model/List
   * @version 2.0.543
   */

  /**
   * Constructs a new <code>List</code>.
   * @alias module:model/List
   * @class
   * @param id {Number} List ID.
   * @param name {String} List name.
   * @param description {String} List description.
   * @param favorited {Boolean} 
   * @param membersCount {Number} List members count.
   * @param user {module:model/User} 
   * @param service {Boolean} 
   * @param shared {Boolean} Is the list **shared** among all sub-accounts?
   * @param avatar {module:model/ListImage} 
   * @param isDefault {Boolean} 
   */
  var exports = function(id, name, description, favorited, membersCount, user, service, shared, avatar, isDefault) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['description'] = description;
    _this['favorited'] = favorited;
    _this['membersCount'] = membersCount;
    _this['user'] = user;
    _this['service'] = service;
    _this['shared'] = shared;
    _this['avatar'] = avatar;
    _this['isDefault'] = isDefault;
  };

  /**
   * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/List} obj Optional instance to populate.
   * @return {module:model/List} The populated <code>List</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('favorited')) {
        obj['favorited'] = ApiClient.convertToType(data['favorited'], 'Boolean');
      }
      if (data.hasOwnProperty('membersCount')) {
        obj['membersCount'] = ApiClient.convertToType(data['membersCount'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'Boolean');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ListImage.constructFromObject(data['avatar']);
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * List ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * List name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * List description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} favorited
   */
  exports.prototype['favorited'] = undefined;
  /**
   * List members count.
   * @member {Number} membersCount
   */
  exports.prototype['membersCount'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Boolean} service
   */
  exports.prototype['service'] = undefined;
  /**
   * Is the list **shared** among all sub-accounts?
   * @member {Boolean} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * @member {module:model/ListImage} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;



  return exports;
}));


