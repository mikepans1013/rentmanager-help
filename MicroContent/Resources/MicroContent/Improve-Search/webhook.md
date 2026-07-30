# Manage Webhooks (Page)

Source: https://rmxhelp.rentmanager.com/MicroContent/Resources/MicroContent/Improve-Search/webhook.htm

Webhooks allow you to send information from your database to a secure web address when specific events occur in Rent Manager . Webhooks notify the established web address when a certain events occur, as opposed to the user making repeated calls to the API to scan for changes. After the webhook provides the event's data, you can then call back to the API for further details, or feed the information to another API  or application.

 Webhooks are specific to the location in which they are created. If you have multiple database locations, webhooks must be established for each location.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage Webhooks
 Enabled

 For more information, refer to Control User Access .

 To view the Manage Webhooks page, go to arrow_forward   Administration , then go to Customization arrow_forward Manage Webhooks .

 Column Descriptions

 The following columns are available on this page.

 Column
 Description

 Event Type

 The name of the area in Rent Manager , which when edited, added to, or deleted, causes data to be pushed to the webhook.

 URL

 The secure URL to which data is sent when an event occurs.

 Webhook Event Types

 Webhooks send data (also known as a payload) when an event you specify, such as a service issue being created, occurs in Rent Manager . Events are triggered when the Rent Manager location specified in the webhook has a new account or issue created, updated, or deleted. Only one URL can be listed per event.

 Additions, deletions, or edits to certain areas in Rent Manager generate a callback to the specified URL. The following event types are available:

 Event Type
 Description

 Tenant

 Changes to certain fields on the tenant's details page, including tenant-type user defined fields.

 Tenant Contact

 Changes on the View Contacts pop-up, including tenant contact user defined fields.

 Tenant History

 Items added on the tenant History/Notes pop-up using the Add Note , Add Call , Add Visit , and Add Email actions.

 Owner

 Changes to certain fields on the owner's details page, including owner-type user defined fields.

 Owner Prospect

 Changes to certain fields on the owner prospect's page, including owner prospect-type user defined fields.

 Prospect

 Changes to certain fields on the prospect's details page, including prospect-type user defined fields.

 Prospect Contact

 Changes on the View Contacts pop-up, including prospect contact user defined fields.

 Prospect History

 Items added on the prospect History/Notes pop-up using the Add Note , Add Call , Add Visit , and Add Email actions.

 Service Issue

 Changes to certain fields on the issue's details page, including issue-type user defined fields.

 Vendor

 Changes to certain fields on the vendor's details page, including vendor-type user defined fields.

 Service Issue History

 Items added on the issue History/Notes pop-up using the Add Note action.

 Service Issue Tech Times

 Items added on the Tech Time Details pop-up using the Add Tech Time action on the History/Notes page.

 Application

 Completed and submitted Apply Now applications.

 More Information

 Webhooks handled by an integration are not displayed on this page. To view the webhooks in use by a partner, go to   arrow_forward   Administration arrow_forward Integrations arrow_forward My Integrations .

 Webhook Payload Output

 When an event triggers a payload, the data is sent in JSON format:

 Parameters are described below, using the above image as an example:

 Parameter
 Description

 EventType

 The event that triggered the webhook.

 In the example above, ProspectHistory_Add is the event type. To generate this event type, a history/note item created using one of the Add Email , Add Visit , Add Call , or Add Note actions was added to a prospect account.

 This parameter is always formatted with the name of the event type first, followed by _Add , _Edit , or _Delete , based upon the action taken.

 IDParentIDDict

 The ID of the dictionary item that was changed, followed by the ID of the entity of the parent account.

 In the example above, the ID is 582 . This is the ID of the history/note item, not the ID of the prospect account. The parent ID is 177 . This is the ID number of the prospect who had the history/note item added.

 CorporateID

 The CorporateID is more commonly referred to as the company code. The company's database ID (company code). Webhooks sent from integrations require this, but webhooks established on this Manage Webhooks page do not.

 In the example above, the corporate ID (company code) is pdrashwk48 .

 LocationID

 The ID number of the Rent Manager location from which the payload originated.

 In the example above, the location ID is 1 .

 LocationName

 The name of the location from which the payload originated.

 In the example above, the location name is Default .
