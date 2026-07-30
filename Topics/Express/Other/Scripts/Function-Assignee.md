# Assignee Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Assignee.htm

This function displays the Rent Manager user selected in the Assigned To User field of the specified service issue.

 The class that utilizes this function and the location from where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().Assignee()]

 Displays information found on the Details tile of the issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Assignee( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Assignee("53")]

 Displays the user assigned to service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().Assignee()]

 Displays the user assigned to the oldest service issue for the selected tenant, as shown in the tenant's History/Notes tile.

 [ServiceManager().Assignee("102")]

 Displays the user assigned to service issue number 102.

 [Unit().ServiceManager().Assignee("75")]

 Displays the user assigned to service issue number 75.

 [Property().ServiceManager().Assignee("214")]

 Displays the user assigned to service issue number 214.
