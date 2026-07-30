# Add a Tenant Statement Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-Tenant-Statement-Add.htm

Tenant statements provide your residents with a breakdown of their charges, credits, and payments over a date range. Typically, statements are distributed to tenants at the end of each billing period. You can use this Task Automation to ensure that statements are sent promptly and keep your tenants informed on their accounts' standing.

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate tenant statements
 Add, View

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 To add a tenant statement automation, go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward Tenant Statements and click Add .

 Step 1: Enter a Name

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 When managing multiple automation schedules, it is important to have a unique descriptor for each schedule to know at a glance what the schedule runs for. Enter a description of the automation schedule in the Name field. By default, Active is checked to allow use of the automation once its saved.

 Step 2: Set Schedule Options

 Use the following fields to establish the automation schedule to be used for delivering tenant statements:

 Field
 Description

 Start Date

 The date on which the tenant statement automation begins.

 End By

 The date on which the tenant statement automation ends. The End By date is the final day that the automation can run. If the automation should run indefinitely, leave this field blank.

 Type

 The frequency of which the automation runs.

 More Information

 If you have properties where some tenants receive monthly statements and others receive weekly statements, you need to set up separate posting schedules to handle each posting type.

 Monthly

 Automate this schedule to post statements monthly.

 Weekly

 Automate this schedule to post statements weekly. The options for Run Day changes from days of the month to days of the week.

 Run Day

 The date for monthly schedules or the day of the week for weekly schedules on which the automated posting should occur. Rent Manager automatically posts the statements early in the morning of the chosen Run Day .

 Notification Email

 The email address of a user that receives a notification for each successful or failed automatic posting. Separate multiple email addresses with a semicolon (;).

 Include Details

 Include full details of the automation, such as which properties it ran for and how many statements were sent for each statement method, in the notification email.

 Add statements to tenant's History/Notes

 Adds an attachment of the tenant's statement to their history/notes. When selected, you can choose a history category from the Category drop-down.

 Properties

 The properties for which the scheduled automation runs. Alternatively, select a property Group from the drop-down list. To include properties that are no longer active, check Show Inactive Properties .

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 3: Customize Statement Options

 Use the fields below to customize the information included in each tenant statement as well as which tenants receive them. When finished, click Save to confirm your options.

 Field
 Description

 Statement

 The type of tenant statement sent with the automation.

 Statement From Date

 The first day of the period for which the tenant statements are generated. For example, if you select Start of Last Week , the generated tenant statement shows only relevant charges starting from the first day of the previous week.

 Statement To Date

 The last day of the period for which the tenant statements are generated. For example, if you select End of Last Week , the generated statement shows only relevant charges up to the last day of the previous week.

 Tenants to Include

 The types of tenants for which the statement automation runs. Statements can be run for tenants with the status of Current , Past , and/or Future .

 Send to tenants whose default statement method is:

 The method used to deliver statements to tenants. Statements in this automation are sent only to tenants whose default statement methods match the options selected in this field.

 VPO

 Sends statements via Virtual Post Office (VPO) to tenants who have VPO set as their default statement method.

 Email

 Sends statements via email to tenants who have Email Attachment set as their default statement method.

 More Information

 Automated emails come from donotreply@rentmanager.com. When creating a message for an email, consider entering contact information (e.g., reply email address) so the recipient can reply if they have questions or need support.

 Recipients to include

 When Email is selected, you can choose which tenants or tenant contacts receive statements sent in this automation.

 Primary Contact

 Only sends statements to the tenant or contact that is set to Primary .

 Contact Types

 Only sends statements to tenants or contacts with specified contact types.

 Tenant Address

 The tenant address to be used on the tenant statements. For example, select Primary to include the primary address found on the Tenant details page.

 Exclude records with zero amounts

 Exclude tenants with no open charges. When this option is checked, statements are still generated for tenants who have a credit (i.e., a positive balance) on their account.

 Show unposted per day late fees to date

 Include the total amount of per-day late fees that accumulated for each tenant.

 Show daily interest loans

 Include the total amount of daily interest that accumulated on each tenant's loan.

 Use account groups

 Includes the total balance for the tenant account group.

 Utility Options

 The Metered Utilities information that displays in the statement.

 Show meter readings and usage

 Includes details from a tenant's meter readings, if applicable, in the statement. This includes the current reading, the previous reading, and usage for each posting. For more information, refer to Meter Readings (Page) .

 Show calculation details (MU Plus)

 Includes details about the Metered Utilities Plus calculations, if applicable, in the statement.

 Metered Utilities Plus calculations allow you to combine rates with tenant consumption along with other fees and/or discounts to determine the final utility charge for a tenant. For more information, refer to Set Up MU-Plus Rate Calculations .

 Comment

 Enter an optional custom note to display at the bottom of each tenant's statement.

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
