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
    instance = new TextmagicClient.MuteChatInputObject();
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

  describe('MuteChatInputObject', function() {
    it('should create an instance of MuteChatInputObject', function() {
      // uncomment below and update the code to test MuteChatInputObject
      //var instance = new TextmagicClient.MuteChatInputObject();
      //expect(instance).to.be.a(TextmagicClient.MuteChatInputObject);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TextmagicClient.MuteChatInputObject();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new TextmagicClient.MuteChatInputObject();
      //expect(instance).to.be();
    });

    it('should have the property _for (base name: "for")', function() {
      // uncomment below and update the code to test the property _for
      //var instance = new TextmagicClient.MuteChatInputObject();
      //expect(instance).to.be();
    });

  });

}));
