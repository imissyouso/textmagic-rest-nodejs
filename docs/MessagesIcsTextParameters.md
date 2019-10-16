# TextmagicClient.MessagesIcsTextParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **Number** | Cost to check one number is constant – 0.04 in your account currency. | 
**parts** | **Number** | Message parts (multiples of 160 characters) count. | 
**chars** | **Number** | Characters count. | 
**encoding** | **String** | Message charset. Could be: * **ISO-8859-1** for plaintext SMS * **UTF-16BE** for Unicode SMS  | 
**countries** | **[String]** |  | 
**charsetLabel** | **String** | Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS *   **UTF-16BE** for Unicode SMS *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages  | 


<a name="EncodingEnum"></a>
## Enum: EncodingEnum


* `ISO-8859-1` (value: `"ISO-8859-1"`)

* `UTF-16BE` (value: `"UTF-16BE"`)




