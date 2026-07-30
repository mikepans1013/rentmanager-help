# Add a GPR Posting Automation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Automation-GPR-Add.htm

Gross potential rent (GPR) is the maximum revenue that a property could generate if it was rented at full capacity and at full market value. Task Automation can reduce the time spent adding or editing GPR and curtail errors that occur from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent. For more information about manual postings, refer to Post Gross Potential Rent (GPR) .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post GPR
 Add, View

 Accounting
 Post gross potential rent
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Step 1: Create and Name the Schedule

 More Information

 If you need to edit an existing automation schedule, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 To create a new task automation for posting GPR, do the following:

 -
 Go to arrow_forward Administration , then go to Automation arrow_forward Task Automation arrow_forward GPR .
The GPR Automation Schedules page displays.

 -
 Click Add Schedule .

 Step 2: Select Properties

 In the Properties section, select each property to be included in the scheduled GPR posting. Alternatively, select a property Group from the drop-down list.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 2: Select the Chart Accounts For Each Account Type

 In the Journal Chart Accounts tile, you can create and manage multiple chart account configurations by unit type to accurately compare market rents to the appropriate rental income accounts. Multiple configurations are useful when users need to separate results, such as vacancy loss or loss to lease by income type, to capture a complete and accurate view of rental performance. The first configuration is considered the default configuration for the posting.

 More Information

 GPR is calculated using GL account activity, not the rental charge type(s) used at a property. Transactions for multiple rental charge types may be recorded under one GL account.

 To select the journal chart accounts for the GPR posting, do the following:

 -
 In the Journal Chart Accounts tile, click Account Configuration .

 -
 Edit a configuration by selecting each chart account type.

 Account
 Description

 Rental Income Account

 The primary source of funds for paying expenses as collected via the property's rent charges.

 Unit Types

 The relevant unit type(s) for which the rental income account(s) is compared to market rent.

 More Information

 This option is only available for a non-default configuration. The default configuration examines all unit types.

 Market Rent

 The average price of rent for similar units or rentable assets in the area. Market rent is displayed as found on each unit's details page in the Current Market Rent tile and on each asset's details page in the Market Rent field.

 Vacancy Loss

 The market rent of all vacant units.

 Loss To Lease

 The below-market value rent charges for occupied units.

 Rental Income Adjustment

 Receivables not linked to tenants, income entered using journal entries, and items not accounted for using other accounts.

 -
 If applicable, click Show Additional Accounts and configure the following fields:

 Account
 Description

 Beginning Prepay

 The prepaid charges at the beginning of the posting period. If left blank, prepaid amounts are rolled into the Rental Income Adjustment account.

 This account type displays only when running financial reports on a cash basis and applies only to rent charge types selected on the associated property.

 Related Preferences

 This account type requires that the system accounts for prepays to be income-type accounts. Additionally, Record cash preallocations as a liability (applies to new payments and credits) and Record accrual prepayments as a liability (applies to new payments) cannot be selected in system preferences. For more information, refer to General Ledger System Accounts (System Preferences) and General Ledger Settings (System Preferences) .

 Ending Prepay

 The prepaid charges at the end of the posting period. If left blank, prepaid amounts are rolled into the Rental Income Adjustment account.

 This account type displays only when running financial reports on a cash basis and applies only to rent charge types selected on the associated property.

 Related Preferences

 This account type requires the system accounts for prepays to be income-type accounts. Additionally, Record cash preallocations as a liability (applies to new payments and credits) and Record accrual prepayments as a liability (applies to new payments) cannot be selected in system preferences. For more information, refer to General Ledger System Accounts (System Preferences) and General Ledger Settings (System Preferences) .

 Beginning Arrears

 The open charges at the beginning of the posting period. If left blank, open charges are rolled into the Rental Income Adjustment account.

 Ending Arrears

 The open charges at the end of the posting period. If left blank, open charges are rolled into the Rental Income Adjustment account.

 This account type displays only when running financial reports on a cash basis.

 -
 To add an additional account configuration, click Add Configuration in the top left.

 Step 4: Select Posting Information

 To finish setting up the automation schedule, do the following:

 -
 In the Posting Information tile, make the following selections:

 Field
 Description

 Active

 If checked, this automated posting schedule is enabled.

 Name

 The name of this automated GPR posting as it displays on the Automated GPR Postings page.

 Start Date

 The current or a future date to determine when this posting schedule goes into effect.

 End Date

 A future date to determine when this posting schedule ends. If this field is left blank, the schedule continues to post indefinitely or until an end date is entered.

 Run Day

 The date on which the automated posting occurs. Rent Manager automatically posts GPR early in the morning of the chosen Run Day . The created journal entries are dated with the selected Post/To Day .

 Post/To Day

 The date that Rent Manager uses to determine the date of the posted journal entry and the period of time for which GPR is calculated.

 Since GPR is always calculated for a period in the past, the Run Day and the Post/To Day have the following impacts on the calculation method:

 - If the Run Day is before than the Post/To Day , GPR is calculated from the most recent GPR posting to the Post/To Day in the previous period. For example, if the Run Day is 30 and the Post/To Day is 31, GPR is posted for the entirety of the previous month.

 - If the Run Day is later than or equal to the Post/To Day , GPR is calculated from the most recent GPR posting to the Post/To Day in the current period. For example, if the Run Day is 31 and the Post/To Day is 30, GPR is posted for the entirety of the current month.

 More Information

 If you enter a Post Day of 31 , Rent Manager dates the transactions with the last day of each month, regardless of the number of days in the month. For example, with a Post Day of 31 and posting for April, transactions are dated for the 30 th .

 Market Rent

 Determines when to view the unit or asset market rent amount used for the GPR posting:

 Beginning of Posting Period

 GPR is posted based on the market rent value that was in effect as of the beginning of the posting period—the Last Post Date for the selected GPR posting schedule.

 End of Posting Period

 GPR is posted based on the market rent value that was in effect as of the end of the posting period—the Post/To Day for the selected GPR posting schedule.

 Beginning of Year

 GPR is posted based on the market rent value that was in effect at the beginning of the calendar year.

 End of Year

 GPR is posted based on the market rent value that was in effect at the end of the calendar year.

 Fixed Date

 GPR is posted based on the market rent value that was in effect on the date entered in the field.

 Market Rent Date

 The date in which the market rent value the GPR posting is based on went into effect. This option is available only if Fixed Date is selected in the Market Rent field.

 Notification Email

 The email address of a Rent Manager user to receive a notification for each successful or failed automatic posting. If entering more than one email address, separate each with a semicolon (;).

 Include Details on Email

 Include additional report information in the notification email sent to the Rent Manager user after an automatic posting has posted.

 Journal Comment

 An optional comment to be displayed in the journals created as a result of the GPR posting.

 -
 Click Save .
The new posting schedule is added and begins running on the schedule's next Run Day .

 More Information

 This automatic process does not occur immediately once the schedule has been configured and becomes active. Rent Manager performs all automated postings overnight so as not to interfere with your work.
