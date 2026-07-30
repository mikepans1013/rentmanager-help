# Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Count.htm

This function can be used with the CAMExpenseAdjustment and ServiceManager classes. When used with the ServiceManager class, this function displays the number of service issues (both open and closed, by default) linked to the property, tenant, prospect, or unit within a specified date range. A parent class of Tenant, Prospect, Unit, or Property must precede the Service Manager class for this function to return results.

 When used with the CAMExpenseAdjustment class, this function displays the total number of CAM expense adjustments processed for the specified lease within the specified date range (or for all time, by default).

 This function can be utilized by the following classes:

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().Count()]

 Displays information found on the CAM Expense Adjustments page.

 Service Manager

 [ Class(). ServiceManager().Count()]

 Displays information found on the Service Manager Issue details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 The parameters available for this function vary depending on which class the function is used with. The parameters available for each class are as follows:

 Class
 Parameters

 ServiceManager

 [Count( "FromDate" , "ToDate" , "IsClosed" )]

 CAMExpenseAdjustment

 [Count( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine the count. If no date is specified, the function uses the beginning of time.

 [Count("1/1/ 2026 ")]

 Displays the number of issues or CAM expense adjustments dated on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine the count. If no date is specified, the function uses the end of time.

 [Count("","6/1/ 2026 ")]

 Displays the number of issues or CAM expense adjustments dated on or before June 1, 2026 .

 IsClosed

 Specify True to count only closed issues. Specify False to count only open issues. If no parameter is specified, all issues in the date range—both open and closed—are counted.

 More Information

 In addition to True and False , this parameter also accepts the following alternate input options:  T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 [Count("9/1/ 2026 ","","True")]

 Displays the number of issues closed on or after September 1, 2026 .

 [Count("7/1/ 2026 ","10/31/ 2026 ","N")]

 Displays the number of open issues dated from July 1, 2026 to October 31, 2026 .

 GLAccount

 Specify the number of the GL account (e.g., 5501 ) to display the count for only the CAM expense adjustments linked to the account.

 [Count("","","5501")]

 Displays the total number of CAM expense adjustments linked to the GL account number 5501 (e.g., 5101 - CAM Repairs & Maintenance ) for the specified tenant lease.

 AdjustmentType

 Specify One-time to examine only one-time CAM expense adjustments. Specify Amortization to examine only amortization CAM expense adjustments. If no parameter is specified, the function displays the total count of all expense adjustments for the specified tenant lease. When using this parameter, each period of an Amortization type expense adjustment is included individually in the count. For instance, if the tenant has two amortized adjustments with three periods each, the count function returns 6 .

 [Count("","","","One-time")]

 Displays the total number of One-time type CAM expense adjustments for the specified tenant lease.

 [Count("","","5501","Amortization")]

 Displays the total number of Amortization type CAM expense adjustments linked to the GL account 5501 for the specified tenant lease.

 Reference

 Specify the system-generated reference number of the CAM expense adjustments to count. Reference numbers can be found in the Ref#  column on the CAM Expense Adjustments page. Because Amortization type expense adjustments have multiple periods, specifying the reference number of the adjustment displays the total number of periods. All One-time type adjustments display 1 in output.

 [Count("","","","","5")]

 Displays the total number of periods in an adjustment with the system-generated reference number of 5 for the specified tenant lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().Count("","8/15/ 2026 ")]

 Displays the number of issues opened for the tenant on or before August 15, 2026 .

 [Unit().ServiceManager().Count("6/1/ 2026 ","6/30/ 2026 ")]

 Displays the number of issues opened for the unit in the month of June in year 2026 .

 [Tenant().Lease().CAMExpenseAdjustment().Count("1/1/ 2026 ", "12/31/ 2026 ", "5501", "Amortization")]

 Displays the total number of periods in all amortization CAM expense adjustments linked to the GL account 5501 for the specified tenant in the year 2026 .

 [Tenant().Lease().CAMExpenseAdjustment().Count("1/1/ 2026 ","12/31/ 2026 ","","","15")]

 Displays the total number of expense adjustments with the Ref#   15 in the year 2026 . For example, Amortization type expense adjustments have multiple periods, so if adjustment 15 is amortized, this script displays the total number of periods that are posted for the year 2026 .

 [Tenant().Lease().CAMExpenseAdjustment().Count("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the sum total of all one-time expense adjustments and amortization periods for the first-listed lease in the year 2026 .
