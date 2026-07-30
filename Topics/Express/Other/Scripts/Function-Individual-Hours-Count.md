# Individual Hours Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Individual-Hours-Count.htm

This function displays the total number of entries made to record individual hours on a service issue.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below:

 Class
 Syntax

 Service Manager

 [ServiceManager().IndividualHoursCount()]

 Displays hours information found on the Details tile of the service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IndividualHoursCount( "ServiceIssueID" , "CheckInFromDate" , "CheckInToDate" , "CheckOutFromDate" , "CheckOutToDate" , "UserNames" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [IndividualHoursCount("53")]

 Displays the total number of entries made to record individual hours for service issue number 53.

 CheckInFromDate

 Display the number of entries with check-ins starting on or after the specified date. If no date is specified, Rent Manager examines entries from the beginning of time by default.

 [IndividualHoursCount("53","11/18/ 2026 ")]

 Displays the number entries with check-ins on or after November 18, 2026 for service issue number 53.

 CheckInToDate

 Display the number of entries with check-ins before or on the specified date. If no date is specified, Rent Manager examines entries to the end of time by default.

 [IndividualHoursCount("53","","11/18/ 2026 ")]

 Displays the number of entries with check-ins from the beginning of time to November 18, 2026 for service issue number 53.

 CheckOutFromDate

 Display the number of entries with a check-out on or before the specified date. If no date is specified, Rent Manager examines entries from the beginning of time by default.

 [IndividualHoursCount("53","","","11/18/ 2026 ")]

 Displays the number of entries with check-outs on or before November 18, 2026 for service issue number 53.

 CheckOutToDate

 Display the number of entries with check outs on or after the specified date. If no date is specified, Rent Manager examines entries to the end of time by default.

 [IndividualHoursCount("53","","","","11/18/ 2026 ")]

 Displays the number of entries with check-outs from November 18, 2026 to the end of time for service issue number 53.

 UserNames

 Display the number of check-ins from the specified username.

 [IndividualHoursCount("53","","","","","SarahS")]

 Displays the number of check-ins for the user SarahS for issue number 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().IndividualHoursCount("53","","","","","SarahS")]

 Displays the number of check-in entries for the user SarahS on service issue number 53.

 [Tenant().ServiceManager().IndividualHours("","11/18/ 2026 ","11/19/ 2026 ")]

 Displays the number of hours entries where the check-in to the issue occurred from November 18, 2026 through November 19, 2026 for the tenant's first listed service issue.

 [ServiceManager().IndividualHours("","11/18/ 2026 ","","","11/18/ 2026 ")]

 Displays the number of hours entries that have a check-in from the beginning of time to November 18, 2026 and a check-out date from November 18, 2026 to the end of time for the current service issue.
