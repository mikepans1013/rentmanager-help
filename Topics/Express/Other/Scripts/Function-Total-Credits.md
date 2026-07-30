# Total Credits Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Credits.htm

This function displays the total amount of credits posted to the selected tenant, prospect, or vendor over a specified date range.

 More Information

 Rent Manager treats all negative charges as credits.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.TotalCredits()]

 Displays information from the tenant's View Transactions page for the financial property of a selected asset.

 Lease

 [Tenant().Lease().TotalCredits()]

 Displays information from the tenant's View Transactions page for the specified lease.

 Owner

 [Owner().TotalCredits()]

 Displays information from the owner's Management Company page.

 PrimaryOwner

 [ Class(). PrimaryOwner.TotalCredits()]

 Displays information from the owner's Management Company page.

 Property

 [Property().TotalCredits()]

 Displays information from the tenant's View Transactions page for the specified property.

 Tenant

 [Tenant().TotalCredits()]

 Displays information from the tenant's View Transactions page.

 Vendor

 [Vendor().TotalCredits()]

 Displays information found on the Vendor Credits page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalCredits( "ChargeTypes" , "FromDate" , "ToDate" )]

 Warning

 The following exceptions apply to the TotalCredits function:

 -
 The ChargeTypes parameter listed below applies only to the function when it is used with the FinancialProperty, Lease, Property, and Tenant classes.

 -
 The UnitID parameter listed below applies only to the function when it is used with the Lease and Tenant classes.

 -
 If using this function with the Vendor class, only the FromDate and ToDate parameters are available.

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalCredits("RC,DP")]

 Displays the credits for Rent Charge (RC) and Security Deposit (DP) charge types.

 FromDate

 Specify the date on or after which to examine credits. If no date is specified, the function uses the beginning of time.

 [TotalCredits("","1/1/ 2026 ")]

 Displays credits for all charge types posted on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine credits. If no date is specified, the function uses the end of time.

 [TotalCredits("","1/1/ 2026 ","6/30/ 2026 ")]

 Displays credits for all charge types posted from January 1, 2026 to June 30, 2026 .

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [TotalCredits("","1/1/ 2026 ","6/30/ 2026 ","107")]

 Displays credits for all charge types posted from January 1, 2026 to June 30, 2026 on the unit with unit ID number 107.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().TotalCredits()]

 Displays the total of all credits ever posted to the current tenant.

 [Tenant().Lease().TotalCredits()]

 Displays the total of all credits ever posted to the current tenant associated with the first lease listed.

 [Tenant().Lease(1).TotalCredits()]

 Displays the total of all credits ever posted to the current tenant associated with the first additional lease listed.

 [Vendor().TotalCredits("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the total of all credits posted to the current vendor for the year 2026 .

 [Owner().TotalCredits("LC")]

 Displays the total of all Late Charge (LC) credits ever posted to the current owner.

 [Tenant().TotalCredits("","","","112")]

 Displays the total of all credits ever posted to the current tenant associated with the first lease listed on the unit with the system-generated account ID number 112.
