# Stage List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Stage-List.htm

This function displays a list of stages defined for the selected prospect. Prospect stages allow you to track the progression of a prospect through the leasing process and filter and report on prospects assigned to those stages.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect().StageList()]

 Displays the history of the prospect's Prospect Stage  that has been on the prospect's Lead Information tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [StageList( "StageIndex" , "FromDate" , "ToDate" , "Format" )]

 StageIndex

 Specify the prospect stage to display. By default, the description, date, and time for all stages that have been entered on the selected prospect's account display.

 [StageList("1")]

 Displays the description, date, and time of the second most recent stage in the leasing process of the selected prospect.

 FromDate

 Specify the date on or after which to examine the prospect's stage(s). If no date is specified, the function uses the beginning of time.

 [StageList("","3/19/ 2026 ")]

 Displays the description, date, and time of the stage(s) defined for the selected prospect on or after March 19, 2026 .

 ToDate

 Specify the date on or before which to examine the prospect's stage(s). If no date is specified, the function uses the end of time.

 [StageList("","","4/21/ 2026 ")]

 Displays the description, date, and time of the stage(s) defined for the selected prospect on or before April 21, 2026 .

 Format

 List details of each stage using a special format sequence.

 -
 Use \t to insert a tab.

 -
 Use \n to insert a new line.

 Default Format

 If no fields are specified, Rent Manager 's default formatting displays the stage Name , Description , FromDate , and ToDate separated by tabs:

 "$_Name\t$_Description\t$_FromDate\t$_ToDate\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_Name

 Displays the name of the stage.

 $_Description

 Displays the description of the stage.

 $_FromDate

 Displays the date and time on which the stage was defined for the prospect.

 $_ToDate

 Displays the date and time the stage was changed for the prospect.

 $_CreateUser

 Displays the Rent Manager username of the person who added the stage.

 $_CreateDate

 Displays the date and time the stage was created.

 $_UpdateUser

 Displays the Rent Manager username of the person who edited the stage.

 $_UpdateDate

 Displays the date and time the stage was edited.

 StageList("","","","$_Name\t$_UpdateUser\t$_UpdateDate\n")

 Displays a new line with a customized list of the stage name, update username, and update date and time, separated by a tab for each stage.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().StageList()]

 Displays the description, date, and time for the stage(s) defined for the selected prospect.

 [Prospect().StageList("2")]

 Displays the description, date, and time of the third most recent stage in the leasing process for the selected prospect.

 [Prospect().StageList("","1/1/ 2026 ","12/31/ 2026 ")]

 Displays the description, date, and time for the stage(s) defined for the selected prospect from January 1, 2026 through December 31, 2026 .

 [Prospect().StageList("1", "", "", "$_Name\t$_Description\t$_UpdateUser\t$_UpdateDate\n")]

 Displays the name, description, user who updated the stage, and the date and time of the update (separated by tabs) for the second most recent stage in the leasing process for the selected prospect.
