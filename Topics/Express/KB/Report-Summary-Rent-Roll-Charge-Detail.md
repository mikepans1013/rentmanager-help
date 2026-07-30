# Summary Rent Roll and Charge Detail

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Summary-Rent-Roll-Charge-Detail.htm

The Summary Rent Roll and Charge Detail reports provide data about tenant charges and payments. The Summary Rent Roll focuses on transaction activity that occurred over a specified period of time and breaks down the different types of transactions, while the Charge Detail report focuses on the total amount the tenant was charged and how much they paid by listing each charge individually.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Summary Rent Roll report tracks transaction activity on tenant accounts over a specified period of time. You can examine held security deposits for each of these tenants as well as vacancy loss and loss to lease totals. The Summary Rent Roll also provides a breakdown of totals for rent and non-rent charges, credits, prior balances, payments, and credit and debit balances and is a good report to provide to your bank when they request to view your income. Additionally, the end of this report provides summary totals for the selected properties.

 The Charge Detail report displays tenants and prospects with posted charges across a selected date range, along with any payments made or credits applied toward those charges.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Summary Rent Roll and Charge Detail .

 For more information, refer to Control User Access .

 When run with comparable report options, the Summary Rent Roll report's Total Charged column can be compared to the Charge Detail report's Amount Charged field. However, as these reports do not always include identical data, these values may differ even with those report options selected.

 Report Options

 To populate Summary Rent Roll and Charge Detail reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Summary Rent Roll
 Charge Detail
 Description

 Date Range

 Date Range

 The same date range must be selected for both reports.

 n/a

 Charges to Include

 All charge types in the list must be selected. The Summary Rent Roll includes all charges by default.

 Properties/Owners to Include

 Properties to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Summary Rent Roll , then on the Charge Detail report, select the properties of those selected owners.

 Report Method

 Tenants to Include

 These options depend on the tenants whose data you want to view. For example, if you wanted to view only current tenant charges, you would generate the Summary Rent Roll report with the Current customers only option selected, then, for the Charge Detail report, select only Current from the drop-down list.

 Troubleshooting Charged Amounts That Are Different

 While running the reports with the suggested report options above allows the reports to examine data from the same tenants, there are other factors that can cause discrepancies between these value totals.

 Tenant Credits

 The Summary Rent Roll report includes tenant credit amounts in one of two columns. If the credit was added for a non-rent charge type, the credit amount displays in the Credit Balances column. If the credit was added for a rent charge type, the credit amount is subtracted from the Rent Charges and Total Charged column values.

 However, the Charge Detail report does not include tenant credits, which may result in the Amount Charged value being greater than the Summary Rent Roll report's Total Charged column.

 Prospect Charges

 The Summary Rent Roll examines only tenant charge data, but the Charge Detail report can be generated with prospect data. If, in the Tenants to Include drop-down list, you selected Future , prospect charges are included in the Amount Charged value.

 NSF Adjustments

 The Summary Rent Roll report includes non-sufficient funds (NSF) adjustment amounts made using the NSFADJ charge type in the Misc Charges column, but the Charge Detail report does not include NSF adjustment amounts.
