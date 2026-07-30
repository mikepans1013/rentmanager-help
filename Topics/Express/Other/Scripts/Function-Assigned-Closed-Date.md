# Assigned Closed Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Assigned-Closed-Date.htm

This function displays either the Closed date of the service issue that was most recently entered by a user or the original Closed date (if the user has not changed it).

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().AssignedClosedDate()]

 Displays information found on the Issue details page or the Issues  page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AssignedClosedDate( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [AssignedClosedDate("23")]

 Displays the Closed date of service issue number 23.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().ServiceManager().AssignedClosedDate()]

 Displays the date and time currently in the Closed field of the first service issue associated with the selected unit.

 [ServiceManager().AssignedClosedDate("53")]

 Displays the date and time currently in the Closed field on service issue number 53.
