# System Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-System.htm

This class is at the highest level of classes and can be followed by functions which retrieve system-level data. Additionally, system-level scripting functions can be used to make calculations.

 Example

 [System.Ask("In what city were you born?")]

 Result

 Prompts the user to type the city where they were born. The result displays.

 Example

 [System.Date]

 Result

 Displays today's date in system default m/d/yyyy format.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Current User

 [System.CurrentUser. Function ]

 This class retrieves data about the user currently logged in to Rent Manager .

 System

 [System. Function ]

 This class retrieves system-level data.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Abs

 [System.Abs()]

 Displays the absolute value of the given numeric value or the value returned by another script function. If a text value is used, the function returns a value of 0 .

 Ask

 [System.Ask()]

 Asks the Rent Manager user a question and collects the response. In most cases, the user response is either displayed or stored in a variable.

 Closing Square Bracket

 [System.ClosingSquareBracket]

 Inserts a new closing square bracket ] in the results at the location of the statement. This is necessary when combining text with script since a normal closing square bracket is interpreted as ending a script statement.

 Column Value

 [System.ColumnValue()]

 Allows columns in Report Writer to reference the results of another, previously-calculated column. This function works only in Report Writer (RW) .

 Company Code

 [System.CompanyCode]

 Returns the Company Code for your database. Your company code is provided to your company by LCS as an identifier for your database. This code can be used to access your database information from our web products such as Tenant Web Access (TWA) , Owner Web Access (OWA) , rmAppSuite Pro , and rmResident .

 Compare

 [System.Compare()]

 Compares the values of two text strings. It returns 0 if the strings are equal, -1 if "String1" < "String2" alphabetically, and 1 if "String1" > "String2" alphabetically. The case of the characters in the strings is considered in such a way that A-Z > a-z.

 Current Location

 [System.CurrentLocation]

 Returns the name of the Rent Manager location in which the tenant's data is stored.

 Current Month

 [System.CurrentMonth]

 Displays the date range of the current month (for example, 05/01/ 2026 - 05/31/ 2026 for May).

 Current Quarter

 [System.CurrentQuarter]

 Displays the date range of the current quarter (for example, 04/01/ 2026 - 06/30/ 2026 for Q2).

 Current Year

 [System.CurrentYear]

 Displays the date range of the current year (for example, 01/01/ 2026 - 12/31/ 2026 ).

 Date

 [System.Date()]

 Displays the current system date in the specified format.

 Date Add

 [System.DateAdd()]

 Adjusts a date by adding or subtracting a specified interval of time.

 Date Compare

 [System.DateCompare()]

 Compares two dates. It returns 0 if the dates are equal, -1 if "Date1" < "Date2", and 1 if "Date1" > "Date2."

 Date Difference

 [System.DateDifference()]

 Calculates the difference between two specified dates as measured in the specified period. The result is the number of periods that "Date2" is greater than or less than "Date1."

 The return value is rounded down to the nearest whole number, so fractional differences are not represented.

 Day

 [System.Day()]

 Returns the day component of a date value.

 Day of Week

 [System.DayOfWeek()]

 Given a value from 1 to 7, this function returns the day of the week, where 1 = Sunday. Values outside this range return Invalid .

 Echo

 [System.Echo()]

 Prints a literal value, results of a script function, or a variable value.

 Equal

 [System.Equal()]

 Compares the values of two text strings and returns 1 if they match and 0 if they don't match. The case of alphabetic characters must be the same to return a match.

 First Day of Month

 [System.FirstDayOfMonth()]

 Returns the first date in a month of the specified date. If no date parameter is specified, it returns the first date of the current month.

 First Day of Year

 [System.FirstDayOfYear()]

 Returns the first date in the year of the specified date. If no date parameter is specified, it returns the first date of the current year.

 Format

 [System.Format()]

 Adjusts the formatting of a date, time, or numeric value.

 If

 [System.If()]

 Tests a "Condition" parameter and then executes one of two specified statements. If the "Condition" is true, the code defined for "TruePart" is executed. Otherwise, the code defined for "FalsePart" is executed.

 Image

 [System.Image()]

 Embeds the specified image file. A file path is used to specify the image file.

 Index Of

 [System.IndexOf()]

 Finds the first occurrence of "Value2" within "Value1" and returns the one-based index. If "Value2" is not found, it returns a value of 0 .

 Last Day Of The Month

 [System.LastDayOfMonth()]

 Returns the last date in the month of the specified date. If no date parameter is specified, it returns the last date of the current month.

 Last Day Of The Year

 [System.LastDayOfYear()]

 Returns the last date in the year of the specified date. If no date parameter is specified, it returns the last date of the current year.

 Last Month

 [System.LastMonth]

 Displays the date range of the previous month (for example, 04/01/ 2026 - 04/30/ 2026 if today's month is May).

 Last Quarter

 [System.LastQuarter]

 Displays the date range of the previous quarter (for example, 01/01/ 2026 - 03/31/ 2026 if today's date is in Q2).

 Last Year

 [System.LastYear]

 Displays the date range of the previous year (for example, 01/01/ 2026 - 03/31/ 2026 ).

 Left

 [System.Left()]

 Returns a specified number of characters from the left side of a string.

 Left Trim

 [System.LeftTrim()]

 Returns a text sting with the white space removed from the left of the first non-whitespace character.

 Length

 [System.Length()]

 Returns the number of characters in a text string.

 Line Feed

 [System.LineFeed]

 Inserts a new line in the results at the location of the statement. In many cases, LineFeed is used to conjunction with another scripting function.

 Lower Case

 [System.LowerCase()]

 Returns a text string converted to lower case.

 Maximum

 [System.Maximum()]

 Compares two numeric values and returns the larger value. If neither of the values are numeric, it returns 0 .

 Mid

 [System.Mid()]

 Returns a portion of a given value starting at the specified character and running for the specified number of characters.

 Minimum

 [System.Minimum()]

 Compares two numeric values and returns the smaller value. If neither of the values are numeric, it returns 0 .

 Month

 [System.Month()]

 Returns the month component of a date value. A non-date returns a value of 1 .

 Next Month

 [System.NextMonth]

 Displays the date range of the upcoming month (for example, 01/01/ 2026 - 01/31/ 2026 ).

 Next Quarter

 [System.NextQuarter]

 Displays the date range of the upcoming quarter (for example, 07/01/ 2026 - 09/30/ 2026 if today's date is in Q2).

 Next Year

 [System.NextYear]

 Displays the date range of the upcoming year (for example, 01/01/ 2026 - 12/31/ 2026 ).

 Number As Text

 [System.NumberAsText()]

 Converts the specified numeric value into written text including decimals represented as xx/100 . Non-numeric values return a value of ZERO AND 00/100 .

 Number Suffix

 [System.NumberSuffix()]

 Returns the correct text suffix for a numeric value. Non-numeric values return nothing.

 Opening Square Bracket

 [System.OpeningSquareBracket]

 Inserts a new opening square bracket [ in the results at the location of the statement. This is necessary when combining text with script since a normal opening square bracket is interpreted as starting a script statement.

 Page Break

 [System.PageBreak]

 Inserts a page break in the results. Results occurring after the page break appear on a new page. In many cases, PageBreak is used in conjunction with another scripting function.

 Posted Charges

 [System.PostedCharges()]

 Calculates the total of all recurring charges posted as of today. This function applies only to calculating recurring charge amounts.

 More Information

 This function is a part of the System class even though this function does not display with other System functions in letter templates or Report Writer .

 Right

 [System.Right()]

 Returns a specified number of characters from the right side of a string.

 Right Trim

 [System.RightTrim()]

 Returns a text string with the white space removed from the right of the first non-whitespace character.

 Round

 [System.Round()]

 Processes a numeric value and rounds it to a specified level of precision. Non-numeric values return a value of 0 .

 Set Script Invalid

 [System.SetScriptInvalid()]

 Controls the output of a letter template in which it displays. If the value parameter is set to "True", the letter is not be output. This applies when the letter is output as an individual document or as part of a Document Packet or letter batch.

 Tab

 [System.Tab]

 Inserts a tab in the results at the location of the statement.

 Time

 [System.Time()]

 Displays the current system time in the specified format.

 Trim

 [System.Trim()]

 Returns a text string with the white space removed from the left of the first non-whitespace character and the white space removed from the right of the last non-whitespace character.

 Upper Case

 [System.UpperCase()]

 Returns a text string converted to upper case.

 User Defined Field

 [System.UserDefinedField()]

 Displays the value system-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [System.UserDefinedField("Accounting Basis")]

 Displays the value for the Accounting Basis user defined field.

 User Full Name

 [System.UserFullName]

 Returns the first name and last name of the specified user.

 User Name

 [System.UserName]

 Displays the username of the specified user.

 While

 [System.While()]

 Tests a specified condition and executes a script statement repeatedly in a loop while the condition evaluates as true (or <>0). As soon as the specified condition evaluates as 0 or false, the statement is no longer executed.

 Year

 [System.Year()]

 Returns the year component of a date value. A non-date returns a value of 1 .
