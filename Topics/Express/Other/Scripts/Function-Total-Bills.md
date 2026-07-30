# Total Bills Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Bills.htm

This function displays the total amount of the Bills transaction type on the selected vendor's Vendor Transactions page during the selection time.

 The class that utilizes this function, and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Vendor

 [Vendor().TotalBills()]

 Displays information found on the vendor's Vendor Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalBills( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine vendor bills. If no date is specified, the function uses the beginning of time.

 [TotalBills("01/01/ 2026 ")]

 Displays the total amount of vendor bills dated on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine vendor bills. If no date is specified, the function uses the end of time.

 [TotalBills("","12/31/ 2026 ")]

 Displays the total amount of vendor bills dated on or before December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Vendor().TotalBills()]

 Displays the total amount of all bills from the selected vendor.

 [Vendor().TotalBills("01/01/ 2026 ")]

 Displays the total amount of all bills dated on or after January 1, 2026 from the selected vendor.

 [Vendor().TotalBills("01/01/ 2026 ","12/31/ 2026 ")]

 Displays the total amount of all bills from the selected vendor from January 1, 2026 to December 31, 2026 .
