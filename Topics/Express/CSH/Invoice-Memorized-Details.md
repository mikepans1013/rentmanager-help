# Memorized Invoice Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Invoice-Memorized-Details.htm

The Memorized Invoice page displays invoices that are saved as templates to make it easier to create similar invoices in the future. You can either create a memorized invoice from scratch, or you can memorize an existing invoice into a template.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a memorized invoice, go to arrow_forward Receivables arrow_forward General arrow_forward Memorized Invoices and select a memorized invoice from the list.

 Memorized Invoice Recipient Information

 This tile displays the following information about the sender and recipient of the invoice:

 Field
 Description

 Invoice Type

 The account type that is receiving the invoice. In the drop-down, select Tenant , Prospect , or Owner . Then, select an account in the search box.

 Unit/Property

 For a Tenant invoice, the unit the invoice is associated with. For a Prospect or Owner invoice, the property the invoice is associated with.

 From

 The name and address of the property that receives the payment from this invoice.

 To

 The invoice recipient's name, address, and associated property or unit.

 Memorized Invoice Information

 This tile displays the following general information about the memorized invoice:

 Field
 Description

 Memorized Name

 The internal name for the memorized invoice template.

 Memorized Description

 A short internal description of the memorized invoice, which displays on the Memorized Invoices page.

 Term

 The amount of time after creation before the invoice is due. For more information, refer to Bill Terms (Page) .

 Sales Representative

 The user responsible for creating the charge or selling the associated inventory item to the invoice recipient.

 Comments

 An optional comment that provides more information about the invoice.

 Tax Information

 This tile displays information about tax rates applied to the inventory item(s) in this memorized invoice.

 Field
 Description

 Taxable

 A indicates that tax is calculated for taxable items (line items with a in the T column) and included in the invoice Total . When this option is checked, the Tax Type and Tax % fields become available for you to enter the actual tax rate to be applied.

 Taxable Amount

 The running sum of the line item Total for items with the T column checked. This Taxable Amount is multiplied by the Tax % to calculate the actual Tax applied to the transaction.

 Tax Type

 If applicable, the tax type to be applied to taxable items. For more information, refer to Tax Types (Page) .

 Tax %

 The tax percentage rate to be applied to the total of taxable items displayed in Taxable Amount .

 Link to Issue

 If the invoice is linked to a service issue, you can open the issue details by clicking Link to Issue .

 Product Line Items

 This section displays the purchased item(s) associated with the memorized invoice.

 Column
 Description

 Product

 The inventory item the invoice was billed for.

 Quantity

 The number needed of the specified item.

 Description

 A brief description of the product or service.

 Linked Expense

 If applicable, the general ledger expense account linked to the inventory item on the invoice.

 Charge Type

 The associated charge type for the line item. A one-time charge of the selected type is created and added to the tenant's, prospect's, or owner's details page when the invoice was issued.

 Rate

 The total dollar amount charged to the recipient for the line item.

 Tax

 A indicates that this item is taxable.
 This column displays only when Taxable is checked.

 When Tax is checked, the Amount for this line item is added to the Taxable Amount . When a Tax Type and Tax % are specified, their tax percentage is multiplied by the Taxable Amount to get the actual Tax applied to the transaction.

 Amount

 The calculated cost of the specified Product and Quantity , including any tax or markup, using the following formula:

 Amount = Quantity * (Cost + Tax + Markup)

 This section also displays the following total amounts:

 Field
 Description

 Sub Total

 The sum of the base costs of all items included in the invoice as they display on the inventory item's details page.

 Tax Amount

 If a Tax % is specified, this field displays the overall tax calculated on the taxable items (items with the Tax column checked) in the invoice using the following formula:

 Tax Amount = Taxable Amount * Tax %

 Total Amount

 The final total dollar amount of all items for the invoice using the following formula:

 Total Amount = Sub Total + Markup Total + Tax
