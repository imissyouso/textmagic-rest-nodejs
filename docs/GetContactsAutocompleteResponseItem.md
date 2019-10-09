# TextmagicClient.GetContactsAutocompleteResponseItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **Number** | Id of entity. 0 if object is a Reply | 
**entityType** | **String** |  | 
**value** | **String** | Id of contact/list if entityType is contact/list OR phone number if entityType is reply | 
**label** | **String** | Name of the contact/list if entityType is contact/list OR phone number if entityType is reply | 
**sharedBy** | **String** | If contact or list was shared by another user then name if this user will be shown | 
**avatar** | **String** |  | 
**favorited** | **Boolean** | If contact was marked as favourited | 
**userId** | **Number** | Owner id of the contact/list (if it was shared) | 
**countryName** | **String** |  | 
**qposition** | **Number** |  | 
**rposition** | **Number** |  | 


<a name="EntityTypeEnum"></a>
## Enum: EntityTypeEnum


* `list` (value: `"list"`)

* `contact` (value: `"contact"`)

* `reply` (value: `"reply"`)



