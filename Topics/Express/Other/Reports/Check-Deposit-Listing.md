# Check/Deposit Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Check-Deposit-Listing.htm

The Check/Deposit Listing report displays checks, deposits, and journal entries affecting specific bank accounts and credit cards posted during a selected date range. This report can be used to help reconcile against statements from banks or credit card companies, and to monitor bank and credit card activity within Rent Manager , preventing fraud and preserving the integrity of your financial information.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Check/Deposit Listing .

 For more information, refer to Control User Access .

 To view the Check/Deposit Listing report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Payments arrow_forward Check/Deposit Listing .
The Reports: Check/Deposit Listing page displays.

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

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Cleared/Open Options

 Determine whether cleared transactions are shown in the report. If neither option is selected, all transactions display in the report results.

 Option
 Description

 Only include transactions that have been cleared

 Only transactions that were cleared through a bank reconciliation or have the Cleared column checked in the Bank Registers or Credit Card Registers display.

 Only include transactions that have not cleared

 Only transactions that are not cleared through a bank reconciliation and do not have the Cleared column checked in the Bank Registers or Credit Card Registers display.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Separate Banks

 Check to generate a separate report for each bank account. If option is selected, the option to Run Properties separately is unavailable.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option becomes available only when the Property tab is selected. Additionally, when this option is selected, the option to Separate Banks becomes unavailable.

 Sort Options

 Select one of the following options to determine how the report results are organized within each bank or credit card subheading. Banks and credit card subheadings are sorted alphabetically.

 Option
 Description

 Amount

 Transactions are sorted numerically by the Payment amount in ascending order (lowest to highest). Charges of the same amount are further sorted numerically by the Reference number.

 Bank

 Banks and credit cards are sorted alphabetically by account name. The transactions in each heading are further sorted chronologically by date in ascending order (oldest to newest).

 Date

 Transactions are sorted chronologically by date in ascending order (oldest to newest).

 Reference

 Transactions are sorted alphanumerically by Reference value. Transactions with no Reference value display first.

 Vendor

 Transactions are sorted alphabetically by vendor name.

 To sort by vendor, the Checks from bank account only must be selected in the Transactions to Include report option.

 Show Bank Balance Summary

 Check to display the Bank Balance Summary subreport at the end of the report. If credit card transactions are listed in the report, the Credit Card Balance Summary subreport also displays.

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

 Transactions to Include

 Select an option to determine which types of transactions display.

 Option
 Description

 All

 Include both deposits and checks that impacted the selected banks.

 Checks from bank account only

 Includes only checks that impacted the selected banks.

 Optionally, check Show Check Breakdown to display the itemized expense allocations for each check. You can also choose a vendor to display only checks that were written to that vendor. The default is Any Vendor .

 Deposits to bank account only

 Includes only deposits that impacted the selected banks.

 Optionally, check Show Deposit Breakdown to display the itemized transactions included in each deposit.

 Show Journal

 Additionally, you can check this option to also include journal entries that impacted any of the selected properties.

 Banks

 Select the bank(s) for which Rent Manager examines bank deposits, checks, and journals that impact the selected bank or credit card accounts. Each bank or credit card's data is displayed individually, with the bank or credit card's name appearing as a header above its respective transactions list.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date that each transaction took place.

 Reference

 The deposit number, journal number, or check number for each transaction.

 Information

 Details specific to each transaction and transaction type. The results for each transaction type are described below.

 Checks

 The name entered in the Check Payee field on the check.

 Deposits

 The text entered in the deposit's Comment field.

 Journals

 The text entered in the journal's Memo .

 Check Comment

 The contents of the Memo field for all checks.

 Cleared

 If the transaction has been cleared through a bank reconciliation or has the Cleared column checked on the Bank Registers page, Y displays. Otherwise, N displays.

 Deposit

 The total amount of each deposit transaction, or each journal entry that debited (increased) the bank account or credited (increased) the credit card account.

 Payment

 The total amount of each check transaction, or each journal entry that credited (decreased) the bank account or debited (decreased) the credit card account.

 Bank Balance Summary Subreport

 If the Show Bank Balance Summary report option was checked, the Bank Balance Summary subreport displays the balance of each bank account one day prior to and at the end of the selected Date Range .

 Column
 Description

 Bank

 The name of each bank account.

 Balance before MM/DD/YYYY

 The balance of each bank account one day prior to the From date selected in the Date Range .

 Balance on MM/DD/YYYY

 The balance of each bank account as of the last day of the selected Date Range .

 Credit Card Balance Summary Subreport

 If the Show Bank Balance Summary report option was checked and at least one credit card is selected in the Banks field, the Credit Card Balance Summary subreport displays the balance of each bank account one day prior to and at the end of the selected Date Range .

 Column
 Description

 Credit Card

 The name of each credit card account.

 Balance before MM/DD/YYYY

 The balance of each credit card one day prior to the From date selected in the Date Range .

 Balance on MM/DD/YYYY

 The balance of each credit card as of the last day of the selected Date Range .
