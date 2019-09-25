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
