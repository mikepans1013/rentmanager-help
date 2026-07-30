# Vendor Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Vendor.htm

This function displays the Vendor selected in the Details tile on the Service Manager Issue details page.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().Vendor()]

 Displays information found on the Service Manager Issue details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Vendor( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Vendor("53")]

 Displays the Vendor of service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().Vendor()]

 Displays the vendor name for the selected service issue.

 [Tenant().ServiceManager().Vendor()]

 Displays the vendor name for the selected service issue associated with the current tenant.

 [ServiceManager().Vendor("23")]

 Displays the vendor name assigned to service issue number 23.
