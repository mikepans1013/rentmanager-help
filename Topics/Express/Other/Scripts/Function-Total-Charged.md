# Total Charged Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Charged.htm

This function displays the total amount of charges posted over a specified date range.

 More Information

 NSFADJ (non-sufficient funds adjustment) charges are included in the TotalCharged function. However, NSF payments are not included in the TotalPayments function.

 This would result in Total Charged – Total Payments ≠ 0 .

 To remove the NSFADJ charges from the equation, use the following script:

 [Format((TotalCharged-TotalCharged("NSFADJ")),"currency")]

 Payments that are voided can be removed in the same way. Replace "NSFADJ" in the above example with "VOIDAJ".

 CashPay adjustments use "CASHAJ".

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Lease().TotalCharged]

 Displays the total charges as shown on the lease holder's Transactions page.

 Owner

 [Owner().TotalCharged]

 Displays the total charges as shown in the owner's Mgmt Company page.

 PrimaryOwner

 [ Class(). PrimaryOwner.TotalCharged]

 Displays the total charges as shown in the primaryowner's Mgmt Company page.

 Tenant

 [Tenant().TotalCharged()]

 Displays the total charges as shown on the tenant's Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalCharged( "ChargeTypes" , "FromDate" , "ToDate" , "UnitID" )]

 Warning

 The UnitID parameter listed below only applies to the function when it is used with the Tenant class. If using this function with the Lease class or the Owner class, this parameter is not available.

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalCharged("RC,LC")]

 Displays the charges for Rent Charge plus Late Charge charge types.

 FromDate

 Specify the date on or after which to examine charges.

 [TotalCharged("","1/1/ 2026 ")]

 Displays charges for all charge types posted on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine charges.

 [TotalCharged("","1/1/ 2026 ","6/30/ 2026 ")]

 Displays charges for all charge types posted from January 1, 2026 , to June 30, 2026 .

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [TotalCharged("","","","585")]

 Displays the unit with the ID number 585 if that unit is associated with one of the tenant's leases.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().TotalCharged()]

 Displays the total of all charges ever posted to the current tenant.

 [Owner().TotalCharged()]

 Displays the total of all charges ever posted to the current owner.

 [Tenant().Lease(1).TotalCharged("RC")]

 Displays the total of all Rent Charges ever posted to the first additional lease for the current tenant.

 [Tenant().TotalCharged(""."1/1/ 2026 ","12/31/ 2026 ")]

 Displays the total of all charges posted to the current tenant for the year 2026 .

 [Tenant().TotalCharged("","","","112")]

 Displays the total of all charges ever posted to the current tenant for the unit with the unit ID number 112, if that unit is associated with one of the tenant's leases. Otherwise, it displays 0 .
