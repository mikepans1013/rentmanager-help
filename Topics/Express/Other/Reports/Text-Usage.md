# Text Usage (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Text-Usage.htm

The Text Usage report displays the daily, weekly, or monthly amount of outgoing and incoming text (SMS) and multimedia (MMS) messages within the selected date range, including batch text messages sent from Text Broadcasting . This report examines messages associated with all entities in Rent Manager , including tenants, prospects, owners, vendors, and so on. The total amount of outgoing and incoming messages of each type, as well the overall total number of texts during the date range, are calculated at the bottom of the report.

 Texts that exceed a 160 SMS character count are converted into multiple message segments of 160 characters up to a maximum of 1600 characters. For example, if an SMS message of 400 characters is sent that requires three segments, the SMS Sent column increases by 3.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Text Usage .

 For more information, refer to Control User Access .

 To view the Text Usage report, do the following:

 -
 Go to arrow_forward Communication arrow_forward Texting arrow_forward Text Usage .
The Reports: Text Usage page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Report Type

 In the Show texts based on the grouping field, select an option to determine how text message activity during the Date Range displays in the report results.

 Option
 Description

 Daily

 The number of text messages sent and received each day.

 Monthly

 The number of text messages sent and received each month.

 Weekly

 The number of text messages sent and received each week, starting on a specific day.

 In the Starts on drop-down, select which day is considered the beginning of the week. For example, if you select Monday , the report displays each week from Monday to Monday.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date of the text message data being displayed. The Date is formatted according to the Report Type selected in the report options. The results of each option are described below.

 More Information

 If you select Weekly or Monthly as the Report Type and an asterisk (*) displays next to a date, it means the Date Range of this row is only a partial week or month.

 For example, if you select Weekly but the first week of the month starts on Friday and you select Monday as the start of your week, an asterisk displays next to this date in the report to signify a difference in the number of days reported.

 Daily

 Displays as MM/DD/YYYY for each day in the date range.

 Weekly

 Displays as MM/DD/YYYY for the start of each week in the date range.

 Monthly

 Displays as the name of each month in the date range.

 MMS Received

 The total number of incoming MMS messages during each day, week, or month.

 MMS Sent

 The total number of outgoing MMS messages during each day, week, or month.

 SMS Received

 The total number of incoming SMS message segments during each day, week, or month.

 SMS Sent

 The total number of outgoing SMS message segments during each day, week, or month.

 Total # of Texts

 The total number of outgoing and incoming SMS message segments and MMS messages during the Date Range .
