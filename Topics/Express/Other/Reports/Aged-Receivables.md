# Aged Receivables (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Aged-Receivables.htm

The Aged Receivables report displays open charge information for tenants, prospects, and owners as of the selected date. The report categorizes open charges based on whether they are 0–30 days, 31–60, 61–90, or 90+ days past their creation date to help you track delinquency.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Aged Receivables .

 For more information, refer to Control User Access .

 To view the Aged Receivables report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward  Charges arrow_forward Aged Receivables .
The Reports: Aged Receivables page displays.

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

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item displays for each open amount organized by account.

 Summary

 Only the open amount total for each account is displayed.

 Accounts to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 Current

 Tenants are considered current if their Move In date is on or before the report date and with either no Move Out date or a Move Out date after the report date. This option also displays all owners with an ownership Start Date on or before the report date with either no End Date date or an End Date date after the report date

 Past

 Any tenants with a Move Out date set before the report date and owners with a ownership End Date set before the report date.

 All

 All future, current, and past tenants and owners.

 Include Accounts with a Balance Greater than or Equal To

 Check this option and enter an amount in the corresponding field so that only accounts with an open balance greater than the entered amount are examined.

 Show Credits

 If checked, credits linked to the associated accounts display in the report results.

 Include Prospects

 Check to display prospect account information in the report results.

 When enabled, prospects display with an asterisk (*) in front of their name in the report results.

 More Information

 To include prospects in the report results, you must also select All in the Tenants to Include field.

 Charges to Include

 The report displays open charges associated with any of the selected charge types.

 Sort Options

 Select one of the following options to determine how the report results are sorted. If any owners display in the report results, they display first in the list and are sorted alphabetically by the owner Name .

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Name

 The name of each tenant, prospect, or owner with the last name first.

 Property

 The property short name for the property associated with a tenant or prospect's open charge.

 Unit

 The unit name associated with a tenant or prospect's open charge.

 Acc. #

 The system generated ID number that is assigned to each tenant or prospect upon creation.

 Type

 The name of the charge type selected for each open charge.

 Date

 The date entered on each open charge.

 Open Charge Age

 A tenant or prospect's open charges are displayed in the 0-30 Days , 31-60 Days , 61-90 Days , or 91+ Days columns depending on the number of days since the charge date. Each age group displays the sum of all open charges at the bottom for each tenant or prospect.

 If you selected the Summary report option, the sum of all open charges in each age group for each tenant or prospect.

 Total

 The total sum of all open charges in the row for each tenant or prospect.

 Charge Summary Subreport

 This subreport displays the total amount of open charges and credits, if enabled in report options, by charge type. The total for each age group displays along the bottom of the subreport .

 The following columns display in this subreport:

 Column
 Description

 Type

 The abbreviated names of each charge type included in the report.

 Description

 Additional information for each charge type as entered in the Description field.

 Open Charge Age

 The total open charges for each charge type for 0-30 , 31-60 , 61-90 , or 91+ days depending on how long the charge has remained open.

 Total

 The total amount of all open charges in the row for each charge type.
