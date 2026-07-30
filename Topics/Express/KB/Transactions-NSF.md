# Reverse a Payment for Non-Sufficient Funds (NSF)

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Transactions-NSF.htm

If you receive a payment that has insufficient funds to cover the amount, you can reverse the payment recorded in Rent Manager . Reversing the payment as non-sufficient funds (NSF) creates an adjustment charge for the payment amount and also gives you the option to charge a fee.

 You can reverse payments as NSF on tenant, prospect, and owner accounts. Reversing payments as NSF in Rent Manager allows you to keep the original transaction history intact and match your bank finances, including times where there was not enough money in the account to cover the payment, so you can keep track of outstanding charges or other issue patterns with payments you might encounter.

 NSF Payment Reversal

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 Owners
 Owners
 View, Edit

 Receivables
 Allow to NSF/Void a payment
 Enabled

 For more information, refer to Control User Access .

 To reverse a payment for non-sufficient funds, do the following:

 -
 Go to the account where the payment is located using one of the following navigation paths:

 Entity
 Navigation

 Tenant

 arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant. Then, on the Transactions tile, click .

 Prospect

 arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect. Then, on the Transactions tile, click .

 Owner

 arrow_forward Owners arrow_forward General arrow_forward Owners and select an owner. Then, on the Management Company tile, click .

 -
 For the payment to reverse, click arrow_forward NSF .
The Payment Reversal pop-up displays.

 -
 At the top, ensure the Reversal Type is set to NSF .

 -
 In the Reversal Options section, enter the reversal information in the available fields.

 Field
 Description

 Add History/Note

 Check to record a note in the account's history that a payment reversal was performed on the account. For more information, refer to Tenant History/Notes (Pop-Up) , Prospect History/Notes (Pop-Up) , or Owner History/Notes (Pop-Up) .

 Date

 The date on which the bank informed you that the payment was returned due to insufficient funds.

 Distribute Fee

 Check to allocate the fee charge to multiple leases.

 Fee Charged To

 The lease where the fee charge is to be applied.

 If Distribute Fee is checked, all available leases display in the Lease column and a fee can be charged to each listed lease.

 NSF Fee

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Override default NSF fee when processing NSF payments
 Enabled

 For more information, refer to Control User Access .

 The dollar amount to charge the account for this payment reversal. This fee is separate from the adjustment charge created by the reversal.

 If Distribute Fee is checked, enter the dollar amount to charge for each lease in the Fee Amount column.

 Related Preferences

 This field automatically populates with the default amount associated with the charge type selected in Non-Sufficient Funds Fees system preferences. The amount that displays in this field can be overridden by a user with the Override default NSF fee when processing NSF payments privilege. When overridden, the property's custom NSF fee amount populates this field.

 For more information, refer to General Ledger System Charge Types (System Preferences) .

 Reason

 The cause of the payment reversal. By default, Insufficient Funds populates.

 -
 Click Apply .
The payment is reversed and any NSF fees are added to the account.

 Results of an NSF Payment Reversal

 When a payment has been reversed for non-sufficient funds, both the entity's account and your bank register are updated in Rent Manager to reflect this reversal.

 Account Transactions

 The image below shows the account's transactions. At the bottom displays the payment that had insufficient funds with the amount in red text to mark that it was reversed. Above is the adjusting charge for that payment, showing that the account still owes that amount, as well as an additional charge for the NSF fee applied. These adjustments update the account's Balance to show they still need to pay that charge since their original payment did not cover it.

 Bank Register

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 View bank registers
 Enabled

 For more information, refer to Control User Access .

 To view the impact of the NSF reversal on your bank register, go to   arrow_forward Accounting arrow_forward Banking arrow_forward Bank Register and select the Bank account where the original payment was deposited.

 More Information

 If you are unsure which bank was used to deposit the payment, on the original payment, click arrow_forward Details to open the payment information. Then in the Deposit # field, click the link on the deposit number to open the deposit details and locate the Bank Account . For more information, refer to Make a Bank Deposit .

 The payment reversal displays in the bank register as a Payment , meaning that it has taken that payment amount out of the bank's balance to account for the insufficient funds.
