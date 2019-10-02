# TextmagicClient.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | User ID. | 
**username** | **String** | Username. | 
**firstName** | **String** | Account first name. | 
**lastName** | **String** | Account last name. | 
**email** | **String** | User email address. | 
**status** | **String** | Current account status: * **A** for Active * **T** for Trial.  | 
**balance** | **Number** | Account balance (in account currency). | 
**phone** | **String** |  | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccountType** | **String** | Type of account: * **P** for Parent User * **A** for Administrator Sub-Account * **U** for Regular User  | 
**emailAccepted** | **Boolean** |  | 
**phoneAccepted** | **Boolean** |  | 
**avatar** | [**UserImage**](UserImage.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `A` (value: `"A"`)

* `T` (value: `"T"`)




<a name="SubaccountTypeEnum"></a>
## Enum: SubaccountTypeEnum


* `P` (value: `"P"`)

* `A` (value: `"A"`)

* `U` (value: `"U"`)




