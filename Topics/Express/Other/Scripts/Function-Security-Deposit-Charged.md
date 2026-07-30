# Security Deposit Charged Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Security-Deposit-Charged.htm

This function displays the total amount of security deposit charges for the selected entity as of a specified date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page for the financial property of the asset.

 Owner

 [Owner().SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page for all the owner's properties.

 Partner

 [Owner().Partner().SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page for all the properties of the partner who shares ownership with the selected owner.

 Primary Owner

 [Property().PrimaryOwner.SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page for all the primary owner's properties.

 Property

 [Property().SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page of the specified property.

 Unit

 [Unit().SecurityDepositCharged()]

 Displays information found on the tenant's View Transactions page of the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager  uses default values.

 [SecurityDepositCharged( "AsOfDate" )]

 Warning

 The AsOfDate parameter listed below only applies to the function when it is used with the Owner, Partner, PrimaryOwner, Property, and Unit classes. If using this function with the FinancialProperty class, there are no available parameters.

 AsOfDate

 Specify the date for which to retrieve the security deposit charges. If no date is specified, today's date is used by default.

 [SecurityDepositCharged("3/14/ 2026 ")]

 Displays the amount of the security deposit charges as of March 14, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().FinancialProperty.SecurityDepositCharged()]

 Displays the total amount of security deposits charged to all tenants at the asset's financial property as of today's date.

 [Owner().Partner().SecurityDepositCharged()]

 Displays the total amount of security deposits charged to all tenants across all the properties of the partner who shares ownership with the selected owner as of today's date.

 [Property().PrimaryOwner.SecurityDepositCharged()]

 Displays the total amount of security deposits charged to all tenants across all the primary owner's properties as of today's date.

 [Tenant().Property().Owner().SecurityDepositCharged()]

 Displays the total amount of security deposit charges for all properties belonging to the first owner of the default property listed for the current tenant as of today's date.

 [Tenant().Lease(1).Unit().SecurityDepositCharged("1/1/ 2026 ")]

 Displays the total amount of security deposit charges for the unit of the first additional lease listed for the current tenant as of January 1, 2026 .
