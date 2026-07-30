# Make Ready Turnover (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Make-Ready-Turnover.htm

The Make Ready Turnover report displays unit and make ready process information during the report date range for the selected properties. This report helps you track which units have had a make ready process completed and how long it takes, on average, for a make ready process to be finished.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Make Ready Turnover .

 For more information, refer to Control User Access .

 To view the Make Ready Turnover report, do the following:

 -
 Go to arrow_forward Services arrow_forward Make Ready arrow_forward Make Ready Turnover .
The Reports: Make Ready Turnover page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each unit with a completed make ready process. The units are organized by property display.

 Summary

 Condensed information about all units with completed make ready processes at a property on a single line item display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the key information selected in the report options, which determine the report contents including the report name, date range, and which properties were examined in the report.

 Column Descriptions

 The report generates with different columns depending on the report option selected in the Detail or Summary section. The columns that display in the report are described below.

 Detail

 If the report option for Detail is selected, the following columns display.

 Column
 Description

 Completed

 The date on which the unit's make ready process was completed.

 Days To Turn

 The number of days it took to complete the make ready process for this unit.

 Manager

 The name of the make ready Manager as entered on the Make Ready Details page.

 Started

 The Start Date of the unit's make ready process as shown on the Make Ready Details page.

 Unit

 The name of the unit with a completed make ready process.

 Unit Type

 The Unit Type assigned to each unit on the unit details page.

 If the report option for Detail is selected, the following fields display.

 Field
 Description

 Average Days To Turn

 The average number of days it took to complete make ready processes for all units at the property during the selected date range. The following formula is used to calculate the average:

 Average Days To Turn = Total Days to Turn for the property / Number of completed make ready processes at the property

 Overall Average Days To Turn

 The average number of days it took to complete make ready processes at all selected properties during the report's date range. The following formula is used to calculate the average:

 Overall Average Days To Turn = Total Average Days to Turn for all selected properties / Total number of selected properties with completed make ready processes

 Summary

 If the report option for Summary is selected, the following columns display.

 Column
 Description

 Average Days To Turn

 The average number of days it took to complete make ready processes for all units at the property during the selected date range. The following formula is used to calculate the average:

 Average Days To Turn = Total days to turn for the property / Number of completed make ready processes at the property

 Days To Turn

 The number of days it took to complete the make ready process for this unit.

 Property

 The name of the property at which make ready processes were completed.

 Units Turned

 The number of completed make ready processes at the property during the selected date range.

 Summary Subreport

 When the report option for Detail is checked, the Summary subreport displays the names of the properties at which make ready processes were completed as well as the average number of days it took to complete those processes.

 The columns that display in the report summary are described below.

 Column
 Description

 Average Days To Turn

 The average number of days it took to complete make ready processes for all units at the property during the selected date range. The following formula is used to calculate the average:

 Average Days To Turn = Total days to turn for the property / Number of completed make ready processes at the property

 Property

 The name of the property at which make ready processes were completed.
