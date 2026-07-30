# Individual Hours Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Individual-Hours.htm

This function displays the user who performed the work, the date and time of the check in and check out, and the number of hours for a service tech hour entry on a service issue. The time a technician spends on a service issue can be recorded in rmAppSuite Pro or added manually in Rent Manager .

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().IndividualHours()]

 Displays information found on the issue's History/Notes tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IndividualHours( "ServiceIssueID" , "IndividualHourIndex" , "CheckInFromDate" , "CheckInToDate" , "CheckOutFromDate" , "CheckOutToDate" , "UserNames" , "Format" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [IndividualHours("53")]

 Displays information from the oldest check-in on service issue number 53.

 IndividualHourIndex

 Display information from a specific check-in on the service issue. The oldest check-in has an index of 0 , the second oldest has an index of 1 , etc.

 [IndividualHours("53","1")]

 Displays the second-oldest check-in for service issue number 53.

 CheckInFromDate

 Display information from the hours entry with the earliest check-in starting on or after the specified date. If no date is specified, Rent Manager examines entries from the beginning of time by default.

 [IndividualHours("53","","11/18/ 2026 ")]

 Displays the first entry with a check-in on November 18, 2026 for service issue number 53.

 CheckInToDate

 Display information from the hours entry with the earliest check-in before or on the specified date. If no date is specified, Rent Manager examines entries to the end of time by default.

 [IndividualHours("53","","","11/18/ 2026 ")]

 Displays the first entry with a check-in before or on November 18, 2026 for service issue number 53.

 CheckOutFromDate

 Display information from the hours entry with the earliest check-out on or before the specified date. If no date is specified, Rent Manager examines entries from the beginning of time by default.

 [IndividualHours("53","","","","11/18/ 2026 ")]

 Displays information from the earliest entry with a check-out on or before November 18, 2026 for service issue number 53.

 CheckOutToDate

 Display information from the hours entry with the earliest check-out on or after the specified date. If no date is specified, Rent Manager examines entries to the end of time by default.

 [IndividualHours("53","","","","","11/18/ 2026 ")]

 Displays information from the earliest entry with a check-out on or after November 18, 2026 for service issue number 53.

 UserNames

 Display the oldest check-in from the specified username.

 [IndividualHours("53","","","","","","SarahS")]

 Displays the oldest check-in entry for the user SarahS for issue number 53.

 Format

 List details of each entry using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the user who checked into the issue, the date and time that user checked in, the date and time the user checked out, and the number of hours spent on the issue, separated by tabs:

 "\n$_User\t$_CheckInTime\t$_CheckOutTime\t$_Hours"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_CheckInTime

 Displays the date and time of the Check In .

 $_CheckOutTime

 Displays the date and time of the Check Out .

 $_Comment

 Displays text entered in the Note column of the entry.

 $_Hours

 Displays the number of hours spent on the issue between the check-in time and check-out time.

 $_User

 Displays the username of the Rent Manager user who checked into the issue.

 IndividualHours("","","","","","","","\t$_User\t$_Hours\n")

 Displays a new line with a customized list of the User and Hours for each entry.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().IndividualHours("53","","","","","","SarahS")]

 Displays the oldest check-in entry for the user SarahS on service issue number 53.

 [ServiceManager().IndividualHours("","","11/18/ 2026 ","11/19/ 2026 ")]

 Displays the oldest check-in entry that occurred from 11/18/ 2026 to 11/19/ 2026 for the selected service issue.

 [ServiceManager().IndividualHours("","","11/18/ 2026 ","","","11/18/ 2026 ")]

 Displays the oldest check-in entry that has a Check In date from the beginning of time to 11/18/ 2026 and a Check Out date from 11/18/ 2026 to the end of time for the selected service issue.

 [ServiceManager().IndividualHours("53","","","","","","","\t$_User\t$_Hours")]

 Displays the username and number of hours of the oldest check-in entry for issue number 53, with tabs separating the values.
