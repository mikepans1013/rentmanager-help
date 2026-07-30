# Account Balance Disbursal

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Account-Balance-Disbursal.htm

The Account Balance Disbursal tool creates bills or journal entries and automatically defines the appropriate property allocations based on set parameters. This saves you time by removing the need to manually determine the disbursal amount for each property.

 This tool can be used in two ways:

 -
 Creating bills that sweep funds out of one general ledger (GL) account.

 -
 Creating journal entries that transfer funds from one GL account to another.

 This tool is primarily used to pay off credit cards that were used to pay transactions across multiple properties, because you have to pay off the credit card liability for each property separately. Your credit card bill likely does not split up your totals by property, but Rent Manager can do this for you using the Account Balance Disbursal tool. Once you have sorted all the credit card totals for each property, this tool allows you to automatically create a bill for each property that reflects these amounts. This way when you pay that bill in Rent Manager , it property pays off each property's credit card liability using the appropriate bank account(s).

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Account Balance Disbursal tool
 Enabled

 For more information, refer to Control User Access .

 Option 1: Disbursing Funds with a Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 To disburse funds across properties and/or units using bills, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Account Balance Disbursal .
The Account Balance Disbursal page displays.

 -
 In the left section, select the Properties or property Group between which the funds are being disbursed.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 If you track unit-level expenses and wish to disburse only the transactions directly linked to specific units, click Click here to select . ,Then, on the Account Balance Disbursal pop-up, select the specific units you included and click OK to close the pop-up.

 -
 In the Disbursal Type field, select Bill from the drop-down list.

 -
 In the Source Account field, select the GL account whose funds are to be disbursed.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Use any of the available options to customize the way the disbursement is allocated.

 Option
 Description

 Date Range

 Restrict the disbursement to include only transactions that took place within a selected date range. For example, entering a date range of 01/01/ 26 to 3/31/ 26 creates a bill that examines only transactions impacting the specified Source Account during the first three months of the year.

 Use percentage

 Disburses a percentage ( 1 to 100 ) of the account's total dollar amount.

 Exclude negative balances

 Excludes properties and units that have negative balances in the selected GL account from the disbursement.

 For example, if you are calculating a credit card liability account and there is a property with a credit balance on the card (which displays as a negative balance), you can exclude this property from the disbursement so the credit is retained for the property.

 -
 Click Calculate .
The center section of the page populates with properties and, if applicable, units that meet the established criteria. The following columns are available:

 Column
 Description

 Property

 The property associated with the selected Source Account .

 Bank

 The name of the Source Account .

 Memo

 An optional comment to further explain the disbursal.

 Amount

 The dollar amount of the current Source Account balance associated with the Property .

 -
 Click Disburse .

 -
 Enter information in the following fields:

 Field
 Description

 Vendor

 The vendor to whom the funds are disbursed. For example, if you were disbursing the funds of a credit card liability account, the card provider (e.g., MasterCard) would be the vendor that is to be paid by this bill.

 To include the bill in the 1099 form the vendor receives at the end of the tax year, check 1099?

 Bill Account

 The GL account to adjust for the calculated balance of the selected Source Account . In most cases, the Source Account and the Bill Account should be the same.

 Bill Date

 The date on which the bill was issued. If this bill reflects a physical bill you received, select the date on the actual bill.

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Memo

 An optional message or note explaining the bill.

 -
 Click Create .
The bill is created and can be paid on the Pay Bills page.

 Option 2: Disbursing Funds with a Journal

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 To disburse funds across properties and/or units using journal entries, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Account Balance Disbursal .
The Account Balance Disbursal page displays.

 - In the left section, select the Properties or property Group between which the funds are being disbursed. More Information
 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 If you track unit-level expenses and wish to disburse only the transactions directly linked to specific units, click Click here to select . Then, on the Account Balance Disbursal pop-up, select the specific units you included and click OK to close the pop-up.

 -
 In the Disbursal Type field, select Journal from the drop-down list.

 -
 In the Source Account field, select the GL account whose funds are to be disbursed.

 -
 Use any of the available options to customize the way the disbursement is allocated.

 Option
 Description

 Date Range

 Restrict the disbursement to include only transactions that took place within a selected date range. For example, entering a date range of 01/01/ 26 to 3/31/ 26 creates a journal entry that examines only transactions impacting the specified Source Account during the first three months of the year.

 Use percentage

 Disburses a percentage ( 1 to 100 ) of the account's total dollar amount.

 Exclude negative balances

 Excludes properties and units that have negative balances in the selected GL account from the disbursement.

 For example, if you are calculating a credit card liability account and there is a property with a credit balance on the card (which displays as a negative balance), you can exclude this property from the disbursement so the credit is retained for the property.

 -
 Click Calculate .
The center section of the page populates with properties and, if applicable, units that meet the established criteria. The following columns are available:

 Column
 Description

 Property

 The property associated with the selected Source Account .

 Memo

 An optional comment to further explain the disbursal.

 Amount

 The dollar amount of the current Source Account balance associated with the Property .

 -
 Click Disburse .

 -
 Enter information in the following fields:

 Field
 Description

 Destination Account

 The GL account to adjust for the calculated balance of the selected Source Account . This account cannot be the same as the Source Account .

 Date

 The date on which this journal entry impacts the GL account's financial data.

 Reference

 A short note to identify the purpose of the journal entry.

 Memo

 An optional note to provide further information about the purpose of the journal entry transaction (e.g., Security Deposit Transfer ).

 -
 Click Create .
The journal entry is created and can be edited on the Journal details page.
