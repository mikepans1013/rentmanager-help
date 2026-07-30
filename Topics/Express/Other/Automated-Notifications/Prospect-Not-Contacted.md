# Prospect Not Contacted (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/Prospect-Not-Contacted.htm

The Prospect Not Contacted automated notification can be configured to send an email or text message to users, property managers, leasing agents, or external recipients as the length of time since a prospect was last contacted increases. A prospect's last contact date is based on the most recent Email , Call , or Visit history/note item on their account's History/Notes tile. This can be used to make sure leasing agents follow up on their leads.

 This automated notification is Schedule based, meaning that notifications are sent overnight (or at the scheduled time) on the day that the notification's conditions are met.

 Related Privileges

 Group
 Privilege
 Column

 System
 Automated Notifications
 Enabled

 For more information, refer to Control User Access .

 Set Up a Notification

 You can create multiple configurations so that recipients for different properties can receive alerts. For example, you may wish to notify leasing agents after two days without contact, but wait to notify property managers after five days without contact so they can follow up with the agent. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select Prospect Not Contacted .
The Automated Notification: Prospect Not Contacted page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration or click   Add to create a new setup.
The setup's details display.

 -
 In the Filters tile, enter information into the following fields:

 Field
 Description

 Properties

 Each property that should receive alerts when the automated notification's conditions are met. To include all current and future properties, check *** < All Properties > . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Days since last contact

 The number of days that should pass since the prospect was contacted before a notification is sent. The last contact date is determined by the call, email, or visit history/note item on the account with the most recent Start Date . For example, if you would like the notification to be sent when the prospect has not been contacted for five days, enter 5 .

 Related Preferences

 Call history/note items must have Spoke with prospect checked, and/or the system preference to Always update Last Contact Date when a call note is added enabled, to be considered when determining last contact date. For more information, refer to Prospect (System Preferences) .

 Prospect Stage

 Restrict the notification to send only to prospects who are assigned one of the selected prospect stages and meet the rest of the notification's conditions.

 Step 2: Configure Recipients

 The next step is to determine who receives this configuration of the notification, and whether they want to receive it by Email , Text , or Email and Text . You can choose to include one or multiple recipients.

 In the Recipients tile header, click and select from the following options:

 Option
 Description

 Add Property Manager

 Include the manager of the property with which the prospect who has not been contacted is associated. Email notifications are sent to the email address entered on the property's details page in the Email field. Text notifications are sent to the phone number marked as Default on the property's details page.

 Add Leasing Agent

 Include the user selected on the prospect's details page in the Leasing Agent field.

 Add User or Role

 Include specific Rent Manager users or user roles.

 In the User/Role column, select each user or user role that receives this notification. Then in the Method column, select whether the associated user or user role receives the notification via Text , Email , or both.

 Add External Recipient

 Include a person who does not have a user account in Rent Manager . Enter their information into the available fields described below.

 Display Name

 The name of the recipient, for internal reference.

 Email Address

 The email address to which the email notification will be sent. If they should not receive an email notification, leave this field blank.

 Phone Number

 The full ten-digit phone number to which the text notification will be sent. If they should not receive a text notification, leave this field blank.

 Step 3: Configure Exclusions

 If there are any exceptions to the configured recipients who should not receive this alert, you can establish an exclusion for them. Exclusions do not receive this configuration of the notification. Exclusions are identified in the Recipients tile by red text.

 For this notification , you can opt to exclude specific users or user roles from receiving this notification as a text, email, or both.

 In the Recipients tile header, click arrow_forward Exclude User or Role . Then, on the Exclude User or Role pop-up, select the needed information in the available columns and click OK .

 Column
 Description

 User/Role

 Check each user or user role to exclude from receiving this notification.

 Method

 The notification types that are not to be sent to the associated user or user role: Text , Email , or both.

 For example, if you select Leasing Manager [Role] and choose a value of Text , then any user with the user role of Leasing Manager does not receive this notification as an email, but still receives the text notification if a text message is configured.

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

 In the Text Message field, you can edit the content of the text message that generates each time the notification is sent.

 The following fields are available in this tile:

 Field
 Description

 Text Message

 The content of the text message that generates each time the notification is sent.

 To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Scheduled Time

 The time at which the text notification is sent after conditions are met. This time should be set within the legal time window that businesses can send text messages according to state laws.

 Remove a Notification Setup

 To permanently delete a notification setup from Rent Manager , in the Notification Setups section, click arrow_forward Delete on the setup you wish to remove. This action cannot be undone.

 To disable a notification without permanently deleting it from Rent Manager , select the notification setup from the list and uncheck the Active box. Then click Save . This configuration setup for the notification is no longer sent to recipients, but can be reactivated at any time.
