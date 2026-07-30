# Bank Reconciliation (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Bank-Reconciliation.htm

For users who want to take advantage of the time-saving electronic bank reconciliation tool, Rent Manager system preferences provide default options for identifying how to interpret and validate imported CSV (comma-separated values) files.

 Before your first CSV import (or when reconciling multiple banks that use different statement formats), make sure the formatting specifications in your system preferences match the specific bank statement you are reconciling. Bank statements must be in CSV or QIF format to be imported into Rent Manager . For more information, refer to Electronic Bank Reconciliation .

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Bank Reconciliation .
The System Preferences - Bank Reconciliation page displays.

 -
 Edit the settings as desired. Each setting is described in the heading below.

 -
 Click Save .
The system preference configuration is updated.

 CSV Import

 You can determine how bank reconciliations are imported with CSV files with the settings below.

 Option
 Description

 Begin import from line

 Select the line number (row) where actual data in your CSV file begins. This is the point at which the import begins. By default, line 1 is selected. Column labels are considered a header and not actual data.

 Date column

 Select the column number in your import file that contains data for the posting date of each imported transaction.

 Description column

 Select the column number in your import file that contains data for the description for each imported transaction.

 Check No. column

 Select the column number in your import file that contains data for the identifying number for each imported check.

 One amount column/Separate debit and credit columns

 Select whether the CSV import file uses either a single column or separate columns for credits and debits.
The following options display depending on the selection made.

 Amount column

 Select the column number that contains the amount data. This option is available only when the One amount column option is selected.

 Debits (checks) positive

 If checked, all positive values are classified as debits (checks), and all negative values are classified as credits (deposits). If unchecked, all positive values are classified as credits (deposits), and all negative values are classified as debits (checks).

 This option is available only when the One amount column option is selected.

 Debit column (checks)

 Select the column number in your import file that contains data for debits (checks).

 If Positive by default is checked for the Debit column (checks) , Rent Manager reverses the positive and negative signs in both columns.

 This option is available only when the Separate debit and credit columns option is selected.

 Credit column (deposits)

 Select the column number in your import file that contains data for credits (deposits).

 If Positive by default is checked for the Credit column (deposits) , Rent Manager does not modify the numbers by default.

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

 YYYYMMDD#############

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

 Remove non-numeric characters from Check No.

 If checked, any characters that are not integers are not included in the Check No. column during the import.
