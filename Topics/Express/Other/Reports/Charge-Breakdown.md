# Charge Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Charge-Breakdown.htm

The Charge Breakdown report displays tenants and prospects from selected properties alongside the charges and credits that have been posted to their accounts within a given date range. The results can include information even if it started prior to the GL start date since this report does not consider the general ledger (GL) start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charge Breakdown .

 For more information, refer to Control User Access .

 To view the Charge Breakdown report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Charge Breakdown .
The Reports: Charge Breakdown page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Exclude Records with Zero Amounts from the Report

 Check to exclude tenants and prospects with no posted charges from the report results.

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Separation Method

 This option becomes available when the Properties tab is selected.

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Separate by Properties

 Generates a separate report for each selected property.

 Separate by Units

 Generates a separate report for each unit associated with the selected properties.

 Hide Columns

 Check Account Number , Unit , and/or Unit Type to prevent the column(s) from displaying in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Tenants are sorted alphanumerically by Unit name. Tenants with no unit display first in the results.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with no unit display first in the results.

 Show Whole Dollar Only

 If checked, charge and credit totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Include Prospects

 Check to display prospect account information in the report results.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

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

 Charge Type Order

 Move the charge types in the list to determine the order of the charge type columns. This list populates based on the properties or owners selected. Only charge types in use by the accounts leasing at the selected properties during the selected time frame display.

 After selecting the report options, click Icon added on the action bar to save them, allowing you to quickly generate the report with that criteria.

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

 Acc.

 The system-generated account ID number assigned to each tenant or prospect upon creation.

 Unit

 The name of the unit the tenant or prospect is associated with.

 Unit Type

 The category of unit at which the tenant or prospect resides.

 Charge Types

 The total amount of charges of each type incurred by the tenant or prospect in the selected date range. There is a column for each charge type included in the report. The charge types that display vary based on the Date Range selection.

 Other

 The total amount for all charge types displayed in the Charge Type Order report section that are not listed in individual columns on the report. This column displays only if all the charge types do not display in the report.

 Total

 The sum of all the tenants’ or prospects’ incurred charges during the Date Range .

 Charge Breakdown Summary Subreport

 The Charge Breakdown (Summary) subreport displays a breakdown of the information included in the report, including statistical data about charge counts and amounts charged. The total amount charged after subtracting NSF adjustments displays at the bottom of the subreport.

 The following rows and columns display in the sub-report:

 Row or Column
 Description

 Charge Type

 The abbreviated names of each charge type included in the report.

 Description

 Additional information each charge type as entered in the Description field.

 Charges

 The number of tenants and prospects who received a charge of each type in the Date Range .

 Tenants

 The number of tenants only (not including prospects) who received a charge of each type in the Date Range .

 % Charged

 The percentage of tenants and prospects included in the selected date range who received a charge of the selected type.

 % of Total $

 The charge type’s percentage of the total amount charged in the report.

 Amount

 The sum of all charges of each charge type in the report.

 Subtotal Charged

 The sum of all charges of all charge types in the report before NSF adjustments are subtracted.

 Less NSF adjustments made during the period

 The amount of NSF adjustments that were added to tenants in the selected properties during the Date Range .

 Total Charged

 The net amount charged to all tenants and prospects included in the report, calculated by subtracting the NSF adjustments in the report from the Subtotal Charged .
