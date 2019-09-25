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
    instance = new TextmagicClient.RequestNewSubaccountTokenInputObject();
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

  describe('RequestNewSubaccountTokenInputObject', function() {
    it('should create an instance of RequestNewSubaccountTokenInputObject', function() {
      // uncomment below and update the code to test RequestNewSubaccountTokenInputObject
      //var instance = new TextmagicClient.RequestNewSubaccountTokenInputObject();
      //expect(instance).to.be.a(TextmagicClient.RequestNewSubaccountTokenInputObject);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new TextmagicClient.RequestNewSubaccountTokenInputObject();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new TextmagicClient.RequestNewSubaccountTokenInputObject();
      //expect(instance).to.be();
    });

    it('should have the property appName (base name: "appName")', function() {
      // uncomment below and update the code to test the property appName
      //var instance = new TextmagicClient.RequestNewSubaccountTokenInputObject();
      //expect(instance).to.be();
    });

  });

}));
