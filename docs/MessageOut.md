# TextmagicClient.MessageOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**contactId** | **Number** |  | 
**sessionId** | **Number** |  | 
**receiver** | **String** |  | [optional] 
**messageTime** | **Date** |  | 
**status** | **String** | q - queued s - scheduled queue e - sending error r - enroute a - acked d - delivered b - buffered f - failed u - unknown j - rejected i - bulk insert p - scheduled suspend h - queue suspend | 
**avatar** | **String** |  | 
**text** | **String** |  | 
**deleted** | **Boolean** |  | [optional] 
**charset** | **String** |  | 
**charsetLabel** | **String** |  | 
**firstName** | **String** |  | 
**lastName** | **String** |  | 
**country** | **String** |  | 
**sender** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**price** | **Number** |  | [optional] 
**partsCount** | **Number** |  | 
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




