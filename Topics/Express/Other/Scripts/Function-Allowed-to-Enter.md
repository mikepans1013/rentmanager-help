# Allowed to Enter Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Allowed-to-Enter.htm

This function displays whether the service issue of the selected property, tenant, prospect, or unit has the Allowed to Enter option checked. The function displays True if the option is checked and False if the option is not checked.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().AllowedToEnter()]

 Displays information found in the Issue Details tile of the service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AllowedToEnter( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue # .

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [AllowedToEnter("57")]

 Displays True if the Allowed to Enter option is checked in service issue number 57 and False if the option is not checked.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().ServiceManager().AllowedToEnter()]

 Displays True if the first service issue associated with the selected prospect has the Allowed to Enter option checked and False if it does not.

 [ServiceManager().AllowedToEnter("112")]

 Displays True if the Allowed to Enter option is checked in service issue number 112 and False if it is not.
