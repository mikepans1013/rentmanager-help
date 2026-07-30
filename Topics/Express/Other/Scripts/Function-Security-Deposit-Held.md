# Security Deposit Held Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Security-Deposit-Held.htm

This function displays the amount of the security deposits held by the management company for the selected entity as of a specified date and/or for a specified unit.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.SecurityDepositHeld()]

 Displays security deposit information found on the details page for tenants associated with the asset's financial property.

 Lease

 [Tenant().Lease().SecurityDepositHeld()]

 Displays security deposit information found on the details page for the tenant associated with the specified lease.

 Owner

 [Owner().SecurityDepositHeld()]

 Displays security deposit information found on the details page for the tenants associated with the owner's properties.

 Partner

 [Owner().Partner().SecurityDepositHeld()]

 Displays security deposit information found on the details page of the tenants associated with the properties belonging to the partner who shares ownership with the selected owner.

 Primary Owner

 [Property().PrimaryOwner.SecurityDepositHeld()]

 Displays security deposit information found on the details page for the tenants associated with the primary owner's properties.

 Property

 [Property().SecurityDepositHeld()]

 Displays security deposit information found on the details page for tenants associated with the specified property.

 Tenant

 [Tenant().SecurityDepositHeld()]

 Displays security deposit information found on the details page for the specified tenant.

 Unit

 [Unit().SecurityDepositHeld()]

 Displays security deposit information found on the details page for the tenant(s) leasing the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SecurityDepositHeld( "AsOfDate" , "UnitID" )]

 Warning

 The UnitID parameter listed below applies only to the function when it is used with the Tenant class.

 AsOfDate

 Specify the date for which to retrieve the security deposits held. If no date is specified, today's date is used by default.

 [SecurityDepositHeld("3/14/ 2026 ")]

 Displays the amount of the security deposits held as of March 14, 2026 .

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [SecurityDepositHeld("","157")]

 Displays the amount of the security deposits held with the system-generated account ID number 157 as of today.

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().FinancialProperty.SecurityDepositHeld()]

 Displays the amount of the security deposits held for the current tenants at the asset's financial property as of today's date.

 [Owner().Partner().SecurityDepositHeld()]

 Displays the amount of security deposits held for the current tenants across all the properties of the first listed partner who shares ownership with the selected owner as of today's date.

 [Property().PrimaryOwner.SecurityDepositHeld()]

 Displays the amount of security deposits held for the current tenants across all the primary owner's properties as of today's date.

 [Tenant().Property().Owner().SecurityDepositHeld()]

 Displays the amount of security deposits held for all properties belonging to the first owner of the tenant's default property as of today's date.

 [Tenant().Lease(1).Unit.SecurityDepositHeld()]

 Displays the amount of the security deposits held by the management company for the unit of the tenant's first additional lease listed as of today's date.

 [Tenant().Lease().Property().Owner(1).SecurityDepositHeld("6/15/ 2026 ")]

 Displays the amount of security deposits held for all properties belonging to the first additional owner of the property of the tenant's first lease listed as of June 15, 2026 .

 [Tenant().SecurityDepositHeld("1/1/ 2026 ","123")]

 Displays the amount of security deposits held for the current tenant as of January 1, 2026 , for the unit with system-generated account ID number 123, if that unit is associated with one of the tenant's leases. Otherwise, it displays 0 .
