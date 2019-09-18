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
    instance = new TextmagicClient.GetStateResponse();
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

  describe('GetStateResponse', function() {
    it('should create an instance of GetStateResponse', function() {
      // uncomment below and update the code to test GetStateResponse
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be.a(TextmagicClient.GetStateResponse);
    });

    it('should have the property systemCacheClear (base name: "systemCacheClear")', function() {
      // uncomment below and update the code to test the property systemCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property systemExit (base name: "systemExit")', function() {
      // uncomment below and update the code to test the property systemExit
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property systemAlert (base name: "systemAlert")', function() {
      // uncomment below and update the code to test the property systemAlert
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property systemAccountStateChanged (base name: "systemAccountStateChanged")', function() {
      // uncomment below and update the code to test the property systemAccountStateChanged
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageDeleted (base name: "messageDeleted")', function() {
      // uncomment below and update the code to test the property messageDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageIncoming (base name: "messageIncoming")', function() {
      // uncomment below and update the code to test the property messageIncoming
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageIncomingDeleted (base name: "messageIncomingDeleted")', function() {
      // uncomment below and update the code to test the property messageIncomingDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageStateChanged (base name: "messageStateChanged")', function() {
      // uncomment below and update the code to test the property messageStateChanged
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageBulkEnd (base name: "messageBulkEnd")', function() {
      // uncomment below and update the code to test the property messageBulkEnd
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageWipeEnd (base name: "messageWipeEnd")', function() {
      // uncomment below and update the code to test the property messageWipeEnd
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageSent (base name: "messageSent")', function() {
      // uncomment below and update the code to test the property messageSent
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageSessionDeleted (base name: "messageSessionDeleted")', function() {
      // uncomment below and update the code to test the property messageSessionDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageCacheClear (base name: "messageCacheClear")', function() {
      // uncomment below and update the code to test the property messageCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageIncomingCacheClear (base name: "messageIncomingCacheClear")', function() {
      // uncomment below and update the code to test the property messageIncomingCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageScheduleAdded (base name: "messageScheduleAdded")', function() {
      // uncomment below and update the code to test the property messageScheduleAdded
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageScheduleStateChanged (base name: "messageScheduleStateChanged")', function() {
      // uncomment below and update the code to test the property messageScheduleStateChanged
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageScheduleDeleted (base name: "messageScheduleDeleted")', function() {
      // uncomment below and update the code to test the property messageScheduleDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageScheduleCacheClear (base name: "messageScheduleCacheClear")', function() {
      // uncomment below and update the code to test the property messageScheduleCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageTemplateCacheClear (base name: "messageTemplateCacheClear")', function() {
      // uncomment below and update the code to test the property messageTemplateCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property callFinished (base name: "callFinished")', function() {
      // uncomment below and update the code to test the property callFinished
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatCreated (base name: "chatCreated")', function() {
      // uncomment below and update the code to test the property chatCreated
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatMarkedAsRead (base name: "chatMarkedAsRead")', function() {
      // uncomment below and update the code to test the property chatMarkedAsRead
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatMuted (base name: "chatMuted")', function() {
      // uncomment below and update the code to test the property chatMuted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatUnmuted (base name: "chatUnmuted")', function() {
      // uncomment below and update the code to test the property chatUnmuted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatDeleted (base name: "chatDeleted")', function() {
      // uncomment below and update the code to test the property chatDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatClosed (base name: "chatClosed")', function() {
      // uncomment below and update the code to test the property chatClosed
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatReopened (base name: "chatReopened")', function() {
      // uncomment below and update the code to test the property chatReopened
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chatCacheClear (base name: "chatCacheClear")', function() {
      // uncomment below and update the code to test the property chatCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactAdded (base name: "contactAdded")', function() {
      // uncomment below and update the code to test the property contactAdded
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactDeleted (base name: "contactDeleted")', function() {
      // uncomment below and update the code to test the property contactDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactStateChanged (base name: "contactStateChanged")', function() {
      // uncomment below and update the code to test the property contactStateChanged
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property listAdded (base name: "listAdded")', function() {
      // uncomment below and update the code to test the property listAdded
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property listDeleted (base name: "listDeleted")', function() {
      // uncomment below and update the code to test the property listDeleted
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property listStateChanged (base name: "listStateChanged")', function() {
      // uncomment below and update the code to test the property listStateChanged
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactWipeEnd (base name: "contactWipeEnd")', function() {
      // uncomment below and update the code to test the property contactWipeEnd
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactImportEnd (base name: "contactImportEnd")', function() {
      // uncomment below and update the code to test the property contactImportEnd
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactCacheClear (base name: "contactCacheClear")', function() {
      // uncomment below and update the code to test the property contactCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property listCacheClear (base name: "listCacheClear")', function() {
      // uncomment below and update the code to test the property listCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

    it('should have the property customFieldsCacheClear (base name: "customFieldsCacheClear")', function() {
      // uncomment below and update the code to test the property customFieldsCacheClear
      //var instance = new TextmagicClient.GetStateResponse();
      //expect(instance).to.be();
    });

  });

}));
