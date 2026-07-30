# STR Reservation Upcoming Arrival (Automated Notification)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automated-Notifications/STR-Reservation-Upcoming-Arrival.htm

The STR Reservation Upcoming Arrival automated notification can be configured to send an email or text message to guests when a short term rental (STR) reservation arrival is set to occur within a selected number of days.

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

 You can create multiple configurations so that recipients for different properties can receive alerts. For example, you may wish to include all guests from notifications for one property, but exclude certain guests at another property. Each configuration displays in the Notification Setups list on the left of the page.

 More Information

 The option to send the notification as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Add or Edit a Setup

 To manage this notification, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications and select STR Reservation Upcoming Arrival .
The Automated Notification: STR Reservation Upcoming Arrival page displays.

 -
 In the Notification Setups section, select an existing setup from the list to edit its configuration or click   Add to create a new setup.
The setup's details display.

 -
 At the top of the page, check or uncheck the Add to History option. If checked, this notification is automatically recorded as a history/note item on each recipient's account in Rent Manager each time this notification is sent out. If unchecked, the notification is sent to the recipient(s), but no history/note item is created.

 -
 In the Filters tile, enter information into the following fields:

 Field
 Description

 Properties

 Each RV/Campground -type property that should receive alerts when the automated notification's conditions are met. To include all current and future properties, check *** < All Properties > . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Days until arrival

 The number of days until the guest's Arrival date that alerts should be generated.

 Step 2: Configure Recipients

 The next step is to determine whether submitting tenants should receive the notification by Email , Text , or Email and Text .

 In the Recipients tile header, click arrow_forward Add Guest .

 Step 3: Configure Exclusions

 If there are any exceptions to the configured recipients who should not receive this alert, you can establish an exclusion for them. Exclusions do not receive this configuration of the notification. Exclusions are identified in the Recipients tile by red text.

 For this notification , you can opt to exclude specific short term rental (STR) guests or any guests that have a specific user defined field (UDF) value.

 Related Preferences

 Depending on your settings in system preferences, guests may be tenant accounts or prospect accounts. Tenant-type guests can be filtered by tenant-type UDFs and prospect-type guests can be filtered by prospect-type UDFs. For more information, refer to Short Term Rental (STR) Reservations (System Preferences) .

 In the Recipients tile header, click arrow_forward Exclude Guest . Then, on the Exclude Guests pop-up, enter information into at least one of the available fields and click OK .

 Field
 Description

 Guest Exclusions

 Excludes specific guest accounts. In the Guest Exclusions section header, click . Then, in the Guest Search pop-up, search and select the tenant or prospect guest account you wish to exclude. Repeat for each guest account that needs to be excluded.

 User Defined Field Exclusions

 Excludes recipients based on a tenant-type or prospect-type user defined field (UDF) value. In the first drop-down, select a UDF. Then in the second drop-down, enter or select the value. All guest recipients with this value for the selected UDF do not receive the notification.

 For example, if you select a UDF named Receives Notifications? and then select a value of No , then guests with No set as the value for that UDF do not receive this notification.

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
