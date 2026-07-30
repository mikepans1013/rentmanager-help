# Days Vacant Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Days-Vacant.htm

This function displays the number of days the unit has been vacant as of a given date or for a given date range. Vacancy is calculated by move in and move out dates, as well as if unit statuses have been defined for the unit.

 A unit status type is an exception to the standard status of Occupied or Vacant that is assigned to a unit for a specified date range. Definitions for unit status types include an underlying value of Yes or No for Show As Vacant that may be referenced for the days vacant calculation.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().DaysVacant()]

 Displays the calculated total number of days the unit was vacant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [DaysVacant( "AsOfDate" , "VacancyStatus" , "FromDate" )]

 AsOfDate

 Specify the date for which to retrieve the days vacant.

 If no date is specified, today's date is used by default.

 [DaysVacant("3/19/ 2026 ")]

 Displays the calculated days vacant as of March 19, 2026 .

 VacancyStatus

 Enter True or False to determine if an assigned unit status that does not have Show As Vacant checked is used in the calculation of days vacant.

 If True , the system calculates the number of days the unit was vacant between the AsOfDate parameter and the tenant's last move out date or specified FromDate parameter. The number of days in that date range the unit was assigned a unit status without the Show As Vacant option are subtracted.

 If False , Rent Manager calculates the number of days the unit was vacant between the AsOfDate and the tenant's last move out date or specified FromDate parameter.

 [DaysVacant("","True")]

 For a unit assigned a unit status type with Show As Vacant unchecked, this would subtract from the calculated days vacant the number of days the unit was assigned that status during this function's specified date range.

 FromDate

 Enter a date as the starting date for the days vacant calculation.

 [DaysVacant("","","12/31/ 2026 ")]

 Displays the calculated days vacant starting from December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit().DaysVacant()]

 Displays the number of days the unit of the first lease listed for the current tenant was vacant between today's date and the tenant's last move out date.

 [Tenant().Lease().Unit().DaysVacant("12/31/ 2026 ")]

 Displays the number of days the unit of the first lease listed for the current tenant was vacant between December 31, 2026 and the tenant's last move out date.

 [Tenant().Lease().Unit().DaysVacant("","True")]

 Displays the number of days the unit of the first lease listed for the current tenant was vacant between today's date and the tenant's last move out date. The displayed result includes the subtraction of the number of days the unit was assigned a unit status with a unit status type having Show As Vacant unchecked during that date range.

 [Tenant().Lease().Unit().DaysVacant("12/31/ 2026 ","","1/1/ 2026 ")]

 Displays the number of days the unit of the first lease listed for the current tenant was vacant between January 1, 2026 and December 31, 2026 .
