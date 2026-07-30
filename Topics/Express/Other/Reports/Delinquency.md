# Delinquency (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Delinquency.htm

The Delinquency report displays tenants and prospects with delinquent charges as of the report date as well as a balance of delinquent charges by property, a grand total for all selected properties combined, per-day late fee totals, and interest loan charges. The results can include any information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date. You can also set up the report to separate delinquent rent charges from non-rent charges.

 More Information

 It is important to keep in mind that this report examines unpaid charges, not ending balances. If, for example, you received a payment from a tenant and recorded that payment in Rent Manager , but didn't apply the payment to outstanding charges, those charges would still display on this report as delinquent.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Delinquency .

 For more information, refer to Control User Access .

 To view the Delinquency report, do the following:

 -
 Go to   arrow_forward  Receivables arrow_forward  Charges arrow_forward Delinquency .
The Reports: Delinquency page displays.

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

 Show Unposted Per Day Late Fees to Date

 Check to display the amount of per-day late fees accumulated by the As of Date . The amount displays in the Per Day Late column which is included only if this option is checked.

 Exclude Tenants with Less Than X Delinquent Days

 Check this option and enter a value in the field to filter the report results to display only tenants and prospects with open charges that have not been paid by the entered number of days. For example, if you enter 5 , only tenants and prospects with open charges that are five days old or older are included in the report results.

 Include Prospects

 Check to display prospect account information in the report results.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Charges to Include

 The report displays open charges associated with any of the selected charge types.

 Detail or Summary

 This option determines how much information is displayed in the report. Tenants and prospects are sorted by property, and transactions are sorted under the according tenant or prospect.

 Option
 Description

 Detail

 Displays a line item for each delinquent open amount for the tenant or prospect account.

 Summary

 Displays the total of all delinquent open amounts as a single line item for each tenant or prospect account.

 Tenants to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 All

 All future, current, and past tenants display.

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Include Tenants with a Balance Greater than or Equal To

 Check this option and enter an amount in the corresponding field so that only accounts with an open balance greater than or equal to the entered amount are examined.

 Keep Rent Charges Separate

 Check to have transactions associated with an applicable Rent Charge Type , as entered on the property Other Information tile, displayed in a separate Rent Amount column. Otherwise, all transactions are combined into a single Amount column.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Accounts are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Address

 Tenants are sorted alphanumerically by their Default address. Prospect accounts and tenants with no address display first in the list.

 Last Name

 Accounts are sorted alphabetically by their Last Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Phone

 Accounts are sorted numerically by their Default phone number in ascending order (lowest to highest). Accounts with no phone number display first in the list.

 Unit

 Accounts are sorted alphanumerically by Unit name.

 Unit Type

 Accounts are sorted alphanumerically by Unit Type name. Accounts with the same unit type are further sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The property and delinquent tenants or prospects associated with that property.

 If Include Prospects is checked, the column name does not change; prospects are listed the same as tenants.

 Acc. #

 The tenant or prospect account number that was generated when the account was created.

 Unit

 The primary unit associated with the tenant or prospect.

 Unit Type

 The unit type associated with the primary unit of the tenant or prospect.

 Charge

 The charge type that is delinquent for the tenant or prospect. If there is more than one delinquent charge type, each charge type is listed for that tenant.

 The column displays only if Detail is selected in the Detail or Summary field of the report options.

 Date

 The date of the charge that is delinquent. If there is more than one delinquency, the date for each delinquency is listed.

 The column displays only if Detail is selected in the Detail or Summary field of the report options.

 Amount

 The amount that displays depends on the report option(s) selected. Each report option that affects this column when selected is described below.

 Summary

 This column displays the total amount of delinquent charges for a tenant or prospect.

 Detail

 This column displays the amount of each delinquent charge for each tenant or prospect.

 Keep Rent Charges Separate

 This column is replaced with the Rent Amount and Other Amount columns, which split the amount based on whether or not they are assigned to a rent charge type.

 Show unposted per day late fees to date

 A new column called Per Day Late displays to the right of this column. Tenants and prospects who accrued daily late fees for delinquent charges based on the selected report date have the total of those fees display in this column.

 Summary Subreport

 This subreport provides an overview of the data included in the Delinquency report.

 The following rows display in the subreport:

 Row
 Description

 Delinquent Amount

 The total amount of delinquent charges for the tenants and prospects of the selected properties. This total is calculated from the charges selected in the report options.

 If the Keep Rent Charges Separate report option is checked, this row is separated into Delinquent Rent Amount and Delinquent Other Amount .

 Per Day Late Fees

 If the Show unposted per day late fees to date report option is checked, the total of your daily late fees across the selected properties displays.

 Percent Delinquent

 The total percent of tenant and prospect accounts from the selected properties who are delinquent in at least one of the charges specified in the report options.

 Percent Delinquent = Delinquent Accounts/Total Accounts

 Total Accounts refers to the number of accounts examined by the report, as determined by the selections in the Properties to Include , Tenants to Include , and Include Prospects report options.

 Total Number of Tenants

 The total number of tenants and prospects from the selected properties who are delinquent in at least one of the charges specified in the report options. The total tenant and prospect count is based on the Tenants to Include and Include Prospects report options.
