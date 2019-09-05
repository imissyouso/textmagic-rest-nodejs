# TextmagicClient.UsersInbound

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**user** | [**User**](User.md) |  | 
**purchasedAt** | **Date** |  | 
**expireAt** | **Date** |  | 
**status** | **String** | A - active, in use (at least one message was sent/received from/to this number), U - never used before | 
**country** | [**Country**](Country.md) |  | 
**phone** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `U` (value: `"U"`)

* `A` (value: `"A"`)




