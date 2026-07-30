# Security Deposit Received Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Security-Deposit-Received.htm

This function displays the total amount of security deposits received for the selected entity as of a specified date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenants at the asset's financial property.

 Owner

 [Owner().SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenants at all the owner's properties.

 Partner

 [Owner().Partner().SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenants at all the properties of the partner who shares ownership with the selected owner.

 Primary Owner

 [Property().PrimaryOwner.SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenants at all the primary owner's properties.

 Property

 [Property().SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenants at the specified property.

 Unit

 [Unit().SecurityDepositReceived()]

 Displays security deposit information found on the View Transactions page of the tenant(s) in the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SecurityDepositReceived( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the security deposits received. If no date is specified, today's date is used by default.

 [SecurityDepositReceived("1/1/ 2026 ")]

 Displays the total amount of security deposits received as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().FinancialProperty.SecurityDepositReceived()]

 Displays the total amount of security deposits received from current tenants at the asset's financial property.

 [Owner().SecurityDepositReceived()]

 Displays the total amount of security deposits received by all tenants across all of the owner's properties.

 [Tenant().Property().Owner().SecurityDepositReceived()]

 Displays the total amount of security deposits received for all properties belonging to the first owner of the default property listed for the current tenant as of today.

 [Tenant().Lease().Property().Owner().SecurityDepositReceived()]

 Displays the total amount of security deposits received for all properties belonging to the first owner of the property of the tenant's first lease listed as of today.

 [Tenant().Lease(1).Property().Owner().SecurityDepositReceived("3/14/ 2026 ")]

 Displays the total amount of security deposits received for all properties belonging to the first owner of the selected property of the tenant's first additional lease as of March 14, 2026 .

 [Tenant().Lease().Unit().SecurityDepositReceived("1/1/ 2026 ")]

 Displays the total amount of security deposits received for the unit of the tenant's first lease listed as of January 1, 2026 .
