# Is Closed Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Is-Closed.htm

This function displays whether or not a service issue or violation is closed by outputting True if it is and False if it is not.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().IsClosed()]

 Displays information found at the top of the service issue.

 Violation

 [Violation().IsClosed]

 Displays information found in the Violation Details tile on the Violation details page of the violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IsClosed( "ServiceIssueID" )]

 More Information

 The ServiceIssueID parameter listed below applies to the function only when it is used with the Service Manager class. If using this function with the Violation class, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue # . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [IsClosed("53")]

 Displays True if service issue number 53 has the Closed option checked and False if it has not.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().IsClosed("53")]

 Displays True if service issue number 53 is closed and False if it is open.

 [Tenant().Violation().IsClosed]

 Displays True if the most recent violation for the current tenant is closed and False if it is open.

 [Tenant().Violation(ViolationCount - 1).IsClosed]

 Displays True if the oldest violation for the current tenant is closed and False if it is open.
