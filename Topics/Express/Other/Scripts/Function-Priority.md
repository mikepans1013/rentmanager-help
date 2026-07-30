# Priority Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Priority.htm

This function displays the Priority (e.g., Low ) assigned to the service issue of the selected property, tenant, prospect, or unit.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().Priority()]

 Displays information found on the Details tile of the service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Priority( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Priority("131")]

 Displays the Priority of service issue number 131.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().ServiceManager().Priority()]

 Displays the Priority of the first service issue associated with the unit.

 [Tenant().ServiceManager().Priority("66")]

 Displays the Priority of service issue number 66.

 [ServiceManager().Priority("102")]

 Displays the Priority of service issue number 102.
