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
    instance = new TextmagicClient.MessagesIcsTextParameters();
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

  describe('MessagesIcsTextParameters', function() {
    it('should create an instance of MessagesIcsTextParameters', function() {
      // uncomment below and update the code to test MessagesIcsTextParameters
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be.a(TextmagicClient.MessagesIcsTextParameters);
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

    it('should have the property parts (base name: "parts")', function() {
      // uncomment below and update the code to test the property parts
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

    it('should have the property chars (base name: "chars")', function() {
      // uncomment below and update the code to test the property chars
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

    it('should have the property encoding (base name: "encoding")', function() {
      // uncomment below and update the code to test the property encoding
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

    it('should have the property countries (base name: "countries")', function() {
      // uncomment below and update the code to test the property countries
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

    it('should have the property charsetLabel (base name: "charsetLabel")', function() {
      // uncomment below and update the code to test the property charsetLabel
      //var instance = new TextmagicClient.MessagesIcsTextParameters();
      //expect(instance).to.be();
    });

  });

}));
