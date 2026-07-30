# Add a Charge Type

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Charge-Type-Add.htm

Charge types allow you to link the transactions for a specific service or product with a unique general ledger (GL) account. By creating charge types, you can categorize tenant transactions for services and products such as rent, late fees, and security deposits. This allows you to run reports, such as the Rent Roll & Recurring Charges report, to track payments and income for those transactions separately and gather more detailed information about your primary sources of income and expenses.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 Add, View

 For more information, refer to Control User Access .

 To add a new charge type, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Charge Types .
The Charge Types page displays.

 -
 Click Add Charge Type .

 -
 Enter the following information for the new charge type:

 Field
 Description

 Name

 Identifies this charge type (maximum of six characters) on reports and easily differentiates charge types.

 Description

 An additional note to provide context for this charge type, which displays on generated transactions ledgers for related accounts.

 Chart Account

 The name of the general ledger (GL) account linked to this charge. Once a GL account is selected, transactions using this charge type affect the selected GL account's balance as charges are posted and paid.

 Default Amount

 If you typically charge the same amount for this charge type, enter a default amount.

 This amount populates the Amount field when adding a one-time charge or a recurring charge of this charge type.

 This amount can be overridden when creating individual charges. It is not used for charges created from task automations or late fees.

 Allocation Order

 If you created custom allocation orders, select End or Beginning to determine the placement of the charge type on the allocation order. If you select End when creating a charge type, posted charges of this type are paid last. For charges types with Beginning selected, charges of this type are paid first when posted.

 Active

 This option is checked by default, allowing the charge type to be assigned to transactions for tracking the applicable financial data.

 More Information

 Uncheck this box to mark a charge as inactive. This is a good alternative to deleting a charge type, as the charge type cannot be used, but historical data concerning the charge remains intact.

 For more information on deleting a charge type, refer to Delete a Charge Type .

 Prorate By Day

 Check to have this charge type automatically charge an altered amount based on the charge's post date. For example, if you prorate a tenant's rent who moves in midmonth, their rent charge would be lower than if they moved in at the beginning of the month, as they would pay only for the days they occupied the unit.

 Commercial Recoverable Expense (CRE) Charge Type

 Check if this charge type is used to recover the cost of commercial recoverable expenses and is used to calculate and perform a common area maintenance (CAM) reconciliation. For more information, refer to CAM Reconciliation .

 -
 Click Save & Close to complete the charge type creation process and close the pop-up. Alternatively, click Save & New to finish adding the charge type and refresh the pop-up to create another charge type.
