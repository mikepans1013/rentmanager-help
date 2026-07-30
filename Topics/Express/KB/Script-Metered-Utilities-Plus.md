# Metered Utilities Plus Scripts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Metered-Utilities-Plus.htm

Rent Manager Metered Utilities Plus (MU-Plus) allows you to bill tenants for usage of utilities such as gas, electric, water, and sewer. Metered Utilities Plus is a meter type which has its own scripting functions.

 From a meter type with the Type of MU-Plus , use the Statements tile and Calculations tile in the Calculation field to add script functions.

 Available Functions

 The table below lists all the functions available for Metered Utilities Plus . These functions can be used only in the Statements and Calculations sections of an Metered Utilities Plus meter type. Each variable should be contained between either single (') or double (") quotes.

 Function
 Description

 Alt Rate Blend

[AltRateBlend( "RateVariable" )]

 This function allows the blending of multiple rates over different periods. If a reading took place during multiple periods and each period used a different rate, a balanced rate of the relevant days for the consumption period are calculated as the 'blended' rate.

 More Information

 This script function uses the Low Income rate for standard tenants and the Standard Rate for low-income tenants. Use RateBlend for tenants to use the rate attributed to their income.

 For example, use the script: AltRateBlend("Tier1") . There have been thirty days between the last reading date and the current reading date. In the first ten days of this period, Tier1 was defined at a value of 1.2. For the next twenty days in the period, Tier1 changed to 1.3.

 Rent Manager takes 1.2 and multiples it by ten days, then takes 1.3 and multiplies it by twenty days, adds up those two totals and divides the result by the full thirty days in the period to come up with a new average (blended) rate.

 (1.2 * 10 + 1.3 * 20) / 30 = 1.2667

 Cur

[Cur( "Value" )]

 This function formats the specified numeric value as currency.

 The following reserved variables can be used as values:

 -
 BR
(Base Rate)

 -
 Other, Other1, Other2, etc…

 -
 POST

 -
 XR (Excess Rate)

 -
 Zone

 For detailed descriptions of each, refer to Reserved Variables .

 [Currency(POST)]

 Displays the numeric value of the final amount after all other calculations as currency. If the final post amount is calculated at 122, the value $122.00 displays.

 Day

 [Day( "Value" )]

 This function displays the numeric day from a specified date.

 The following reserved variables can be used as values:

 -
 CRD (Current Reading Date)

 -
 PRD
(Previous Reading Date)

 For detailed descriptions of each, refer to Reserved Variables .

 [Day(CRD)]

 Displays the value of the day for the date of the current reading. If the date of the current reading is 6/1/ 2026 , the value 1 displays.

 Excess

[Excess( "Value1","Value2" )]

 This function displays the difference in the specified numeric values by subtracting Value2 from Value1.

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

Format

[Format( "Value","Format" )]

 This function adjusts the formatting of a date, time, or numeric value. For more information, refer to Format Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

If

[If( "Condition","TruePart","FalsePart" )]

 This function tests a condition parameter and then executes one of two specified statements. If the condition is true, the TruePart parameter displays. Otherwise, the FalsePart parameter displays. Various operators can be used in this function's parameters. For more information, refer to If Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 Discount Rate = [If(RC == "Standard","","-5")]

 If the tenant uses the Standard (S) rate class, no discount rate displays.

 If the tenant does not use the Standard (S) rate class, the discount rate of -5 displays.

Index Of

[IndexOf( "Value1","Value2" )]

 This function finds the first occurrence of the Value2 parameter within the Value1 parameter and returns the index value of Value2's place in the string. If Value2 is not found, the function displays a value of 0 . This can be used with Left, Right, or Mid as a parameter in those functions, allowing you to find the correct place to separate text.

 This function is generally used in addition to other scripts. For more information, refer to Index Of Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 Int

[Int( "Value" )]

 Enter the value that should be examined. It can be a literal value or the value returned by another function.

 This function verifies that the value entered is an integer (number) and displays the value. If the value entered is not an integer, you will receive an error message when attempting to save the meter type.

 The following reserved variables can be used as values:

 -
 BL (Base Line)

 -
 BR
(Base Rate)

 -
 C (Consumption)

 -

CR
(Current Reading)

 -
 Days

 -
 Other, Other1, Other2, etc…

 -
 POST

 -
 PR
(Previous Reading)

 -
 XR (Excess Rate)

 -
 Zone

 For detailed descriptions of each, refer to Reserved Variables .

 [Int("4")]

 Displays the value of 4 , as this is a valid integer.

 [Int("Four")]

 Displays an error message when attempting to save the meter type as the word Four is not an integer.

 [Int("4.1")]

 Displays an error message when attempting to save the meter type as 4.1 is not an integer.

 [Int(C)]

 Displays the total Consumption of the meter reading (e.g., 1000 ), if it is an integer.

 Left

 [Left( "Value","Length" )]

 This function displays a specified number of characters (including white spaces) from the left side of a string. For more information, refer to Left Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 Lower Case

 [LowerCase( "Value" )]

 This function displays a text string in lowercase. For more information, refer to Lower Case Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 [LowerCase(RC)]

 Displays the value in lowercase. If the Rate Class is Standard , the value standard displays.

 Maximum

 [Maximum( "Value1","Value2" )]

 This function compares two numeric values and displays the larger value. If neither of the values are numeric, it displays 0 .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 This variable can also be shortened to [Max( "Value1","Value2" )] .

 [Maximum("100",BR)]

 Displays the larger value after comparing the value 100 and the current Base Rate amount.

 Mid

 [Mid( "Value" , "Start" , "Length" )]

 This function displays a portion of a given value starting at a specified character and continuing for a specified number of characters. For more information, refer to Mid Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 Minimum

[Minimum( "Value1","Value2" )]

 This function compares two numeric values and displays the smaller value. If neither of the values are numeric, it displays 0 .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 This variable can also be shortened to [Min( "Value1","Value2" )] .

 [Minimum("100",BL)]

 Displays the smaller value after comparing the value 100 and the current Base Line amount.

 Month

[Month( "Value" )]

 This function displays the month component of a date value. A non-date returns a value of 1 . For more information, refer to Month Function (Script) .

 The following reserved variables can be used as values:

 -
 CRD (Current Reading Date)

 -
 PRD
(Previous Reading Date)

 For detailed descriptions of each, refer to Reserved Variables .

 [Month(CRD)]

 Displays the month component of the current reading date. If the current reading date is December 1, 2026 , the value 12 displays.

 Rate

[Rate( "RateVariable" )]

 This function uses the most current value for the specified variable regardless of recent changes to the rate.

 [Rate("Tier1")]

 For example, use the script: Rate("Tier1") . There were thirty days between the last reading date and the current reading date. In the first ten days of this period, Tier1 was defined at a value of 1.5. For the next 20 days in the period, Tier1 changed to 1.6.

 With this function, Rent Manager ignores the change and uses 1.6 in any subsequent formulas that use the Tier1 variable.

 Rate Blend

[RateBlend( "RateVariable" )]

 This function allows the blending of multiple rates over different periods. For example, if a reading took place during multiple periods and each period used a different rate, an balanced rate of the relevant days for the consumption period are calculated as the 'blended' rate.

 [RateBlend("Tier1")]

 For example, use the script: RateBlend("Tier1") . There were thirty days between the last reading date and the current reading date. In the first ten days of this period, Tier1 was defined at a value of 1.5. For the next twenty days in the period, Tier1 changed to 1.6.

 Rent Manager takes 1.5 and multiples it by ten days, then takes 1.6 and multiplies it by twenty days, adds up those two totals and divides the result by the full thirty days in the period to come up with a new average (blended) rate.

 (1.5 * 10 + 1.6 * 20) / 30 = 1.5667

 Rate Date

[RateDate( "RateVariable" )]

 This function displays the date on which the current rate became active.

 [RateDate("Tier1")]

 Displays the date on which the current rate for Tier1 became active.

 Right

[Right( "Value","Length" )]

 This function displays a specified number of characters (including spaces) from the right side of a string. Fore more information, refer to Right Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 Round

[Round( "Value" , "Decimals" )]

 This function evaluates a number and rounds it to the specified decimal place. Non-numeric values return a value of 0 . For more information, refer to Round Function (Script) .

 The following reserved variables can be used as values:

 -
 BL (Base Line)

 -
 BR
(Base Rate)

 -
 C (Consumption)

 -

CR
(Current Reading)

 -
 CRD (Current Reading Date)

 -
 Days

 -
 Other, Other1, Other2, etc…

 -
 POST

 -
 PR
(Previous Reading)

 -
 PRD
(Previous Reading Date)

 -
 XR (Excess Rate)

 -
 Zone

 For detailed descriptions of each, refer to Reserved Variables .

 [Round(BR,0)]

 Displays the amount of the fixed base rate, rounded to the nearest whole number. If the fixed Base Rate is 7.12, the function displays a value of 7 .

 Upper Case

[Uppercase( "Value" )]

 This function returns a text string converted to upper case text. For more information, refer to Upper Case Function (Script) .

 You can use reserved variables for the values in this function. For detailed descriptions of each, refer to Reserved Variables .

 [UpperCase(RC)]

 Displays the value in uppercase. If the Rate Class is Standard , the value STANDARD displays.

 Val

[Val( "Value" )]

 This function returns the numbers in a string, up until the first character that is not one of the following:

 -
 Numeric digits (e.g., 1 , 2 , 3 )

 -
 Numeric modifiers (e.g., + , - )

 -
 Numeric punctuation (e.g., commas , decimals )

 -
 White/blank space (e.g., a space)

 The following reserved variables can be used as values:

 -
 BL (Base Line)

 -
 BR
(Base Rate)

 -
 C (Consumption)

 -

CR
(Current Reading)

 -
 Days

 -
 Other, Other1, Other2, etc…

 -
 POST

 -
 PR
(Previous Reading)

 -
 XR (Excess Rate)

 -
 Zone

 For detailed descriptions of each, refer to Reserved Variables .

[Val("405 2nd Street")]

 Displays the value 4052 .

[Val(CRD)]

 If the Current Reading Date is 4/12/ 2026 , displays the value 4 .

 Year

[Year( "Value" )]

 This function returns the year component of a date value. A non-date value returns a value of 1 . For more information, refer to Year Function (Script) .

 The following reserved variables can be used as values:

 -
 CRD (Current Reading Date)

 -
 PRD
(Previous Reading Date)

 For detailed descriptions of each, refer to Reserved Variables .

 [Year(CRD)]

 Displays the year component of the current reading date. If the current reading date is December 1, 2026 , the value 2026 displays.

 Rate Variables

 Some Metered Utilities Plus scripts use a Rate Variable parameter to establish the standard rate, date the rate begins, description of the rate, and the rate for low income tenants. These variables are established on the Rate Variables tile of the Metered Utilities Plus meter type. For more information refer to, Set Up MU-Plus Rate Variables .

 Reserved Variables

 Additionally, reserved variables can be used with this function. Reserved variables are predetermined variables which pull specific information. When using reserved variables, they should not be contained in quotes.

 The following variables can be used as values:

 Variables
 Description

BL (Base Line)

 The fixed Base Line , which is the allotted amount the tenant can use for the specified utility. This variable should not be used with rate blends.

BR
(Base Rate)

 The fixed Base Rate , which is the standard rate for billing the tenant for their consumption of the utility. This variable should not be used with rate blends.

 C (Consumption)

 The total Consumption of the utility based on the meter readings.

CR
(Current Reading)

 The meter's total units from the Current Reading .

 CRD (Current Reading Date)

 The date of the current meter reading.

Days

 The number of days in the billing cycle from the Prior Reading Date (PRD) to the Current Reading Date (CRD) .

 Low

 This variable returns a True or False value. The value is True if the Rate Class (RC) is Low Income (L) , and False if it is not.

 Med

 This variable returns a True or False value. The value is True if the Rate Class Code (RCC) is Medical (M) , and False if it is not.

Other, Other1, Other2, etc…

 Like Metered Utilities user defined fields, these variables can represent any value you define. To define a custom variable, enter the name and value in the Calculations section.

POST

 The final calculation of the amount of the tenant's utility charge to be posted based on consumption.

PR
(Previous Reading)

 The meter's total units from the Previous Reading .

 PRD
(Previous Reading Date)

 The date of the previous meter reading.

 RC
(Rate Class)

 This variable indicates whether the Rate Class is Standard (S) or Low Income (L) .

 RCC
(Rate Class Code)

 This variable indicates the Rate Class Code, such as Medical (M) .

 Std
(Standard)

 This variable returns a True or False value. The value is True if the Rate Class (RC) is Standard (S) , and False if it is not.

XR (Excess Rate)

 The fixed Excess Rate , which is the value to be billed if the tenant uses more than the allotted amount established in Base Line (BL) . This variable should not be used with rate blends.

Zone

 Like Metered Utilities user defined fields, this variable can represent any value you define. To define a custom variable, enter the name and value in the Calculations section.
