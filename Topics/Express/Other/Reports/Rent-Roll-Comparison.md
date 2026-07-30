# Rent Roll Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Rent-Roll-Comparison.htm

The Rent Roll Comparison report tracks week-to-week, month-to-month, or year-to-year recurring charge totals entered on tenant accounts for up to 12 periods in a selected date range. At the end of the report there are totals for all recurring charges in each period, as well as a graphical representation of the recurring charge totals for each period. This report is useful for assessing rent increases or missing charges and for comparing rent rolls for different time ranges to analyze rental performance.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Rent Roll Comparison .

 For more information, refer to Control User Access .

 To view the Rent Roll Comparison report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Rent Roll arrow_forward Rent Roll Comparison .
The Reports: Rent Roll Comparison page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 This report is generated using data from the day for each month in the date range. For example, if you enter a From date of 1/25/ 2026 and an End date of 3/31/ 2026 , the active recurring charges on 1/25/ 2026 , 2/25/ 2026 , and 3/25/ 2026 are used in the report results. This means if you have recurring charges active starting 3/31/ 2026 , they won't be represented in the report results.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Site Classification

 Tenants are sorted alphanumerically by Site Classification name.

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Charges to Include

 The report displays total recurring charges associated with any of the selected charge types.

 Posting Period

 Select one of the following options to determine how the Date Range is divided into periods: Monthly , Weekly , or Yearly . Up to twelve month-long, week-long, or year-long periods, depending on your selection. Tenant recurring charge totals display for each full period.

 More Information

 If a date range contains more than twelve periods, only the first twelve display in the report due to space constraints. If you’d like to view more than twelve periods, select the desired date range, then select CSV  in the drop-list to the left of the Generate Report button.

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property is selected.

 The site classification that displays is based on the day chosen for the Site Classification Date option. Units not associated with a manufactured housing–type property display as blank in this column.

 Select one of the following Site Classification Date options to determine the date used to pull each unit's site classification:

 Option
 Description

 First day of period

 Display each unit's site classification as of the From date selected in the Date Range option.

 Last day of period

 Display each unit's site classification as of the To date selected in the Date Range option.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each tenant who leased from the property during any part of the selected Date Range .

 Unit

 The name of the unit the tenant inhabits.

 Period Columns

 The totals of recurring charges inherited by tenants at the property for each period in the selected Date Range .

 At the bottom of each column, the total amount in recurring charges that are inherited by tenants in the period display.

 More Information

 If a date range contains more than twelve periods, only the first twelve display in the report due to space constraints. If you’d like to view more than twelve periods, select the desired date range, then select CSV  in the drop-list to the left of the Generate Report button.

 Site Classification

 This system-derived status indicates the operational state of manufactured housing sites based on the presence of an RV on the lease or home asset at the unit location, homeowner status, occupancy, leases in a rent-free period, and unit status. For more information, refer to Site Classification .

 This column only displays for properties with a Property Type of Manufactured Housing and when Include Site Classification is enabled in report options.

 Total

 The total amount in recurring charges that will be inherited by the tenant during the entire Date Range .

 Rent Roll Totals Subreport

 This summary section totals the recurring charges of all the properties for each period included in this report.
