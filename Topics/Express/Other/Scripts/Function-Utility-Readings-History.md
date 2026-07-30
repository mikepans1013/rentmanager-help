# Utility Readings History Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Utility-Readings-History.htm

This function retrieves metered utilities information for the tenant based on the utility charge type and date.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Tenant

 [Tenant().UtilityReadingsHistory()]

 Displays information found on the Tenant Consumption History window.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UtilityReadingsHistory( "ChargeType","AsOfDate" )]

 ChargeType

 Specify the short name of the metered utility charge type whose information to retrieve.

 [UtilityReadingsHistory("Sewer","")]

 This retrieves the values of the Sewer charge type.

 AsOfDate

 Retrieve metered utility values posted on or before this date. By default, today's date is used.

 [UtilityReadingsHistory("Sewer","1/20/ 2026 ")]

 This retrieves the value of the Sewer charge type as of January 20, 2026 .

 Variables

 Some function parameters store information in system variables. These variables allow Rent Manager to display information that would typically be pulled through the use of more complex scripts. You can easily recognize system variables because they always have an underscore following a dollar sign "$_ " preceding the variable name.

 The following variables are available for the AsOfDate parameter:

 Variable
 Description

 [$_chargeamt]

 Displays the Amount that was charged, based on the reading.

 [$_consumption]

 Displays the calculated value of usage during the period between $_prevdate and $_currdate.

 [$_currdate]

 Displays the Current Reading Date of the most recent reading.

 [$_currread]

 Displays the value of the Current Reading .

 [$_custaccno]

 Displays the account number associated with a meter.

 [$_metername]

 Displays the name of the meter type associated with the reading.

 [$_prevdate]

 Displays the Previous Reading Date .

 [$_prevread]

 Displays the value of the Previous Reading .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().UtilityReadingsHistory("ELECT","01/01/ 2026 ");$_currread]

 This retrieves and stores the electrical charge type variable values as of January 1, 2026 for the selected tenant. It then displays the value of the current electrical reading.

 [Tenant().UtilityReadingsHistory("ELECT","01/01/ 2026 ")]

 [$_consumption]

 This retrieves and stores the electrical charge type variable values as of January 1, 2026 for the selected tenant. It then displays the electrical usage value for the period between the most recent reading and the previous reading.
