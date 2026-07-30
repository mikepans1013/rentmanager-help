# Tenant Statement 8.5x11 (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Statement-8.5x11.htm

The Statement 8.5x11 report displays transaction information for selected tenants across a date range and provides information about the totals for charges, credits, and the current balance due. Because the statement is intended to be mailed to tenants at the end of each billing period, it fits on an 8.5x11 sheet of paper when printed and includes a mailing address header. Additionally, you can enter comments to display in a separate section at the end of the statement, which may include contact information or reminders about your late fee policy.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Statements .

 For more information, refer to Control User Access .

 To view the Tenant Statement - 8.5x11 report, do the following:

 -
 Go to arrow_forward Tenant Statements arrow_forward General arrow_forward Statement - 8.5x11 .
The Reports: Statement - 8.5x11 page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 More Information

 To generate this statement directly from a tenant account, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant. Then on the action bar to the right, select arrow_forward Statement - 8.5x11 .

 If you generate the report this way, the Properties to Include option does not display because the desired tenant was already selected.

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Inclusions

 Select from the following options to determine what information to include in the report results:

 Option
 Description

 Show daily interest loans

 Includes the total of amount of daily interest, if applicable, that has accumulated on each tenant's loan.

 Show unposted per day late fees to date

 Includes the total amount of per day late fees, if applicable, that have accumulated for each tenant.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Utility Options

 Select from the following options to determine what metered utilities information displays in the statement.

 Option
 Description

 Show calculation details (MU-Plus)

 Check to include details about the Metered Utilities Plus calculations, if applicable, in the statement.

 MU-Plus calculations allow you to combine rates with tenant consumption along with other fees and/or discounts to determine the final utility charge for a tenant. For more information, refer to Set Up MU-Plus Rate Calculations .

 Show meter readings and usage

 Check to include details from a tenant's meter readings, if applicable, in the statement, including the current reading, the previous reading, and usage for each posting. For more information, refer to Meter Readings (Page) .

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

 Statement Method

 Select the tenant's preferred Statement Method to determine which accounts display in the results.

 Option
 Description

 All

 Generates statements for all tenants regardless of their chosen Statement Method . Tenants with a No Statement method preference on their details page are not included in the report when the report is run for a whole property. To generate a statement for these tenants, run the report for the individual tenant, or the account group they belong to, from the tenant's details page.

 Email

 Generates statements for tenants with the preferred method of Email .

 Print

 Generates statements for tenants with the preferred method of Print .

 VPO

 Generates statements for tenants with the preferred method of VPO .

 Related Preferences

 This option displays only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO Defaults (System Preferences) .

 Run Tenants Separately

 Check to generate a separate report for each tenant. Otherwise, one document generates for all tenants. This option must be checked if you want to email each tenant their own statement or save a copy of the statement to each tenant's history/notes.

 Comment

 Optionally, enter a custom note to display at the bottom of each tenant's statement.

 Exclude Records with Zero Amounts from the Report

 Check to remove tenants from the report results who have no transactional activity and no previous balance. Otherwise, all tenant accounts display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Mailing Header

 This section displays the property’s billing name, billing address, and default phone number in the top-left corner. Underneath that, the tenant’s name and billing address is displayed.

 More Information

 If the property's name or address is incorrect or missing on the statement header, the information must be updated or added to the related fields on the property's details page. For more information, refer to Property Details (Page) .

 Statement Header

 This section displays numerous fields containing information about the transactions included in the statement and the report dates. Each field is described in the table below.

 Field
 Description

 Acc #

 The tenant's system-generated account number.

 Amount Enclosed

 Provides an empty field for a tenant to write in the amount they are enclosing if they choose to detach the top portion of the statement and mail in their payment.

 Balance Due

 The tenant's remaining balance as of the end of the report's date range.

 Billing Period

 The date range selected in the report options.

 Current Charges

 The total of all charges posted to the tenant's account during the date range.

 Current Credits

 The total of all payments and credits posted to the tenant's account during the date range.

 Last Payment

 The Date , Amount , and Reference # of the tenant's most recent payment.

 Previous Balance

 The tenant's balance one day prior to the report's date range.

 Property

 The Short Name of the property associated with the tenant.

 Statement Date

 The date the statement was generated.

 Type

 The unit type of the tenant's unit.

 Unit

 The Name of the unit associated with the tenant.

 Transaction History

 This section displays each transaction that was posted to the tenant's account during the Date Range . This includes all charges, fees, payments, and credits. Each row and column included in this section is described in the table below.

 Row or Column
 Description

 Amount

 The dollar amount of each charge or payment. Payments display as negative values.

 Balance Due

 The final balance that the tenant owes as of the end of the report's date range.

 Date

 The date of each transaction.

 Description

 The Description and Comment of each transaction, separated by a space.

 Reference

 The Reference # of the payment, if applicable.

 Sub Total

 The subtotal of all charges, fees, credits, and payments listed in the section.

 Unapplied Credits

 The dollar amount of any tenant credits which have not yet been applied to charges.

 Comments

 This section displays the Comment entered in the report options.
