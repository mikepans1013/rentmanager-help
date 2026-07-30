# Post Non-Recurring CRE

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Post-Non-Recurring-CRE.htm

Non-recurring commercial recoverable expenses (CRE) fees are primarily used to distribute one-time expenses related to owning and maintaining a facility, including common areas such as a parking lot and lobby renovations. These one-time expenses can be split among a number of commercial tenants based on several available distribution strategies. Non-recurring CRE charges are one-time charges posted to the selected tenants' accounts; whereas CRE recurring charges post on a monthly (or selected increment of time) basis.

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 Non recurring CRE
 Enabled

 Receivables
 Tenant transactions
 Add

 For more information, refer to Control User Access .

 Step 1: Select Posting Options

 To enter general information about the non-recurring CRE posting, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Commercial arrow_forward Non Recurring CRE .

 -
 Select the Properties for which you are posting CRE charges.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 Enter the Date of the posting. This is the date the charge is added to the tenant accounts you selected for the adjustment.

 -
 Select the Charge Type to apply to the charge. Only charge types defined as a CRE Charge Type display.

 -
 Enter a Comment about the charge to display on each tenant's View Transactions page.

 Step 2: Divide the Charge Among Tenants

 In this section, select how Rent Manager divides the total charge amount among the tenants you have selected for the adjustment.

 To divide charges, choose one of the following options:

 Option
 Description

 Tenant's percentage of total square footage of the property

 Charge non-recurring CRE to the selected tenants based on the percentage of each tenant’s rented square footage of the overall property's square footage. For example, if the CRE charge is $3000 and a tenant rents 50% of the total square footage of the property, that tenant is charged $1500 of the CRE charge amount.

 For this option to work, the Square Footage must be defined on the tenant's leased unit Miscellaneous tile and the Total Sq Ft must be defined on associated property's Other Information tile.

 Occupied percentage of the total occupancy of the property

 Charge non-recurring CRE to tenants based on the percentage of the overall property's occupancy each tenant represents and then charge each tenant the same percent of the overall CRE charge. For example, if a property consists of ten occupants, each tenant is charged 10% of the CRE charge. If one unit consists of four tenants, they are responsible for 40% of the CRE charge because the unit consists of four out of the ten occupants.

 For this option to work, every occupant of the property must be accounted for as either a tenant or a contact.

 Use CRE setup of the selected lease

 Charge each commercial tenant the percentage of expenses defined through the CRE Setup tab on their lease.

 For this option to work, you must have defined percentages for the specified CRE expense accounts on the commercial lease.

 More Information

 If you select this option, the only options available in the Select amount to be divided section are Use expenses from and Use budget expenses from . These are the options that allow you to select an expense account.

 Pro rata share

 Using the Pro Rata Share % , as defined on the commercial lease, and the expense account, as defined in the Select amount to be divided section, the following formula calculates the CRE:

 CRE = Expense Account * Pro Rata Share %

 For example, if an expense account has expenses of $500 and the percentage entered is 15 , the formula becomes 500 * .15 . The tenant would then owe an amount of $75.

 Admin fees

 Using the Pro rata share , using the calculations from the previous row, and the Administrative Fee % , as defined on the commercial lease, the following formula calculates the CRE:

 CRE = Pro rata share * Administrative Fee %

 For example, if the Pro rata share is $75 and the administrative fee is 10%, the formula becomes 75 * .1 . The tenant would then owe an amount of $7.50.

 Divide evenly by number of units in the property

 Charge non-recurring CRE by the total charge divided by the total number of units in the property. For example, if your property has ten units and eight are rented, each of the eight tenants would be assigned 1/10 of the total CRE charge. This means that part of the total CRE charge is not assigned if there are any vacant units in the property.

 Tenant's percentage of total rented square footage of the property

 Charge non-recurring CRE to tenants based on the percentage of each tenant’s rented square footage of the overall property's square footage minus the square footage of any vacant units. For example, if a property's Total Sq Ft is 10,000 sq. ft. but 3,000 sq. ft. consists of vacant units, each tenant's rented space is compared against the property's 7,000 sq. ft. of total rented space. This means each tenant is charged a larger portion of the total CRE amount.

 For this option to work, the Square Footage must be defined on the tenant's leased unit Miscellaneous tile and the Total Sq Ft must be defined on associated property's Other Information tile.

 Divide evenly among current tenants

 Charge non-recurring CRE evenly among your current tenants. For example, if your property has ten units and eight are rented, each of the eight tenants would be assigned 1/8 of the total CRE charge.

 Use percentage in tenant's user defined field

 Charge non-recurring CRE based on the percent (values may range from 0-100) specified in the selected tenant-type user defined field (UDF).

 For this option to work, you must create a tenant-type UDF specifically for tracking percentages for each tenant who should receive a CRE charge. For more information, refer to Tenant User Defined Fields (Pop-Up) .

 Step 3: Select an Amount to Divide

 In this section, choose an option to calculate the total amount of the charge that is divided among tenants. If a value is not selected in Options , an error message displays and you won't be able to continue until a value is selected. Once a division method is selected, click Next at the bottom of the page.

 To calculate a total amount for the non-recurring CRE posting, choose one of the following options:

 Option
 Description

 Use an amount from property user defined field

 Calculates the total CRE charge using the value specified by selecting a property-type UDF in the Options field.

 Use an amount from tenant user defined field

 Calculates the total CRE charge using the value specified by selecting a tenant-type UDF in the Options field.

 Use expenses from

 Calculates the total for this CRE charge by selecting CRE accounts in the Options field.

 For this option to work, you must have expenses in the selected CRE accounts for the selected time frame.

 Select from the following options to specify a time frame and method for how Rent Manager calculates the charges:

 Last year's CRE expenses

 Calculates charges based on expenses 12 months prior to the Date entered in the Options section.

 For example, if the Date entered is 12/12/ 2026 , Rent Manager calculates the total expenses from 12/1 through 12/31 of the previous year.

 Months ago

 Calculates charges based on expenses in the month that occurred this number of months before the Date in the Options section.

 For example, if the Date is 12/12/ 2026 and a value of 3 months is entered, Rent Manager calculates the total expenses in the month that was 3 months before the Date (i.e., 9/1 through 9/30).

 Annualized monthly average

 Calculates charges based on average monthly expenses in the calendar year previous to the Date entered in the Options section.

 For example, if the Date entered is 12/12/ 2026 , Rent Manager examines the total expenses during the full calendar year (i.e., 1/1 through 12/31) of the previous year. That amount is divided by 12 (months), and the adjusted result is the CRE amount to be divided.

 Optionally, check Subtract base amount to remove the Base Amount , as specified on the Charge Type Setup tab on the tenant's lease, from calculations at the time recurring charges are posted. Otherwise, the base amount is subtracted at the time of reconciliation.

 Basis

 Calculates the CRE totals on a Cash or Accrual basis.

 Increase by %

 Increases the total of your calculation option by a specified percent.

 Use budget expenses from

 Calculates the total for this CRE charge using the expenses budgeted for the CRE accounts selected in the Options field. For this option to work, you must have budgeted expenses.

 You can also use the following settings with this option:

 Annualized monthly average

 Calculates the amount by dividing the average monthly expenses accrued by your selected commercial recoverable expense accounts based on the budget for the month and year of the charge date.

 For example, if the charge date is 12/12/ 2026 and this is the calculation option, Rent Manager examines the total budgeted expenses total for the selected CRE accounts from 1/1/ 2026 through 12/31/ 2026 , divides that total by 12 (months), and the result becomes the CRE amount to be divided.

 Subtract base amount

 Remove the Base Amount , as specified on the Charge Type Setup tab on their lease, from calculations at the time recurring charges are posted. Otherwise, the base amount is subtracted at the time of reconciliation.

 Use a specific amount

 The total for this non-recurring CRE charge is exactly what you enter in the Options field.

 Step 4: Select Tenants and Post Charges

 On this page, select all tenants account to charge as part of this posting, and post the charges to the tenants' accounts.

 To finish the Non Recurring CRE  posting, do the following:

 -
 Select the tenants who are charged by this posting.

 -
 Review the information in the following columns:

 Column
 Description

 Tenant

 The name of the commercial tenant.

 Acc #

 The system-generated account number used to identify the tenant account.

 Property

 The property associated with the tenant's lease.

 Unit

 The unit associated with the tenant's lease.

 Unit Type

 The category of unit that the tenant leases.

 Unit Sq Ft

 The total square footage of the unit the tenant leases.

 Charge

 The total dollar amount that the tenant is charged per this posting. Each tenant's charge is calculated according to the options selected on the previous screen. You can manually edit the charge as needed.

 Capped

 If the tenant's lease includes a charge cap for the charge type being posted, the amount displays in this column. If no cap amount is set, this column displays the amount from the Charge column.

 -
 To generate an invoice for the posted charges, check Create invoice for posted charges .

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 -
 Click Post .

 -
 Click Yes on the confirmation message.
The charges are posted to the tenants' accounts. If you chose to create invoices, those are added to the Invoices page and linked to the posted transactions.
