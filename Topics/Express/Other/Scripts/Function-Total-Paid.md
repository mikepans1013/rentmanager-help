# Total Paid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Paid.htm

This function displays the total payment amount of the Checks payment type to the selected vendor during the selected date range.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Vendor

 [Vendor().TotalPaid()]

 Displays information found on the vendor's Vendor Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalPaid( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine check payments to vendors. If no date is specified, the function uses the beginning of time.

 [TotalPaid("01/01/ 2026 ")]

 Displays the total amount of payments made on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine check payments to vendors. If no date is specified, the function uses the end of time.

 [TotalPaid("","12/31/ 2026 ")]

 Displays the total amount of payments made on or before December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Vendor().TotalPaid()]

 Displays the total amount of all check payments to vendors.

 [Vendor().TotalPaid("01/01/ 2026 ","12/31/ 2026 ")]

 Displays the total amount of check payments to vendors made from January 1, 2026 , to December 31, 2026 .

 [Vendor(23).TotalPaid("04/01/ 2026 ")]

 Displays the total amount of check payments to the vendor with the ID number 23 since April 1, 2026 .
