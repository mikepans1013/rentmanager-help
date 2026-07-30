# Tenant Signable Document Aging (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/Tenant-Signable-Document-Aging.htm

The Tenant Signable Document Aging automated notification can be configured to send an email or text message to tenants when a signable document has been waiting on their signature for a set amount of time. This can be used to streamline the process of requesting that signable documents be returned in a timely fashion.

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

 You can create multiple configurations so that recipients can receive alerts at different intervals. For example, you may wish to alert tenants when the document has been waiting for their signature for two, five, and seven days. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select Tenant Signable Document Aging .
The Automated Notification: Tenant Signable Document Aging page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration or click Add to create a new setup.
The setup's details display.

 -
 At the top of the page, check or uncheck the Add to History option. If checked, this notification is automatically recorded as a history/note item on each recipient's account in Rent Manager each time this notification is sent out. If unchecked, the notification is sent to the recipient(s), but no history/note item is created.

 -
 In the Filters tile's Properties field, select each property that should receive alerts when the automated notification's conditions are met. To include all current and future properties in the notification, check *** < All Properties > .

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 In the Days waiting for signature field, enter the number of days that should pass without the tenant's signature before a notification is sent. For example, if you would like the notification to be sent when the document has been waiting for five days, enter 5 .

 Step 2: Configure Recipients

 The next step is to determine who receives this configuration of the notification, and whether they want to receive it by Email , Text , or Email and Text .

 In the Recipients tile header, click arrow_forward Add Signer to include tenants who have not yet signed their documents.

 Step 3: Enter Messages

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
