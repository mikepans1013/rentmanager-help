# Close Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Close-Date.htm

This function displays the date on which the selected violation was closed as entered in the Closed field on the Violation Details tile.

 In addition, when utilized with the ServiceManager class, the function displays the date on which the Closed box was initially checked on the selected service issue and the issue was saved. This date is saved in Rent Manager and cannot be overwritten.

 More Information

 Note that another scripting function, Assigned Closed Date , displays the date currently displayed in the Closed field on the Service Manager Issues page of the selected service issue. This date can be changed by the user.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().CloseDate()]

 Displays information found on the Issue details page.

 Violation

 [Violation().CloseDate]

 Displays information found on the Violation details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CloseDate( "ServiceIssueID" )]

 Warning

 The parameter listed below applies to this function only when used with the ServiceManager class. If using this function with the Violation class, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 [CloseDate("53")]

 Displays the date that Closed was checked on service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().CloseDate()]

 Displays the date on which the Closed field was initially checked on the first service issue associated with the selected property, tenant, prospect, or unit.

 [ServiceManager().CloseDate("34")]

 Displays the date on which the Closed field was initially checked on service issue number 34.

 [Tenant().Violation().CloseDate]

 Displays the date on which the most recent violation was closed for the selected tenant.

 [Tenant().Violation(1).CloseDate]

 Displays the date on which the second most recent violation was closed for the selected tenant.
