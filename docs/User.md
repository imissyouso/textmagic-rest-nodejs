# TextmagicClient.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | User ID. | 
**displayTimeFormat** | **String** | User&#39;s prefered format of time display * *12h* - AM/PM format * *24h* - 24 hour clock format  | [optional] 
**username** | **String** | Username. | 
**firstName** | **String** | Account first name. | 
**lastName** | **String** | Account last name. | 
**email** | **String** | User email address. | 
**status** | **String** | Current account status: * **A** for Active * **T** for Trial.  | 
**balance** | **Number** | Account balance (in account currency). | 
**phone** | **String** | User phone number | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccountType** | **String** | Type of account: * **P** for Parent User * **A** for Administrator Sub-Account * **U** for Regular User  | 
**emailAccepted** | **Boolean** | Is account has confirmed Email. | 
**phoneAccepted** | **Boolean** | Is account has confirmed Phone number. | 
**avatar** | [**UserImage**](UserImage.md) |  | 


<a name="DisplayTimeFormatEnum"></a>
## Enum: DisplayTimeFormatEnum


* `12h` (value: `"12h"`)

* `24h` (value: `"24h"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `A` (value: `"A"`)

* `T` (value: `"T"`)




<a name="SubaccountTypeEnum"></a>
## Enum: SubaccountTypeEnum


* `P` (value: `"P"`)

* `A` (value: `"A"`)

* `U` (value: `"U"`)




