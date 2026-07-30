# Transfer Money Between Properties

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Transactions-Transfer-Money-Between-Properties.htm

Real-world money transfers between different properties and associated bank accounts should be reflected in Rent Manager to maintain the accuracy of your financial records. A journal entry allows you to reflect the transfer. Rent Manager uses double-entry bookkeeping to track all accounting records, meaning you need to use an offsetting General Ledger (GL) account, such as a pass-through account, to move the money between properties.

 More Information

 This topic is specifically for transferring money between bank accounts at different properties. For information on how to transfer funds between bank accounts at the same property, refer to Transfer Money Between Bank Accounts .

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 Creating a journal entry is the preferred method of transferring money in Rent Manager . A journal entry credits the source account to decrease the balance, and debit the destination account to increase the balance.

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
 In the grid below, click   Add Item .
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

 The property from which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 The amount of money being transferred out of the source bank account.

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

 The destination property involved in the funds transfer.

 Debit

 The amount of money being transferred into the destination bank account. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to debit the offsetting GL account.

 Column
 Description

 Account

 The GL account being offset.

 Property

 The destination property involved in the funds transfer.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Debit

 The amount of money being transferred into the destination account. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to credit the offsetting GL account.

 Column
 Description

 Account

 The GL account being offset.

 Property

 The property from which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 The amount of money being transferred out of the source bank account.

 -
 Click Save .
The journal entry is created and the movement of the funds is documented in Rent Manager .
