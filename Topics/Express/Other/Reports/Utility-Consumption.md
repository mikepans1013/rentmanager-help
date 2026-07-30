# Utility Consumption (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Utility-Consumption.htm

The Utility Consumption report displays a list of utility consumption through meter readings and the charges for each. You can use this report to quickly compare consumption rates between multiple units or for the same unit across a period of time. This can help you look for irregularities in utility consumption rates or charges.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Utility Consumption .

 For more information, refer to Control User Access .

 To view the Utility Consumption report, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Utility Consumption .
The Reports: Utility Consumption page displays.

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

 Utilities to Include

 Select each utility to be examined in the report.

 Before or After Posting

 Select an option to determine which meter readings display in the report. For more information, refer to Meter Readings (Page) .

 Option
 Description

 Before

 Meter readings that have been entered but have not been posted.

 After

 Meter readings that have been posted with a Post Date that falls within the report Date Range .

 Exclude Records with Zero Amounts from the Report

 Check to remove accounts from the report results who have no utility consumption activity.

 Sort Options

 Select one of the following options to determine how the report results are organized within each property section.

 Option
 Description

 Meter Number

 Results are sorted by the Meter Number .

 Route

 Results are sorted numerically by each meter's route number.

 Unit

 Results are sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 More Information

 If any meters were swapped during the date range, this is indicated in the readings columns with the output <Swap> . For swapped meters, a subsection displays the meter reading information for both the New Meter and Old Meter . For more information, refer to Swap Meters .

 Column
 Description

 Unit

 The name of the unit associated with the consumption

 Meter Type

 The name of the meter type assigned to the utility associated with the consumption.

 Income Type

 The income type assigned to the meter on the Meter Readings Setup page. Standard ( Std ) meters use the baseline utility charge calculation, and low income ( Low ) meters allow for a reduced rate based on the tenant.

 Class Code

 The class assigned to the meter on the Meter Readings Setup page. This is a per-tenant, single capital letter for the class, which is typically used for customers who receive medical discounts. For example, M for medical.

 Meter Number

 The unique meter number for each unit. This may be a serial number or other identification number.

 Route

 The unique route number for each unit that determines the order they should be recorded as assigned on the Meter Readings Setup page.

 Current Reading

 The most recent meter reading as of the date this report is run within the date range selected.

 If the reading was estimated, the reading amount is appended with (Est.) . If the reading was part of a rollover, the reading amount is appended with (Rollover) .

 Current Reading Date

 The date the Current Reading was recorded.

 Previous Reading

 The last meter reading recorded before the Current Reading .

 Previous Reading Date

 The date the Previous Reading was recorded.

 Consmp

 The consumption amount calculated by subtracting the Previous Reading from the Current Reading .

 Charge

 The amount posted to the tenant's account to cover utility consumption.

 Post Date

 The date the Charge was posted to the tenant's account.
