# Add a General Ledger Account

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/COA-Add.htm

General ledger (GL) accounts make up the chart of accounts, the backbone of all your finances. These accounts track the financial aspects of your business from income and expenses to liabilities and assets. The chart of accounts is used by every property to support Rent Manager 's property-specific accounting, which means each transaction is linked to at least one property.

 Adding a new GL account to your chart of accounts allows you to better organize charges and report finances more accurately. For example, rental income is usually not the only property income you receive. When you create separate GL accounts for rental income, garage fees, parking fees, and so on, you have more accurate reporting and more organized data.

 Warning

 Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 Add, View

 For more information, refer to Control User Access .

 To add a new GL account, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The Chart of Accounts page displays.

 -
 Click Add GL Account .

 -
 Enter the following information for the new GL account:

 Field
 Description

 Type

 These account types impact your financial reporting and the organization of all financial data. For example, indicating that an account is a Cost of Goods Sold type causes this account to show as an expense on reports, such as the Profit & Loss .

 If you are creating a GL account for a bank account or credit card, refer to Add a Bank Account or Add a Credit Card Account .

 GL Account No

 The unique alphanumeric account number to be used as a system-wide identifier for the new GL account. The next available account number automatically populates based on the Type you select.

 If you are building on the Rent Manager default chart of accounts, it is recommended you follow the existing numerical system to keep your chart of accounts clean and easy to follow. The default chart of accounts uses the following numerical system:

 1000–1999

 Bank Accounts, Accounts Receivable, and Assets

 2000–2999

 Accounts Payable and Liabilities

 3000–3999

 Equity

 4000–4999

 Income

 5000–6100

 Expenses

 Name

 A unique name that matches your real life account to identify its purpose at a glance. This name displays when writing checks expensing this GL account and on some reports, such as the Balance Sheet and Financial Statement reports.

 Description

 A more detailed summary of the account. This is for internal use and does not display on reports but is useful when determining differences between various GL accounts that are similarly named and numbered.

 Subaccount of

 If this account is a child account of a larger GL account, search for a GL account from the drop-down list to act as the parent GL account for this new account.

 Think of parent accounts as category headings. Actual finances are tracked in the subaccounts.

 In the following example, the 2100 Refundable Deposits account acts as a parent account, with accounts 2100 through 2103 representing subaccounts to specifically track different types of security deposit funds.

 For this reason, it is a best practice to not use parent accounts to track transactions in Rent Manager .

 Warning

 If you choose a parent account, it must be the same type GL account as the child account. If you choose a parent account of a different type, your new account will automatically switch to the parent account's GL account type.

 Active

 This option is checked by default, allowing the account to be assigned to transactions for tracking finances linked to this account.

 More Information

 Uncheck this box as an alternative to deleting the GL account to ensure that the account is not used, but all historical data remains. For more information, refer to Delete a General Ledger Account .

 -
 To finish, click Save & Close , or to create additional accounts, click Save & New .
The GL account is added to the GL Accounts page and can be used to track finances throughout Rent Manager .
