# Details Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Details.htm

This function returns selected information (such as credit score and credit bureau name) generated when a screening was performed on a tenant or prospect.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Screening

 [ Class() .Contact().Screening.Details()]

 Displays information from the Screening details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Details( "Format" )]

 Format

 List details of each screening using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the screening details including the agency, score, date, credit range, and credit factors, separated by tabs:

 "\t$_Agency\t$_Score\t$_Date\t$_Min\t$_Max\t$_Factors\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Agency

 Displays the name of the credit bureau reporting the score.

 $_Date

 Displays the date on which the screening requested the credit score.

 $_Factor#

 Displays the specified factor that adversely affected the credit score. Each agency can have 0–5 factors.

 To display a specific factor, insert numbers 1 through 5 in place of # (e.g., $_Factor3 ).

 $_Factors

 Displays the list of factors with each factor separated by a semicolon.

 $_Max

 Displays the highest possible credit score in the range.

 $_Min

 Displays the lowest possible credit score in the range.

 $_Name

 Displays the name of the person being screened.

 $_NumberedFactors

 Displays a numbered list of factors that adversely affected the credit score.

 $_Score

 Displays the person's credit score.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().Contact().Screening.Details()]

 Displays the Agency , Score , Date , Min , Max, and Factors for the primary contact on the prospect's account.

 The output displays as shown below:

 [Prospect().Contact(1).Screening.Details()]

 Displays the screening information from the default format for the first additional contact on the prospect's account.

 [Prospect(122).Contact().Screening.Details()]

 Displays the screening information from the default format for the primary contact of the prospect with the system-generated account ID number 122 .

 [Prospect().Contact().Screening.Details(“$_Name\t$_Score\t$_Agency\t$_Date\n”)]

 Displays the Name , Score , Agency , and Date for the primary contact on the prospect's account.

 The output displays as shown below:
