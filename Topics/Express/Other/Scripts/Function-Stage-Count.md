# Stage Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Stage-Count.htm

This function is used in two different ways depending on which class precedes it.

 - If used with the Violation class, the function displays the number of stages defined for the selected violation.

 - If used with the Prospect class, this function displays the stage number of the selected prospect as they progress through the leasing process.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect().StageCount()]

 Displays how many times the Prospect Stage has progressed on the prospect's details page.

 Violation

 [Violation().StageCount]

 Displays the number of stages on the View Stages page for the selected violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [StageCount( "FromDate" , "ToDate" )]

 Warning

 The FromDate and ToDate parameters listed below only apply to the function when it is used with the Prospect class. If using this function with the Violation class, there are no available parameters.

 FromDate

 Specify the date on or after which to examine the stage count. If no date is specified, the function uses today's date.

 [StageCount("1/1/ 2026 ")]

 Displays the stage number of the selected prospect on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine the stage count. If no date is specified, the function uses today's date.

 [StageCount("","6/1/ 2026 ")]

 Displays the stage number of the selected prospect on or before June 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Violation().StageCount]

 Displays the number of stages defined for the selected violation.

 [Tenant().Violation(1).StageCount]

 Displays the number of stages defined for the selected tenant's second most recent violation.

 [Unit().Violation(ViolationCount-1).StageCount]

 Displays the number of stages defined for the oldest violation of the selected unit.

 [Prospect().StageCount("3/14/ 2026 ")]

 Displays the stage number of the selected prospect on or after March 14, 2026 .
