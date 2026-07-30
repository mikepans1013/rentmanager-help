# Ask Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Ask.htm

This function asks the Rent Manager user a question and records the response. In most cases, the user response is either displayed or stored in a variable that can be used later in another scripting function.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Ask()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Ask( "Question" , "Reference" )]

 More Information

 If two or more Ask functions are used with the same Question and have either no Reference parameter or identical Reference parameters, only the first Ask prompt displays. The system uses the answer to this question for all subsequent Ask functions with the same Question and, if applicable, Reference parameter.

 To prompt the user to respond to each Ask function with an identical Question value, include a unique Reference parameter value for each.

 Question

 Specify the question that displays to the user who is running the script.

 [Ask("Date of Birth")]

 Prompts the user to enter a response to the question in the quotation marks (in this example, their date of birth).

 Reference

 Enter a unique numeric value to allow multiple prompts in cases of identical questions.

 [Ask("Date of Birth",1);Ask("Date of Birth",2)]

 Prompts the user to enter a response to the question two times.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Ask("In what city were you born?")

 Prompts the user to enter the city where they were born. The result displays.

 [$mysalary = System.Ask("Annual Salary")]

 Prompts the user to enter their salary. The result displays and is also stored in a variable called $mysalary. This variable can then be used in another scripting function.

 For example, the following script displays the salary amount stored in the variable in currency-format (with dollar sign, thousands separator, and two decimal places): [System.Format($mysalary,"Currency")]

 [$mysalary = System.Ask("Annual Salary");""]

 Prompts the user to enter a yearly salary. The results do not display because ;"" was added and the answer is stored in the $mysalary variable.

 [$a1 = System.Ask("Number of Pets?"); $a2 = System.Ask("Number of Pets?"); $a1 + $a2]

 Prompts the user once to enter their number of pets. The same answer displays twice, both answers are added together, and that total is displayed.

 [$a1 = System.Ask("Number of Pets?",3); $a2 = System.Ask("Number of Pets?",4); $a1 + $a2]

 Prompts the user twice to enter their number of pets. The two answers both display, are added together, and that total displays.
