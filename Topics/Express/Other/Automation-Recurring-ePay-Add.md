# Add a Recurring ePay Automation Schedule

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Recurring-ePay-Add.htm

If you utilize recurring ePay to process batch payments for tenants, you can set up an automation schedule for your properties to post those batches on a regular basis. Automation schedules allow you to customize the day the transactions are added to tenant accounts, the day they are due, and the email address(es) to notify when the process runs. You can also create multiple schedules for different properties to ensure that charges post correctly.

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post recurring ePay
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Warning

 The first time a recurring ePay batch is posted, it runs for all tenants with a post date within the previous two weeks regardless of whether it matches the automated post date. Following the first posting, the automated process follows your specified posting schedule.

 To add a new automated recurring ePay posting schedule, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Recurring ePay .
The Recurring ePay Automation Schedules page displays.

 -
 Click Add Schedule . When prompted, enter your ePay Password and click Authenticate .
The Add Recurring ePay Automation Schedule page displays.

 -
 Enter a Name for this automated recurring ePay posting schedule. This name displays on the Recurring ePay Automation Schedules page.

 -
 By default, Active is checked and the automated posting schedule is enabled. If Active is unchecked, this posting schedule does not post automatically, regardless of its Start Date and End By dates.

 -
 In the Schedule Options section, set up the posting schedule using the following fields:

 Field
 Description

 Start Date

 The date that the posting schedulegoes into effect.

 End By

 A future date to determine when this posting schedule ends. If this field is left blank, the schedule continues to post indefinitely or until an End By date is entered.

 Run Day

 The day of the month on which the automated posting occurs. Rent Manager automatically posts recurring ePay to tenant accounts early in the morning of the chosen day, and sets the payments' due date with the selected Post Day .

 More Information

 If you enter a monthly Run Day of 31 , Rent Manager posts the tenant payments on the last day of each month, regardless of the number of days in the month. For example, with a Run Day of 31 and posting for April, payments are dated for the 30 th

 Post Day

 The day of the month that Rent Manager uses to determine the due date of the payments created through this automated posting.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, transactions are dated for the 30 th .

 Notification Email

 The email address to which a notification for each successful or failed automatic posting is sent. If entering more than one email address, separate each with a semicolon (;).

 To include additional report information in the email, check Include Details .

 -
 In the Properties section, select each property to be included in the scheduled recurring ePay posting schedule. To include all current and future properties, check *** <All Properties> . Alternatively, select a property Group from the drop-down list.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 Click Save .
The automated posting schedule is activated.

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
