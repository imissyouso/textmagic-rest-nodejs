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
    instance = new TextmagicClient.DoAuthInputObject();
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

  describe('DoAuthInputObject', function() {
    it('should create an instance of DoAuthInputObject', function() {
      // uncomment below and update the code to test DoAuthInputObject
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be.a(TextmagicClient.DoAuthInputObject);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property appName (base name: "appName")', function() {
      // uncomment below and update the code to test the property appName
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property appVersion (base name: "appVersion")', function() {
      // uncomment below and update the code to test the property appVersion
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property pushServiceType (base name: "pushServiceType")', function() {
      // uncomment below and update the code to test the property pushServiceType
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property tfaCode (base name: "tfaCode")', function() {
      // uncomment below and update the code to test the property tfaCode
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

    it('should have the property tfaId (base name: "tfaId")', function() {
      // uncomment below and update the code to test the property tfaId
      //var instance = new TextmagicClient.DoAuthInputObject();
      //expect(instance).to.be();
    });

  });

}));
