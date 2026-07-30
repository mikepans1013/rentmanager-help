# Security Deposit Activity (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Security-Deposit-Activity.htm

The Security Deposit Activity report displays security deposits that were charged, received, and refunded at the selected properties during a date range. This report includes information about tenant move-in and move-out dates to provide context for the security deposit transaction activity. It also includes the total dollar amount of held security deposits for each tenant and prospect, as well as the total dollar amount of deposits charged, paid, and refunded to tenants during the date range.

 To review security deposit activity for a specific date range, run this report along with a bank reconciliation for the deposit bank.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Security Deposit Activity .

 For more information, refer to Control User Access .

 To view the Security Deposit Activity report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Tenants arrow_forward Security Deposit Activity .
The Reports: Security Deposit Activity page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 First Name

 Accounts are sorted alphabetically by their First Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Last Name

 Accounts are sorted alphabetically by their Last Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Account Number

 Accounts are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Unit

 Accounts are first sorted alphanumerically by property, then further sorted alphanumerically by Unit name.

 Move In

 Accounts are sorted chronologically by the Move In date in ascending order (oldest to furthest in the future).

 Move Out

 Accounts are sorted chronologically by the Move Out date in ascending order (oldest to furthest in the future). Accounts with no move out date display first in the list.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Security Deposit Types to Include

 Check one or more of the security deposit charge types to include in the report. If your database has only one security deposit charge type, this option does not display.

 Related Preferences

 You can adjust which charge types count towards security deposits in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 Zero Amount Exclusions

 Select an option to determine which tenants and/or prospects are excluded from the report results.

 Option
 Description

 None

 Display all tenants and/or prospects regardless of their security deposit.

 Activity

 Exclude tenants and/or prospects that were not charged, refunded, or paid a security deposit.

 Balance

 Exclude tenants and/or prospects that do not currently have a held security deposit.

 Activity or Balance

 Exclude tenants and/or prospects who either were not charged, refunded, or paid a security deposit, or do not have a held security deposit.

 Activity and Balance

 Exclude tenants and/or prospects who both were not charged, refunded, or paid a security deposit, and do not have a held security deposit.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Show Prospects

 Check to include prospect records in the report results. Otherwise, only tenant's records display.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each tenant or prospect included in the report.

 Acc. #

 The system-generated account ID number assigned to each tenant or prospect upon creation.

 Unit

 The name of the unit leased by the tenant or reserved by the prospect.

 Move In Date

 The tenant's move-in date or the prospect’s expected move-in date.

 Move Out Date

 The tenant's move-out date or the prospect’s expected move-out date.

 Previously Held

 The total dollar amount of security deposits held for the tenant or prospect before the start of the Date Range .

 Charged

 The total dollar amount of security deposit charge types that were posted to the tenant or prospect account during the report Date Range .

 The total dollar amount of charged security deposits for all tenants and prospects included can be found at the bottom of this column.

 Received

 The total dollar amount of payments received during the report Date Range that were allocated to security deposit charge types.

 The total dollar amount of received security deposits for all tenants and prospects included can be found at the bottom of this column.

 Credited

 The total dollar amount of held security deposits that were applied to other charges during the Date Range .
This includes using security deposit dollars to pay for new charges on the tenant or prospect's account, or refunding the security deposit to the tenant or prospect when the held security deposit is used to pay the charge that is created in the form of a tenant refund check.

 All transactions that result in subtractions from the held security deposit are included in the Credited column.

 The total dollar amount of credited security deposits for all tenants and prospects included can be found at the bottom of this column.

 Refunded

 The total dollar amount of security deposits that have been refunded to the tenants or prospects during the Date Range .

 This does not show the same amount as the Credited column because the Refunded column only includes decreases to a held security deposit through a check or bill made out to the tenant.

 The total dollar amount of refunded security deposits for all tenants and prospects included can be found at the bottom of this column.

 Balance Held

 The total dollar amount of held security deposits for tenants or prospects at the end of the Date Range .

 The total dollar amount of held security deposits for all tenants and prospects included can be found at the bottom of this column.
