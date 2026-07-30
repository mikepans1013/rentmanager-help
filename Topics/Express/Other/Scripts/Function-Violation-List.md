# Violation List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Violation-List.htm

This function displays information about each violation associated with the selected tenant or unit within a specified date range. The function displays a separate line of information from each violation listed for the tenant or unit on the violations page. By default, the violation's code name, violation date, and stage name are displayed separated by tabs. Additional variables may be used in the format parameter to customize how this information displays.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().ViolationList()]

 Displays information found on the Violations page for the tenant.

 Unit

 [Unit().ViolationList()]

 Displays information found on the Violations page for the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ViolationList( "FromDate" , "ToDate" , "IsClosed" , "Format" )]

 FromDate

 Specify the Violation Date on or after which to examine violations. If no date is specified, the function uses the beginning of time.

 [ViolationList("1/1/ 2026 ")]

 Displays violations with a Violation Date on or after January 1, 2026 .

 ToDate

 Specify the Violation Date on or before which to examine violations. If no date is specified, the function uses the end of time.

 [ViolationList("","1/31/ 2026 ")]

 Displays violations with a Violation Date on or before January 31, 2026 .

 IsClosed

 Display violations based on if the Closed field is checked and has a date on the Violation Details tile.

 Specify True to examine only closed violations. Specify False to examine only open violations. Leave this parameter blank to examine both closed and open violations.

 [ViolationList("1/1/ 2026 ","12/31/ 2026 ","True")]

 Displays violations within the specified date range that are closed.

 [ViolationList("1/1/ 2026 ","12/31/ 2026 ","False")]

 Displays violations within the specified date range that are open.

 Format

 List details of each violation using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the code name, violation date, and stage name variables, separated by tabs:

 "\t$_Code\t$_ViolationDate\t$_StageName\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_CCRReference

 Displays the letter or number that precedes the text of the CC&R code, as entered in the CC&R Reference field on the Violation Details tile.

 $_CloseDate

 Displays the date on which the violation was closed, as entered in the Closed field on the Violation Details tile.

 $_Code

 Displays the name of the individual code or rule within the violation code group on the Violation Details scoreboard.

 $_Description

 Displays the text of the violation, as entered in the Description field on the Violation Details tile.

 $_ResolveAction

 Displays the text that specifies what the tenant must do to remedy the violation, as entered in the Action To Resolve field on the Violation Details tile.

 $_StageDate

 Displays the date on which a violation stage was escalated, as entered in the Escalation Date field on the Escalate Violation page.

 $_StageDueDate

 Displays the date by which a violation stage must be resolved to prevent further escalation, as entered in the Due Date field on the Escalate Violation page.

 $_StageName

 Displays the name of the violation stage, as shown in the Current Stage field on the Stage Information tile.

 $_StageNumber

 Displays the stage number of the violation stage, as shown in the # column on the View Stages page.

 $_ViolationDate

 Displays the date of the infraction, as entered in Violation Date on the Violation Details tile.

 ViolationList("", "", "", "\t$_Code\t$_ViolationDate\t$_StageNumber\t$_StageName\t$_StageDueDate\n")

 Displays a new line with a customized list of the code, violation date, stage number, stage name, and stage due date for each open and closed violation for the specified entity.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ViolationList()]

 Displays a new line with the default formatted text string for each violation listed for the selected tenant.

 [Unit().ViolationList("1/1/ 2026 ","1/31/ 2026 ")]

 Displays a new line with the default formatted text string for each open and closed violation with a violation date from January 1, 2026 through January 31, 2026 listed for the selected unit.

 [Tenant().ViolationList("1/1/ 2026 ","1/31/ 2026 ","True")]

 Displays a new line with the default formatted text string for each open violation with a violation date from January 1, 2026 through January 31, 2026 listed for the selected tenant.

 [Unit().ViolationList("", "", "", "\t$_Code\t$_ViolationDate\t$_StageNumber\t$_StageName\t$_StageDueDate\n")]

 Displays a new line with a customized list of the code, violation date, stage number, stage name, and stage due date for each open and closed violation listed for the selected unit.
