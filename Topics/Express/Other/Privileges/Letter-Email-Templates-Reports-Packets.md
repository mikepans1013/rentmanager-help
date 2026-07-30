# Letter/Email Templates/Reports Packets Privilege Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Privileges/Letter-Email-Templates-Reports-Packets.htm

These privileges provide access to letter and email templates, access to generate reports from templates, write custom reports, manage signable documents, and access certain scripting insertable fields.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 View, Edit

 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To manage these privileges, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users and select a user.
The user's details page displays.

 -
 Click the Privileges tab.

 -
 Next to the Letter/Email Templates/Reports/Packets privilege group, click to expand the privilege list.

 -
 To enable a privilege, check the box. Each privilege is described below.

 -
 Click Save .

 Privilege Descriptions

 Each privilege is described below.

 Privilege
 Description

 Letter/Email templates/packets

 Access the Document Packets page, Signable Documents page and the details of signable documents sent by the user. For more information, refer to Document Packets (Page) and Signable Documents (Page) .

 Related Privileges

 This privilege is also required in order to access letter and email templates for the specific entity. For example, if the user needs access to property letter templates, they need this privilege in addition to Property templates/packets .

 Entity templates/packets
(Prospect, Vendor, Service Manager, Job, etc.)

 Add, view, edit, and/or delete letter templates, folders, and document packets for the specified entity type (property, unit, prospect, vendor, and so on). If you have these privileges, you may create personalized letters of the specified entity type that populate with dynamic data. For more information, refer to Letter/Email Templates (Page) .

 For example, the Owner templates/packets privilege grants the selected access for owner-type letter templates and document packets.

 Related Privileges

 To access these letter templates, you also need the Letter/Email templates/packets privilege.

 Privileges to access individual letter and email templates and/or document packets must be enabled on the Communication tab of the user's account. For more information, refer to Control Letter / Email Template Access .

 Edit other users' templates/packets

 Edit and/or delete letter/email templates and document packets created by another Rent Manager user.

 Edit merged documents

 Edit the text of a generated letter or email after the insertable fields within the document are populated with personalized data.

 Run reports

 Provides access to the reports menu by clicking to generate system reports and Report Writer reports.

 This privilege also grants access to memorized reports and report batches. For more information, refer to Memorized Reports (Page) and Report Batches (Page) .

 Related Privileges

 Privileges to access individual system reports and/or Report Writer reports must be enabled on the Reports tab of the user's account. For more information, refer to Control Custom Report Access .

 Run accounting reports

 Provides access to the General Ledger and Financial Statements options in reports menu by clicking , allowing the user to generate accounting-related reports.

 In order to use this privilege, the user must also have the Run reports privilege enabled.

 Related Privileges

 Privileges to access individual system reports and/or Report Writer reports must be enabled on the Reports tab of the user's account.

 Entity report writer templates
(Prospect, Vendor, Service Manager, Job, etc.)

 Add, view, edit, and/or delete Report Writer (RW) templates for the specified entity type (property, unit, prospect, vendor, and so on). If you have these privileges, you may create custom reports of the specified entity type that populate with dynamic data. For more information, refer to Report Writer Manager (Page) .

 For example, the Property report writer templates privilege grants the selected access for property-type Report Writer reports.

 Edit other users' report templates

 Edit and/or delete Report Writer templates created by another Rent Manager user.

 Access Chart Scripting

 Provides access to the Chart Functions insertable fields in letter templates or Report Writer (RW) manager. This allows users to insert access property-level and unit-level general ledger financial scripting.

 Execute Chart Scripting

 Enables users to see the values of the Chart Functions insertable fields in letter templates or Report Writer (RW) manager when using the script builder. For more information, refer to Scripting .

 Automated Report Batches

 Enables the user to schedule and automate report batches to run at regular intervals. For more information, refer to Schedule a Report Batch .

 Manage Ownership of Report Batches

 Enables the user to reassign ownership of report batches so a user other than the batch creator can make changes. For more information, refer to Share and Change the Ownership of Report Batches .

 View other users' published document packets

 View signable documents published by another user.

 To access signable documents, you also need the Letter/Email templates/packets privilege.

 Publish document packets

 Enables the user to publish signable documents. For more information, refer to Send Signable Documents .

 Sign document packets

 Enables the user to sign documents as a company representative of the property manager/owner, and also allows them to complete signable documents. This also enables the Landlord/Company Representative Signature option when publishing a signable document. For more information, refer to Complete a Signable Document .

 Void completed signable documents

 Enables the user to void a signable document, even if the document has been completed. A Voided status is applied to the signable document, but the document is not removed from Rent Manager to maintain historical data. For more information, refer to Void a Signable Document .

 Delete signable document packets

 Delete published signable documents. Incomplete documents are deleted permanently from Rent Manager and the web user's account. Completed documents with all party signatures cannot be deleted.

 Signable templates

 Add, view, edit, and/or delete signable templates. For more information, refer to Signable Templates (Page) .

 Edit document signers after publish

 Enables the user to edit the expiration date and document signers on a published signable document that has not yet been signed by clicking Edit Publish Details . For more information, refer to Update a Published Signable Document .
