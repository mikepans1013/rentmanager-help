# Create Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Create-Date.htm

This function displays the date and time on which the selected item or entity was created and first saved. This date and time is saved in the system and cannot be overwritten.

 More Information

 If you are looking for a script to pull the date and time from the Opened field on the service issue, use the AssignedOpenDate function. The opened date can be changed by a user and is separate from the date the service issue was first saved in Rent Manager .

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().CreateDate()]

 Displays information found on Issues page. You may need to use the option to add the Create Date column to the page.

 Tenant

 [Tenant().CreateDate]

 Displays information found on a tenant's account creation history/note item details by clicking at the bottom.

 Vendor

 [Vendor().CreateDate]

 Displays information found on a vendor's account creation history/note item details by clicking at the bottom.

 Violation

 [Violation().CreateDate]

 Displays information found on the Violations page. You may need to use the option to add the Create Date column to the page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CreateDate( "ServiceIssueID" )]

 Warning

 The ServiceIssueID parameter listed below only applies to the function when it is used with the ServiceManager class. If using this function with other classes, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [CreateDate("23")]

 Displays the date and time service issue number 23 was first saved in Rent Manager .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().CreateDate()]

 Displays the date and time on which the first service issue associated with the selected tenant was first saved.

 [ServiceManager().CreateDate("53")]

 Displays the date and time on which service issue number 53 was first saved.

 [Violation().CreateDate]

 Displays the date and time on which the selected violation was first saved.

 [Vendor().CreateDate]

 Displays the date and time on which the selected vendor was first saved.
