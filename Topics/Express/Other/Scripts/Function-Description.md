# Description Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Description.htm

This function displays the Description on the Description tile of the selected service issue. This describes the work that needs to be completed in order for this service issue to be considered resolved.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job

 [Job().Description]

 Displays information found on the job's details page.

 Pet

 [ Class(). Pet().Description]

 Displays information found in the Pets tile on the tenant's or prospect's details page.

 Service Manager

 [ServiceManager().Description()]

 Displays information found on the Description tile of the issue.

 Unit Type

 [Unit().UnitType.Description]

 Displays information found on the General tile of the unit's unit type.

 Violation

 [Violation().Description]

 Displays information found on the Violation Details tile of the violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Description( "ServiceIssueID" )]

 Warning

 The ServiceIssueID parameter listed below applies only to the function when it is used with the ServiceManager class. If using this function with the other classes, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Description("53")]

 Displays the information in the Description field in service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [Job().Description]

 Displays the Description the on the General tile of the job's details page.

 [ServiceManager().Description("102")]

 Displays the Description in service issue number 102.

 [Tenant().ServiceManager(1).Description()]

 Displays the Description in the second service issue associated with the tenant.

 [Tenant().Pets().Description]

 Displays the Description in the Pets tile on the tenant's details page.

 [Violation().Description]

 Displays the Description found on the Violation Details tile of the violation.
