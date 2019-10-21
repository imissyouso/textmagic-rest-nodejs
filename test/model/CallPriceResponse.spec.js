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
    instance = new TextmagicClient.CallPriceResponse();
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

  describe('CallPriceResponse', function() {
    it('should create an instance of CallPriceResponse', function() {
      // uncomment below and update the code to test CallPriceResponse
      //var instance = new TextmagicClient.CallPriceResponse();
      //expect(instance).to.be.a(TextmagicClient.CallPriceResponse);
    });

    it('should have the property outbound (base name: "outbound")', function() {
      // uncomment below and update the code to test the property outbound
      //var instance = new TextmagicClient.CallPriceResponse();
      //expect(instance).to.be();
    });

    it('should have the property inbound (base name: "inbound")', function() {
      // uncomment below and update the code to test the property inbound
      //var instance = new TextmagicClient.CallPriceResponse();
      //expect(instance).to.be();
    });

    it('should have the property forward (base name: "forward")', function() {
      // uncomment below and update the code to test the property forward
      //var instance = new TextmagicClient.CallPriceResponse();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TextmagicClient.CallPriceResponse();
      //expect(instance).to.be();
    });

  });

}));