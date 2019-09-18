/**
 * TextMagic API Documentation
 * # Overview ## Introduction <img style=\"float: right; margin-left: 10px; width: 100px;\" src=\"images/phone.png\"> TextMagic SMS API is a platform for building your own messaging app using our messaging infrastructure. It allows you to send and receive SMS text messages, query information about inbound and outbound messages, manage contacts, create templates (i.e. message formats and static texts) and schedule recurrent SMS messages as well as process bulk SMS messages. <button name=\"button\" onclick=\"http://www.google.com\" class=\"btn\">Try TextMagic API for Free</button>  ### Two Ways to Use TextMagic API * [REST API](https://www.textmagic.com/docs/api/start/) – get full access to TextMagic’s messaging gateway features * [Email to SMS API](https://www.textmagic.com/docs/api/send-email-to-sms/) – set up two-way SMS communication without the need to write any additional code  ### Code Libraries We have created a set of client libraries for the most popular programming languages (such as REST API Java and REST API PHP). These libraries allow you to integrate our API into your code in minutes. Just choose your preferred language to get started:  ## Getting started Get Started with the TextMagic REST API To start sending text messages using the TextMagic REST API, just follow these steps: 1. Generate the API credentials 1. Connect to our API endpoint This page provides all the information you need to get started. Here, we explain the following steps:  How to obtain the API credentials The API endpoint How the REST API works The next step How to obtain the API credentials  ### How to obtain the API credentials To start sending text messages, you need to create an API key. API keys are similar to an account password; the difference is that an API key only provides access to the API: you cannot log in to TextMagic Online using the API key.  Your program sends the login credentials with each API request as HTTP headers: `X-TM-Username` is your TextMagic username, while `X-TM-Key` is your API key.  How to obtain an API key:  1. Log in to TextMagic (or start a free trial if you haven’t registered yet). 1. Go to the API settings page. 1. Click the Add new API key button. 1. Enter an app name for this key. Note, it’s just a label, so pick any name. 1. Click Generate new key. 1. You should now see your new API key in the green notification banner above the table:  ![alt text](images/credentials.png)  > Note for API v1 users > V1 keys are not compatible with the V2 version of the TextMagic REST API, so you will need to generate a new API key to use the V2 endpoint.  ### The API endpoint The TextMagic REST API endpoint is: ``` https://rest.textmagic.com/api/v2 ``` All the URLs referenced in this documentation should use this base URL.  ### How the REST API works REST APIs use the HTTP protocol to send and receive messages. REST messages are usually encoded as JSON documents and are an improvement over older methods such as the XML based SOAP protocol. REST APIs use the same set of methods that web browsers use: POST, GET, PUT or DELETE. These correspond to the CRUD operations: create, read, update and delete. Often, REST URIs provide direct CRUD access to entities or collections of entities, for example: http://api.foo.com/people. In this instance, to delete a person’s endpoint, you might simply call the endpoint DELETE http://api.foo.com/people/{id}. REST makes these types of operations simple.  > Example > > Let’s take the entity most often used in messaging: contacts. Imagine you want to perform operations on your contacts list: well, it’s only a matter of calling the following endpoints: > * GET /api/v2/contacts (get all of your contacts) > * GET /api/v2/contacts/{id} (get a specific contact) > * POST /api/v2/contacts (create a new contact) > * PUT /api/v2/contacts/{id} (update an existing contact) > * DELETE /api/v2/contacts/{id} (delete an existing contact) It’s that simple! In fact, that’s all you need to do to manage the contacts in your TextMagic account!  ## Sandbox Sandbox is a tool to test TextMagic REST API requests without the need to install any applications or write any code. Here, we explain the following details about Sandbox: * The credentials area * Command documentation * How it works  <a href=\"\">Go to TextMagic Sandbox</a>  ### The credentials area To make requests using your TextMagic account, you need to enter your account username and your API key into the corresponding fields. You may also Save them in your browser or press Clear to erase them.  ![alt text](images/sandbox.png) 
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
    instance = new TextmagicClient.DoEmailLookupResponse();
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

  describe('DoEmailLookupResponse', function() {
    it('should create an instance of DoEmailLookupResponse', function() {
      // uncomment below and update the code to test DoEmailLookupResponse
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be.a(TextmagicClient.DoEmailLookupResponse);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property addressType (base name: "addressType")', function() {
      // uncomment below and update the code to test the property addressType
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailRole (base name: "emailRole")', function() {
      // uncomment below and update the code to test the property emailRole
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliverability (base name: "deliverability")', function() {
      // uncomment below and update the code to test the property deliverability
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property isDisposableAddress (base name: "isDisposableAddress")', function() {
      // uncomment below and update the code to test the property isDisposableAddress
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property localPart (base name: "localPart")', function() {
      // uncomment below and update the code to test the property localPart
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property domainPart (base name: "domainPart")', function() {
      // uncomment below and update the code to test the property domainPart
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property isInWhiteList (base name: "isInWhiteList")', function() {
      // uncomment below and update the code to test the property isInWhiteList
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property isInBlackList (base name: "isInBlackList")', function() {
      // uncomment below and update the code to test the property isInBlackList
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasMx (base name: "hasMx")', function() {
      // uncomment below and update the code to test the property hasMx
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasAa (base name: "hasAa")', function() {
      // uncomment below and update the code to test the property hasAa
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasAaaa (base name: "hasAaaa")', function() {
      // uncomment below and update the code to test the property hasAaaa
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property risk (base name: "risk")', function() {
      // uncomment below and update the code to test the property risk
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property preference (base name: "preference")', function() {
      // uncomment below and update the code to test the property preference
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

    it('should have the property suggestion (base name: "suggestion")', function() {
      // uncomment below and update the code to test the property suggestion
      //var instance = new TextmagicClient.DoEmailLookupResponse();
      //expect(instance).to.be();
    });

  });

}));
