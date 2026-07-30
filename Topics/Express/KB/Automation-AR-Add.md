# Add an AR Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Automation-AR-Add.htm

With Accounts Receivable (AR) Automation, you can send notices via email, text, Phone Broadcasting , and Virtual Post Office (VPO) to a list of tenant contacts at your properties who have open or upcoming charges without having to worry about human error or meeting deadlines. Each alert is personalized for various intervals of delinquency, allowing you to easily change the tone of the alerts the longer the tenant is delinquent. These alerts can make actively seeking payments from tenants a completely automatic process to streamline workflows for your business.

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 AR automated schedules
 View, Add, Edit

 For more information, refer to Control User Access .

 Step 1: Create an Automation Schedule

 To create a new schedule in the AR Automation Schedules page, do the following:

 -
 Go to   arrow_forward   Administration , then go to Automation arrow_forward Task Automation arrow_forward Accounts Receivable .
The AR Automation Schedules page displays.

 -
 In the Schedules section, click   Add .

 -
 Enter a Schedule Name to display on the AR Automation Schedules page.

 -
 Select an optional Template to be used for this AR Automation. By default, <None> is selected.

 -
 Click Save & Close to complete the AR Automation schedule creation process and close the pop-up. Alternatively, click Save & New to finish adding the AR Automation schedule and refresh the pop-up to create another schedule.

 Step 2: Add Schedule Actions

 Once an AR Automation schedule is created, details must be configured before any notices are sent to tenants. To add details to an existing or new schedule, do the following:

 -
 Select an AR automation schedule from the list on the left.

 -
 Click   Add Notification .

 -
 In the Schedule Options tile, establish the conditions for sending the scheduled notification.

 Field
 Description

 Day of Month

 Notify tenants that meet the filter criteria on the specific day of the month selected from the drop-down list. To always send notifications on the final day of the month, select * Last day of month .

 Due Date

 Notify tenants that meet the filter criteria relative to the date that unpaid charges are due. Using the drop-down list, you can select whether notifications are sent a specified number of days after the most recent charge's due date, a number of days after the oldest charge's due date, a number of days before the charge is due, or on the actual due date.

 -
 In the Charge Types field, select the charge type(s) to be examined for the notice. If tenants are charged with any of the specified types, they receive the notice on the selected Day of Month or relative to each charge's Due Date .

 -
 In the Balance Filter field, determine the total balance each specified Charge Type must reach in order to receive the notice. For example, if you want to notify only tenants with an unpaid balance of $100.00 or more, select >= Greater than or equal to and enter 100.00 . By default, all tenants with a charge balance greater than $0 are included.

 -
 If you selected Day of Month as the basis for sending this notification, you can set it to trigger for only filtered charges dated in that month by selecting Use current month charges only .

 Step 3: Select the Recipient(s)

 In the Recipient tile, establish the tenant contact(s) who should scheduled AR notifications by doing the following:

 -
 In the Contacts field, select one of the options described below:

 Option
 Description

 All

 All active contacts receive notifications.

 Contact Types

 All active contacts with the selected contact type(s) receive notifications.

 Contact UDFs

 All active contacts with the selected user-defined Field and corresponding Value receive notifications.

 Primary

 Only the contact indicated as Primary receives notifications.

 -
 In the Tenants to Include field, select the status(es) of tenants who should receive scheduled notifications (i.e., Past , Current , and/or Future ) from the drop-down list. For example, if you have an automation set for five days past due only tenants who have received a recent charge to be five days past due on is notified. Unless a past tenant is receiving a new charge, their charges will likely not meet those criteria for a charge that is five days past due.

 Step 4: Customize Message

 In the Message tile, choose the delivery method(s) for scheduled notifications and customize the message sent to the contact(s). In the Message Type field, select one of the options described below.

 Email

 If you select the Email or Email and Text message type, you can create a template that sends a personalized message to each tenant each time the notice is triggered. The body of your email message can be generated with optional scripting using either plain text or a letter template. Adjust the following fields to configure your email notice.

 More Information

 Automated emails come from donotreply@rentmanager.com. When creating a message for an email, consider entering contact information (e.g., reply email address) so the recipient can reply if they have questions or need support.

 Field
 Description

 Email Body

 How the email notice is generated each time it is sent to tenant contacts.

 Plain Text

 Creating the Email Body using Plain Text allows you to create a message using plain text and scripting.

 -
 Select that the Email Body is generated through Plain Text .

 -
 Enter the message to be generated each time the notice is sent. To create a dynamic scripting message, click Open Script Builder .

 -
 Click OK .
The schedule detail is saved, and sends a notice via email to tenants each time the conditions are met.

 Template

 Creating the Email Body using a Template allows you to select one of your previously created letter templates to generate each time the notice is sent.

 -
 Select that the Email Body is generated through a Template .

 -
 Select one of the tenant-type letter templates from the drop-down list.

 -
 Click OK .
The schedule detail is saved, and sends a notice via email to tenants each time the conditions are met.

 Subject

 The title of the email notice.
 To create a dynamic scripting subject, click Open Script Builder .

 Phone Broadcast

 If you select the Phone Broadcast message type, tenants are configured to receive a Phone Broadcasting of a voice message you recorded each time the notice is triggered.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Adjust the following fields to configure your voice message notice.

 Field
 Description

 Include balance in message

 The tenant's account balance is recited at the end of the voice message. When enabled, in the Message After Balance field, select another previously recorded voice message that continues after the tenant's account balance is recited.

 More Information

 With this option selected, end the recorded Message in a way that would introduce the tenant's balance. For example, Premiere Management Company would like to inform you that your current balance is... .

 Message

 A previously recorded Phone Broadcasting message to be sent to the tenant contact(s). For more information, refer to Create a Phone Broadcast .

 Scheduled Time

 The time to send the broadcast when the conditions established in the Schedule Options tile are met. All times are in Eastern Daylight Time (EDT).

 Text

 If you select the Text or Email and Text message type, tenants are configured to receive a text message you created each time the notice is triggered.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Adjust the following fields to configure your text message notice.

 Field
 Description

 Scheduled Time

 Time to send the text message once the Days Late and Balance Filter conditions have been met. All times are in Eastern Daylight Time (EDT).

 Text

 The body of the text message.
 To create a dynamic scripting text message, click Open Script Builder .

 More Information

 Text messages can be up to 160 characters in length. Any text after 160 characters is not sent.

 VPO

 If you select the VPO action, tenant contacts are configured to receive a letter through Virtual Post Office (VPO) . You can select a template that sends a personalized letter to each tenant contact when the notice is triggered. A letter template must be designated as VPO-ready before it can be selected. To send notices through VPO, select a tenant-type VPO-ready Letter Template from the drop-down list.

 Step 5: Save Automation

 With the settings established for this schedule action, click OK and add additional actions to the automation schedule as needed. Once all needed schedule actions are added to the automation, click Save . The automation is now set to trigger notifications based on the automation's scheduled actions.

 Step 6: Assign Schedules

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 After creating and saving your AR automation schedules, you must assign the schedules to your properties. Once a property is assigned a schedule, tenants at that property that meet the schedule’s conditions receive notifications.

 To assign a schedule to a property, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property.

 -
 On the Other Information tile, select your preferred schedule from the AR Automation Schedule drop-down menu.

 Related Preferences

 You can select <System Default> from the drop-down menu to assign the Default Schedule established in system preferences. For more information, refer to Task Automation (System Preferences)

 -
 Click Save .
The schedule is now assigned to the property.
