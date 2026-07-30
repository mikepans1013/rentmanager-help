# Title Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Title.htm

This function displays the text entered in the Title field on the Service Manager Issues details page. This is a brief, one-line summary to act as the title of the service issue.

 This function can be utilized by the following class:

 Class
 Syntax

 Service Manager

 [ServiceManager().Title()]

 Displays information found on the Service Manager Issue details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Title( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Title("53")]

 Displays the text in the Title field of service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().Title()]

 Displays the text entered in the Title field of the first service issue associated with the selected tenant.

 [ServiceManager().Title("53")]

 Displays the text entered in the Title field on service issue number 53.
