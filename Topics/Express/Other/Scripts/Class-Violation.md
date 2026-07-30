# Violation Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Violation.htm

This class examines information associated with violations. It can be preceded by a Tenant or Unit class and can be followed by a violation-level scripting function or another class associated with the violation. Violation information is pulled from the Violation details page.

 Example

 [Violation().Code]

 Result

 Displays the name of the violation code or rule as listed on the violation's scoreboard.

 Example

 [Tenant().Violation().ViolationDate]

 Result

 Displays the date on which the violation occurred as displayed on the Violation details page in the Violation Date field.

 Class Parameters

 A single, optional parameter may be specified for this class: an ID or index.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the violation Create Date . This number does not display on any window but may be used within scripting. If no ID is specified, Rent Manager defaults to using the ID of the violation selected before running the script.

 To learn the ID number of a selected violation, the script [Violation().ViolationID] can be used. Entering a distinct ID in this class parameter allows you to specify the violation that the following function examines.

 [Violation(23).ViolationUpdateDate]

 Displays the date and time of the violation with the system-generated ID of 23 was most recently updated and saved in Rent Manager .

 Index

 An index allows you to return information about a specific violation on an account by using a number to identify each violation listed. For example, if there are three violations listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which violation you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first violation in the list.

 [Tenant().Violation().IsClosed]

 Displays True if the tenant's most recent violation has the Closed field on the violation checked and a Closed date is entered. If Closed is not checked, False displays.

 More Information

 An index may be specified only when the Violation class is considered a child class in the script as shown in the example.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Stage

 [Violation().Stage(). Function ]

 This class retrieves data about violation stages.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Category Description

 [Violation().CategoryDescription]

 Displays the description of the violation category associated with the selected violation.

 Category Is Active

 [Violation().CategoryIsActive]

 Displays True to indicate that the violation category of the selected violation is available for use, which is determined by a check in the Active field on Violation Categories page. Otherwise, False displays.

 Category Name

 [Violation().CategoryName]

 Displays the name of the violation category associated with the selected violation.

 CCR Reference

 [Violation().CCRReference]

 Displays the reference for the violation that precedes the text of the associated code as entered in the CC&R Reference field on the Violation details page.

 Close Date

 [Violation().CloseDate]

 Displays the date on which the selected violation was closed as entered in the Closed field on the Violation details page.

 Code

 [Violation().Code]

 Displays the name of the individual violation code or rule for the selected violation.

 Code Group Name

 [Violation().CodeGroupName]

 Displays the name of the violation code group for the selected violation.

 Create Date

 [Violation().CreateDate]

 Displays the date and time the violation was created and first saved.

 Current Stage Index

 [Violation().CurrentStageIndex]

 Displays the index number for the violation's current stage.

 Rent Manager 's indexing always starts with 0, so the output is always one less than the current stage of the violation. For example, if you ran this script and selected a violation in stage 3, the script outputs 2 .

 Description

 [Violation().Description]

 Displays the text entered in the Description field on the violation’s Violation Details tile.

 History Count

 [Violation().HistoryCount()]

 Displays the total number of history/notes on the violation's History/Notes pop-up.

 Image

 [Violation().Image()]

 Displays the image uploaded to the violation's Violation Image tile.

 Internal Notes

 [Violation().InternalNotes]

 Displays the violation code's Internal Notes as displayed on the violation's Violation Details tile.

 Is Closed

 [Violation().IsClosed]

 Displays True if the Closed field on the Violation Details tile is checked; otherwise, False displays.

 Note

 Violation().Note()]

 Displays information about the most recent note on the violation's History/Notes tile.

 Resolve Action

 [Violation().ResolveAction]

 Displays the text that specifies what must be done to remedy the violation as entered in the Action To Resolve field on the Violation Details tile.

 Set History Filter

 [Violation().SetHistoryFilter()]

 This function is designed to filter the total collection of violation history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Stage Count

 [Violation().StageCount]

 Displays the number of stages defined for the violation.

 Update Date

 [Violation().UpdateDate]

 Displays the most recent date and time that the violation was updated and saved.

 Violation Count

 [ Class(). Violation().ViolationCount]

 Displays the total number of violations associated with the tenant or unit. To return a value, this function must be used with the Tenant or Unit class preceding the Violation class as represented by .Class in the syntax.

 Violation Date

 [Violation().ViolationDate]

 Displays the Violation Date date as listed on the Violation Details tile.

 Violation ID

 [Violation().ViolationID]

 Displays the system-generated violation ID number.

 Violation List

 [ Class(). Violation().ViolationList()]

 Displays the Code , Category , and Escalation Date for all violations associated with the tenant or unit. To return a value, this function must be used with the Tenant or Unit class preceding the Violation class as represented by .Class in the syntax.
