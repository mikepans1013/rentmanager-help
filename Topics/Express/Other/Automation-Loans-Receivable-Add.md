# Add a Loans Receivable Posting Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Loans-Receivable-Add.htm

You can use this Task Automation to save time managing loans receivable and to reduce errors from manual entry. You can create a variety of loans receivable automations to meet the needs of each of your properties. For example, if tenants at one property pay their loans by the 5 th of the month, but at another property, loans are due on the 15 th of the month, you can create two different automation schedules in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post loans receivable
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To create a new task automation for posting loans receivable, do the following:

 -
 Go to   arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Loans Receivable .
The Loans Receivable Automation Schedules page displays.

 -
 Click   Add Schedule .

 -
 Enter a Name for the automation to display in the list on the Loans Receivable Automation Schedules page.

 Step 2: Set Up Schedule Options

 In the Schedule Options section, set up the posting scheduling, including when the automation starts and ends and how frequently fees post. To set up the posting schedule, enter the following information:

 Columns
 Description

 Start Date

 The first date on which the posting schedule goes into effect.

 More Information

 This is not necessarily the first date that the schedule executes. The options configured in the Schedule Options section on the Loan Automation Schedule Details pop-up determine the first run date.

 End By

 The posting schedule's expiration date. If this field is blank, the schedule continues to post indefinitely or until a date is entered in the End By field on the Loan Automation Schedule Details pop-up.

 Run Day

 The day of the month on which the automated posting occurs. Rent Manager automatically posts these loans receivable early in the morning of the chosen Run Day .

 Post Day

 The date on which the loans receivable transactions are added to the tenant account.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, transactions are dated for the 30 th .

 Notification Email

 The email address that receives a notification for each successful or failed automatic posting. If entering more than one email address, separate each with a semicolon (;).

 Include Details

 Includes additional information in the notification email sent after an automatic posting.

 Step 3: Select Properties

 Choose which properties are included in this automation schedule. You can select multiple properties, or you can select an account group in the Group drop-down.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 4: Save Automation

 When finished, click Save . The loan automation schedule is added to Rent Manager .

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
