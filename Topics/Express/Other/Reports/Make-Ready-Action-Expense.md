# Make Ready Action Expense (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Make-Ready-Action-Expense.htm

The Make Ready Action Expense report evaluates expenses per unit during the unit turnover process. The total expenses for completed make-ready processes are calculated from issue work orders within your make-ready actions. The report also displays both the total and average expenses per property, and the total and overall average expenses per make-ready action. For more information, refer to Make-Ready Actions (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Make Ready Action Expense .

 For more information, refer to Control User Access .

 To view the Make Ready Action Expense report, do the following:

 -
 Go to arrow_forward Services arrow_forward Make Ready arrow_forward Make Ready Action Expense .
The Reports: Make Ready Action Expense page displays.

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

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below. The averages for each property displays at the bottom of each listed property. The average amount of make ready actions per unit at the property uses the following formula:

 Averages for Property = Total Cost for the unit / Number of make ready processes at the property

 Columns
 Description

 Actions

 The total amount of expenses per unit for each of your make ready actions. Each make ready action is given its own column. Actions with only assigned make ready items display.

 Total Expense

 The total amount of expenses per unit for all make ready actions.

 Unit

 The name of the unit with a completed make ready process. The unit name displays below the name of the associated property.

 Report Totals Subreport

 The Report Totals subreport displays the overall totals and averages of each column for all properties listed in the report.

 Row
 Description

 Overall Averages

 The average amount of a make ready action per unit, for all properties, using the following formula:

 Overall Average = Total Cost for the properties / Number of make ready processes for all properties

 Overall Totals

 The total amount of the make ready action for all properties, using the following formula:

 Overall Total = Property Total + Property Total

 Action Summary Subreport

 In the Action Summary subreport, you can review summary averages at the bottom of the Make Ready Action Expense report.

 Column
 Description

 Action

 The name of the make ready action that is listed as a column in the report.

 Average Expense

 The average amount of a make ready process per unit, for all properties, using the following formula:

 Average Expense = Total Cost for all properties / Number of make ready processes for all properties
