# Balance Due (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Balance-Due.htm

The Balance Due report displays the current amount of unpaid tenant, and, optionally, prospect transactions as of the report date. This report displays balance totals for each account, each property, and a total for all properties. You can use this report to quickly review tenants that need to be sent notices for payment or prospects that have not paid their application fees.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Balance Due .

 For more information, refer to Control User Access .

 To view the Balance Due report, do the following:

 -
 Go to  arrow_forward Receivables arrow_forward Charges arrow_forward Balance Due .
The Reports: Balance Due page displays.

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

 Prospects to Include

 Select which prospects to include in this report, based on the status defined on the Prospect details page.

 Option
 Description

 Prospect

 Prospect accounts who are interested in renting from you and have not signed a lease display.

 Lost

 Prospect accounts that are marked Lost because they no longer plan to lease from you display.

 Lost/Rejected

 Prospect accounts that are marked Lost/Rejected because you no longer plan to lease to them display.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Values to Include

 Select one of the following options and enter a value in the Values to Include Amount field to determine what balances display in the report:

 Option
 Description

 All

 All balances display.

 =

 Balances that are equal to the entered value display.

 !=

 Balances that are not equal to the entered value display.

 <

 Balances that are less than the entered value display.

 <=

 Balances that are less than or equal to the entered value display.

 >=

 Balances that are greater than or equal to the entered value display.

 >

 Balances that are greater than the entered value display.

 Sort Options

 Select one of the following options to determine how the report results are organized in each property subheading:

 Option
 Description

 Account Number

 Accounts are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Address

 Accounts are sorted alphanumerically by their Default address. Accounts with no address display first in the list.

 Balance

 Accounts are sorted numerically by their Balance due in descending order (greatest to least).

 Last Name

 Accounts are sorted alphabetically by their Last Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Phone

 Accounts are sorted numerically by their Default phone number in ascending order (lowest to highest). Accounts with no phone number display first in the list.

 Unit

 Accounts are sorted alphanumerically by Unit name.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The tenants and prospects who have outstanding balances as of the report date, separated by property.

 Acc. #

 The system-generated Acc. # associated with the tenant or prospect.

 Phone #: Default

 The phone number marked as Default on the account's View Contacts pop-up.

 Status

 Indicates whether the account is a Current , Past , or Future tenant or prospect.
A description of each status is provided below.

 C

 The tenant has a Move In date that is either on or before the report date.

 *C

 The prospect has a Reserved Move In date that is either on or before the report date.

 F

 The tenant either has a Move In date that is after the report date or has no Move In date.

 *F

 The prospect has a Reserved Move In date that is after the report date or has no Reserved Move In date.

 P

 The tenant has a Move Out date before the report date.

 Address

 The address marked as Default on the tenant's details page. This column is blank for prospect accounts.

 Balance

 The total balance for each account as of the report date. If the value is positive, the account has an outstanding balance. If the value is negative, the account has a credit.

 Report Totals & Counts Subreport

 This subreport displays the total number of accounts included in the report and the total balance amount for those accounts.

 The following columns display in the subreport:

 Column

 Description

 Tenants with credit balances

 Count

 The number of accounts that have outstanding credits as part of their balance.

 Amount

 The total dollar amount of credits currently owed to accounts with negative balances.

 Tenants with balances

 Count

 The number of accounts that have outstanding unpaid charges.

 Amount

 The total dollar amount of the unpaid charges owed by those accounts.

 Zero balances

 Count

 The number of accounts that do not have any unpaid charges or credits.

 Amount

 This column always displays 0.00 .

 Totals

 Count

 The total number of accounts included in the report.

 Amount

 The total outstanding balance of those accounts, calculated using the following formula:

 Totals = Total accounts with balances – Total accounts with credit balances
