# Summary Rent Roll and Delinquency

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Reports-Summary-Rent-Roll-Delinquency.htm

Both the Summary Rent Roll and Delinquency reports provide property balances, but each examines transactions from different sources and calculates balances differently. The Summary Rent Roll focuses on transaction activity that occurred over a specified period of time and breaks down the different types of transactions, while the Delinquency report provides information on open charges that are late as of a specified date.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Summary Rent Roll report tracks transaction activity on tenant accounts over a specified period of time. You can examine held security deposits for each of these tenants, as well as vacancy loss and loss to lease totals. This report also provides a breakdown of totals for rent and non-rent charges, credits, prior balances, charges, payments, and credit and debit balances and is a good report to provide to your bank when they request to view your income.

 The Delinquency report displays delinquent charges as of a specified date, as well as a balance of delinquent charges by property, the grand total for all properties, per-day late fee totals, and interest loan charges. The results can include any information, even if it is dated prior to the general ledger (GL) start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Summary Rent Roll and Delinquency .

 For more information, refer to Control User Access .

 When run with comparable report options, the Summary Rent Roll report's Overall Balances field for a property matches the Delinquency report's Amount Delinquent field for that same property.

 Report Options

 To populate Summary Rent Roll and Delinquency reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Summary Rent Roll
 Delinquency
 Description

 Properties/Owners to Include

 Properties to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Summary Rent Roll , then on the Delinquency report, select the properties of those selected owners.

 Date Range

 As of Date

 On the Summary Rent Roll , set the From field as the date on which you wish to begin examining transactions. For the To field and the Delinquency report's As of Date field, select the same date.

 n/a

 Charges to Include

 All charge types in the list must be selected. The Summary Rent Roll includes all charges by default.

 n/a

 Include accounts with a balance greater than or equal to

 This option must be unchecked because the Summary Rent Roll does not provide an option to differentiate between delinquent amounts.

 n/a

 Tenants to Include

 The All option must be selected.

 n/a

 Include Prospects

 This option must be unchecked because the Summary Rent Roll does not include prospects.

 Report Method

 n/a

 The Activity and prior balances option must be selected.

 More Information

 Selecting either of the other options could cause discrepancies between the reports because the Summary Rent Roll examines all tenants that occupied a unit at any point during the reporting period, while the Delinquency report examines only tenants that occupied the unit as of the report date. Additionally, the Delinquency report includes all tenants with an account balance, regardless of whether or not there was transaction activity during the reporting period.

 Troubleshooting Total Balances that are Different

 While running the reports with the suggested report options above allows the reports to examine the same data, there are other factors that can cause discrepancies between these value totals.

 More Information

 When troubleshooting, it is recommended that for the Delinquency report, you set the Detail or Summary report option to Detail to see each individual charge and credit for each tenant. This makes it easier to pinpoint specific matching transaction amounts between the two reports.

 Report Dates

 When generating the Summary Rent Roll report, generally you can set the From date to the beginning of the current month or the beginning of the current year. If this does not result in matching data, try setting the From date to your database's GL start date. This date can be located in your system preferences in the G/L Start Date field. For more information, refer to General Ledger Settings (System Preferences) .

 Unapplied Credits

 The Summary Rent Roll includes tenants and prospects with debit balances, which includes credits (negative charges), whether they have been applied to charges or not. However, the Delinquency report does not include unapplied credits. Once the credit is applied to a charge, the amounts should match. For more information on how to apply a credit to open charges, refer to Apply Credits to Open Charges .

 More Information

 You can run the Credit Detail report to help you track down tenants at the property that have open, unapplied credits on their account. For more information, refer to Credit Detail (Report) .

 Unallocated Payments

 If you have a tenant or prospect that has a payment applied to their account but it is not allocated to any charges (such as a prepayment or a payment that is preallocated to specific charge types), this can cause a discrepancy in the total amounts because the Delinquency report includes unallocated payments, but the Summary Rent Roll does not. Once the payment is allocated, the amounts should match.
