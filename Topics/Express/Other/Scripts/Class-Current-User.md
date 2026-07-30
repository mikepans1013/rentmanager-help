# Current User Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Current-User.htm

This class examines the user currently logged in to Rent Manager . It is preceded by the system class and can be followed by a scripting function associated with the user.

 Example

 [System.CurrentUser.UserName]

 Result

 Displays the username of the user currently logged in to Rent Manager .

 Example

 [System.CurrentUser.UserDefinedField()]

 Result

 Displays the value of the specified user defined field for the user currently logged in to Rent Manager .

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 User Defined Field

 [System.CurrentUser.UserDefinedField()]

 Displays the value of the user defined field (UDF) for the user currently logged in to Rent Manager . The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [System.CurrentUser.UserDefinedField("Status")]

 Displays the value for the Status user defined field for the user currently logged in to Rent Manager

 User Full Name

 [System.CurrentUser.UserFullName]

 Displays the first and last name of the user currently logged in to Rent Manager .

 User Name

 [System.CurrentUser.UserName]

 Displays the username of the user currently logged in to Rent Manager .
