# Is Read Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Is-Read.htm

This function displays whether the service issue of the selected property, tenant, prospect, or unit has been read. The function displays True if the issue has been read and False if it has not been read.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().IsRead()]

 Issues that display in bold on the Issues page in have not yet been read.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IsRead( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [IsRead("53")]

 Displays True if service issue number 53 has been read and False if it has not.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().IsRead()]

 Displays True if the first service issue associated with the selected tenant has been read and False if it has not been read.

 [ServiceManager().IsRead("112")]

 Displays True if service issue 112 has been read and False if it has not been read.
