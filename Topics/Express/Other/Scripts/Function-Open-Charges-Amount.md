# Open Charges Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Open-Charges-Amount.htm

This function displays the total amount of open (unpaid) charges of selected charge types within a specified date range.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().OpenChargesAmount()]

 Displays information found on the tenant's View Transactions page for the specified lease.

 Owner

 [Owner().OpenChargesAmount()]

 Displays information found on the owner's Management Company page.

 PrimaryOwner

 [ Class(). PrimaryOwner.OpenChargesAmount()]

 Displays information found on the owner's Management Company page.

 Tenant

 [Tenant().OpenChargesAmount()]

 Displays information found on the tenant's View Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager will use default values.

 [OpenChargesAmount( "ChargeTypes" , "FromDate" , "ToDate" , "AsOfDate" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [OpenChargesAmount("RC,LC")]

 Displays the total charge amounts for unpaid Rent Charge (RC) plus Late Charge (LC) charge types.

 FromDate

 Specify the date on or after which to examine charges. If no date is specified, the function uses the beginning of time.

 [OpenChargesAmount("","1/1/ 2026 ")]

 Displays the total charge amount for all unpaid charge types posted on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine charges. If no date is specified, the function uses the end of time.

 [OpenChargesAmount("","1/1/ 2026 ","6/30/ 2026 ")]

 Displays the total charge amount for all unpaid charge types posted from January 1, 2026 , to June 30, 2026 .

 AsOfDate

 Specify the date for which to retrieve the unpaid amount of the open charges. If a charge has been paid, even in the future, only the remaining balance displays as open. If no date is specified, the function uses the current date.

 [OpenChargesAmount("","1/1/ 2026 ","6/30/ 2026 ","3/31/ 2026 ")]

 Examines the charge amount for all charge types posted from January 1, 2026 , to June 30, 2026 , and displays only the amount that was unpaid as of March 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().OpenChargesAmount()]

 Displays the total of all open charges on the current tenant's account.

 [Tenant().Lease(1).OpenChargesAmount()]

 Displays the total of all open charges associated with the first additional lease listed for the current tenant.

 [Owner().OpenChargesAmount("MGTFEE")]

 Displays the total of all unpaid Management Fee (MGTFEE) charges associated with the current owner.

 [Tenant().OpenChargesAmount("","1/1/ 2026 ","12/31/ 2026 ")]

 Displays the total of all open charges that were posted in 2026 for the current tenant.

 [Tenant().Lease().OpenChargesAmount("RC","1/1/ 2026 ","12/31/ 2026 ","6/30/ 2026 ")]

 Examines the unpaid balance of all Rent Charge charges posted in the year 2026 but displays only the amount that was unpaid as of June 30, 2026 .

 [$X=Left(OldestActiveChargeAge(), Length(OldestActiveChargeAge())-5);
$Y=DateAdd("d", -1*$X, Date);
$OLDEST=$Y;
$COUNT=System.DateDifference("m", System.FirstDayOfMonth($OLDEST), System.FirstDayOfMonth(Date))+1;
$i=0;
While($i<=$COUNT,
$MONTH=DateAdd("m", $i, $OLDEST);
$FMONTH=Format(DateAdd("m", $i, $OLDEST), "mmmm");
$VALUE=OpenChargesAmount("",System.FirstDayOfMonth($MONTH),System.LastDayOfMonth($MONTH));
echo($FMONTH & Tab & $VALUE & Linefeed);
$i=$i+1)]

 Displays open charges by month. For more information on While loops, refer to While Function (Script) .
