# TextmagicClient.SendMessageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Message ID. | 
**href** | **String** | URI of message session. | 
**type** | **String** | Message response type: * **message** when message sent to a single recipient * **session** when message sent to multiple recipients * **schedule** when message has been scheduled for sending * **bulk** when message sent to multiple recipient and the number of recipients requires asynchronous processiong See [Sending more than 1,000 messages in one session](http://docs.textmagictesting.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session).  | 
**sessionId** | **Number** | Message session ID. | 
**bulkId** | **Number** | Bulk Session ID. See [Sending more than 1,000 messages in one session](http://docs.textmagictesting.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session). | 
**messageId** | **Number** | Message ID. | 
**scheduleId** | **Number** | Message Schedule ID. | 
**chatId** | **Number** | Message Chat ID. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `message` (value: `"message"`)

* `session` (value: `"session"`)

* `schedule` (value: `"schedule"`)

* `bulk` (value: `"bulk"`)




