# Availability Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Availability.htm

This function displays the specified information about the selected unit as shown on the unit's Occupancy tile, including the next occupant's name, account number, move-in date, and move-out date.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().Availability()]

 Displays information from the unit's Occupancy tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Availability( "FieldName" )]

 Fields

 The following fields are available to use as a parameter:

 Field Name
 Description

 Next Move In Date

 [Availability("NextMoveInDate")]

 Displays the move-in date for the next occupant of the unit.

 Next Move Out Date

 [Availability("NextMoveOutDate")]

 Displays the move-out date for the next occupant of the unit.

 Next Occupant

 [Availability("NextOccupant")]

 Displays the first and last name of the next occupant of the unit.

 Next Occupant Account Number

 [Availability("NextOccupantAccountNumber")]

 Displays the system-generated account number of the next occupant of the unit.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().Availability("NextMoveInDate")]

 Displays the Move In date for the next tenant scheduled to occupy the selected unit.

 [Tenant().Unit().Availability("NextMoveOutDate")]

 Displays the Move Out date for the next tenant scheduled to occupy the unit of the selected tenant's first-listed lease.

 [Unit().Availability("NextOccupant")]

 Displays the name of the next tenant scheduled to occupy the selected unit.

 [Property().Unit(20B).Availability("NextOccupantAccountNumber")]

 Displays the system-generated account ID of the next tenant scheduled to occupy unit 20B at the selected property.
