# Lost Reason Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Lost-Reason.htm

This function displays the reason the chosen prospect was lost, as selected on the prospect's Change Prospect Status pop-up.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 Class
 Syntax

 Prospect

 [Prospect().LostReason()]

 Displays information found on the prospect's Lead Information tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LostReason( "Format" )]

 Format

 List details of each entry using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name and, if applicable, the description of the prospect lost reason, separated by tabs:

 "$_Name\t$_Description"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date and time that the prospect's status was first assigned.

 $_CreateUser

 Displays the username of the Rent Manager user who first assigned the prospect's status.

 $_Description

 Displays text entered on the Change Prospect Status pop-up's Description field.

 If no description was entered, this displays as blank.

 $_Name

 Displays the name of the lost reason (e.g. Price , Unit Unavailable , Eviction , Insufficient Income ).

 $_Status

 Displays one of two system-generated outcomes ( Lost or Lost-Rejected ) of the prospect's account.

 $_UpdateDate

 Displays the date and time that the prospect's status was last updated.

 $_UpdateUser

 Displays the username of the Rent Manager user who last updated the prospect's status.

 LostReason("\t$_Name\t$_Description\t$_UpdateDate")

 Displays the name of the lost reason, the text entered on the Change Prospect Status pop-up's Description field, and the date and time that the account status was last updated, separated by tabs for each prospect lost reason.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().LostReason()]

 Displays the reason the selected prospect was lost, as selected on the Change Prospect Status pop-up's Reason field.

 [Prospect().LostReason("\t$_Name\t$_Description\t$_CreateDate")]

 Displays the name of the lost reason, the text entered on the Change Prospect Status pop-up's Description field, and the date and time that the account status was first assigned, separated by tabs for each prospect lost reason.
