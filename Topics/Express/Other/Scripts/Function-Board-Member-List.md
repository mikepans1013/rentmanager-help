# Board Member List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Board-Member-List.htm

This function displays the list of members on the association board of a property with the Property Type of Association selected on the property's General tile.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Property

 [Property().BoardMemberList()]

 Displays information on the association-type property's Board Members pop-up.

 FinancialProperty

 [ Class() .FinancialProperty().BoardMemberList()]

 Displays information on the home or asset's association-type property's Board Members pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [BoardMemberList( "AsOfDate" , "Role" , "Format" )]

 AsOfDate

 Specify the date for which to retrieve the list of board members.

 If no date is specified, today's date is used by default.

 [BoardMemberList("3/14/ 2026 ")]

 Displays the list of board members as of March 14, 2026 .

 Role

 Specify the role of these board members you wish to examine. If no role is specified, all roles display.

 [BoardMemberList("","Secretary")]

 Displays the list of board members with the role of "Secretary" as of today.

 Format

 List details of each member on the Board Members tab using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the members' first and last names:

 "\t$_FirstName\t$_LastName\n"

 Variables

 The following variables may be used in the Format parameter. These return data from the association-type property's Board Members pop-up.

 Variable
 Description

 $_Comments

 Displays the Comments entered for the board member.

 $_Email

 Displays the Email address entered for the board member.

 $_FirstName

 Displays the first name of the board member.

 $_LastName

 Displays the last name of the board member.

 $_Role

 Displays the Role of the board member.

 $_TermEnd

 Displays the end date of the board member's term.

 $_TermStart

 Displays the start date of the board member's term.

 [BoardMemberList("","","\t$_LastName\t$_Role\t$_Comments\n")]

 Displays a new line with a customized list of the last name, role, and comments for all board members as of today.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().BoardMemberList()]

 Displays a new line with the default formatted text string for each member on the association-type property's Board Members pop-up.

 [Property().BoardMemberList("06/01/ 2026 ")]

 Displays a new line with the default formatted text string for each member on the Board Members tab on the association-type property's Board Members pop-up as of June 1, 2026 .

 [Property().BoardMemberList("01/01/ 2026 ","Treasurer")]

 Displays a new line with the default formatted text string for each member on the association-type property's Board Members pop-up with a role of Treasurer as of January 1, 2026 .

 [Property().BoardMemberList("","","\t$_LastName\t$_Role\t$_TermStart\t$_TermEnd\n")]

 Displays a new line with a customized list of last name, role, term start date, and term end date for each member on the association-type property's Board Members pop-up as of today.

 The output displays as shown below:
