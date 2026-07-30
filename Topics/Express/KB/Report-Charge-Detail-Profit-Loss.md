# Charge Detail and Profit & Loss

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Charge-Detail-Profit-Loss.htm

Both the Charge Detail and Profit & Loss reports generate lists of charges and income across a date range, but each examines transactions from different sources and calculates balances differently. The Charge Detail focuses on transaction activity specifically associated with tenants and prospects, while the Profit & Loss report provides income and expense information from general ledger (GL) accounts.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Charge Detail report displays tenants and prospects with posted charges across a selected date range, along with any payments made or credits applied toward those charges.

 The Profit & Loss report displays income and expense GL accounts for selected properties or owners across a date range. This profit and loss report also displays the net income to track the financial impact of the selected properties.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charge Detail and Profit & Loss .

 For more information, refer to Control User Access .

 When run with comparable report options, the Charge Detail report's Amount Charged column can be compared to the Profit & Loss report's Income field. However, as these reports do not always include identical data, these values may differ even with those report options selected.

 Report Options

 To populate Charge Detail and Profit & Loss reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Charge Detail
 Profit & Loss
 Description

 Charges to Include

 n/a

 All charge types in the list must be selected. The Profit & Loss report includes all charges by default.

 Date Range

 Date Range

 The same date range needs to be used for both reports.

 Properties to Include

 Properties/Owners to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Profit & Loss report, then on the Charge Detail report, select the properties of those selected owners.

 Tenants to Include

 n/a

 The All option must be selected. The Profit & Loss report includes all tenants by default.

 n/a

 Cash or Accrual

 The Accrual option must be selected. The Charge Detail report includes all transactions regardless of whether they are deposited.

 Troubleshooting Charged Amounts That Are Different

 While running the reports with the suggested report options above allows the reports to examine data from the same tenants, there are other factors that can cause discrepancies between these value totals.

 Non-Tenant Transactions

 The Profit & Loss report includes income from all sources, while the Charge Detail report displays only tenant and prospect transactions. These transactions, such as journal entries, checks, and other income on deposits, can result in the Profit & Loss report's Income field value being greater than the Charge Detail report's Amount Charged column value.

 To identify any transactions that are not associated with tenants or prospects, you can generate a General Ledger directly from the Profit & Loss report by clicking the dollar amount in the far right column for the general ledger (GL) account. For more information, refer to General Ledger (Report) .

 Credits Linked to Income

 The Profit & Loss report includes income and expenses related to tenant or prospect credits, while the Charge Detail report displays only tenant and prospect payments made without credits. These credits can result in the Profit & Loss report's Income field value being greater than the Charge Detail report's Amount Charged column value.

 To identify any transactions paid by tenant or prospect credits, you can generate a Credit Detail report with the same properties, date range, and tenant inclusion settings. For more information, refer to Credit Detail (Report) .
