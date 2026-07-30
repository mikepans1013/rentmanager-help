# Update Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Update-Date.htm

This function displays the date and time that the selected service issue was most recently updated (saved).

 More Information

 Adding, editing, or deleting history/note items does not change the update date. Only actions that require the corresponding service issue, violation, or account to be updated and saved impact this function.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().UpdateDate()]

 Displays the date and time that the service issue was most recently updated and saved.

 Tenant

 [Tenant().UpdateDate]

 Displays the date and time the tenant's account was last updated.

 Vendor

 [Vendor().UpdateDate]

 Displays the date and time the vendor's account was last updated.

 Violation

 [Violation().UpdateDate]

 Displays the date and time the violation was most recently updated and saved.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UpdateDate( "ServiceIssueID" )]

 Warning

 The ServiceIssue ID parameter listed below only applies to the function when it is used with the ServiceManager class. If using this function with the Tenant, Vendor, or Violation classes, there is no ServiceIssueID parameter.

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [UpdateDate("53")]

 Displays the date and time that service issue number 53 was most recently updated.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().UpdateDate("53")]

 Displays the date and time that service issue number 53 was most recently saved.

 [Tenant().UpdateDate]

 Displays the date and time the current tenant account was most recently updated and saved.

 [Vendor(15).UpdateDate]

 Displays the date and time the vendor with the system-generated account ID was most recently updated and saved.

 [Violation().UpdateDate]

 Displays the date and time the current violation was most recently updated and saved.
