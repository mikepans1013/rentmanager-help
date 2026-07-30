# Tenant Statement - 8.5x14 Mailer (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Statement-8.5x14-Mailer.htm

The Tenant Statement - 8.5x14 Mailer report displays transaction information for selected tenants across a date range and provides information about the totals for charges, credits, and the current balance due. Because the statement is intended to be printed and mailed to tenants each billing period, it includes billing addresses for the property and tenant formatted to fit in a window-mailer envelope. The statement is also is formatted to fit on a legal-size 8.5x14 sheet of paper when printed, which allows extra room for a tenant's transactional history when compared to the Tenant Statement - 8.5x11.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Statements .

 For more information, refer to Control User Access .

 To view the Tenant Statement - 8.5x14 Mailer report, do the following:

 -
 Go to arrow_forward Tenant Statements arrow_forward General arrow_forward Statement - 8.5x14 Mailer .
The Reports: Statement - 8.5x14 Mailer page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

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

 Comment

 Optionally, enter a custom note to display at the bottom of each tenant's statement.

 Run Tenants Separately

 Check to generate a separate report for each tenant. Otherwise, one document generates for all tenants. This option must be checked if you want to email each tenant their own statement or save a copy of the statement to each tenant's history/notes.

 Exclude Records with Zero Amounts from the Report

 Check to remove tenants from the report results who have no transactional activity and no previous balance. Otherwise, all tenant accounts display.

 Exclude Previous Balance

 Check to hide balances from before the Date Range for each tenant so their prior balance does not display on the statement.

 Inclusions

 Select from the following options to determine what information to include in the report results:

 Option
 Description

 Show daily interest loans

 Includes the total of amount of daily interest, if applicable, that has accumulated on each tenant's loan.

 Show unposted per day late fees to date

 Includes the total amount of per day late fees, if applicable, that have accumulated for each tenant.

 Utility Options

 Select from the following options to determine what metered utilities information displays in the statement.

 Option
 Description

 Show calculation details (MU-Plus)

 Check to include details about the Metered Utilities Plus calculations, if applicable, in the statement.

 MU-Plus calculations allow you to combine rates with tenant consumption along with other fees and/or discounts to determine the final utility charge for a tenant. For more information, refer to Set Up MU-Plus Rate Calculations .

 Show meter readings and usage

 Check to include details from a tenant's meter readings, if applicable, in the statement, including the current reading, the previous reading, and usage for each posting. For more information, refer to Meter Readings (Page) .

 Sort Options

 Statements are sorted alphanumerically by property name. Select one of the following options to determine the order in which statements generate for each property.

 More Information

 If the report option to Run Tenants separately is selected, the individual reports are sorted using the option you select in Sort Options without first being sorted by property.

 Option
 Description

 Account Number

 Statements are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Last Name

 Statements are sorted alphabetically by the tenant's Last Name .

 Unit

 Statements are sorted alphanumerically by the associated Unit name.

 Address Type

 Select an Address Type to determine which entity address is used as the mailing address.

 To use the address that is marked as the Default on the account, select < Use Default > .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Sections

 The report is separated into the following sections.

 Mailing Header

 This section displays the property’s billing name, default phone number, and billing address in the top-left corner. Underneath that, the tenant’s name and billing address is displayed. Each tenant contact with the Show On Statement/Labels option checked appears in the mailing header.

 In addition, the tenant's system-generated Account number, the Unit associated with the tenant, and the Unit Type displays.

 Statement Header

 This section displays numerous fields containing information about the transactions included in the statement and the report dates. Each field is described in the table below.

 Field
 Description

 Makes checks payable to:

 The property's Billing Name as entered on the property's details page.

 Questions please call:

 The property's phone number marked as Default on the property's details page.

 Statement

 The date on which the statement was generated.

 Billing Period

 The Date Range selected in the report options.

 Last Payment

 The Date , Amount , and Reference # of the tenant's most recent payment received.

 Previous Balance

 The tenant's balance one day prior to the From date in the report's date range.

 Current Charges

 The total of all charges posted to the tenant's account during the date range.

 Current Credits

 The total of all payments and credits posted to the tenant's account during the date range.

 Balance Due

 The tenant's remaining balance as of the end of the date range.

 Transaction History

 This section displays each transaction that was posted to the tenant's account during the date range and the information found on the tenant's account, in the transaction details. This includes all charges, fees, payments, and credits. Each row and column included in this section is described in the table below.

 More Information

 Comments entered in report options display to the bottom-left of the Transaction History section.

 Column or Field
 Description

 Date

 The Date of each transaction.

 Reference

 The transaction's Reference # .

 Description

 The transaction's Description and Comment .

 Amount

 The Amount of each transaction.

 Balance Due

 The final balance that the tenant owes as of the end of the selected Date Range .

 Scan Label

 A scannable barcode that includes tenant account details from the mailing header is provided. This section also includes the Rent Manager version when the report was generated (e.g. rev. 12.250301 ).

 Window Mailers

 Two addresses generate in a window mailer format for use with envelopes. The first is used to mail the statement to the tenant, and the second is used by the tenant to remit payment to the management company.
