# TextmagicClient.GetContactsAutocompleteResponseItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **Number** | Id of entity. 0 if object is a Reply | 
**entityType** | **String** | Entry type: * **contact** if it is related to a contact * **list** if it is related to a contact list * **reply** if it is related to an incoming message  | 
**value** | **String** | Id of contact/list if entityType is contact/list OR phone number if entityType is reply. | 
**label** | **String** | Name of the contact/list if entityType is contact/list OR phone number if entityType is reply. | 
**sharedBy** | **String** | If contact or list was shared by another sub-account then name if this user will be shown. | 
**avatar** | **String** | Contact avatar URI. | 
**favorited** | **Boolean** | If contact has been marked as favorite. | 
**userId** | **Number** | Owner id of the contact/list (if it was shared). | 
**countryName** | **String** |  | 
**qposition** | **Number** |  | 
**rposition** | **Number** |  | 


<a name="EntityTypeEnum"></a>
## Enum: EntityTypeEnum


* `reply` (value: `"reply"`)

* `contact` (value: `"contact"`)

* `list` (value: `"list"`)




