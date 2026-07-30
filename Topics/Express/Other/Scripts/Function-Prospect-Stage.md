# Prospect Stage Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Prospect-Stage.htm

This function displays the current Stage of a prospect in the leasing process.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect().ProspectStage()]

 Displays information found on the prospect's Lead Information tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ProspectStage( "StageIndex" , "Format" )]

 StageIndex

 Specify the prospect stage to display. By default, the prospect's most recent stage displays.

 [ProspectStage("1")]

 Displays the second most recent stage assigned to the prospect.

 Format

 List details of each entry using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the prospect stage:

 "$_Name"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date and time that the stage was assigned.

 $_CreateUser

 Displays the username of the Rent Manager user who assigned the specified stage, or completed the trigger action that assigned the specified stage.

 If the stage was set by the prospect (such as when an application is submitted, or a document signed), this displays blank.

 $_Description

 Displays text entered in the Description field of the prospect stage.

 $_Duration

 Displays the amount of time the prospect spent in that stage.

 If the stage is currently active, this displays as blank.

 $_FromDate

 Displays the date and time the selected stage was assigned.

 $_Name

 Displays the name of the stage.

 $_ToDate

 Displays the date and time the selected stage was last assigned.

 If this is the current stage, the From Date displays.

 $_UpdateDate

 Displays the date and time the selected stage was last updated.

 $_UpdateUser

 Displays the username of the Rent Manager user who last updated the stage, or completed the trigger action that assigned the specified stage.

 If the stage was set by the prospect (such as when an application is submitted, or a document signed), this displays blank.

 ProspectStage("","\t$_Name\t$_Duration\n")

 Displays a new line with a customized list of the stage name and amount of time spent in the stag, separated by tabs for each prospect stage.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().ProspectStage()]

 Displays the stage most recently assigned to the selected prospect.

 [Prospect().ProspectStage("2")]

 Displays the third most recent stage assigned to the selected prospect.

 [Prospect().ProspectStage("","$_Name\t$_Description\t$_UpdateUser\t$_UpdateDate")]

 Displays the name, description, user who last updated the stage, and the date and time of the last update (with tabs separating) for the selected prospect's active stage.
