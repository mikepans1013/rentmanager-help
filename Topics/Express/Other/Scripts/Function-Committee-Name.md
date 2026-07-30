# Committee Name Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Committee-Name.htm

This function displays the name of the committee to which the contact has been added on a property with the Property Type of Association selected on the property's Committee Members pop-up.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

 [ Class(). Contact().CommitteeName()]

 Displays information on the association-type property's Committee Members pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CommitteeName( "Index" )]

 Index

 Select the committee to examine. The committee the tenant contact was most recently added to has an index value of 0 , the second most recent committee has an index value of 1 , and so on. If no Index parameter is specified, the index defaults to 0 .

 [CommitteeName("1")]

 Displays the name of the second most recent committee the tenant contact was added to on the association-type property's Committee Members pop-up.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Contact().CommitteeName()]

 Displays the name of the most recent committee to which the tenant's primary contact was added.

 [Tenant().Contact(1).CommitteeName("2")]

 Displays the name of the third most recent committee to which the tenant's first additional contact was added.
