# Estimates Process and Workflow

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Estimate-Process-Workflow.htm

Estimates allow you to record the anticipated parts and labor needed to complete a project, itemize the costs, and provide a total amount due, including any markups and/or taxes you add. After you have saved the estimate, you can send it to an owner or tenant for their approval. The recipient can then review the estimate and either approve it or reject it.

 When an estimate is approved, you need to create a purchase order for the work and/or items requested on the estimate, add a bill to pay the vendor for those expenses, and, if applicable, send an invoice to the owner or tenant to reimburse you.

 Step 1: Create the Estimate

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Estimates
 Add, View

 For more information, refer to Control User Access .

 Creating an estimate allows you to record a project's anticipated parts and labor, itemize the costs, and provide a total amount due so that the recipient can better plan their budget or finances around it.

 For more information, refer to Add an Owner Estimate or Add a Tenant or Prospect Estimate .

 Step 2: Send for Approval

 Related Privileges

 Group
 Privilege
 Column

 System
 Send Email
 Enabled

 POs/Estimates
 Estimates
 View

 View estimates from all users
 Enabled

 For more information, refer to Control User Access .

 After you have saved the estimate, you can send it to an owner, tenant, or prospect for their approval. The recipient can then review the estimate and either approve it or reject it.

 To send an estimate for approval via email, do the following:

 -
 Go to arrow_forward Receivables arrow_forward General arrow_forward Estimates .
The Estimates page displays.

 -
 For the estimate you wish to send, click arrow_forward Email Estimate .
The Email Custom Form pop-up displays.

 -
 In the Select a Report field, select the estimate format you wish to send. The options that display are determined by the custom forms for estimates entered in your database. At this time, custom forms can be created only in Rent Manager 12 .

 -
 Click Continue .
The Compose Email pop-up displays.

 -
 Fill out the fields and body of the email. By default, The email address on the recipient's account populates, and the estimate is automatically added as an attachment. For more information, refer to Send an Email .

 -
 Click Send .
The email and attached estimate are sent to the owner, tenant, or prospect for them to review. When they respond with their decision, you can update the Status on the estimate to Approved or Rejected .

 More Information

 If you are sending an estimate to an owner with an Owner Web Access (OWA) account, you can alternatively set the estimate's Status to Awaiting Approval , which allows them to respond to the estimate directly from their portal. For more information, refer to Send Estimates for Approval .

 Step 3: Create the Purchase Order

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View, Edit

 Estimates
 View

 View estimates from all users
 Enabled

 For more information, refer to Control User Access .

 Once the estimate is approved, you can create a new purchase order (PO) that is linked directly to the expenses on the estimate. This allows you to track associated orders for inventory items or labor from vendors.

 To add a PO that is linked to the estimate, do the following:

 -
 Go to arrow_forward Receivables arrow_forward General arrow_forward Estimates and select an estimate from the list.

 -
 On the Links tile, click Add Purchase Order Link .
The Create A Link pop-up displays.

 -
 Click Yes , then the Vendor field, select the company or contractor providing the inventory items in the PO. If this is a tenant estimate and the tenant has multiple leases, select the Lease associated with this PO.

 -
 Click Save .
The newly generated PO link is added to the Links tile and a history/note item is added to the estimate's History/Notes pop-up.

 -
 In the Links tile, select the newly created Purchase Order # .

 -
 Enter and verify the PO's details. For more information, refer to Add a Purchase Order .

 -
 Click Save .
The linked PO is saved.

 Step 4: Approve and Complete the Purchase Order

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 View, Edit

 Approve purchase orders
 Enabled

 Fulfill purchase orders
 Enabled

 For more information, refer to Control User Access .

 If the PO's expenses are approved, you need to update its status to Approved . Then, once the purchase order's request is fulfilled (e.g., items delivered or labor completed), you can complete and close the PO.

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Purchase Orders and select the linked PO from the list.
The PO's details page displays.

 -
 In the general information tile, click Approve .

 The Approve Purchase Order pop-up displays.

 -
 Click Yes .
The PO is approved.

 More Information

 If you utilize purchase order workflows that require specific users to perform certain parts of the process, you may need to complete additional steps before the purchase order is complete. For more information, refer to Purchase Order Workflow Process .

 -
 Once the ordered item(s) arrive or the work is completed, in the general information tile, click Receive .
The Fulfill Purchase Order pop-up displays.

 -
 Click Yes .
The PO's status is updated to Fulfilled .

 -
 Click Close PO .
The PO is closed and its status is updated to Fulfilled - Closed .

 Step 5: Pay the Vendor

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 View, Edit

 Payables
 Bills
 Add, View, Edit

 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 With the PO fulfilled and closed, you can create a bill to pay the vendor for their work on the PO's details page.

 To create and pay a vendor bill from a PO, do the following:

 -
 On the PO's details page in the Links tile, click Add .

 The Add Bill pop-up displays.

 -
 In the Billing Qty column, enter the quantity of each line item to be paid by the bill. For example, you may wish to bill an owner only for half of the cost of parts while your management company covers the other half.

 -
 In the Bill Attachments section, click Upload or Paste to attach any files, images, or documents associated with the bill (such as a copy of the bill that is being paid).

 -
 Click Add Bill .
The bill is created and displays in the PO's Links tile.

 -
 In the Links tile, click the bill's date.

 -
 Enter and/or verify the bill's details. For more information, refer to Add a One-Time Vendor/Owner Bill .

 -
 If you have bill approval enabled in system preferences, select Approve , then click Save . For more information, refer to Checks/Bills General (System Preferences) .

 Related Privileges

 To approve a bill for payment, the privileges required depend on the amount of the bill.

 Group
 Privilege
 Column

 Payables
 Approve bills less than or equal to tier 1
 Enabled

 Approve bills less than or equal to tier 2
 Enabled

 Approve bills less than or equal to tier 3
 Enabled

 Approve all bills
 Enabled

 For more information, refer to Control User Access .

 -
 Click Pay Bill .

 -
 Enter information about the payment in the following fields:

 Field
 Description

 Comment

 An optional note that provides further context for this payment. The note displays in the Comment column on Vendor Transactions pop-up and in the check's Memo field.

 To select a memorized comment, click .

 Consolidate By Vendor

 Combines bills from a specific vendor into a single payment. The selected bills with the same Vendor , Bank , and Pay Method are paid together with a single check or payment transaction.

 Mark check(s) to be printed

 Indicates you want to print the check(s) from Rent Manager for the bill(s) being paid.

 Payment Date

 The date on which the payment was issued. This date should match your real-world financial records to prevent any issues with reconciliation. By default, the current date populates.

 -
 Click Pay to create payment transactions in Rent Manager . Or, if Mark check(s) to be printed is selected, click Pay & Print Checks to pay bills and open the Print Checks pop-up to print the checks immediately.
The bills are marked as paid and can be located on the Bills page when Show unpaid bills only is unchecked.

 Step 6: Create an Invoice

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 If you need to bill an owner or tenant for any expenses stemming from the original estimate, such as parts and labor, you can create a new invoice that is linked directly to the bill. These invoices are displayed on the owner or tenant account and added to their balance due.

 Related Preferences

 In order to add a linked invoice directly from the bill, the Enable billable expenses option must be selected in system preferences. If it is not enabled, you need to manually create the invoice and it cannot be linked to the bill. For more information, refer to Checks/Bills General (System Preferences) .

 To create an invoice from a bill, do the following:

 -
 On the bill's details page, check the Billable column on the line item(s) the tenant or owner is being expensed for.

 The Billable To and Markup columns are made available.

 -
 Enter information in the Billable To and Markup columns:

 Column
 Description

 Billable To

 The owner or tenant being charged for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since 25% of 400 is 100.

 -
 Click Save .
The bill is updated with your changes.

 -
 In the Billable column, click .

 -
 Verify that the correct Owner or Tenant and management company Property are selected. For more information, refer to Bill Back an Owner for Property Expenses or Bill Back a Tenant for Property Expenses .

 -
 Enter the invoice's details. For more information, refer to Add an Invoice .

 -
 Click Save & Close .
The invoice is created and can be sent to the owner or tenant to collect payment.
