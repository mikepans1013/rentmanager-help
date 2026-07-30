# Credit Card Reconciliation (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Credit-Card-Reconciliation.htm

For users who want to be able to import online credit card statements to take advantage of the time-saving electronic credit card reconciliation tool, Rent Manager system preferences provide default options for identifying how to interpret and validate imported CSV (comma-separated values) files.

 Before your first CSV import or when reconciling multiple credit card statements (or when reconciling multiple credit cards that use different statement formats), make sure the formatting specifications in your system preferences match your specific credit card statement. Statements must be in CSV or QIF format to be imported into Rent Manager . For more information, refer to Electronic Credit Card Reconciliation .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Credit Card Reconciliation .
The System Preferences: Credit Card Reconciliation page displays.

 -
 Edit the settings as desired. Each setting is described in the heading below.

 -
 Click Save .
The system preference configuration is updated.

 CSV Import

 You can determine how bank reconciliations are imported with CSV files. with the settings below.

 Option
 Description

 Begin import from line

 Select the line number (row) where actual data in your CSV file begins. This will be the point at which the import will begin. Default is line 1. Column labels are considered a header and not actual data.

 Columns
(Date, Description, and Reference)

 Select the column number in your import file that contains data for the related column.

 One amount column/Separate debit and credit columns

 Select when the import file either uses a single column or separate columns for credits and debits. The following options display depending on the selection made.

 Amount column

 Select the column number that contains the amount data. This option is available only when the One amount column option is selected.

 Debits (checks) positive

 If checked, all positive values are classified as debits (checks), and all negative values are classified as credits (deposits). If unchecked, all positive values are classified as credits (deposits), and all negative values are classified as debits (checks).

 This option is available only when the One amount column option is selected.

 Debit column (charges)

 Select the column number in your import file that contains data for debits.

 If Positive by default is checked for the Debit column (checks) , Rent Manager will reverse the positive and negative signs in both columns.

 This option is available only when the Separate debit and credit columns option is selected.

 Credit column (deposits)

 Select the column number in your import file that contains data for credits.

 If Positive by default is checked for the Credit column (deposits) , Rent Manager will not modify the numbers by default.

 This option is available only when the Separate debit and credit columns option is selected.

 Date Format

 Enter the format of your numeric day, month, and year data as it appears in the Date column of the import file.

 More Information

 Use the following examples to understand how you can use the formatted options.

 Input
 Example

 YYYYMMDD (common)

 2026 1130

 YYMMDD

 26 1130

 MMDDYY

 1130 26

 MMDDYYYY (common)

 1130 2026

 MM/DD/YY

 11/30/ 26

 MM-DD-YYYY

 11-30- 2026

 YYYYMMDD###############

 2026 11301200000(0: GMT)

 ############YYYYMMDD

 12:34:56 AM 2026 1130

 You may enter any of the following formats into the field to determine how the information displays:

 M

 Month, two-character numeric, except no leading zero for 1–9

 MM

 Month, two-character numeric, with leading zero for 01–09

 D

 Day, two-character numeric,
except no leading zero for 1–9

 DD

 Day, two-character numeric,
with leading zero for 01–09

 YY

 Year, two digits

 YYYY

 Year, four digits

 #

 Ignore data

 - (dash)

 Literal dash character

 / (forward slash)

 Literal forward slash character

 Remove non-numeric characters from Reference

 If checked, any characters that are not integers are not included in the Check No. column during the import.
