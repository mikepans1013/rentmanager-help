# Add an Invoice

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Invoice-Add.htm

Invoices are bills that are sent to tenants or owners for products and services. For example, you can create invoices when you charge owners for management fees or when tenants reimburse you for upgrades to their units. Invoices display as new one-time charges on a tenant, prospect, or owner's accounts. You can create invoices from scratch, or you can load memorized invoice templates to quickly populate information for common invoice types.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Step 1: Add Invoice Details

 To create an invoice, do the following:

 -
 Go to arrow_forward Receivables arrow_forward General arrow_forward Invoices .
The Invoices page displays.

 -
 Click Add Invoice .

 More Information

 You can use memorized invoices to quickly populate data for invoices that you create frequently. If you are creating an invoice from a memorized template, click Load From Memorized . For more information, refer to Memorized Invoices (Page) .

 -
 In the Recipient Information tile, select the following options:

 Field
 Description

 From

 The name and address of the selected property (or the property associated with the selected unit) that is billing the invoice and receives the payment. The property's address that is marked as Billing displays.

 Owner/Tenant/Prospect

 To select whether this invoice is being billed to a Tenant , Owner , or Prospect , click the drop-down arrow. Then in the field below, select the specific account of that type.

 Property

 The property associated with the invoice. For owner accounts, the property management company account displays by default. For prospect accounts, their default property displays.

 This field displays only if a Prospect or Owner account is selected.

 To

 The invoice recipient's name and their address that is marked as Default .

 Unit

 The unit associated with this invoice. For example, if the tenant has multiple units but one is damaged and you are billing them for the repairs, select the unit that was damaged.

 This field displays only if a Tenant account is selected.

 -
 In the Invoice Information tile, enter information into the following fields:

 Field
 Description

 Attachments

 Any images or documents relevant to the invoice, such as a digital copy of the original invoice. To upload a file, click Upload or to paste an image from your clipboard, click Paste .

 Comments

 An additional note that provides more information about the invoice or it's purpose.

 Date

 The date the invoice is posted. This should match the date that the invoice is sent to the recipient.

 Due Date

 The date by which the invoice must be paid. If you select a Term , this date automatically calculates based on the term selected and the entered post Date .

 Job

 If job costing is enabled, you can assign this invoice to a specific job. All charges included in this invoice are tracked on the selected job. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Sales Representative

 The user responsible for creating the charge or selling the associated inventory item to the invoice recipient.

 Term

 The amount of time after posting before the invoice is due. The billing terms available can be customized for your database. For more information, refer to Bill Terms (Page) .

 Step 2: Enter Tax Information

 In the Tax Information & Issue Links tile, if any of the inventory items on the invoice are taxable, check Taxable . Otherwise, skip to the next step.

 If you have checked Taxable , enter information into the available fields.

 Field
 Description

 Tax %

 The tax percentage rate to be applied to the total of taxable items.

 Tax Type

 The tax type to be applied to the taxable items. The tax types available can be customized for your database. For more information, refer to Tax Types (Page) .

 Taxable Amount

 The running sum of all inventory items on the invoice that are marked as taxable. You can determine which items are taxable in the next step.

 Step 3: Allocate Invoice Line Items

 In the tile for line items, you can establish each inventory item being billed on the invoice, the quantity, rate, and whether or not they are taxable.

 For each item you wish to add to the invoice, click   Add Detail , then enter information into the available columns.

 Column
 Description

 Amount

 The calculated cost of the specified Product and Quantity , using the following formula:

 Amount = Quantity * Rate

 Charge Type

 The associated charge type for the line item. A one-time charge of the selected type is created and added to the tenant's, prospect's, or owner's details page when the invoice is issued.

 Description

 A short note describing the line item.

 Linked Expense

 Any bills or checks associated with the invoice are noted here. The words Bill or Check precede the bill or check number (for example, Bill: WO # 47 or Check: 9 ).

 Product

 The inventory item (such as a product or service) being billed on the invoice. For more information, refer to Inventory Items (Page) .

 More Information

 For longer invoices, you can select an inventory item note to use as a category header to help organize the items in your invoice. For example, you could add a line with a note called Cleaning with multiple line items related to cleaning costs below it, then add a line item with a note for Damage Control and add line items below it that are related to repairs. For more information, refer to Inventory Item Notes (Page) .

 Inventory item notes are not true items that can be purchased, so they populate data only in the Description column. All other columns are disabled for inventory item notes.

 Quantity

 The number of the item being billed. For example, you could enter 2 for Door Locks if you are rekeying two doors. Or you could enter 5 to bill for five hours of labor.

 Rate

 The total dollar amount charged to the recipient for the line item. By default, the column displays the item's Cost + Markup value set on the inventory item's details page.

 Tax

 If this line item should be taxable, check the box in this column for that line.

 When Tax is checked, the Amount for this line item is added to the Taxable Amount on the tax tile above.

 Below the columns, you can review the following totals:

 Field
 Description

 Sub Total

 The sum of the base costs of all items included in the invoice, as established on the inventory items' details.

 Tax Amount

 If a Tax % is specified, this field displays the overall tax calculated on the taxable items (items with the Tax column checked) in the invoice using the following formula:

 Tax Amount = Taxable Amount * Tax %

 Total Amount

 The final total dollar amount of all items for the invoice using the following formula:

 Total Amount = Sub Total + Tax Amount

 Step 4: Save the Invoice

 Once you have established your line items, click Save & Close to complete the invoice creation process and close the pop-up. Alternatively, click Save & New to finish adding the invoice and refresh the pop-up to create another invoice.
