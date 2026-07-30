# Management Fees Automated Posting (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Automation-Management-Fee-Schedules.htm

You can use this Task Automation to reduce the time needed to manage posting management fees and the occurrence of errors from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent.

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post management fees
 View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 To view your automated management fee postings, go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Automate Management Fees .

 Column Descriptions

 The following columns are available on this page.

 Columns
 Description

 Name

 The name of the posting schedule to distinguish differences in multiple automations.

 Active

 A displays if the posting schedule is currently enabled.

 Type

 The frequency at which the fees are posted ( Monthly , Weekly , or Daily ).

 Run Day

 The date for monthly schedules or the day of the week for weekly schedules on which the automated posting should occur. Rent Manager automatically posts these fees early in the morning of the chosen Run Day .

 Posting Day

 The date for monthly schedules or the day of the week for weekly schedules on which management fee transactions are dated with when they are posted on the Run Day .

 More Information

 If you enter a monthly Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for February, transactions will be dated for the 28 th .

 Properties

 The Short Name of each property associated with the schedule, or if more than one property is selected, the short name of the first property is displayed, followed by the number of additional selected properties.

 Start Date

 The first date that the posting schedule goes into effect.

 More Information

 This is not necessarily the first date that the schedule executes. The options configured in the Schedule Options section of the Management Fee Automated Posting Detail pop-up determine the first run date.

 End Date

 The posting schedule's expiration date. If this field is blank, the schedule continues to post indefinitely or until a date is entered in the End By field on the Management Fees Automated Posting Detail pop-up.

 Last Run Date

 The date on which the most recent posting occurred.

 Next Run Date

 The next date on which the posting occurs, calculated using the Last Run Date and the Run Day selected in the Schedule Options section.
