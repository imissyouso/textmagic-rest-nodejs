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
    instance = new TextmagicClient.MessageOut();
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

  describe('MessageOut', function() {
    it('should create an instance of MessageOut', function() {
      // uncomment below and update the code to test MessageOut
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be.a(TextmagicClient.MessageOut);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property receiver (base name: "receiver")', function() {
      // uncomment below and update the code to test the property receiver
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property contactId (base name: "contactId")', function() {
      // uncomment below and update the code to test the property contactId
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property sessionId (base name: "sessionId")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property messageTime (base name: "messageTime")', function() {
      // uncomment below and update the code to test the property messageTime
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property charset (base name: "charset")', function() {
      // uncomment below and update the code to test the property charset
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property charsetLabel (base name: "charsetLabel")', function() {
      // uncomment below and update the code to test the property charsetLabel
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property partsCount (base name: "partsCount")', function() {
      // uncomment below and update the code to test the property partsCount
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property fromEmail (base name: "fromEmail")', function() {
      // uncomment below and update the code to test the property fromEmail
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

    it('should have the property fromNumber (base name: "fromNumber")', function() {
      // uncomment below and update the code to test the property fromNumber
      //var instance = new TextmagicClient.MessageOut();
      //expect(instance).to.be();
    });

  });

}));
