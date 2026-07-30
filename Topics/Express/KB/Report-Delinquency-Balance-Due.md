# Delinquency and Balance Due

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Delinquency-Balance-Due.htm

The Delinquency and Balance Due reports provide data about unpaid tenant and prospect charges. The Delinquency report includes an itemized list of charges that are overdue and any late fees associated with those charges, while the Balance Due report lists an account's total unpaid balance on a single line.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Delinquency report displays tenants and prospects with late fee charges posted to their accounts as of the report date as well as a balance of delinquent charges by property, a grand total for all selected properties combined and per-day late fee totals. Though not shown as a separate total, interest loan charges are also included in the total delinquency amount. The results can include any information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date. You can also set up the report to separate delinquent rent charges from non-rent charges.

 The Balance Due report displays the current amount of unpaid tenant, and, optionally, prospect transactions as of the report date. This report displays balance totals for each account, each property, and a total for all properties. You can use this report to quickly review tenants that need to be sent notices for payment or prospects that have not paid their application fees.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Delinquency and Balance Due .

 For more information, refer to Control User Access .

 When run with comparable report options, the Delinquency report's Amount Delinquent field can be compared to the Balance Due report's Balance column. However, as these reports do not always include identical data, these values may differ even with those report options selected.

 Report Options

 To populate Delinquency and Balance Due reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Delinquency
 Balance Due
 Description

 As of Date

 As of Date

 The same date must be selected for both reports.

 Charges to Include

 n/a

 Select all charge types. The Balance Due report automatically includes all charges.

 Include Prospects

 Prospects to Include

 To get matching data on prospect accounts, check Include Prospects on the Delinquency report. On the Balance Due report, in the Prospects to Include drop down list, select All .

 More Information

 Because the Delinquency report automatically includes all prospects when Include Prospects is selected, selecting any option other than All in the Prospects to Include on the Balance Due report can result in discrepancies between the reports.

 Include tenants with a balance greater than or equal to

 Values to Include

 To limit the accounts that display, check this box in the Delinquency report options and enter an amount. To match that selection on the Balance Due , select the >= operator from the drop-down list, then enter the same amount in the Values to Include Amount field.

 Properties to Include

 Properties to Include

 The same properties or property group must be selected for both reports.

 Tenants to Include

 Tenants to Include

 The All option must be selected for both reports.

 Troubleshooting Balances That Are Different

 While running the reports with the suggested report options above allows the reports to examine data from the same tenants, there are other factors that can cause discrepancies between these value totals.

 Accounts with Negative Balances

 The Balance Due report includes tenants with credits (displayed as negative balances) by default, but the Delinquency report includes only tenants with unpaid charges (displayed as positive balances). If the balances on the two reports do not match, adjust the report options to include only accounts with balances greater than zero.

 For example, to include tenants with only positive balances, enter 0.01 in the respective fields on each report (with the >= operator selected on the Balance Due report). As long as the values in the Include tenants with a balance greater than or equal to and the Values to Include Amount report options are the same, the Delinquency report's Amount Delinquent field and the Balance Due report's Balance column match.

 Unapplied Credits

 If a tenant or prospect made a payment or a credit was given towards a charge but that payment was not allocated to the charge, the Delinquency report displays that charge as delinquent while the Balance Due report displays the running balance of the account including the payment made or credit given.

 For example, if a tenant has a $1,500 rent charge and made a $1,500 payment that was not allocated to that rent charge, the Delinquency report displays the tenant with $1,500 in outstanding charges, but the Balance Due report displays the tenant's running balance of $0. If you see an amount that was already paid, drill-down on the tenant or prospect's name and, from the Transactions tile, open the associated charge. If the Payments on Charge section is blank, the payment needs to be allocated to the charge. For more information, refer to Apply Credits to Open Charges .
