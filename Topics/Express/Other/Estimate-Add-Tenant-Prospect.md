# Add a Tenant or Prospect Estimate

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Estimate-Add-Tenant-Prospect.htm

Estimates allow you to record the anticipated parts and labor needed to complete a project, itemize the costs, and provide a total amount due, including any markups and/or taxes you add. Estimates can also be linked to an invoice, service issue, and/or purchase order. On an estimate's details page, you can add or edit estimate information, link the estimate to other entities, add inventory items, manage history/note items, or delete existing estimates.

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Estimates
 Add, View

 For more information, refer to Control User Access .

 For example, if you have a commercial tenant who wants to do an expansion on the property, you can send them an estimate to confirm if the scope of work is in their budget and allow them to see where they can add or remove costs to accomplish their needs. Alternatively, if you have a tenant who would like to purchase one of your assets (such as the washer and dryer in their unit), you can send them an estimate for what it would cost them.

 More Information

 This topic covers how to create an estimate for tenants and prospects. For information on how to create an estimate for owners, refer to Add an Owner Estimate .

 Step 1: Enter General Information

 To create an estimate, do the following:

 -
 Go to   arrow_forward Receivables arrow_forward General arrow_forward Estimates .
The Estimates page displays.

 -
 Click the drop-down arrow next to   Add Estimate and select Add Tenant Estimate .
The Add Estimate pop-up displays.

 More Information

 Prospect accounts can also be selected from tenant estimates.

 - Enter information in the available fields.

 More Information
 You can use memorized estimates to quickly populate data for estimates that you create frequently. If you are creating an estimate from a memorized template, click Load From Memorized and select a memorized estimate. For more information, refer to Memorized Estimates (Page) .

 Field Description
 From Address
 The default address of the property selected in the From Property field.

 From Property
 The property that is receiving the product(s) or service(s) in the estimate.

 Tenant
 The tenant or prospect account receiving the estimate. Click the drop-down arrow next to the field name to change the selection from Tenant to Owner .

 To Address
 The default address of the tenant or prospect account receiving the estimate.

 - In the General tile, enter information in the available fields.
 Field Description
 Active
 Check or uncheck this field to determine if the estimate is ready to be used to record expected labor and parts expenses.

 Comments
 A message with additional information or instructions regarding the invoice. To add a memorized comment, click .

 Date
 The date on which the estimate is issued.

 Expiration Date
 The date on which the estimate expires. After this date, your offer to do the specified work at the price you set is no longer valid.

 Job
 If applicable, the job associated with estimate. For more information, refer to Jobs (Page) .
 Related Preferences
 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Reference
 A short note or memo to identify the purpose of the estimate.

 Sales Rep
 The Rent Manager user responsible for creating the charge or selling the associated inventory item to the invoice recipient.
 More Information
 Only users with the option Sales Rep/Leasing Agent checked on their account display in the list. For more information, refer to User Details (Page) .

 Status
 The stage that the estimate should be set to upon creation. When creating a new estimate, make sure Draft is selected, since it has not yet been sent to the recipient for approval.
 More Information
 The other statuses in the list are applicable to estimates that have already been created and sent to the recipient.

 -
 Enter tax information if any of the inventory items on the estimate are taxable.

 Field
 Description

 Taxable

 Check this field if the estimate has taxable items. If left unchecked, other tax fields will not be available.

 Tax %

 The tax percentage rate to be applied to the total of taxable items.

 Tax Type

 The tax type to be applied to the taxable items. The tax types available can be customized for your database. For more information, refer to Tax Types (Page) .

 Taxable Amount

 The running sum of all inventory items on the estimate that are marked as taxable. You determine which items are taxable in the next step.

 Step 2: Allocate Estimate Line Items

 In this section, you establish the inventory item(s) included in the estimate, their quantity, rate, and whether or not they are taxable.

 For each item you wish to add to the estimate, click   Add Detail , then enter information into the available columns.

 Column
 Description

 Item

 The inventory item to purchase as part of this estimate. Once an item is selected, the Cost and Memo fields populate with the item’s information. For more information, refer to Inventory Items (Page) .

 More Information

 For longer invoices, you can select an inventory item note to use as a category header to help organize the items in your invoice. For example, you could add a line with a note called Cleaning with multiple line items related to cleaning costs below it, then add a line item with a note for Damage Control and add line items below it that are related to repairs. For more information, refer to Inventory Item Notes (Page) .

 Inventory item notes are not true items that can be purchased, so they populate data only in the Memo column. All other columns are disabled for inventory item notes.

 Memo

 Additional information explaining the inventory item. By default, this field populates with the Description from the inventory item.

 Quantity

 The quantity of the item to purchase.

 Cost

 The purchase price you pay per item

 Amount

 The total dollar amount that the purchased quantity of the item costs you before markup and taxes are added.

 Amount = Quantity * Cost

 Markup

 An additional dollar amount to charge beyond the base cost you paid for the item. If a Markup has been established on the item's details page, it will display automatically.

 If the Markup is a flat dollar amount, enter that amount in the column. If the Markup is a percentage, enter the number followed by a % symbol.

 Tax

 If the inventory item is taxable, check this column for that line. When the column is checked, the Total for this line item is added to the Taxable Amount field above.

 Total

 The total dollar amount of the item(s) after the Markup is added.

 Step 3: Review and Save

 At the bottom of the page, you can review the estimate totals. Once all appropriate information has be added and confirmed, click Save . Alternatively, click Save & New to start a new estimate, or Save & Close to return to the Estimates page.

 Field
 Description

 Markup Total

 The total dollar amount of markup added to the cost of all items on the estimate.

 Subtotal

 The subtotal of the invoice before markups and taxes. This is the sum of all lines in the Amount column.

 Tax Total

 The total dollar amount of taxes added to the invoice based on the Taxable Amount .

 Total Amount

 The total dollar amount of the estimate, including all items, taxes, and markup.

 Step 4: Add Links

 After you have saved the estimate, the Links tile displays, giving you the option to create a purchase order (PO), invoice, or service issue from the estimate. This populates the estimate information into the PO, invoice, or issue you created from this tile. The information below provides details on each available link.

 Create a Linked Purchase Order

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View

 For more information, refer to Control User Access .

 If you need to order inventory for this estimate, you can create a purchase order directly from the estimate. The PO automatically populates with the line items from the estimate.

 To create a PO from the estimate, do the following:

 -
 In the Links tile, click Add Purchase Order Link .

 -
 Click Yes on the confirmation pop-up to proceed.
The Create a Link pop-up displays.

 -
 In the Vendor field, select the vendor account from which you are purchasing the inventory items.

 More Information

 For tenants with multiple leases, you will be prompted to select which lease to link the PO to. Select the desired Lease and click Save .

 -
 Click Save .
The purchase order is created and a link is added to the Links tile. You can click the link to jump to the purchase order and make any edits as needed. For more information, refer to Purchase Order Details (Page) .

 Create a Linked Invoice

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 If you need to bill the recipient for the costs of the estimate, you can create an invoice directly from the Links tile. The invoice automatically populates with the line items from the estimate.

 To create an invoice from the estimate, in the Links tile, click Add Invoice Link and click Yes on the confirmation pop-up. An invoice is created and a link is added to the Links tile. You can click the link to jump to the invoice and make any edits as needed. For more information, refer to Invoice Details (Page) .

 More Information

 For tenants with multiple leases, you will be prompted to select which lease to link the invoice to. Select the desired Lease and click Save .

 Create a Linked Service Issue

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 Add, View

 For more information, refer to Control User Access .

 If you want to create a service issue for work related to the estimate, you can create an issue directly from the estimate. This is generally done after the estimate has been approved, but you can create it at any time. The issue automatically populates information from the estimate when created.

 To create a service issue from the estimate, in the Links tile, click Add Service Issue Link and click Yes on the confirmation pop-up. An issue is created and a link is added to the Links tile. You can click the link to jump to the issue and make any edits as needed. For more information, refer to Issue Details (Page) .

 More Information

 When you create a service issue from an estimate, the quantity of the line items on the estimate are subtracted from your on-hand inventory. If adding the inventory items to the service issue results in a negative on-hand quantity in your inventory, you will receive a pop-up asking if you wish to continue or cancel.
