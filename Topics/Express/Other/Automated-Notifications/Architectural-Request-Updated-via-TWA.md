# Architectural Request Updated via TWA (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/Architectural-Request-Updated-via-TWA.htm

The Architectural Request Updated via TWA automated notification can be configured to send an email to property managers, other Rent Manager users, board/committee members, or external recipients when a tenant makes a change to an architectural request in Tenant Web Access (TWA) . This can be used to ensure that all applicable parties remain up-to-date on the architectural request's details.

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

 You can create multiple configurations so that recipients for different properties can receive alerts. For example, you may wish to notify only board members for one property, but notify only committee members for another property. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select Architectural Request Updated via TWA .
The Automated Notification: Architectural Request Updated via TWA page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration or click Add to create a new setup.
If you are adding a new setup, the Notification Type pop-up displays.

 -
 For a new setup, in the Select Notification Type field, select one of the options below and click OK .

 Option
 Description

 User

 Creates a notification setup that can be sent to specific Rent Manager users or user roles, property managers, or external contacts that do not have a user account.

 Board/Committee

 Creates a notification setup that can be sent to tenants established on the property's details page as board or committee members.

 The setup's details display.

 -
 At the top of the page, check or uncheck the Add to History option. If checked, this notification is automatically recorded as a history/note item on each recipient's account in Rent Manager each time this notification is sent out. If unchecked, the notification is sent to the recipient(s), but no history/note item is created. This option is available only for setups under Notify Board/Committee .

 -
 In the Filters tile's Properties field, select each association-type property that should receive alerts when the automated notification's conditions are met. To include all current and future association-type properties in the notification, check *** < All Properties > .

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 2: Configure Recipients

 The next step is to determine who receives this configuration of the notification, and whether they want to receive it by Email , Text , or Email and Text . You can choose to include one or multiple recipients. The available recipient options vary depending on the notification type, indicated by the Notification Setup section's drop-down headers.

 Notify User

 If the selected setup is under Notify User , you can configure this notification setup to be sent to specific Rent Manager users or user roles, property managers, or external contacts that do not have a user account.

 In the Recipients tile header, click and select from the following options:

 Option
 Description

 Add Property Manager

 Include the manager of the association-type property linked to the updated architectural request. Email notifications are sent to the email address entered on the property's details page in the Email field. Text notifications are sent to the phone number marked as Default on the property's details page.

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

 Notify Board/Committee

 If the selected setup is under Notify Board/Committee , you can configure this notification setup to be sent to members of the association-type property's board or committee.

 In the Recipients tile header, click and select from the following options:

 Option
 Description

 Add Current Board Members

 Include the tenants who are currently association board members as defined on the property's details page.

 Add All Committee Members

 Include the tenants who are currently active committee members. To send the notification only to members of specific committees, in the Select Committees field, select the committee(s) to notify.

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

 Step 4: Enter Messages

 Finally, you must create the email and/or text messages that each recipient receives. By default, a system-generated message displays for each. You can use the default message(s) as is, modify them, or type an entirely customized message. This email and/or text message is sent to each recipient when the automated notification is triggered.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 To create an email and/or text message for this setup, enter information into the available fields described below. Then click Save to complete the setup configuration.

 Email Message

 If at least one recipient is configured to receive email notifications, the Email tile displays with a default, system-generated message. The following fields are available in this tile:

 Field
 Description

 From Name

 The sender name that displays on the notification email the tenant receives, such as the name of the property manager or management company.

 Reply To Email

 The email address that displays as the sender of the notification email so that recipients can reply to the email notification. If you do not want recipients to reply to the notification email, leave this field blank.

 More Information

 Automated emails come from donotreply@rentmanager.com. When creating a message for an email, consider entering contact information (e.g., reply email address) so the recipient can reply if they have questions or need support.

 Subject

 The subject line of the email notification that summarizes the purpose of the email. To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Email Body

 The content of the email body that generates each time the notification is sent. To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Click Plain Text to type a custom message, or click Template to select one of your existing letter templates to use as the email body. For more information, refer to Letter/Email Templates (Page) .

 Text Message

 If at least one recipient is configured to receive text notifications, the Text tile displays with a default, system-generated message.

 More Information

 The first text sent to a recipient from the text messaging center and any texts sent via text broadcast or automated notification include an opt-out message. If a recipient opts out, that phone number cannot receive texts from Rent Manager unless they choose to opt back in. Recipients can opt out or opt in at any time. If a recipient wishes to opt back into text messaging, they must text Start from the phone number they opted out with to the number they originally requested to opt out of.

 Phone numbers that have opted out of text messaging are identified on the account's View Contacts pop-up, where the checkbox in the T column is replaced with the words Opted out in red text.

 In the Text Message field, you can edit the content of the text message that generates each time the notification is sent. To open the script builder for scripting assistance, click arrow_forward Script Builder .

 Remove a Notification Setup

 To permanently delete a notification setup from Rent Manager , in the Notification Setups section, click arrow_forward Delete on the setup you wish to remove. This action cannot be undone.

 To disable a notification without permanently deleting it from Rent Manager , select the notification setup from the list and uncheck the Active box. Then click Save . This configuration setup for the notification is no longer sent to recipients, but can be reactivated at any time.
