# Add a Bank Account

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/COA-Add-Bank.htm

A bank account is a type of general ledger (GL) account that allows you to track your financial records based on your real-life bank accounts. For example, one property might use US Bank while another uses Chase Bank, which means transactions for each property need to be tracked separately in individual GL accounts. GL bank accounts are essential to ensuring your Rent Manager  records match your real-life finances when performing actions such as bank reconciliations or running a Check/Deposit Listing report.

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

 To add a new bank account, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The GL Accounts page displays.

 -
 Click Add GL Account .

 -
 Enter the following information for a new bank account:

 Field
 Description

 Type

 Account types impact your financial reporting and the organization of all financial data. Indicating that an account is a Bank type account causes this account to show as an asset on reports, such as the Financial Statement .

 GL Account No

 A unique alphanumeric account number to be used as a system-wide identifier for the new account. The next available account number automatically populates based on the Type you select.

 If you are building on the Rent Manager default chart of accounts, it is recommended you follow the existing numerical system to keep your chart of accounts clean and easy to follow. The default numbers for bank accounts label them as assets, so your bank account should be assigned a number from 1000 to 1999.

 Name

 A unique name that matches your real-life bank account to identify its purpose at a glance. This name displays when writing checks from this account and on some reports, such as the Balance Sheet and Financial Statement reports.

 Account No

 The account number for the actual bank account outside of Rent Manager . This number is visible only from the GL Accounts page. If you wish to print checks with MICR information for this account or use ePay and/or NACHA to process payments, this field is required.

 Description

 A more detailed summary of the account. This is for internal use and does not display on reports, but is useful when determining differences between various bank accounts that are similarly named and numbered.

 Subaccount of

 If this account is a child account of a different account, search for a bank account from the drop-down list to act as the parent account for this new bank account. Organizing bank accounts as child and parent accounts allows them to display together on reports such as the Balance Sheet .

 Parent accounts are like category headings, with actual finances tracked in the subaccounts. In the following example, the 1006 Mountaintop account acts as a parent account, and accounts 1016 and 1017 are subaccounts to specifically track different transactions.

 Because finances are tracked in the subaccounts, it is a best practice to not use parent accounts to track transactions in Rent Manager .

 Warning

 If you choose a parent account, it must be a Bank type GL account. If you choose a parent account of a different type, your new account automatically switches to the parent account's GL account type.

 ODFI Banks

 If this bank is used for ACH payments, select a NACHA-compliant bank for bank-to-bank transfers.

 Related Preferences

 This option displays only if a NACHA ODFI-enabled bank is mapped to a bank account created in Rent Manager . For more information, refer to NACHA Settings (System Preferences) .

 Selected Users

 The users who require access to the bank account.

 Active

 This option is checked by default, allowing the account to be assigned to transactions for tracking the applicable financial data.

 More Information

 Uncheck this box as an alternative to deleting the bank account to ensure that the account is not used but all historical data remains. For more information, refer to Delete a General Ledger Account .

 -
 To finish, click Save & Close , or to create additional accounts, click Save & New .
The bank account is added to the GL Accounts page and can be used to track finances throughout Rent Manager .
