# Move a Payment between Different Properties

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Transactions-Move-Payment-Different-Property.htm

Handling transactions is a big part of your business, so you need to be able to quickly and accurately record transactions on the correct accounts. If a payment is added to the wrong tenant or prospect account in Rent Manager , it may be necessary to delete the payment to fix the transaction. If the payment you wish to delete has been deposited, you must first update the deposit to remove the payment. This topic guides you through these steps to fix the tenant or prospect payment in Rent Manager .

 More Information

 This topic covers moving a payment between tenants who are at different properties. To correct a payment between two tenants at the same property, refer to Move a Payment in the Same Property .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Prospects
 View

 Receivables
 Tenant transactions
 Edit, Delete

 Take tenant payments
 Enabled

 Banks/Checks
 Bank deposits
 Edit

 For more information, refer to Control User Access .

 Step 1: Add the Correct Payment

 The first step to resolving the issue is to apply the payment correctly to the appropriate tenant or prospect. To add the right payment, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants|Prospects and select the tenant or prospect who made the payment.
The tenant or prospect's details page displays.

 -
 On the action bar to the right, click arrow_forward Add Payment .
The Add Payment pop-up displays.

 -
 Enter the payment details and select the charges to allocate the payment to. For more information, refer to Add a Payment .

 -
 Click Add Payment .
The payment is applied to the correct tenant charge.

 Step 2: Locate the Incorrect Payment and its Deposit

 Once the correct payment has been applied, the incorrect payment can be removed. If that payment was deposited, it must first be removed from the deposit. To correct this information, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants|Prospects and select the tenant or prospect that originally had the payment applied in error.
The tenant or prospect's details page displays.

 -
 On the Transactions tile header, click .
The View Transactions pop-up displays.

 -
 Click on the payment that was applied in error. If you do not see payments in the list, uncheck the View Open Receivables Only filter option.
The Payment Details pop-up displays.

 -
 In the Other Information section under the Deposit # field, click the deposit link (e.g., D1234 ).
The deposit's details page displays.

 More Information

 If the payment does not have a deposit linked in this field, it has not yet been deposited in Rent Manager . In this case, you can skip Step 3: Update the Deposit and proceed to Step 4: Delete the Incorrect Payment .

 Step 3: Update the Deposit

 If the incorrect payment was deposited in Rent Manager , it must be replaced with the correct payment in the deposit. To make this correction, do the following on the deposit's details page you opened from the payment:

 -
 On the Payments tile, click Add Payments .
The Deposit - Add Payment pop-up displays.

 -
 Locate and check the box for the correct payment that you applied in Step 1: Add the Correct Payment .

 -
 Click Add .
The Deposit - Add Payment pop-up closes.

 -
 On the Payments tile, locate the payment applied to the incorrect tenant or prospect and click arrow_forward Remove .

 -
 On the deposit's details page, click Update .

 -
 On the Confirm Deposit pop-up, click Yes .
The deposit is updated.

 Warning

 If this is a reconciled deposit, but the corrected payment being added to the deposit is the same amount as the incorrect payment being removed, then the deposit's total amount does not change and the reconciliation is not affected. However, if the payment amount is different and changes the total amount of your deposit, you may need to undo the previous reconciliation and perform a new reconciliation to correct it. For more information, refer to Roll Back a Posting and Bank Reconcile .

 Step 4: Delete the Incorrect Payment

 After adding the correct payment and updating the deposit, you can delete the payment applied in error.

 Locate the incorrect payment from Step 2: Locate the Incorrect Payment and its Deposit , click arrow_forward Delete . Then on the confirmation pop-up, click Yes .

 The payment is now correctly recorded in Rent Manager .
