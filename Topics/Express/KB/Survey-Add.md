# Add and Activate a Survey

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Survey-Add.htm

Surveys allow you to connect with your tenants and collect their feedback on your properties, units, management, amenities, and service issues. You can distribute surveys via email and/or text message to be completed in a survey portal that does not require a Tenant Web Access (TWA) login, and collected responses can be viewed from the Surveys page or from a tenant's list of history/notes. For example, you may want to have tenants provide feedback on your property before they move out, or automatically send satisfaction surveys when a service issue is completed.

 More Information

 One-time surveys can also be published to residents via their Tenant Web Access (TWA) accounts. For more information, refer to Add and Publish a Survey to Tenant Web Access (TWA) .

 Step 1: Create the Survey

 Related Privileges

 Group
 Privilege
 Column

 Surveys
 Surveys
 Add, View

 For more information, refer to Control User Access .

 To create a new survey, do the following:

 -
 Go to arrow_forward Communication arrow_forward Surveys arrow_forward Surveys .
The Surveys page displays.

 -
 Click Add Survey .

 -
 In the Details tile, enter information in the following fields:

 Field
 Description

 Survey Type

 Indicate whether the survey is asking general questions about your properties or units ( Tenant ) or is for collecting feedback a specific maintenance request ( Service Issue ).

 Name

 The unique identifier for this survey that displays internally for users.

 Display Name

 The title that displays to tenants when the survey is sent.

 Description

 Additional information about the survey, such as when it should be sent to tenants or whether it should be distributed for residential and/or commercial tenants. These comments display only to Rent Manager users.

 -
 In the Introduction Page tile, enter the Introduction Page Text that displays for tenants before they begin answering the survey question(s). To customize the message using scripting, click Open Script Builder for scripting assistance.

 -
 In the Questions tile, click Add Question .
The Add Question pop-up displays.

 -
 Create questions for the survey by entering information in the following fields:

 Field
 Description

 Question

 The text that displays for the tenant to answer.

 Response Type

 The kind of value a tenant can enter or select as an answer.

 Yes/No

 Allows the tenant to select Yes or No as a response.

 Text

 Allows the tenant to enter a plain text response.

 Dropdown List

 Allows the tenant to select a single option from a drop-down list of options you establish. To add a new list item, click Add Choice .

 Optionally, to add an option where the recipient can submit their own custom response, select Include an 'Other' response option .

 Selection List

 Allows the tenant to select one or more values from a list of options you establish. To add a new list item, click Add Choice .

 Optionally, to add an option where the recipient can submit their own custom response, select Include an 'Other' response option . To restrict the amount of options a tenant can select, check Limit selection to a maximum of items and enter the desired value.

 Star Rating (1-5)

 Allows the tenant to select a response between one and five stars.

 Response Required

 If checked, the tenant cannot submit the survey until they have answered this question.

 -
 Click Add & New to create another question, or click Add & Close to continue creating the survey.

 -
 In the Closing Page tile, enter the Closing Page Text that displays for tenants when they submit their survey answer(s). To customize the message using scripting, click Open Script Builder for scripting assistance.

 -
 In the Send Options tile, select Send public survey link to individual tenants as needed .

 More Information

 If you select Publish a one time survey to TWA for a specific group of tenants (typically used for polls/voting) , the survey is published to TWA and requires a TWA login to submit an electronic response. For more information, refer to Add and Publish a Survey to Tenant Web Access (TWA) .

 -
 Click Continue .
The second page of the Add Survey pop-up displays.

 Step 2: Select Survey Distribution Options

 On the second page of the pop-up, establish the way the survey is distributed by doing the following:

 -
 In the Delivery Options tile, enter information in the following fields:

 Field
 Description

 Link will expire X days after it is sent

 The number of days the tenant has to begin the survey before a new link needs to be sent.

 Send this survey on demand via

 The delivery method for the survey ( Email , Text , or Email & Text ).

 More Information

 The option to send the survey as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 -
 If, in the Survey Type field, you selected Service Issue , enter information in the Automation Settings tile in the following fields:

 Field
 Description

 Send automatically when the Service Issue

 The action that causes an issue-related survey to be sent to the linked tenant. Surveys can be sent only when issues have a single tenant link.

 Is Closed

 The survey is sent to tenants when a service issue they are linked to is closed.

 Status Changes

 The survey is sent to tenants when a service issue's status is changed. In the Select a status drop-down list, select each issue status that triggers an automated survey. Optionally, check Send on issue close, if not previously sent to automatically send the survey when an issue is closed regardless of its status.

 Send via

 The automated delivery method for the survey ( Email , Text , or Email & Text ).

 More Information

 The option to send the survey as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Properties

 Each property that should receive alerts when the automated survey is sent. To include all current and future properties, check <All Properties> . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Issue Categories

 Each issue category whose associated issues trigger an automated survey.

 -
 If you selected email as a delivery method, in the Email Configuration tile, enter information in the following fields:

 Field
 Description

 From Name

 The sender's name that displays for the tenant.

 Subject

 The subject line that displays for the tenant.

 To customize the subject line using scripting, click Open Script Builder for scripting assistance.

 Body

 The content of the email body that generates each time the survey is sent.

 To customize the message using scripting, click Open Script Builder for scripting assistance.

 -
 If you selected text messages as a delivery method, in the Text Configuration tile, enter the content of the Message that generates each time the survey is sent. To customize the message using scripting, click Open Script Builder for scripting assistance.

 -
 In the Branding tile, customize how the survey looks using the following fields:

 Field
 Description

 Button Color

 The color of the Take Survey button that displays on survey link emails and in the survey portal.

 Related Preferences

 By default, this color is set to the same Button Color selected in system web preference. For more information, refer to Tenant Web Access Color Theme (System Web Preferences) .

 Logo

 The image that displays in the survey link email.

 None

 No logo image is included.

 Property User Defined Field

 The image uploaded to an Image -type property-level user-defined field (UDF) is included as the logo.

 Custom

 Click Upload Files to select an image from your computer or network drive.

 Step 3: Save and Activate the Survey

 To save the survey and immediately make it active, click Save & Activate . The survey is created and can be sent to tenants, and, if you set up automation options, the survey is automatically sent to tenants when the issue meets your established criteria.

 Alternatively, you can save the survey in an Inactive status until its ready to be active and sent to tenants.

 Related Privileges

 Group
 Privilege
 Column

 Surveys
 Surveys
 View, Edit

 For more information, refer to Control User Access .

 To save the survey and activate it at a later time, do the following:

 -
 Click Save .
The survey is created.

 -
 When you are ready to activate the survey, on the Surveys page, select the survey you created.

 -
 Select Active .

 -
 Click Save .
The survey is active and can be sent to tenants. If you set up automation options, the survey is automatically sent to tenants when the issue meets your established criteria.

 Step 4: Send the Survey

 Related Privileges

 Group
 Privilege
 Column

 Surveys
 Publish/Send Surveys
 Enabled

 For more information, refer to Control User Access .

 Depending on the information you want to gather with this survey, you can either send a survey to multiple tenants at once or to an individual tenant. Each option is described below.

 Option 1: Send to Multiple Tenants

 To manually send a survey to multiple tenants, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants .
The Tenants page displays.

 -
 Select Bulk Actions arrow_forward Send Surveys .
The Send Survey pop-up displays.

 -
 Select a survey from the drop-down list and click Continue .

 -
 Check the box next to each tenant you wish to send the survey.

 -
 Select Send Surveys .
The survey is sent to the selected tenants based on the send method selected in the survey.

 Option 2: Send to a Single Tenant

 To manually send a survey to a single tenant, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant.
The tenant's details page displays.

 -
 On the action bar, select .

 -
 Select the survey you wish to send (e.g., Send General Feedback ).
The survey is sent to the tenant based on the send method selected in the survey.
