# Scheduled Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Scheduled-Date.htm

This function displays the date entered in the Scheduled field on the selected issue. For issues assigned to a time block on the Maintenance Schedule, the start and end times of the assigned time block display.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().ScheduledDate()]

 Displays information found in the Scheduled Date field on the Issue details page. If the issue has a time block assigned through the Maintenance Schedule feature, this function displays the date and the start and end times of the time block.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ScheduledDate( "ServiceIssueID" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [ScheduledDate("53")]

 Displays the Scheduled date linked to service issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().ScheduledDate()]

 Displays the Scheduled Date entered for the first issue associated with the selected tenant.

 If the issue has a time block assigned on the Maintenance Schedule, this function displays the date and the start and end times of the time block listed as Preferred on the issue associated with the selected tenant.

 [ServiceManager().ScheduledDate("23")]

 Displays the Scheduled Date entered on issue number 23.

 If the issue has a time block assigned on the Maintenance Schedule, this function displays the date and the start and end times of the time block listed as Preferred on issue number 23.
