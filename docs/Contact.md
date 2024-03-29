# TextmagicClient.Contact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Contact ID. | 
**favorited** | **Boolean** | Is the Contact favourite? [Custom fields list](http://docs.textmagictesting.com/#operation/getFavourites). | 
**blocked** | **Boolean** | Is the Contact blocked? [Custom fields list](http://docs.textmagictesting.com/#operation/getBlockedContacts). | 
**firstName** | **String** | Contact first name. | 
**lastName** | **String** | Contact last name. | 
**companyName** | **String** | Company name. | 
**phone** | **String** | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | 
**email** | **String** | Contact email address. | 
**country** | [**Country**](Country.md) | Contact country. | 
**customFields** | [**[ContactCustomField]**](ContactCustomField.md) | See [Custom Fields](http://docs.textmagictesting.com/#tag/Custom-Fields) section. | 
**user** | [**User**](User.md) |  | 
**lists** | **[Array]** |  | 
**phoneType** | **String** | Phone number type: * **0** if it is fixed-line; * **1** if it is mobile; * **2** if it is mobile or fixed-line (in case we cannot distingush between fixed-line or mobile); * **3** if it is toll-free; * **4** if it is a premium rate phone; * **5** if it is a shared cost phone; * **6** if it is a VoIP; * **7** if it is a [Personal Number](); * **8** if it is a pager; * **9** if it is an Universal Access Number; * **10** if the phone type is unknown; * **-1** if the phone type is not yet processed or cannot be determined.  | 
**avatar** | [**ContactImage**](ContactImage.md) |  | 
**notes** | [**[ContactNote]**](ContactNote.md) |  | 


