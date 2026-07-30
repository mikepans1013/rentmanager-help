# Review Smart Receipts

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Smart-Receipts-Review.htm

Smart Receipts allow you to take photos of receipts from purchases you made for your business using rmAppSuite Pro or directly in Rent Manager . Once uploaded, Orion AI helps quickly and efficiently generate credit card transactions in Rent Manager by pulling information from that receipt photo and inserting it into the transaction record. Orion AI also helps automatically match information on the receipt to existing accounts in Rent Manager , such as vendors and credit card numbers.

 From the Smart Receipts Review page, you can view the information for each Smart Receipt transaction to verify its accuracy or correct mistakes before posting it to the credit card register. You can opt to skip a receipt, post it, or save them for later posting. You can also cycle through each Smart Receipt awaiting review and posting without leaving the page.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Smart Receipts
 View, Edit

 Credit Card Transactions
 Add

 For more information, refer to Control User Access .

 Step 1: Review Receipt

 To review the accuracy of your Smart Receipts, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Smart Receipts .
The Smart Receipts page displays.

 -
 At the top, click Review All .

 -
 In the first tile for general information, check the Receipt Type field and verify if the selected option is correct.

 Option
 Description

 Company Credit Card

 Indicates that the purchase was made using the company credit card account.

 Reimbursement

 Indicates that a Rent Manager user made the purchase out of pocket and needs to be reimbursed by the company.

 -
 On the first tile of general information, verify and correct any information in the available fields. The fields that display vary depending on the Receipt Type . If Reimbursement is selected, some fields display only if you click Show Additional Fields .

 More Information

 Fields highlighted with a light green background indicate that the data in that field was pulled from the receipt or matched to a Rent Manager account by Orion AI . If Orion AI was unable to match the information to an existing Rent Manager account, the field is highlighted in a red background. If the field is matched to an account but not yet linked to the account, Orion AI prompts you to link the account.

 Default Field
 Description

 Amount

 The total dollar amount of the Smart Receipt transaction.

 If you have multiple line items listed below, click to populate the total of all amounts in the items' Amount column.

 Memo

 An additional note providing further information or a general comment regarding the transaction. To use a memorized comment, click .

 Receipt Type

 Indicates whether the receipt is a Company Credit Card purchase or Reimbursement for a user who made the purchase.

 Submitted By

 The user who uploaded the Smart Receipt via Rent Manager or rmAppSuite Pro . This field cannot be edited.

 Vendor

 The vendor account associated with the Smart Receipt transaction.

 More Information

 You can use aliases to improve Smart Receipts matching by identifying additional property addresses and vendor names that display on the invoices and matching them to existing Rent Manager records. Aliases can be automatically created through the Smart Receipt Review page, or added manually to ensure accurate matching. For more information, refer to Manage Aliases (Page) .

 Company CC Field

 Description

 Create Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 If selected, a bill is created when the Smart Receipt is posted.

 Related Preferences

 This option is available only if the Allow bill payments with credit cards option is enabled in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 The fields below are made available. Some fields display only if you click   Show Additional Fields .

 Bill Date

 The date on which the bill is issued.

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, you can manually enter a custom due date.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Pay Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 If selected, the bill created when the Smart Receipt is posted is immediately paid.

 Related Preferences

 If the Require bills to be approved before they can be paid option is enabled in system preferences, bills cannot be paid while posting a Smart Receipt. For more information, refer to Checks/Bills General (System Preferences) .

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Terms

 The amount of time before the bill is considered due. The bill term determines the bill's Due Date based on the entered Bill Date .

 For example, a bill term of Immediately would set both fields to the same date, while NET 15 would set the due date for fifteen days after the bill date.

 More Information

 The options available depend on the bill terms that have been created for your Rent Manager database. For more information, refer to Bill Terms (Page) .

 Credit Card

 The company credit card to which these transactions are being posted.

 Related Privileges

 This field populates with only credit cards to which you have access. Your access to credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Date

 The date on which the transactions are posted to the credit card.

 Reference

 A unique number or note to identify this receipt, such as the physical receipt's number.

 Reimbursement Fields

 Description

 Bill Date

 The date on which the bill is issued.

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, you can manually enter a custom due date.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Reimburse To

 The Rent Manager user being reimbursed for the expense they paid out of pocket. This user is chosen when creating a Smart Receipt in rmAppSuite Pro and cannot be edited from this page.

 Terms

 The amount of time before the bill is considered due. The bill term determines the bill's Due Date based on the entered Bill Date .

 For example, a bill term of Immediately would set both fields to the same date, while NET 15 would set the due date for fifteen days after the bill date.

 More Information

 The options available depend on the bill terms that have been created for your Rent Manager database. For more information, refer to Bill Terms (Page) .

 -
 On the second tile for attachments, review the information in the available fields:

 Field
 Description

 Default Bank

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page. This field displays only if the Receipt Type is set to Reimbursement .

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Payment Method

 The method by which the bill is paid such as check, debit, or automated clearing house (ACH). This field displays only if the Receipt Type is set to Reimbursement .

 Work Order Links

 To attach a related work order associated with a service issue to the bill, click Link Work Order .

 Once a work order is linked to a bill, you can click the work order to view it in a separate window. This field displays when the Receipt Type is set to Reimbursement , or when the Receipt Type is set to Company Credit Card and the Create Bill option is enabled.

 Step 2: Verify Attachments and Purchases

 Once you have verified the general information, you can review the images of the receipts for accuracy. Do the following:

 -
 On the second tile in the Attachments field, click the image name for the first receipt image to view the image copy of the receipt.

 -
 In the section below for line items, review each purchased item and compare it to the items on the receipt images.

 Verify that each line item in the grid tile matches the line items on the receipt images and linked to the correct accounts. Long receipts are documented as multiple images of each section of the receipt. The following columns are available:

 Column
 Description

 1099

 If checked, this line item is reported as a 1099 expense for tax write-offs for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on account's Owner 1099 or Vendor 1099 reports. For more information, refer to Owner 1099 (Report) or Vendor 1099 (Report) .

 Amount

 The dollar amount of the individual line item.

 Expense Account

 The GL account used to track this line item's expense. If the selected vendor has a default expense account, that account populates by default.

 Job

 If applicable, the job costing project with which this expense is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this item is for those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 A short description of the item being purchased for this line item, such as kitchen tiles or AC unit .

 Property

 The property to be expensed for the line item purchase.

 By default, this matches whatever property is selected on the first tile and this column cannot be edited. If <Multiple Properties> is selected on the first tile, you can assign each line item to different properties in this column.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, the unit associated with the line item purchase. If the expense applies only to the property as a whole, leave this field blank.

 - If there are additional attached images, review those and compare them to the line items to ensure all information is there and correct.

 - To add any additional line items, click Add Detail . To split or duplicate the total amount of the transactions automatically among multiple properties, units, or GL accounts, click Disburse Amount . For more information, refer to Disburse Amount .

 Step 3: Post the Smart Receipt

 After you've verified all information is complete, at the bottom of the page, select one of the available options.

 Option
 Description

 Post

 The Smart Receipt is posted as a credit card charge to the selected credit card account. If the Receipt Type is set to Reimbursement , a bill is also created that bills the company to pay the user back for the purchase.

 Related Privileges

 If the Receipt Type is set to Reimbursement , the following privilege is required.

 Group
 Privilege
 Column

 Payables
 Bills
 Add

 For more information, refer to Control User Access .

 More Information

 If you clicked on a specific Smart Receipt to review, or you clicked Review All but there is only one receipt left to review, the option displays as Post and Close . The functionality is the same, but the pop-up closes instead of proceeding to another receipt.

 Save for Later

 Saves any changes made on the current Smart Receipt, then proceeds to the next Smart Receipt in the list without creating a credit card transaction or bill.

 Skip

 Jumps to the next Smart Receipt in the list. No changes are saved to the current Smart Receipt and no credit card transaction or bill is created.

 Alternatively, at the top of the page, you can click to view the previous Smart Receipt and to jump to the next one.

 The next Smart Receipt in the list displays. Repeat the review process for all Smart Receipts.
