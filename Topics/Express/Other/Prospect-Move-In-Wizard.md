# Move In Wizard

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Prospect-Move-In-Wizard.htm

The Move In wizard is designed to help you easily convert an existing prospect into a tenant in Rent Manager . You can move the tenant into a unit, create lease information, and enter values for user defined fields (UDFs). Instead of manually creating a new tenant account for an existing prospect, the wizard allows you to easily link a prospect's historical records, as well as their Tenant Web Access (TWA) user account, to their new tenant account. Once the Move In wizard is complete, the prospect's status is changed to Tenant , and the new tenant is added to the Tenants page.

 Prospects who already have a status of Lost or Lost-Rejected cannot be moved in using the wizard.

 More Information

 When you convert a prospect to a tenant in Rent Manager , the Move In wizard allows you to enter values into tenant-type user defined fields (UDFs) and select a lease term. Before moving in prospects, you can configure the UDFs and lease terms that fit your needs. For more information, refer to Lease Terms (Page) and Add a User Defined Field .

 Step 1: Enter Lease Information

 To convert a prospect into a tenant and move them into a unit, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect account.
The prospect's details page displays.

 -
 On the action bar to the right, click the   arrow_forward   Move-In .

 More Information

 If your system has multiple add wizards set up using custom wizards, you will first be prompted to select the property . Your selection determines which wizard to display. If you change the selection during the add process, you will be prompted to switch wizards if applicable. For more information, refer to Design a Wizard .

 -
 In the Account tile, verify the First Name and Last Name .

 -
 In the Lease tile, enter or select the tenant's lease information into the available fields described below.

 More Information

 If you do not know your tenant's lease information at this time, skip this step. You can go back to the tenant account at a later time to add the lease information. For more information on adding a lease to an existing tenant, refer to Add a Lease .

 Field
 Description

 Lease Documents

 The documents uploaded to be stored on the lease. This also displays any published signable documents associated with the prospect.

 Related Preferences

 If you allow tenants to view their leases in Tenant Web Access , they can also access any lease documents uploaded in the portal. For more information, refer to Tenant Web Access Leases Page Setup (System Web Preferences) .

 Lease End Date

 The date on which the tenant's lease legally ends, regardless of whether or not they renew the lease or physically vacate the unit.

 Alternatively, you can select the Lease Term for the tenant's lease, and the Lease End Date automatically populates with the appropriate date based on the selected term and the Lease Start Date .

 Lease Sign Date

 The date on which the tenant signed the lease agreement.

 Lease Start Date

 The date on which the tenant's lease legally begins, regardless of when they physically move into the unit.

 Lease Term

 The duration of the tenant's lease, such as twelve months or month-to-month.

 Move In Date

 The date on which the tenant officially moves into the unit.

 Move Out Date

 The date on which the tenant officially vacates the unit.

 It is recommended to leave this field blank during the tenant creation process because this field can affect important processes such as the posting of recurring charges if the tenant renews their lease and the field is not updated. Instead, it is best practice to use the Expected Move Out Date field on the Tenant details page for the estimated move out date, and then enter the official date into the Move Out Date field at a later time when the tenant has officially moved out.

 Property

 The property at which the prospect is leasing a unit.

 More Information

 If your system has multiple custom move in wizards set up, and you change the property selection during the move in process, you are prompted to switch wizards if applicable. For more information, refer to Design a Wizard .

 Unit/ORI Unit

 The unit the tenant is leasing.

 More Information

 If the prospect's rent quotes include quotes for units marked as other rentable items (ORI), as established on the General tile of the unit type's details page, information about the ORI lease is accessible by using or or at the bottom of the Lease tile.

 Step 2: Configure Home Assets

 If the selected unit's property has a Property Type of Manufactured Housing , the Home tile displays. In this section, if the unit has an associated home-type asset at its location, you can add a lease to that asset and view and/or change its homeowner status. If no home-type asset is located at the unit, you can add one or designate that a lease be created for the unit only. For all other property types, proceed to Step 3: Add General Account Information .

 Home Asset is Located On the Unit

 If a home-type asset is located on the selected unit (lot) as of the date in the Move In field, the following fields are available:

 Field
 Description

 Add a lease for this home

 If checked, automatically create a lease for the home-type asset located on the unit upon completing the move in wizard. This option is available only if the asset is rentable.

 Related Preferences

 This option is checked by default if the Automatically create a lease for linked 'home' assets or units option is enabled in system preferences. For more information, refer to General Options (System Preferences) .

 Home

 This field is read-only and displays the home-type asset currently located on the unit, as specified on the asset's details page.

 Homeowner Status

 The applicable ownership status of the home-type asset located on the unit. If there is only one or zero homeowner statuses that apply to the asset, the field is read-only and displays the applicable status or blank. For more information, refer to Homeowner Statuses Available on Move In .

 If this status is set to Dealer Owned or Lender Owned , the Rent Free Period section displays. In the Start Date and End Date fields, enter the time period during which the unit does not generate income due to a rent-free promotion. To add additional time periods, click Add Rent Free Period .

 More Information

 Homeowner status display names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 No Home Asset is Located On the Unit

 If a home-type asset is not located on the selected unit (lot) on or after the date in the Move In field, select one of the following options:

 Field
 Description

 Create a lease for the unit only

 The tenant does not have a resident-owned RV nor a home-type asset on the unit (lot) and a lease is created only for the unit when the move in wizard is completed.

 Enter resident owned RV details

 The tenant has a resident-owned RV they intend to place on the lot. If selected, enter information about the RV into the available fields to be included on the tenant's lease. For more information, refer to Lease Details (Page) .

 Link an existing home

 Place a home-type asset on the selected lot. If selected, enter information into the available fields described below.

 Home

 Select the home-type asset to place on the lot.

 Home Location Start Date

 Enter the date on which this home-type asset is placed on the lot and the home's location history at the unit begins.

 Homeowner Status

 The ownership status of the home-type asset. If there is only one or zero homeowner statuses that apply to the asset, the field is read-only and displays the applicable status or blank. For more information, refer to Homeowner Statuses Available on Move In .

 More Information

 Homeowner status names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Add a lease for this home

 Check to create a lease for the home-type asset upon completing the move-in wizard.

 Step 3: Add General Account Information

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 Add, View

 Prospects
 View, Edit

 Change account status to tenant
 Enabled

 For more information, refer to Control User Access .

 After entering the tenant's lease information, select the General Information tab on the left.

 -
 In the Addresses tile, enter the address(es) for the tenant. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the tenant's address, such as contact labels.

 -
 In the Comment tile, enter any additional notes or information about the tenant you wish to display on the tenant's details page. Check Show on Comment Banner to pin the comment in a banner at the top of the Tenant details page.

 -
 In the Miscellaneous tile, enter the following information into the available fields described below.

 Field
 Description

 Color

 A color to help identify tenants of certain types, groups, or any other specifications you prefer, such as tenants with subsidized housing. The color displays as a bar to the left of the tenant in some areas of Rent Manager , such as the Tenants list page.

 Default Tax Type ID

 The type of tax to apply to invoices created for this tenant. Tax types are used when products are sold in areas with different tax amounts. For more information, refer to Tax Types (Page) .

 Due Day

 If the Rent Period is set to Monthly , select the day of the month on which the rent is due. To set the due day as the last day of the month for every month, enter 31 .

 If the Rent Period is set to Weekly , select the day of the week on which the rent is due.

 Leasing Agent

 The user who acted as the tenant's leasing agent, if applicable. Users with the option Sales Rep/Leasing Agent selected on the user's details page display in this list.

 Rent Period

 How often the tenant pays rent charges: on a Monthly , Weekly , or Daily basis.

 Statement Method

 The tenant's preferred delivery method for tenant statements. The following statement methods are available.

 <Use Property Default>

 Indicate that the tenant prefers to receive tenant statements using the default Statement Method set on the Property details page.

 No Statement

 Indicate that the tenant does not prefer to receive tenant statements. When generating tenant statements, any tenants with a Statement Method of No Statement do not display in the results and no statement is generated for them.

 Email Attachment

 Indicate that the tenant prefers to receive tenant statements as PDF email attachments. When generating tenants statements, tenants with this option selected display only if the report option for Statement Method has Email or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Print

 Indicate that the tenant prefers to receive printed tenant statements by default. When generating tenants statements, tenants with this option selected display only if the report option for Statement Method has Print or All selected.

 VPO

 Indicate that the tenant prefers to receive printed tenant statements mailed through Virtual Post Office (VPO) . When generating tenants statements, tenants with this option selected display only if the report option for Statement Method has VPO or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Related Preferences

 This option displays only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO General (System Preferences) .

 Subsidies

 If the tenant qualifies for subsidized rental housing (such as Section 8, FEMA, HUD, and so on), select the subsidy that applies to this tenant. Otherwise, leave this field blank.

 -
 In the Payment Rules tile, check any of the following options:

 Option
 Description

 Don't Accept Checks

 Prevents all users from applying check payments to this tenant's account.

 When adding a payment to the tenant's open receivables, a message stating Do not accept checks from this tenant displays. Additionally, the user cannot submit the payment if a check number is added to the Reference # field; the user must select Cash , MO , or CC .

 Don't Charge Late Fees

 If this tenant is exempt from late fees, check this option to prevent Rent Manager from applying any late fees to this tenant account when they are posted for the tenant's property.

 Don't Send AR Automation Notifications

 Prevents any automated accounts receivable notifications for open or delinquent charges from being sent to this tenant. For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Step 4: Add Contacts

 After entering the tenant's general information, select the Contacts tab on the left.

 Field
 Description

 Applicant Type

 The category of applicant represented by this contact, such as the primary lease holder or an additional co-occupant.

 Contact Type

 The category of the contact, such as the primary tenant, a guarantor, or emergency contact.

 Email Address

 The contact's email address.

 First Name

 The contact's given or preferred name.

 Last Name

 The contact's surname.

 Middle Name

 The contact's middle or alternative name.

 Phone Number

 The contact's phone number.

 Primary

 Indicates that the information in the contact is used as the primary point of contact. This option is checked by default on the first contact you add.

 Show On Statement/Labels

 Indicates that this contact's information displays on address labels and tenant statements.

 To add as many additional contacts as needed, click Add New Contact .

 Step 5: Enter Tenant UDF Values

 After entering the tenant's contact information, select the User Defined Fields tab on the left. In the User Defined Fields tile, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the tenant.

 To view all the tenant-type UDFs in the database, click View All UDFs . For each UDF applicable to the tenant you are adding, enter or select the information in the Value column for the associated UDF.

 Step 6: Add Charges

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Modify charges in the move in wizard
 Enabled

 For more information, refer to Control User Access .

 After entering any required user defined fields, select the Charges tab on the left.

 In the Deposit tile, enter any deposits to add to the tenant's account using the available fields described below.

 Field
 Description

 Deposit Amount

 The total value of the security deposit being applied to the tenant account.

 Deposit Date

 The security deposit charge transaction date.

 If the prospect's security deposit payment was received prior to your company using Rent Manager , check Deposit Prior to GL Start Date . This informs Rent Manager that the prospect's security deposit is accounted for in the property's beginning balances when the database was set up and implemented. This allows you to track the security deposits for each account without duplicating the payments.

 Deposit Type

 The security deposit charge type to apply to the deposit.

 Related Preferences

 This field displays security deposit charge types established in your system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 In the Recurring Charges and One-Time Charges tiles, you can set up your tenant's recurring charges and also apply any one-time charges to their account as part of the move in.

 Enter any needed recurring charges or one-time charges or credits to the tenant account. For more information on adding charges, refer to the sections below.

 Recurring Charges

 Recurring charges are charge templates that can be posted regularly, such as rent, pet fees, static utility fees, or other repeating charges for a flat amount. Rather than adding charges directly to the tenant account, recurring charges determine what charge(s) to apply to each tenant account whenever recurring charges are posted.

 More Information

 If there are any recurring charges established for the tenant's property, unit, or unit type, those recurring charges display in the list by default and are applied to the tenant account. Any recurring charges added or selected on the reserved rent quote also display here. If the tenant should not inherit these charges, uncheck the box to the left of the recurring charge to prevent it from being added to the tenant's recurring charges when the account is created.

 Additionally, if the prospect, in the Rent Quotes tile, has an active rent quote that matches the property, unit, and lease term selected earlier in the Move In wizard, a recurring charge for the same amount as the rent quote is automatically created.

 To add a tenant-level flat recurring charge to the account, do the following:

 -
 In the Recurring Charges tile, click Add Recurring Charge .
The Add Recurring Charge pop-up displays.

 -
 Enter or select the information for the recurring charge in the available fields described below.

 Field
 Description

 Amount

 The dollar amount charged to the tenant for the selected charge type when this recurring charge is posted.

 Calculation

 Optionally, instead of entering an Amount , you can enter a custom calculation that use scripts to calculate the amount for the tenant's charge. For more information, refer to Scripting .

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the GL account linked to the charge type.

 More Information

 If the recurring charge was created from a rent quote, the charge type used is the one specified on associated property's Other Information tile, in the Rent Charge Type field. If the associated property has multiple charge types assigned, then the recurring charge displays highlighted in orange so that you can review it and make sure the correct charge type was selected.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the Rent Period .

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 -
 Click Save .
The recurring charge is added to the tenant. Repeat these steps for any additional recurring charges needed for the account.

 CRE Recurring Charges

 Commercial recoverable expenses (CRE) fees are primarily used in commercial rentals to distribute the expenses related to owning and maintaining the facility, including maintenance, taxes, and insurance. CRE Recurring charges are charge templates that can be posted regularly rather than manually adding charges directly to the tenant account. The amount charged each month may vary based on your setup. CRE recurring charges are most commonly used for commercial rent, but can also be used for situations where the owner has covered an expense upfront, but wants to bill back the tenant to cover a portion of that cost.

 To add a commercial recoverable expenses (CRE) recurring charge to the account, do the following:

 -
 In the Recurring Charges tile, click Add CRE .
The Add CRE Recurring Charge pop-up displays.

 -
 In the Commercial Recoverable Charge section, enter or select the information for the CRE recurring charge in the available fields described below.

 Field
 Description

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the GL account linked to the charge type.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the Rent Period .

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 -
 In the Amount Distribution section, select one of the following options:

 Option
 Description

 Divide evenly among current tenants

 Charge an amount evenly among all your current tenants.

 For example, if the property has ten units and eight are rented by tenants, each tenant is assigned 1/8 of the total CRE charge.

 Divide evenly by number of units in the property

 Charge an amount evenly by the total number of units in the property.

 For example, if your property has ten units and eight are rented by tenants, each tenant is assigned 1/10 of the total CRE charge. This means part of the total CRE charge is not assigned to a tenant if there are any vacant units at the property.

 Occupied percentage of the total occupancy of the property

 Charge an amount based on the number of tenants at the property, charging each tenant an equal percentage of the total CRE based on the property's overall occupancy.

 For example, if a property consists of ten occupants that each have their own unit, each tenant is charged 10% of the total CRE charge. If there are ten total occupants at the property and one unit has four occupants, they are responsible for 40% of the CRE charge.

 Warning

 For this option to work, every occupant at the property must be added to Rent Manager as either a tenant or a tenant contact.

 Tenant's percentage of the total rented square footage of the property

 Charge an amount based on the percentage of each tenant's occupied square footage of the property's overall square footage minus the square footage of any vacant units.

 For example, if the property's total square footage is 10,000 sq. ft. but 3,000 sq. ft. of the property consists of vacant units, each tenant's rented space is compared against the property's remaining 7,000 sq. ft. of total rented space. This means each tenant is charged a larger portion of the total CRE amount.

 Warning

 For this option to work, the following fields must be accurately filled out:

 -
 The Square Footage field on the tenant's unit.

 -
 The Total Sq Ft field on the selected property.

 In addition, all units at the property must have an accurate Square Footage entered.

 Tenant's percentage of the total square footage of the property

 Charge an amount based on the percentage of each tenant's occupied square footage of the property's overall square footage.

 For example, if the CRE charge is for $3,000 and tenant rents 50% of the total square footage of the property, the tenant is charged $1,500.

 Warning

 For this option to work, the following fields must be accurately filled out:

 -
 The Square Footage field on the tenant's unit.

 -
 The Total Sq Ft field on the selected property.

 Use CRE setup of the selected lease

 Charge an amount to each tenant based on the percentage of expenses you defined on the CRE Setup tab of the tenant's commercial lease.

 Warning

 For this option to work, the Pro Rata Share % and Administrative Fee % fields must be established on the commercial lease's CRE Setup tab.

 Additionally, enable one or both of the following fields to determine which CRE settings are included when calculating the charge amount:

 Pro rata share

 The percentage of the expenses for the selected CRE account defined on the commercial lease's CRE Setup tab.

 Amount = Expense Account * Pro Rata Share %

 For example, if an expense account has expenses of $500 and the pro rata share percentage entered is 15 , the pro rata share amount is $75 ( that is 15% of $500 calculated as 500 * 0.15 ).

 Administrative fees

 The pro rata share value multiplied by the administrative fee percentage defined on the commercial lease's CRE Setup tab.

 Amount = Pro Rata Share * Administrative Fee %

 For example, if the pro rata share is $75 and the administrative fee is 10%, the fee is $7.50 (that is 10% of $75 calculated as 75 * 0.1 ).

 User percentage in tenant's user defined field

 Charge an amount based on the percentage specified in a tenant-type user defined field (UDF). The values in the selected field may range from 0 to 100 .)

 Warning

 For this option to work, you must create a numeric tenant-type UDF used specifically for tracking percentages, then enter a value for each tenant who receives a CRE charge. For more information, refer to Add a Numeric User Defined Field .

 -
 In the Amount section, in the Divide field, select an option below to determine how to split the CRE charges.

 Option
 Description

 Use an amount from property user defined field

 The total CRE charge is determined by a specified property -type user defined field (UDF). In the User Defined Fields field, select the desired UDF where the amount value is stored for the property.

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Warning

 For this option to work, you must create a numeric property-type UDF used specifically for tracking percentages, then enter a value for that UDF on the property account. For more information, refer to Add a Numeric User Defined Field .

 Use a specific amount

 The total CRE charge is determined by a set dollar amount. In the Amount field, enter the desired amount for the CRE charge.

 Warning

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Use an amount from tenant user defined field

 The total CRE charge is determined by a specified tenant -type user defined field (UDF). In the User Defined Fields field, select the desired UDF where the amount value is stored for the tenant.

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Warning

 For this option to work, you must create a numeric tenant-type UDF used specifically for tracking percentages, then enter a value for that UDF on the tenant account. For more information, refer to Add a Numeric User Defined Field .

 Use budget expenses from

 The total CRE charge is determined by the budgeted expenses for the specified CRE general ledger (GL) accounts. In the GL Account field, select the GL account(s) to examine budgeted information.

 Warning

 For this option to work, you must have budgets established in your database for the selected accounts. For more information, refer to Budget (Page) .

 Use expenses from

 The total CRE charge is determined by the previous expenses of the CRE accounts you select in the GL Account field over a selected period of time.

 Warning

 For this option to work, you must have expenses in the selected general ledger (GL) account(s) for the specified time frame.

 If selected, the following fields display and must be filled out. Each field is described below.

 GL Account

 The CRE expense account(s) for which to include expenses in the amount calculation.

 More Information

 This field displays only expense accounts that have the option Commercial recoverable expense (CRE) account checked.

 Method

 The time frame for which to examine the expenses in the specified GL accounts when calculating the CRE amount.

 Select Last year's expenses to examine the overall expenses accrued for the last twelve months prior to the date you selected when posting the charges.

 Select Month(s) ago to examine the overall expenses accrued for a specified number of months prior to the date you selected. In the Months field, enter the desired number of months.

 Select Annualized monthly average to examine the average monthly expenses accrued over the previous year.

 Basis

 The accounting basis by which the CRE totals are calculated: Cash or Accrual .

 Increase by (Percentage)

 The percent amount by which to increase the total CRE amount based on the selected Method .

 -
 Click Save .
The recurring charge is added to the tenant. Repeat these steps for any additional recurring charges needed for the account.

 One-Time Charges

 One-time charges are single charges or credits you can add to the tenant account. When creating a new tenant, they are useful for situations such as pet deposits, promotional move-in credits, or prorating the first month of the tenant's rent if they moved in after the first day of the month. Any one-time charges added or selected on the reserved rent quote also display here.

 More Information

 If security deposit charges are established on the tenant charge setup or included in an active rent quote, they are added to this tile by default. However, if the prospect is being moved into a property that is using Rentable for security deposits, charges associated with security deposit charge types are not included. For more information, refer to Set Up Security Deposits with Rentable .

 To add a one-time charge to the new tenant account, do the following:

 -
 In the One-Time Charges tile, click Add Charge .
The Add Charge pop-up displays.

 -
 Enter or select the information for the one-time charge or credit in the available fields described below.

 Field
 Description

 Amount

 The dollar amount charged to the tenant for this transaction. To credit the tenant, enter a negative amount.

 If charging the tenant for a partial month, enter the full amount for the month and then click Prorate . Click the drop-down below to learn more. Once you have the Prorated Amount , click Save .

 More Information

 On the Prorate Transaction pop-up, the current charge information displays. In the Days Prorated field, enter how many days for which to prorate the transaction.

 If Always prorate based on 30 days in a month is active in system preferences, the calculation always uses 30 days to determine the prorated amount. Otherwise, the calculation uses the actual number of days in the selected month.

 If needed, you can edit the total amount to prorate in the Full Charge Amount field. The Prorated Amount field displays the calculated amount for the remaining days in the month.

 Charge Type

 The charge type to use for this transaction. The posted charge impacts the GL account linked to the charge type.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 Date

 The date on which the transaction is applied to the tenant account regardless of when the tenant account is created.

 Unit

 The unit to which this charge is applied.

 -
 If you are adding a credit with a negative Amount , the Preallocations section displays. Click Add Item to preallocate this credit to a specific Charge Type for a specified Amount . When other charges are added to this tenant, this credit is applied to those charges only if it has the selected charge type, up to the entered dollar amount.

 -
 In the Other Information section, enter a Reference # to further identify the transaction.

 -
 Click Save .
The one-time charge or credit is added to the tenant. Repeat these steps for any additional one-time transactions needed for the account.

 Step 7: Move-In Reading

 After entering any charges for the account, select the Move-In Reading tab on the left. This displays when the last meter reading, across all meters, was posted for the unit and allows you to select which utilities need an off-cycle reading requested.

 Select Yes if an off-cycle meter reading is needed for any of the utilities at the property, then select the specific utilities you would like to make a request for. When you click the Move In button at the end of the wizard, a pop-up window provides you with further options on how you want to request or enter the off-cycle reading. This is described in detail later in this topic.

 Step 8: Tenant Self-Inspection

 After entering move-in readings for the account, select the Tenant Self-Inspection tab on the left. This allows you to send a tenant self-inspection to a tenant account through rmResident .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Inspections
 Sent Tenant Self-Inspections
 Enabled

 For more information, refer to Control User Access .

 In the Tenant Self-Inspection tile, use the toggle to enable the associated fields and enter the tenant self-inspection details using the available fields described below.

 Field
 Description

 Description

 Purpose of the inspection and if there are any additional notes to add in relation to the inspection.

 Expiration Date

 The date that the tenant self-inspection is no longer valid.

 Inspection Type

 The type of inspection that is being performed by the tenant.

 Template

 The template that is sent to the tenant to fill out during the inspection.

 Step 9: Save the New Tenant

 Once you have finished converting the prospect's information, click Move In to complete the tenant creation and move-in process and close the wizard.

 Step 10: Enter Off-Cycle Meter Readings

 If, in the Move-In Reading tile, you selected any utilities to get an off-cycle reading for, the Select Off-Cycle Reading Method pop-up displays after clicking Move In with options on how to request or enter the reading for each utility at the unit. Each utility selected in the Move-In Reading section displays on a separate page of the pop-up, allowing for unique preference selections for each utility meter.

 Use the Next and Back buttons at the bottom to switch between each utility to enter the information below:

 Option
 Description

 Send off-cycle request to rmAppSuite Pro

 Notify your maintenance techs in the field that an off-cycle reading is needed for the unit. They travel to the meter and enter the reading in rmAppSuite Pro .

 To send a request, enter information into the following fields:

 Due Date

 The date by which the meter reading should be entered in rmAppSuite Pro .

 Select users to receive an email notification

 Optionally, choose one or more users to receive a notification via email that a reading request has been made.

 Enter the Current Reading now

 If you already have meter reading information, or if you use utility estimates to enter readings, you can enter it directly from Rent Manager .

 More Information

 If meter estimates are enabled, click Estimate to enter a utility estimate as the off-cycle reading. For more information, refer to Estimate a Metered Utility Reading .

 To record a reading manually, enter information into the following fields:

 Current Reading

 The utility usage as of the most recent meter reading.

 Reading Date

 The date on which the most recent meter reading took place.

 After entering the information in this pop-up for each selected utility, click Submit . The move in process is completed.

 More Information

 If you close the Select Off-Cycle Reading Method pop-up or click Cancel , the steps completed in the Move In wizard are not saved. You must restart the wizard and complete it to move the tenant in.
