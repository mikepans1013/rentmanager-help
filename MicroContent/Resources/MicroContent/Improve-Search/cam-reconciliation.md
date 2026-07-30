# CAM Reconciliation

Source: https://rmxhelp.rentmanager.com/MicroContent/Resources/MicroContent/Improve-Search/cam-reconciliation.htm

Common area maintenance (CAM) reconciliation is a process that allows you to compare the total amount of commercial recoverable expenses (CRE) incurred by selected properties and CRE charges posted to tenants of those properties over a specified period of time. CAM reconciliations are often performed at the end of a month, quarter, or year to determine if your tenants were charged too much or too little to cover the actual CRE for the respective properties.

 When calculating CAM reconciliation charges, Rent Manager first calculates the CRE amount based on the information entered on the CRE recurring charges for each property. The amount is divided among the tenants of the properties based on the CRE distribution method you select. Tenants then receive a credit or a charge to their account(s) depending on the result.

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 Reconcile CAM
 Enabled

 For more information, refer to Control User Access .

 To open the CAM Reconciliation page, go to arrow_forward Receivables arrow_forward Commercial arrow_forward CAM Reconciliation .

 Step 1: Select CAM Reconciliation Settings

 To perform a CAM reconciliation, do the following:

 -
 In the Options section, select the desired information for each field.

 Field
 Description

 Properties

 The properties you wish to reconcile from the drop-down list. Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Date Range

 The date range to reconcile only commercial recoverable charges and expenses posted during this period.

 Charge Types to Reconcile

 The charge types to reconcile against commercial recoverable expense accounts. Only charge types defined as CRE charges display.

 Accounts to Reconcile Against

 The CRE-based expense accounts to reconcile against your selected CRE charges. Only expense accounts defined as CRE expenses display.

 Basis

 Select either a Cash or Accrual accounting basis to calculate CRE over the specified date range.

 Subtract Base Amount

 Subtracts the Base Amount value entered on the commercial lease's Charge Type Setup tab from the reconciled amount using the following formula:

 Adjusted Expense = CRE Total – Base Amount

 For example, if the overall CRE total is $100,000 and Tenant A has a base amount of $5,000, Rent Manager uses the previously selected distribution method to allocate Tenant A's portion of $95,000 ($100,000 – $5,000).

 If Tenant B does not have an applicable base amount, Rent Manager uses the same distribution method to allocate Tenant B's portion of the full $100,000 CRE expense amount.

 More Information

 Subtracting base amounts can reduce a tenant's total reconciliation amount to zero, but never a negative amount.

 Limit by move in/move out

 Limits each tenant's portion of the CRE amount by the period of time in which they actually occupied a unit included in the reconciliation.

 More Information

 If the tenant has a lease renewal within this date range, Rent Manager uses the terms of the lease in effect on the To date of the Date Range .

 The Base Amount and Cap Amount specified in that lease are used in the reconciliation.

 -
 In the Select How to Divide the Amount Between Tenants section, choose the CRE distribution method.

 Option
 Description

 Tenant's percentage of the total square footage of the property

 Charges CRE to commercial tenants based on the percentage of each tenant’s rented square footage of the overall property’s square footage. Rent Manager calculates the total square footage of all the units at the specified property, then divides the square footage of the unit occupied by the tenant to determine the pro-rata share.

 For example, if the CRE charge is $3000 and a commercial tenant rents 50% of the total square footage of the property, that tenant is charged $1500 of the CRE charge amount.

 For this option to work, the tenant's rental unit must have the Square Footage defined on the Unit details page and the Total Sq Ft defined on the Property details page.

 Divide evenly among current tenants

 Charges CRE by the total charge divided by the total number of units in the property. This means that part of the total CRE charge is not assigned if there are any vacant units in the property.

 For example, if your property has ten units and eight are rented, each of the eight tenants would be assigned 1/10 of the total CRE charge.

 Use commercial recoverable expense (CRE) setup of the selected lease

 Charges each commercial tenant the percentage of expenses you defined on the commercial lease's CRE Setup tab.

 For this option to work, you must have all percentages on the commercial lease's CRE Setup tab and have expenses in the selected CRE accounts for the selected date range.

 More Information

 If this option is selected, the only options available on the CRE Amount to be Divided page are Use expenses from: and Use budget expenses from: , as these are the options that are based on expense accounts.

 Select to use either Pro rata share or Administrative fees .

 Pro rata share

 The percentage of the expenses for the selected CRE account, as defined on the commercial lease's CRE Setup tab.

 Pro Rata Share = CRE Account * Pro Rata Share %

 For example, if an expense account has expenses of $500 and the percentage entered is 15 , the pro-rata share amount would be $75 (15% of $500, calculated as 500 * 0.15).

 Up to 4 decimal places may be used.

 More Information

 If the option Subtract Base Amount is selected, the tenant's base amount is first subtracted from the expense. The result is then multiplied by the by the tenant's pro rata share percentage for the corresponding CRE expense.

 Admin Fees

 This is calculated by first determining the pro-rata share for each commercial tenant and then multiplying that value by the administrative fee percentage defined on the commercial lease's CRE Setup tab.

 Administrative Fees = Pro Rata Share * Administrative Fee %

 For example, if the pro-rata share is $75 and the administrative fee is 1% , the fee would be $0.75 (10% of $75, calculated as 75* 0.01).

 Up to four decimal places may be used.

 Show expenses with 0% pro rata share

 Include accounts that do not have a pro rata share.

 Use percentage in tenant’s user defined field

 Charge CRE based on the percent value specified in a selected tenant-type user defined field (UDF).

 For this option to work, you must create tenant-level UDFs specifically for tracking percentages for each tenant who should receive a CRE charge. Additionally, each applicable tenant must have a numeric value (ranging from 0-100) entered in the UDF.

 -
 In the Reconciliation Charge Information section, select the desired information for each field.

 Field
 Description

 Date

 The date for which the reconciliation charge/credit is added to the tenant account(s).

 Charge Type

 The charge type to use when posting this reconciliation to tenant accounts.

 Use last day in range

 The date listed on the transaction is the end date selected in the Options section Date Range field.

 Create invoices for posted charges

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Creates tenant invoices for CAM reconciliation charges.

 Comment

 A comment for the CAM reconciliation charges/credits that displays on the tenant's View Transactions pop-up.

 -
 Click Reconcile .

 Step 2: Select Accounts to Reconcile and Post Charges

 To select the accounts you wish to reconcile and post charges to, do the following:

 -
 Review the summary page and all tenants with reconcilable charges.

 More Information

 If a tenant in the list has a commercial lease Base Terms entered on the Charge Type Setup tab that does not align with the selected Date Range , Rent Manager displays a warning and highlight the affected tenant in yellow.

 For example, if a tenant has a base term of Monthly and the Date Range is for two months, Rent Manager warns you that the date range does not match the base term.

 To correct this, change the Date Range to match the Base Term . You may wish to perform multiple reconciliations with groups of tenants who use the same Base Term .

 Column
 Description

 Tenant

 The tenant for whom the charges are posted. If the tenant has multiple leases for the same unit, click to view an itemized breakdown of the expenses for each lease.

 Property

 The commercial property the tenant occupies. This column displays only if, in the Options section, more than one property is selected for CAM reconciliation.

 Unit

 The unit the commercial tenant leases at the property.

 Lease Dates

 The Lease Start and Lease End dates for the commercial tenant's lease.

 Move Dates

 The Move In and, if applicable, Move Out date for the commercial tenant's lease.

 Total Expenses

 The actual commercial recoverable expenses during the date range that the tenant is responsible for paying, based on the selected distribution strategy.

 Expense Adjustments

 The total dollar amount of expense adjustments for the tenant's lease. Expense adjustments can be created to add or deduct amounts from a selected general ledger (GL) account while performing a CAM reconciliation.

 If this value is positive, the general ledger (GL) account adjustment is an addition. If the value is negative, the GL account adjustment is a deduction.

 More Information

 To add a one-time expense adjustment for a tenant, click the value in this column to open the CAM Expense Adjustments pop-up, then click . For more information, refer to Add a One-Time CAM Expense Adjustment .

 To delete an existing one-time expense adjustment from the list, click . If the adjustment is associated with a single tenant lease, the entire adjustment is deleted. If the adjustment is associated with multiple tenant leases, the lease is removed from the adjustment but the adjustment is not deleted.

 Pro Rata %

 The percentage used in the pro-rata share calculation based on the division method selected in the Select How to Divide the Amount Between Tenants section.

 If the Use commercial recoverable expense (CRE) setup of the selected lease distribution method is selected, Pro rata share is checked, and there are multiple percentages for the expense accounts, <Varies> displays.

 Sq Ft (%)

 The square footage of the unit the commercial tenant occupies at the property. This option displays only if, in the Select How to Divide the Amount Between Tenants section, Percentage of property total sq. ft. is selected.

 Pro Rata Amount

 The total dollar amount much of the actual commercial recoverable expenses this tenant is responsible for paying, based on the option selected in the Select How to Divide the Amount Between Tenants section.

 Previously Charged

 The total of all selected CRE charges that have been charged to this tenant's account.

 Reconcile Amount

 The reconciled amount that can be posted to the tenant based on the Cap Amount and Cap Term entered on the commercial lease's Charge Type Setup tab.

 If a Cap Amount is not defined, the capped amount shown defaults to the reconciled amount. If a Cap Amount is defined, the capped amount shown is the value that is posted.

 -
 Select the tenant(s) for whom you wish to post CAM reconciliation charges.

 -
 To automatically generate the CAM Reconciliation Statement for the selected properties after posting reconciliation charges, check Run CAM Reconciliation Statements .

 -
 Click Post Charges .

 -
 Click Yes on the confirmation pop-up.
The CAM reconciliation charges/credits are posted to the selected tenant account(s).

 More Information

 Tenants with CRE charges less than their allocated portion of the commercial recoverable expenses receive a CRE charge to cover the difference, while tenants with charges greater than their portion receive a CRE credit to cover the difference.
