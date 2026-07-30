# Requested Time Block Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Requested-Time-Block.htm

This function displays the date and time of the preferred or alternate time blocks chosen for maintenance scheduling. If an issue has only one time block, this function displays the time block. If a tenant chose additional alternate time blocks via Tenant Web Access , this function can also display the alternate times.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager Class (Script)

 [ServiceManager().RequestedTimeBlock()]

 Displays the date and time of the time block that a tenant requested for maintenance scheduling.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RequestedTimeBlock( "Option" , "ServiceIssueID" )]

 Option

 Specify if you want to display the Preferred , Alternate1 , or Alternate2 time listed on the issue. If no parameter is set, this function displays the Preferred time block.

 [RequestedTimeBlock("Preferred")]

 Displays the date and time of the time block listed as Preferred .

 [RequestedTimeBlock("Alternate1")]

 Displays the date and time of the time block listed as Alternate 1 .

 ServiceIssueID

 Display the requested date and time for the issue with this Issue # .

 [RequestedTimeBlock("","57")]

 Displays the date and time of the preferred time block listed for issue number 57.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().RequestedTimeBlock("Alternate1","326")]

 If the issue was created by a tenant via Tenant Web Access (TWA) , and if they chose an alternate time block in addition to a first choice time, this displays the date and time of the time block listed as Alternate1 of issue number 326.

 [Tenant().ServiceManager().RequestedTimeBlock("Preferred","326")]

 Displays the date and time of the time block listed as Preferred of issue number 326.
