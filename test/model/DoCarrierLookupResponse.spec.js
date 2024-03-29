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
    instance = new TextmagicClient.DoCarrierLookupResponse();
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

  describe('DoCarrierLookupResponse', function() {
    it('should create an instance of DoCarrierLookupResponse', function() {
      // uncomment below and update the code to test DoCarrierLookupResponse
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be.a(TextmagicClient.DoCarrierLookupResponse);
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property local (base name: "local")', function() {
      // uncomment below and update the code to test the property local
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property number164 (base name: "number164")', function() {
      // uncomment below and update the code to test the property number164
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property valid (base name: "valid")', function() {
      // uncomment below and update the code to test the property valid
      //var instance = new TextmagicClient.DoCarrierLookupResponse();
      //expect(instance).to.be();
    });

  });

}));
