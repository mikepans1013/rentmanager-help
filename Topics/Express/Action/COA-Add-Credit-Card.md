# Add a Credit Card Account

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/COA-Add-Credit-Card.htm

General ledger (GL) accounts can be created for credit cards, which are used to track credit card liability transactions based on your real-life credit card accounts. For example, some liabilities are not related to credit cards, like security deposits. When you set up a separate GL account for a credit card as opposed to a security deposit, you are able to match your real-life finances when performing actions such as credit card reconciliations.

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

 To add a new credit card account, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The Chart of Accounts page displays.

 -
 Click Add GL Account .

 -
 In the Type field, select Credit Card .

 -
 Enter the following information for a new credit card account:

 Field
 Description

 Active

 This option is checked by default, allowing the account to be assigned to transactions for tracking the applicable financial data.

 More Information

 Uncheck this box as an alternative to deleting the credit card account to ensure that the account is not used, but all historical data remains. For more information, refer to Delete a General Ledger Account .

 Associated Card Numbers

 The Last Four Digits of each credit card to be linked to this GL account. These are used when uploading Smart Receipts to validate if a company credit card was used for the purchase. For more information, refer to Smart Receipts .

 Description

 A more detailed summary of the account. This is for internal use and does not display on reports but is useful when determining differences between different credit card accounts that are similarly named and numbered.

 GL Account No

 A unique, alphanumeric account number to be used as a system-wide identifier for the new account. The next available account number automatically populates based on the Type you select.

 If you are building on the Rent Manager default chart of accounts, it is recommended you follow the existing numerical system to keep your chart of accounts clean and easy to follow. The default numbers for credit cards fall into the Accounts Payable and Liabilities account type category, so your credit card should be assigned a number from 2000 to 2999.

 Name

 A unique name that matches your real-life credit card account to identify its purpose at a glance. This name displays when writing checks from this account and on some reports, such as the Balance Sheet and Financial Statement reports.

 More Information

 As a best practice, add the last four digits of the account number to the GL name. Doing so is particularly helpful when an electronic reconciliation sync is done for bank and credit card accounts.

 Selected Users

 The users who require access to the credit card account.

 Subaccount of

 If this account is a child account of a larger credit card account, search for a credit card account from the drop-down list to act as the parent account for this new credit card account.

 Parent accounts are like category headings, with actual finances tracked in the subaccounts. In the following example, the 2001 AMEX account acts as a parent account, and accounts 2003, 2004, and 2006 represent subaccounts that specifically track different transactions.

 Because finances are tracked in the subaccounts, it is a best practice to not use parent accounts to track transactions in Rent Manager .

 Warning

 If you choose a parent account, it must be a Credit Card type GL account. If you choose a parent account of a different type, your new account will automatically switch to the parent account's GL account type.

 Type

 These account types impact your financial reporting and the organization of all financial data. Indicating that an account is a Credit Card type causes this account to show as a liability on reports, such as the Balance Sheet or the Financial Statement .

 -
 When you are satisfied with the information you have entered, click Save & Close . Alternatively, click Save & New to continue adding credit card accounts.
The credit card-type account(s) is added to the Chart of Accounts page.
