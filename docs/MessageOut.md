# TextmagicClient.MessageOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Message ID. | 
**sender** | **String** | Message sender (phone number or alphanumeric Sender ID). | [optional] 
**receiver** | **String** | Recipient phone number. | [optional] 
**text** | **String** |  | 
**status** | **String** | Delivery status of the message. See [message delivery statuses](http://docs.textmagictesting.com/#section/Delivery-status-codes) for details.  | 
**contactId** | **Number** | Recipient contact ID. | 
**sessionId** | **Number** | Message Session ID of a Message. | 
**messageTime** | **Date** | Sending time. | 
**avatar** | **String** |  | 
**deleted** | **Boolean** | Indicates that message has been deleted. | [optional] 
**charset** | **String** | Message charset. Could be: *   **ISO-8859-1** for plaintext SMS *   **UTF-16BE** for Unicode SMS  | 
**charsetLabel** | **String** | Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS *   **UTF-16BE** for Unicode SMS *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages  | 
**firstName** | **String** | Contact first name. Could be substituted from your [Contacts](http://docs.textmagictesting.com/#tag/Contacts) (even if you submitted phone number instead of contact ID).  | 
**lastName** | **String** | Contact last name. | 
**country** | **String** | Two-letter ISO country code of the recipient phone number.  | 
**phone** | **String** | Receipent phone number. | [optional] 
**price** | **Number** | Message price. | [optional] 
**partsCount** | **Number** | Message parts (multiples of 160 characters) count. | 
**fromEmail** | **String** | User email which this message came from. For Email2SMS and Distribution Lists messages it will be an original email address, in other cases it is an account email address. | [optional] 
**fromNumber** | **String** | Phone number which is used to send SMS. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `q` (value: `"q"`)

* `s` (value: `"s"`)

* `e` (value: `"e"`)

* `r` (value: `"r"`)

* `a` (value: `"a"`)

* `d` (value: `"d"`)

* `b` (value: `"b"`)

* `f` (value: `"f"`)

* `u` (value: `"u"`)

* `j` (value: `"j"`)

* `i` (value: `"i"`)

* `p` (value: `"p"`)

* `h` (value: `"h"`)




