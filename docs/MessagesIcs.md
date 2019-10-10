# TextmagicClient.MessagesIcs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Schedule ID. | 
**nextSend** | **Date** | Next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format.  | 
**rrule** | **String** | [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.  | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**lastSent** | **Date** | Date and time when last message has been sent. | 
**contactName** | **String** |  | 
**parameters** | [**MessagesIcsParameters**](MessagesIcsParameters.md) |  | 
**type** | **String** |  | 
**summary** | **String** |  | 
**textParameters** | [**MessagesIcsTextParameters**](MessagesIcsTextParameters.md) |  | 
**firstOccurrence** | **Date** |  | 
**lastOccurrence** | **Date** |  | 
**recipientsCount** | **Number** | Amount of actual recipients. | 
**timezone** | **String** | User-friendly timezone name (with spaces replaced by underscores). | 
**completed** | **Boolean** | Indicates that schedling has been completed. | 
**avatar** | **String** | null | 
**createdAt** | **Date** | Scheduling creation time. | 


