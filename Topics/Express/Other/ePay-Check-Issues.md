# Check ePay Issues

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/ePay-Check-Issues.htm

The ePay Issues page helps you investigate and resolve issues that occur when ePay transactions are processed. These issues are typically the result of network timeouts that occur when ePay payments are submitted. As a result of such disruptions, transaction information may not successfully transmit from Zego to Rent Manager . The ePay Issues page classifies these transactions as either auto-fix or manual-fix depending on the steps required to resolve them. Following the instructions in this topic helps ensure that ePay transactions with issues are processed and recorded correctly.

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Setup and perform ePay operations
 Enabled

 Depending on the account affected, one of the following privileges is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Prospects
 View

 Owners
 Owners
 View

 Payables
 Vendors
 View

 For more information, refer to Control User Access .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 The following columns display on the ePay Issues page:

 Columns
 Descriptions

 Account Name

 The name of the affected account in Rent Manager .

 Amount

 The payment amount associated with the transaction.

 Payment Method

 The method used to remit payment (e.g. Visa, ACH).

 Provider

 The ePay provider that processed the transaction. Currently, this is always Zego .

 Status

 A brief description of the issue, such as Transaction was not found or Declined/Failed .

 Response ID

 The Zego -generated confirmation number associated with the transaction.

 Resolve Auto Fix Issues

 Resolving auto-fix issues updates your Rent Manager database to reflect the current status of the selected ePay transaction(s).

 Warning

 Failing to correct ePay issues can prevent the affected accounts from submitting additional ePay payments and result in missing transaction data. Consequently, not fixing these issues is strongly discouraged.

 To resolve auto-fix issues, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward   ePay   arrow_forward Check ePay Issues .
The ePay Issues page displays.

 -
 In the Auto Fix section, select the ePay transaction(s) you wish to resolve.

 -
 Click Continue .
The ePay  Issues pop-up displays, confirming you have fixed the selected ePay issues.

 Resolve Manual Fix Issues

 Manual-fix issues require you to link ePay transactions to manually created payments in Rent Manager . Once the two are linked, the ePay transaction information displays on the Payment Details pop-up of the manually created payment.

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Take tenant payments
 Enabled

 For more information, refer to Control User Access .

 Column
 Description

 Account ID

 The system-generated identification number for the account.

 Account Name

 The name of the account in Rent Manager .

 Amount

 The total value of the payment posted to the account.

 Date

 The date of the payment posted to the account.

 To resolve manual-fix issues, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward   ePay   arrow_forward Check ePay Issues .
The ePay Issues page displays.

 -
 In the Manual Fix section, select the ePay transaction(s) you wish to resolve, then click Continue .
The next page for resolving manual issues displays.

 -
 If there are no manual payments in the list to match to, click Make Payment .
The Add Payment pop-up displays.

 More Information

 If the payment list already displays a matching manual payment on the appropriate date, select that payment and click Link Payment and Continue . After doing so, the ePay Issues pop-up displays confirming that the issue is fixed. Click OK to complete the process or proceed to the next ePay issue as needed.

 -
 In the Payment Info tile, enter information into the available fields to match the ePay transaction. For more information, refer to Add a Payment .

 Warning

 When adding this payment, do not check the Process via ePay box in the Payment Summary tile.

 -
 In the Open Charges tile, if applicable, select any open charges you wish to allocate this payment to.

 -
 Click Add Payment .
The Add Payment pop-up closes.

 More Information

 If the payment was not allocated to a charge, the Prepay Allocations pop-up displays. This step allows you to designate the Charge Type (s) that this payment will automatically allocate to in the future. If you wish to leave the payment unallocated for now, click Do Not Allocate . For more information, refer to Add a Prepayment .

 -
 In the payment list, select the payment you just created to link with the ePay transaction.

 -
 Click Link Payment and Continue .
The ePay Issues pop-up displays confirming that the issue is fixed.

 Warning

 If you click Continue instead of Link Payment and Continue , the ePay Link pop-up displays. By clicking Yes in that pop-up, the ePay transaction is removed from the ePay Issues page, but is not linked to a payment in Rent Manager . This action cannot be undone and should not be taken in most cases.

 -
 Click OK to complete the process or proceed to the next ePay issue as needed.
