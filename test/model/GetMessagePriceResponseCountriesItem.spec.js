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
    instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
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

  describe('GetMessagePriceResponseCountriesItem', function() {
    it('should create an instance of GetMessagePriceResponseCountriesItem', function() {
      // uncomment below and update the code to test GetMessagePriceResponseCountriesItem
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be.a(TextmagicClient.GetMessagePriceResponseCountriesItem);
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property countryName (base name: "country_name")', function() {
      // uncomment below and update the code to test the property countryName
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property allowDedicated (base name: "allow_dedicated")', function() {
      // uncomment below and update the code to test the property allowDedicated
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property max (base name: "max")', function() {
      // uncomment below and update the code to test the property max
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property sum (base name: "sum")', function() {
      // uncomment below and update the code to test the property sum
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

    it('should have the property landline (base name: "landline")', function() {
      // uncomment below and update the code to test the property landline
      //var instance = new TextmagicClient.GetMessagePriceResponseCountriesItem();
      //expect(instance).to.be();
    });

  });

}));