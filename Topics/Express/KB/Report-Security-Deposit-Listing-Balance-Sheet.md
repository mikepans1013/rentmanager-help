# Security Deposit Listing and Balance Sheet

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Security-Deposit-Listing-Balance-Sheet.htm

Both the Security Deposit Listing and the Balance Sheet reports provide the balance of security deposits held, but each examines transactions from different sources and limits transactions based on their dates.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Security Deposit Listing report displays security deposit amounts for tenant and/or prospect accounts of the selected properties as of the report date, as well as information about tenant move-in and move-out dates. Additionally, the report includes the total amount of held security deposits for each tenant and prospect, if applicable, as well as the total deposits charged, paid, and refunded to tenants as of the report date.

 The Balance Sheet provides a snapshot of your management company's financials as of a specified date. Additionally, it satisfies the fundamental accounting equation:  Assets=Liabilities + Equities . The Balance Sheet provides valuable information on your company's overall financial position (i.e., its longevity and liquidity).

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Security Deposit Listing and Balance Sheet .

 For more information, refer to Control User Access .

 When run with comparable report options, the Security Deposit Listing report's Held column matches the Balance Sheet report's Security Deposits field.

 Report Options

 To populate Security Deposit Listing and Balance Sheet reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Security Deposit Listing
 Balance Sheet
 Description

 Properties to Include

 Properties/Owners to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Balance Sheet , then on the Security Deposit Listing report, select the properties of those selected owners.

 As of Date

 As of Date

 The same date must be selected for both reports.

 Tenants to Include

 n/a

 Select All accounts. The Balance Sheet report automatically includes all tenant accounts.

 Security Deposit Types to Include

 n/a

 If you have multiple security deposit types, select the desired types to include on the report. If your database has only one security deposit type, this option is unavailable.

 Show Prospects

 n/a

 Check Show Prospects . The Balance Sheet report automatically includes all prospects.

 n/a

 Cash or Accrual

 Select Cash as the accounting method. The Security Deposit Listing report automatically populates on a cash basis.

 n/a

 Show whole dollar only

 Uncheck this whole dollar option. The Security Deposit Listing report does not populate with whole dollars.

 Troubleshooting Discrepancies

 While running the reports with the suggested report options above allows the reports to examine the same data, there are other factors that can cause discrepancies between these value totals.

 Chart Accounts Linked to Security Deposit Charges

 In Rent Manager , each charge type is linked to one general ledger (GL) account. For example, a security deposit charge type DP could be linked to the chart account 2101 Security Deposits . However, charge types may be incorrectly linked to your security deposit chart account, or your security deposit charge type(s) may be linked to the wrong chart account. Either possibility can result in discrepancies between the Security Deposit Listing and the Balance Sheet .

 To verify that charge types are connected to the correct GL account, run the Charge Type Links report. In the report, search for the chart account you are examining on the Balance Sheet (e.g., 2101 Security Deposits ). The charge types linked to the account are listed beneath it. Review these and confirm that each charge type is appropriate for the account. If a linked charge type does not look appropriate for this account (e.g., your application fee charge type APPFEE was mistakenly linked to the security deposit account), activity associated with that charge type may be causing the discrepancy.

 If you do not see one of your designated security deposit charge types listed, search for that type and determine if it is linked to the wrong chart account. For example, if the DP charge type was accidentally linked to 4101 Rental Income instead of 2101 Security Deposits , deposits with that charge type would display as expected on the Security Deposit Listing , but the amount would be recorded in the wrong chart account on the Balance Sheet .

 Security Deposits Dated Prior to the General Ledger (GL) Start Date

 Security deposits dated prior to the GL start date should match with the amount displayed on the Beginning Balances page's Security Deposits . To locate these balances, run or refresh the Security Deposit Listing report and select the As of Date one day prior to the GL start date. For example if the GL start date is 02/01/ 2026 , select the As of Date   01/31/ 2026 . Then, run the Balance Sheet and click on the chart account for the security deposits total to drill down to the General Ledger report.

 Review the General Ledger report for the beginning balance transaction type (e.g., BB , BEGBAL ). The sum of the beginning balance transactions should match the Security Deposit Listing 's Held value when run with an As of Date one day prior to the GL start date.

 If you're unsure of your GL start date, you can locate it in system preferences. For more information, refer to General Ledger Settings (System Preferences) .

 Transactions from Sources Other than Tenant/Prospect Accounts

 The Security Deposit Listing report includes transactions entered on tenant/prospect accounts, but not elsewhere in Rent Manager . The Balance Sheet includes transactions from any source (such as a journal entry) where an asset, liability or equity chart account was selected.

 To locate these transactions from the Balance Sheet , click on the chart account total to drill down to the General Ledger and look for transactions from sources other than tenant/prospect transactions (e.g., CHECK , JOURNL , CC CHG , BNKDEP ).

 Prepaid Security Deposit Charge and Date Issues

 If a tenant/prospect prepayment was received and a security deposit charge type was selected, the Balance Sheet includes this payment at the time the payment was received. The Security Deposit Listing report includes the payment once it has been allocated to a charge with a security deposit charge type and only if the report date is as of or after the date that charge is posted.

 For example, consider a scenario where a prepayment for a security deposit is received on 10/31/ 2026 and the security deposit charge is posted on 11/1/ 2026 . If the Security Deposit Listing is run as of 10/31/ 2026 , it does not record the payment or charge. If it is run as of 11/1/ 2026 , both are recorded.

 To locate these prepayments, run the Tenant Prepays report with the following report options:

 Report Options
 Description

 Properties to Include

 The same as the Security Deposit Listing report.

 As of Date

 The same as the Security Deposit Listing report.

 Charges to Include

 If available, the same security deposit charge types selected on the Security Deposit Listing report.

 Tenants to Include

 Select the option for All .

 The report populates with tenants/prospects that have prepaid a security deposit charge and the charge has not been posted/dated as of the report date. For more information, refer to Tenant Prepays (Report) .
