# Unit User Defined Field Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-User-Defined-Field.htm

This function displays the value of a unit user defined field specified on the prospect Details page of a selected prospect whose Status has changed to Tenant .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Tenant().Prospect().UnitUserDefinedField()]

 Displays information found on the prospect's Unit User Defined Information tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitUserDefinedField( "Index" , "ShowName" )]

 Index

 Select the unit user defined field to examine.

 [UnitUserDefinedField("1")]

 Displays the value of the first additional unit user defined field specified on the prospect's Unit User Defined Field Information tile.

 ShowName

 Enter True to display the name of the unit user defined field or False to display the value of the unit user defined field.

 [UnitUserDefinedField("","True")]

 Displays the name of the first unit user defined field.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Prospect().UnitUserDefinedField("1")]

 Displays the value of the first additional unit user defined field specified for the prospect who is now the current tenant.

 [Tenant().Prospect().UnitUserDefinedField("2","True")]

 Displays the name of the second additional unit user defined field specified for the prospect who is now the current tenant.

 [Tenant().Prospect().UnitUserDefinedField("","True")]

 Displays the name of the first unit user defined field specified for the prospect who is now the current tenant.
