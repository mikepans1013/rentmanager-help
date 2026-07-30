# Signature On File Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Signature-on-File.htm

This function displays whether the service issue has the Signature on File option checked. The function displays True if the option is checked and False if it is not checked.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().SignatureOnFile()]

 Displays information found in the Issue Details tile of the service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SignatureOnFile( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [SignatureOnFile("31")]

 Displays True or False depending on whether the Signature on File option is checked on service issue number 31.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().ServiceManager().SignatureOnFile()]

 Displays True if the first service issue associated with the unit has the Signature on File option checked and False if the option is not checked.

 [Tenant().ServiceManager().SignatureOnFile("103")]

 Displays True if the Signature on File option is checked in service issue number 103 and False if the option is not checked.
