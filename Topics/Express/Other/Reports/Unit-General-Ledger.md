# Unit General Ledger (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-General-Ledger.htm

The Unit General Ledger report allows you to examine transactions that impacted specific general ledger (GL) accounts over a given date range for a single unit. This gives you the ability to see how GL accounts reached their balances and allows you to drill-down on any amount to see balances directly on the unit level.

 More Information

 The GL start date is considered the financial start date, so any transactions or information dated before the GL start date are not included in the report results.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit General Ledger .

 For more information, refer to Control User Access .

 To view the Unit General Ledger report, do the following:

 -
 Go to arrow_forward General Ledger arrow_forward General arrow_forward Unit General Ledger .
The Reports: Unit General Ledger page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 GL Accounts

 The report displays transactions that debit or credit any of the selected general ledger (GL) accounts. If no transactional activity took place during the selected date range, the report displays No activity in the period .

 To quickly select or deselect all GL accounts in the list, check or uncheck the box in the section header.

 In addition to manually selecting GL accounts, you can use the following options to filter and select the accounts. The list of GL accounts updates depending on the options selected here.

 Option
 Description

 From Account

 To select a range of GL accounts, select the first account in your range from the drop-down list. All accounts between and including the From Account and To Account are checked in the list.

 To Account

 To select a range of GL accounts, select the last account in your range from the drop-down list. All accounts between and including the From Account and To Account are checked in the list.

 Map Selection

 Select the name of the desired mapping method from the drop-down list to customize the display of GL accounts included in the report by using the virtual accounts of a chart account mapping. For more information, refer to Chart Accounts Mapping (Page) .

 If no chart account mappings are created, the drop-down list displays <None> .

 Group Selection

 Optionally, select a GL account type group from the drop-down list to quickly select all accounts of that type. For example, selecting All Banks checks all the banks in the list. You also have the option to select All Accounts or Unselect All .

 Select a Property and Unit

 Select a Property from the drop-down list, then select a Unit from that property to examine. Alternatively, select < No Unit selected > to examine report data that is not tied to any specific unit.

 To include properties that are no longer active, check Inactive Properties .

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Cash or Accrual

 This option determines whether the financial activity is calculated on a cash or accrual basis and impacts which GL accounts display in the report.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each GL account with changes that impact the cash balance organized by the type of GL account displays.

 Summary

 Only the total changes that impact cash balance display.

 Zero Amount Exclusions

 Select an option to determine which GL accounts are excluded from the report results.

 Option
 Description

 None

 Display all selected GL accounts.

 Activity

 Exclude selected GL accounts that had no transactional activity during the date range.

 Balance

 Exclude selected GL accounts that have no balance at the end of the date range.

 Activity or Balance

 Exclude selected GL accounts that either have no balance at the end of the selected date range or no transactional activity during the date range.

 Activity and Balance

 Exclude selected GL accounts that have both no balance at the end of the selected date range and no transactional activity during the date range.

 Combine Tenant Receivables by Date and Type

 Check to display multiple tenant receivables (payments, NSF adjustments, and so on) as a single line item if the Date and Type of the transactions are the same. This report option applies only when the Detail or Summary report option has Detail enabled.

 Show Deposit Breakdown

 If checked the individual payments that make up deposits and management fees display. The Description column displays the date of the payment and the account who made the payment.

 Otherwise, the total deposit and management fee displays as a single line item. For deposits, the Description column displays the text Tenant payment bank deposit . For management fees, the Description column displays the text Management fees for multiple properties .

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Detail

 If the report option for Detail is selected, the following columns display.

 Column
 Description

 Date

 The date on which the transaction took place.

 Type

 The type of transaction took place. For example, if a check was written, CHECK displays.

 Reference

 The transaction's reference number. For example, if a check was written, the check number displays.

 Description

 A description of the transaction. This includes the following:

 -
 the name of vendors, owners, or tenants who were involved in the transaction.

 -
 if a charge was paid by the transaction and the charge type of that charge.

 -
 journal detail memos entered on journal entry lines if they are not blank. If there is a journal header memo and no journal detail memo, the journal header memo displays instead.

 Debit

 The amount that was debited from the account for each transaction. Debits increase expense and asset accounts, but decrease income, equity, and liability accounts.

 Credit

 The amount that was credited to the account for each transaction. Credits increase income, equity, and liability accounts, but decrease expense and asset accounts.

 Balance

 The running balance of the GL account after each transaction took place.

 Summary

 If the report option for Summary is selected, the following columns display.

 Column
 Description

 Account

 The unique account name and number used as the system-wide identifier for the GL account.

 Type

 The account type that most closely defines the purpose of the GL account (e.g., Bank , Expense , Equity , etc.). For more information, refer to Types on GL Reports .

 Beginning Balance

 The balance of the GL account prior to the beginning of the Date Range .

 Debits

 The total amount that was debited from the account at the end of the Date Range . Debits increase expense and asset accounts, but decrease income, equity, and liability accounts.

 Credits

 The total amount that was credited to the account at the end of the Date Range . Credits increase income, equity, and liability accounts, but decrease expense and asset accounts.

 Ending Balance

 The balance of the GL account at the end of the selected Date Range .
