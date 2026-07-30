# Add a Recurring Charge Posting Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Recurring-Charge-Add.htm

Recurring charges are charge templates assigned to property, unit type, unit, or tenant records that are posted regularly to associated tenant accounts. Task Automation can reduce the time spent adding or editing recurring charges and curtail errors that occur from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent. For more information about manual postings, refer to Post Recurring Charges .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Post recurring charges
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To create a new task automation for posting recurring charges, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Recurring Charges .
The Recurring Charges Automation Schedules page displays.

 -
 Click Add Schedule .

 -
 Enter a unique Name for the automation to display in the list on the Recurring Charges Automation Schedules page.

 Step 2: Set Up Posting Schedule

 In the Schedule Options section, set up the posting scheduling, including when the automation starts and ends and how frequently recurring charges post. To set up the posting schedule, enter the following information:

 Field
 Description

 Start Date

 The current or future date to determine when this posting schedule begins.

 End By

 The current or future date to determine when this posting schedule should end. If this field is left blank, the schedule continues to post indefinitely or until an end date is entered.

 Posting Type

 The frequency at which the charges are posted.

 More Information

 If you have properties where some tenants pay monthly and others pay weekly or daily, you need to set up separate posting schedules to handle each posting type.

 Monthly

 Automate this schedule to post recurring charges monthly.

 Weekly

 Automate this schedule to post recurring charges weekly. The options for Run Day and Post Day changes from days of the month to days of the week.

 Daily

 Automate this schedule to post recurring charges daily.

 Run Day

 The calendar date (for monthly schedules) or the day of the week (for weekly schedules) on which the automated posting occurs. Rent Manager automatically posts these recurring charges early in the morning of the chosen Run Day .

 Post Day

 The calendar date (for monthly schedules) or the day of the week (for weekly schedules) on which recurring charges transactions are added to the tenant account.

 If the Post Day is the same or higher than the Run Day , transactions are dated on the same month it is run on. For example, using a Run Day of 1 and a Post Day of 6 will be run and dated within the same month.

 If the Post Day is less than the Run Day , transactions are dated on the month following when it is run on. For example, using a Run Day of 15 and a Post Day of 1 will be run on the 15 th of the same month and dated for the 1 st of the following month.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, transactions are dated for the 30 th .

 Notification Email

 The email address of a user that receives a notification for each successful or failed automatic posting. Separate multiple email addresses with a semicolon (;).

 Include Details

 Includes additional information in the notification email sent after an automatic posting.

 Step 3: Select Properties

 Choose which properties and owners are included in this automation schedule. You can select multiple properties and owners, or you can select account groups in the Group drop-down.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 4: Select Posting Options

 To finish setting up the automation schedule, do the following:

 -
 In the Posting Options section, enter information and make selections in the following fields:

 Field

 Description

 Use rent due day for posting

 Posted charges use the Due Day set on the tenant's account instead of the Post Date .

 Post zero charges

 If checked, and the recurring charge amount is zero, a one-time $0.00 charge is added to the tenant's account. This is helpful for confirming charges were posted even if there is not an amount to be charged.

 Post utilities

 Metered utility usage charges for tenants of the selected properties are posted in addition to the automated recurring charges.

 Post loans

 Loan principal charges for borrowers of the selected properties are posted in addition to the automated recurring charges.

 Post RUBS

 Ratio utility billing system (RUBS) utility charges for tenants of the selected properties are posted in addition to the recurring charges.

 CRE setup cap overages

 Determines how the posting should handle a charge amount greater than the commercial recoverable expenses (CRE) cap.

 Adjust

 The charge amount is adjusted to not exceed the CRE cap.

 Allow

 The charge is allowed to exceed the CRE cap.

 Skip

 The charge is skipped if the amount exceeds the CRE cap.

 Rent Charge Transaction Memo

 An optional message to add to the tenant transaction if the recurring charge to post is a rent charge.

 Invoice Comment

 A default comment to be added to each created invoice.

 To select a memorized comment to use as the memo, click .

 Generate invoices based on account group

 Creates a single invoice for recurring charges for each account group.

 -
 Click Save .
The new posting schedule is added and begins running on the schedule's next Run Day .

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
