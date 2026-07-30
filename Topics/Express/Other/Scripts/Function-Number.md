# Number Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Number.htm

This function displays the specified phone number (excluding extension) for the contact of the selected tenant account when used with the PhoneNumber class. When used with the ServiceManager class, it displays the Issue ID of the specified service issue.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Phone Number

 [ Class(). PhoneNumber().Number]

 Displays information found in the Contacts tile of the entity or contact.

 Service Manager

 [ServiceManager().Number()]

 Displays information found on the Issue details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Number( "ServiceIssueID" )]

 ServiceIssueID

 Warning

 The ServiceIssueID parameter listed below applies only to the function when it is used with the ServiceManager class. If using this function with the PhoneNumber class, there are no available parameters.

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Number("23")]

 Displays the Issue ID of service issue number 23.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().Number()]

 Displays the Issue ID of the first service issue associated with the selected tenant.

 [ServiceManager().Number("53")]

 Displays the Issue ID of service issue 53.

 [Property().PhoneNumber().Number]

 Displays the phone number (excluding extension) checked as Default for the selected property.

 [Property().PhoneNumber("Office").Number]

 Displays the phone number (excluding extension) of the "Office" phone number for the selected property.

 [Prospect().Contact().PhoneNumber().Number]

 Displays the phone number (excluding extension) checked as Default for the primary contact of the selected prospect.

 [Tenant().Contact(1).PhoneNumber("Work").Number]

 Displays the phone number (excluding extension) of the "Work" phone number for the first additional contact of the selected tenant.
