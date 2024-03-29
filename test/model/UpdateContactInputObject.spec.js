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
    instance = new TextmagicClient.UpdateContactInputObject();
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

  describe('UpdateContactInputObject', function() {
    it('should create an instance of UpdateContactInputObject', function() {
      // uncomment below and update the code to test UpdateContactInputObject
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be.a(TextmagicClient.UpdateContactInputObject);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property lists (base name: "lists")', function() {
      // uncomment below and update the code to test the property lists
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property favorited (base name: "favorited")', function() {
      // uncomment below and update the code to test the property favorited
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property blocked (base name: "blocked")', function() {
      // uncomment below and update the code to test the property blocked
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property customFieldValues (base name: "customFieldValues")', function() {
      // uncomment below and update the code to test the property customFieldValues
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property local (base name: "local")', function() {
      // uncomment below and update the code to test the property local
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TextmagicClient.UpdateContactInputObject();
      //expect(instance).to.be();
    });

  });

}));
