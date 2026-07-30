# Make Multiple Payments in a Batch

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Transactions-Make-Payments-in-Batch.htm

When accepting payments in real life, it is just as important to record these payments in Rent Manager so that the charges are properly marked as paid and your financial data is accurate and up to date. There may be times, especially around the first of the month, where you have to accept a large number of payments at once. Rent Manager provides the batch payments tool as a way to more efficiently apply multiple payments at once to their associated charges from one page.

 If you start entering a batch of payments and navigate away from the Batch Payments page, all entered payments are saved. You can return to the page later to continue entering payments, and all payments you entered previously automatically populate when you return.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Receivables
 Take tenant payments
 Enabled

 View Other Users' Payment Batches
 Enabled

 For more information, refer to Control User Access .

 To make a batch payment, go to arrow_forward Receivables arrow_forward Payments arrow_forward Batch Payments .

 Step 1: Establish Batch Payment Settings

 Before adding payments to the batch, in the Enter Payment header, you can click Settings to open set up defaults and limit the search results for tenants by status.

 Option
 Description

 Default Payment To Full Amount Owed

 Check to automatically populate the Amount field with the account's full unpaid balance when adding a tenant or prospect to the batch payment.

 Default Memo

 Enter text to automatically populate in the Memo field for each individual payment.

 Tenant Search

 Select the desired account status(es) ( Past , Current , Future , Prospects ) to include in the results when entering a name in the Tenant field.

 Step 2: Add Payments to Batch

 In the Enter Payment section, establish the payment information for each account, including the dollar amount and reference type, and add them to the batch.

 More Information

 If you have the View Other Users' Payment Batches privilege enabled on your user account, you can click Change Batch to edit an existing payment batch that was started by another user but has not yet been posted.

 To add a tenant or prospect payment to the batch, do the following:

 -
 Enter or select information in the following fields.

 Field
 Description

 Amount

 The total dollar amount of the tenant or prospect payment.

 Date

 The date that the payment is processed. By default, today's date displays.

 Memo

 An optional comment providing additional information about the batch payment. To add a memorized comment, click .

 Properties

 The properties or property Group whose tenants and prospects are included in the search results.

 Reference

 The following forms of payment to describe the transaction are available to select:

 Cash

 Record a cash payment.

 MO

 Record a money order payment.

 CC

 Record a credit card payment.

 Check

 Manually type the check number into the Reference field to record a check payment.

 Tenant

 The tenant or prospect who is making the payment.

 Unit

 The leased unit or rentable asset that the payment is being applied to. This field is applicable only to tenants.

 More Information

 This field displays only if the following conditions are met:

 -
 The tenant has multiple leases at different properties,

 -
 At least one of those is a Manufactured Housing -type property; and

 -
 The Restrict scanned check and manual payments to a single lease when a tenant has leases at multiple properties (Manufactured Housing Only) option is enabled in system preferences.

 For more information, refer to Payment Options (System Preferences) .

 -
 Next to the Amount field, click Edit Allocations .

 -
 Verify that the Payment Amount is correct.

 -
 In the Current Payment column, enter the dollar amount(s) to allocate from this payment for each listed charge.

 -
 If applicable, in the Preallocations section, click Add Preallocation to allocate a specific dollar Amount to future charges of the selected Charge Type .

 -
 Click Apply .
The payment allocation(s) are saved.

 -
 Click Add to Batch .
The tenant or prospect payment is added to the batch. Information for payments is provided in the following columns:

 Column
 Description

 Balance

 The tenant's total open balance of unpaid charges.

 Payment

 The total dollar amount of the payment.

 Property

 The property associated with the charge being paid by this payment.

 Reference

 The form of payment used.

 Tenant

 The tenant who is making a payment as part of this batch.

 Unit

 The unit associate with the tenant's lease.

 Step 3: Post Payments

 Once all tenant and/or prospect payments are added to the batch and ready to post, do the following:

 -
 To create a deposit in Rent Manager for the payments, check Make Deposit When Posting . This is recommended only if the payment was already deposited to your bank account in the real world.

 -
 Click Post Payments .
If you did not check Make Deposit When Posting , the payments in the batch are posted to the tenant and/or prospect accounts.

 -
 If you checked Make Deposit When Posting , the Deposit Info pop-up displays. Enter or select information in the following fields.

 Field
 Option

 Bank Account

 The bank account to which the payments are deposited.

 Comment

 An optional note to further explain the deposit.

 Deposit Date

 The date that the payments were deposited to your bank account in the real world.

 Print Deposit Ticket

 If checked, Rent Manager generates a printable copy of the deposit ticket, either of a Standard Deposit or MICR Deposit ticket type, once the deposit is submitted.

 -
 Click Post Payments and Deposit .
The payments in the batch are posted to the tenant and/or prospect accounts and a bank deposit is created.

 -
 If Print Deposit Ticket is checked, the Deposit Ticket pop-up displays. In the drop-down at the top, select the Deposit Ticket Type to print.

 Ticket
 Description

 MICR Deposit

 Generates the MICR Deposit Detail report, a summary of the deposit information that can be printed onto preformatted MICR stock. For more information, refer to Set Up MICR for Checks and Deposits .

 Standard Deposit

Generates the Deposit Detail report, a summary of the deposit with its own formatting similar to other Rent Manager reports. For more information, refer to Deposit Detail (Report) .
