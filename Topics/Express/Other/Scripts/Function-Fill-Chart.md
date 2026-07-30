# Fill Chart Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Fill-Chart.htm

This function internally generates a collection of unit-specific General Ledger (GL) data related to the selected property or unit.

 More Information

 This function is used in conjunction with the ChartValue function. This function must be run first in your scripting to generate the collection of financial data as defined by your parameters (e.g., date range and accounting basis), but does not display this data in the output. Then the ChartValue script is used to retrieve selected values from that data and determines what output to display.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job

 [Job().FillChart()]

 Displays information from the Job General Ledger report.

 Property

 [Property().FillChart()]

 Displays information from the General Ledger report for the property.

 Unit

 [Unit().FillChart()]

 Displays information from the Unit General Ledger report for the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [FillChart( "FromDate" , "ToDate" , "Basis" , "RollRE" , "CollapseParents" , "ExcludePeriodAdjustments" )]

 FromDate

 Specify the beginning date in a range for which the GL data is retrieved. If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preferences.

 [FillChart("1/1/ 2026 ")]

 Collects financial data from GL account transactions posted on or after January 1, 2026 .

 ToDate

 Specify the ending date in a range for which the GL data is retrieved. If no date is specified, the function uses today's date.

 [FillChart("","7/31/ 2026 ")]

 Collects financial data from GL account transactions posted on or before July 31, 2026 .

 Basis

 Specify which accounting basis to use to populate chart data. Basis options are Cash or Accrual . If no basis parameter is specified, the function defaults to Accrual .

 [FillChart("","","Cash")]

 Collects financial data from GL account transactions on a cash basis.

 RollRE

 Specify how the Roll ‘Net Income’ from prior fiscal years to ‘Retained Earnings’ on the balance sheet option in the General Ledger Settings section of system preferences is to be enforced. If no RollRE parameter is specified, the function defaults to the current setting in system preferences.

 True enables the rollover regardless of the system preference setting and False disables the rollover regardless of the system preference setting.

 [FillChart("","","","True")]

 Enables the rollover of net income into retained earnings regardless of how the System Preference was set.

 CollapseParents

 Specify if the parent GL accounts should be collapsed, which rolls the values of the subaccounts into the parent accounts and hides the subaccounts and their values. If no parameter is specified, the function defaults to False .

 True rolls subaccount values into the parent account and hides the subaccounts. False does not roll the subaccount values into the parent account.

 [FillChart("","","","","True")]

 This includes the subaccount values with the parent account and hides the subaccounts for General Ledger data collected.

 ExcludePeriodAdjustments

 Specify if the journal entries for which Period Adjustment has been checked is excluded from the financial data. If no parameter is specified, the function defaults to False .

 True excludes from the financial data any journal entries for which Period Adjustment has been checked. False includes in the financial data any journal entries for which Period Adjustment has been checked.

 [FillChart("","","","","","True")]

 Excludes from the collected financial data any journal entries for which Period Adjustment has been checked.

 Script Examples

 The following scripts show various ways the function can be used. These examples do not generate output, but collect data for the ChartValue function.

 [Tenant().Lease().Unit().FillChart()]

 Generates a collection of data with accrual transactions from the GL start date to the current date for the unit of the tenant's first-listed lease. GL subaccount values are not rolled up into parent accounts, and adjusted journal entries are included.

 [Unit().FillChart("01/01/ 2026 ","12/31/ 2026 ","Cash")]

 Generates a collection of data with cash basis transactions from January 1, 2026 through December 31, 2026 for the selected unit. GL subaccount values are not rolled up into parent accounts, and adjusted journal entries are included.

 [Property().FillChart("01/01/ 2026 ","12/31/ 2026 ","Cash","","","True")]

 Generates a collection of data with cash basis transactions from January 1, 2026 through December 31, 2026 for the selected property. GL subaccount values are not rolled up into parent accounts, and adjusted journal entries are excluded.
