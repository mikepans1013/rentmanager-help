# Add a Utilities Posting Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Utilities-Add.htm

You can use this Task Automation to reduce the time needed to add or edit recurring utility charges and the occurrence of errors from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent. For more information about manual postings, refer to Post Utilities .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post utilities
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To add automated utilities postings, do the following:

 -
 Go to   arrow_forward   Administration , then go to Automation arrow_forward Task Automation arrow_forward Utilities .
The Utility Automation Schedules page displays.

 -
 Click   Add Schedule .

 -
 Enter a Name for the automation as it displays in the list on the Utilities Automated Posting page.

 Step 2: Set Up Schedule Options

 In the Schedule Options section, set up the posting scheduling, including when the automation starts and ends and how frequently fees post. To set up the posting schedule, enter the following information:

 Field
 Description

 Start Date

 A current or future date to determine when this posting schedule begins.

 End By

 A future date to determine when this posting schedule ends. If this field is left blank, the schedule continues to post indefinitely or until an end date is entered.

 Run Day

 The date on which the automated posting occurs. Rent Manager automatically posts these utilities early in the morning of the chosen Run Day . They are dated with the selected Post Day .

 More Information

 In order for the utilities to post, meter readings must already be completed and entered before the Run Day . For more information about readings, refer to Add Meter Readings .

 Post Day

 The date on which utility charges transactions are added to the tenant account.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, transactions are dated for the 30 th .

 Last Run Date

 The date on which the most recent posting occurred.

 Next Run Date

 The next date on which the posting occurs, calculated using the Last Run Date .

 Notification Email

 The email address of a Rent Manager user that receives a notification for each successful or failed automatic posting. If entering more than one email address, separate each with a semicolon (;).

 Include Details

 Includes posting details in the notification email sent to the Rent Manager user after an automatic posting has posted.

 Step 3: Select Properties and Utilities

 In the Properties section, select the Properties whose utility charges you are posting, or select a property Group . In the Utilities section, select the utilities to post. Only the utilities associated with the selected properties display.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 4: Select Posting Options and Save Automation

 To finish setting up the automation schedule, do the following:

 -
 In the Posting Options section, enter the following additional information based on how you want to changes to display:

 Option
 Description

 Post zero charges

 Posts utilities that do not have current consumption and calculated charges. The zero amount due is displayed on the tenant statement, even if that tenant is not a consumer of the utility.

 Use current meter reading date for charges

 Uses the date of the most recent meter reading instead of the date in the Post Day field.

 Create Invoices

 Generates invoices for the utility charge(s).

 Comment

 Any additional information to describe this charge displays on the associated invoice.

 CRE cap overages

 For tenants at properties with a Property Type of Commercial , the calculation method that Rent Manager uses if the utility charge exceeds the commercial recoverable expenses (CRE) cap amount established on the tenant's lease.

 Adjust

 Adjust the charge amount to not exceed the common area maintenance (CAM) cap.

 Allow

 Allow the charge to exceed the CAM cap.

 Skip

 Skip the charge if the amount exceeds the CAM cap.

 Transaction Memo

 Any additional information to describe this charge that displays in the description of this transaction.

 -
 When you are satisfied with the information you entered, click Save .
The utility posting automation schedule is added to Rent Manager and can be managed viewed on the Utility Automation Schedules page.

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
