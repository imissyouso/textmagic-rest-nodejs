# TextmagicClient.MessageOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Message ID. | 
**sender** | **String** | Message sender (phone number or alphanumeric Sender ID). | [optional] 
**receiver** | **String** | Recipient phone number. | [optional] 
**text** | **String** |  | 
**status** | **String** | Delivery status of the message. TODO: Please see the table below to see different delivery statuses.  | 
**contactId** | **Number** |  | 
**sessionId** | **Number** |  | 
**messageTime** | **Date** | Sending time. | 
**avatar** | **String** |  | 
**deleted** | **Boolean** |  | [optional] 
**charset** | **String** | Message charset. Could be: *   **ISO-8859-1** for plaintext SMS *   **UTF-16BE** for Unicode SMS  | 
**charsetLabel** | **String** |  | 
**firstName** | **String** | Contact first name. Could be substituted from your [Contacts](http://docs.textmagictesting.com/#tag/Contacts) (even if you submitted phone number instead of contact ID).  | 
**lastName** | **String** | Contact last name. | 
**country** | **String** | Two-letter ISO country code of the recipient phone number.  | 
**phone** | **String** |  | [optional] 
**price** | **Number** |  | [optional] 
**partsCount** | **Number** | Message parts (multiples of 160 characters) count. | 
**fromEmail** | **String** |  | [optional] 
**fromNumber** | **String** |  | [optional] 
**smscId** | **String** |  | [optional] 
**contact** | **String** |  | [optional] 
**source** | **String** |  | [optional] 
**deliveredCount** | **Number** |  | [optional] 
**numbersCount** | **Number** |  | [optional] 
**userId** | **Number** |  | [optional] 
**creditsPrice** | **String** |  | [optional] 
**chars** | **Number** |  | [optional] 


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




