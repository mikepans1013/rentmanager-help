# Merge GL Accounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Merge-GL-Accounts.htm

If you have two general ledger (GL) accounts that are used for similar transactions and you want to merge the two accounts, you can move all the transaction data from one account to the other. When merging the two accounts, you have the option of maintaining or deleting the source account. You can also limit the conversion to account data associated with a specific vendor over a specified time period.

 To merge two accounts into one, both accounts must be of the same account type (e.g., expense accounts must be merged into other expense accounts) and they must both be at the same level (e.g., a subaccount cannot be merged with a parent account).

 Warning

 Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Edit

 Merge GL Accounts
 Enabled

 To merge bank or credit card accounts, you must also have access to those accounts on the user's details page. For more information, refer to Control User Access .

 To merge GL accounts, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Merge GL Accounts .

 -
 In the Source Account field, select the GL account to be absorbed into another account.

 -
 If you wish to consolidate only GL account data associated with a specific vendor account, in the Vendor Filter field, select that vendor. Only GL account data from the Source Account associated with that vendor will be merged.

 -
 If you wish to consolidate only GL account data from a specific date range, in the Date Filter field, set the To and From dates. Only GL account data from the Source Account dated on or between the entered dates will be merged.

 -
 In the Destination Account field, select the GL account that absorbs the data from the selected Source Account based on your filter settings.

 -
 To delete the GL account selected as the Source Account after the merge is complete, check Remove Original Account .

 More Information

 If either Date Filter or Vendor Filter are selected above, you cannot check Remove Original Account because GL accounts with existing data cannot be deleted. If you wish to no longer use the GL account set as the Source Account after the merge, you can set that GL account to inactive. For more information, refer to Chart of Account Details (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Delete

 For more information, refer to Control User Access .

 -
 Click Merge .
The Confirm Merge pop-up displays.

 -
 On the pop-up, click OK to confirm the action.
 Rent Manager is updated with your changes.
