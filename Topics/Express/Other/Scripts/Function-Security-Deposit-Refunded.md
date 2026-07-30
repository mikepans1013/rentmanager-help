# Security Deposit Refunded Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Security-Deposit-Refunded.htm

This function displays the total amount of the security deposits refunded for the selected entity as of a specified date.

 More Information

 This value may not be equal to the value of all security deposits refunded to past tenants because it includes deposit funds that were allocated to outstanding tenant charges before a refund was completed.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenants at the financial property of the asset.

 Owner

 [Owner().SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenants at all the owner's properties.

 Partner

 [Owner().Partner().SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenants at all the properties of the partner who shares ownership with the selected owner.

 Primary Owner

 [Property().PrimaryOwner.SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenants at all the primary owner's properties.

 Property

 [Property().SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenants at the specified property.

 Unit

 [Unit().SecurityDepositRefunded()]

 Displays security deposit information found on the Transactions tile of the tenant(s) in the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SecurityDepositRefunded( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the refunded security deposits. If no date is specified, today's date is used by default.

 [SecurityDepositRefunded("3/14/ 2026 ")]

 Displays the total amount of security deposits refunded as of March 14, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().FinancialProperty.SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to all tenants at the asset's financial property as of today's date.

 [Owner().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to all tenants across all the owner's properties as of today's date.

 [Owner().Partner().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to all tenants across all the properties of the partner who shares ownership with the selected owner as of today's date.

 [Property().PrimaryOwner.SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to all tenants across all the primary owner's properties as of today's date.

 [Tenant().Property().Owner().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded for all properties belonging to the first owner of the default property listed for the current tenant as of today's date.

 [Tenant().Lease().Property().Owner().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded for all properties belonging to the first owner of the property of the tenant's first lease listed as of today's date.

 [Tenant().Lease(1).Property().Owner().SecurityDepositRefunded("6/15/ 2026 ")]

 Displays the total amount of security deposits refunded for all properties belonging to the first owner of the selected property of the tenant's first additional lease as of June 15, 2026 .

 [Tenant().Lease().Unit().SecurityDepositRefunded("1/1/ 2026 ")]

 Displays the total amount of security deposits refunded for the unit of the tenant's first lease listed as of January 1, 2026 .
