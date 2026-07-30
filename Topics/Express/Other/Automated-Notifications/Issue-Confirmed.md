# Issue Confirmed (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/Issue-Confirmed.htm

The Issue Confirmed automated notification can be configured to send an email to tenants when their service issue has a time slot scheduled and confirmed via the Maintenance Scheduling feature. This is used to notify tenants of approximately when to expect a maintenance technician to arrive if the tenant requested to be present during service.

 If you do not set up this notification, the tenant associated with the issue receives a default system email alerting them to the scheduled issue's confirmation. Setting up this automated notification overrides the system default notification and allows you to customize the message tenants receive when their scheduled issue is confirmed.

 More Information

 This notification applies only if you have the Maintenance Scheduling feature, which is a licensed feature available only in Rent Manager Express and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 If you have the Maintenance Scheduling feature and are looking to set it up for the first time, refer to Set Up Maintenance Scheduling .

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

 You can create multiple configurations so that recipients for different maintenance groups can receive alerts. For example, you may wish to have one maintenance group send a notification only to the tenants, but have another maintenance group send a notification to the tenants and an additional external recipient. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select Issue Confirmed .
The Automated Notification: Issue Confirmed page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration, or click Add to create a new setup.
The setup's details display.

 -
 At the top of the page, check or uncheck the Add to History option. If checked, this notification is automatically recorded as a history/note item on each recipient's account in Rent Manager each time this notification is sent out. If unchecked, the notification is sent to the recipient(s), but no history/note item is created.

 -
 In the Filters tile's Maintenance Group field, select each maintenance group that applies to this setup. Only issues that are part of the selected maintenance group(s) receive this alert configuration. Check *** <All Maintenance Groups>  to include all current and future maintenance groups.

 -
 In the Scripting Type section, select which scripting class to use for any scripts used in the Email or Text sections: Tenant class or Service Manager class. For more information, refer to Tenant Class (Script) or Service Manager Class (Script) .

 Step 2: Configure Recipients

 The next step is to determine who receives this configuration of the notification, and whether they want to receive it by Email , Text , or Email and Text . You can choose to include one or multiple recipients.

 In the Recipients tile header, click and select from the following options:

 Option
 Description

 Add Submitting Tenant

 Include the tenant who submitted the issue via Tenant Web Access or rmResident .

 Add Tenant

 Include the tenant associated with the issue. If all tenants in an account group should receive this notification, check Notify all tenants within account group . For more information, refer to Manage Account Groups .

 In the Select contacts to include field, specify which contact(s) on the tenant account receive this notification.

 Each option is described below.

 All Contacts

 Includes all contacts listed on the tenant account.

 Primary Contact

 Includes only the contact selected as Primary for the tenant account.

 Contact Type

 In the drop-down, select each contact type(s) to include as a recipient. For example, if you select Occupant and Co-signer , then only contacts with one of these values selected in the Contact Type field receive this notification.

 Add External Recipient

 Include a person who does not have a tenant account in Rent Manager . Enter their information into the available fields described below.

 Display Name

 The name of the recipient, for internal reference.

 Email Address

 The email address to which the email notification will be sent. If they should not receive an email notification, leave this field blank.

 Phone Number

 The full ten-digit phone number to which the text notification will be sent. If they should not receive a text notification, leave this field blank.

 Step 3: Configure Exclusions

 If there are any exceptions to the configured recipients who should not receive this alert, you can establish an exclusion for them. Exclusions do not receive this configuration of the notification. Exclusions are identified in the Recipients tile by red text.

 For this notification , you can opt to exclude individual tenants or any tenants that have a specified user defined field (UDF) value.

 In the Recipients tile header, click arrow_forward Exclude Tenant . Then on the Exclude Tenants pop-up, enter information into at least one of the available fields and click OK .

 Field
 Description

 Tenant Exclusions

 Excludes specific tenant accounts. In the Tenant Exclusions section header, click . Then in the Tenant Search pop-up, search and select the tenant account you wish to exclude. Repeat for each tenant account that needs to be excluded.

 User Defined Field Exclusions

 Excludes recipients based on a tenant-type user defined field (UDF) value. In the first drop-down, select a UDF. Then in the second drop-down, enter or select the value. All tenant recipients with this value for the selected UDF do not receive the notification.

 For example, if you select a UDF named Receives Notifications? and then select a value of No , then tenants with No set as the value for that UDF do not receive this notification.

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

 From Email

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
