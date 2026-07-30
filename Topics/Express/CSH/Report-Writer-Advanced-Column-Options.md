# Report Writer Advanced Column Options (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Report-Writer-Advanced-Column-Options.htm

When you create a custom report in Report Writer , each column can be further customized to determine the format of the report, filter the data generated, and set up scripting for the column.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Report writer templates
 View, Edit

 Specific Report Writer template privileges must be enabled for each entity-type for which you wish to delete Report Writer reports (e.g., Owner report writer templates ).

 For more information, refer to Control Custom Report Access .

 To manage the advanced column settings for a Report Writer report, go to   arrow_forward   Report Writer and select a report. Then, on the Report Columns tile for the desired column, click arrow_forward Settings .

 General

 The General tile displays column formatting options. Each field is described below.

 Field
 Description

 Heading

 The name of the column as it displays on the report.

 Formula

 The scripting formula used to generate the information in this report column. To open the Script Builder pop-up, click .

 Width

 The amount of horizontal space this column takes up on the report, measured in inches.

 Total

 If checked, a row for the total amount calculated in this column displays at the bottom of the column on the report. How the total displays can be further customized in the Advanced Settings tile.

 Hide

 If checked, the column data is generated when the report is run, but the column is not displayed on the report. For example, if you need to generate data for a filter to use in the report, but you don't need that data to show in the report, you can hide the column.

 Filter

 In some instances, you might want to filter the data that displays on a report so that only certain information displays. For example, for data in a Balance column, you might only want balances above a certain amount to display on the report. In this case, you use a filter to customize the amount that displays ( Rent Manager still pulls the data; however, it only displays data that fits the filter criteria).

 To determine how data should be filtered for the column, in the Filter tile, click Add Item . The Value is the number value that corresponds with the selected Operator for this filter. For example, if you selected < as the operator and enter 10 as the value, the report column displays only values that are less than ten.

 The following Operator options are available to select from.

 Operator
 Description

 < (Less than)

 Is less than the number entered for the Value .

 > (Greater than)

 Is greater than the number entered for the Value .

 <= (Less than or equal to)

 Is less than or equal to the number entered for the Value .

 >= (Greater than or equal to)

 Is greater than or equal to the number entered for the Value .

 = (Equal to)

 Equals the number entered for the Value .

 != (Not equal to)

 Does not equal the number entered for the Value .

 Advanced Settings

 In the Advanced Settings tile, you can also adjust the size of individual columns as well as how the data displays.

 The following fields are available for the formatting of the column:

 Field
 Description

 Left Spacing (inches)

 The desired distance in inches you want to pad the left side of the column.

 Height (inches)

 The desired height in inches you want the column to display. Increasing this number increases the space between each row.

 Can Grow

 If checked, this option allows individual rows to grow vertically beyond the selected Height above.

 Word Wrap

 If checked, this option allows the content in this column to wrap into multiple lines if the horizontal space is not sufficient for the data to display fully.

 Fonts

 The desired typeface for the report heading, value that displays in the column, or the total that displays on the bottom of the column. Select a font from the drop-down menu to adjust the associated Font and Size in addition to selecting optional Bold and Italics treatments.

 Alignment

 The desired alignment of data in the column ( Left , Right , or Center ).

 Format

 The desired formatting of the data in the column. To open the Format pop-up, click . The following Category options are available.

 Custom

 An optional custom sample value that determines how the numeric, percentage, or date data display. For example, if you are exporting report data to another system, you may want to further customize date values to match the external system.

 Numeric

 The data in this column displays as numbers only.

 The Decimal Places field allows you to set the number of decimal places you wish to see after the decimal point. Additionally, to insert comma(s) in large numbers, check Use 1000 Separator (,) .

 If the data in the report is in currency values, check Show Currency Sign ($) to insert the dollar sign.

 You can also select to display style for negative values with a minus before the value or wrapped in parentheses.

 Percentage

 The data in this column displays as a percent amount.

 The Decimal Places field allows you to set the number of decimal places you wish to see after the decimal point.

 Date

 The data in this column displays in a date format. You can select from a list of date formats, such as Tuesday, July 21, 2026 or 7/21/2026 .

 Data Type

 The type of data expected to be returned for this column. The following options are available:

 General/String

 Data that is a mixture of letters and numbers (e.g., alphanumeric).

 String

 Data that is letters (e.g., alpha).

 Decimal

 Data that is numbers and can include a decimal point.

 Numeric

 Data that is whole numbers. If using a filter, it is recommended you select this data type to ensure the filter displays the correct information.

 Date

 Data for dates formatted in mm/dd/yyyy style.

 Boolean

 Data that is True or False statements (based on the outcome per result, will display if the script statement comes back as true or false).

 File

 Data that is a basic file type (e.g., pdfs, documents, text files).

 Image

 Data that is an image file (e.g., png, jpg, etc.).

 Date & Time

 Numeric data for dates and times displayed in mm/dd/yyyy hh:mm:ss style.

 Total Types

 Customize how the Total row calculates at the end of the report. All of the options display, regardless of your data type, but the options affect only data types that calculate total amounts, such as Decimal and Numeric . Data types such as File and Image cannot calculate totals.

 The following options are available:

 Sum

 The total amount of the values in the column added together.

 Average

 The mean of the values in the column, calculated by adding all values together and dividing by the number of values.

 Count

 The total number of values in the column.

 Min

 The smallest value amount in the column.

 Max

 The largest value amount in the column.

 Std Deviation

 The spread of values in the column, measured around the average.

 Distinct Sum

 The sum of the values in the column, minus any duplicate values.

 Distinct Avg

 The average of the values in the column, minus any duplicate values.

 Distinct Count

 The number of fields in the column, minus any fields with duplicate values.

 Non-Blank Count

 The number of fields that contain data (i.e., blank fields are not included in this amount).

 Script...

 Applies scripting function(s) to column data. Use the field below to enter the specific scripting function(s) you would like to use. For more information, refer to Scripting .
