# Owner Statement (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Statement.htm

The Owner Statement is a cash-basis accounting report that is used to show financial activity and changes in bank balances over a specified period of time. Fee-based management companies often provide this statement in conjunction with an owner payout to provide details about both the payout and the period's income and expenses.

 In addition, this report examines the total of all trust accounts associated with the owner's properties, as defined on the Property Owners (Pop-Up) page. It also reports on specific equity and liability accounts. Furthermore, the Owner Statement shows the Cash Requirements of an owner—both the amount of money that must be held in reserve and the total of held security deposits. The report includes a variety of report options to control what displays on the statement and the level of detail of that information.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Statement .

 For more information, refer to Control User Access .

 To view the Owner Statement report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Owner Statements arrow_forward System Owner Statement
The Reports: Owner Statement page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 If you provide this statement with an Owner Distribution , use a Date Range of the day after your last payout to the date of the current payout for the most accurate information.

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Separation Method

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 Generates a report for each selected owner.

 Separate by Properties

 Generates a separate report for each property in the selected owner(s) portfolio.

 Separate by Units

 Generates a separate report for each unit in the selected owner(s) portfolio.

 Wrap Text in Comment Column

 Check to display the entire comment for each entry when Show detailed income and/or Show detailed expense is checked in the Show Details report option. Otherwise, if a comment is longer than the allotted space, only part of the comment displays in the report.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Show Details

 By default, the GL account totals in the report results are balances based on the transaction activity during the selected date range. The following options allow you to display individual transactions specific to income, expenses, and/or other types of transactions.

 More Information

 If you enable any of these detail options, the YTD and Current columns in the associated section are removed from the report and replaced with more detailed columns such as Date , Reference , and Amount .

 Check each option you wish to include in the report.

 Option
 Description

 Show detailed income

 A line item for each transaction that affected the income of the properties of the selected owner(s) displays.

 Show detailed expense

 A line item for each transaction that affected the expenses of the properties of the selected owner(s) displays.

 Show detailed other transactions

 A line item for every transaction that affected the GL accounts specified in system preferences displays. By default, owner contributions and distributions are included regardless of the system preferences.

 If there are no applicable transactions during a period, the Other Transactions section does not display in the report.

 Related Preferences

 In system preferences, you can select what type of transactions display in the Other Transactions section. For more information, refer to Owner Report Settings (System Preferences) .

 Exclusion Options

 These options control what information does and does not display in the report. Select as many or as few of these options as desired.

 Option
 Description

 Mailing Header

 Removes the name, address, and contact information of your management company from the report. The owner’s name, address, and phone number are also removed from the report.

 Phone Number

 Removes only the owner's phone number from the mailing header of the report.

 Reserve Amount

 Removes Total Reserves from the Cash Requirements section of the report.

 Security Deposits

 Removes Security Deposits Held from the Cash Requirements section of the report.

 Unchecking this option is often useful if security deposits are held in a separate (trust) bank account, since you may not wish to show them as a cash requirement for the operating bank examined in the report.

 Pass Through Accounts

 Removes any GL account(s) from which you collect pass-through fees. Any GL account that is set up for pass through in the management fee template used for the owner’s property does not display.

 More Information

 The full amount of the GL account is excluded from the Ending Cash Balance section of the report even if you are using advanced management fees and do not collect 100 percent pass through on the GL account.

 Undeposited Funds

 Determines if undeposited funds receive their own Less Undeposited Funds row in the report, or if those undeposited funds are instead grouped in the Beginning Cash Balance and Ending Cash Balance rows.

 If checked, any funds that have not been deposited are automatically added to the Beginning Cash Balance and Ending Cash Balance .

 If left unchecked, the Less Undeposited Funds row displays any funds that have not been deposited.

 More Information

 If your Owner Statement is intended to support an owner payout and this option is checked, it may appear to the owner that more cash was available but not paid to them.

 Vendors If Applicable

 Hides vendor names in the Comment column for each expense that is linked to a vendor.

 The Show detailed expense option in the Show Details section must be checked for this option to affect the report.

 Distribution Breakdown

 Hides the Distribution Breakdown section, which displays information about how Rent Manager calculated an owner's distribution payout, showing balances on the date of a payout and the amounts of exclusions.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the selected date range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected date range overlap. Filtered results display an asterisk (*) after the date range.

 Mailing Header

 This section displays your management company’s name, address, and phone number in the top-left corner, if not excluded in the report options. Under that, the owner’s name and address is displayed. If the Phone Number option in the Exclusion Options section of the report options is unchecked, the owner’s phone number also displays.

 More Information

 If the property's name or address is incorrect or missing on the statement header, the information must be updated or added to the related fields on the property's details page. For more information, refer to Property Details (Page) .

 Beginning Bank/Cash Balance

 By default, the Beginning Bank Balance displays how much money is held in all property default banks (the Default Bank selected on Property Details (Page) ) of the owner's properties. The date of this balance is the starting point of the statement, after which financial activity is examined.

 Optionally, click on the total to view a Balance Sheet dated one day prior to the start date of your statement. This report displays the bank balances that are combined in your statement.

 More Information

 If the report exclusion option for Undeposited Funds is checked, the row is renamed Beginning Cash Balance and the balance also includes any undeposited funds.

 Column
 Description

 Current

 The bank or cash balance one day before the selected report date range.

 If the report option to Show detailed income is checked, the Current column does not display in the report.

 YTD

 The bank or cash balance one day before the current fiscal year start date. If the report option to Show detailed income is checked, the YTD column will not display in the report.

 Income

 This section displays the income activity for the specified property or portfolio. This report displays the bank balances that are combined in your statement.

 Optionally, click on the totals to view a general ledger report of that income. This general ledger is dated for either the report date range or the fiscal year to date (depending on the column selected).

 The following income columns appear in this section and display the income activity for the specified property or portfolio:

 Column
 Description

 Current

 The income activity for the selected report date range.

 YTD

 The income activity from the beginning of the current fiscal year through the end of the report Date Range .

 If the report option to Show detailed income is selected, a line item for each transaction that affected the income of the properties displays. The Current and YTD columns are replaced with the following columns:

 Column
 Description

 Date

 The post date of the income.

 Reference

 Income transactions from a tenant's View Transactions page display the associated property short name and, if applicable, unit name.

 Income transactions from a prospect's View Transactions page display the payment's Reference # .

 Alternatively, checks display the check number, journal entries display the journal number, and deposits display the deposit number.

 Type

 The GL account associated with the income transaction.

 Comment

 For tenant’s, the name associated with the income transaction displays.

 For prospects, this column instead displays information about the charge to which the payment is allocated.

 For journals, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field in the Information section displays instead. If no memos are entered, Journal Entry displays.

 For deposits, the text entered in the Memo column for the line item in the Other Items tab displays. If the column is empty, the text entered in the Comments field in the Deposit Information section displays instead. If neither is entered, the column displays blank.

 For checks, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field for the check displays instead. If there is no memo entered, the name of the check recipient displays.

 In the Exclusion Options report option, if Vendors If Applicable is checked, checks with no entered memos do not display the name of the check recipient and this column instead displays blank.

 Amount

 The dollar amount of the income transaction.

 Expense

 This section displays the expense activity for the specified property or portfolio.

 Optionally, click on the total to view a general ledger report of that expense. This general ledger is dated for either the report date range or the fiscal year to date (depending on the column selected).

 The following expense columns appear in this section and display the expense activity for the specified property or portfolio:

 Column
 Description

 Current

 The expense activity for the selected report date range.

 YTD

 The expense activity since the beginning of the current fiscal year.

 If the report option to Show detailed expense is selected, a line item for each transaction that affected the expenses of the properties displays. The Current and YTD columns are replaced with the following columns:

 Column
 Description

 Date

 The post date of the expense transaction.

 Reference

 Information about the payment method used for each expense transaction such as the check number or journal number.

 Type

 The GL account that is associated with the expense transaction.

 Comment

 For journals, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field of the Information section displays instead. If no memos are entered, Journal Entry displays.

 For checks, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field for the check displays instead. If there is no memo entered, the name of the check recipient displays.

 In the Exclusion Options section, if Vendors If Applicable is checked, checks with no entered memos do not display the name of the check recipient and this column instead displays blank.

 Amount

 The dollar amount of expenses for that transaction.

 Net Income/Loss

 The Net Income/Loss row on the Owner Statement displays the bank balance of the property's default bank as of the last date in the report date range for the Current and/or YTD  periods.

 More Information

 Even if your company uses accrual basis accounting, net income is calculated on a cash basis, which means that only transaction activity where money changes hands is considered.

 Optionally, click the total to view a Profit and Loss report. This report is dated for either the report date range or the fiscal year to date (depending on the column selected).

 More Information

 If any of the report options in the Show Details report options section are checked, the YTD column is removed, and only the current Net Income/Loss displays. Clicking on the Net Income/Loss generates a Profit & Loss for the report date range.

 Less Undeposited Funds

 This row displays money coded to the Undeposited Funds general ledger account specified in General Ledger System Accounts (System Preferences) for the Current and fiscal YTD periods. If you'd prefer that this row does not display on the report, check this option, and any undeposited funds are added to the Beginning Cash Balance .

 More Information

 The value of the Less Undeposited Funds row may display as negative funds if you received tenant payment(s) prior to the report date range and those payment(s) are deposited during the selected report date range. Undeposited funds must be subtracted from the statement, as they do not impact the bank balance. If a value is positive, it can be considered as funds additional to the bank balance.

 Optionally, click on the total to view a general ledger report of undeposited funds. This general ledger is dated for either the report date range or the fiscal year to date (depending on the column selected).

 More Information

 If any of the report options in the Show Details report options section are checked, the YTD column is removed, and only the current Less Undeposited Funds displays. Clicking on the Less Undeposited Funds total displays a general ledger report for the report date range.

 Other Transactions

 This section displays any GL accounts added to the Statement Accounts section on Owner Report Settings (System Preferences) for the Current and fiscal YTD periods. Typically, accounts are added to Other Transactions to display important equity and liability accounts that impact the bank account of this property, such as owner contributions and payouts (distributions). The default accounts selected in System Preferences are defined below.

 If there are no applicable transactions during a period, the Other Transactions section does not display in the report.

 The following rows display in this section for the specified property or portfolio:

 Row
 Description

 Paid to Owner

 ( Rent Manager default chart account)

 Equity distributions paid to the owner.

 Received from Owner

 ( Rent Manager default chart account)

 Contributions made by the owner.

 More Information

 The Net Change in Security Deposits section of the statement displays if both of the following are true:

 -
 On Property Owner Check Setup (Pop-Up) of a property examined in the report, the Subtract security deposits held from bank balance when writing owner checks option is checked.

 -
 One or more transactions during the specified reporting period resulted in either a net gain or loss of held security deposits for the chosen ownership(s).

 This option considers the impact of collecting or refunding security deposits on the bank account. If the value is positive, that means the ownership gained additional security deposits during this period. If the value is negative, the ownership released deposits back to tenants and/or applied the security deposit to other charges/forfeitures.

 Optionally, click on the total of each row to view a general ledger report of undeposited funds. This general ledger is dated for either the report date range or the fiscal year to date (depending on the column selected).

 The following columns appear in this section depending on your selections in report options.

 Column
 Description

 Current

 The transaction activity for the selected report date range.

 YTD

 The transaction activity since the beginning of the current fiscal year.

 If the report option to Show detailed other transactions is selected, a line item for every transaction that affected the GL accounts specified in system preferences displays. By default, owner contributions and distributions are included regardless of the system preferences.

 Related Preferences

 In system preferences, you can select what type of transactions display in the Other Transactions section. For more information, refer to Owner Report Settings (System Preferences) .

 The Current and YTD columns are replaced with the following columns:

 Column
 Description

 Date

 The post date for the transaction.

 Reference

 Other transactions from a tenant's View Transactions page display the associated property short name and, if applicable, unit name.

 Other transactions from a prospect's View Transactions page display the payment's Reference # .

 Alternatively, checks display the check number, journal entries display the journal number, and deposits display the deposit number.

 Account

 The GL account that is associated with the transaction.

 Comment

 For owner contributions and distributions, the name of the owner displays.

 For tenant transactions, the name associated with the income transaction displays.

 For prospect transactions, this column instead displays information about the charge to which the payment is allocated.

 For journals, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field for the journal displays instead. If no memos are entered, Journal Entry displays.

 For deposits, the text entered in the Memo column for the line item in the Other Items tab displays. If the column is empty, the text entered in the Comments field in the Deposit Information section displays instead. If neither is entered, the column displays blank.

 For checks, the text entered in the Memo column for the line item displays. If the column is empty, the text entered in the Memo field for the check displays instead. If there is no memo entered, the name of the check recipient displays.

 In the Exclusion Options report option, if Vendors If Applicable is checked, checks with no entered memos do not display the name of the check recipient and this column instead displays blank.

 Amount

 The dollar amount of each transaction.

 Ending Bank/Cash Balance

 This section displays the total amount held in bank accounts including the amount needed to manage the properties.

 More Information

 If the report option of Undeposited Funds in Exclusion Options is checked, the row is named Ending Cash Balance and the balance includes the total amount held in all of the property default banks of the owner's properties. This balance also includes any amounts coded to the Undeposited Funds general ledger account specified in General Ledger System Accounts (System Preferences) .

 The following columns display in this section:

 Column
 Description

 Current

 The bank or cash balance at the end of the report date range. Click on the total to view a general ledger report for the bank account(s) at the end of this date range.

 If any of the report options in the Show Details report options section are checked, the general ledger is available only for the current period.

 YTD

 The bank or cash balance at the end of the report date range.

 Click on the total to view a general ledger report for the bank account(s), dated from the beginning of the fiscal year to the end of the date range.

 Cash Requirements

 This section displays the amount of money that has been set aside, such as held security deposits and any reserves. These amounts are specified on the Property Owners (Pop-Up) page. After owners are paid, this amount should match the Ending Bank Balance , indicating that you have retained the agreed-upon amount, and paid the owner all excess income.

 More Information

 If your Ending Bank Balance is lower than your Cash Requirements and you did not overdraft the trust account, it is likely that these held security deposits are in a separate bank account instead of the default bank of the property. If desired, you can remove this information from the report by checking Security Deposits in the Exclusion Options .

 Row
 Description

 Total Reserves

 Displays the amount of money that must be held in reserve. In the case of partnerships, this report shows the owner exactly how much of the total reserve belongs to them in the Owner Reserve amount to the right of Total Reserve amount.

 Security Deposits Held

 Displays the total held deposits for the tenants of the selected ownership. This value is not a specific GL account; it is pulled from the total of Held deposits as shown on the tenant's details page for tenants of the selected ownerships.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Total Requirements

 Displays the combined amount of money held for Total Reserve and Security Deposits Held for the selected date range.

 Distribution Breakdown

 This section displays all payments to the owner with a check date during the specified report date range. Checks are ordered chronologically, and each item that factored into the check's calculation are grouped below the date. If multiple properties are expensed on the check, calculations for those properties are grouped together.

 The following rows appear in this section for each check:

 Row
 Description

 Bank Balance

 The bank balance of the property's default bank at the date and time the owner distribution was performed.

 Less: Security Deposits Held

 If the Owner Check Setups option of Security deposits held is selected, this row displays the amount of security deposits withheld for the property.

 Less: Owner Reserve

 The amount of money designated as a reserve amount as specified on the property's owners page.

 Accounts to Exclude from Check Posting

 If you specify a GL account (or multiple accounts) in the Accounts to Exclude from Check Posting section of the Owner Check Setups page, the account(s) display above the payment total.

 Withheld Prepayments

 Displays the balance of all tenant and prospect prepayments that have been deposited during the selected date range.

 More Information

 This row displays only when the Prepaid receivables option is selected on the Property Owner Check Setup (Pop-Up) for the owner's property or the Owner Check Setup Templates (Page) page.

 Comments

 In the Comments section, a custom message for the recipient of this report displays.

 Use any of the following methods to define the comment:

 Option
 Description

 Manage Owner Reports

 Enter a custom message for individual owners in the Owner Statement Comment field. A message entered using this method will always display for the corresponding owner in the report.

 Owner Report Settings (System Preferences)

 Enter a default message for all owners in the Statement Comment field. If there is not a message entered on Manage Owner Reports for an owner, the message entered here displays.

 Owner History/Notes

 Enter a custom message for individual owners as a history item. This history note displays only if the date of the history note falls within the Owner Statement report date range. The custom message displays only if no comments are entered on Manage Owner Reports or Owner Report Settings (System Preferences) .
