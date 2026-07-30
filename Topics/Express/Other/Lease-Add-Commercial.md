# Add a Commercial Lease

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Lease-Add-Commercial.htm

Commercial leases allow you to create charge/rent escalations, track retail sales, and configure charge types and GL accounts for commercial recoverable expenses (CRE). The information entered in commercial leases can be used in reporting, such as the Commercial Rent Roll report, to calculate non-recurring CRE charges, and to perform common area maintenance (CAM) reconciliations. The option to create a commercial lease displays only when the property selected for the lease has a Property Type of Commercial entered on the property's details page.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Additionally, if you are adding an additional lease to an existing tenant, the Create multiple leases on a tenant must also be Enabled .

 For more information, refer to Control User Access .

 Step 1: Create a Commercial Lease

 To create a new commercial lease for a tenant, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant who is linked to a commercial property.
The tenant's details page displays.

 -
 On the Leases tile, click .
The View Leases pop-up displays.

 -
 Click Add .
The Add Lease pop-up displays.

 -
 Check Commercial Lease .
The lease is now updated to a commercial lease, and additional tabs for commercial options are available.

 Step 2: Add Lease Information

 In this tab, add the basic details of the lease, such as the property, unit, and duration of the lease.

 To enter basic information about the lease, do the following:

 -
 In the Lease Information tab, enter the following information:

 Field
 Description

 Property

 By default, the property that the tenant is already associated with. Select a different property if needed.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The name of the unit the tenant is leasing. Enter the name or click to view and select from available units.

 Lease Start

 The date that the lease begins. This date can be used to help create a renewal term if no lease term is available when renewing leases.

 Lease End

 The date that the lease expires. Paired with the lease start date, this date can be used to help create a renewal term if no lease term is available when renewing leases.

 Lease Sign

 The date that the lease was signed by the tenant. This date can be useful in determining which lease came first for tenants with multiple leases.

 Lease Term

 The lease terms that define the length of the lease. Once selected, the Lease End date automatically populates according to the term length. For more information, refer to Lease Terms (Page) .

 -
 In the Move Dates section, enter the following information:

 Field
 Description

 Move In

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Modify tenant movein / moveout dates
 Enabled

 For more information, refer to Control User Access .

 The date that the tenant moves into the unit. It is best practice to enter a move-in date, as this determines when recurring charges begin for the tenant. Only tenants with the status of Current in Rent Manager receive recurring charges. Tenants with future move-in dates do not receive recurring charges.

 Move Out

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Modify tenant movein / moveout dates
 Enabled

 For more information, refer to Control User Access .

 The date that the tenant officially vacates the unit. If a tenant has a past move-out date, they are considered to be a Past tenant in Rent Manager and do not have recurring charges posted to their account. Typically, this field can be left blank until you have a confirmed move-out date. For reporting purposes, you can enter an Expected Move Out (move out) date instead.

 Notice

 The date on which the tenant gave notice that they are moving out of the unit. This date can be used in reports to plan for when a unit becomes available for future tenants.

 Expected Move Out

 The date that the tenant is expected to move out of the unit. This date can be used in place of a move-out date for reporting purposes. Having a date in this field does not impact recurring charges for the tenant.

 -
 In the User Defined Fields section, enter a Value for any UDFs applicable to this lease.

 Step 3: Set Up Charge Types

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 CRE and charge type setups
 View, Edit

 For more information, refer to Control User Access .

 This tab specifies the base year and amount (as defined by the tenant's lease agreement), the cap terms, and amounts for each CRE charge type on the tenant's lease. To save CRE values for a charge type, both the Base Year Start and Cap Term values must be entered.

 In the Charge Type Setup tab, enter the following information for each charge type that applies to this lease:

 Field
 Description

 Charge Type

 The charge type to which that is applied to the tenant account. Only charge types with the CRE Charge Type option enabled display here.

 Base Year Start

 The date that begins the period for the Base Amount .

 Base Term

 The frequency with which CAM reconciliations are performed for this lease.

 Base Amount

 The amount to be initially subtracted from the expense total when reconciling against this charge type before determining this tenant's portion of the adjusted expense. The value should be based on how often you perform CAM reconciliations on this charge type. For example, if you reconcile on a monthly basis, then you should enter the tenant's monthly base amount.

 More Information

 While performing a CAM reconciliation, if Subtract Base Amount is enabled and the distribution method of Use commercial recoverable expense (CRE) setup of the selected lease for Pro rata share selected. the subtracted base amount can reduce a tenant's total reconciliation amount to zero for the charge type. When subtracting a base amount, Rent Manager uses the following formula:

 (Base Amount - Expense) * Pro Rata Share % = Amount Due

 If by subtracting the base amount it cancels out the amount due, the tenant's balance is then zero but never a negative amount.

 Cap Term

 The length of time that the tenant can be charged the maximum amount.

 For example, consider a scenario where Monthly is selected and the Cap Amount for a charge type is $1,000. If the tenant is charged a total of $1,000 for that charge type by January 25, then they are not charged for that charge type again for the rest of the month. Then on February 1, the amount is reset and the tenant can be charged up to the Cap Amount again.

 Cap Amount

 The maximum amount that can be charged to a tenant for the current CRE charge type in a Cap Term . Starting at the Base Year Start and for the length of the Cap Term value, the Cap Amount is in effect.

 In a given term, a tenant's total for a CRE charge (the actual CRE charge plus any reconcile difference that appears on the CAM reconciliation) can be no more than the amount entered as the Cap Amount .

 % Cap Increase

 The percentage increase applied to the Cap Amount after the Cap Term expires.

 Step 4: Set Up Charge Escalations

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Recurring charges
 Add

 For more information, refer to Control User Access .

 As expenses increase over time, it is sometimes necessary for rent and other charges to tenants be increased. The Commercial Rent Roll and other commercial reports use the Charge Escalations tab to track rent escalations for commercial tenants. Use the Charge Escalations tab to set up planned charge increases for the tenant so that Rent Manager automatically increases these charges on the specified dates.

 To add a charge escalation, do the following:

 -
 Click Add Escalation to add a new charge type. If there are active recurring charges on the account, you click Generate From Recurring to autofill the charge escalation information.

 -
 In the search bar above the Escalation Date , select the charge type to escalate.

 -
 Enter the Escalation Date , which is the date on which the escalation takes effect.

 -
 Enter an amount in one of the following fields:

 Field
 Description

 Amount/Sq. Foot

 The amount to charge per square foot of the unit associated with this lease. This is multiplied by the Square Footage entered on the unit's details page to determine the total of the escalation's Amount .

 Alternatively, you can enter a total Amount as described below and this column calculates automatically.

 Amount

 The total Amount the tenant is to be charged for the escalation. This is divided by the Square Footage entered on the unit's details page to determine the total of the escalation's Amount/Sq. Foot .

 Alternatively, you can enter the Amount/Sq. Foot as described above and this column calculates automatically.

 -
 Click Add Item to add any additional dates to this charge escalation.

 -
 To add escalations for additional charge types, click Add Escalation and repeat the process for each charge type.

 Step 5: Enable Retail Sales Tracking

 Some commercial leases for retail tenants may require the tracking of your tenant's retail sales. For example, a certain clause may require that the tenant bring in a certain amount every month, or the tenant's rent may be a percentage of their monthly sales. Once retail sales tracking is enabled, you can start recording a tenant's monthly sales totals through their commercial lease.

 Related Preferences

 Retail sales can be enabled system-wide through system preferences. For more information, refer to Commercial (System Preferences) .

 To enter sales information, do the following:

 -
 Click Sales .

 -
 Click Add Item and enter the following information:

 Field
 Description

 Year

 The year in which the sales amount took place.

 Month

 The month in which the sales amount applies. Each time you add a line, the new line item automatically displays the next month.

 Amount

 The total dollar value of the sales within the selected month.

 -
 Click Save .
The sales history is saved and displays in this pop-up the next time you open it.

 Step 6: Save the Lease and Set Up Commercial Recoverable Expenses

 After all information is entered, you save the lease and set up the tenant's share of responsibility for CRE charges.

 Related Privileges

 Group
 Privilege
 Column

 Commercial Recoverable Expenses (CRE)
 CRE and charge type setups
 View, Edit

 For more information, refer to Control User Access .

 To save the lease and set up CRE charges, do the following:

 -
 Click Save .
The pop-up closes and the new lease is added to the tenant's Leases tile on their details page.

 -
 From the View Leases pop-up, click the newly created lease.
The Lease Details pop-up opens.

 - Click the CRE Setup tab.

 -
 Enter the following information about any CRE expense accounts used for this property:

 Field
 Description

 Default Pro Rata Share %

 A default pro rata share percentage (up to 4 decimal places) for each CRE expense account listed. This percentage is applied to any CRE Account below with < Use Default >  selected in the Pro Rata Share % column.

 Default Administrative Fee %

 A default administrative fee percentage (up to 4 decimal places) for each CRE expense account listed. This percentage is applied to any CRE Account below with < Use Default >  selected in the Administrative Fee % column.

 CRE Account

 A general ledger (GL) account with the Commercial recoverable expense (CRE) account option enabled.

 Pro Rate Share %

 The percentage for the pro rata share of the expense account to charge the tenant using the following formula:

 Pro Rata Share Amount = CRE Account Expenses * Pro Rata Share %

 By default, <Use Default> is selected and uses the Default Pro Rata Share % unless otherwise specified.

 Administrative Fee %

 The percentage of the calculated pro rata share percent expense amount to charge to the tenant as an additional administrative fee. By default, <Use Default> is selected and uses the Default Administrative Fee % unless otherwise specified. The fee amount is calculated using the following formula:

 Administrative Fee Amount = CRE Account Expenses * Pro Rata Share % * Admin Fee %

 If you select both Pro rata share and Administrative fees on the charge, the administrative fee is added to the pro rata share, and the total amount is charged to the tenant as a single transaction.

 -
 After CRE charges are set up, click Save .
The commercial lease is complete, and the terms apply starting on the Lease Start date.
