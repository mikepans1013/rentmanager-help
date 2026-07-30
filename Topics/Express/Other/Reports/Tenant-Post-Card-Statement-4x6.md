# Tenant Post Card Statement - 4x6, 3 per page (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Post-Card-Statement-4x6.htm

The tenant Post Card Statement - 4x6, 3 per page report displays transaction information for selected tenants across a date range and provides information about the totals for charges, credits, and the current balance due. Because the statement is intended to be printed and mailed to tenants each billing period, it includes billing addresses for the property and tenant formatted to fit in a window-mailer envelope. The statement is also formatted to fit three records per page on postcard-sized 4x6 sections, which allows you to provide a compact record of a tenant's transactional history.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Statements .

 For more information, refer to Control User Access .

 To view the Post Card Statement - 4x6, 3 per page report, do the following:

 -
 Go to arrow_forward Tenant Statements arrow_forward General arrow_forward Post Card Statement - 4x6, 3 per page .
The Reports: Post Card Statement - 4x6, 3 per page page displays.

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

 Overflow Option

 Select the desired option to determine how information that would extend past the limits of a single 4x6 card display.

 Option
 Description

 Multiple Cards (all transactions)

 All transactions are listed for each tenant, and additional 4x6 cards are used to display the additional transactions that do not fit on the first.

 One Card (summarize overflow)

 Any information that would extend past the limits of a single 4x6 card are summarized so that the total amount is included in a single card.

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

 Exclude Records with Zero Amounts from the Report

 Check to remove tenants from the report results who have no transactional activity and no previous balance. Otherwise, all tenant accounts display.

 Show Meter Readings and Usage

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

 Statement Header

 This section displays the property’s billing name, default phone number, and billing address in the top-left corner. In addition, the tenant's account information displays, including their lease, balances, and the dates examined. Each field is described in the table below.

 Field
 Description

 Acc #

 The system-generated account number assigned to the tenant when the account was created.

 Balance Due

 The tenant's remaining balance as of the end of the date range.

 Billing Period

 The Date Range selected in the report options.

 Current Charges

 The total of all charges posted to the tenant's account during the date range.

 Date

 The date on which the statement was generated.

 Last Payment

 The Date and Amount of the tenant's most recent payment received.

 Previous Balance

 The tenant's balance one day prior to the From date in the report's date range.

 Prop

 The property the tenant is leasing.

 Tenant

 The tenant's full name.

 Unit

 The unit that the tenant is leasing.

 Transaction History

 This section displays each transaction that was posted to the tenant's account during the date range and the information found in the transaction details. This includes all charges, fees, payments, and credits. Each row and column included in this section is described in the table below.

 More Information

 Comments entered in report options display to the left of the Balance Due .

 Column or Field
 Description

 Amount

 The total dollar amount of each transaction.

 Balance Due

 The final balance that the tenant owes as of the end of the date range.

 Date

 The date of each transaction.

 Transaction Description

 The transaction's Reference # , or if there is no reference # for the transaction, the Description displays instead.

 Return Slip

 This section provides a summary of the tenant's account information and balance due that is already displayed in detail on the other sections and an empty box for entering the payment amount. This provides you with a quick reference for payments returned to the office for entry into Rent Manager . This section also includes the tenant's address where the statement is to be mailed.
