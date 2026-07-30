# Column Value Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Column-Value.htm

This System class function allows columns in Report Writer to reference the results of another previously calculated column in the same report, allowing you to compare the columns against each other.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.ColumnValue()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 More Information

 It is required that you specify either the ColumnName parameter or the ColumnIndex parameter for the ColumnValue function. The following examples show the options you have when specifying parameters for this function:

 [ColumnValue( "ColumnName" , "ColumnIndex" )]

 [ColumnValue( "ColumnName" , "ColumnIndex" )]

 ColumnName

 Specify the name of the column for which to display previously calculated values.

 [ColumnValue("AccountBalance")]

 This populates the column with the values of the Account Balance column.

 ColumnIndex

 Specify the number of the column (with the first column having an index of 1 , reading from top to bottom on the Report Writer window) for which to display previously calculated values.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 [ColumnValue("","1")]

 This populates the column with the values of the first column.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.ColumnValue("TotalPayments")]

 Displays the values of the column named Total Payments in the specified column.

 [System.ColumnValue("","2")]

 Displays the values of the second column in the specified column.

 [System.ColumnValue("ColumnA") / ColumnValue("ColumnB") * 100]

 Divides the total of Column A by the total of Column B, and multiplies the result by 100.
