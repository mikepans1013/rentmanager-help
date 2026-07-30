# Invoice Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Invoice-Details.htm

The Invoices page displays bills that are sent to tenants, prospects, or owners for products and services. Invoices display as new one-time charges on the tenant's, prospect's, or owner's details page.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 View, Edit

 For more information, refer to Control User Access .

 To view the details of an invoice, go to arrow_forward Receivables arrow_forward General arrow_forward Invoices and select an invoice from the list.

 Recipient Information

 This tile displays the following information about the sender and recipient of the invoice:

 Field
 Description

 From

 The name and address of the property that receives the payment from this invoice.

 Invoice Type

 The account type that is receiving the invoice. In the drop-down, select Tenant , Prospect , or Owner . Then, select an account in the search box.

 To

 The invoice recipient's name and default address.

 Unit/Property

 For a Tenant invoice, the unit the invoice is associated with. For a Prospect or Owner invoice, the property the invoice is associated with.

 Invoice Information

 This tile displays the following general information about the invoice:

 Field
 Description

 Attachments

 Any images or documents relevant to the invoice, such as a digital copy of the original invoice. To upload a file, click Upload or to paste an image from your clipboard, click Paste .

 Comments

 An optional comment that provides more information about the invoice.

 Date

 The date that the invoice was created. This should match the date that the invoice was sent to the recipient.

 Due Date

 The date by which this invoice must be paid.

 Job

 If job costing is enabled, you can assign this invoice to a specific job. All of the charges included in this invoice are tracked by the chosen job. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Sales Representative

 The user responsible for creating the charge or selling the associated inventory item to the invoice recipient.

 Term

 The amount of time after creation before the invoice is due.

 Tax Information & Issue Links

 This tile displays information about tax rates applied to the inventory item(s) in this invoice.

 Field
 Description

 Link to Issue

 If the invoice is linked to a service issue, you can open the issue details by clicking Link to Issue .

 Tax %

 The tax percentage rate to be applied to the total of taxable items displayed in Taxable Amount .

 Tax Type

 If applicable, the tax type to be applied to taxable items. For more information, refer to Tax Types (Page) .

 Taxable

 A indicates that tax is calculated for taxable items (line items with a in the T column) and included in the invoice Total . When this option is checked, the Tax Type and Tax % fields become available for you to enter the actual tax rate to be applied.

 Taxable Amount

 The running sum of the line item Total for items with the T column checked. This Taxable Amount is multiplied by the Tax % to calculate the actual Tax applied to the transaction.

 Product Line Items

 This section displays the purchased item(s) associated with the invoice.

 Column
 Description

 Amount

 The calculated cost of the specified Product and Quantity , including any tax or markup, using the following formula:

 Amount = Quantity * (Cost + Tax + Markup)

 Charge Type

 The associated charge type for the line item. A one-time charge of the selected type is created and added to the tenant's, prospect's, or owner's details page when the invoice was issued.

 Description

 A brief description of the product or service.

 Linked Expense

 Any bills or checks associated with the invoice are noted here. The words Bill or Check precede the bill or check number (for example, Bill: WO # 47 or Check: 9 ).

 Product

 The inventory item the invoice was billed for.

 Quantity

 The number needed of the specified item.

 Rate

 The total dollar amount charged to the recipient for the line item.

 Tax

 A indicates that this item is taxable.
 This column displays only when Taxable is checked.

 When Tax is checked, the Amount for this line item is added to the Taxable Amount . When a Tax Type and Tax % are specified, their tax percentage is multiplied by the Taxable Amount to get the actual Tax applied to the transaction.

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
