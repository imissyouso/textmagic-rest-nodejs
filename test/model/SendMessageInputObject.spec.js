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
    instance = new TextmagicClient.SendMessageInputObject();
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

  describe('SendMessageInputObject', function() {
    it('should create an instance of SendMessageInputObject', function() {
      // uncomment below and update the code to test SendMessageInputObject
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be.a(TextmagicClient.SendMessageInputObject);
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property sendingTime (base name: "sendingTime")', function() {
      // uncomment below and update the code to test the property sendingTime
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property sendingDateTime (base name: "sendingDateTime")', function() {
      // uncomment below and update the code to test the property sendingDateTime
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property sendingTimezone (base name: "sendingTimezone")', function() {
      // uncomment below and update the code to test the property sendingTimezone
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property lists (base name: "lists")', function() {
      // uncomment below and update the code to test the property lists
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property phones (base name: "phones")', function() {
      // uncomment below and update the code to test the property phones
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property cutExtra (base name: "cutExtra")', function() {
      // uncomment below and update the code to test the property cutExtra
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property partsCount (base name: "partsCount")', function() {
      // uncomment below and update the code to test the property partsCount
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property rule (base name: "rule")', function() {
      // uncomment below and update the code to test the property rule
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property createChat (base name: "createChat")', function() {
      // uncomment below and update the code to test the property createChat
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property tts (base name: "tts")', function() {
      // uncomment below and update the code to test the property tts
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property local (base name: "local")', function() {
      // uncomment below and update the code to test the property local
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

    it('should have the property localCountry (base name: "localCountry")', function() {
      // uncomment below and update the code to test the property localCountry
      //var instance = new TextmagicClient.SendMessageInputObject();
      //expect(instance).to.be();
    });

  });

}));
