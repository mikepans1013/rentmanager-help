# Total Payments Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Payments.htm

This function displays the total amount of payments received on selected charge types within a specified date range.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().TotalPayments()]

 Displays information found on the lease holder's View Transactions page.

 Owner

 [Owner().TotalPayments()]

 Displays information found on the owner's Management Company page.

 PrimaryOwner

 [ Class(). PrimaryOwner.TotalPayments()]

 Displays information found on the primary owner's Management Company page.

 Tenant

 [Tenant().TotalPayments()]

 Displays information found on the tenant's View Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalPayments( "FromDate" , "ToDate" , "ChargeTypes" , "UnitID" )]

 Warning

 The UnitID parameter listed below applies only to the function when it is used with the Lease and Tenant classes.

 FromDate

 Specify the date on or after which to examine loan payments. If no date is specified, the function uses the beginning of time.

 [TotalPayments("1/1/ 2026 ")]

 Displays the payment amount for all payments received on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine loan payments. If no date is specified, the function uses the end of time.

 [TotalPayments("","6/30/ 2026 ")]

 Displays the payment amount for all payments received on or before June 30, 2026 .

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalPayments("","","RC,LC")]

 Displays the payment amounts for Rent Charge (RC) plus Late Charge (LC) charge types.

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [TotalPayments("","","","710")]

 Displays payment amounts for the unit with ID number 710 if that unit is associated with one of the tenant's leases.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().TotalPayments()]

 Displays the total of all payments received for all charge types for the current tenant.

 [Tenant().Lease(1).TotalPayments()]

 Displays the total of all payments received for all charge types associated with the first additional lease listed for the current tenant.

 [Owner().TotalPayments("01/01/ 2026 ","12/31/ 2026 ")]

 Displays the total of all payments received between January 1, 2026 , and December 21, 2026 , for all charge types for the current owner.

 [Tenant().Lease().TotalPayments("","","RC")]

 Displays the total of all payments received for the Rent Charge (RC) charge type associated with the first lease listed for the current tenant.

 [Tenant().TotalPayments("01/01/ 2026 ","12/31/ 2026 ","RC","710")]

 Displays the total of all Rent Charge payments received in 2026 from the current tenant for the unit with the unit ID of 710, if that unit is associated with one of the tenant's leases. Otherwise, it displays 0 .
