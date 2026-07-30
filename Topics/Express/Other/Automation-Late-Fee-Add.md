# Add a Late Fee Posting Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Late-Fee-Add.htm

Late fees assist in creating additional charges for tenants with delinquent balances and determine how those fees are accrued. Task Automation can reduce the time spent adding or editing late fees and curtail errors that occur from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent.

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Post late fees
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To create a new task automation for posting late fees, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Late Fees .
The Late Fee Automation Schedules page displays.

 -
 Click   Add Schedule .

 -
 Enter a unique Name for the automation to display in the list on the Late Fee Automation Schedules page.

 Step 2: Set Up Posting Schedule

 In the Schedule Options section, set up the posting scheduling, including when the automation starts and ends and how frequently fees post. To set up the posting schedule, enter the following information:

 Field
 Description

 Start Date

 The first date that the posting schedule goes into effect.

 End By

 The posting schedule's expiration date. If this field is blank, the schedule continues to post indefinitely until a date is entered in this field.

 Run Day

 The date on which the automated posting occurs. Rent Manager automatically calculates and posts the late fees due early in the morning of the chosen Run Day .

 Post Day

 The date on which late fee transactions are dated with when they are posted on the Run Day .

 The date on which late fee transactions are added to the tenant account.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the fees with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, fees are dated for the 30 th .

 Notification Email

 The email address of a user that receives a notification for each successful or failed automatic posting. Separate multiple email addresses with a semicolon (;).

 Include Details

 Includes additional information in the notification email sent after an automatic posting.

 Step 3: Select Properties

 In the Properties section, check the properties you want to include when posting late fees.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 4: Select Filter Options

 Enter the desired information in the Filters section, as described below.

 Field
 Description

 Charge Types

 Transactions associated with these charge type(s) are examined by Rent Manager when determining if a tenant is delinquent.

 Delinquent Amount

 Tenants with a delinquent balance greater than (>) or less than (<) the specified value are examined by Rent Manager when determining if a tenant is delinquent.

 Days Delinquent

 Transactions that are delinquent within the specified number of days from your Run Day are examined by Rent Manager when determining if a tenant is delinquent. This is adjusted by the value in the As of offset field.

 As of offset

 Use this value to adjust the day on which Rent Manager examines if a tenant is considered delinquent. This is valuable when you want to determine tenant delinquency as of a date before for the Run Day .

 For example, if the Run Day is 5 and the As of offset is -1 , Rent Manager looks for tenants who are delinquent based on all filtering criteria on the 4th instead of on the 5th. The calculated late fees still post on the Run Day and are dated with the Post Day .

 User Defined Field

 Entities that have the User Defined Field (UDF) and User Defined Values entered are examined by Rent Manager when determining if a tenant is delinquent. You can use tenant, unit, or property UDFs.

 For example, using a property UDF associates all unit, property, and tenant active late fees that match the UDF value.

 Active lease only

 Tenants who do not have a Move Out day or whose Move Out day is in the future are examined by Rent Manager when determining if a tenant is delinquent.

 Last charge only

 The most recent open charge of the selected Charge Types on the tenant's account are examined by Rent Manager when determining if a tenant is delinquent.

 Step 5: Select Run Options

 To finish setting up the automation schedule, do the following:

 -
 Enter the desired information in the Posting Options section, as described below.

 Field

 Description

 Fee Type

 The charge type used when adding late charges to delinquent tenants.

 Comment

 A comment added to late fee charges that are posted. This comment also displays on printed tenant statements.

 Override late fee defaults

 Override the late fee settings inherited from the associated property and tenant accounts.

 Late fee percent

 A percentage of the tenant's remaining balance is charged as a late fee.

 Apply late fee percent to full amount

 A percentage of the full charge amount is charged as a late fee.

 Late fee amount

 A flat amount is charged as a late fee.

 Script

 A custom calculation that uses scripting to determine the amount to charge as a late fee. For more information, refer to Scripting .

 Add history item for each charge

 A history/note item is added to tenant accounts that confirm late fees were posted to the delinquent tenant.

 -
 Click Save .
The new late fee posting schedule is added.

 Related Preferences

 If the options to Require 'write letters' before posting late fees and/or Require printout before posting late fees are enabled, you are be warned that automating late fee postings in Rent Manager Online (RMO) override those preferences. For more information, refer to Posting Late Fees (System Preferences) .

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
