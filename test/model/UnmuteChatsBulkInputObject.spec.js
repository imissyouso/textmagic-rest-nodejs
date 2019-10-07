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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TextmagicClient);
  }
}(this, function(expect, TextmagicClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TextmagicClient.UnmuteChatsBulkInputObject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UnmuteChatsBulkInputObject', function() {
    it('should create an instance of UnmuteChatsBulkInputObject', function() {
      // uncomment below and update the code to test UnmuteChatsBulkInputObject
      //var instance = new TextmagicClient.UnmuteChatsBulkInputObject();
      //expect(instance).to.be.a(TextmagicClient.UnmuteChatsBulkInputObject);
    });

    it('should have the property ids (base name: "ids")', function() {
      // uncomment below and update the code to test the property ids
      //var instance = new TextmagicClient.UnmuteChatsBulkInputObject();
      //expect(instance).to.be();
    });

    it('should have the property all (base name: "all")', function() {
      // uncomment below and update the code to test the property all
      //var instance = new TextmagicClient.UnmuteChatsBulkInputObject();
      //expect(instance).to.be();
    });

  });

}));
