# Transfer Money Between Bank Accounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Transactions-Transfer-Money-Between-Banks.htm

Real-world money transfers between banks should be reflected in Rent Manager to maintain the accuracy of your financial records. When you move money between bank accounts (for instance, if you manage properties across international regions and need to do currency conversions), you can reflect that in Rent Manager with a journal entry that credits the source bank and debits the destination bank. Alternatively, you can write a check from the source account that expenses the destination account. When you transfer funds, be sure to account for any relevant fees or costs, such as management fees and maintenance costs.

 More Information

 This topic is specifically for transferring money between bank accounts for the same property. For information on how to transfer funds between different properties, refer to Transfer Money Between Properties .

 Option 1: Create a Journal Entry

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 Creating a journal entry is the preferred method of transferring money in Rent Manager . A journal entry will credit the source account to decrease the balance, and debit the destination account to increase the balance.

 To transfer funds via a journal entry, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Journals arrow_forward Journals .
The Journals page displays.

 -
 Click Add Journal .
The Add Journal pop-up displays.

 -
 In the top section, enter the applicable information into the following fields:

 Field
 Description

 Date

 The date on which the funds are being transferred.

 Reference

 A number or combination of letters and numbers used to easily identify the journal entry.

 Memo

 A brief note that provides further information about the purpose of the journal entry (e.g., Funds transfer to new bank ).

 Basis

 It is recommended that the option Both is selected to ensure that this transaction is included in reports regardless of the selected accounting method.

 -
 In the grid below, click Add Item .
A new row displays in the grid.

 -
 In the columns described below, enter the information to credit (move funds out of) the source bank.

 Column
 Description

 Account

 The source bank account from which funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The property to which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 Enter the amount of money being transferred out of the source bank account.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to debit (move funds into) the destination bank.

 Column
 Description

 Account

 The destination bank account to where the funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The property involved in the funds transfer. This must be the same property selected in the previous row.

 Debit

 Enter the amount of money being transferred into the destination bank account. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 -
 Click Save .
The journal entry is created and the movement of the funds is documented in Rent Manager .

 Option 2: Write a Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 Write checks from banks that are not default
 Enabled

 For more information, refer to Control User Access .

 If your company does not use journal entries or you do not have access to create journal entries, an alternative method to transferring funds is to write a check that reduces the balance of the source account by making a payment to the destination account. This method works only if the selected property has access to both bank accounts.

 To transfer funds via a check, do the following:

 -
 Go to arrow_forward Payables arrow_forward Checks arrow_forward Write Check .
The Write Check pop-up displays.

 -
 In the top section, enter the applicable information into the following fields:

 Field
 Description

 Property

 The property to which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 No.

 The payment method used to transfer the funds in the real world. For example, if the funds were transferred via a real check, enter that check number. If the funds were transferred via an ACH transaction, enter ACH .

 Bank

 The source bank account from which funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Date

 The date on which the funds are being transferred.

 Vendor

 Ensure that Vendor is selected for the payee type, then select your property management company vendor account from the drop-down list.

 Memo

 A brief note that provides further information about the purpose of the check (e.g., Funds transfer to new bank ).

 -
 In the grid below, enter the account information into the following columns:

 Column
 Description

 Property

 The property involved in the funds transfer. This should be the same property selected in the field above.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Expense Account

 The destination bank account to where the funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Amount

 Enter the amount of money being transferred out of the source account (selected in the Bank field) and into the destination bank account (selected in the Expense Account column).

 -
 In the top section next to the Amount field, click to pull in the total transfer amount from the Amount column.

 -
 Click Save & Close .

 -
 Click Yes on the pop-up that displays warning you that the default bank account does not match the selected bank.
The check is created and the movement of the funds is documented in Rent Manager .
