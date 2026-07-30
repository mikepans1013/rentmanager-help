# Trust Account Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Trust-Account-Detail.htm

The Trust Account Detail report displays all transactions that impacted a selected bank account during a date range, and can be filtered by property. Additionally, the bank account's beginning and ending balances display, allowing you to easily troubleshoot issues. This report can be especially helpful when multiple properties use the same back account by providing a quick breakdown of the money going into and coming out of the selected account.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Trust Account Detail .

 For more information, refer to Control User Access .

 To view the Trust Account Detail report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Bank Balances arrow_forward Trust Account Detail .
The Reports: Trust Account Detail page displays.

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

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Bank Account

 Select the bank for which Rent Manager examines deposit and withdrawal activity.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date of each transaction.

 Type

 One of the following codes to signify the type of transaction.

 BNKDEP

 Represents a bank deposit. Individual tenant payments with each deposit are displayed line-by-line.

 CHECK

 Represents a check, including EFT and ACH transactions.

 JOURNL

 Represents a journal entry.

 NSF

 Represents a non-sufficient funds entry or a void adjustment. For more information, refer to Reverse a Payment for Non-Sufficient Funds (NSF) .

 Reference

 An identifier for each transaction. The identifier varies based on the Type of transaction.

 Bank Deposits

 The system-generated deposit number, as displayed on the Bank Registers page.

 Checks

 The value entered in the check's No. field.

 Journal Entries

 The Journal # as it displays in the Journals page.

 NSF

 An N displays before the number of the deposit impacted by the NSF.

 Description

 Additional information about each transaction. For example, deposits display the name of the tenant who made each payment, and checks display the name of the vendor.

 Debit

 The amount by which the transaction increased the bank account balance. The sum of all debit transactions displays at the bottom of the column.

 Credit

 The amount by which the transaction decreased the bank account balance. The sum of all credit transactions displays at the bottom of the column.

 Balance

 A running total of the bank account's balance after each transaction. The final balance as of the last day in the Date Range displays at the bottom of the column.

 Beg Bal

 The bank account's balance as of the day before the Date Range .

 Period Activity

 The net change in the bank account's balance as of the last day in the period, calculated using the following formula:

 Period Activity = Sum of all Debits - Sum of all Credits
