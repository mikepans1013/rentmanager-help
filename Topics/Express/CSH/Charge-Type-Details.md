# Charge Type Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Charge-Type-Details.htm

Charge types are used to track the services and products that you offer as a business, such as rent charges, late fees, damage fees, and storage fees. Each charge type is linked to one of the general ledger (GL) accounts from your Chart of Accounts to ensure similar transactions display in the correct GL account.

 The Charge Type details page allows you to view and manage general information for the currently selected charge type.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 View

 For more information, refer to Control User Access .

 To view a charge type's details page, go to   arrow_forward Accounting arrow_forward General arrow_forward Charge Types and select a charge type from the list.

 At the top right of the page, click to view information regarding when and by which user the charge type was created and updated.

 Charge Type Information

 The Charge Type Information section displays general information about the charge type and how the charge type is used in Rent Manager . The following fields are available in this section of this page.

 Field
 Description

 Name

 Identifies this charge type (maximum of six characters) on reports and easily differentiates charge types.

 Description

 An additional note to provide context for this charge type, which displays on generated transactions ledgers for related accounts.

 GL Account

 The name of the GL account linked to this charge. Transactions using this charge type affect the selected GL account's balance as charges are posted and paid.

 Default Amount

 This amount can be overridden when creating individual charges. If you typically charge the same amount for this charge type, enter a default amount. Otherwise, displays $0.00 .

 This amount populates the Amount field when adding a one-time charge or a recurring charge of this charge type. It is not used for charges created from task automations or late fees.

 More Information

 For the charge type set as the default Non-Sufficient Funds Fees in system preferences, the Default Amount entered on the Charge Type details page is the system-wide NSF fee charged to tenants for bounced checks, declined credit cards, etc.

 However, the Default Amount for NSF can be overridden per property on the property details page's Other Information tile. For more information, refer to Property Details (Page) .

 Prorate by Day?

 A displays if the charge type automatically charges an altered amount based on the charge's post date. For example, if you prorate a tenant's rent who moves in mid-month, their rent charge would be lower than if they moved in at the beginning of the month, as they would pay only for the days they occupied the unit.

 CRE Charge Type

 A displays if the charge type is used to recover the cost of commercial recoverable expenses and is used to calculate and perform a CAM Reconciliation.

 Active

 A displays if the charge type is available to be selected on transactions throughout Rent Manager .

 Inventory Items

 The Inventory Items section displays the inventory items linked to the charge type in order to recover the cost of those items. These items can be linked to the charge type either from the item itself or by assigning the items directly from the charge type.

 The following columns are available in the Inventory Items section of this page.

 Column
 Description

 Name

 The name of the item as it displays in lists and on estimates, purchase orders, service issues, and invoices.

 Description

 A brief description of the product or service. This is displayed in the memo field on estimates and purchase orders.
