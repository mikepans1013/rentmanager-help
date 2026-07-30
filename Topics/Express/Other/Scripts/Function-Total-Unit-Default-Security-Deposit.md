# Total Unit Default Security Deposit Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Unit-Default-Security-Deposit.htm

This function displays the total value of all unit-level security deposits, optionally for specified charge types, listed in the Default Security Deposits tile of the selected unit. Charge types that are designated as security deposit charges are specified in Security Deposit Options (System Preferences) .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().TotalUnitDefaultSecurityDeposit()]

 Displays information found on the unit's Default Security Deposits tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalUnitDefaultSecurityDeposit( "ChargeTypes" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalUnitDefaultSecurityDeposit("DP,PETDEP")]

 Displays the charges for Security Deposit (DP) plus Pet Deposit (PETDEP) charge types for the selected unit.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().TotalUnitDefaultSecurityDeposit()]

 Displays the total combined value of all unit default security deposits for the current unit.

 [Unit().TotalUnitDefaultSecurityDeposit("DP")]

 Displays the value of the unit default security deposit for the Security Deposit (DP) charge type listed for the current unit.
