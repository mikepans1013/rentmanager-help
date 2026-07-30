# Due Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Due-Date.htm

This function displays the Due Date of the selected service issue when used with the ServiceManager class. Alternatively, when used with the Stage class, it displays the date by which a violation stage must be resolved to prevent further escalation.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().DueDate()]

 Displays information found in the selected service issue.

 Stage

 [Violation().Stage().DueDate]

 Displays information found on the Stage Information tile of the violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [DueDate( "ServiceIssueID" )]

 Warning

 The ServiceIssueID parameter listed below applies only to the function when it is used with the ServiceManager class. If using this function with the Violation class, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [DueDate("23")]

 Displays the Due Date of service issue number 23.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().DueDate()]

 Displays the Due Date defined for the first service issue associated with the selected tenant.

 [ServiceManager().DueDate("53")]

 Displays the Due Date defined on service issue 53.

 [Tenant().Violation().Stage().DueDate]

 Displays the Due Date defined for the current violation stage of the tenant's most recent violation.

 [Violation().Stage("0").DueDate]

 Displays the Due Date defined for the first violation stage listed for the violation.
