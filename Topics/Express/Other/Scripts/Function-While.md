# While Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-While.htm

This function (sometimes referred to as a While loop) repeatedly executes specific actions or returns results. The While loop examines a Condition parameter, and if that condition is true, the actions specified in the Statement parameters are executed. Then the condition is examined again, and if it remains true, the statements are executed again. This cycle continues until the condition becomes false, at which point the While loop ends.

 This function can be utilized by the following classes:

 Class
 Syntax

 System

 [System.While()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [While( "Condition","Statement" )]

 Condition

 This is the expression to be tested before each loop of the Statements parameter. Two values are compared, and the expression is either true or false.

 If this expression is true, Rent Manager executes the Statements parameter. When the expression is false, the while function ends. Conditions evaluate two values using various operators, such as <, >, ==, and !=.

 Warning

 If the Condition does not reach a point where it becomes false, this becomes an infinite loop and crashes Rent Manager , requiring you to log out and back in. It is imperative to include an item that eventually causes the expression to register as false. This is almost always done with a variable and an incremental counter.

 [$i=0 ; ""]

 [While($i<ContactCount,

 echo(contact($i).email) ;

 echo(linefeed) ;

 $i=$i+1;

 )]

 This While function example displays the email address of each contact on the specified tenant account. The $i stands for an "iterating variable" and serves as a counter for the loop. The variable is set to 0 ($i=0) at the beginning of the loop.

 After the variable is set to 0 , the condition is examined. The condition states that while the iterating variable is less than the ContactCount on the tenant account, the statements are true and will be executed.

 The script examines the number of contacts on the tenant account, and if there are three contacts on that account, it completes three loops of the cycle (loop 0, loop 1, and loop 2) before becoming false and stopping.

 Statement

 These values, scripts, or variables are executed when the condition parameter is evaluated to be true.

 [$i=0 ; ""]

 [While($i<ContactCount,

 echo(contact($i).email) ;

 echo(linefeed) ;

 $i=$i+1;

 )]

 Displays the email address of each contact on the specified tenant account. When the condition of While($i<ContactCount is returned as true, the three statements of the while loop are output.

 The first statement is echo(contact($i).email) . Echo instructs Rent Manager to display text in the letter or report. This statement displays the email address of the indexed contact that is currently being examined (as designated by $i ). The second statement, echo(linefeed) ; , displays a new line. Semicolons (;) are used to separate statements.

 The third statement is $i=$i+1 . After echoing the current contact's email address, this statement adds 1 to the iterating variable. In the top line of the script, the iterating variable is set to 0 . After displaying the first contact's email, the script adds 1 to 0, resulting in a new $i value of 1 . The script then reruns, and since $i is still less than ContactCount, it displays the email of the second contact. Again, the script adds 1, bringing the iterating variable to 2 . If the tenant account has three contacts, the last loop will be when the iterating variable is 3 , and the loop stops after displaying the third email.

 Operators

 Operators are symbols used in scripts to perform specific actions while determining what to display. In While functions, operators are used alongside variables to determine whether or not the Condition parameter is true. For example, if the operator < (Less Than) is used with the variable $i in the Condition statement, the While loop continues to execute the Statement parameter until the value of $i surpasses the value the operator compares it to.

 Comparison operators are listed below:

 Operator
 Description

 <

 Less than

 Determines if the first value is less than the second.

 [$i=0 ; ""]

 [System.While($i<3,echo($i) ;

 echo(linefeed) ;

 $i=$i+1;)]

 Displays a running count of the $i variable starting at the initial value of $i (i.e., 0) as long as $i is less than 3 . This script writes the numbers 0 , 1 , and 2 , but not 3 . Three is not less than three, so the loop ends because the condition is no longer true.

 <=

 Less than or equal

 Determines if the first value is less than or equal to the second.

 [$i=0 ; ""]

 [System.While($i<=3,echo($i) ;

 echo(linefeed) ;

 $i=$i+1;)]

 Displays a running count of the $i variable starting at the initial value of $i (i.e., 0)as long as $i is less than or equal to 3 . This script writes the numbers 0 , 1 , 2 , and 3 . After the count passes three, the loop ends because the condition is no longer true.

 >

 Greater than

 Determines if the first value is greater than the second.

 [$i=3 ; ""]

 [System.While($i>0,echo($i) ;

 echo(linefeed) ;

 $i=$i-1;)]

 Displays a backwards running count of the $i variable starting at the initial value of $i (i.e., 3) and counting down as long as $i is greater than 3 . This script writes the numbers 3 , 2 , and 1 , but not 0 . Zero is not greater than zero, so the loop ends because the condition is no longer true.

 >=

 Greater than or equal

 Determines if the first value is greater than or equal to the second.

 [$i=3 ; ""]

 [System.While($i>=0,echo($i) ;

 echo(linefeed) ;

 $i=$i-1;)]

 Displays a backwards running count of the $i variable starting at the initial value of $i (i.e., 3) and counting down as long as $i is greater than or equal to 3 . This script writes the numbers 3 , 2 , 1 , and 0 . After the countdown passes zero, the loop ends because the condition is no longer true.

 ==

 Equal

 Determines if the first value is equal to the second.

 [$i=1 ; ""]

 [$x=9 ; ""]

 [System.While($i != $x,

 System.If($x==7,echo("Three"),echo($i)) ;

 echo(linefeed) ;

 $i=$i+1;

 $x=$x-1)]

 Displays a running count of the $i variable starting at the initial value of $i (i.e., 1) and counting as long as $i and $x are not equal. When the value of $x is equal to (==) 7, the script returns the word Three instead of the numeral. Otherwise, this script writes the numbers 1 , 2 , and 4 . After the values of $i and $x are equal, the loop ends because the condition is no longer true.

 !=

 Not equal

 Determines if the first value is not equal to the second.

 [$i=1 ; ""]

 [$x=9 ; ""]

 [System.While($i != $x,echo($i) ;

 echo(linefeed) ;

 $i=$i+1;

 $x=$x-1)]

 Displays a running count of the $i variable starting at the initial value of $i (i.e., 1) and counting down as long as $i and $x are not equal. This script writes the numbers 1 , 2 , 3 , and 4 . When both $i and $x equal five, the loop ends because the condition is no longer true.

 &&

 And

 Instructs Rent Manager to consider an additional comparison. All comparisons must be true for the function to iterate.

 [$i=10 ; ""]

 [$x=0 ; ""]

 [System.While($i>=0 && $x<=5,echo($i) ;

 echo(linefeed) ;

 $i=$i-1;

 $x=$x+1)]

 Displays a backwards running count of the $i variable starting at the initial value of $i (i.e., 10) and counting down as long as $i is greater than or equal to 0 and $x is less than or equal to 5 . This script writes the numbers 10 through 5 . After the value of $x passes five, the loop ends because both parts of the condition are no longer true at the same time.

 ||

 Or

 Instructs Rent Manager to consider an alternate comparison. As long as at least one of the two compared values is true, the function continues to iterate.

 [$i=10 ; ""]

 [$x=0; ""]

 [System.While($i>=0 || $x<=5,echo($i) ;

 echo(linefeed) ;

 $i=$i-1;

 $x=$x+1)]

 Displays a backwards running count of the $i variable starting at the initial value of $i (i.e., 10) and counting down as long as $i is greater than or equal to 0 or $x is less than or equal to 5 . This script writes the numbers 10 through 0 since one or both of the conditions remains true until $i is less than zero.

 ++
Increment

 Adds one to the current value of a variable.

 [$i=0 ; ""]

 [System.While($i<3,echo($i) ;

 echo(linefeed) ;

 $i=$i++;)]

 Displays a running count of the $i variable starting at the initial value of $i (i.e., 0) as long as $i is less than 3 . This script writes the numbers 0 , 1 , and 2 , but not 3 . Three is not less than three, so the loop ends because the condition is no longer true.

 More Information

 The ++ operator adds one to the current value of the variable but does not save the incremented value to the variable for reuse. To permanently change the variable using the ++  operator, you must write the script as $i=$i++ , where $i is the variable.

 --

 Decrement

 Subtracts one from the current value of a variable.

 [$i=3 ; ""]

 [System.While($i>0,echo($i) ;

 echo(linefeed) ;

 $i=$i--;)]

 Displays a backwards running count of the $i variable starting at the initial value of $i (i.e., 3) and counting down as long as $i is greater than 0 . This script writes the numbers 3 , 2 , and 1 , but not 0 . Zero is not greater than zero, so the loop ends because the condition is no longer true.

 More Information

 The -- operator subtracts one from the current value of the variable but does not save the decremented value to the variable for reuse. To permanently change the variable using the --  operator, you must write the script as $i=$i-- , where $i is the variable.

 Script Examples

 The following scripts show various ways the function can be used:

 [$i=0;

 while($i<contactcount,

 if(Contact($i).ShowOnBill()==1,echo (Contact($i).GreetingName() & linefeed),””);

 $i=$i+1)]

 Displays the contact names marked as Show on Statement/Labels for the selected tenant(s) on separate lines.

 The variable $i sets the beginning value of the index to 0 . The while function examines the number of contacts counted by comparing the index ($i) to the results of the ContactCount function.

 While that index is below the total number of contacts, the contact is examined with the function  ShowOnBill()==1 , and ==1 specifies that this function should return as True to be included. Rent Manager goes to the contact that matches the number in the iterating variable, checks to see if that contact has Show on Statement/Labels enabled, and, if so, outputs that contact's greeting name and starts a new line with linefeed .

 After that contact is evaluated, the while function adds a 1 to the index to indicate another contact has been examined. The While function loops again until reaching the total number of contacts on the account. At that time, the script finishes.

 [$index=0;$totalsalary=0;””]

 [system.while($index<ContactCount,

 $totalsalary=$totalsalary+tenant.contact($index).userdefinedfield("Salary");

 $index=$index+1;)]

 [echo($totalsalary)]

 Displays the total salary of all contacts of the current tenant account.

 [$index=0;$totalsalary=0] sets the beginning value of the $index and $totalsalary variables at 0 but does not print, because ;”” was used. The $index variable is used to count each contact associated with the tenant.

 The condition parameter examines the value of $index in relation to the ContactCount function. While $index is less than the ContactCount, the statement parameter adds the value from the user defined field of Salary and then adds 1 to the value of $index. Then the condition parameter is tested again.

 The value of $totalsalary accumulates with each contact's salary until the value of $index is no longer less than ContactCount.

 [echo($totalsalary)] then prints the final value of $totalsalary.

 [$i=0;$SEP = ", ";
While($i<ContactCount(),
if($i<>0, echo($SEP), "");
echo(Contact($i).GreetingName());
$i=$i+1)]

 Displays the greeting name for each contact, separated by a comma.
