# Recap Report

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Recap.htm

The Recap Report displays vacancy and transactional summaries for selected properties across a date range. This report can be used to outline a property's occupancy performance and to break down the amounts collected for each charge type. Additionally, this report is beneficial in providing owners with a high-level overview of a property over a period of time.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Recap Report .

 For more information, refer to Control User Access .

 To view the Recap Report , do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Recap Report .
The Reports: Recap Report page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Section Descriptions

 The report is separated into the following sections.

 Rental Information

 The Rental Information section of the report contains the property's leasing and occupancy results during the date range.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 The following fields display in the section:

 Field
 Description

 Total number of units

 The number of units located at the property, minus the number of units that are not considered available because of a unit status as of the last day in the date range. For more information, refer to Add and Assign a Unit Status .

 Number of units rented

 The number of units that are occupied as of the last day in the date range.

 Number of units vacant

 The number of units that are vacant as of the last day in the date range.

 Number of units not vacant due to unit status

 The number of units that do not have a tenant, but are not considered vacant due to an existing unit status as of the last day in the date range.

 Move ins in period

 The number of tenants who moved in to the property during the date range.

 Move outs in period

 The number of tenants who moved out of the property during the date range.

 Percentage of Units Rented

 The percentage of the units that are rented at the property as of the last day in the date range, calculated using the following formula:

 Percentage of units rented = Number of units rented/Total number of units

 Total rent roll (100% rented)

 The sum of all unit market rent values entered for the units at the property.

 Rent charges posted in period

 The sum of all rent charges posted in the period. Rent charges are defined for the property on the Other Information tile's Rent Charge Types field.

 Rental amount on vacant units

 The sum of all unit market rent values entered for the vacant units at the property as of the last day in the date range.

 Total deposits held (current tenants)

 The sum of all security deposits held for tenants that are current as of the last day in the date range.

 Deposits received in period

 The sum of all security deposits received from tenants during the date range.

 Related Preferences

 The charge types listed in this field are configured as security deposit charge types in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 Deposits returned in period

 The sum of all security deposits returned to tenants during the date range.

 Related Preferences

 The charge types listed in this field are configured as security deposit charge types in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 Financial Information

 The Financial Information section of the report contains the property's financial information results during the date range.

 The following fields displayin the section:

 Field
 Description

 Prior balance

 The sum of the unpaid balances for all tenants at the property as of the first day in the date range.

 Prepaid accounts

 The sum of all charges associated with a prepaid general ledger account as of the first day in the date range.

 Related Preferences

 The general ledger accounts used to record prepayments are configured in system preferences. For more information, refer to General Ledger System Accounts (System Preferences) .

 Outstanding balance

 The total unpaid balance as of the first day in the date range, calculated using the following formula:

 Outstanding balance = Prior balance - Prepaid accounts

 Plus total charges in period

 The sum of all charges posted to tenant accounts at the property during the date range.

 Rent charges

 The sum of all rent charges posted during the date range. Rent charges are defined for the property on the Other Information tile's Rent Charge Types field.

 Utility charges

 The sum of all metered utilities charges posted during the date range.

 Late charges (LC)

 The sum of all late fees posted during the date range.

 Subtotal other charges

 The sum of all charges not covered in the three above categories posted during the date range.

 Less credits in period

 The sum of all credits (negative charges) posted to tenant accounts during the date range.

 Total due

 The total amount that would be due at the end of the date range if no payments were collected, calculated using the following formula:

 Total due = Prior balance + Plus total charges in period

 Less total collected

 The sum of all payments received from tenants during the date range.

 Balance due (net)

 The remaining balance due at the end of the date range, calculated using the following formula:

 Balance due (net) = Total due - Less total collected

 Prepaid accounts

 The sum of all charges associated with a prepaid general ledger account during the date range.

 Related Preferences

 The general ledger accounts used to record prepayments are configured in system preferences. For more information, refer to General Ledger System Accounts (System Preferences) .

 Total Outstanding

 The sum of all unpaid charges as of the last day in the date range, calculated using the following formula:

 Total Outstanding = Balance due (net) - Prepaid accounts

 Transaction Summary

 The Transaction Summary section of the report contains totals for all charge types charged or credited at the property during the date range.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Type

 The name of each charge type that was assigned to at least one charge or credit during the report date range.

 Description

 The longer description of each charge type.

 Prior Balance

 The balance of charges using each charge type as of the first day in the date range.

 Charges

 The sum of all charges posted to tenant accounts using each charge type during the date range.

 Credits

 The sum of all credits posted and payments received from tenants on the charges of each charge type during the date range.

 Balance

 The balance of charges using each charge type as of the last day in the date range.
