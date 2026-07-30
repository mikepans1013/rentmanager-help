# Add a Management Fee Automated Posting

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Management-Fee-Add.htm

If you are a fee-based management company, you collect management fees for the properties you manage. After you collect receivables—such as rent and late fees—and pay any bills, you can calculate and post your management fees. This process transfers funds from the trust accounts of your managed properties to the operating bank account of your management company.

 You can use this Task Automation to save time posting management fees and to reduce errors from manual entry. Set up automation schedules to ensure that your postings are timely and consistent. For more information about manual postings, refer to Post Management Fees .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post management fees
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To automate management fee posting, do the following:

 -
 Go to   arrow_forward   Administration , then go to Automation arrow_forward Task Automation arrow_forward Management Fees .

 -
 Click Add Schedule .

 -
 Enter a Name for the schedule.

 Step 2: Set Up Posting Schedule

 In the Schedule Options section, set up the posting scheduling, including when the automation starts and ends and how frequently fees post. To set up the posting schedule, enter the following information:

 Field
 Description

 Start Date

 The first day on which the automation schedule begins calculating fees.

 End By

 The date by which the posting schedule ends. If this field is blank, the schedule continues to post indefinitely until a date is entered in this field.

 Posting Type

 The frequency with which the automation runs (daily, weekly, or monthly). For weekly and monthly schedules, the automation runs in the early morning (ET) on the day of the Run Day and dates charges based on your Post Day/To Day . For daily postings, the automation runs on the Run Day , and fees for the previous day's transactions post early the next morning.

 Run Day

 The day on which the automated schedule calculates fees and adds them to recipients' accounts. For example, for monthly schedules, a Run Day of 1 adds the charges to accounts on the first day of the month. Rent Manager automatically posts these fees early in the morning of the chosen Run Day .

 Post Day/To Day

 The day on which fees created by this schedule are due.

 The order in which the Run Day and the Post Day/To Day occur impacts the calculation method. If the Run Day is before the Post Day/To Day , management fees are calculated from the previous period's fees. Alternatively, if the Run Day is on or after the Post Day/To Day , management fees are calculated from the current period's fees.

 For example, if the Run Day is 5 and the Post Day/To Day is 31 , management fees are posted for the entirety of the previous month.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the fees with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, fees are dated for the 30 th .

 Notification Email

 The email address of a user that receives a notification for each successful or failed automatic posting. Separate multiple email addresses with a semicolon (;).

 Include Details

 Includes additional information in the notification email sent after an automatic posting.

 Step 3: Select Properties or Owners

 Choose which properties and owners are included in this automation schedule. You can select multiple properties and owners, or you can select account groups in the Group drop-down.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 4: Select Run Options

 To finish setting up the automation schedule, do the following:

 -
 In the Run Options section, select from the following options:

 Field
 Description

 Payment Method

 How you want the property or owner to pay the fees.

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for added security.

 Check

 A physically routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment that allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 Override Comment

 If you want to override the default comment for management fee posting, enter a comment here to be used on any checks, bills, or transactions created as a result of this management fee posting.

 Group checks/bills by bank account

 Creates a single check or bill to the management company for each bank account affected by the management fee posting, with the properties itemized on the check/bill.

 -
 Click Save .
The management fee automation is added and begins running on the schedule's next Run Day .

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
