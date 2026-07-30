# Aged Receivables and Balance Sheet

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Aged-Receivables-Balance-Sheet.htm

Both the Aged Receivables and Balance Sheet reports provide the balance of accounts receivables; however each includes transactions from different sources and limits transactions based on their dates.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Aged Receivables report displays open charge information for tenants, prospects, and owners as of the selected date. The report categorizes open charges based on whether they are 0–30 days, 31–60, 61–90, or 90+ days past their creation date to help you track delinquency.

 The Balance Sheet provides a snapshot of your management company's financials at a specific point of time. It's a life-to-date statement. Additionally, it satisfies the fundamental accounting equation:  Assets=Liabilities + Equities . The Balance Sheet provides valuable information on your company's overall financial position (i.e., its longevity and liquidity).

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Balance Sheet and Aged Receivables .

 For more information, refer to Control User Access .

 When run with comparable report options, the Aged Receivable 's Total column matches the Balance Sheet ’s Accounts Receivable value.

 Report Options

 To populate Aged Receivables and Balance Sheet reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Aged Receivables
 Balance Sheet
 Description

 Properties to Include

 Properties/Owners to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Balance Sheet , then on the Aged Receivables report, select the properties of those selected owners.

 As of Date

 As of Date

 The same date must be selected for both reports.

 Charges to Include

 n/a

 Select all charge types. The Balance Sheet report automatically includes all charges.

 Accounts to Include

 n/a

 Select All accounts. The Balance Sheet report automatically includes all accounts.

 Show Credits

 n/a

 Check Show Credits . The Balance Sheet report automatically includes all credits.

 n/a

 Cash or Accrual

 Select Accrual for the accounting method option. The Aged Receivables report automatically populates on an accrual basis.

 n/a

 Show whole dollar only

 Uncheck this whole dollar option. The Aged Receivables report populates with dollars and cents.

 Troubleshooting Discrepancies

 While running the reports with the suggested report options above allows the reports to examine the same data, there are other factors that can cause discrepancies between these value totals.

 Prospect Balances

 The Balance Sheet automatically includes prospect transactions by default. The Aged Receivables report examines only prospect transactions if the option to Include Prospects is enabled. Without the option checked, the two reports are not looking at the same data and therefore may show discrepancies.

 Transactions Dated Prior to the General Ledger (GL) Start Date

 The Aged Receivables report includes transactions dated before the GL start date, while the Balance Sheet does not. To locate these transactions, run or refresh the Aged Receivables report and select the As of Date one day prior to the GL start date. For example if the GL start date is 02/01/ 2026 , select the As of Date   01/31/ 2026 . Then, click on the tenant's name to drill down to accounts with a balance prior to the GL start date.

 If you're unsure of your GL start date, you can locate it in system preferences. For more information, refer to General Ledger Settings (System Preferences) .

 Transactions from Sources Other than a Tenant's Account

 The Aged Receivables report includes transactions entered on tenant accounts, but not elsewhere in Rent Manager . The Balance Sheet includes transactions from any source (such as a journal entry) where an asset, liability, or equity chart account was selected.

 To locate these transactions from the Balance Sheet , click on the chart account number value to drill down to the General Ledger and look for transactions from sources other than tenant transactions (e.g., CREDIT , JOURNL , CC CHG , BNKDEP ). To check for other discrepancies, run the Balance Sheet report using the Cash Basis report option. If the aged receivable displays on the Balance Sheet after running it on a cash basis, there was likely a journal entry created for that GL account.
