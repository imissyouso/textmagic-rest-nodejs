# TextMagic JavaScript SDK

TextmagicClient - JavaScript client for textmagic-client

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
    var TextmagicClient = require('textmagic-client');

        var defaultClient = TextmagicClient.ApiClient.instance;
    
            // Configure HTTP basic authorization: BasicAuth
            var BasicAuth = defaultClient.authentications['BasicAuth'];
        BasicAuth.username = 'YOUR USERNAME'
        BasicAuth.password = 'YOUR PASSWORD'

    var api = new TextmagicClient.TextMagicApi()
    
            var assignContactsToListInputObject = new TextmagicClient.AssignContactsToListInputObject(); // {AssignContactsToListInputObject} Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user
    
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
*TextmagicClient.TextMagicApi* | [**assignContactsToList**](docs/TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to the specified list.
*TextmagicClient.TextMagicApi* | [**blockContact**](docs/TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block contact from inbound and outbound communication by phone number.
*TextmagicClient.TextMagicApi* | [**buyDedicatedNumber**](docs/TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number and assign it to the specified account.
*TextmagicClient.TextMagicApi* | [**cancelSurvey**](docs/TextMagicApi.md#cancelSurvey) | **PUT** /api/v2/surveys/{id}/cancel | Cancel a survey.
*TextmagicClient.TextMagicApi* | [**checkPhoneVerificationCode**](docs/TextMagicApi.md#checkPhoneVerificationCode) | **PUT** /api/v2/user/phone/verification | Check user phone verification code
*TextmagicClient.TextMagicApi* | [**clearAndAssignContactsToList**](docs/TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts.
*TextmagicClient.TextMagicApi* | [**closeChatsBulk**](docs/TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats by chat ids or close all chats
*TextmagicClient.TextMagicApi* | [**closeReadChats**](docs/TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close all chats that have no unread messages.
*TextmagicClient.TextMagicApi* | [**closeSubaccount**](docs/TextMagicApi.md#closeSubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close subaccount.
*TextmagicClient.TextMagicApi* | [**createContact**](docs/TextMagicApi.md#createContact) | **POST** /api/v2/contacts | Create a new contact from the submitted data.
*TextmagicClient.TextMagicApi* | [**createContactNote**](docs/TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note.
*TextmagicClient.TextMagicApi* | [**createCustomField**](docs/TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Create a new custom field from the submitted data.
*TextmagicClient.TextMagicApi* | [**createList**](docs/TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list from the submitted data.
*TextmagicClient.TextMagicApi* | [**createPushToken**](docs/TextMagicApi.md#createPushToken) | **POST** /api/v2/push/tokens | Add or update a device token.
*TextmagicClient.TextMagicApi* | [**createSurvey**](docs/TextMagicApi.md#createSurvey) | **POST** /api/v2/surveys | Create a new survey from the submitted data.
*TextmagicClient.TextMagicApi* | [**createSurveyNode**](docs/TextMagicApi.md#createSurveyNode) | **POST** /api/v2/surveys/{id}/nodes | Create a new node from the submitted data.
*TextmagicClient.TextMagicApi* | [**createTemplate**](docs/TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a new template from the submitted data.
*TextmagicClient.TextMagicApi* | [**deleteAllContacts**](docs/TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete all contacts.
*TextmagicClient.TextMagicApi* | [**deleteAllOutboundMessages**](docs/TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
*TextmagicClient.TextMagicApi* | [**deleteAvatar**](docs/TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar for the current user.\\
*TextmagicClient.TextMagicApi* | [**deleteChatMessages**](docs/TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete messages from chat by given messages ID(s).
*TextmagicClient.TextMagicApi* | [**deleteChatsBulk**](docs/TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats by given ID(s) or delete all chats.
*TextmagicClient.TextMagicApi* | [**deleteContact**](docs/TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a single contact.
*TextmagicClient.TextMagicApi* | [**deleteContactAvatar**](docs/TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar for the contact.
*TextmagicClient.TextMagicApi* | [**deleteContactNote**](docs/TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a single contact note.
*TextmagicClient.TextMagicApi* | [**deleteContactNotesBulk**](docs/TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact note by given ID(s) or delete all contact notes.
*TextmagicClient.TextMagicApi* | [**deleteContactsByIds**](docs/TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contact by given ID(s) or delete all contacts.
*TextmagicClient.TextMagicApi* | [**deleteContactsFromList**](docs/TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from the specified list.
*TextmagicClient.TextMagicApi* | [**deleteCustomField**](docs/TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a single custom field.
*TextmagicClient.TextMagicApi* | [**deleteDedicatedNumber**](docs/TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel dedicated number subscription.
*TextmagicClient.TextMagicApi* | [**deleteInboundMessage**](docs/TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete the incoming message.
*TextmagicClient.TextMagicApi* | [**deleteInboundMessagesBulk**](docs/TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages by given ID(s) or delete all inbound messages.
*TextmagicClient.TextMagicApi* | [**deleteList**](docs/TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a single list.
*TextmagicClient.TextMagicApi* | [**deleteListAvatar**](docs/TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for the list.
*TextmagicClient.TextMagicApi* | [**deleteListContactsBulk**](docs/TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contact from list by given ID(s) or all contacts from list.
*TextmagicClient.TextMagicApi* | [**deleteListsBulk**](docs/TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete list by given ID(s) or delete all lists.
*TextmagicClient.TextMagicApi* | [**deleteMessageSession**](docs/TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a message session, together with all nested messages.
*TextmagicClient.TextMagicApi* | [**deleteMessageSessionsBulk**](docs/TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete messages sessions, together with all nested messages, by given ID(s) or delete all messages sessions.
*TextmagicClient.TextMagicApi* | [**deleteOutboundMessage**](docs/TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
*TextmagicClient.TextMagicApi* | [**deleteOutboundMessagesBulk**](docs/TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages by IDs
*TextmagicClient.TextMagicApi* | [**deletePushToken**](docs/TextMagicApi.md#deletePushToken) | **DELETE** /api/v2/push/tokens/{type}/{deviceId} | Delete a push notification device token.
*TextmagicClient.TextMagicApi* | [**deleteScheduledMessage**](docs/TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a message session, together with all nested messages.
*TextmagicClient.TextMagicApi* | [**deleteScheduledMessagesBulk**](docs/TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages by given ID(s) or delete all scheduled messages.
*TextmagicClient.TextMagicApi* | [**deleteSenderId**](docs/TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID.
*TextmagicClient.TextMagicApi* | [**deleteSurvey**](docs/TextMagicApi.md#deleteSurvey) | **DELETE** /api/v2/surveys/{id} | Delete a survey.
*TextmagicClient.TextMagicApi* | [**deleteSurveyNode**](docs/TextMagicApi.md#deleteSurveyNode) | **DELETE** /api/v2/surveys/nodes/{id} | Delete a node.
*TextmagicClient.TextMagicApi* | [**deleteTemplate**](docs/TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a single template.
*TextmagicClient.TextMagicApi* | [**deleteTemplatesBulk**](docs/TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete template by given ID(s) or delete all templates.
*TextmagicClient.TextMagicApi* | [**doAuth**](docs/TextMagicApi.md#doAuth) | **POST** /api/v2/auth | Authenticate user by given username and password.
*TextmagicClient.TextMagicApi* | [**doCarrierLookup**](docs/TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
*TextmagicClient.TextMagicApi* | [**doEmailLookup**](docs/TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Validate Email address using Email Lookup tool
*TextmagicClient.TextMagicApi* | [**duplicateSurvey**](docs/TextMagicApi.md#duplicateSurvey) | **PUT** /api/v2/surveys/{id}/duplicate | Duplicate a survey.
*TextmagicClient.TextMagicApi* | [**getAllBulkSessions**](docs/TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sending sessions.
*TextmagicClient.TextMagicApi* | [**getAllChats**](docs/TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all user chats.
*TextmagicClient.TextMagicApi* | [**getAllInboundMessages**](docs/TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbox messages.
*TextmagicClient.TextMagicApi* | [**getAllMessageSessions**](docs/TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all message sending sessions.
*TextmagicClient.TextMagicApi* | [**getAllOutboundMessages**](docs/TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
*TextmagicClient.TextMagicApi* | [**getAllScheduledMessages**](docs/TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages.
*TextmagicClient.TextMagicApi* | [**getAllTemplates**](docs/TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all user templates.
*TextmagicClient.TextMagicApi* | [**getAvailableDedicatedNumbers**](docs/TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find available dedicated numbers to buy.
*TextmagicClient.TextMagicApi* | [**getAvailableSenderSettingOptions**](docs/TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get all available sender setting options which could be used in \&quot;from\&quot; parameter of POST messages method.
*TextmagicClient.TextMagicApi* | [**getBalanceNotificationOptions**](docs/TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
*TextmagicClient.TextMagicApi* | [**getBalanceNotificationSettings**](docs/TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
*TextmagicClient.TextMagicApi* | [**getBlockedContacts**](docs/TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts.
*TextmagicClient.TextMagicApi* | [**getBulkSession**](docs/TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk message session status.
*TextmagicClient.TextMagicApi* | [**getCallbackSettings**](docs/TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
*TextmagicClient.TextMagicApi* | [**getCallsPrices**](docs/TextMagicApi.md#getCallsPrices) | **GET** /api/v2/calls/price | Check pricing for a inbound/outbound call.
*TextmagicClient.TextMagicApi* | [**getChat**](docs/TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat.
*TextmagicClient.TextMagicApi* | [**getChatByPhone**](docs/TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone.
*TextmagicClient.TextMagicApi* | [**getChatMessages**](docs/TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Fetch messages from chat with specified chat id.
*TextmagicClient.TextMagicApi* | [**getContact**](docs/TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get a single contact.
*TextmagicClient.TextMagicApi* | [**getContactByPhone**](docs/TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get a single contact by phone number.
*TextmagicClient.TextMagicApi* | [**getContactIfBlocked**](docs/TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check is that phone number blocked
*TextmagicClient.TextMagicApi* | [**getContactImportSessionProgress**](docs/TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Get contact import session progress.
*TextmagicClient.TextMagicApi* | [**getContactNote**](docs/TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a single contact note.
*TextmagicClient.TextMagicApi* | [**getContactNotes**](docs/TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to the given contact.
*TextmagicClient.TextMagicApi* | [**getContacts**](docs/TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all user contacts.
*TextmagicClient.TextMagicApi* | [**getContactsAutocomplete**](docs/TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions by given search term.
*TextmagicClient.TextMagicApi* | [**getContactsByListId**](docs/TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Fetch user contacts by given group id.
*TextmagicClient.TextMagicApi* | [**getCountries**](docs/TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Return list of countries.
*TextmagicClient.TextMagicApi* | [**getCurrentUser**](docs/TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current user info.
*TextmagicClient.TextMagicApi* | [**getCustomField**](docs/TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get a single custom field.
*TextmagicClient.TextMagicApi* | [**getCustomFields**](docs/TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all contact custom fields.
*TextmagicClient.TextMagicApi* | [**getDedicatedNumber**](docs/TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get a single dedicated number.
*TextmagicClient.TextMagicApi* | [**getDisallowedRules**](docs/TextMagicApi.md#getDisallowedRules) | **GET** /api/v2/user/disallowed-rules | Get an array of all rules that are disallowed to the current account.
*TextmagicClient.TextMagicApi* | [**getFavourites**](docs/TextMagicApi.md#getFavourites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists.
*TextmagicClient.TextMagicApi* | [**getForwardedCalls**](docs/TextMagicApi.md#getForwardedCalls) | **GET** /api/v2/calls | Get all forwarded calls.
*TextmagicClient.TextMagicApi* | [**getInboundMessage**](docs/TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbox message.
*TextmagicClient.TextMagicApi* | [**getInboundMessagesNotificationSettings**](docs/TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
*TextmagicClient.TextMagicApi* | [**getInvoices**](docs/TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Return account invoices.
*TextmagicClient.TextMagicApi* | [**getList**](docs/TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get a single list.
*TextmagicClient.TextMagicApi* | [**getListContactsIds**](docs/TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Fetch all contacts IDs belonging to the list with ID.
*TextmagicClient.TextMagicApi* | [**getListsOfContact**](docs/TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Return lists which contact belongs to.
*TextmagicClient.TextMagicApi* | [**getMessagePreview**](docs/TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
*TextmagicClient.TextMagicApi* | [**getMessagePrice**](docs/TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price | Check price
*TextmagicClient.TextMagicApi* | [**getMessagePrices**](docs/TextMagicApi.md#getMessagePrices) | **GET** /api/v2/messages/prices | Get pricing
*TextmagicClient.TextMagicApi* | [**getMessageSession**](docs/TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a message session.
*TextmagicClient.TextMagicApi* | [**getMessageSessionStat**](docs/TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get sending session statistics.
*TextmagicClient.TextMagicApi* | [**getMessagesBySessionId**](docs/TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Fetch messages by given session id.
*TextmagicClient.TextMagicApi* | [**getMessagingCounters**](docs/TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Return counters for messaging data views.
*TextmagicClient.TextMagicApi* | [**getMessagingStat**](docs/TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Return messaging statistics.
*TextmagicClient.TextMagicApi* | [**getOutboundMessage**](docs/TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
*TextmagicClient.TextMagicApi* | [**getOutboundMessagesHistory**](docs/TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
*TextmagicClient.TextMagicApi* | [**getPushTokens**](docs/TextMagicApi.md#getPushTokens) | **GET** /api/v2/push/tokens | Get all device tokens assigned to the current account
*TextmagicClient.TextMagicApi* | [**getScheduledMessage**](docs/TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get message schedule.
*TextmagicClient.TextMagicApi* | [**getSenderId**](docs/TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get a single Sender ID.
*TextmagicClient.TextMagicApi* | [**getSenderIds**](docs/TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all sender IDs of current user.
*TextmagicClient.TextMagicApi* | [**getSenderSettings**](docs/TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings | Get current user sender settings.
*TextmagicClient.TextMagicApi* | [**getSpendingStat**](docs/TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Return account spending statistics.
*TextmagicClient.TextMagicApi* | [**getState**](docs/TextMagicApi.md#getState) | **GET** /api/v2/state | Get current entities state
*TextmagicClient.TextMagicApi* | [**getSubaccount**](docs/TextMagicApi.md#getSubaccount) | **GET** /api/v2/subaccounts/{id} | Get a single subaccount.
*TextmagicClient.TextMagicApi* | [**getSubaccounts**](docs/TextMagicApi.md#getSubaccounts) | **GET** /api/v2/subaccounts | Get all subaccounts of current user.
*TextmagicClient.TextMagicApi* | [**getSubaccountsWithTokens**](docs/TextMagicApi.md#getSubaccountsWithTokens) | **POST** /api/v2/subaccounts/tokens/list | Get all subaccounts with their REST API tokens associated with specified app name.
*TextmagicClient.TextMagicApi* | [**getSurvey**](docs/TextMagicApi.md#getSurvey) | **GET** /api/v2/surveys/{id} | Get a survey by id.
*TextmagicClient.TextMagicApi* | [**getSurveyNode**](docs/TextMagicApi.md#getSurveyNode) | **GET** /api/v2/surveys/nodes/{id} | Get a node by id.
*TextmagicClient.TextMagicApi* | [**getSurveyNodes**](docs/TextMagicApi.md#getSurveyNodes) | **GET** /api/v2/surveys/{id}/nodes | Fetch nodes by given survey id.
*TextmagicClient.TextMagicApi* | [**getSurveys**](docs/TextMagicApi.md#getSurveys) | **GET** /api/v2/surveys | Get all user surveys.
*TextmagicClient.TextMagicApi* | [**getTemplate**](docs/TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a single template.
*TextmagicClient.TextMagicApi* | [**getTimezones**](docs/TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Return all available timezone IDs.
*TextmagicClient.TextMagicApi* | [**getUnreadMessagesTotal**](docs/TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get total amount of unread messages in the current user chats.
*TextmagicClient.TextMagicApi* | [**getUnsubscribedContact**](docs/TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get a single unsubscribed contact.
*TextmagicClient.TextMagicApi* | [**getUnsubscribers**](docs/TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all contact have unsubscribed from your communication.
*TextmagicClient.TextMagicApi* | [**getUserDedicatedNumbers**](docs/TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get user&#39;s dedicated numbers.
*TextmagicClient.TextMagicApi* | [**getUserLists**](docs/TextMagicApi.md#getUserLists) | **GET** /api/v2/lists | Get all user lists.
*TextmagicClient.TextMagicApi* | [**getVersions**](docs/TextMagicApi.md#getVersions) | **GET** /api/v2/versions | Get minimal valid apps versions
*TextmagicClient.TextMagicApi* | [**inviteSubaccount**](docs/TextMagicApi.md#inviteSubaccount) | **POST** /api/v2/subaccounts | Invite new subaccount.
*TextmagicClient.TextMagicApi* | [**markChatsReadBulk**](docs/TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark several chats as read by chat ids or mark all chats as read
*TextmagicClient.TextMagicApi* | [**markChatsUnreadBulk**](docs/TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark several chats as UNread by chat ids or mark all chats as UNread
*TextmagicClient.TextMagicApi* | [**mergeSurveyNodes**](docs/TextMagicApi.md#mergeSurveyNodes) | **POST** /api/v2/surveys/nodes/merge | Merge two question nodes.
*TextmagicClient.TextMagicApi* | [**muteChat**](docs/TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Set mute mode.
*TextmagicClient.TextMagicApi* | [**muteChatsBulk**](docs/TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute several chats by chat ids or mute all chats
*TextmagicClient.TextMagicApi* | [**ping**](docs/TextMagicApi.md#ping) | **GET** /api/v2/ping | Just does a pong.
*TextmagicClient.TextMagicApi* | [**reopenChatsBulk**](docs/TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats by chat ids or reopen all chats
*TextmagicClient.TextMagicApi* | [**requestNewSubaccountToken**](docs/TextMagicApi.md#requestNewSubaccountToken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for subaccount.
*TextmagicClient.TextMagicApi* | [**requestSenderId**](docs/TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Request for a new Sender ID.
*TextmagicClient.TextMagicApi* | [**resetSurvey**](docs/TextMagicApi.md#resetSurvey) | **PUT** /api/v2/surveys/{id}/reset | Reset a survey flow.
*TextmagicClient.TextMagicApi* | [**searchChats**](docs/TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by inbound or outbound messages text.
*TextmagicClient.TextMagicApi* | [**searchChatsByIds**](docs/TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats by IDs.
*TextmagicClient.TextMagicApi* | [**searchChatsByReceipent**](docs/TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient (contact, list name or phone number).
*TextmagicClient.TextMagicApi* | [**searchContacts**](docs/TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find user contacts by given parameters.
*TextmagicClient.TextMagicApi* | [**searchInboundMessages**](docs/TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages by given parameters.
*TextmagicClient.TextMagicApi* | [**searchLists**](docs/TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find contact lists by given parameters.
*TextmagicClient.TextMagicApi* | [**searchOutboundMessages**](docs/TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
*TextmagicClient.TextMagicApi* | [**searchScheduledMessages**](docs/TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages by given parameters.
*TextmagicClient.TextMagicApi* | [**searchTemplates**](docs/TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find user templates by given parameters.
*TextmagicClient.TextMagicApi* | [**sendEmailVerificationCode**](docs/TextMagicApi.md#sendEmailVerificationCode) | **GET** /api/v2/user/email/verification | Send user email verification
*TextmagicClient.TextMagicApi* | [**sendMessage**](docs/TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
*TextmagicClient.TextMagicApi* | [**sendPhoneVerificationCode**](docs/TextMagicApi.md#sendPhoneVerificationCode) | **GET** /api/v2/user/phone/verification | Send user phone verification
*TextmagicClient.TextMagicApi* | [**setChatStatus**](docs/TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Set status of the chat given by ID.
*TextmagicClient.TextMagicApi* | [**startSurvey**](docs/TextMagicApi.md#startSurvey) | **PUT** /api/v2/surveys/{id}/start | Start a survey.
*TextmagicClient.TextMagicApi* | [**unblockContact**](docs/TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock contact by phone number.
*TextmagicClient.TextMagicApi* | [**unblockContactsBulk**](docs/TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock several contacts by blocked contact ids or unblock all contacts
*TextmagicClient.TextMagicApi* | [**unmuteChatsBulk**](docs/TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute several chats by chat ids or unmute all chats
*TextmagicClient.TextMagicApi* | [**unsubscribeContact**](docs/TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Unsubscribe contact from your communication by phone number.
*TextmagicClient.TextMagicApi* | [**updateBalanceNotificationSettings**](docs/TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
*TextmagicClient.TextMagicApi* | [**updateCallbackSettings**](docs/TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
*TextmagicClient.TextMagicApi* | [**updateChatDesktopNotificationSettings**](docs/TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
*TextmagicClient.TextMagicApi* | [**updateContact**](docs/TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id} | Update existing contact.
*TextmagicClient.TextMagicApi* | [**updateContactNote**](docs/TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update existing contact note.
*TextmagicClient.TextMagicApi* | [**updateCurrentUser**](docs/TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Update current user info.
*TextmagicClient.TextMagicApi* | [**updateCustomField**](docs/TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Update existing custom field.
*TextmagicClient.TextMagicApi* | [**updateCustomFieldValue**](docs/TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Update contact&#39;s custom field value.
*TextmagicClient.TextMagicApi* | [**updateInboundMessagesNotificationSettings**](docs/TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
*TextmagicClient.TextMagicApi* | [**updateList**](docs/TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Update existing list.
*TextmagicClient.TextMagicApi* | [**updatePassword**](docs/TextMagicApi.md#updatePassword) | **PUT** /api/v2/user/password/change | Change user password.
*TextmagicClient.TextMagicApi* | [**updateSenderSetting**](docs/TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings for specified country.
*TextmagicClient.TextMagicApi* | [**updateSurvey**](docs/TextMagicApi.md#updateSurvey) | **PUT** /api/v2/surveys/{id} | Update existing survey.
*TextmagicClient.TextMagicApi* | [**updateSurveyNode**](docs/TextMagicApi.md#updateSurveyNode) | **PUT** /api/v2/surveys/nodes/{id} | Update existing node.
*TextmagicClient.TextMagicApi* | [**updateTemplate**](docs/TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update existing template.
*TextmagicClient.TextMagicApi* | [**uploadAvatar**](docs/TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Add an avatar for the current user.
*TextmagicClient.TextMagicApi* | [**uploadContactAvatar**](docs/TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Add an avatar for the contact.
*TextmagicClient.TextMagicApi* | [**uploadListAvatar**](docs/TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for the list.
*TextmagicClient.TextMagicApi* | [**uploadMessageAttachment**](docs/TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment


    ## Documentation for Models

 - [TextmagicClient.AssignContactsToListInputObject](docs/AssignContactsToListInputObject.md)
 - [TextmagicClient.BadRequestResponse](docs/BadRequestResponse.md)
 - [TextmagicClient.BadRequestResponseErrors](docs/BadRequestResponseErrors.md)
 - [TextmagicClient.BlockContactInputObject](docs/BlockContactInputObject.md)
 - [TextmagicClient.BulkSession](docs/BulkSession.md)
 - [TextmagicClient.BuyDedicatedNumberInputObject](docs/BuyDedicatedNumberInputObject.md)
 - [TextmagicClient.Chat](docs/Chat.md)
 - [TextmagicClient.CheckPhoneVerificationCodeInputObject](docs/CheckPhoneVerificationCodeInputObject.md)
 - [TextmagicClient.ClearAndAssignContactsToListInputObject](docs/ClearAndAssignContactsToListInputObject.md)
 - [TextmagicClient.CloseChatsBulkInputObject](docs/CloseChatsBulkInputObject.md)
 - [TextmagicClient.Contact](docs/Contact.md)
 - [TextmagicClient.ContactCustomField](docs/ContactCustomField.md)
 - [TextmagicClient.ContactImage](docs/ContactImage.md)
 - [TextmagicClient.ContactNote](docs/ContactNote.md)
 - [TextmagicClient.Conversation](docs/Conversation.md)
 - [TextmagicClient.Country](docs/Country.md)
 - [TextmagicClient.CreateContactInputObject](docs/CreateContactInputObject.md)
 - [TextmagicClient.CreateContactNoteInputObject](docs/CreateContactNoteInputObject.md)
 - [TextmagicClient.CreateCustomFieldInputObject](docs/CreateCustomFieldInputObject.md)
 - [TextmagicClient.CreateListInputObject](docs/CreateListInputObject.md)
 - [TextmagicClient.CreatePushTokenInputObject](docs/CreatePushTokenInputObject.md)
 - [TextmagicClient.CreateSurveyInputObject](docs/CreateSurveyInputObject.md)
 - [TextmagicClient.CreateSurveyNodeInputObject](docs/CreateSurveyNodeInputObject.md)
 - [TextmagicClient.CreateTemplateInputObject](docs/CreateTemplateInputObject.md)
 - [TextmagicClient.Currency](docs/Currency.md)
 - [TextmagicClient.DeleteChatMessagesBulkInputObject](docs/DeleteChatMessagesBulkInputObject.md)
 - [TextmagicClient.DeleteChatsBulkInputObject](docs/DeleteChatsBulkInputObject.md)
 - [TextmagicClient.DeleteContacsFromListObject](docs/DeleteContacsFromListObject.md)
 - [TextmagicClient.DeleteContactNotesBulkInputObject](docs/DeleteContactNotesBulkInputObject.md)
 - [TextmagicClient.DeleteContactsByIdsInputObject](docs/DeleteContactsByIdsInputObject.md)
 - [TextmagicClient.DeleteInboundMessagesBulkInputObject](docs/DeleteInboundMessagesBulkInputObject.md)
 - [TextmagicClient.DeleteListContactsBulkInputObject](docs/DeleteListContactsBulkInputObject.md)
 - [TextmagicClient.DeleteListsBulkInputObject](docs/DeleteListsBulkInputObject.md)
 - [TextmagicClient.DeleteMessageSessionsBulkInputObject](docs/DeleteMessageSessionsBulkInputObject.md)
 - [TextmagicClient.DeleteOutboundMessagesBulkInputObject](docs/DeleteOutboundMessagesBulkInputObject.md)
 - [TextmagicClient.DeleteScheduledMessagesBulkInputObject](docs/DeleteScheduledMessagesBulkInputObject.md)
 - [TextmagicClient.DeleteTemplatesBulkInputObject](docs/DeleteTemplatesBulkInputObject.md)
 - [TextmagicClient.DoAuthInputObject](docs/DoAuthInputObject.md)
 - [TextmagicClient.DoAuthResponse](docs/DoAuthResponse.md)
 - [TextmagicClient.DoAuthResponseMinVersions](docs/DoAuthResponseMinVersions.md)
 - [TextmagicClient.DoCarrierLookupResponse](docs/DoCarrierLookupResponse.md)
 - [TextmagicClient.DoEmailLookupResponse](docs/DoEmailLookupResponse.md)
 - [TextmagicClient.FavoriteContact](docs/FavoriteContact.md)
 - [TextmagicClient.ForwardedCall](docs/ForwardedCall.md)
 - [TextmagicClient.GetAllBulkSessionsResponse](docs/GetAllBulkSessionsResponse.md)
 - [TextmagicClient.GetAllChatsResponse](docs/GetAllChatsResponse.md)
 - [TextmagicClient.GetAllInboundMessagesResponse](docs/GetAllInboundMessagesResponse.md)
 - [TextmagicClient.GetAllMessageSessionsResponse](docs/GetAllMessageSessionsResponse.md)
 - [TextmagicClient.GetAllOutboundMessagesResponse](docs/GetAllOutboundMessagesResponse.md)
 - [TextmagicClient.GetAllScheduledMessagesResponse](docs/GetAllScheduledMessagesResponse.md)
 - [TextmagicClient.GetAllTemplatesResponse](docs/GetAllTemplatesResponse.md)
 - [TextmagicClient.GetAvailableDedicatedNumbersResponse](docs/GetAvailableDedicatedNumbersResponse.md)
 - [TextmagicClient.GetAvailableSenderSettingOptionsResponse](docs/GetAvailableSenderSettingOptionsResponse.md)
 - [TextmagicClient.GetBalanceNotificationOptionsResponse](docs/GetBalanceNotificationOptionsResponse.md)
 - [TextmagicClient.GetBalanceNotificationSettingsResponse](docs/GetBalanceNotificationSettingsResponse.md)
 - [TextmagicClient.GetBlockedContactsResponse](docs/GetBlockedContactsResponse.md)
 - [TextmagicClient.GetCallbackSettingsResponse](docs/GetCallbackSettingsResponse.md)
 - [TextmagicClient.GetChatMessagesResponse](docs/GetChatMessagesResponse.md)
 - [TextmagicClient.GetContactImportSessionProgressResponse](docs/GetContactImportSessionProgressResponse.md)
 - [TextmagicClient.GetContactNotesResponse](docs/GetContactNotesResponse.md)
 - [TextmagicClient.GetContactsAutocompleteResponse](docs/GetContactsAutocompleteResponse.md)
 - [TextmagicClient.GetContactsByListIdResponse](docs/GetContactsByListIdResponse.md)
 - [TextmagicClient.GetContactsResponse](docs/GetContactsResponse.md)
 - [TextmagicClient.GetCustomFieldsResponse](docs/GetCustomFieldsResponse.md)
 - [TextmagicClient.GetFavouritesResponse](docs/GetFavouritesResponse.md)
 - [TextmagicClient.GetForwardedCallsResponse](docs/GetForwardedCallsResponse.md)
 - [TextmagicClient.GetInboundMessagesNotificationSettingsResponse](docs/GetInboundMessagesNotificationSettingsResponse.md)
 - [TextmagicClient.GetInvoicesResponse](docs/GetInvoicesResponse.md)
 - [TextmagicClient.GetListContactsIdsResponse](docs/GetListContactsIdsResponse.md)
 - [TextmagicClient.GetListsOfContactResponse](docs/GetListsOfContactResponse.md)
 - [TextmagicClient.GetMessagePreviewResponse](docs/GetMessagePreviewResponse.md)
 - [TextmagicClient.GetMessagePriceResponse](docs/GetMessagePriceResponse.md)
 - [TextmagicClient.GetMessagePricesResponse](docs/GetMessagePricesResponse.md)
 - [TextmagicClient.GetMessageSessionStatResponse](docs/GetMessageSessionStatResponse.md)
 - [TextmagicClient.GetMessagesBySessionIdResponse](docs/GetMessagesBySessionIdResponse.md)
 - [TextmagicClient.GetMessagingCountersResponse](docs/GetMessagingCountersResponse.md)
 - [TextmagicClient.GetMessagingStatResponse](docs/GetMessagingStatResponse.md)
 - [TextmagicClient.GetOutboundMessagesHistoryResponse](docs/GetOutboundMessagesHistoryResponse.md)
 - [TextmagicClient.GetPushTokensResponse](docs/GetPushTokensResponse.md)
 - [TextmagicClient.GetSenderIdsResponse](docs/GetSenderIdsResponse.md)
 - [TextmagicClient.GetSenderSettingsResponse](docs/GetSenderSettingsResponse.md)
 - [TextmagicClient.GetSpendingStatResponse](docs/GetSpendingStatResponse.md)
 - [TextmagicClient.GetStateResponse](docs/GetStateResponse.md)
 - [TextmagicClient.GetSubaccountsWithTokensInputObject](docs/GetSubaccountsWithTokensInputObject.md)
 - [TextmagicClient.GetSubaccountsWithTokensResponse](docs/GetSubaccountsWithTokensResponse.md)
 - [TextmagicClient.GetSurveyNodesResponse](docs/GetSurveyNodesResponse.md)
 - [TextmagicClient.GetSurveysResponse](docs/GetSurveysResponse.md)
 - [TextmagicClient.GetUnreadMessagesTotalResponse](docs/GetUnreadMessagesTotalResponse.md)
 - [TextmagicClient.GetUnsubscribersResponse](docs/GetUnsubscribersResponse.md)
 - [TextmagicClient.GetUserDedicatedNumbersResponse](docs/GetUserDedicatedNumbersResponse.md)
 - [TextmagicClient.GetUserListsResponse](docs/GetUserListsResponse.md)
 - [TextmagicClient.GetVersionsResponse](docs/GetVersionsResponse.md)
 - [TextmagicClient.Group](docs/Group.md)
 - [TextmagicClient.GroupImage](docs/GroupImage.md)
 - [TextmagicClient.InviteSubaccountInputObject](docs/InviteSubaccountInputObject.md)
 - [TextmagicClient.Invoice](docs/Invoice.md)
 - [TextmagicClient.MarkChatsReadBulkInputObject](docs/MarkChatsReadBulkInputObject.md)
 - [TextmagicClient.MarkChatsUnreadBulkInputObject](docs/MarkChatsUnreadBulkInputObject.md)
 - [TextmagicClient.MergeSurveyNodesInputObject](docs/MergeSurveyNodesInputObject.md)
 - [TextmagicClient.MessageIn](docs/MessageIn.md)
 - [TextmagicClient.MessageOut](docs/MessageOut.md)
 - [TextmagicClient.MessageSession](docs/MessageSession.md)
 - [TextmagicClient.MessageTemplate](docs/MessageTemplate.md)
 - [TextmagicClient.MessagesIcs](docs/MessagesIcs.md)
 - [TextmagicClient.MessagesIcsParameters](docs/MessagesIcsParameters.md)
 - [TextmagicClient.MessagesIcsParametersRecipients](docs/MessagesIcsParametersRecipients.md)
 - [TextmagicClient.MessagesIcsTextParameters](docs/MessagesIcsTextParameters.md)
 - [TextmagicClient.MessagingStatItem](docs/MessagingStatItem.md)
 - [TextmagicClient.MuteChatInputObject](docs/MuteChatInputObject.md)
 - [TextmagicClient.MuteChatsBulkInputObject](docs/MuteChatsBulkInputObject.md)
 - [TextmagicClient.NotFoundResponse](docs/NotFoundResponse.md)
 - [TextmagicClient.PingResponse](docs/PingResponse.md)
 - [TextmagicClient.PushToken](docs/PushToken.md)
 - [TextmagicClient.ReopenChatsBulkInputObject](docs/ReopenChatsBulkInputObject.md)
 - [TextmagicClient.RequestNewSubaccountTokenInputObject](docs/RequestNewSubaccountTokenInputObject.md)
 - [TextmagicClient.RequestSenderIdInputObject](docs/RequestSenderIdInputObject.md)
 - [TextmagicClient.ResourceLinkResponse](docs/ResourceLinkResponse.md)
 - [TextmagicClient.SearchChatsByIdsResponse](docs/SearchChatsByIdsResponse.md)
 - [TextmagicClient.SearchChatsByReceipentResponse](docs/SearchChatsByReceipentResponse.md)
 - [TextmagicClient.SearchChatsResponse](docs/SearchChatsResponse.md)
 - [TextmagicClient.SearchContactsResponse](docs/SearchContactsResponse.md)
 - [TextmagicClient.SearchInboundMessagesResponse](docs/SearchInboundMessagesResponse.md)
 - [TextmagicClient.SearchListsResponse](docs/SearchListsResponse.md)
 - [TextmagicClient.SearchOutboundMessagesResponse](docs/SearchOutboundMessagesResponse.md)
 - [TextmagicClient.SearchScheduledMessagesResponse](docs/SearchScheduledMessagesResponse.md)
 - [TextmagicClient.SearchTemplatesResponse](docs/SearchTemplatesResponse.md)
 - [TextmagicClient.SendMessageInputObject](docs/SendMessageInputObject.md)
 - [TextmagicClient.SendMessageResponse](docs/SendMessageResponse.md)
 - [TextmagicClient.SenderId](docs/SenderId.md)
 - [TextmagicClient.SetChatStatusInputObject](docs/SetChatStatusInputObject.md)
 - [TextmagicClient.SubaccountWithToken](docs/SubaccountWithToken.md)
 - [TextmagicClient.SuccessfulResponse](docs/SuccessfulResponse.md)
 - [TextmagicClient.Survey](docs/Survey.md)
 - [TextmagicClient.SurveyNode](docs/SurveyNode.md)
 - [TextmagicClient.SurveyRecipient](docs/SurveyRecipient.md)
 - [TextmagicClient.SurveySenderCountries](docs/SurveySenderCountries.md)
 - [TextmagicClient.Timezone](docs/Timezone.md)
 - [TextmagicClient.UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [TextmagicClient.UnblockContactInputObject](docs/UnblockContactInputObject.md)
 - [TextmagicClient.UnblockContactsBulkInputObject](docs/UnblockContactsBulkInputObject.md)
 - [TextmagicClient.UnmuteChatsBulkInputObject](docs/UnmuteChatsBulkInputObject.md)
 - [TextmagicClient.UnsubscribeContactInputObject](docs/UnsubscribeContactInputObject.md)
 - [TextmagicClient.UnsubscribedContact](docs/UnsubscribedContact.md)
 - [TextmagicClient.UpdateBalanceNotificationSettingsInputObject](docs/UpdateBalanceNotificationSettingsInputObject.md)
 - [TextmagicClient.UpdateCallbackSettingsInputObject](docs/UpdateCallbackSettingsInputObject.md)
 - [TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject](docs/UpdateChatDesktopNotificationSettingsInputObject.md)
 - [TextmagicClient.UpdateContactInputObject](docs/UpdateContactInputObject.md)
 - [TextmagicClient.UpdateContactNoteInputObject](docs/UpdateContactNoteInputObject.md)
 - [TextmagicClient.UpdateCurrentUserInputObject](docs/UpdateCurrentUserInputObject.md)
 - [TextmagicClient.UpdateCurrentUserResponse](docs/UpdateCurrentUserResponse.md)
 - [TextmagicClient.UpdateCustomFieldInputObject](docs/UpdateCustomFieldInputObject.md)
 - [TextmagicClient.UpdateCustomFieldValueInputObject](docs/UpdateCustomFieldValueInputObject.md)
 - [TextmagicClient.UpdateInboundMessagesNotificationSettingsInputObject](docs/UpdateInboundMessagesNotificationSettingsInputObject.md)
 - [TextmagicClient.UpdateListObject](docs/UpdateListObject.md)
 - [TextmagicClient.UpdatePasswordInputObject](docs/UpdatePasswordInputObject.md)
 - [TextmagicClient.UpdateSenderSettingInputObject](docs/UpdateSenderSettingInputObject.md)
 - [TextmagicClient.UpdateSurveyInputObject](docs/UpdateSurveyInputObject.md)
 - [TextmagicClient.UpdateSurveyNodeInputObject](docs/UpdateSurveyNodeInputObject.md)
 - [TextmagicClient.UpdateTemplateInputObject](docs/UpdateTemplateInputObject.md)
 - [TextmagicClient.UploadMessageAttachmentResponse](docs/UploadMessageAttachmentResponse.md)
 - [TextmagicClient.User](docs/User.md)
 - [TextmagicClient.UserCustomField](docs/UserCustomField.md)
 - [TextmagicClient.UserImage](docs/UserImage.md)
 - [TextmagicClient.UserStatement](docs/UserStatement.md)
 - [TextmagicClient.UsersInbound](docs/UsersInbound.md)


    ## Documentation for Authorization


### BasicAuth

- **Type**: HTTP basic authentication

