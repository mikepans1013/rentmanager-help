# System Invoice

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Invoice-System.htm

A System Invoice generates when printing a selected invoice from the Invoices page. This document displays the invoice's details, line items, and individual costs as well as total costs. In addition, it includes your company's name and address and the recipient's billing name and address to easily send the invoice. The information printed in the invoice is dependent on the information entered on the invoice's details page.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 View

 For more information, refer to Control User Access .

 To view a System Invoice , do the following:

 -
 Go to arrow_forward Receivables arrow_forward General arrow_forward Invoices .
The Invoices page displays.

 -
 Select an invoice from the list.
The invoice's details page displays.

 -
 At the top of the invoice's details page, click Print .

 Invoice Sections

 The invoice is separated into the following sections.

 Mailing Header

 This section displays the property's name, address, and phone number in the top-left corner. Under that, the recipient's name and address displays. The address that displays is dependent on the type of recipient on the invoice.

 The following recipient addresses can display in this section. What displays here is determined by entity type of either Tenant , Prospect , or Owner selected on the invoice's details page. Only the address selected as default on the entity displays in this section.

 Recipient
 Description

 Owner

 The address of the company assigned as the property management company in system preferences. For more information, refer to Management Company (System Preferences) .

 Prospect

 The address of the property selected on the prospect's details page.

 Tenant

 The address of the tenant's default property displays.

 Invoice Header

 This section displays information about the recipient of the invoice.

 The following fields display in this section.

 Field
 Description

 Acc #

 The system-generated account ID number for the invoice recipient.

 Amount Due

 The total dollar amount of the invoice. If the invoice is partially or fully paid, the field displays as Balance Due and shows the remaining amount owed for the invoice.

 Amount Enclosed

 An empty field for the recipient to write in the amount they are enclosing should they choose to detach the top portion of the invoice and mail in their payment.

 Invoice Date

 The date that the invoice was created.

 Invoice No.

 The system-generated number for the invoice.

 Property

 The short name of the property linked to the invoice. For owner invoices, the short name of the management company property displays.

 Unit

 For a tenant or prospect invoice, the unit linked to the invoice displays. For owner invoice, this field remains blank.

 Invoice Details

 This section displays a list of the products, services, and the quantities of each as entered on the invoice's details page.

 The following columns and rows display in this section.

 Column or Row
 Description

 Amount

 The calculated cost of the specified product or service for the Quantity listed, including any tax or markup, using the following formula:

 Amount = Quantity * Rate

 Description

 A brief description of the product or service.

 Quantity

 The number needed of the specified item.

 Rate

 The total dollar amount charged to the recipient for the line item.

 Sub Total

 The sum of the base costs of all items included in the invoice as they display on the inventory item's details page.

 Tax

 If a Tax % is specified, this field displays the overall tax calculated on the taxable items (items with the Tax column checked) on the invoice using the following formula:

 Tax = Taxable Amount * Tax %

 Total

 The final total dollar amount of all items for the invoice using the following formula:

 Total = Sub Total + Tax

 Payment Details

 An additional section on the invoice displays if the invoice has been partially or fully paid.

 The following columns display.

 Column
 Description

 Amount Paid

 The total dollar amount paid on the invoice.

 Balance Due

 The total dollar amount remaining to be paid.

 Total

 The total dollar amount owed on the invoice.

 Comments

 This section displays the information entered in the Comments field on the invoice's details page.
