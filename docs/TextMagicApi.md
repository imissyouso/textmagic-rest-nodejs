# TextmagicClient.TextMagicApi

All URIs are relative to *http://my.textmagic.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignContactsToList**](TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to the specified list.
[**blockContact**](TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block contact from inbound and outbound communication by phone number.
[**buyDedicatedNumber**](TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number and assign it to the specified account.
[**cancelSurvey**](TextMagicApi.md#cancelSurvey) | **PUT** /api/v2/surveys/{id}/cancel | Cancel a survey.
[**checkPhoneVerificationCode**](TextMagicApi.md#checkPhoneVerificationCode) | **PUT** /api/v2/user/phone/verification | Check user phone verification code
[**clearAndAssignContactsToList**](TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts.
[**closeChatsBulk**](TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats by chat ids or close all chats
[**closeReadChats**](TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close all chats that have no unread messages.
[**closeSubaccount**](TextMagicApi.md#closeSubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close subaccount.
[**createContact**](TextMagicApi.md#createContact) | **POST** /api/v2/contacts | Create a new contact from the submitted data.
[**createContactNote**](TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note.
[**createCustomField**](TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Create a new custom field from the submitted data.
[**createList**](TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list from the submitted data.
[**createPushToken**](TextMagicApi.md#createPushToken) | **POST** /api/v2/push/tokens | Add or update a device token.
[**createSurvey**](TextMagicApi.md#createSurvey) | **POST** /api/v2/surveys | Create a new survey from the submitted data.
[**createSurveyNode**](TextMagicApi.md#createSurveyNode) | **POST** /api/v2/surveys/{id}/nodes | Create a new node from the submitted data.
[**createTemplate**](TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a new template from the submitted data.
[**deleteAllContacts**](TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete all contacts.
[**deleteAllOutboundMessages**](TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
[**deleteAvatar**](TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar for the current user.\\
[**deleteChatMessages**](TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete messages from chat by given messages ID(s).
[**deleteChatsBulk**](TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats by given ID(s) or delete all chats.
[**deleteContact**](TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a single contact.
[**deleteContactAvatar**](TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar for the contact.
[**deleteContactNote**](TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a single contact note.
[**deleteContactNotesBulk**](TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact note by given ID(s) or delete all contact notes.
[**deleteContactsByIds**](TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contact by given ID(s) or delete all contacts.
[**deleteContactsFromList**](TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from the specified list.
[**deleteCustomField**](TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a single custom field.
[**deleteDedicatedNumber**](TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel dedicated number subscription.
[**deleteInboundMessage**](TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete the incoming message.
[**deleteInboundMessagesBulk**](TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages by given ID(s) or delete all inbound messages.
[**deleteList**](TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a single list.
[**deleteListAvatar**](TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for the list.
[**deleteListContactsBulk**](TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contact from list by given ID(s) or all contacts from list.
[**deleteListsBulk**](TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete list by given ID(s) or delete all lists.
[**deleteMessageSession**](TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a message session, together with all nested messages.
[**deleteMessageSessionsBulk**](TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete messages sessions, together with all nested messages, by given ID(s) or delete all messages sessions.
[**deleteOutboundMessage**](TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
[**deleteOutboundMessagesBulk**](TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages by IDs
[**deletePushToken**](TextMagicApi.md#deletePushToken) | **DELETE** /api/v2/push/tokens/{type}/{deviceId} | Delete a push notification device token.
[**deleteScheduledMessage**](TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a message session, together with all nested messages.
[**deleteScheduledMessagesBulk**](TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages by given ID(s) or delete all scheduled messages.
[**deleteSenderId**](TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID.
[**deleteSurvey**](TextMagicApi.md#deleteSurvey) | **DELETE** /api/v2/surveys/{id} | Delete a survey.
[**deleteSurveyNode**](TextMagicApi.md#deleteSurveyNode) | **DELETE** /api/v2/surveys/nodes/{id} | Delete a node.
[**deleteTemplate**](TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a single template.
[**deleteTemplatesBulk**](TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete template by given ID(s) or delete all templates.
[**doAuth**](TextMagicApi.md#doAuth) | **POST** /api/v2/auth | Authenticate user by given username and password.
[**doCarrierLookup**](TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
[**doEmailLookup**](TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Validate Email address using Email Lookup tool
[**duplicateSurvey**](TextMagicApi.md#duplicateSurvey) | **PUT** /api/v2/surveys/{id}/duplicate | Duplicate a survey.
[**getAllBulkSessions**](TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sending sessions.
[**getAllChats**](TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all user chats.
[**getAllInboundMessages**](TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbox messages.
[**getAllMessageSessions**](TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all message sending sessions.
[**getAllOutboundMessages**](TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
[**getAllScheduledMessages**](TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages.
[**getAllTemplates**](TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all user templates.
[**getAvailableDedicatedNumbers**](TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find available dedicated numbers to buy.
[**getAvailableSenderSettingOptions**](TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get all available sender setting options which could be used in \&quot;from\&quot; parameter of POST messages method.
[**getBalanceNotificationOptions**](TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
[**getBalanceNotificationSettings**](TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
[**getBlockedContacts**](TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts.
[**getBulkSession**](TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk message session status.
[**getCallbackSettings**](TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
[**getCallsPrices**](TextMagicApi.md#getCallsPrices) | **GET** /api/v2/calls/price | Check pricing for a inbound/outbound call.
[**getChat**](TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat.
[**getChatByPhone**](TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone.
[**getChatMessages**](TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Fetch messages from chat with specified chat id.
[**getContact**](TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get a single contact.
[**getContactByPhone**](TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get a single contact by phone number.
[**getContactIfBlocked**](TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check is that phone number blocked
[**getContactImportSessionProgress**](TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Get contact import session progress.
[**getContactNote**](TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a single contact note.
[**getContactNotes**](TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to the given contact.
[**getContacts**](TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all user contacts.
[**getContactsAutocomplete**](TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions by given search term.
[**getContactsByListId**](TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Fetch user contacts by given group id.
[**getCountries**](TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Return list of countries.
[**getCurrentUser**](TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current user info.
[**getCustomField**](TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get a single custom field.
[**getCustomFields**](TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all contact custom fields.
[**getDedicatedNumber**](TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get a single dedicated number.
[**getDisallowedRules**](TextMagicApi.md#getDisallowedRules) | **GET** /api/v2/user/disallowed-rules | Get an array of all rules that are disallowed to the current account.
[**getFavourites**](TextMagicApi.md#getFavourites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists.
[**getForwardedCalls**](TextMagicApi.md#getForwardedCalls) | **GET** /api/v2/calls | Get all forwarded calls.
[**getInboundMessage**](TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbox message.
[**getInboundMessagesNotificationSettings**](TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
[**getInvoices**](TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Return account invoices.
[**getList**](TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get a single list.
[**getListContactsIds**](TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Fetch all contacts IDs belonging to the list with ID.
[**getListsOfContact**](TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Return lists which contact belongs to.
[**getMessagePreview**](TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
[**getMessagePrice**](TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price | Check price
[**getMessagePrices**](TextMagicApi.md#getMessagePrices) | **GET** /api/v2/messages/prices | Get pricing
[**getMessageSession**](TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a message session.
[**getMessageSessionStat**](TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get sending session statistics.
[**getMessagesBySessionId**](TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Fetch messages by given session id.
[**getMessagingCounters**](TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Return counters for messaging data views.
[**getMessagingStat**](TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Return messaging statistics.
[**getOutboundMessage**](TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
[**getOutboundMessagesHistory**](TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
[**getPushTokens**](TextMagicApi.md#getPushTokens) | **GET** /api/v2/push/tokens | Get all device tokens assigned to the current account
[**getScheduledMessage**](TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get message schedule.
[**getSenderId**](TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get a single Sender ID.
[**getSenderIds**](TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all sender IDs of current user.
[**getSenderSettings**](TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings | Get current user sender settings.
[**getSpendingStat**](TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Return account spending statistics.
[**getState**](TextMagicApi.md#getState) | **GET** /api/v2/state | Get current entities state
[**getSubaccount**](TextMagicApi.md#getSubaccount) | **GET** /api/v2/subaccounts/{id} | Get a single subaccount.
[**getSubaccounts**](TextMagicApi.md#getSubaccounts) | **GET** /api/v2/subaccounts | Get all subaccounts of current user.
[**getSubaccountsWithTokens**](TextMagicApi.md#getSubaccountsWithTokens) | **POST** /api/v2/subaccounts/tokens/list | Get all subaccounts with their REST API tokens associated with specified app name.
[**getSurvey**](TextMagicApi.md#getSurvey) | **GET** /api/v2/surveys/{id} | Get a survey by id.
[**getSurveyNode**](TextMagicApi.md#getSurveyNode) | **GET** /api/v2/surveys/nodes/{id} | Get a node by id.
[**getSurveyNodes**](TextMagicApi.md#getSurveyNodes) | **GET** /api/v2/surveys/{id}/nodes | Fetch nodes by given survey id.
[**getSurveys**](TextMagicApi.md#getSurveys) | **GET** /api/v2/surveys | Get all user surveys.
[**getTemplate**](TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a single template.
[**getTimezones**](TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Return all available timezone IDs.
[**getUnreadMessagesTotal**](TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get total amount of unread messages in the current user chats.
[**getUnsubscribedContact**](TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get a single unsubscribed contact.
[**getUnsubscribers**](TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all contact have unsubscribed from your communication.
[**getUserDedicatedNumbers**](TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get user&#39;s dedicated numbers.
[**getUserLists**](TextMagicApi.md#getUserLists) | **GET** /api/v2/lists | Get all user lists.
[**getVersions**](TextMagicApi.md#getVersions) | **GET** /api/v2/versions | Get minimal valid apps versions
[**inviteSubaccount**](TextMagicApi.md#inviteSubaccount) | **POST** /api/v2/subaccounts | Invite new subaccount.
[**markChatsReadBulk**](TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark several chats as read by chat ids or mark all chats as read
[**markChatsUnreadBulk**](TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark several chats as UNread by chat ids or mark all chats as UNread
[**mergeSurveyNodes**](TextMagicApi.md#mergeSurveyNodes) | **POST** /api/v2/surveys/nodes/merge | Merge two question nodes.
[**muteChat**](TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Set mute mode.
[**muteChatsBulk**](TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute several chats by chat ids or mute all chats
[**ping**](TextMagicApi.md#ping) | **GET** /api/v2/ping | Just does a pong.
[**reopenChatsBulk**](TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats by chat ids or reopen all chats
[**requestNewSubaccountToken**](TextMagicApi.md#requestNewSubaccountToken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for subaccount.
[**requestSenderId**](TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Request for a new Sender ID.
[**resetSurvey**](TextMagicApi.md#resetSurvey) | **PUT** /api/v2/surveys/{id}/reset | Reset a survey flow.
[**searchChats**](TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by inbound or outbound messages text.
[**searchChatsByIds**](TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats by IDs.
[**searchChatsByReceipent**](TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient (contact, list name or phone number).
[**searchContacts**](TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find user contacts by given parameters.
[**searchInboundMessages**](TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages by given parameters.
[**searchLists**](TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find contact lists by given parameters.
[**searchOutboundMessages**](TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
[**searchScheduledMessages**](TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages by given parameters.
[**searchTemplates**](TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find user templates by given parameters.
[**sendEmailVerificationCode**](TextMagicApi.md#sendEmailVerificationCode) | **GET** /api/v2/user/email/verification | Send user email verification
[**sendMessage**](TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
[**sendPhoneVerificationCode**](TextMagicApi.md#sendPhoneVerificationCode) | **GET** /api/v2/user/phone/verification | Send user phone verification
[**setChatStatus**](TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Set status of the chat given by ID.
[**startSurvey**](TextMagicApi.md#startSurvey) | **PUT** /api/v2/surveys/{id}/start | Start a survey.
[**unblockContact**](TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock contact by phone number.
[**unblockContactsBulk**](TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock several contacts by blocked contact ids or unblock all contacts
[**unmuteChatsBulk**](TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute several chats by chat ids or unmute all chats
[**unsubscribeContact**](TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Unsubscribe contact from your communication by phone number.
[**updateBalanceNotificationSettings**](TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
[**updateCallbackSettings**](TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
[**updateChatDesktopNotificationSettings**](TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
[**updateContact**](TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id} | Update existing contact.
[**updateContactNote**](TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update existing contact note.
[**updateCurrentUser**](TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Update current user info.
[**updateCustomField**](TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Update existing custom field.
[**updateCustomFieldValue**](TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Update contact&#39;s custom field value.
[**updateInboundMessagesNotificationSettings**](TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
[**updateList**](TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Update existing list.
[**updatePassword**](TextMagicApi.md#updatePassword) | **PUT** /api/v2/user/password/change | Change user password.
[**updateSenderSetting**](TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings for specified country.
[**updateSurvey**](TextMagicApi.md#updateSurvey) | **PUT** /api/v2/surveys/{id} | Update existing survey.
[**updateSurveyNode**](TextMagicApi.md#updateSurveyNode) | **PUT** /api/v2/surveys/nodes/{id} | Update existing node.
[**updateTemplate**](TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update existing template.
[**uploadAvatar**](TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Add an avatar for the current user.
[**uploadContactAvatar**](TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Add an avatar for the contact.
[**uploadListAvatar**](TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for the list.
[**uploadMessageAttachment**](TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment


<a name="assignContactsToList"></a>
# **assignContactsToList**
> ResourceLinkResponse assignContactsToList(assignContactsToListInputObject, id)

Assign contacts to the specified list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var assignContactsToListInputObject = new TextmagicClient.AssignContactsToListInputObject(); // AssignContactsToListInputObject | Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user

var id = 1; // Number | 

apiInstance.assignContactsToList(assignContactsToListInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignContactsToListInputObject** | [**AssignContactsToListInputObject**](AssignContactsToListInputObject.md)| Contact ID(s), separated by comma or &#39;all&#39; to add all contacts belonging to the current user | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockContact"></a>
# **blockContact**
> ResourceLinkResponse blockContact(blockContactInputObject)

Block contact from inbound and outbound communication by phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var blockContactInputObject = new TextmagicClient.BlockContactInputObject(); // BlockContactInputObject | 

apiInstance.blockContact(blockContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockContactInputObject** | [**BlockContactInputObject**](BlockContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buyDedicatedNumber"></a>
# **buyDedicatedNumber**
> buyDedicatedNumber(buyDedicatedNumberInputObject)

Buy a dedicated number and assign it to the specified account.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var buyDedicatedNumberInputObject = new TextmagicClient.BuyDedicatedNumberInputObject(); // BuyDedicatedNumberInputObject | 

apiInstance.buyDedicatedNumber(buyDedicatedNumberInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyDedicatedNumberInputObject** | [**BuyDedicatedNumberInputObject**](BuyDedicatedNumberInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelSurvey"></a>
# **cancelSurvey**
> ResourceLinkResponse cancelSurvey(id)

Cancel a survey.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.cancelSurvey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkPhoneVerificationCode"></a>
# **checkPhoneVerificationCode**
> checkPhoneVerificationCode(checkPhoneVerificationCodeInputObject)

Check user phone verification code

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var checkPhoneVerificationCodeInputObject = new TextmagicClient.CheckPhoneVerificationCodeInputObject(); // CheckPhoneVerificationCodeInputObject | 

apiInstance.checkPhoneVerificationCode(checkPhoneVerificationCodeInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPhoneVerificationCodeInputObject** | [**CheckPhoneVerificationCodeInputObject**](CheckPhoneVerificationCodeInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearAndAssignContactsToList"></a>
# **clearAndAssignContactsToList**
> ResourceLinkResponse clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id)

Reset list members to the specified contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var clearAndAssignContactsToListInputObject = new TextmagicClient.ClearAndAssignContactsToListInputObject(); // ClearAndAssignContactsToListInputObject | Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user

var id = 1; // Number | 

apiInstance.clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearAndAssignContactsToListInputObject** | [**ClearAndAssignContactsToListInputObject**](ClearAndAssignContactsToListInputObject.md)| Contact ID(s), separated by comma or &#39;all&#39; to add all contacts belonging to the current user | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="closeChatsBulk"></a>
# **closeChatsBulk**
> closeChatsBulk(closeChatsBulkInputObject)

Close chats by chat ids or close all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var closeChatsBulkInputObject = new TextmagicClient.CloseChatsBulkInputObject(); // CloseChatsBulkInputObject | 

apiInstance.closeChatsBulk(closeChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeChatsBulkInputObject** | [**CloseChatsBulkInputObject**](CloseChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeReadChats"></a>
# **closeReadChats**
> closeReadChats()

Close all chats that have no unread messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.closeReadChats().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeSubaccount"></a>
# **closeSubaccount**
> closeSubaccount(id)

Close subaccount.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.closeSubaccount(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createContact"></a>
# **createContact**
> ResourceLinkResponse createContact(createContactInputObject)

Create a new contact from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createContactInputObject = new TextmagicClient.CreateContactInputObject(); // CreateContactInputObject | 

apiInstance.createContact(createContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactInputObject** | [**CreateContactInputObject**](CreateContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContactNote"></a>
# **createContactNote**
> ResourceLinkResponse createContactNote(createContactNoteInputObject, id)

Create a new contact note.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createContactNoteInputObject = new TextmagicClient.CreateContactNoteInputObject(); // CreateContactNoteInputObject | 

var id = 56; // Number | 

apiInstance.createContactNote(createContactNoteInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactNoteInputObject** | [**CreateContactNoteInputObject**](CreateContactNoteInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomField"></a>
# **createCustomField**
> ResourceLinkResponse createCustomField(createCustomFieldInputObject)

Create a new custom field from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createCustomFieldInputObject = new TextmagicClient.CreateCustomFieldInputObject(); // CreateCustomFieldInputObject | 

apiInstance.createCustomField(createCustomFieldInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldInputObject** | [**CreateCustomFieldInputObject**](CreateCustomFieldInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createList"></a>
# **createList**
> ResourceLinkResponse createList(createListInputObject)

Create a new list from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createListInputObject = new TextmagicClient.CreateListInputObject(); // CreateListInputObject | 

apiInstance.createList(createListInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createListInputObject** | [**CreateListInputObject**](CreateListInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPushToken"></a>
# **createPushToken**
> createPushToken(createPushTokenInputObject)

Add or update a device token.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createPushTokenInputObject = new TextmagicClient.CreatePushTokenInputObject(); // CreatePushTokenInputObject | 

apiInstance.createPushToken(createPushTokenInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPushTokenInputObject** | [**CreatePushTokenInputObject**](CreatePushTokenInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSurvey"></a>
# **createSurvey**
> ResourceLinkResponse createSurvey(createSurveyInputObject)

Create a new survey from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createSurveyInputObject = new TextmagicClient.CreateSurveyInputObject(); // CreateSurveyInputObject | 

apiInstance.createSurvey(createSurveyInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSurveyInputObject** | [**CreateSurveyInputObject**](CreateSurveyInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSurveyNode"></a>
# **createSurveyNode**
> ResourceLinkResponse createSurveyNode(createSurveyNodeInputObject, id)

Create a new node from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createSurveyNodeInputObject = new TextmagicClient.CreateSurveyNodeInputObject(); // CreateSurveyNodeInputObject | 

var id = 1; // Number | 

apiInstance.createSurveyNode(createSurveyNodeInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSurveyNodeInputObject** | [**CreateSurveyNodeInputObject**](CreateSurveyNodeInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> ResourceLinkResponse createTemplate(createTemplateInputObject)

Create a new template from the submitted data.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createTemplateInputObject = new TextmagicClient.CreateTemplateInputObject(); // CreateTemplateInputObject | 

apiInstance.createTemplate(createTemplateInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateInputObject** | [**CreateTemplateInputObject**](CreateTemplateInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllContacts"></a>
# **deleteAllContacts**
> deleteAllContacts()

Delete all contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAllContacts().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAllOutboundMessages"></a>
# **deleteAllOutboundMessages**
> deleteAllOutboundMessages()

Delete all messages

Delete all messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAllOutboundMessages().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAvatar"></a>
# **deleteAvatar**
> deleteAvatar()

Delete an avatar for the current user.\\

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAvatar().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatMessages"></a>
# **deleteChatMessages**
> deleteChatMessages(deleteChatMessagesBulkInputObject, id)

Delete messages from chat by given messages ID(s).

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteChatMessagesBulkInputObject = new TextmagicClient.DeleteChatMessagesBulkInputObject(); // DeleteChatMessagesBulkInputObject | 

var id = 1; // Number | 

apiInstance.deleteChatMessages(deleteChatMessagesBulkInputObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatMessagesBulkInputObject** | [**DeleteChatMessagesBulkInputObject**](DeleteChatMessagesBulkInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatsBulk"></a>
# **deleteChatsBulk**
> deleteChatsBulk(deleteChatsBulkInputObject)

Delete chats by given ID(s) or delete all chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteChatsBulkInputObject = new TextmagicClient.DeleteChatsBulkInputObject(); // DeleteChatsBulkInputObject | 

apiInstance.deleteChatsBulk(deleteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatsBulkInputObject** | [**DeleteChatsBulkInputObject**](DeleteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(id)

Delete a single contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteContact(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactAvatar"></a>
# **deleteContactAvatar**
> deleteContactAvatar(id)

Delete an avatar for the contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 56; // Number | 

apiInstance.deleteContactAvatar(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContactNote"></a>
# **deleteContactNote**
> deleteContactNote(id)

Delete a single contact note.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteContactNote(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactNotesBulk"></a>
# **deleteContactNotesBulk**
> deleteContactNotesBulk(id, deleteContactNotesBulkInputObject)

Delete contact note by given ID(s) or delete all contact notes.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var deleteContactNotesBulkInputObject = new TextmagicClient.DeleteContactNotesBulkInputObject(); // DeleteContactNotesBulkInputObject | 

apiInstance.deleteContactNotesBulk(id, deleteContactNotesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteContactNotesBulkInputObject** | [**DeleteContactNotesBulkInputObject**](DeleteContactNotesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsByIds"></a>
# **deleteContactsByIds**
> deleteContactsByIds(deleteContactsByIdsInputObject)

Delete contact by given ID(s) or delete all contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteContactsByIdsInputObject = new TextmagicClient.DeleteContactsByIdsInputObject(); // DeleteContactsByIdsInputObject | 

apiInstance.deleteContactsByIds(deleteContactsByIdsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContactsByIdsInputObject** | [**DeleteContactsByIdsInputObject**](DeleteContactsByIdsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsFromList"></a>
# **deleteContactsFromList**
> deleteContactsFromList(deleteContacsFromListObject, id)

Unassign contacts from the specified list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteContacsFromListObject = new TextmagicClient.DeleteContacsFromListObject(); // DeleteContacsFromListObject | Contact ID(s), separated by comma

var id = 1; // Number | 

apiInstance.deleteContactsFromList(deleteContacsFromListObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContacsFromListObject** | [**DeleteContacsFromListObject**](DeleteContacsFromListObject.md)| Contact ID(s), separated by comma | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteCustomField"></a>
# **deleteCustomField**
> deleteCustomField(id)

Delete a single custom field.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteCustomField(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteDedicatedNumber"></a>
# **deleteDedicatedNumber**
> deleteDedicatedNumber(id)

Cancel dedicated number subscription.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteDedicatedNumber(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessage"></a>
# **deleteInboundMessage**
> deleteInboundMessage(id)

Delete the incoming message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteInboundMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessagesBulk"></a>
# **deleteInboundMessagesBulk**
> deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject)

Delete inbound messages by given ID(s) or delete all inbound messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteInboundMessagesBulkInputObject = new TextmagicClient.DeleteInboundMessagesBulkInputObject(); // DeleteInboundMessagesBulkInputObject | 

apiInstance.deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInboundMessagesBulkInputObject** | [**DeleteInboundMessagesBulkInputObject**](DeleteInboundMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteList"></a>
# **deleteList**
> deleteList(id)

Delete a single list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteList(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListAvatar"></a>
# **deleteListAvatar**
> deleteListAvatar(id)

Delete an avatar for the list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteListAvatar(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteListContactsBulk"></a>
# **deleteListContactsBulk**
> deleteListContactsBulk(deleteListContactsBulkInputObject, id)

Delete contact from list by given ID(s) or all contacts from list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteListContactsBulkInputObject = new TextmagicClient.DeleteListContactsBulkInputObject(); // DeleteListContactsBulkInputObject | 

var id = 1; // Number | 

apiInstance.deleteListContactsBulk(deleteListContactsBulkInputObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListContactsBulkInputObject** | [**DeleteListContactsBulkInputObject**](DeleteListContactsBulkInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListsBulk"></a>
# **deleteListsBulk**
> deleteListsBulk(deleteListsBulkInputObject)

Delete list by given ID(s) or delete all lists.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteListsBulkInputObject = new TextmagicClient.DeleteListsBulkInputObject(); // DeleteListsBulkInputObject | 

apiInstance.deleteListsBulk(deleteListsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListsBulkInputObject** | [**DeleteListsBulkInputObject**](DeleteListsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSession"></a>
# **deleteMessageSession**
> deleteMessageSession(id)

Delete a message session, together with all nested messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteMessageSession(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSessionsBulk"></a>
# **deleteMessageSessionsBulk**
> deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject)

Delete messages sessions, together with all nested messages, by given ID(s) or delete all messages sessions.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteMessageSessionsBulkInputObject = new TextmagicClient.DeleteMessageSessionsBulkInputObject(); // DeleteMessageSessionsBulkInputObject | 

apiInstance.deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMessageSessionsBulkInputObject** | [**DeleteMessageSessionsBulkInputObject**](DeleteMessageSessionsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessage"></a>
# **deleteOutboundMessage**
> deleteOutboundMessage(id)

Delete message

Delete a single message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteOutboundMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessagesBulk"></a>
# **deleteOutboundMessagesBulk**
> deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject)

Delete messages by IDs

Delete outbound messages by given ID(s) or delete all outbound messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteOutboundMessagesBulkInputObject = new TextmagicClient.DeleteOutboundMessagesBulkInputObject(); // DeleteOutboundMessagesBulkInputObject | 

apiInstance.deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOutboundMessagesBulkInputObject** | [**DeleteOutboundMessagesBulkInputObject**](DeleteOutboundMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deletePushToken"></a>
# **deletePushToken**
> deletePushToken(type, deviceId)

Delete a push notification device token.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var type = "type_example"; // String | 

var deviceId = 56; // Number | 

apiInstance.deletePushToken(type, deviceId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 
 **deviceId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessage"></a>
# **deleteScheduledMessage**
> deleteScheduledMessage(id)

Delete a message session, together with all nested messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteScheduledMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessagesBulk"></a>
# **deleteScheduledMessagesBulk**
> deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject)

Delete scheduled messages by given ID(s) or delete all scheduled messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteScheduledMessagesBulkInputObject = new TextmagicClient.DeleteScheduledMessagesBulkInputObject(); // DeleteScheduledMessagesBulkInputObject | 

apiInstance.deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledMessagesBulkInputObject** | [**DeleteScheduledMessagesBulkInputObject**](DeleteScheduledMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSenderId"></a>
# **deleteSenderId**
> deleteSenderId(id)

Delete a Sender ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteSenderId(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSurvey"></a>
# **deleteSurvey**
> deleteSurvey(id)

Delete a survey.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteSurvey(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSurveyNode"></a>
# **deleteSurveyNode**
> deleteSurveyNode(id)

Delete a node.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteSurveyNode(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplate"></a>
# **deleteTemplate**
> deleteTemplate(id)

Delete a single template.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteTemplate(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplatesBulk"></a>
# **deleteTemplatesBulk**
> deleteTemplatesBulk(deleteTemplatesBulkInputObject)

Delete template by given ID(s) or delete all templates.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteTemplatesBulkInputObject = new TextmagicClient.DeleteTemplatesBulkInputObject(); // DeleteTemplatesBulkInputObject | 

apiInstance.deleteTemplatesBulk(deleteTemplatesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTemplatesBulkInputObject** | [**DeleteTemplatesBulkInputObject**](DeleteTemplatesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="doAuth"></a>
# **doAuth**
> DoAuthResponse doAuth(doAuthInputObject)

Authenticate user by given username and password.

Returning a username and token that you should pass to the all requests (in X-TM-Username and X-TM-Key, respectively)

### Example
```javascript
var TextmagicClient = require('textmagic-client');

var apiInstance = new TextmagicClient.TextMagicApi();

var doAuthInputObject = new TextmagicClient.DoAuthInputObject(); // DoAuthInputObject | 

apiInstance.doAuth(doAuthInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doAuthInputObject** | [**DoAuthInputObject**](DoAuthInputObject.md)|  | 

### Return type

[**DoAuthResponse**](DoAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doCarrierLookup"></a>
# **doCarrierLookup**
> DoCarrierLookupResponse doCarrierLookup(phone, opts)

Carrier Lookup

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "\"1-541-754-3010\""; // String | 

var opts = { 
  'country': "US" // String | Country code for local formatted numbers
};
apiInstance.doCarrierLookup(phone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **country** | **String**| Country code for local formatted numbers | [optional] [default to US]

### Return type

[**DoCarrierLookupResponse**](DoCarrierLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doEmailLookup"></a>
# **doEmailLookup**
> DoEmailLookupResponse doEmailLookup(email)

Validate Email address using Email Lookup tool

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var email = "\"andrey.v@textmagic.biz\""; // String | 

apiInstance.doEmailLookup(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**DoEmailLookupResponse**](DoEmailLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicateSurvey"></a>
# **duplicateSurvey**
> ResourceLinkResponse duplicateSurvey(id)

Duplicate a survey.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.duplicateSurvey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBulkSessions"></a>
# **getAllBulkSessions**
> GetAllBulkSessionsResponse getAllBulkSessions(opts)

Get all bulk sending sessions.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getAllBulkSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetAllBulkSessionsResponse**](GetAllBulkSessionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllChats"></a>
# **getAllChats**
> GetAllChatsResponse getAllChats(opts)

Get all user chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'status': "status_example", // String | Fetch only (a)ctive, (c)losed or (d)eleted chats
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'orderBy': "id", // String | Order results by some field. Default is id
  'voice': 0, // Number | Fetch results with voice calls
  'flat': 0 // Number | Should additional contact info be included
};
apiInstance.getAllChats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Fetch only (a)ctive, (c)losed or (d)eleted chats | [optional] 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **voice** | **Number**| Fetch results with voice calls | [optional] [default to 0]
 **flat** | **Number**| Should additional contact info be included | [optional] [default to 0]

### Return type

[**GetAllChatsResponse**](GetAllChatsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllInboundMessages"></a>
# **getAllInboundMessages**
> GetAllInboundMessagesResponse getAllInboundMessages(opts)

Get all inbox messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getAllInboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetAllInboundMessagesResponse**](GetAllInboundMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllMessageSessions"></a>
# **getAllMessageSessions**
> GetAllMessageSessionsResponse getAllMessageSessions(opts)

Get all message sending sessions.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getAllMessageSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetAllMessageSessionsResponse**](GetAllMessageSessionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOutboundMessages"></a>
# **getAllOutboundMessages**
> GetAllOutboundMessagesResponse getAllOutboundMessages(opts)

Get all messages

Get all user oubound messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'lastId': 56 // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that \\'page\\' parameter is ignored when \\'lastId\\' is specified
};
apiInstance.getAllOutboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified | [optional] 

### Return type

[**GetAllOutboundMessagesResponse**](GetAllOutboundMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllScheduledMessages"></a>
# **getAllScheduledMessages**
> GetAllScheduledMessagesResponse getAllScheduledMessages(opts)

Get all scheduled messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'status': "x", // String | Fetch schedules with the specific status: a - actual, c - completed, x - all
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getAllScheduledMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **status** | **String**| Fetch schedules with the specific status: a - actual, c - completed, x - all | [optional] [default to x]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetAllScheduledMessagesResponse**](GetAllScheduledMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTemplates"></a>
# **getAllTemplates**
> GetAllTemplatesResponse getAllTemplates(opts)

Get all user templates.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getAllTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] 
 **limit** | **Number**| How many results to return | [optional] 

### Return type

[**GetAllTemplatesResponse**](GetAllTemplatesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableDedicatedNumbers"></a>
# **getAvailableDedicatedNumbers**
> GetAvailableDedicatedNumbersResponse getAvailableDedicatedNumbers(country, opts)

Find available dedicated numbers to buy.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var country = "\"GB\""; // String | Dedicated number country. Two letters in upper case

var opts = { 
  'prefix': 1, // Number | Desired number prefix. Should include country code (i.e. 447 for GB). In case provide tollfree = 1 parameter and there are available tollfree numbers, this parameter will be ignore.
  'tollfree': 0 // Number | Should we show only tollfree numbers (tollfree available only for US). Default is false.
};
apiInstance.getAvailableDedicatedNumbers(country, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Dedicated number country. Two letters in upper case | 
 **prefix** | **Number**| Desired number prefix. Should include country code (i.e. 447 for GB). In case provide tollfree &#x3D; 1 parameter and there are available tollfree numbers, this parameter will be ignore. | [optional] [default to 1]
 **tollfree** | **Number**| Should we show only tollfree numbers (tollfree available only for US). Default is false. | [optional] [default to 0]

### Return type

[**GetAvailableDedicatedNumbersResponse**](GetAvailableDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableSenderSettingOptions"></a>
# **getAvailableSenderSettingOptions**
> GetAvailableSenderSettingOptionsResponse getAvailableSenderSettingOptions(opts)

Get all available sender setting options which could be used in \&quot;from\&quot; parameter of POST messages method.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'country': "country_example" // String | Return sender setting options available in specific country only. Two upper case characters
};
apiInstance.getAvailableSenderSettingOptions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Return sender setting options available in specific country only. Two upper case characters | [optional] 

### Return type

[**GetAvailableSenderSettingOptionsResponse**](GetAvailableSenderSettingOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationOptions"></a>
# **getBalanceNotificationOptions**
> GetBalanceNotificationOptionsResponse getBalanceNotificationOptions()

Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getBalanceNotificationOptions().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationOptionsResponse**](GetBalanceNotificationOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationSettings"></a>
# **getBalanceNotificationSettings**
> GetBalanceNotificationSettingsResponse getBalanceNotificationSettings()

Get balance notification settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getBalanceNotificationSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationSettingsResponse**](GetBalanceNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockedContacts"></a>
# **getBlockedContacts**
> GetBlockedContactsResponse getBlockedContacts(opts)

Get blocked contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "query_example", // String | Find blocked contacts by specified search query
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getBlockedContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find blocked contacts by specified search query | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetBlockedContactsResponse**](GetBlockedContactsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkSession"></a>
# **getBulkSession**
> BulkSession getBulkSession(id)

Get bulk message session status.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getBulkSession(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**BulkSession**](BulkSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallbackSettings"></a>
# **getCallbackSettings**
> GetCallbackSettingsResponse getCallbackSettings()

Fetch callback URL settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCallbackSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetCallbackSettingsResponse**](GetCallbackSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallsPrices"></a>
# **getCallsPrices**
> {&#39;String&#39;: Object} getCallsPrices()

Check pricing for a inbound/outbound call.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCallsPrices().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: Object}**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChat"></a>
# **getChat**
> Chat getChat(id)

Get a single chat.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getChat(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatByPhone"></a>
# **getChatByPhone**
> Chat getChatByPhone(phone, opts)

Find chats by phone.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "phone_example"; // String | 

var opts = { 
  'upsert': 0, // Number | Create a new chat if not found
  'reopen': 0 // Number | Reopen chat if found or do not change status
};
apiInstance.getChatByPhone(phone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **upsert** | **Number**| Create a new chat if not found | [optional] [default to 0]
 **reopen** | **Number**| Reopen chat if found or do not change status | [optional] [default to 0]

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatMessages"></a>
# **getChatMessages**
> GetChatMessagesResponse getChatMessages(id, opts)

Fetch messages from chat with specified chat id.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "query_example", // String | Find messages by specified search query
  'start': 56, // Number | Return messages since specified timestamp only
  'end': 56, // Number | Return messages up to specified timestamp only
  'direction': "desc", // String | Order direction. Default is desc
  'voice': 0 // Number | Fetch results with voice calls
};
apiInstance.getChatMessages(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query | [optional] 
 **start** | **Number**| Return messages since specified timestamp only | [optional] 
 **end** | **Number**| Return messages up to specified timestamp only | [optional] 
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]
 **voice** | **Number**| Fetch results with voice calls | [optional] [default to 0]

### Return type

[**GetChatMessagesResponse**](GetChatMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContact"></a>
# **getContact**
> Contact getContact(id)

Get a single contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | The contact id

apiInstance.getContact(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The contact id | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactByPhone"></a>
# **getContactByPhone**
> Contact getContactByPhone(phone)

Get a single contact by phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "phone_example"; // String | 

apiInstance.getContactByPhone(phone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactIfBlocked"></a>
# **getContactIfBlocked**
> Contact getContactIfBlocked(phone)

Check is that phone number blocked

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "9997339956475"; // String | Phone number to check

apiInstance.getContactIfBlocked(phone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number to check | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactImportSessionProgress"></a>
# **getContactImportSessionProgress**
> GetContactImportSessionProgressResponse getContactImportSessionProgress(id)

Get contact import session progress.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 56; // Number | 

apiInstance.getContactImportSessionProgress(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetContactImportSessionProgressResponse**](GetContactImportSessionProgressResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNote"></a>
# **getContactNote**
> ContactNote getContactNote(id)

Get a single contact note.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 56; // Number | 

apiInstance.getContactNote(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ContactNote**](ContactNote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNotes"></a>
# **getContactNotes**
> GetContactNotesResponse getContactNotes(id, opts)

Fetch notes assigned to the given contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getContactNotes(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetContactNotesResponse**](GetContactNotesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> GetContactsResponse getContacts(opts)

Get all user contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'shared': 0, // Number | Should shared contacts to be included
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts to be included | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetContactsResponse**](GetContactsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsAutocomplete"></a>
# **getContactsAutocomplete**
> [GetContactsAutocompleteResponse] getContactsAutocomplete(query, opts)

Get contacts autocomplete suggestions by given search term.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var query = "\"A\""; // String | Find recipients by specified search query

var opts = { 
  'limit': 10, // Number | How many results to return
  'lists': 0 // Number | Should lists be returned or not
};
apiInstance.getContactsAutocomplete(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Find recipients by specified search query | 
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **lists** | **Number**| Should lists be returned or not | [optional] [default to 0]

### Return type

[**[GetContactsAutocompleteResponse]**](GetContactsAutocompleteResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsByListId"></a>
# **getContactsByListId**
> GetContactsByListIdResponse getContactsByListId(id, opts)

Fetch user contacts by given group id.

A useful synonym for \&quot;contacts/search\&quot; command with provided \&quot;listId\&quot; parameter.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | Given group Id.

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getContactsByListId(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Given group Id. | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetContactsByListIdResponse**](GetContactsByListIdResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCountries"></a>
# **getCountries**
> [Country] getCountries()

Return list of countries.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCountries().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Country]**](Country.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentUser"></a>
# **getCurrentUser**
> User getCurrentUser()

Get current user info.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCurrentUser().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomField"></a>
# **getCustomField**
> UserCustomField getCustomField(id)

Get a single custom field.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getCustomField(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UserCustomField**](UserCustomField.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomFields"></a>
# **getCustomFields**
> GetCustomFieldsResponse getCustomFields(opts)

Get all contact custom fields.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getCustomFields(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetCustomFieldsResponse**](GetCustomFieldsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDedicatedNumber"></a>
# **getDedicatedNumber**
> UsersInbound getDedicatedNumber(id)

Get a single dedicated number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getDedicatedNumber(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UsersInbound**](UsersInbound.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDisallowedRules"></a>
# **getDisallowedRules**
> [&#39;String&#39;] getDisallowedRules()

Get an array of all rules that are disallowed to the current account.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getDisallowedRules().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavourites"></a>
# **getFavourites**
> GetFavouritesResponse getFavourites(opts)

Get favorite contacts and lists.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "A" // String | Find contacts or lists by specified search query
};
apiInstance.getFavourites(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find contacts or lists by specified search query | [optional] [default to A]

### Return type

[**GetFavouritesResponse**](GetFavouritesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getForwardedCalls"></a>
# **getForwardedCalls**
> GetForwardedCallsResponse getForwardedCalls(opts)

Get all forwarded calls.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getForwardedCalls(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetForwardedCallsResponse**](GetForwardedCallsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessage"></a>
# **getInboundMessage**
> MessageIn getInboundMessage(id)

Get a single inbox message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getInboundMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageIn**](MessageIn.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessagesNotificationSettings"></a>
# **getInboundMessagesNotificationSettings**
> GetInboundMessagesNotificationSettingsResponse getInboundMessagesNotificationSettings()

Get inbound messages notification settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getInboundMessagesNotificationSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetInboundMessagesNotificationSettingsResponse**](GetInboundMessagesNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoices"></a>
# **getInvoices**
> GetInvoicesResponse getInvoices(opts)

Return account invoices.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getInvoices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetInvoicesResponse**](GetInvoicesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getList"></a>
# **getList**
> Group getList(id)

Get a single list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getList(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Group**](Group.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListContactsIds"></a>
# **getListContactsIds**
> GetListContactsIdsResponse getListContactsIds(id)

Fetch all contacts IDs belonging to the list with ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getListContactsIds(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetListContactsIdsResponse**](GetListContactsIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListsOfContact"></a>
# **getListsOfContact**
> GetListsOfContactResponse getListsOfContact(id, opts)

Return lists which contact belongs to.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getListsOfContact(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetListsOfContactResponse**](GetListsOfContactResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePreview"></a>
# **getMessagePreview**
> GetMessagePreviewResponse getMessagePreview(opts)

Preview message

Get messages preview (with tags merged) up to 100 messages per session.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'text': "\"Test message test\"", // String | Message text. Required if template_id is not set
  'templateId': 1, // Number | Template used instead of message text. Required if text is not set
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now
  'sendingDateTime': "\"2020-05-27 13:02:33\"", // String | Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to sendingTimezone
  'sendingTimezone': "\"America/Buenos_Aires\"", // String | ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone
  'contacts': "\"1,2,3,4\"", // String | Comma separated array of contact resources id message will be sent to
  'lists': "\"1,2,3,4\"", // String | Comma separated array of list resources id message will be sent to
  'phones': "\"+19993322111,+19993322110\"", // String | Comma separated array of E.164 phone numbers message will be sent to
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. Default is 0
  'partsCount': 6, // Number | Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure
  'from': "\"Testid1\"", // String | One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery
  'rule': "\"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1\"", // String | iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details
  'createChat': 0, // Number | Should sending method try to create new Chat(if not exist) with specified recipients. Default is 0
  'tts': 0, // Number | Send Text to Speech message. Default is 0
  'local': 0, // Number | Treat phone numbers passed in \\'phones\\' field as local. Default is 0
  'localCountry': "\"US\"" // String | 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is account country
};
apiInstance.getMessagePreview(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Message text. Required if template_id is not set | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if text is not set | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now | [optional] 
 **sendingDateTime** | **String**| Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to sendingTimezone | [optional] 
 **sendingTimezone** | **String**| ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone | [optional] 
 **contacts** | **String**| Comma separated array of contact resources id message will be sent to | [optional] 
 **lists** | **String**| Comma separated array of list resources id message will be sent to | [optional] 
 **phones** | **String**| Comma separated array of E.164 phone numbers message will be sent to | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. Default is 0 | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6 | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure | [optional] 
 **from** | **String**| One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery | [optional] 
 **rule** | **String**| iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details | [optional] 
 **createChat** | **Number**| Should sending method try to create new Chat(if not exist) with specified recipients. Default is 0 | [optional] [default to 0]
 **tts** | **Number**| Send Text to Speech message. Default is 0 | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in \\&#39;phones\\&#39; field as local. Default is 0 | [optional] [default to 0]
 **localCountry** | **String**| 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is account country | [optional] 

### Return type

[**GetMessagePreviewResponse**](GetMessagePreviewResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePrice"></a>
# **getMessagePrice**
> GetMessagePriceResponse getMessagePrice(opts)

Check price

Check pricing for a new outbound message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'includeBlocked': 0, // Number | Should we show pricing for the blocked contacts.
  'text': "\"Test message test\"", // String | Message text. Required if template_id is not set
  'templateId': 1, // Number | Template used instead of message text. Required if text is not set
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now
  'sendingDateTime': "\"2020-05-27 13:02:33\"", // String | Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to sendingTimezone
  'sendingTimezone': "\"America/Buenos_Aires\"", // String | ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone
  'contacts': "\"1,2,3,4\"", // String | Comma separated array of contact resources id message will be sent to
  'lists': "\"1,2,3,4\"", // String | Comma separated array of list resources id message will be sent to
  'phones': "\"+19993322111,+19993322110\"", // String | Comma separated array of E.164 phone numbers message will be sent to
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. Default is 0
  'partsCount': 6, // Number | Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure
  'from': "\"Testid1\"", // String | One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery
  'rule': "\"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1\"", // String | iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details
  'createChat': 0, // Number | Should sending method try to create new Chat(if not exist) with specified recipients. Default is 0
  'tts': 0, // Number | Send Text to Speech message. Default is 0
  'local': 0, // Number | Treat phone numbers passed in \\'phones\\' field as local. Default is 0
  'localCountry': "\"US\"" // String | 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is account country
};
apiInstance.getMessagePrice(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeBlocked** | **Number**| Should we show pricing for the blocked contacts. | [optional] [default to 0]
 **text** | **String**| Message text. Required if template_id is not set | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if text is not set | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now | [optional] 
 **sendingDateTime** | **String**| Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to sendingTimezone | [optional] 
 **sendingTimezone** | **String**| ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone | [optional] 
 **contacts** | **String**| Comma separated array of contact resources id message will be sent to | [optional] 
 **lists** | **String**| Comma separated array of list resources id message will be sent to | [optional] 
 **phones** | **String**| Comma separated array of E.164 phone numbers message will be sent to | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. Default is 0 | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6 | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure | [optional] 
 **from** | **String**| One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery | [optional] 
 **rule** | **String**| iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details | [optional] 
 **createChat** | **Number**| Should sending method try to create new Chat(if not exist) with specified recipients. Default is 0 | [optional] [default to 0]
 **tts** | **Number**| Send Text to Speech message. Default is 0 | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in \\&#39;phones\\&#39; field as local. Default is 0 | [optional] [default to 0]
 **localCountry** | **String**| 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is account country | [optional] 

### Return type

[**GetMessagePriceResponse**](GetMessagePriceResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePrices"></a>
# **getMessagePrices**
> GetMessagePricesResponse getMessagePrices()

Get pricing

Get message prices for all countries.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getMessagePrices().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetMessagePricesResponse**](GetMessagePricesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSession"></a>
# **getMessageSession**
> MessageSession getMessageSession(id)

Get a message session.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getMessageSession(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageSession**](MessageSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSessionStat"></a>
# **getMessageSessionStat**
> GetMessageSessionStatResponse getMessageSessionStat(id, opts)

Get sending session statistics.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'includeDeleted': 0 // Number | Search also in deleted messages
};
apiInstance.getMessageSessionStat(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **includeDeleted** | **Number**| Search also in deleted messages | [optional] [default to 0]

### Return type

[**GetMessageSessionStatResponse**](GetMessageSessionStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagesBySessionId"></a>
# **getMessagesBySessionId**
> GetMessagesBySessionIdResponse getMessagesBySessionId(id, opts)

Fetch messages by given session id.

A useful synonym for \&quot;messages/search\&quot; command with provided \&quot;sessionId\&quot; parameter.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'statuses': "statuses_example", // String | Find messages by status
  'includeDeleted': 0 // Number | Search also in deleted messages
};
apiInstance.getMessagesBySessionId(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **statuses** | **String**| Find messages by status | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages | [optional] [default to 0]

### Return type

[**GetMessagesBySessionIdResponse**](GetMessagesBySessionIdResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingCounters"></a>
# **getMessagingCounters**
> GetMessagingCountersResponse getMessagingCounters()

Return counters for messaging data views.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getMessagingCounters().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetMessagingCountersResponse**](GetMessagingCountersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingStat"></a>
# **getMessagingStat**
> GetMessagingStatResponse getMessagingStat(opts)

Return messaging statistics.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'by': "off", // String | Group results by specified period: off, day, month or year. Default is off
  'start': 56, // Number | Start date in unix timestamp format. Default is 7 days ago
  'end': "end_example" // String | End date in unix timestamp format. Default is now
};
apiInstance.getMessagingStat(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | **String**| Group results by specified period: off, day, month or year. Default is off | [optional] [default to off]
 **start** | **Number**| Start date in unix timestamp format. Default is 7 days ago | [optional] 
 **end** | **String**| End date in unix timestamp format. Default is now | [optional] 

### Return type

[**GetMessagingStatResponse**](GetMessagingStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessage"></a>
# **getOutboundMessage**
> MessageOut getOutboundMessage(id)

Get a single message

Get a single outgoing message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getOutboundMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessagesHistory"></a>
# **getOutboundMessagesHistory**
> GetOutboundMessagesHistoryResponse getOutboundMessagesHistory(opts)

Get history

Get outbound messages history.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'limit': 10, // Number | How many results to return
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID.
  'query': "query_example", // String | Find message by specified search query
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.getOutboundMessagesHistory(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. | [optional] 
 **query** | **String**| Find message by specified search query | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**GetOutboundMessagesHistoryResponse**](GetOutboundMessagesHistoryResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPushTokens"></a>
# **getPushTokens**
> GetPushTokensResponse getPushTokens()

Get all device tokens assigned to the current account

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getPushTokens().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetPushTokensResponse**](GetPushTokensResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledMessage"></a>
# **getScheduledMessage**
> MessagesIcs getScheduledMessage(id)

Get message schedule.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getScheduledMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessagesIcs**](MessagesIcs.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderId"></a>
# **getSenderId**
> SenderId getSenderId(id)

Get a single Sender ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSenderId(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SenderId**](SenderId.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderIds"></a>
# **getSenderIds**
> GetSenderIdsResponse getSenderIds(opts)

Get all sender IDs of current user.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getSenderIds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetSenderIdsResponse**](GetSenderIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderSettings"></a>
# **getSenderSettings**
> GetSenderSettingsResponse getSenderSettings(opts)

Get current user sender settings.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'country': "country_example" // String | Return sender settings enabled for sending to specified country. Two upper case characters
};
apiInstance.getSenderSettings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Return sender settings enabled for sending to specified country. Two upper case characters | [optional] 

### Return type

[**GetSenderSettingsResponse**](GetSenderSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpendingStat"></a>
# **getSpendingStat**
> GetSpendingStatResponse getSpendingStat(opts)

Return account spending statistics.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'start': 56, // Number | Optional. Start date in unix timestamp format. Default is 7 days ago
  'end': 56 // Number | Optional. End date in unix timestamp format. Default is now
};
apiInstance.getSpendingStat(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **start** | **Number**| Optional. Start date in unix timestamp format. Default is 7 days ago | [optional] 
 **end** | **Number**| Optional. End date in unix timestamp format. Default is now | [optional] 

### Return type

[**GetSpendingStatResponse**](GetSpendingStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getState"></a>
# **getState**
> GetStateResponse getState()

Get current entities state

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getState().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetStateResponse**](GetStateResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccount"></a>
# **getSubaccount**
> User getSubaccount(id)

Get a single subaccount.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSubaccount(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccounts"></a>
# **getSubaccounts**
> User getSubaccounts(opts)

Get all subaccounts of current user.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getSubaccounts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccountsWithTokens"></a>
# **getSubaccountsWithTokens**
> GetSubaccountsWithTokensResponse getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, opts)

Get all subaccounts with their REST API tokens associated with specified app name.

When more than one token related to app name, last key will be returned.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var getSubaccountsWithTokensInputObject = new TextmagicClient.GetSubaccountsWithTokensInputObject(); // GetSubaccountsWithTokensInputObject | 

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubaccountsWithTokensInputObject** | [**GetSubaccountsWithTokensInputObject**](GetSubaccountsWithTokensInputObject.md)|  | 
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetSubaccountsWithTokensResponse**](GetSubaccountsWithTokensResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSurvey"></a>
# **getSurvey**
> Survey getSurvey(id)

Get a survey by id.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSurvey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Survey**](Survey.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSurveyNode"></a>
# **getSurveyNode**
> SurveyNode getSurveyNode(id)

Get a node by id.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSurveyNode(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SurveyNode**](SurveyNode.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSurveyNodes"></a>
# **getSurveyNodes**
> GetSurveyNodesResponse getSurveyNodes(id)

Fetch nodes by given survey id.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSurveyNodes(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetSurveyNodesResponse**](GetSurveyNodesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSurveys"></a>
# **getSurveys**
> GetSurveysResponse getSurveys(opts)

Get all user surveys.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getSurveys(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetSurveysResponse**](GetSurveysResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> MessageTemplate getTemplate(id)

Get a single template.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getTemplate(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimezones"></a>
# **getTimezones**
> Object getTimezones(opts)

Return all available timezone IDs.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'full': 0 // Number | Return full info about timezones in array (0 or 1). Default is 0
};
apiInstance.getTimezones(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | **Number**| Return full info about timezones in array (0 or 1). Default is 0 | [optional] [default to 0]

### Return type

**Object**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnreadMessagesTotal"></a>
# **getUnreadMessagesTotal**
> GetUnreadMessagesTotalResponse getUnreadMessagesTotal()

Get total amount of unread messages in the current user chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getUnreadMessagesTotal().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUnreadMessagesTotalResponse**](GetUnreadMessagesTotalResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribedContact"></a>
# **getUnsubscribedContact**
> UnsubscribedContact getUnsubscribedContact(id)

Get a single unsubscribed contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getUnsubscribedContact(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UnsubscribedContact**](UnsubscribedContact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribers"></a>
# **getUnsubscribers**
> GetUnsubscribersResponse getUnsubscribers(opts)

Get all contact have unsubscribed from your communication.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10 // Number | How many results to return
};
apiInstance.getUnsubscribers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]

### Return type

[**GetUnsubscribersResponse**](GetUnsubscribersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserDedicatedNumbers"></a>
# **getUserDedicatedNumbers**
> GetUserDedicatedNumbersResponse getUserDedicatedNumbers(opts)

Get user&#39;s dedicated numbers.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'surveyId': 56 // Number | Fetch only that numbers which are ready for the survey
};
apiInstance.getUserDedicatedNumbers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **surveyId** | **Number**| Fetch only that numbers which are ready for the survey | [optional] 

### Return type

[**GetUserDedicatedNumbersResponse**](GetUserDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserLists"></a>
# **getUserLists**
> GetUserListsResponse getUserLists(opts)

Get all user lists.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc", // String | Order direction. Default is desc
  'favoriteOnly': 0, // Number | Return only favorite lists
  'onlyMine': 0 // Number | Return only current user lists
};
apiInstance.getUserLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]
 **favoriteOnly** | **Number**| Return only favorite lists | [optional] [default to 0]
 **onlyMine** | **Number**| Return only current user lists | [optional] [default to 0]

### Return type

[**GetUserListsResponse**](GetUserListsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVersions"></a>
# **getVersions**
> GetVersionsResponse getVersions()

Get minimal valid apps versions

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getVersions().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetVersionsResponse**](GetVersionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="inviteSubaccount"></a>
# **inviteSubaccount**
> inviteSubaccount(inviteSubaccountInputObject)

Invite new subaccount.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var inviteSubaccountInputObject = new TextmagicClient.InviteSubaccountInputObject(); // InviteSubaccountInputObject | 

apiInstance.inviteSubaccount(inviteSubaccountInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteSubaccountInputObject** | [**InviteSubaccountInputObject**](InviteSubaccountInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsReadBulk"></a>
# **markChatsReadBulk**
> markChatsReadBulk(markChatsReadBulkInputObject)

Mark several chats as read by chat ids or mark all chats as read

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var markChatsReadBulkInputObject = new TextmagicClient.MarkChatsReadBulkInputObject(); // MarkChatsReadBulkInputObject | 

apiInstance.markChatsReadBulk(markChatsReadBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsReadBulkInputObject** | [**MarkChatsReadBulkInputObject**](MarkChatsReadBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsUnreadBulk"></a>
# **markChatsUnreadBulk**
> markChatsUnreadBulk(markChatsUnreadBulkInputObject)

Mark several chats as UNread by chat ids or mark all chats as UNread

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var markChatsUnreadBulkInputObject = new TextmagicClient.MarkChatsUnreadBulkInputObject(); // MarkChatsUnreadBulkInputObject | 

apiInstance.markChatsUnreadBulk(markChatsUnreadBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsUnreadBulkInputObject** | [**MarkChatsUnreadBulkInputObject**](MarkChatsUnreadBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="mergeSurveyNodes"></a>
# **mergeSurveyNodes**
> mergeSurveyNodes(mergeSurveyNodesInputObject)

Merge two question nodes.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var mergeSurveyNodesInputObject = new TextmagicClient.MergeSurveyNodesInputObject(); // MergeSurveyNodesInputObject | 

apiInstance.mergeSurveyNodes(mergeSurveyNodesInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeSurveyNodesInputObject** | [**MergeSurveyNodesInputObject**](MergeSurveyNodesInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="muteChat"></a>
# **muteChat**
> ResourceLinkResponse muteChat(muteChatInputObject)

Set mute mode.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var muteChatInputObject = new TextmagicClient.MuteChatInputObject(); // MuteChatInputObject | 

apiInstance.muteChat(muteChatInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatInputObject** | [**MuteChatInputObject**](MuteChatInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="muteChatsBulk"></a>
# **muteChatsBulk**
> muteChatsBulk(muteChatsBulkInputObject)

Mute several chats by chat ids or mute all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var muteChatsBulkInputObject = new TextmagicClient.MuteChatsBulkInputObject(); // MuteChatsBulkInputObject | 

apiInstance.muteChatsBulk(muteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatsBulkInputObject** | [**MuteChatsBulkInputObject**](MuteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="ping"></a>
# **ping**
> PingResponse ping()

Just does a pong.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.ping().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PingResponse**](PingResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reopenChatsBulk"></a>
# **reopenChatsBulk**
> reopenChatsBulk(reopenChatsBulkInputObject)

Reopen chats by chat ids or reopen all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var reopenChatsBulkInputObject = new TextmagicClient.ReopenChatsBulkInputObject(); // ReopenChatsBulkInputObject | 

apiInstance.reopenChatsBulk(reopenChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reopenChatsBulkInputObject** | [**ReopenChatsBulkInputObject**](ReopenChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="requestNewSubaccountToken"></a>
# **requestNewSubaccountToken**
> User requestNewSubaccountToken(requestNewSubaccountTokenInputObject)

Request a new REST API token for subaccount.

Returning user object, key and app name.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var requestNewSubaccountTokenInputObject = new TextmagicClient.RequestNewSubaccountTokenInputObject(); // RequestNewSubaccountTokenInputObject | 

apiInstance.requestNewSubaccountToken(requestNewSubaccountTokenInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNewSubaccountTokenInputObject** | [**RequestNewSubaccountTokenInputObject**](RequestNewSubaccountTokenInputObject.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestSenderId"></a>
# **requestSenderId**
> ResourceLinkResponse requestSenderId(requestSenderIdInputObject)

Request for a new Sender ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var requestSenderIdInputObject = new TextmagicClient.RequestSenderIdInputObject(); // RequestSenderIdInputObject | 

apiInstance.requestSenderId(requestSenderIdInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestSenderIdInputObject** | [**RequestSenderIdInputObject**](RequestSenderIdInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetSurvey"></a>
# **resetSurvey**
> ResourceLinkResponse resetSurvey(id)

Reset a survey flow.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.resetSurvey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChats"></a>
# **searchChats**
> SearchChatsResponse searchChats(opts)

Find chats by inbound or outbound messages text.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "query_example" // String | Find chats by specified search query
};
apiInstance.searchChats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query | [optional] 

### Return type

[**SearchChatsResponse**](SearchChatsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByIds"></a>
# **searchChatsByIds**
> SearchChatsByIdsResponse searchChatsByIds(opts)

Find chats by IDs.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'ids': "ids_example" // String | Find chats by ID(s)
};
apiInstance.searchChatsByIds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **ids** | **String**| Find chats by ID(s) | [optional] 

### Return type

[**SearchChatsByIdsResponse**](SearchChatsByIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByReceipent"></a>
# **searchChatsByReceipent**
> SearchChatsByReceipentResponse searchChatsByReceipent(opts)

Find chats by recipient (contact, list name or phone number).

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "query_example", // String | Find chats by specified search query
  'orderBy': "id" // String | Order results by some field. Default is id
};
apiInstance.searchChatsByReceipent(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]

### Return type

[**SearchChatsByReceipentResponse**](SearchChatsByReceipentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContacts"></a>
# **searchContacts**
> SearchContactsResponse searchContacts(opts)

Find user contacts by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'shared': 0, // Number | Should shared contacts to be included
  'ids': "ids_example", // String | Find contact by ID(s)
  'listId': 56, // Number | Find contact by List ID
  'includeBlocked': 56, // Number | Should blocked contacts to be included
  'query': "query_example", // String | Find contacts by specified search query
  'local': 0, // Number | Treat phone number passed in 'query' field as local. Default is 0
  'country': "country_example", // String | 2-letter ISO country code for local phone numbers, used when 'local' is set to true. Default is account country
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.searchContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts to be included | [optional] [default to 0]
 **ids** | **String**| Find contact by ID(s) | [optional] 
 **listId** | **Number**| Find contact by List ID | [optional] 
 **includeBlocked** | **Number**| Should blocked contacts to be included | [optional] 
 **query** | **String**| Find contacts by specified search query | [optional] 
 **local** | **Number**| Treat phone number passed in &#39;query&#39; field as local. Default is 0 | [optional] [default to 0]
 **country** | **String**| 2-letter ISO country code for local phone numbers, used when &#39;local&#39; is set to true. Default is account country | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**SearchContactsResponse**](SearchContactsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchInboundMessages"></a>
# **searchInboundMessages**
> SearchInboundMessagesResponse searchInboundMessages(opts)

Find inbound messages by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'ids': "ids_example", // String | Find message by ID(s)
  'query': "query_example", // String | Find recipients by specified search query
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc", // String | Order direction. Default is desc
  'expand': 0 // Number | Expand by adding firstName, lastName and contactId
};
apiInstance.searchInboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **ids** | **String**| Find message by ID(s) | [optional] 
 **query** | **String**| Find recipients by specified search query | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]
 **expand** | **Number**| Expand by adding firstName, lastName and contactId | [optional] [default to 0]

### Return type

[**SearchInboundMessagesResponse**](SearchInboundMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLists"></a>
# **searchLists**
> SearchListsResponse searchLists(opts)

Find contact lists by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'ids': "\"1,2,3,4\"", // String | Find lists by ID(s)
  'query': "\"A\"", // String | Find lists by specified search query
  'onlyMine': 0, // Number | Return only current user lists
  'onlyDefault': 0, // Number | Return only default lists
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.searchLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **ids** | **String**| Find lists by ID(s) | [optional] 
 **query** | **String**| Find lists by specified search query | [optional] 
 **onlyMine** | **Number**| Return only current user lists | [optional] [default to 0]
 **onlyDefault** | **Number**| Return only default lists | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**SearchListsResponse**](SearchListsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchOutboundMessages"></a>
# **searchOutboundMessages**
> SearchOutboundMessagesResponse searchOutboundMessages(opts)

Find messages

Find outbound messages by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that \\'page\\' parameter is ignored when \\'lastId\\' is specified
  'ids': "ids_example", // String | Find message by ID(s)
  'sessionId': 56, // Number | Find messages by session ID
  'statuses': "\"q\"", // String | Find messages by status
  'includeDeleted': 0, // Number | Search also in deleted messages
  'query': "query_example" // String | Find messages by specified search query
};
apiInstance.searchOutboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified | [optional] 
 **ids** | **String**| Find message by ID(s) | [optional] 
 **sessionId** | **Number**| Find messages by session ID | [optional] 
 **statuses** | **String**| Find messages by status | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages | [optional] [default to 0]
 **query** | **String**| Find messages by specified search query | [optional] 

### Return type

[**SearchOutboundMessagesResponse**](SearchOutboundMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchScheduledMessages"></a>
# **searchScheduledMessages**
> SearchScheduledMessagesResponse searchScheduledMessages(opts)

Find scheduled messages by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'query': "query_example", // String | Find messages by specified search query
  'ids': "ids_example", // String | Find schedules by ID(s)
  'status': "x", // String | Fetch schedules with the specific status: a - actual, c - completed, x - all
  'orderBy': "id", // String | Order results by some field. Default is id
  'direction': "desc" // String | Order direction. Default is desc
};
apiInstance.searchScheduledMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query | [optional] 
 **ids** | **String**| Find schedules by ID(s) | [optional] 
 **status** | **String**| Fetch schedules with the specific status: a - actual, c - completed, x - all | [optional] [default to x]
 **orderBy** | **String**| Order results by some field. Default is id | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc | [optional] [default to desc]

### Return type

[**SearchScheduledMessagesResponse**](SearchScheduledMessagesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTemplates"></a>
# **searchTemplates**
> SearchTemplatesResponse searchTemplates(opts)

Find user templates by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page
  'limit': 10, // Number | How many results to return
  'ids': "ids_example", // String | Find template by ID(s)
  'name': "name_example", // String | Find template by name
  'content': "content_example" // String | Find template by content
};
apiInstance.searchTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page | [optional] [default to 1]
 **limit** | **Number**| How many results to return | [optional] [default to 10]
 **ids** | **String**| Find template by ID(s) | [optional] 
 **name** | **String**| Find template by name | [optional] 
 **content** | **String**| Find template by content | [optional] 

### Return type

[**SearchTemplatesResponse**](SearchTemplatesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendEmailVerificationCode"></a>
# **sendEmailVerificationCode**
> sendEmailVerificationCode()

Send user email verification

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.sendEmailVerificationCode().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> SendMessageResponse sendMessage(sendMessageInputObject)

Send message

The main entrypoint to send messages. See examples above for the reference.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var sendMessageInputObject = new TextmagicClient.SendMessageInputObject(); // SendMessageInputObject | 

apiInstance.sendMessage(sendMessageInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageInputObject** | [**SendMessageInputObject**](SendMessageInputObject.md)|  | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendPhoneVerificationCode"></a>
# **sendPhoneVerificationCode**
> sendPhoneVerificationCode()

Send user phone verification

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.sendPhoneVerificationCode().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setChatStatus"></a>
# **setChatStatus**
> ResourceLinkResponse setChatStatus(setChatStatusInputObject)

Set status of the chat given by ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var setChatStatusInputObject = new TextmagicClient.SetChatStatusInputObject(); // SetChatStatusInputObject | 

apiInstance.setChatStatus(setChatStatusInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setChatStatusInputObject** | [**SetChatStatusInputObject**](SetChatStatusInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startSurvey"></a>
# **startSurvey**
> ResourceLinkResponse startSurvey(id)

Start a survey.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.startSurvey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unblockContact"></a>
# **unblockContact**
> unblockContact(unblockContactInputObject)

Unblock contact by phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unblockContactInputObject = new TextmagicClient.UnblockContactInputObject(); // UnblockContactInputObject | 

apiInstance.unblockContact(unblockContactInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactInputObject** | [**UnblockContactInputObject**](UnblockContactInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unblockContactsBulk"></a>
# **unblockContactsBulk**
> unblockContactsBulk(unblockContactsBulkInputObject)

Unblock several contacts by blocked contact ids or unblock all contacts

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unblockContactsBulkInputObject = new TextmagicClient.UnblockContactsBulkInputObject(); // UnblockContactsBulkInputObject | 

apiInstance.unblockContactsBulk(unblockContactsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactsBulkInputObject** | [**UnblockContactsBulkInputObject**](UnblockContactsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unmuteChatsBulk"></a>
# **unmuteChatsBulk**
> unmuteChatsBulk(unmuteChatsBulkInputObject)

Unmute several chats by chat ids or unmute all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unmuteChatsBulkInputObject = new TextmagicClient.UnmuteChatsBulkInputObject(); // UnmuteChatsBulkInputObject | 

apiInstance.unmuteChatsBulk(unmuteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unmuteChatsBulkInputObject** | [**UnmuteChatsBulkInputObject**](UnmuteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unsubscribeContact"></a>
# **unsubscribeContact**
> ResourceLinkResponse unsubscribeContact(unsubscribeContactInputObject)

Unsubscribe contact from your communication by phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unsubscribeContactInputObject = new TextmagicClient.UnsubscribeContactInputObject(); // UnsubscribeContactInputObject | 

apiInstance.unsubscribeContact(unsubscribeContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribeContactInputObject** | [**UnsubscribeContactInputObject**](UnsubscribeContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBalanceNotificationSettings"></a>
# **updateBalanceNotificationSettings**
> updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject)

Update balance notification settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateBalanceNotificationSettingsInputObject = new TextmagicClient.UpdateBalanceNotificationSettingsInputObject(); // UpdateBalanceNotificationSettingsInputObject | 

apiInstance.updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBalanceNotificationSettingsInputObject** | [**UpdateBalanceNotificationSettingsInputObject**](UpdateBalanceNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateCallbackSettings"></a>
# **updateCallbackSettings**
> updateCallbackSettings(updateCallbackSettingsInputObject)

Update callback URL settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCallbackSettingsInputObject = new TextmagicClient.UpdateCallbackSettingsInputObject(); // UpdateCallbackSettingsInputObject | 

apiInstance.updateCallbackSettings(updateCallbackSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackSettingsInputObject** | [**UpdateCallbackSettingsInputObject**](UpdateCallbackSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChatDesktopNotificationSettings"></a>
# **updateChatDesktopNotificationSettings**
> updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject)

Update chat desktop notification settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateChatDesktopNotificationSettingsInputObject = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject(); // UpdateChatDesktopNotificationSettingsInputObject | 

apiInstance.updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChatDesktopNotificationSettingsInputObject** | [**UpdateChatDesktopNotificationSettingsInputObject**](UpdateChatDesktopNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> ResourceLinkResponse updateContact(updateContactInputObject, id)

Update existing contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateContactInputObject = new TextmagicClient.UpdateContactInputObject(); // UpdateContactInputObject | 

var id = 1; // Number | 

apiInstance.updateContact(updateContactInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactInputObject** | [**UpdateContactInputObject**](UpdateContactInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContactNote"></a>
# **updateContactNote**
> ResourceLinkResponse updateContactNote(updateContactNoteInputObject, id)

Update existing contact note.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateContactNoteInputObject = new TextmagicClient.UpdateContactNoteInputObject(); // UpdateContactNoteInputObject | 

var id = 1; // Number | 

apiInstance.updateContactNote(updateContactNoteInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactNoteInputObject** | [**UpdateContactNoteInputObject**](UpdateContactNoteInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCurrentUser"></a>
# **updateCurrentUser**
> UpdateCurrentUserResponse updateCurrentUser(updateCurrentUserInputObject)

Update current user info.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCurrentUserInputObject = new TextmagicClient.UpdateCurrentUserInputObject(); // UpdateCurrentUserInputObject | 

apiInstance.updateCurrentUser(updateCurrentUserInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCurrentUserInputObject** | [**UpdateCurrentUserInputObject**](UpdateCurrentUserInputObject.md)|  | 

### Return type

[**UpdateCurrentUserResponse**](UpdateCurrentUserResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomField"></a>
# **updateCustomField**
> ResourceLinkResponse updateCustomField(updateCustomFieldInputObject, id)

Update existing custom field.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCustomFieldInputObject = new TextmagicClient.UpdateCustomFieldInputObject(); // UpdateCustomFieldInputObject | 

var id = 1; // Number | 

apiInstance.updateCustomField(updateCustomFieldInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldInputObject** | [**UpdateCustomFieldInputObject**](UpdateCustomFieldInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomFieldValue"></a>
# **updateCustomFieldValue**
> ResourceLinkResponse updateCustomFieldValue(updateCustomFieldValueInputObject, id)

Update contact&#39;s custom field value.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCustomFieldValueInputObject = new TextmagicClient.UpdateCustomFieldValueInputObject(); // UpdateCustomFieldValueInputObject | 

var id = "id_example"; // String | 

apiInstance.updateCustomFieldValue(updateCustomFieldValueInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldValueInputObject** | [**UpdateCustomFieldValueInputObject**](UpdateCustomFieldValueInputObject.md)|  | 
 **id** | **String**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInboundMessagesNotificationSettings"></a>
# **updateInboundMessagesNotificationSettings**
> updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject)

Update inbound messages notification settings

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateInboundMessagesNotificationSettingsInputObject = new TextmagicClient.UpdateInboundMessagesNotificationSettingsInputObject(); // UpdateInboundMessagesNotificationSettingsInputObject | 

apiInstance.updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInboundMessagesNotificationSettingsInputObject** | [**UpdateInboundMessagesNotificationSettingsInputObject**](UpdateInboundMessagesNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateList"></a>
# **updateList**
> ResourceLinkResponse updateList(id, opts)

Update existing list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'updateListObject': new TextmagicClient.UpdateListObject() // UpdateListObject | 
};
apiInstance.updateList(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateListObject** | [**UpdateListObject**](UpdateListObject.md)|  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePassword"></a>
# **updatePassword**
> updatePassword(updatePasswordInputObject)

Change user password.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updatePasswordInputObject = new TextmagicClient.UpdatePasswordInputObject(); // UpdatePasswordInputObject | 

apiInstance.updatePassword(updatePasswordInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePasswordInputObject** | [**UpdatePasswordInputObject**](UpdatePasswordInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateSenderSetting"></a>
# **updateSenderSetting**
> updateSenderSetting(updateSenderSettingInputObject)

Change sender settings for specified country.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateSenderSettingInputObject = new TextmagicClient.UpdateSenderSettingInputObject(); // UpdateSenderSettingInputObject | 

apiInstance.updateSenderSetting(updateSenderSettingInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSenderSettingInputObject** | [**UpdateSenderSettingInputObject**](UpdateSenderSettingInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateSurvey"></a>
# **updateSurvey**
> ResourceLinkResponse updateSurvey(updateSurveyInputObject, id)

Update existing survey.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateSurveyInputObject = new TextmagicClient.UpdateSurveyInputObject(); // UpdateSurveyInputObject | 

var id = 1; // Number | 

apiInstance.updateSurvey(updateSurveyInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSurveyInputObject** | [**UpdateSurveyInputObject**](UpdateSurveyInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSurveyNode"></a>
# **updateSurveyNode**
> ResourceLinkResponse updateSurveyNode(updateSurveyNodeInputObject, id)

Update existing node.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateSurveyNodeInputObject = new TextmagicClient.UpdateSurveyNodeInputObject(); // UpdateSurveyNodeInputObject | 

var id = 1; // Number | 

apiInstance.updateSurveyNode(updateSurveyNodeInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSurveyNodeInputObject** | [**UpdateSurveyNodeInputObject**](UpdateSurveyNodeInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTemplate"></a>
# **updateTemplate**
> ResourceLinkResponse updateTemplate(updateTemplateInputObject, id)

Update existing template.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateTemplateInputObject = new TextmagicClient.UpdateTemplateInputObject(); // UpdateTemplateInputObject | 

var id = 1; // Number | 

apiInstance.updateTemplate(updateTemplateInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTemplateInputObject** | [**UpdateTemplateInputObject**](UpdateTemplateInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAvatar"></a>
# **uploadAvatar**
> uploadAvatar(image)

Add an avatar for the current user.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | User avatar. Should be PNG or JPG file not more than 10 MB

apiInstance.uploadAvatar(image).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| User avatar. Should be PNG or JPG file not more than 10 MB | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadContactAvatar"></a>
# **uploadContactAvatar**
> ResourceLinkResponse uploadContactAvatar(image, id)

Add an avatar for the contact.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | Contact avatar. Should be PNG or JPG file not more than 10 MB

var id = 56; // Number | 

apiInstance.uploadContactAvatar(image, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Contact avatar. Should be PNG or JPG file not more than 10 MB | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadListAvatar"></a>
# **uploadListAvatar**
> ResourceLinkResponse uploadListAvatar(image, id)

Add an avatar for the list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | List avatar. Should be PNG or JPG file not more than 10 MB

var id = 1; // Number | 

apiInstance.uploadListAvatar(image, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| List avatar. Should be PNG or JPG file not more than 10 MB | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadMessageAttachment"></a>
# **uploadMessageAttachment**
> UploadMessageAttachmentResponse uploadMessageAttachment(file)

Upload message attachment

Upload a new file to insert it as a link.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var file = "/path/to/file.txt"; // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats

apiInstance.uploadMessageAttachment(file).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

