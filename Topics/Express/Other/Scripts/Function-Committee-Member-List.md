# Committee Member List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Committee-Member-List.htm

This function displays the list of members on a committee at a property with the Property Type of Association selected on the property's details page.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Property

 [Property().CommitteeMemberList()]

 Displays information on the association-type property's Committee Members pop-up

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CommitteeMemberList( "CommitteeName" , "Format" )]

 CommitteeName

 Specify the association committee you wish to examine. If no committee is specified, all members of all committees display.

 [CommitteeMemberList("Architectural Requests")]

 Displays the list of committee members on the Architectural Requests committee.

 Format

 List details of each committee member using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the members' first and last names:

 "\t$_FirstName\t$_LastName\n"

 Variables

 The following variables may be used in the Format parameter. These return data from the Committee Members tab of the selected association-type property's Committee Members pop-up.

 Variable
 Description

 $_Comments

 Displays the Comments entered for the committee member.

 $_Committee

 Displays the name of the Committee .

 $_Email

 Displays the Email address entered for the committee member.

 $_FirstName

 Displays the first name of the committee member.

 $_LastName

 Displays the last name of the committee member.

 [CommitteeMemberList("","","\t$_LastName\t$_Committee\t$_Comments\n")]

 Displays a new line with a customized list of the last name, committee name, and comments for all committee members.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().CommitteeMemberList()]

 Displays a new line with the default formatted text string for each member on the Committee Members tab on the association-type property's Committee Members pop-up.

 [Property().CommitteeMemberList("Events and Planning")]

 Displays a new line with the default formatted text string for each member of the Events and Planning committee.

 [Property().CommitteeMemberList("","","\t$_LastName\t$_Committee\t$_Email\n")]

 Displays a new line with a customized list of last name, committee, and email address for each member on the Committee Members tab on the association-type property's Committee Members pop-up

 The output displays as shown below:
