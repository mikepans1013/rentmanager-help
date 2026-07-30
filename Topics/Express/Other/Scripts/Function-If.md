# If Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-If.htm

This function tests a condition parameter and then executes one of two specified statements. If the condition is true, the code defined for the TruePart parameter displays. Otherwise, the code defined for the FalsePart parameter displays. Various operators can be used in this function's parameters.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.If()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [If( "Condition","TruePart","FalsePart" )]

 Condition

 This is the condition to be evaluated by the If function.

 If a script is used as the Condition parameter, the script output value determines whether the If function executes its TruePart or FalsePart parameter. Scripts that output a value of 0 or "false" execute the FalsePart parameter. Scripts that output any value greater than 0 or "true" execute the TruePart parameter.

 [If(1>0,"Yes","No")]

 Displays Yes because the condition is true; 1 is greater than 0.

 [If(IndexOf("Commercial","e"), echo("True"), echo("False"))]

 Displays True because the IndexOf function returns a value of 5, which is greater than 0.

 [If(Lease.IsCurrent(), echo("True"), echo("False"))]

 If a tenant's lease end date is after today's date, this script displays True because the IsCurrent function returns a value of "true."

 TruePart

 This text or function is executed only if the condition is evaluated as true.

 [If(2>1,"Yes","No")]

 Displays Yes because the condition is true; 2 is greater than 1.

 FalsePart

 This text or function is executed only if the condition is evaluated as false.

 [If(1>2,"Yes","No")]

 Displays No because the condition is false; 1 is not greater than 2.

 Operators

 Operators are symbols used in scripts to perform specific actions while determining what to display. Comparison operators are used in condition parameters, such as the parameters in If and While, to establish how Rent Manager evaluates the parameter values and if TruePart or FalsePart should be returned.

 Comparison operators are listed below:

 Operator
 Description

 <

 Less than

 Determines if the first value is less than the second.

 [System.If(1<2,"Yes","No")]

 Displays Yes because one is less than two.

 <=

 Less than or equal

 Determines if the first value is less than or equal to the second.

 [System.If(2<=2,"Yes","No")]

 Displays Yes because two is equal to two.

 >

 Greater than

 Determines if the first value is greater than the second.

 [System.If(1>2,"Yes","No")]

 Displays No because one is not greater than two.

 >=

 Greater than or equal

 Determines if the first value is greater than or equal to the second.

 [System.If(2>=2,"Yes","No")]

 Displays Yes because two is equal to two.

 ==

 Equal

 Determines if the first value is equal to the second.

 [System.If(1==0,"Yes","No")]

 Displays No because one does not equal zero.

 !=

 Not equal

 Determines if the first value is not equal to the second.

 [System.If(1!=2,"Yes","No")]

 Displays Yes because one does not equal two.

 &&

 And

 Instructs Rent Manager to consider an additional comparison. All comparisons must be true to return the TruePart. Otherwise, the function returns the FalsePart.

 [System.If(1<2 && 2<3,"Yes","No")]

 Displays Yes because one is less than two and two is less than three.

 ||

 Or

 Instructs Rent Manager to consider an alternate comparison. At least one comparison must be true to return the TruePart. Otherwise, the function returns the FalsePart.

 [System.If(1<2 || 0>4,"Yes","No")]

 Displays Yes because one is less than two despite zero not being greater than four.

 ++

 Increment

 Adds one to the current value of a variable.

 [$i=0 ; ""]

 [System.If($i<3,echo($i++) ,"")]

 Displays the number 1 , which is one greater than the current variable value of zero.

 More Information

 If you are using the ++ operator to iteratively increment a variable in nested If and While functions, you must write the script as $i=$i++ to rewrite the variable ($i) with the incremented value.

 --

 Decrement

 Subtracts one from the current value of a variable.

 [$i=1 ; ""]

 [System.If($i<3,echo($i--) ,"")]

 Displays the number 0 , which is one less than the current variable value of one.

 More Information

 If you are using the -- operator to iteratively decrement a variable in nested If and While functions, you must write the script as $i=$i-- to rewrite the variable ($i) with the decremented value.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.If(1<2,"True","False")]

 Displays True .

 [System.If(Balance>0,Balance,"No balance")]

 Displays the outstanding balance if it is greater than zero.

 Displays No balance for accounts without an outstanding balance.

 [System.If(Balance>0,"Please pay immediately!","Thank you for your recent payment!")]

 Displays Please pay immediately! for accounts with an outstanding balance.

 Displays Thank you for your recent payment! for accounts without an outstanding balance.

 [$RETURN = "";
$DATE = Ask("What day do you want to check?");
$LOW = Ask("What is the earliest date?");
$HIGH = Ask("What is the latest date?");
If(DateCompare($DATE, $LOW)>=0 && DateCompare($DATE,$HIGH)<=0, $RETURN = "True", $RETURN = "False");
echo($RETURN)]

 Returns true if a given date is between two other dates. You can use this as a filter in Report Writer .
