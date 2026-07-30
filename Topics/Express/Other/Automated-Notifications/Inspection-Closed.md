# Inspection Closed (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/Inspection-Closed.htm

The Inspection Closed automated notification can be configured to send an email or text message to users, tenants, owners, or other external recipients when an inspection's status is changed to Closed in Rent Manager or rmAppSuite Pro . This can be used to notify users, such as property managers or maintenance team leaders, when the work on an inspection is completed or a tenant has submitted a self-inspection so they can follow up on the resolution.

 This automated notification is Event based, meaning that once the notification's conditions are met, notifications are sent immediately.

 Related Privileges

 Group
 Privilege
 Column

 System
 Automated Notifications
 Enabled

 For more information, refer to Control User Access .

 Set Up a Notification

 You can create multiple configurations so that recipients for different properties can receive alerts. For example, you may wish to notify tenants when a management inspection is closed, but not notify them when they submit a self-inspection. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select Inspection Closed .
The Automated Notification: Inspection Closed page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration or click Add to create a new setup.
If you are adding a new setup, the Notification Type pop-up displays.

 -
 For a new setup, in the Select Notification Type field, select one of the options below and click OK .

 Option
 Description

 Owner

 Creates a notification setup that can be sent to the owner(s) of the property linked to the closed inspection.

 Tenant

 Creates a notification setup that can be sent to the tenant and, optionally, tenant contact(s) linked to the closed inspection.

 User

 Creates a notification setup that can be sent to specific Rent Manager users or user roles, property managers, or external contacts that do not have a user account.

 The setup's details display.

 -
 At the top of the page, check or uncheck the Add to History option. If checked, this notification is automatically recorded as a history/note item on each recipient's account in Rent Manager each time this notification is sent out. If unchecked, the notification is sent to the recipient(s), but no history/note item is created. This option is available only for setups under Notify Tenant .

 -
 In the Filters tile, enter information into the following fields:

 Field
 Description

 Inspection Types

 Each inspection type that should generate alerts when inspections of those types are closed and meet the automated notification's conditions. To include all inspection types, check *** < All Types > .

 Inspector Types

 Each inspector type that should that should generate alerts when inspections of those types are closed and meet the automated notification's conditions.

 Management

 Notify the recipient when an inspection is completed by the property management company.

 Tenant

 Notify the recipient when a self-inspection is completed by a tenant.

 Properties

 Each property that should receive alerts when the automated notification's conditions are met. To include all current and future properties, check *** < All Properties > . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 2: Configure Recipients

 The next step is to determine who receives this configuration of the notification, and whether they want to receive it by Email , Text , or Email and Text . You can choose to include one or multiple recipients. The available recipient options vary depending on the notification type, indicated by the Notification Setup section's drop-down headers.

 Notify User

 If the selected setup is under Notify User , you can configure this notification setup to be sent to the user assigned to the inspection, specific Rent Manager users or user roles, property managers, or external contacts that do not have a user account.

 In the Recipients tile header, click and select from the following options:

 Option
 Description

 Add Currently Assigned User

 Include the user assigned to the inspection at the time it is closed.

 Add Property Manager

 Include the manager of the property linked to the closed inspection. Email notifications are sent to the email address entered on the property's details page in the Email field. Text notifications are sent to the phone number marked as Default on the property's details page.

 Add User or Role

 Include specific users or user roles.

 In the User/Role column, select each user or user role that receives this notification. Then in the Method column, select whether the associated user or user role receives the notification via Text , Email , or both.

 Add External Recipient

 Include a person who does not have a user account in Rent Manager . Enter their information into the available fields described below.

 Display Name

 The name of the recipient, for internal reference.

 Email Address

 The email address to which the email notification will be sent. If they should not receive an email notification, leave this field blank.

 Phone Number

 The full ten-digit phone number to which the text notification will be sent. If they should not receive a text notification, leave this field blank.

 Notify Tenant

 If the selected setup is under Notify Tenant , you can configure this notification setup to be sent to the tenant linked to the inspection and additional contacts associated with the tenant.

 In the Recipients tile header, click arrow_forward Add Tenant . In the Select contacts to include section, select from the following options.

 Option
 Description

 All Contacts

 The notification is sent to all active contacts associated with the linked tenant account.

 Primary Contact

 The notification is sent only to the contact marked as Primary on the tenant's View Contacts pop-up.

 Contact Type

 The notification is sent only to active contacts with the selected contact type(s) on the tenant's View Contacts pop-up.

 Notify all tenants within account group

 The notification is sent to the contact(s) marked as Primary for each tenant in the account group.

 Notify Owner

 If the selected setup is under Notify Owner , you can configure this notification setup to be sent to the owner(s) of the selected properties.

 In the Recipients tile header, click arrow_forward Add Owner .

 Step 3: Configure Exclusions

 If there are any exceptions to the configured recipients who should not receive this alert, you can establish an exclusion for them. Exclusions do not receive this configuration of the notification. Exclusions are identified in the Recipients tile by red text. The available exclusion options vary depending on the setup's notification type in the Notification Setup section, indicated by the drop-down it is located under.

 Exclude User or Role

 If the selected setup is under Notify User , you can opt to exclude specific users or user roles from receiving this notification as a text, email, or both.

 In the Recipients tile header, click arrow_forward Exclude User or Role . Then, on the Exclude User or Role pop-up, select the needed information in the available columns and click OK .

 Column
 Description

 User/Role

 Check each user or user role to exclude from receiving this notification.

 Method

 The notification types that are not to be sent to the associated user or user role: Text , Email , or both.

 For example, if you select Leasing Manager [Role] and choose a value of Text , then any user with the user role of Leasing Manager does not receive this notification as an email, but still receives the text notification if a text message is configured.

 Exclude Tenant

 If the selected setup is under Notify Tenant , you can opt to exclude individual tenants or any tenants that have a specified user defined field (UDF) value.

 In the Recipients tile header, click arrow_forward Exclude Tenant . Then on the Exclude Tenants pop-up, enter information into at least one of the available fields and click OK .

 Field
 Description

 Tenant Exclusions

 Excludes specific tenant accounts. In the Tenant Exclusions section header, click . Then in the Tenant Search pop-up, search and select the tenant account you wish to exclude. Repeat for each tenant account that needs to be excluded.

 User Defined Field Exclusions

 Excludes recipients based on a tenant-type user defined field (UDF) value. In the first drop-down, select a UDF. Then in the second drop-down, enter or select the value. All tenant recipients with this value for the selected UDF do not receive the notification.

 For example, if you select a UDF named Receives Notifications? and then select a value of No , then tenants with No set as the value for that UDF do not receive this notification.

 Exclude Owner

 If the selected setup is under Notify Owner , you can opt to exclude specific owners or any owners that have a specific user defined field (UDF) value.

 In the Recipients tile header, click arrow_forward Exclude Owner . Then, on the Exclude Owners pop-up, enter information into at least one of the available fields and click OK .

 Field
 Description

 Owner Exclusions

 Excludes specific owner accounts. In the Owner Exclusions section header, click . Then, in the Owner Search pop-up, search and select the owner account you wish to exclude. Repeat for each owner account that needs to be excluded.

 User Defined Field Exclusions

 Excludes recipients based on an owner-type user defined field (UDF) value. In the first drop-down, select a UDF. Then, in the second drop-down, enter or select the value. All owner recipients with this value for the selected UDF do not receive the notification.

 For example, if you select a UDF named Receives Notifications? and then select a value of No , owners with No set as the value for that UDF do not receive this notification.

 Step 4: Enter Messages

 Finally, you must create the email and/or text messages that each recipient receives. By default, a system-generated message displays for each. You can use the default message(s) as is, modify them, or type an entirely customized message. This email and/or text message is sent to each recipient when the automated notification is triggered.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 To create an email and/or text message for this setup, enter information into the available fields described below. Then click Save to complete the setup configuration.

 Email Message

 If at least one recipient is configured to receive email notifications, the Email tile displays with a default, system-generated message. Automated emails come from donotreply@rentmanager.com and cannot be responded to. The following fields are available in this tile:

 Field
 Description

 Subject

 The subject line of the email notification that summarizes the purpose of the email.

 To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Email Body

 The content of the email body that generates each time the notification is sent.

 Click Plain Text to type a custom message, or click Template to select one of your existing letter templates to use as the email body. For more information, refer to Letter/Email Templates (Page) .

 To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Text Message

 If at least one recipient is configured to receive text notifications, the Text tile displays with a default, system-generated message.

 More Information

 The first text sent to a recipient from the text messaging center and any texts sent via text broadcast or automated notification include an opt-out message. If a recipient opts out, that phone number cannot receive texts from Rent Manager unless they choose to opt back in. Recipients can opt out or opt in at any time. If a recipient wishes to opt back into text messaging, they must text Start from the phone number they opted out with to the number they originally requested to opt out of.

 Phone numbers that have opted out of text messaging are identified on the account's View Contacts pop-up, where the checkbox in the T column is replaced with the words Opted out in red text.

 In the Text Message field, you can edit the content of the text message that generates each time the notification is sent. To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Remove a Notification Setup

 To permanently delete a notification setup from Rent Manager , in the Notification Setups section, click arrow_forward Delete on the setup you wish to remove. This action cannot be undone.

 To disable a notification without permanently deleting it from Rent Manager , select the notification setup from the list and uncheck the Active box. Then click Save . This configuration setup for the notification is no longer sent to recipients, but can be reactivated at any time.
