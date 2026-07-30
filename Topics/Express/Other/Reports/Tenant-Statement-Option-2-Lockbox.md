# Statement (Option 2) - Lockbox (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Statement-Option-2-Lockbox.htm

The Statement (Option 2) - Lockbox report displays Zego Lockbox transaction information for selected tenants across a date range, including the totals for charges, credits, and the current balance due. Because the statement is intended to be mailed to tenants at the end of each billing period, it fits on an 8.5x11 sheet of paper when printed and includes a mailing address header. It generates information similar to the Statement - 8.5x11 report but has a different visual presentation allowing for color in the text, section dividers, and more.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Statement - 8.5x11 .

 For more information, refer to Control User Access .

 To view the Statement (Option 2) - Lockbox report, do the following:

 -
 Go to arrow_forward Tenant Statements arrow_forward General arrow_forward Statement (Option 2) - Lockbox .
The Reports: Statement (Option 2) - Lockbox page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 More Information

 The Statement (Option 2) - Lockbox report can also be generated directly from the Tenants page by doing the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants .
The Tenants page displays.

 -
 On the tenant for whom you would like to generate this report, click arrow_forward Run Reports .
The Run Reports pop-up displays.

 -
 In the Select a Report drop-down list, select Statement (Option 2) - Lockbox .

 -
 Click Continue .
The Reports: Statement (Option 2) - Lockbox page displays.

 -
 To select multiple tenants, click Bulk Actions   arrow_forward   Statements , check the box next to each tenant, then select Tenant Statement (Option 2) - Lockbox . When finished, click Run Report .
The Reports: Statement (Option 2) - Lockbox page displays.

 If you generate the report this way, the Properties to Include section, the Exclude records with zero amounts from the report field, and the Tenants to Include field do not display in the report options because the desired tenants were already selected.

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

 Comment

 Optionally, enter a custom note to display at the bottom of each tenant's statement.

 Run Tenants Separately

 Check to generate a separate report for each tenant. Otherwise, one document generates for all tenants. This option must be checked if you want to email each tenant their own statement or save a copy of the statement to each tenant's history/notes.

 Exclude Records with Zero Amounts from the Report

 Check to remove tenants from the report results who have no transactional activity and no previous balance. Otherwise, all tenant accounts display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Mailing Header

 This section displays the property's billing name, billing address, and default phone number in the top-left corner. Underneath that, the tenant's name and billing address displays. This information can be found on the details pages for the property and tenant.

 More Information

 The tenant address can be found on the tenant's details page. The property address displayed here is the Billing address found in the Primary Address section the property's details page. To display the property name on the mailing header, you must enter a name in the Billing Name 1 field in the Other Information section on the property's details page. For more information, refer to Property Details (Page) .

 Statement Header

 This section displays the dates examined in the statement, the date the statement was generated, and the property logo. Each field is described in the table below.

 The following information displays on the statement header:

 Field
 Description

 Billing Period

 The Date Range selected in the report options.

 Statement Date

 The date on which the statement was generated.

 Property Logo

 The logo uploaded in the Property Logo tile on the property's details page. If no logo is uploaded, this section is blank.

 Transaction History

 This section displays each transaction that was posted to the tenant's account during the Date Range . This includes all charges, fees, payments, and credits.

 Each column included in this section is described below.

 Row
 Description

 Previous Balance Due

 The remaining balance amount as of one day before the first day in the report's Date Range .

 Date

 The Date of each transaction as displayed on the tenant's View Transactions page.

 Description

 Each transaction's Description and Comment , separated by a space, as displayed on the tenant's View Transactions page.

 Amount

 The total dollar amount of each transaction as displayed on the tenant's View Transactions page.

 Balance Due

 The final balance that the tenant owes as of the end of the selected Date Range .

 Return Label

 This section includes information to help the tenant send you a payment by mail.

 Field
 Description

 QR Code

 A system-generated QR code that tenants can use to access their Lockbox information.

 Property

 The short name of the property associated with the tenant's current lease.

 Unit

 The unit that the tenant currently occupies.

 Acc #

 The system-generated account number found on the tenant's details page.

 Send Payments To

 The billing name and address found on the property or property management company's details page, depending on the Statement Return Address settings in the system preferences. For more information, refer to Tenant Lockbox ePay (System Preferences) .

 Tenant Address

 The tenant's primary address, found on the tenant's details page.

 Include on Memo Line

 A system-generated identifier linking the tenant account to your Rent Manager database. The number includes your company code, the database location from which you generated the report, and the tenant's account number.

 Outstanding Credit Activity

 This section displays if there are any available credits on the tenant account that can be applied toward open charges.

 Each row included in this section is described below.

 Row
 Description

 Total

 The total dollar amount of the credit available for the tenant.

 Used in prior billing period

 The dollar amount of the credit that was applied toward a charge in the previous billing period.

 Used in current billing period

 The dollar amount of the credit that was applied toward a charge in the current billing period on this statement.

 Remaining

 The total remaining dollar amount of the credit that can still be applied to a charge.

 Metered Utilities Breakdown

 This section displays total consumption and charges for any metered utilities that the tenant is responsible for paying. It displays only if the option for Show meter readings and usage is checked.
