# Credit Card Transaction Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Credit-Card-Transaction-Listing.htm

The Credit Card Transaction Listing report displays information on credit card payments made to vendors, as well as any payments you post to the credit card register during the report date range. This report helps you track expenses and payments on credit cards to ensure that the balance is accurate over a period of time.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Credit Card Transaction Listing .

 For more information, refer to Control User Access .

 To view the Credit Card Transaction Listing report, do the following:

 -
 Go to arrow_forward Banking arrow_forward  Payments arrow_forward Credit Card Transaction Listing .
The Reports: Credit Card Transaction Listing page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 When the Owner tab is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Detail or Summary

 This option determines how much information is displayed in the report, organized by credit card.

 Option
 Description

 Detail

 Each credit card transaction, organized by date and vendor display. A line item for each property allocation in the transaction displays below.

 Summary

 Each credit card line item, condensed into a single row for all property allocations display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option becomes available only when the Properties tab is selected. Additionally, when this option is selected, the option to Run Credit Cards separately becomes unavailable.

 Exclude Zero Activity from the Report

 Check to display only credit cards accounts in which there is a transaction with a vendor.

 Run Credit Cards Separately

 Check to produce a separate report for each selected credit card. Otherwise, all transactions are combined into a single report per credit card account.

 This option becomes available when the Properties tab is selected. Additionally, when this option is selected, the option to Run Properties separately becomes unavailable.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Restrict by Owner Contract Dates

 This option becomes available only when the Owners tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the Date Range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data for any future dates within the selected owner or owners' active contract.

For example, if the report is generated for 01/01/ 2026 –12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any future months included in the report date range regardless of owner contracts.

 Vendors to Include

 Check the name of the vendor to include information associated with the vendor in the report results. Optionally, check Inactive Vendors to include vendors that are no longer active.

 Credit Card Accounts

 Select each credit card for which to examine transaction data.

 Sort Options

 Select one of the following options to determine how the report results are organized within each bank or credit card subheading. Banks and credit card subheadings are sorted alphabetically.

 Option
 Description

 Amount

 Transactions are sorted numerically from the greatest amount of money earned to the greatest amount of money spent.

 Credits you receive from vendors for each credit card display first, followed by charges for payments you made to vendors. Transactions of the same amount are further sorted alphabetically by the property Short Name .

 Date

 Transactions are sorted chronologically by date in ascending order (oldest to newest).

 Reference

 Transactions are sorted alphanumerically by Reference # value. Transactions with no Reference # value display first.

 Vendor

 Transactions are sorted alphabetically by vendor name.

 Cleared Options

 Determine whether cleared transactions are shown in the report by selecting one of the options. If neither option is selected, all transactions display in the report results.

 Option
 Description

 Cleared

 Only transactions that were cleared through a credit card reconciliation or, on the Credit Card Register page, have the Cleared column checked.

 Open

 Only transactions that are not cleared through a credit card reconciliation and do not , on the Credit Card Register page, have the Cleared column checked.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the selected Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected Date Range overlap. Filtered results display an asterisk (*) after the date range.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date of the credit card transaction as entered on the Credit Card Transaction page.

 If you selected the Summary report option, the date of the credit card transaction entered on the Credit Card Transaction page for each row.

 Type

 The type of credit card transaction. Any additional rows display the property short name for the property associated with the payment.

 CC CHG displays for credit card charges and credits. JOURNL displays journal entries that involve a credit card. CHECK displays for checks that pay off a credit card expense account.

 If you selected the Summary report option, CC CHG displays for credit card charges and credits. JOURNL displays journal entries that involve a credit card.

 Reference

 The number or phrase entered on the Credit Card Transaction page in the Reference field. Any additional rows display the name of the unit associated with the credit card transaction.

 If you selected the Summary report option below, the number or phrase entered on the Credit Card Transaction page in the Reference field.

 Information

 The name of the vendor associated with each credit card transaction entry and the Comment entered on the Credit Card Transaction page. Any additional rows display the Expense Account selected and the Memo entered for each line item on the Credit Card Transaction page.

 More Information

 If a payment was recorded as a check or a journal, the Memo entered on the Check details page or the Journal details page displays. Additional rows display the Memo entered on each line item.

 If you selected the Summary report option below, the vendor name and Comment entered on Credit Card Transaction page displays for each row. If the payment was processed as a check, each row also display the Memo entered on the check.

 Cleared

 Displays Y for each credit card transaction that have been reconciled or cleared through a credit card reconciliation.

 The column displays only if, in the report options, Summary is selected and Cleared or Open are not selected.

 Credit

 The amount that is credited to you by a vendor for each credit card transaction. The subtotal for all credits displays at the bottom of each credit card subsection.

 Charge

 The amount that you have been charged by a vendor for each credit card transaction. The subtotal for all charges displays at the bottom of each credit card subsection.

 Credit Card Totals

 Below each credit card's subsection, totals for the report results display. The following rows display:

 Row
 Description

 Beginning Balance

 The balance for each credit card on the day prior to the first day of the Date Range .

 Ending Balance

 The balance for each credit card on the last day of the Date Range .

 Activity

 The total amount of credit card charges using the following formula:

 Activity = Charge Total - Credit Total

 Report Totals Subreport

 At the bottom of the Credit Card Transaction Listing report, totals for all the selected credit card accounts display.

 The following rows display in the Report Totals subreport:

 Row
 Description

 Total Charges

 The total charges accrued in the Date Range for every credit card account selected.

 Total Credits

 The total credits applied in the Date Range for every credit card account selected.

 Total Transactions

 The total amount of credit card charges using the following formula:

 Total Transactions = Total Charges - Total Credits
