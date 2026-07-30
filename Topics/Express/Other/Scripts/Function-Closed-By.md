# Closed By Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Closed-By.htm

This function displays the First Name and Last Name of the user who closed a service issue. If the issue is not closed, no value is returned. If the issue was closed, reopened, and closed again, the name of the last user to close the issue displays.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().ClosedBy()]

 Displays information found in the specified service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ClosedBy( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [ClosedBy("53")]

 Displays the first and last name of the user who checked Closed on service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().ClosedBy()]

 Displays the first and last name of the user who marked the current service issue as Closed .

 [Tenant().ServiceManager().ClosedBy()]

 Displays the first and last name of the user who marked the first service issue associated with the tenant as Closed .

 [ServiceManager().ClosedBy("53")]

 Displays the first and last name of the user who marked service issue number 53 as Closed .
