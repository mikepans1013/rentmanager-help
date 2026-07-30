# Total Reserve Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Reserve.htm

This function displays the total amount of the Reserve of all active ownerships of the selected owner. Active ownerships are determined by the Contract Start and Contract End dates.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Owner

 [Owner().TotalReserve()]

 Displays information found on the owner's Ownership page.

 Primary Owner

 [Property().PrimaryOwner.TotalReserve()]

 Displays information found on the Ownership page of the property's primary owner.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalReserve( "ContractFromDate" , "ContractToDate" )]

 ContractFromDate

 Examines only active ownerships whose contracts begin on or after this date. This corresponds to the ownership's Contract Start date.

 More Information

 If you specify this optional parameter, you must also specify the ContractToDate parameter (or use its default of today's date) to establish a date range.

 [TotalReserve("1/1/ 2026 ","")]

 Displays the sum of reserves for ownerships with contract active anytime between 1/1/ 2026 and today.

 ContractToDate

 Examines only active ownerships whose contracts end on or before this date. This corresponds to the ownership's Contract End date.

 More Information

 If you specify this optional parameter, you must also specify the ContractFromDate parameter (or use its default of today's date) to establish a date range.

 [TotalReserve("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the sum of reserves for ownerships with contracts active anytime between 1/1/ 2026 and 12/31/ 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Owner().TotalReserve()]

 Displays the total amount of the reserves of all ownerships active as of today for the selected owner.

 [Property().PrimaryOwner.TotalReserve()]

 Displays the total amount of the reserves of active ownerships of the selected property's primary owner as of today.

 [Owner().TotalReserve("1/1/ 2026 ","")]

 Displays the total amount of the reserves of the ownerships active anytime between 1/1/ 2026 and today for the selected owner.

 [Owner().TotalReserve("1/1/ 2026 ","7/1/ 2026 ")]

 Displays the total amount of the reserves of the ownerships active anytime between 1/1/ 2026 and 7/1/ 2026 for the current owner.
