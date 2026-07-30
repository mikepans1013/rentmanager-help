# Add a Tenant

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Tenant-Add.htm

Tenants in Rent Manager generally refer to any people who lease rental units at a property. However, tenants can also be any leaseholders who rent units from your business, such as residents in single-family homes, members of a property's association, owners of commercial companies, or renters of storage units. This topic covers creating tenants in your Rent Manager database so you can track their leases at your properties.

 More Information

 To streamline the creation process, consider setting up tenant user-defined fields (UDFs), charges, lease terms, and other information related to your tenants before adding tenant accounts. For more information, refer to Customize Tenant Options .

 Related Preferences

 By default, leaseholders in your Rent Manager database are called Tenants . You can customize the entity name in system preferences to meet your business needs. For example, if you primarily own properties that are single-family homes, you can change Tenants to Residents . This updates the entity name for your entire Rent Manager database, so be sure to choose an entity name that works best for all your business purposes. For more information, refer to Entity Types (System Preferences) .

 The following steps use the standard add tenant wizard. If a custom wizard is set as the default, you might not see all of the following tiles. For more information about creating custom wizards, refer to Custom Wizards (Page) .

 Step 1: Add Tenant and General Information

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 Add, View

 For more information, refer to Control User Access .

 To create a tenant account, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants .
The Tenants page displays.

 -
 At the top, click Add Tenant .
The add tenant wizard set as default displays.

 More Information

 If your system has multiple add wizards set up using custom wizards, you will first be prompted to select the property . Your selection determines which wizard to display. If you change the selection during the add process, you will be prompted to switch wizards if applicable. For more information, refer to Design a Wizard .

 -
 In the Tenant Account and Addresses tiles, enter the following information:

 Field
 Description

 First Name

 The tenant's given or preferred name. For commercial tenants, this is the name of the primary contact for the lease.

 Middle Name

 The tenant's middle or alternative name. For commercial tenants, this is the name of the primary contact for the lease.

 Last Name

 The tenant's surname. For commercial tenants, this is the name of the primary contact for the lease.

 Is Company

 If this is a commercial tenant, check Is Company . This option displays only if the selected property has a Property Type of Commercial .

 If this option is checked, enter the required Company Name , which is the name displayed as the tenant throughout Rent Manager .

 More Information

 To define further commercial lease information for the tenant such as charge escalations and commercial recoverable expenses (CRE), you can edit their lease information after the tenant creation process is complete. For more information, refer to Add a Commercial Lease .

 Addresses

 The address(es) for the tenant. For the address you wish to use in reports and other areas of Rent Manager , such as contact labels, check Default . By default, you can enter a Primary and Alternate address. You can also create other address types to include here.

 Step 2: Enter Lease Information

 In the Lease tile, enter or select the following information:

 Field
 Description

 Property

 The property at which the tenant is leasing a unit.

 If the selected property has the Property Type of Manufactured Housing and the tenant has an RV that occupies the unit site, click Add Resident-Owned RV to open the Add RV pop-up and complete the following fields:

 # of Slide Outs

 The number of room extenders on the tenant's RV.

 Amps

 The amperage of the electrical hookup that the tenant's RV requires.

 Homeowner Status

 The ownership status of the RV ( Resident Owned , Employee Owned , or Change of Ownership ).

 Length

 The length of the tenant's RV.

 License

 The license plate number of the tenant's RV.

 Make

 The make of the tenant's RV.

 Model

 The model of the tenant's RV.

 Slide Outs

 The type(s) of slide outs or room extenders on the tenant's RV.

 Type

 The tenant's RV type ( Fifth Wheel , Hybrid Trailer , Pop-Up Camper , and so on).

 Width

 The width of the tenant's RV.

 Year

 The year the tenant's RV was manufactured.

 Unit

 The unit at the property which the tenant is leasing. If unknown, you can leave this blank for now and add it later. A unit must be selected in order to add recurring charges to this tenant.

 Move In Date

 The date on which the tenant officially moves into the unit.

 Move Out Date

 The date on which the tenant officially vacates the unit.

 It is recommended to leave this field blank during the tenant creation process because this field can affect important processes such as the posting of recurring charges if the tenant renews their lease and the field is not updated. Instead, it is best practice to use the Expected Move Out Date field for the estimated move out date, and then enter the official date into the Move Out Date field at a later time when the tenant has officially moved out.

 Notice Date

 The date on which the tenant informs the owner or landlord that they plan to move out of the unit.

 It is recommended to leave this field blank during the tenant creation process and enter it at a later date when the tenant has officially given their notice to vacate.

 Expected Move Out Date

 The estimated date on which the tenant plans to move out of the unit based on the lease agreement. If the expected move out date is unknown, leave this field blank.

 This field allows you to track when a tenant is likely to move out of the unit without officially marking them as a past tenant in Rent Manager when that date passes. It provides accurate reporting without changing the tenant status or stopping their recurring charges if the tenant stays longer than originally anticipated.

 Lease Start Date

 The date on which the tenant's lease legally begins, regardless of when they physically move into the unit.

 Lease End Date

 The date on which the tenant's lease legally ends, regardless of whether or not they renew the lease or physically vacate the unit.

 Alternatively, you can select the Lease Term for the tenant's lease, and the Lease End Date automatically populates with the appropriate date based on the selected term and the Lease Start Date .

 Lease Sign Date

 The date on which the tenant signed the lease agreement.

 Lease Term

 The duration of the tenant's lease, such as twelve months or month-to-month.

 If the selected property has a Property Type of Manufactured Housing , one of the following tiles displays:

 Tile
 Description

 Home

 This tile displays only if a home-type asset is located on that unit (lot) as of the date in the Move In field. The available options are described below.

 Add a lease for this home

 If checked, automatically create a lease for the home-type asset associated with the unit upon completing the transfer wizard. This option is available only if the asset is rentable.

 Related Preferences

 This option is checked by default if the Automatically create a lease for linked 'home' assets or units option is enabled in system preferences. For more information, refer to General Options (System Preferences) .

 Home

 This field is read-only and displays the asset currently located on the unit, as specified on the asset's details page.

 Homeowner Status

 The ownership status of the home-type asset associated with the unit, such as Community Owned - Employee or Resident Owned . This field can be edited only under certain conditions. For more information, refer to Homeowner Statuses Available on Move In .

 More Information

 If this status is set to Dealer Owned or Lender Owned , the Rent Free Period section displays. In the Start Date and End Date fields, enter the time period during which the unit does not generate income due to a rent-free promotion. To add additional time periods, click Add Rent Free Period .

 Home/RV Information

 This tile displays only if a home-type asset is not associated with that unit (lot) on or after the date in the Move In field. The available options are described below.

 Create a lease for the unit only

 The tenant does not have a resident-owned RV nor a home-type asset on the unit (lot). A lease is created only for the unit when the transfer wizard is completed.

 Enter resident owned RV details

 The tenant has a resident-owned RV they intend to place on the lot. If selected, enter information about the RV into the available fields to be included on the tenant's lease. For more information, refer to Lease Details (Page) .

 Link an existing home

 Associate the tenant's unit with a home-type asset.

 In the Home , field, select the home-asset to place on the lot.

 In the Home Location Start Date field, enter the date on which this home's location history at the unit begins.

 The Homeowner Status field displays the ownership status of the home-type asset, such as Community Owned - Employee or Resident Owned . This field can be edited only under certain conditions. For more information, refer to Homeowner Statuses Available on Move Out .

 To create a lease for the home-type asset upon completing the transfer wizard, check Add a lease for this home .

 More Information

 If you do not know your tenant's lease information at this time, skip this step and proceed to Step 4 . You can go back to the tenant account at a later time to add the lease information. For more information on adding a lease to an existing tenant, refer to Add a Lease .

 Step 3: Add Tenant Contacts

 In the Contacts tile, enter the following information. You can also add other contacts, such as additional occupants or emergency contacts.

 Field
 Description

 Contact Type

 The category of the contact, such as the primary tenant, a guarantor, or emergency contact.

 Applicant Type

 The category of applicant represented by this contact, such as the primary lease holder or an additional co-occupant.

 First Name

 The contact's given or preferred name.

 Middle Name

 The contact's middle or alternative name.

 Last Name

 The contact's surname.

 Email Address

 The contact's email address.

 Phone Number

 The contact's phone number. To enable the phone number for texting, click . Alternatively, to disable texting, click . The Ext. field for extensions is removed when texting is enabled.

 Primary

 Indicates that the information in the contact is used as the primary point of contact when communicating with this tenant. This option is checked by default on the first contact you add.

 Show On Statement/Labels

 Indicates that this contact's information displays on address labels and tenant statements.

 To add as many additional contacts as needed, click Add New Contact .

 Step 4: Enter Security Deposit and Payment Settings

 To enter information about the tenant's deposit charge and other payment information, do the following:

 -
 In the Deposit tile, enter security deposit information in the following fields. Only one security deposit can be added in this tile, but you can add additional deposits in the One-Time Charges tile later in the process.

 Field
 Description

 Deposit Type

 The charge type to use for the tenant's security deposit.

 Related Preferences

 The deposit charge types that display in this list are established in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 Deposit Amount

 The dollar amount of the tenant's security deposit for the selected charge type.

 Deposit Date

 The date on which the tenant's security deposit was charged. If the tenant already paid their security deposit, once the tenant is created, you can add the payment to their account. For more information, refer to Record a Security Deposit Payment .

 If the tenant's security deposit payment was received prior to your company using Rent Manager , check Deposit Prior to GL Start Date . This informs Rent Manager that the tenant's security deposit is accounted for in the property's beginning balances when the database was set up and implemented. This allows you to track the security deposits for each tenant without duplicating the payments.

 -
 In the Settings tile, enter or select additional account information or preferences into the available fields described below.

 Field
 Description

 Rent Period

 How often the tenant pays rent charges: on a Monthly , Weekly , or Daily basis.

 Due Day

 If the Rent Period is set to Monthly , select the day of the month on which the rent is due. To set the due day as the last day of the month for every month, enter 31 .

 If the Rent Period is set to Weekly , select the day of the week on which the rent is due.

 Tax Type

 The type of tax applied to invoices created for this tenant. Tax types are used when products are sold in areas with different tax amounts. For more information, refer to Tax Types (Page) .

 Color

 A color to help identify tenants of certain types, groups, or any other specifications you prefer, such as tenants with subsidized housing. The color displays as a bar to the left of the tenant in some areas of Rent Manager , such as the Tenants list page.

 Leasing Agent

 The Rent Manager user who acted as the tenant's leasing agent, if applicable. Rent Manager users with the option Sales Rep/Leasing Agent selected on the user's details page display in this list. For more information, refer to User Details (Page) .

 Subsidies

 If the tenant qualifies for subsidized rental housing (such as Section 8, FEMA, HUD, and so on), select the subsidy that applies to this tenant. Otherwise, leave this field blank. You can add subsidies later if you do not know what applies now. For more information, refer to Make a Subsidy Payment .

 More Information

 Subsidies must be set up in Rent Manager before you can apply them when creating a new tenant.

 Don't Charge Late Fees

 If this tenant should be exempted from late fees, check this option to prevent Rent Manager from applying any late fees to this tenant account when late fees are posted for the tenant's property.

 Don't Accept Payments

 Prevents all Rent Manager users from applying any form of payment to this tenant's account including making payments through Tenant Web Access and rmResident .

 When adding a payment to the tenant's open receivables, all options are disabled and a message stating Payments have been stopped for this tenant displays.

 Don't Accept Checks

 Prevents all Rent Manager users from applying check payments to this tenant's account.

 When adding a payment to the tenant's open receivables, a message stating Do not accept checks from this tenant displays. Additionally, the user cannot submit the payment if a check number is added to the Reference # field; the user must select Cash , MO , or CC .

 Don't Send AR Automation Notifications

 Prevents any automated accounts receivable notifications for open or delinquent charges from being sent to this tenant. For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Step 5: Add Charges

 In the Recurring Charges and One-Time Charges tiles, you can set up your tenant's recurring charges and also apply any one-time charges to their account immediately upon creation.

 Enter any needed recurring charges or one-time charges or credits to the tenant account. For more information on adding charges, refer to the sections below.

 Recurring Charges

 Recurring charges are charge templates that can be posted regularly, such as rent, pet fees, static utility fees, or other repeating charges for a flat amount. Rather than adding charges directly to the tenant account, recurring charges determine what charge(s) to apply to each tenant account whenever recurring charges are posted.

 More Information

 If there are any recurring charges established for the tenant's property, unit, or unit type, those recurring charges display in the list by default and are applied to the tenant account. If the tenant should not inherit these charges, uncheck the box to the left of the recurring charge to prevent it from being added to the tenant's recurring charges when the account is created.

 To add a tenant-level flat recurring charge to the account, do the following:

 -
 In the Recurring Charges tile, click Add Recurring Charge .
The Add Recurring Charge pop-up displays.

 -
 Enter or select the information for the recurring charge in the available fields described below.

 Field
 Description

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the GL account linked to the charge type.

 Amount

 The dollar amount charged to the tenant for the selected charge type when this recurring charge is posted.

 Calculation

 Optionally, instead of entering an Amount , you can enter a custom calculation that use scripts to calculate the amount for the tenant's charge. For more information, refer to Scripting .

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the Rent Period .

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

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

 Unit

 The unit to which this CRE recurring charge is applied.

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the GL account linked to the charge type.

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the Rent Period .

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 -
 In the Amount Distribution section, select one of the following options:

 Option
 Description

 Tenant's percentage of the total square footage of the property

 Charge an amount based on the percentage of each tenant's occupied square footage of the property's overall square footage.

 For example, if the CRE charge is for $3,000 and tenant rents 50% of the total square footage of the property, the tenant is charged $1,500.

 Warning

 For this option to work, the following fields must be accurately filled out:

 -
 The Square Footage field on the tenant's unit.

 -
 The Total Sq Ft field on the selected property.

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

 Occupied percentage of the total occupancy of the property

 Charge an amount based on the number of tenants at the property, charging each tenant an equal percentage of the total CRE based on the property's overall occupancy.

 For example, if a property consists of ten occupants that each have their own unit, each tenant is charged 10% of the total CRE charge. If there are ten total occupants at the property and one unit has four occupants, they are responsible for 40% of the CRE charge.

 Warning

 For this option to work, every occupant at the property must be added to Rent Manager as either a tenant or a tenant contact.

 Divide evenly among current tenants

 Charge an amount evenly among all your current tenants.

 For example, if the property has ten units and eight are rented by tenants, each tenant is assigned 1/8 of the total CRE charge.

 Divide evenly by number of units in the property

 Charge an amount evenly by the total number of units in the property.

 For example, if your property has ten units and eight are rented by tenants, each tenant is assigned 1/10 of the total CRE charge. This means part of the total CRE charge is not assigned to a tenant if there are any vacant units at the property.

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

 Use an amount from tenant user defined field

 The total CRE charge is determined by a specified tenant -type user defined field (UDF). In the User Defined Fields field, select the desired UDF where the amount value is stored for the tenant.

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Warning

 For this option to work, you must create a numeric tenant-type UDF used specifically for tracking percentages, then enter a value for that UDF on the tenant account. For more information, refer to Add a Numeric User Defined Field .

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

 Use budget expenses from

 The total CRE charge is determined by the budgeted expenses for the specified CRE general ledger (GL) accounts. In the GL Account field, select the GL account(s) to examine budgeted information.

 Warning

 For this option to work, you must have budgets established in your database for the selected accounts. For more information, refer to Budget (Page) .

 Use a specific amount

 The total CRE charge is determined by a set dollar amount. In the Amount field, enter the desired amount for the CRE charge.

 Warning

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 -
 Click Save .
The recurring charge is added to the tenant. Repeat these steps for any additional recurring charges needed for the account.

 One-Time Charges

 One-time charges are single charges or credits you can add to the tenant account. When creating a new tenant, they are useful for situations such as pet deposits, promotional move-in credits, or prorating the first month of the tenant's rent if they moved in after the first day of the month.

 More Information

 If security deposit charges are established on the tenant charge setup or included in an active rent quote, they are added to this tile by default. However, if the tenant is being added to a property that is using Rentable for security deposits, charges associated with security deposit charge types are not included. For more information, refer to Set Up Security Deposits with Rentable .

 To add a one-time charge to the new tenant account, do the following:

 -
 In the One-Time Charges tile, click Add Charge .
The Add Charge pop-up displays.

 -
 Enter or select the information for the one-time charge or credit in the available fields described below.

 Field
 Description

 Charge Type

 The charge type to use for this transaction. The posted charge impacts the GL account linked to the charge type.

 Date

 The date on which the transaction is applied to the tenant account regardless of when the tenant account is created.

 Amount

 The dollar amount charged to the tenant for this transaction. To credit the tenant, enter a negative amount.

 If charging the tenant for a partial month, enter the full amount for the month and then click Prorate . Click the drop-down below to learn more. Once you have the Prorated Amount , click Save .

 More Information

 On the Prorate Transaction pop-up, the current charge information displays. In the Days Prorated field, enter how many days for which to prorate the transaction.

 If Always prorate based on 30 days in a month is active in system preferences, the calculation always uses 30 days to determine the prorated amount. Otherwise, the calculation uses the actual number of days in the selected month.

 If needed, you can edit the total amount to prorate in the Full Charge Amount field. The Prorated Amount field displays the calculated amount for the remaining days in the month.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 -
 If you are adding a credit with a negative Amount , the Preallocations section displays. Click Add Item to preallocate this credit to a specific Charge Type for a specified Amount . When other charges are added to this tenant, this credit is applied to those charges only if it has the selected charge type, up to the entered dollar amount.

 -
 In the Other Information section, enter a Reference # to further identify the transaction.

 -
 Click Save .
The one-time charge or credit is added to the tenant. Repeat these steps for any additional one-time transactions needed for the account.

 Step 6: Enter Tenant UDF Values

 After entering the tenant's charges, select the User Defined Fields tab on the left. In the User Defined Fields tile, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the tenant.

 To view all the tenant-type UDFs in the database, click View All UDFs . For each UDF applicable to the tenant you are adding, enter or select the information in the Value column for the associated UDF.

 Step 7: Create the Tenant Account

 Once all information is added, click Save and Finish to complete the tenant creation process and close the pop-up. Alternatively, click Save and New to finish adding the tenant and refresh the pop-up to add another tenant account.
