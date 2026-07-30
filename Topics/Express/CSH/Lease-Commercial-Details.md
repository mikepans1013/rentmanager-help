# Commercial Lease Details (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Lease-Commercial-Details.htm

Commercial leases allow you to create charge/rent escalations, track retail sales, and configure charge types and GL accounts for commercial recoverable expenses (CRE). The information entered in commercial leases can be used in reporting, such as the Commercial Rent Roll report, to calculate non-recurring CRE charges, and to perform common area maintenance (CAM) reconciliations.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and manage a commercial lease, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a commercial tenant. Then, on the Leases tile, click and select a lease.

 On the left side of the pop-up, you can select any of the past lease renewals. By default, the pop-up opens with the most recent lease.

 General Information

 At the top of the pop-up, read-only details about the currently selected lease display.

 Field
 Description

 Original Start

 The date that the tenant's first lease began. This date is updated only if the original Lease Start date is edited.

 Property

 The property associated with the selected lease.

 Market Rent

 The current active market rent value for the tenant's unit. This value updates whenever the unit's market rent is modified and does not consider the duration of the lease or occupancy.

 Unit

 The name and square footage of the unit associated with the selected lease.

 Lease Information

 The Lease Information tab displays basic information associated with the commercial lease, including the property, unit, lease terms, insurance coverage, and user-defined field (UDF) values.

 Field
 Description

 Property

 The property where the tenant is leasing.

 Unit

 The name of the unit the tenant is leasing.

 Lease Start

 The date that the tenant's lease begins.

 Lease End

 The date that the tenant's lease expires.

 Lease Sign

 The date that the tenant signed the lease.

 Lease Term

 The lease term that defines the length of the lease. For more information, refer to Lease Terms (Page) .

 Move In

 The date that the tenant moved into the unit.

 Move Out

 The date that the tenant moved out of the unit.

 Notice

 The date that the tenant gave notice that they would be vacating the unit.

 Expected Move Out

 The anticipated move-out date based on the terms of the lease.

 Insurance

 The policy information for the tenant's existing insurance coverage, if applicable.If the tenant has renters insurance, the status of their insurance displays with the expiration date. A copy of the tenant's insurance policy is also available in this section. If Don't require insurance is selected, this section is grayed out. If the tenant does not have renters insurance, click Upload Existing Coverage to manually update their policy.

 User Defined Fields

 The Name and associated Value for any Commercial Lease -type user-defined fields (UDFs).

 Charge Escalations

 The Charge Escalations tab displays the historical record of any escalations based on square footage. When Show Recurring Charges is selected, the Recurring Charges also displays a list of all recurring charges associated with the lease. Escalations entered on this tab display on certain commercial reports, including the Commercial Rent Roll and Lease Abstract reports.

 Escalations

 Each charge escalation is listed in its own tile with the associated charge type in the tile header. The following columns display for square footage-based charge escalations:

 Column
 Description

 Escalation Date

 The date that the charge escalation takes effect.

 Amount/Sq. Foot

 The dollar amount charged per square foot of the unit.

 Amount

 The total amount of the charge after multiplying the unit's Square Footage by the Amount/Sq. Foot .

 Recurring Charges

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Recurring charges
 Edit

 For more information, refer to Control User Access .

 The following columns display on the Recurring Charges tile:

 Column
 Description

 Inherited from

 Indicates which recurring charges are set at the tenant level and which recurring charges are inherited from the property, unit type, or unit level.

 Inherited recurring charges can only be edited on the details page for the entity type from which the charge originates. For example, to edit a recurring charge inherited from the tenant's property, go to the property account and open the View Recurring Charges pop up to edit the charge.

 Charge Type

 The charge type associated with this recurring charge. Each charge type is linked to one of the general ledger (GL) accounts from your chart of accounts.

 Comment

 Descriptive information about the recurring charge.

 Frequency

 The number of months, weeks, or days that should elapse between each posting of the recurring charge. For example, if a tenant has a Monthly rent period, a frequency of 1 means the recurring charge posts once every month, and a frequency of 3 means the recurring charge posts once every three months.

 From Date

 The first date on which this recurring charge is applied to the tenant's account when recurring charges are posted.

 To Date

 The final date on which this recurring charge can be posted to the tenant's account. After this date, this recurring charge is no longer applied to the account when recurring charges are posted.

 $/Sq Ft

 If the recurring charge was added as commercial recoverable expense (CRE) charge, the amount the tenant was charged for each square footage based on the selected option in the Amount Distribution section. For more information, refer to Add a CRE Recurring Charge .

 Amount

 The amount of the corresponding charge type that posts to the tenant's account.

 Charge Type Setup

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 CRE and charge type setups
 View, Edit

 For more information, refer to Control User Access .

 The Charge Type Setup tab displays the base year and amount (as defined by the tenant's lease agreement), the cap terms, and amounts for each CRE charge type on the tenant's lease.

 Field
 Description

 Charge Type

 The charge type to which that is applied to the tenant account. Only charge types with the CRE Charge Type option enabled display here.

 Base Year Start

 The date that begins the period for the Base Amount .

 Base Term

 The frequency with which CAM reconciliations are performed for this lease.

 Base Amount

 The amount to be initially subtracted from the expense total when reconciling against this charge type before determining this tenant's portion of the adjusted expense.

 Cap Term

 The length of time that the tenant can be charged the maximum amount.

 Cap Amount

 The maximum amount that can be charged to a tenant for the current CRE charge type in a Cap Term . Starting at the Base Year Start and for the length of the Cap Term value, the Cap Amount is in effect.

 % Cap Increase

 The percentage increase applied to the Cap Amount after the Cap Term expires.

 CRE Setup

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 CRE and charge type setups
 View, Edit

 For more information, refer to Control User Access .

 The CRE Setup tab displays the tenant's share of responsibility for commercial recoverable expense (CRE) charges. At the top of the tab, the Default Pro Rata Share % and Default Administrative Fee % values display. These values are applied to any CRE accounts with <Use Default> selected in the Pro Rata Share % and Administrative Fee Share % , respectively.

 Field
 Description

 CRE Account

 The general ledger (GL) account with the Commercial recoverable expense (CRE) account option enabled.

 Pro Rate Share %

 The percentage for the pro rata share of the expense account charged to the tenant using the following formula:

 Pro Rata Share Amount = CRE Account Expenses * Pro Rata Share %

 By default, <Use Default> is selected and uses the Default Pro Rata Share % unless otherwise specified.

 Administrative Fee %

 The percentage of the calculated pro rata share percent expense amount charged to the tenant as an additional administrative fee. By default, <Use Default> is selected and uses the Default Administrative Fee % unless otherwise specified. The fee amount is calculated using the following formula:

 Administrative Fee Amount = CRE Account Expenses * Pro Rata Share % * Admin Fee %
