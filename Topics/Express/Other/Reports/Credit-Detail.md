# Credit Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Credit-Detail.htm

The Credit Detail report displays tenants and prospects with payments or credits on their account during a date range even if they have yet to be applied to charges. The results include the charge type used for each payment or credit and, if applicable, the charge that the payment or credited was allocated to. This report can be used to compare prepaid amounts with your bank statement during a bank reconciliation.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Credit Detail .

 For more information, refer to Control User Access .

 To view the Credit Detail report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Credit Detail .
The Reports: Credit Detail page displays.

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

 This option must be selected for prospects to display.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Detail or Summary

 This option determines how much information is displayed in the report. Tenants are sorted by property, and transactions are sorted under the according tenant.

 Option
 Description

 Detail

 Three additional columns ( Charges , Charge Date , and Amount Paid ) display. Additionally, each credit or payment displays the amount allocated to each charge type.

 Summary

 The total amount of each credit or payment in a single line item, regardless of charge type allocation, display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each property subheading. Credits and payments with the same sort criteria are further sorted alphabetically by the tenant's last name.

 Option
 Description

 Account Number

 Credits and payments are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Amount Paid

 Credits and payments are sorted numerically by the amount paid to charges in descending order (greatest to least).

 Charge Type

 Credits and payments are sorted alphanumerically by the Credit Type .

 Credit Amount

 Credits and payments are sorted numerically by the amount of each payment or credit in descending order (greatest to least).

 Date Paid

 Credits and payments are sorted chronologically by each Credit Date in ascending order (oldest to newest). Tenants with multiple charges may display multiple times in the results.

 Last Name

 Credits and payments are sorted alphabetically by the tenant's Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Credits and payments are sorted alphanumerically by the tenant's associated Unit name. Tenants with no unit display first in the results.

 Unit Type

 Credits and payments are sorted alphanumerically by the tenant's associated Unit Type name. Tenants with no unit display first in the results.

 Credits to Include

 Select each credit charge type to include in the report results. All credits that were issued with the selected types to recipients are included. By default, payments are applied to accounts using the PR - Payment Received charge type.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of the tenant or prospect.

 Acct. #

 The system-generated account ID number assigned to each tenant or prospect.

 Unit

 The name of the unit the tenant is leasing, or which the prospect has reserved.

 Unit Type

 The category of unit the tenant is leasing, or which the prospect has reserved.

 Credit Amount

 The amount of each credit or payment posted to the tenant or prospect account during the selected Date Range . Multiple credits and/or payments appear on additional lines.

 Credit Type

 The charge type used to record the credit or payment. By default, payments are applied to accounts using the PR - Payment Received charge type.

 Credit Date

 The date of each credit or payment.

 Charges Paid

 The charge type to which the credit or payment was allocated. If multiple charges were paid, they display on additional rows.

 This column displays only if, in the Detail or Summary report option, Detail is selected.

 Charge Date

 The date of each charge as entered on the tenant or prospect's Transactions tile.

 This column displays only if, in the Detail or Summary report option, Detail is selected.

 Amount Paid

 The amount of each charge that was covered by the credit or payment.

 This column displays only if, in the Detail or Summary report option, Detail is selected.

 Credit Detail Summary Subreport

 The Credit Detail (Summary) subreport provides an overview of the data included in the report, including information about the charges that were paid by the credits and payments included in the report.

 The following fields and columns display in the subreport:

 Field or Column
 Description

 Tenants

 The number of the tenants and, if applicable, prospects included in the report.

 Charge Types

 The total number of charge types included in the report.

 Date Range

 The start and end dates selected in the report options.

 Days In Range

 The total number of days included in the Date Range .

 Current Tenants for all Properties

 The total number of active tenants for all selected properties as of the first date in the Date Range .

 Charge Types

 The name of each charge type associated with a payment or credit included in the report.

 Description

 The optional description of each charge type.

 Tenant Charged

 The number of tenants and prospects who had a credit or payment allocated towards the charge type.

 % Charged

 The percentage of tenants and prospects included who had a credit or payment allocated towards a charge of each type.

 # of Charges

 The total number of times charges of the associated Charge Type displayed in the report.

 Amount Charged

 The total amount of charges of the associated Charge Type that had credits or payments allocated towards them during the Date Range .

 Amount Paid

 The total amount of credits or payments of the associated Charge Type allocated towards the charges during the Date Range .

 Balance

 The remaining amount of the charges of the associated Charge Type included in the report to be paid, calculated using the following formula:

 Balance = Amount Charged - Amount Paid
