# Create a New Chart of Accounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/COA-New.htm

The chart of accounts serves as the backbone of your financial entity, allowing you to track your business's financials. In Rent Manager , the chart of accounts uses general ledger (GL) accounts, or chart accounts, to describe where money comes from and goes, and how it is held, disbursed, and paid.

 In Rent Manager , you can replace the master chart of accounts for all properties. For example, you might need to replace your chart of accounts due to a changed business model that requires a major restructuring, or a significant evolution in your business resulting from a large merger or acquisition.

 When creating a new chart of accounts, it is advisable to follow best accounting practices, such as those outlined in the Continuing Professional Education (CPE) or National Association of Residential Property Managers (NARPM) certifications.

 Warning

 Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 More Information

 Creating a new chart of accounts involves deleting the existing GL accounts and creating new ones in Rent Manager . If you wish to customize the appearance and naming structure of individual general ledger (GL) accounts to meet the bookkeeping and reporting standards of your business, consider chart account mapping. For more information, refer to Add a Chart Account Mapping .

 Step 1: Create New GL Accounts

 The first step is to create the new GL accounts that are to replace the existing GL accounts in Rent Manager . You can manually create each new GL account in the Chart of Accounts page, or import multiple GL accounts at once. When creating new GL accounts, please review to confirm that there are no duplicate GL accounts or numbers.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 Add, View

 For more information, refer to Control User Access .

 Warning

 It is strongly suggested to not deactivate or replace—but just rename if applicable—any GL accounts or charge types designated as system accounts in system preferences if they have been in use. Under the General Ledger tab in system preferences, please review the System Accounts and System Charge Types pages. For more information, refer to General Ledger System Accounts (System Preferences) and General Ledger System Charge Types (System Preferences) .

 To create replacement GL accounts, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The Chart of Accounts page displays.

 -
 Assess the existing GL accounts in Rent Manager and determine which you wish to keep and which to deactivate. Consider inserting an indicator, such as z , for example, in front of the GL account numbers you wish to deactivate.

 More Information

 MICR information for bank accounts needs entered directly to the GL account details. For more information, refer to Set Up MICR for Checks and Deposits .

 -
 Click Add GL Account to add the new GL accounts that will replace the existing ones.

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

 More Information

 You can add multiple GL accounts at once with an import to reduce the time spent on data entry. A chart of accounts can be imported via a comma-separated values (CSV) file or other file type that uses supported delimiters. For more information, refer to Import Chart of Accounts .

 -
 Review to confirm you do not have duplicate GL accounts or numbers.

 -

 To finish, click Save & Close , or to create additional accounts, click Save & New .
The GL account(s) is available for use.

 Step 2: Update Charge Types

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 Add, Edit, View

 For more information, refer to Control User Access .

 Once the new GL accounts are created in Rent Manager , assign them to their respective charge types in Rent Manager .

 To update the charge types, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Charge Types .
The Charge Types page displays.

 -
 Select the charge type that is to be updated.
The Charge Type page displays.

 -
 Select the corresponding newly created GL account from the GL Account drop-down list.

 -
 Check Active to activate the charge type to be assigned to transactions linked to the GL account.

 -
 The fields Description , Default Amount , Prorate by Day , and CRE Charge Type are optional, and can be filled out as needed. For more information, refer to Charge Type Details (Page) .

 -
 Click Save .
The charge type is updated.

 Step 3: Merge Newly Created GL Accounts to the Old Ones

 Merging GL accounts updates all existing transactions in Rent Manager by mapping transactions from the source account to the new destination GL account.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Edit, Delete

 Merge GL Accounts
 Enabled

 For more information, refer to Control User Access .

 To merge the GL accounts, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Merge GL Accounts .
The Merge GL Accounts pop-up displays.

 -
 In the Source Account field, select the existing GL account that is to be replaced.

 -
 In the Destination Account field, select the replacing newly created GL account.

 -
 Check Remove Original Account to delete the GL account selected as the Source Account after merging.

 -
 The fields Vendor Filter and Date Filter are optional, and can be filled out as needed. For more information, refer to Merge GL Accounts .

 -
 Click Merge & New to merge another GL account or Merge & Close to close the Merge GL Accounts pop-up.
The Confirm Merge pop-up displays.

 -
 Click OK .
The GL accounts have merged successfully.

 Step 4: Delete Old Rent Manager GL Accounts

 If the GL accounts that are to be replaced were not deleted or deactivated after merging, you can do so now. A GL account can be deleted only if there are no charge types and/or transactions linked to it. You must transfer the transactions to another bank account and link the charge type to a different account before you can delete the GL account.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Delete

 For more information, refer to Control User Access .

 Warning

 Deleting a GL account is permanent and cannot be undone. If you no longer wish to use an account, instead of deleting it, consider marking it as inactive. This allows you to retain financial data attached to that GL account while removing it from available GL accounts for future transactions. For more information on how to make a GL account inactive, refer to Chart of Accounts (Page) .

 To permanently delete the old GL accounts that are replaced, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The Chart of Accounts page displays.

 -
 To the right of the old, now replaced, GL accounts, click arrow_forward Delete .
The Confirm Delete pop-up displays.

 -
 Click Yes .
The new GL accounts have now replaced the old ones, and your new chart of accounts in Rent Manager is ready for use.
