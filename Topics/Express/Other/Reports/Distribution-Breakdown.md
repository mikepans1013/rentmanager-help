# Distribution Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Distribution-Breakdown.htm

The Distribution Breakdown report displays information about how Rent Manager calculated an owner's distribution payout, showing bank balances on the date of a payout and amounts held for security deposits, reserves, and/or other exclusions. The Distribution Breakdown report is a supplement to an owner's distribution check to explain the distribution calculation.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Distribution Breakdown .

 For more information, refer to Control User Access .

 To view the Distribution Breakdown report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Banking arrow_forward Distribution Breakdown .
The Reports: Distribution Breakdown page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each property for the selected owners. Otherwise, all selected owners' properties are combined into a single report per owner.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 More Information

 The report results vary slightly depending on whether the owner was paid via the Pay Owners or Manual Owner Pay features in Rent Manager .

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Calculated Payout via Pay Owners

 The report displays calculated payments to the owner that were made using Pay Owners with a check date during the specified report date range. Checks are ordered chronologically, and each property in the ownership is grouped together. For more information, refer to Pay Owners .

 The rows for each check that display in the report are described below.

 Row
 Description

 Accounts to Exclude from Check Posting

 If you specify a GL account (or multiple accounts) in the Accounts to Exclude from Check Posting section of the Owner Check Setup page, the account(s) display above the payment total.

 Bank Balance

 The bank balance of the property's default bank at the date and time the owner distribution was performed.

 Less: Owner Reserve

 The amount of money designated as a reserve amount as specified on the property's Owners page.

 Less: Security Deposits Held

 If the Owner Check Setup option of Security deposits held is selected, this row displays the amount of security deposits held for the property. For more information, refer to Owner Check Setup Templates (Page) .

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Total

 The amount paid out to the owner, using the following formula:

 Payout = Bank Balance - Total Less Amounts

 To view the check for the owner's payout, click the Total .

 If a property has multiple owners, the report displays the Owner Percentage as well as the calculated amount paid to that owner based on that percentage below the total payment amount.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View

 For more information, refer to Control User Access .

 Withheld Prepayments

 The balance of all tenant and prospect prepayments that have been deposited as of the report end date.

 This row displays only when the Prepaid receivables option is selected on a correlating property's Owner Check Setup page.

 Manual Payout via Owner Check

 If the owner was paid manually on the Manual Owner Pay page, the report displays payments to the owner where the user specified the payout amount and a check date during the specified report date range. Checks are ordered chronologically, and each property in the ownership is grouped together with the payout amount below.

 The Payment Amount field displays the amount paid out to the owner as determined by the Rent Manager user. To view the check for the owner's payout, click the amount.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View

 For more information, refer to Control User Access .
