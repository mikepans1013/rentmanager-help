# Aged Receivables with Notes (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Aged-Receivables-Notes.htm

This report displays open charge information for tenants, prospects, and owners as of the selected date. The report categorizes open charges based on whether they are 0–30 days, 31–60, 61–90, and 91 or more days past their due date to help you track delinquency. History/note items associated with the accounts also display in the report results.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Aged Receivables with Notes .

 For more information, refer to Control User Access .

 To view the Aged Receivables with Notes report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Aged Receivables with Notes .
The Reports: Aged Receivables with Notes page displays.

 -
 Adjust the report options as desired. Each report option is described below.

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

 Include Date

 Check to display the date on which the history/note was published before the text of the note.

 Charges to Include

 The report displays open charges associated with any of the selected charge types.

 Number of Notes to Show

 Edit the value to determine how many history/note items display in the report results. The most recent history/notes that match the report options display in the report, regardless of the report date range.

 Sort Options

 Select one of the following options to determine how the report results are sorted. If any owners display in the report results, they display first in the list and are sorted alphabetically by the owner Name .

 Option
 Description

 Account Number

 Tenants and prospects are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants and prospects are sorted alphabetically by their Last Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Unit

 Tenants and prospects are sorted alphanumerically by Unit name.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Categories to Include

 Check each history/note category to filter the report results so only history/notes assigned to the selected category display. To view history/notes that are not assigned a Category , select <Unassigned> . For more information, refer to History Categories (Page) .

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Include Accounts with a Balance Greater than or Equal To

 Check this option and enter an amount in the corresponding field so that only accounts with an open balance greater than the entered amount are examined.

 Show Credits

 If checked, credits linked to the associated accounts display in the report results.

 Include Prospects

 Check to display prospect account information in the report results.

 When enabled, prospects display with an asterisk (*) in front of their name in the report results.

 More Information

 To include prospects in the report results, you must also select All in the Tenants to Include field.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Name

 The name of each account. Tenants and prospects are listed with their last name first, while owners are listed with the Name entered on the owner's details page.

 Property

 The property short name for the property associated with an open charge.

 Unit

 The name of the unit associated with a tenant or prospect's open charge.

 Acc. #

 The system-generated ID number that is assigned to each tenant or prospect upon creation.

 Open Charge Age

 An entry is created for each open charge in either 0-30 Days , 31-60 Days , 61-90 Days , or 91+ Days depending on how long it has been since the date of the charge.

 Total

 The total amount of all open charges in the row for each account.

 Notes

 A row(s) containing the Note field from the most recent history/notes that meet the requirements set in the report options. The number of history/notes that display depends on the amount entered in the Number of notes to show report option.

 Charge Summary Subreport

 This subreport displays the total amount of open charges and credits, if enabled in report options, by charge type. The totals for each age group displays along the bottom of the subreport.

 The following columns display in this subreport:

 Column
 Description

 Type

 The abbreviated names of each charge type included in the report.

 Description

 Additional information for each charge type as entered in the Description field.

 Open Charge Age

 The total open charges for each charge type for 0-30 Days , 31-60 Days , 61-90 Days , or 91+ Days depending on how long the charge has remained open.

 Total

 The total amount of all open charges in the row for each charge type.
