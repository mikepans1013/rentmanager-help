# Service Issue Survey Ratings (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Service-Issue-Survey-Ratings.htm

The Service Issue Survey Ratings report allows you to examine how your maintenance techs are performing by displaying the average star rating for each selected technician over a set date range based on the specified survey and star rating question.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Service Issue Survey Ratings .

 For more information, refer to Control User Access .

 To view the Service Issue Survey Ratings report, do the following:

 -
 Go to arrow_forward Communication arrow_forward Surveys arrow_forward Service Issue Survey Ratings .
The Reports: Service Issue Survey Ratings page displays.

 -
 Adjust the report options as desired.

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

 Issue Assigned To

 Select a user to filter the report results so only service issues that are assigned to that user display.

 To view only service issues that have not been assigned to a user, select <Unassigned> . Alternatively, to include service issues assigned to any user that match the other selected report options, select All .

 Optionally, check Include Inactive Users to include user accounts no longer marked as active.

 Survey

 Select which surveys to include in the report results. Only surveys with a type of Service Issue , status of Active , and have at least one active star rating question display in the drop-down.

 Rating Based On

 Select which survey Star Rating (1-5) question to include in the report results. Only active Star Rating (1-5) questions associated with the selected Survey display in the drop-down.

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Star Rating - Descending

 Average ratings are sorted in descending order (most stars to least stars).

 Star Rating - Ascending

 Average ratings are sorted in ascending order (least stars to most stars).

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Issue Assigned To

 The name of the Rent Manager user assigned to the service issue.

 Average Rating

 The average star rating associated with the Rent Manager user, rounded to the nearest tenth using the following formula:

 Average Rating = Total amount of stars received / Total amount of answered questions

 If a tenant did not respond to a star rating question (but did respond to other questions on the survey), that response is not included when calculating the average rating.

 Number of Responses

 The number of tenants that responded to the survey question.
