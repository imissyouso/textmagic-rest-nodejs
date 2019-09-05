# TextMagic JavaScript SDK

TextmagicRest - JavaScript client for textmagic-rest

For more information, please visit [https://www.textmagic.com/docs/api/](https://www.textmagic.com/docs/api/)

## Installation

```shell
npm install imissyouso/textmagic-rest-nodejs --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
    rules: [
        {
            parser: {
                amd: false
            }
        }
    ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
    var TextmagicRest = require('textmagic-rest');

        var defaultClient = TextmagicRest.ApiClient.instance;
    
            // Configure HTTP basic authorization: BasicAuth
            var BasicAuth = defaultClient.authentications['BasicAuth'];
        BasicAuth.username = 'YOUR USERNAME'
        BasicAuth.password = 'YOUR PASSWORD'

    var api = new TextmagicRest.TextMagicApi()
    
            var assignContactsToListInputObject = new TextmagicRest.AssignContactsToListInputObject(); // {AssignContactsToListInputObject} Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user
    
            var id = 1; // {Number} 
    
        api.assignContactsToList(assignContactsToListInputObject, id).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
        }, function(error) {
        console.error(error);
        });


    ```

    ## Documentation for API Endpoints

    All URIs are relative to *http://my.textmagic.com*

    Class | Method | HTTP request | Description
    ------------ | ------------- | ------------- | -------------
*TextmagicRest.TextMagicApi* | [**assignContactsToList**](docs/TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to the specified list.
*TextmagicRest.TextMagicApi* | [**blockContact**](docs/TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block contact from inbound and outbound communication by phone number.
*TextmagicRest.TextMagicApi* | [**buyDedicatedNumber**](docs/TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number and assign it to the specified account.
*TextmagicRest.TextMagicApi* | [**cancelSurvey**](docs/TextMagicApi.md#cancelSurvey) | **PUT** /api/v2/surveys/{id}/cancel | Cancel a survey.
*TextmagicRest.TextMagicApi* | [**checkPhoneVerificationCode**](docs/TextMagicApi.md#checkPhoneVerificationCode) | **PUT** /api/v2/user/phone/verification | Check user phone verification code
*TextmagicRest.TextMagicApi* | [**clearAndAssignContactsToList**](docs/TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts.
*TextmagicRest.TextMagicApi* | [**closeChatsBulk**](docs/TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats by chat ids or close all chats
*TextmagicRest.TextMagicApi* | [**closeReadChats**](docs/TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close all chats that have no unread messages.
*TextmagicRest.TextMagicApi* | [**closeSubaccount**](docs/TextMagicApi.md#closeSubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close subaccount.
*TextmagicRest.TextMagicApi* | [**createContact**](docs/TextMagicApi.md#createContact) | **POST** /api/v2/contacts | Create a new contact from the submitted data.
*TextmagicRest.TextMagicApi* | [**createContactNote**](docs/TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note.
*TextmagicRest.TextMagicApi* | [**createCustomField**](docs/TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Create a new custom field from the submitted data.
*TextmagicRest.TextMagicApi* | [**createList**](docs/TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list from the submitted data.
*TextmagicRest.TextMagicApi* | [**createPushToken**](docs/TextMagicApi.md#createPushToken) | **POST** /api/v2/push/tokens | Add or update a device token.
*TextmagicRest.TextMagicApi* | [**createSurvey**](docs/TextMagicApi.md#createSurvey) | **POST** /api/v2/surveys | Create a new survey from the submitted data.
*TextmagicRest.TextMagicApi* | [**createSurveyNode**](docs/TextMagicApi.md#createSurveyNode) | **POST** /api/v2/surveys/{id}/nodes | Create a new node from the submitted data.
*TextmagicRest.TextMagicApi* | [**createTemplate**](docs/TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a new template from the submitted data.
*TextmagicRest.TextMagicApi* | [**deleteAllContacts**](docs/TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete all contacts.
*TextmagicRest.TextMagicApi* | [**deleteAllOutboundMessages**](docs/TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
*TextmagicRest.TextMagicApi* | [**deleteAvatar**](docs/TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar for the current user.\\
*TextmagicRest.TextMagicApi* | [**deleteChatMessages**](docs/TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete messages from chat by given messages ID(s).
*TextmagicRest.TextMagicApi* | [**deleteChatsBulk**](docs/TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats by given ID(s) or delete all chats.
*TextmagicRest.TextMagicApi* | [**deleteContact**](docs/TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a single contact.
*TextmagicRest.TextMagicApi* | [**deleteContactAvatar**](docs/TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar for the contact.
*TextmagicRest.TextMagicApi* | [**deleteContactNote**](docs/TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a single contact note.
*TextmagicRest.TextMagicApi* | [**deleteContactNotesBulk**](docs/TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact note by given ID(s) or delete all contact notes.
*TextmagicRest.TextMagicApi* | [**deleteContactsByIds**](docs/TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contact by given ID(s) or delete all contacts.
*TextmagicRest.TextMagicApi* | [**deleteContactsFromList**](docs/TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from the specified list.
*TextmagicRest.TextMagicApi* | [**deleteCustomField**](docs/TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a single custom field.
*TextmagicRest.TextMagicApi* | [**deleteDedicatedNumber**](docs/TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel dedicated number subscription.
*TextmagicRest.TextMagicApi* | [**deleteInboundMessage**](docs/TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete the incoming message.
*TextmagicRest.TextMagicApi* | [**deleteInboundMessagesBulk**](docs/TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages by given ID(s) or delete all inbound messages.
*TextmagicRest.TextMagicApi* | [**deleteList**](docs/TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a single list.
*TextmagicRest.TextMagicApi* | [**deleteListAvatar**](docs/TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for the list.
*TextmagicRest.TextMagicApi* | [**deleteListContactsBulk**](docs/TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contact from list by given ID(s) or all contacts from list.
*TextmagicRest.TextMagicApi* | [**deleteListsBulk**](docs/TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete list by given ID(s) or delete all lists.
*TextmagicRest.TextMagicApi* | [**deleteMessageSession**](docs/TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a message session, together with all nested messages.
*TextmagicRest.TextMagicApi* | [**deleteMessageSessionsBulk**](docs/TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete messages sessions, together with all nested messages, by given ID(s) or delete all messages sessions.
*TextmagicRest.TextMagicApi* | [**deleteOutboundMessage**](docs/TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
*TextmagicRest.TextMagicApi* | [**deleteOutboundMessagesBulk**](docs/TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages by IDs
*TextmagicRest.TextMagicApi* | [**deletePushToken**](docs/TextMagicApi.md#deletePushToken) | **DELETE** /api/v2/push/tokens/{type}/{deviceId} | Delete a push notification device token.
*TextmagicRest.TextMagicApi* | [**deleteScheduledMessage**](docs/TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a message session, together with all nested messages.
*TextmagicRest.TextMagicApi* | [**deleteScheduledMessagesBulk**](docs/TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages by given ID(s) or delete all scheduled messages.
*TextmagicRest.TextMagicApi* | [**deleteSenderId**](docs/TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID.
*TextmagicRest.TextMagicApi* | [**deleteSurvey**](docs/TextMagicApi.md#deleteSurvey) | **DELETE** /api/v2/surveys/{id} | Delete a survey.
*TextmagicRest.TextMagicApi* | [**deleteSurveyNode**](docs/TextMagicApi.md#deleteSurveyNode) | **DELETE** /api/v2/surveys/nodes/{id} | Delete a node.
*TextmagicRest.TextMagicApi* | [**deleteTemplate**](docs/TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a single template.
*TextmagicRest.TextMagicApi* | [**deleteTemplatesBulk**](docs/TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete template by given ID(s) or delete all templates.
*TextmagicRest.TextMagicApi* | [**doAuth**](docs/TextMagicApi.md#doAuth) | **POST** /api/v2/auth | Authenticate user by given username and password.
*TextmagicRest.TextMagicApi* | [**doCarrierLookup**](docs/TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
*TextmagicRest.TextMagicApi* | [**doEmailLookup**](docs/TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Validate Email address using Email Lookup tool
*TextmagicRest.TextMagicApi* | [**duplicateSurvey**](docs/TextMagicApi.md#duplicateSurvey) | **PUT** /api/v2/surveys/{id}/duplicate | Duplicate a survey.
*TextmagicRest.TextMagicApi* | [**getAllBulkSessions**](docs/TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sending sessions.
*TextmagicRest.TextMagicApi* | [**getAllChats**](docs/TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all user chats.
*TextmagicRest.TextMagicApi* | [**getAllInboundMessages**](docs/TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbox messages.
*TextmagicRest.TextMagicApi* | [**getAllMessageSessions**](docs/TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all message sending sessions.
*TextmagicRest.TextMagicApi* | [**getAllOutboundMessages**](docs/TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
*TextmagicRest.TextMagicApi* | [**getAllScheduledMessages**](docs/TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages.
*TextmagicRest.TextMagicApi* | [**getAllTemplates**](docs/TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all user templates.
*TextmagicRest.TextMagicApi* | [**getAvailableDedicatedNumbers**](docs/TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find available dedicated numbers to buy.
*TextmagicRest.TextMagicApi* | [**getAvailableSenderSettingOptions**](docs/TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get all available sender setting options which could be used in \&quot;from\&quot; parameter of POST messages method.
*TextmagicRest.TextMagicApi* | [**getBalanceNotificationOptions**](docs/TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
*TextmagicRest.TextMagicApi* | [**getBalanceNotificationSettings**](docs/TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
*TextmagicRest.TextMagicApi* | [**getBlockedContacts**](docs/TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts.
*TextmagicRest.TextMagicApi* | [**getBulkSession**](docs/TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk message session status.
*TextmagicRest.TextMagicApi* | [**getCallbackSettings**](docs/TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
*TextmagicRest.TextMagicApi* | [**getCallsPrices**](docs/TextMagicApi.md#getCallsPrices) | **GET** /api/v2/calls/price | Check pricing for a inbound/outbound call.
*TextmagicRest.TextMagicApi* | [**getChat**](docs/TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat.
*TextmagicRest.TextMagicApi* | [**getChatByPhone**](docs/TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone.
*TextmagicRest.TextMagicApi* | [**getChatMessages**](docs/TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Fetch messages from chat with specified chat id.
*TextmagicRest.TextMagicApi* | [**getContact**](docs/TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get a single contact.
*TextmagicRest.TextMagicApi* | [**getContactByPhone**](docs/TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get a single contact by phone number.
*TextmagicRest.TextMagicApi* | [**getContactIfBlocked**](docs/TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check is that phone number blocked
*TextmagicRest.TextMagicApi* | [**getContactImportSessionProgress**](docs/TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Get contact import session progress.
*TextmagicRest.TextMagicApi* | [**getContactNote**](docs/TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a single contact note.
*TextmagicRest.TextMagicApi* | [**getContactNotes**](docs/TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to the given contact.
*TextmagicRest.TextMagicApi* | [**getContacts**](docs/TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all user contacts.
*TextmagicRest.TextMagicApi* | [**getContactsAutocomplete**](docs/TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions by given search term.
*TextmagicRest.TextMagicApi* | [**getContactsByListId**](docs/TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Fetch user contacts by given group id.
*TextmagicRest.TextMagicApi* | [**getCountries**](docs/TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Return list of countries.
*TextmagicRest.TextMagicApi* | [**getCurrentUser**](docs/TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current user info.
*TextmagicRest.TextMagicApi* | [**getCustomField**](docs/TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get a single custom field.
*TextmagicRest.TextMagicApi* | [**getCustomFields**](docs/TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all contact custom fields.
*TextmagicRest.TextMagicApi* | [**getDedicatedNumber**](docs/TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get a single dedicated number.
*TextmagicRest.TextMagicApi* | [**getDisallowedRules**](docs/TextMagicApi.md#getDisallowedRules) | **GET** /api/v2/user/disallowed-rules | Get an array of all rules that are disallowed to the current account.
*TextmagicRest.TextMagicApi* | [**getFavourites**](docs/TextMagicApi.md#getFavourites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists.
*TextmagicRest.TextMagicApi* | [**getForwardedCalls**](docs/TextMagicApi.md#getForwardedCalls) | **GET** /api/v2/calls | Get all forwarded calls.
*TextmagicRest.TextMagicApi* | [**getInboundMessage**](docs/TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbox message.
*TextmagicRest.TextMagicApi* | [**getInboundMessagesNotificationSettings**](docs/TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
*TextmagicRest.TextMagicApi* | [**getInvoices**](docs/TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Return account invoices.
*TextmagicRest.TextMagicApi* | [**getList**](docs/TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get a single list.
*TextmagicRest.TextMagicApi* | [**getListContactsIds**](docs/TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Fetch all contacts IDs belonging to the list with ID.
*TextmagicRest.TextMagicApi* | [**getListsOfContact**](docs/TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Return lists which contact belongs to.
*TextmagicRest.TextMagicApi* | [**getMessagePreview**](docs/TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
*TextmagicRest.TextMagicApi* | [**getMessagePrice**](docs/TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price | Check price
*TextmagicRest.TextMagicApi* | [**getMessagePrices**](docs/TextMagicApi.md#getMessagePrices) | **GET** /api/v2/messages/prices | Get pricing
*TextmagicRest.TextMagicApi* | [**getMessageSession**](docs/TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a message session.
*TextmagicRest.TextMagicApi* | [**getMessageSessionStat**](docs/TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get sending session statistics.
*TextmagicRest.TextMagicApi* | [**getMessagesBySessionId**](docs/TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Fetch messages by given session id.
*TextmagicRest.TextMagicApi* | [**getMessagingCounters**](docs/TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Return counters for messaging data views.
*TextmagicRest.TextMagicApi* | [**getMessagingStat**](docs/TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Return messaging statistics.
*TextmagicRest.TextMagicApi* | [**getOutboundMessage**](docs/TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
*TextmagicRest.TextMagicApi* | [**getOutboundMessagesHistory**](docs/TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
*TextmagicRest.TextMagicApi* | [**getPushTokens**](docs/TextMagicApi.md#getPushTokens) | **GET** /api/v2/push/tokens | Get all device tokens assigned to the current account
*TextmagicRest.TextMagicApi* | [**getScheduledMessage**](docs/TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get message schedule.
*TextmagicRest.TextMagicApi* | [**getSenderId**](docs/TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get a single Sender ID.
*TextmagicRest.TextMagicApi* | [**getSenderIds**](docs/TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all sender IDs of current user.
*TextmagicRest.TextMagicApi* | [**getSenderSettings**](docs/TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings | Get current user sender settings.
*TextmagicRest.TextMagicApi* | [**getSpendingStat**](docs/TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Return account spending statistics.
*TextmagicRest.TextMagicApi* | [**getState**](docs/TextMagicApi.md#getState) | **GET** /api/v2/state | Get current entities state
*TextmagicRest.TextMagicApi* | [**getSubaccount**](docs/TextMagicApi.md#getSubaccount) | **GET** /api/v2/subaccounts/{id} | Get a single subaccount.
*TextmagicRest.TextMagicApi* | [**getSubaccounts**](docs/TextMagicApi.md#getSubaccounts) | **GET** /api/v2/subaccounts | Get all subaccounts of current user.
*TextmagicRest.TextMagicApi* | [**getSubaccountsWithTokens**](docs/TextMagicApi.md#getSubaccountsWithTokens) | **POST** /api/v2/subaccounts/tokens/list | Get all subaccounts with their REST API tokens associated with specified app name.
*TextmagicRest.TextMagicApi* | [**getSurvey**](docs/TextMagicApi.md#getSurvey) | **GET** /api/v2/surveys/{id} | Get a survey by id.
*TextmagicRest.TextMagicApi* | [**getSurveyNode**](docs/TextMagicApi.md#getSurveyNode) | **GET** /api/v2/surveys/nodes/{id} | Get a node by id.
*TextmagicRest.TextMagicApi* | [**getSurveyNodes**](docs/TextMagicApi.md#getSurveyNodes) | **GET** /api/v2/surveys/{id}/nodes | Fetch nodes by given survey id.
*TextmagicRest.TextMagicApi* | [**getSurveys**](docs/TextMagicApi.md#getSurveys) | **GET** /api/v2/surveys | Get all user surveys.
*TextmagicRest.TextMagicApi* | [**getTemplate**](docs/TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a single template.
*TextmagicRest.TextMagicApi* | [**getTimezones**](docs/TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Return all available timezone IDs.
*TextmagicRest.TextMagicApi* | [**getUnreadMessagesTotal**](docs/TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get total amount of unread messages in the current user chats.
*TextmagicRest.TextMagicApi* | [**getUnsubscribedContact**](docs/TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get a single unsubscribed contact.
*TextmagicRest.TextMagicApi* | [**getUnsubscribers**](docs/TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all contact have unsubscribed from your communication.
*TextmagicRest.TextMagicApi* | [**getUserDedicatedNumbers**](docs/TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get user&#39;s dedicated numbers.
*TextmagicRest.TextMagicApi* | [**getUserLists**](docs/TextMagicApi.md#getUserLists) | **GET** /api/v2/lists | Get all user lists.
*TextmagicRest.TextMagicApi* | [**getVersions**](docs/TextMagicApi.md#getVersions) | **GET** /api/v2/versions | Get minimal valid apps versions
*TextmagicRest.TextMagicApi* | [**inviteSubaccount**](docs/TextMagicApi.md#inviteSubaccount) | **POST** /api/v2/subaccounts | Invite new subaccount.
*TextmagicRest.TextMagicApi* | [**markChatsReadBulk**](docs/TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark several chats as read by chat ids or mark all chats as read
*TextmagicRest.TextMagicApi* | [**markChatsUnreadBulk**](docs/TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark several chats as UNread by chat ids or mark all chats as UNread
*TextmagicRest.TextMagicApi* | [**mergeSurveyNodes**](docs/TextMagicApi.md#mergeSurveyNodes) | **POST** /api/v2/surveys/nodes/merge | Merge two question nodes.
*TextmagicRest.TextMagicApi* | [**muteChat**](docs/TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Set mute mode.
*TextmagicRest.TextMagicApi* | [**muteChatsBulk**](docs/TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute several chats by chat ids or mute all chats
*TextmagicRest.TextMagicApi* | [**ping**](docs/TextMagicApi.md#ping) | **GET** /api/v2/ping | Just does a pong.
*TextmagicRest.TextMagicApi* | [**reopenChatsBulk**](docs/TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats by chat ids or reopen all chats
*TextmagicRest.TextMagicApi* | [**requestNewSubaccountToken**](docs/TextMagicApi.md#requestNewSubaccountToken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for subaccount.
*TextmagicRest.TextMagicApi* | [**requestSenderId**](docs/TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Request for a new Sender ID.
*TextmagicRest.TextMagicApi* | [**resetSurvey**](docs/TextMagicApi.md#resetSurvey) | **PUT** /api/v2/surveys/{id}/reset | Reset a survey flow.
*TextmagicRest.TextMagicApi* | [**searchChats**](docs/TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by inbound or outbound messages text.
*TextmagicRest.TextMagicApi* | [**searchChatsByIds**](docs/TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats by IDs.
*TextmagicRest.TextMagicApi* | [**searchChatsByReceipent**](docs/TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient (contact, list name or phone number).
*TextmagicRest.TextMagicApi* | [**searchContacts**](docs/TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find user contacts by given parameters.
*TextmagicRest.TextMagicApi* | [**searchInboundMessages**](docs/TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages by given parameters.
*TextmagicRest.TextMagicApi* | [**searchLists**](docs/TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find contact lists by given parameters.
*TextmagicRest.TextMagicApi* | [**searchOutboundMessages**](docs/TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
*TextmagicRest.TextMagicApi* | [**searchScheduledMessages**](docs/TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages by given parameters.
*TextmagicRest.TextMagicApi* | [**searchTemplates**](docs/TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find user templates by given parameters.
*TextmagicRest.TextMagicApi* | [**sendEmailVerificationCode**](docs/TextMagicApi.md#sendEmailVerificationCode) | **GET** /api/v2/user/email/verification | Send user email verification
*TextmagicRest.TextMagicApi* | [**sendMessage**](docs/TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
*TextmagicRest.TextMagicApi* | [**sendPhoneVerificationCode**](docs/TextMagicApi.md#sendPhoneVerificationCode) | **GET** /api/v2/user/phone/verification | Send user phone verification
*TextmagicRest.TextMagicApi* | [**setChatStatus**](docs/TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Set status of the chat given by ID.
*TextmagicRest.TextMagicApi* | [**startSurvey**](docs/TextMagicApi.md#startSurvey) | **PUT** /api/v2/surveys/{id}/start | Start a survey.
*TextmagicRest.TextMagicApi* | [**unblockContact**](docs/TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock contact by phone number.
*TextmagicRest.TextMagicApi* | [**unblockContactsBulk**](docs/TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock several contacts by blocked contact ids or unblock all contacts
*TextmagicRest.TextMagicApi* | [**unmuteChatsBulk**](docs/TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute several chats by chat ids or unmute all chats
*TextmagicRest.TextMagicApi* | [**unsubscribeContact**](docs/TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Unsubscribe contact from your communication by phone number.
*TextmagicRest.TextMagicApi* | [**updateBalanceNotificationSettings**](docs/TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
*TextmagicRest.TextMagicApi* | [**updateCallbackSettings**](docs/TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
*TextmagicRest.TextMagicApi* | [**updateChatDesktopNotificationSettings**](docs/TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
*TextmagicRest.TextMagicApi* | [**updateContact**](docs/TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id} | Update existing contact.
*TextmagicRest.TextMagicApi* | [**updateContactNote**](docs/TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update existing contact note.
*TextmagicRest.TextMagicApi* | [**updateCurrentUser**](docs/TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Update current user info.
*TextmagicRest.TextMagicApi* | [**updateCustomField**](docs/TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Update existing custom field.
*TextmagicRest.TextMagicApi* | [**updateCustomFieldValue**](docs/TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Update contact&#39;s custom field value.
*TextmagicRest.TextMagicApi* | [**updateInboundMessagesNotificationSettings**](docs/TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
*TextmagicRest.TextMagicApi* | [**updateList**](docs/TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Update existing list.
*TextmagicRest.TextMagicApi* | [**updatePassword**](docs/TextMagicApi.md#updatePassword) | **PUT** /api/v2/user/password/change | Change user password.
*TextmagicRest.TextMagicApi* | [**updateSenderSetting**](docs/TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings for specified country.
*TextmagicRest.TextMagicApi* | [**updateSurvey**](docs/TextMagicApi.md#updateSurvey) | **PUT** /api/v2/surveys/{id} | Update existing survey.
*TextmagicRest.TextMagicApi* | [**updateSurveyNode**](docs/TextMagicApi.md#updateSurveyNode) | **PUT** /api/v2/surveys/nodes/{id} | Update existing node.
*TextmagicRest.TextMagicApi* | [**updateTemplate**](docs/TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update existing template.
*TextmagicRest.TextMagicApi* | [**uploadAvatar**](docs/TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Add an avatar for the current user.
*TextmagicRest.TextMagicApi* | [**uploadContactAvatar**](docs/TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Add an avatar for the contact.
*TextmagicRest.TextMagicApi* | [**uploadListAvatar**](docs/TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for the list.
*TextmagicRest.TextMagicApi* | [**uploadMessageAttachment**](docs/TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment


    ## Documentation for Models

 - [TextmagicRest.AssignContactsToListInputObject](docs/AssignContactsToListInputObject.md)
 - [TextmagicRest.BadRequestResponse](docs/BadRequestResponse.md)
 - [TextmagicRest.BadRequestResponseErrors](docs/BadRequestResponseErrors.md)
 - [TextmagicRest.BlockContactInputObject](docs/BlockContactInputObject.md)
 - [TextmagicRest.BulkSession](docs/BulkSession.md)
 - [TextmagicRest.BuyDedicatedNumberInputObject](docs/BuyDedicatedNumberInputObject.md)
 - [TextmagicRest.Chat](docs/Chat.md)
 - [TextmagicRest.CheckPhoneVerificationCodeInputObject](docs/CheckPhoneVerificationCodeInputObject.md)
 - [TextmagicRest.ClearAndAssignContactsToListInputObject](docs/ClearAndAssignContactsToListInputObject.md)
 - [TextmagicRest.CloseChatsBulkInputObject](docs/CloseChatsBulkInputObject.md)
 - [TextmagicRest.Contact](docs/Contact.md)
 - [TextmagicRest.ContactCustomField](docs/ContactCustomField.md)
 - [TextmagicRest.ContactImage](docs/ContactImage.md)
 - [TextmagicRest.ContactNote](docs/ContactNote.md)
 - [TextmagicRest.Conversation](docs/Conversation.md)
 - [TextmagicRest.Country](docs/Country.md)
 - [TextmagicRest.CreateContactInputObject](docs/CreateContactInputObject.md)
 - [TextmagicRest.CreateContactNoteInputObject](docs/CreateContactNoteInputObject.md)
 - [TextmagicRest.CreateCustomFieldInputObject](docs/CreateCustomFieldInputObject.md)
 - [TextmagicRest.CreateListInputObject](docs/CreateListInputObject.md)
 - [TextmagicRest.CreatePushTokenInputObject](docs/CreatePushTokenInputObject.md)
 - [TextmagicRest.CreateSurveyInputObject](docs/CreateSurveyInputObject.md)
 - [TextmagicRest.CreateSurveyNodeInputObject](docs/CreateSurveyNodeInputObject.md)
 - [TextmagicRest.CreateTemplateInputObject](docs/CreateTemplateInputObject.md)
 - [TextmagicRest.Currency](docs/Currency.md)
 - [TextmagicRest.DeleteChatMessagesBulkInputObject](docs/DeleteChatMessagesBulkInputObject.md)
 - [TextmagicRest.DeleteChatsBulkInputObject](docs/DeleteChatsBulkInputObject.md)
 - [TextmagicRest.DeleteContacsFromListObject](docs/DeleteContacsFromListObject.md)
 - [TextmagicRest.DeleteContactNotesBulkInputObject](docs/DeleteContactNotesBulkInputObject.md)
 - [TextmagicRest.DeleteContactsByIdsInputObject](docs/DeleteContactsByIdsInputObject.md)
 - [TextmagicRest.DeleteInboundMessagesBulkInputObject](docs/DeleteInboundMessagesBulkInputObject.md)
 - [TextmagicRest.DeleteListContactsBulkInputObject](docs/DeleteListContactsBulkInputObject.md)
 - [TextmagicRest.DeleteListsBulkInputObject](docs/DeleteListsBulkInputObject.md)
 - [TextmagicRest.DeleteMessageSessionsBulkInputObject](docs/DeleteMessageSessionsBulkInputObject.md)
 - [TextmagicRest.DeleteOutboundMessagesBulkInputObject](docs/DeleteOutboundMessagesBulkInputObject.md)
 - [TextmagicRest.DeleteScheduledMessagesBulkInputObject](docs/DeleteScheduledMessagesBulkInputObject.md)
 - [TextmagicRest.DeleteTemplatesBulkInputObject](docs/DeleteTemplatesBulkInputObject.md)
 - [TextmagicRest.DoAuthInputObject](docs/DoAuthInputObject.md)
 - [TextmagicRest.DoAuthResponse](docs/DoAuthResponse.md)
 - [TextmagicRest.DoAuthResponseMinVersions](docs/DoAuthResponseMinVersions.md)
 - [TextmagicRest.DoCarrierLookupResponse](docs/DoCarrierLookupResponse.md)
 - [TextmagicRest.DoEmailLookupResponse](docs/DoEmailLookupResponse.md)
 - [TextmagicRest.FavoriteContact](docs/FavoriteContact.md)
 - [TextmagicRest.ForwardedCall](docs/ForwardedCall.md)
 - [TextmagicRest.GetAllBulkSessionsResponse](docs/GetAllBulkSessionsResponse.md)
 - [TextmagicRest.GetAllChatsResponse](docs/GetAllChatsResponse.md)
 - [TextmagicRest.GetAllInboundMessagesResponse](docs/GetAllInboundMessagesResponse.md)
 - [TextmagicRest.GetAllMessageSessionsResponse](docs/GetAllMessageSessionsResponse.md)
 - [TextmagicRest.GetAllOutboundMessagesResponse](docs/GetAllOutboundMessagesResponse.md)
 - [TextmagicRest.GetAllScheduledMessagesResponse](docs/GetAllScheduledMessagesResponse.md)
 - [TextmagicRest.GetAllTemplatesResponse](docs/GetAllTemplatesResponse.md)
 - [TextmagicRest.GetAvailableDedicatedNumbersResponse](docs/GetAvailableDedicatedNumbersResponse.md)
 - [TextmagicRest.GetAvailableSenderSettingOptionsResponse](docs/GetAvailableSenderSettingOptionsResponse.md)
 - [TextmagicRest.GetBalanceNotificationOptionsResponse](docs/GetBalanceNotificationOptionsResponse.md)
 - [TextmagicRest.GetBalanceNotificationSettingsResponse](docs/GetBalanceNotificationSettingsResponse.md)
 - [TextmagicRest.GetBlockedContactsResponse](docs/GetBlockedContactsResponse.md)
 - [TextmagicRest.GetCallbackSettingsResponse](docs/GetCallbackSettingsResponse.md)
 - [TextmagicRest.GetChatMessagesResponse](docs/GetChatMessagesResponse.md)
 - [TextmagicRest.GetContactImportSessionProgressResponse](docs/GetContactImportSessionProgressResponse.md)
 - [TextmagicRest.GetContactNotesResponse](docs/GetContactNotesResponse.md)
 - [TextmagicRest.GetContactsAutocompleteResponse](docs/GetContactsAutocompleteResponse.md)
 - [TextmagicRest.GetContactsByListIdResponse](docs/GetContactsByListIdResponse.md)
 - [TextmagicRest.GetContactsResponse](docs/GetContactsResponse.md)
 - [TextmagicRest.GetCustomFieldsResponse](docs/GetCustomFieldsResponse.md)
 - [TextmagicRest.GetFavouritesResponse](docs/GetFavouritesResponse.md)
 - [TextmagicRest.GetForwardedCallsResponse](docs/GetForwardedCallsResponse.md)
 - [TextmagicRest.GetInboundMessagesNotificationSettingsResponse](docs/GetInboundMessagesNotificationSettingsResponse.md)
 - [TextmagicRest.GetInvoicesResponse](docs/GetInvoicesResponse.md)
 - [TextmagicRest.GetListContactsIdsResponse](docs/GetListContactsIdsResponse.md)
 - [TextmagicRest.GetListsOfContactResponse](docs/GetListsOfContactResponse.md)
 - [TextmagicRest.GetMessagePreviewResponse](docs/GetMessagePreviewResponse.md)
 - [TextmagicRest.GetMessagePriceResponse](docs/GetMessagePriceResponse.md)
 - [TextmagicRest.GetMessagePricesResponse](docs/GetMessagePricesResponse.md)
 - [TextmagicRest.GetMessageSessionStatResponse](docs/GetMessageSessionStatResponse.md)
 - [TextmagicRest.GetMessagesBySessionIdResponse](docs/GetMessagesBySessionIdResponse.md)
 - [TextmagicRest.GetMessagingCountersResponse](docs/GetMessagingCountersResponse.md)
 - [TextmagicRest.GetMessagingStatResponse](docs/GetMessagingStatResponse.md)
 - [TextmagicRest.GetOutboundMessagesHistoryResponse](docs/GetOutboundMessagesHistoryResponse.md)
 - [TextmagicRest.GetPushTokensResponse](docs/GetPushTokensResponse.md)
 - [TextmagicRest.GetSenderIdsResponse](docs/GetSenderIdsResponse.md)
 - [TextmagicRest.GetSenderSettingsResponse](docs/GetSenderSettingsResponse.md)
 - [TextmagicRest.GetSpendingStatResponse](docs/GetSpendingStatResponse.md)
 - [TextmagicRest.GetStateResponse](docs/GetStateResponse.md)
 - [TextmagicRest.GetSubaccountsWithTokensInputObject](docs/GetSubaccountsWithTokensInputObject.md)
 - [TextmagicRest.GetSubaccountsWithTokensResponse](docs/GetSubaccountsWithTokensResponse.md)
 - [TextmagicRest.GetSurveyNodesResponse](docs/GetSurveyNodesResponse.md)
 - [TextmagicRest.GetSurveysResponse](docs/GetSurveysResponse.md)
 - [TextmagicRest.GetUnreadMessagesTotalResponse](docs/GetUnreadMessagesTotalResponse.md)
 - [TextmagicRest.GetUnsubscribersResponse](docs/GetUnsubscribersResponse.md)
 - [TextmagicRest.GetUserDedicatedNumbersResponse](docs/GetUserDedicatedNumbersResponse.md)
 - [TextmagicRest.GetUserListsResponse](docs/GetUserListsResponse.md)
 - [TextmagicRest.GetVersionsResponse](docs/GetVersionsResponse.md)
 - [TextmagicRest.Group](docs/Group.md)
 - [TextmagicRest.GroupImage](docs/GroupImage.md)
 - [TextmagicRest.InviteSubaccountInputObject](docs/InviteSubaccountInputObject.md)
 - [TextmagicRest.Invoice](docs/Invoice.md)
 - [TextmagicRest.MarkChatsReadBulkInputObject](docs/MarkChatsReadBulkInputObject.md)
 - [TextmagicRest.MarkChatsUnreadBulkInputObject](docs/MarkChatsUnreadBulkInputObject.md)
 - [TextmagicRest.MergeSurveyNodesInputObject](docs/MergeSurveyNodesInputObject.md)
 - [TextmagicRest.MessageIn](docs/MessageIn.md)
 - [TextmagicRest.MessageOut](docs/MessageOut.md)
 - [TextmagicRest.MessageSession](docs/MessageSession.md)
 - [TextmagicRest.MessageTemplate](docs/MessageTemplate.md)
 - [TextmagicRest.MessagesIcs](docs/MessagesIcs.md)
 - [TextmagicRest.MessagesIcsParameters](docs/MessagesIcsParameters.md)
 - [TextmagicRest.MessagesIcsParametersRecipients](docs/MessagesIcsParametersRecipients.md)
 - [TextmagicRest.MessagesIcsTextParameters](docs/MessagesIcsTextParameters.md)
 - [TextmagicRest.MessagingStatItem](docs/MessagingStatItem.md)
 - [TextmagicRest.MuteChatInputObject](docs/MuteChatInputObject.md)
 - [TextmagicRest.MuteChatsBulkInputObject](docs/MuteChatsBulkInputObject.md)
 - [TextmagicRest.NotFoundResponse](docs/NotFoundResponse.md)
 - [TextmagicRest.PingResponse](docs/PingResponse.md)
 - [TextmagicRest.PushToken](docs/PushToken.md)
 - [TextmagicRest.ReopenChatsBulkInputObject](docs/ReopenChatsBulkInputObject.md)
 - [TextmagicRest.RequestNewSubaccountTokenInputObject](docs/RequestNewSubaccountTokenInputObject.md)
 - [TextmagicRest.RequestSenderIdInputObject](docs/RequestSenderIdInputObject.md)
 - [TextmagicRest.ResourceLinkResponse](docs/ResourceLinkResponse.md)
 - [TextmagicRest.SearchChatsByIdsResponse](docs/SearchChatsByIdsResponse.md)
 - [TextmagicRest.SearchChatsByReceipentResponse](docs/SearchChatsByReceipentResponse.md)
 - [TextmagicRest.SearchChatsResponse](docs/SearchChatsResponse.md)
 - [TextmagicRest.SearchContactsResponse](docs/SearchContactsResponse.md)
 - [TextmagicRest.SearchInboundMessagesResponse](docs/SearchInboundMessagesResponse.md)
 - [TextmagicRest.SearchListsResponse](docs/SearchListsResponse.md)
 - [TextmagicRest.SearchOutboundMessagesResponse](docs/SearchOutboundMessagesResponse.md)
 - [TextmagicRest.SearchScheduledMessagesResponse](docs/SearchScheduledMessagesResponse.md)
 - [TextmagicRest.SearchTemplatesResponse](docs/SearchTemplatesResponse.md)
 - [TextmagicRest.SendMessageInputObject](docs/SendMessageInputObject.md)
 - [TextmagicRest.SendMessageResponse](docs/SendMessageResponse.md)
 - [TextmagicRest.SenderId](docs/SenderId.md)
 - [TextmagicRest.SetChatStatusInputObject](docs/SetChatStatusInputObject.md)
 - [TextmagicRest.SubaccountWithToken](docs/SubaccountWithToken.md)
 - [TextmagicRest.SuccessfulResponse](docs/SuccessfulResponse.md)
 - [TextmagicRest.Survey](docs/Survey.md)
 - [TextmagicRest.SurveyNode](docs/SurveyNode.md)
 - [TextmagicRest.SurveyRecipient](docs/SurveyRecipient.md)
 - [TextmagicRest.SurveySenderCountries](docs/SurveySenderCountries.md)
 - [TextmagicRest.Timezone](docs/Timezone.md)
 - [TextmagicRest.UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [TextmagicRest.UnblockContactInputObject](docs/UnblockContactInputObject.md)
 - [TextmagicRest.UnblockContactsBulkInputObject](docs/UnblockContactsBulkInputObject.md)
 - [TextmagicRest.UnmuteChatsBulkInputObject](docs/UnmuteChatsBulkInputObject.md)
 - [TextmagicRest.UnsubscribeContactInputObject](docs/UnsubscribeContactInputObject.md)
 - [TextmagicRest.UnsubscribedContact](docs/UnsubscribedContact.md)
 - [TextmagicRest.UpdateBalanceNotificationSettingsInputObject](docs/UpdateBalanceNotificationSettingsInputObject.md)
 - [TextmagicRest.UpdateCallbackSettingsInputObject](docs/UpdateCallbackSettingsInputObject.md)
 - [TextmagicRest.UpdateChatDesktopNotificationSettingsInputObject](docs/UpdateChatDesktopNotificationSettingsInputObject.md)
 - [TextmagicRest.UpdateContactInputObject](docs/UpdateContactInputObject.md)
 - [TextmagicRest.UpdateContactNoteInputObject](docs/UpdateContactNoteInputObject.md)
 - [TextmagicRest.UpdateCurrentUserInputObject](docs/UpdateCurrentUserInputObject.md)
 - [TextmagicRest.UpdateCurrentUserResponse](docs/UpdateCurrentUserResponse.md)
 - [TextmagicRest.UpdateCustomFieldInputObject](docs/UpdateCustomFieldInputObject.md)
 - [TextmagicRest.UpdateCustomFieldValueInputObject](docs/UpdateCustomFieldValueInputObject.md)
 - [TextmagicRest.UpdateInboundMessagesNotificationSettingsInputObject](docs/UpdateInboundMessagesNotificationSettingsInputObject.md)
 - [TextmagicRest.UpdateListObject](docs/UpdateListObject.md)
 - [TextmagicRest.UpdatePasswordInputObject](docs/UpdatePasswordInputObject.md)
 - [TextmagicRest.UpdateSenderSettingInputObject](docs/UpdateSenderSettingInputObject.md)
 - [TextmagicRest.UpdateSurveyInputObject](docs/UpdateSurveyInputObject.md)
 - [TextmagicRest.UpdateSurveyNodeInputObject](docs/UpdateSurveyNodeInputObject.md)
 - [TextmagicRest.UpdateTemplateInputObject](docs/UpdateTemplateInputObject.md)
 - [TextmagicRest.UploadMessageAttachmentResponse](docs/UploadMessageAttachmentResponse.md)
 - [TextmagicRest.User](docs/User.md)
 - [TextmagicRest.UserCustomField](docs/UserCustomField.md)
 - [TextmagicRest.UserImage](docs/UserImage.md)
 - [TextmagicRest.UserStatement](docs/UserStatement.md)
 - [TextmagicRest.UsersInbound](docs/UsersInbound.md)


    ## Documentation for Authorization


### BasicAuth

- **Type**: HTTP basic authentication

