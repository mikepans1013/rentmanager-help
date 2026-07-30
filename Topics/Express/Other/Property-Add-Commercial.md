# Add a Commercial Property

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Property-Add-Commercial.htm

Most people think of properties in terms of real estate: either land or a physical building. In Rent Manager , the definition of a property applies to any entity with its own financial data (i.e., generates revenue and incurs expenses). This means you should create a property in Rent Manager for each financial entity.

 For example, if you have a shopping center and each store has its own finances that are tracked separately, you would create each store as an individual property. However, if all stores in the shopping center use the same financial data tracking, you would create only one property and add a unit to the property for each individual store.

 This topic covers adding commercial properties to your database, including but not limited to the following types:

 -
 Office

 -
 Industrial complex

 -
 Retail shop or mall

 -
 Hotel or motel

 -
 Mixed-use or hybrid

 -
 Entertainment or special-purpose

 Related Preferences

 By default, the financial entities in your Rent Manager database are called Properties . You can customize the entity name in system preferences to meet your business needs. For example, if you own only properties that are retail stores , you can change Property to Shop . This updates the entity name for your entire Rent Manager database, so be sure to choose an entity name that works best for all your business purposes. For more information, refer to Entity Types (System Preferences) .

 All accounting in Rent Manager is property-specific , meaning all transactions (tenant or prospect payments, journal entries, and so on) are linked to at least one property. This means you should create a property in Rent Manager for each financial entity. This helps organize the financial data in Rent Manager so that your finances can be structured in a way that best suits your business. It also provides more flexibility in reporting.

 More Information

 To streamline the creation process, consider setting up property UDFs, management fee templates, and other information related to your properties before adding properties. For more information, refer to Customize Property Options .

 Warning

 If you are a fee-based management company, you also need to create a separate property for the management company, since it is its own financial entity. For example, you have expenses that are unrelated to any of your properties, such as the cost of installing new computers at the office.

 Once your company property is created, it must be established as the management company in system preferences so you can collect management fees from your owners. For more information, refer to Management Company (System Preferences) .

 Step 1: Create the Property and Add General Information

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Add

 Property Bank Settings
 View, Edit

 Management fee setup
 Add

 For more information, refer to Control User Access .

 To create a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties .
The Properties page displays.

 -
 At the top, click Add Property .

 -
 In the General Information section, enter the property's information into the available fields described below.

 Field
 Description

 Display Color

 A color to help identify properties of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the property in some areas of Rent Manager , such as the Properties list page.

 Property Name

 The full legal name of the property.

 Property Type

 When creating a property that will host commercial tenants, always select the type Commercial . If the property has both commercial and non-commercial tenants, you can specify whether or not each tenant lease is commercial.

 Short Name

 An abbreviated name for the property (ten characters or less) which displays on reports and drop-down lists in various areas of Rent Manager , such as bills and checks.

 -
 In the Other Information section, enter or select additional property information into the available fields described below.

 Field
 Description

 Comment

 Any additional notes or information about the property you wish to display on the property's details page.

 Default Bank

 The operating bank account for this property. This is the bank that typically pays expenses and receives payments for this property.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 NSF Fee

 The default non-sufficient funds (NSF) fee charged to tenants whose payments are rejected.

 To set a property-specific NSF fee amount, select Override system default and enter the property's NSF fee amount in the Custom Amount field.

 For more information, refer to General Ledger System Accounts (System Preferences) and Charge Type Details (Page) .

 Posting Day

 The day of the month on which users should post recurring charges to the tenant accounts at this property.

 Property Tax ID

 The property's legal tax identification code.

 Rent Charge Type

 The charge types to be considered rent charges for this property. This is important for certain reports, such as the Commercial Rent Roll , and late fee calculations when the On Rent Only option is selected for late fees setups.

 Statement Method

 The preferred delivery method of tenant statements for tenants associated with this property. This method is selected by default when adding tenants to this property.

 More Information

 This field determines which tenants are included when generating a Tenant Statement report based on the selection in the Statement Method report option. The user generating the report can then select the delivery method for the report based on this selection. For more information, refer to Tenant Statement 8.5x11 (Report) .

 <Use System Default>

 Use the default Statement Method established in system preferences for tenants added to this property. The method selected in system preferences displays in parentheses (e.g., <Use System Default> (Email) ). For more information, refer to General Report Options (System Preferences) .

 Email

 Tenants added to this property default to a Statement Method of Email . When generating tenants statements, tenants with this option selected display only if the report option for Statement Method has Email or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Print

 Tenants added to this property default to a Statement Method of Print . When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has Print or All selected.

 No Statement

 By default, tenants added to this property are set to not receive tenant statements. When generating tenant statements, any tenants with a Statement Method of No Statement do not display in the results and no statement is generated for them.

 VPO

 Tenants added to this property default to a Statement Method of VPO , for Virtual Post Office . When generating tenants statements, tenants with this option selected display only if the report option for Statement Method has VPO or All selected. For more information on VPO, refer to Set Up Virtual Post Office (VPO) .

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Related Preferences

 This option displays only if Virtual Post Office is enabled in system preferences. For more information, refer to VPO General (System Preferences) .

 -
 In the Add Unit, Unit Types, Amenities, and Users section, enter the applicable property information into the available fields described below.

 Field
 Description

 Automatically Create a Unit

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 Add, View

 For more information, refer to Control User Access .

 If you would like to automatically create a unit for this property when the property is added, check Automatically Create a Unit . Then in the Type of Unit to create field, select the unit type you wish to use for that unit. When the property creation process is completed, a unit of that unit type is automatically added to the property.

 This is useful for properties that have only one unit, such as a small storefront, because properties require at least one unit in Rent Manager to properly track and record leases, finances, and other important information. For properties that have multiple units, such as strip malls and shared office buildings, you can add multiple units to the property all at once after the property is created.

 Property Amenities

 All amenities available at this property. You can select amenities that apply only to the entire property, or you can also select amenities that apply only to some units. You have the ability to establish unit amenities at the unit level later.

 Users with Access to the Property

 All users that require access to this specific property. Their level of access is determined by their user permissions.

 Valid Unit Types for Property

 All unit types available at this property. This determines what unit types you can choose later when you add units to the property.

 -
 In the Marketing Configuration section, it is recommended that you select Property-level marketing , which allows units to pull all their information from the marketing information established on the property.

 More Information

 Although some ILS sites still support unit-level marketing, most ILS sites support only property-level marketing.

 -
 In the Addresses section, enter the address(es) for the property. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the property's address, such as invoices.

 More Information

 Address types for the property, such as an alternate or billing address, can be created or edited to easily record and reference multiple addresses on the same property account. For more information, refer to Property Addresses .

 -
 In the Contact Information section, enter the property's contact information into the available fields described below.

 Field
 Description

 Email

 The primary email address used for correspondence with the property or property manager.

 Manager Name

 The name of the person responsible for managing the property. This is often the property's primary contact.

 -
 In the Phone Numbers section, enter any relevant phone numbers for the property. The available columns are described below.

 Column
 Description

 Default

 Check to set this phone number as the contact to use in reports and other areas of Rent Manager that pull the property's phone number. Only one default number can be selected for the property.

 Extension

 If applicable, the extension that must be dialed for this phone number.

 Name

 The name of each phone number type that currently exists in Rent Manager .

 Number

 The full ten-digit phone number of the associated phone number type listed in the Name column.

 T (Is Text Ready)

 Check to mark the phone number as text-enabled, meaning the number can receive text messages.

 This is also used with Text Broadcasting to determine which phone numbers can be sent texts from Rent Manager .

 Step 2: Enter Property UDF Values

 The Add Property wizard displays user defined field information.

 After entering the property's general information, select the User Defined Fields tab on the left. In the User Defined Fields section, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the property.

 To view all the property-type UDFs in the database, click View All UDFs . For each UDF applicable to the property you are adding, enter or select the information in the Value column for the associated UDF.

 More Information

 If there are multiple owners for your properties in Rent Manager , complete step 4. If you are a fee-based management company, complete steps 4 and 5.

 If you are not a fee-based management company and all properties in the database are owned by a single owner, you do not need to set up any owners or management fees in the following sections. Click Save and Finish to complete the creation process and skip the remaining steps below. Alternatively, click Save and New to complete the creation process and refresh the pop-up to add another property.

 Step 3: Add Property Owner(s)

 After entering values for the property's user defined fields, select the Ownerships tab on the left. Then, do the following:

 -
 If the owner(s) of the property are not yet added to Rent Manager , on the right, click Add to create the owner account(s). For more information, refer to Add an Owner .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 Add, View

 For more information, refer to Control User Access .

 If the owners are already in the database, continue to the next step.

 -
 Under the Ownerships section, click Add Ownership .
A row of editable fields display.

 -
 Enter the owner information into the available fields for each column described below.

 Column
 Description

 End

 The date on which this owner's contract ends for this property. If the contract end date is not known or there is no contract end date, leave this field blank.

 Owner

 The owner account that is the owner of this property.

 Percentage

 The percent amount of the property that belongs to this owner. If this is the only owner, enter 100 . If there are multiple owners, the total percentage cannot exceed one hundred percent.

 Reserve

 The dollar amount of the owner's reserve funds for this property. This is a minimum balance that must be maintained in this property's bank at all times for this owner.

 More Information

 If the owner has the option Balance reserves across ownership enabled on their account, the owner's profitable properties cover any other properties they own that are operating with a reserve balance that is below the set minimum or in the negative. For more information, refer to Owner Details (Page) .

 Start

 The date on which the owner's contract begins for this property. Owner contract dates are important for historical records in Rent Manager and are also crucial to maintaining accurate data generated in owner-related reports.

 If applicable, repeat steps 2–3 for each additional property owner.

 -
 In the Primary Owner field above the owner list, select the owner of the property. If the property has more than one owner, consider choosing the owner with the highest percent of ownership. If there is no owner with a higher percentage of ownership, choose the owner with whom you communicate more frequently.

 -
 If you are not a fee-based management company, there are no further fields to complete. Click Save and Finish to complete the creation process and close the pop-up. Alternatively, click Save and New to complete the creation process and refresh the pop-up to add another property.
Otherwise, proceed to step 5 to set up your company's management fees for the property.

 Step 4: Establish Property Management Fees

 After entering information for the property's owners, do the following:

 -
 On the left, select the Management Fee Setup tab.

 -
 In the Method field, select the type of management fees to collect for the property. The options are described below. For more information, refer to Management Fee Setup Comparison .

 Option
 Description

 Advanced

 The Advanced method examines transaction activity for specific general ledger (GL) accounts over a period of time defined during fee posting. This method allows you to collect property-wide income, and percentages of total or net income.

 Standard

 The Standard method examines payments allocated to specific charge types since the last management fee posting. This method allows you to post fees as often as you like.

 -
 In the Start field, enter the date on which this management fee setup begins for this property.

 -
 In the End field, enter the date on which this management fee setup ends. If the end date is unknown or there is no end date, leave this field blank.

 -
 In the Templates field, select if you wish to use a fee template or create a custom fee setup for this property.

 Option
 Description

 Custom

 To use a custom management fee setup specific to this property, select <Custom Setup> . Then enter the required information into the available fields. The fields that display differ depending on the selected Method type. For field information, refer to Property Fees Setup (Pop-Up) .

 Template

 To use a management fee template already created in your database, select that fee template from the list. Only templates of the selected Method type display. For more information, refer to Management Fee Templates (Page) .

 If you select a fee template, the fields in this section are grayed out and the information is pulled directly from the template setup.

 -
 Click Save and Finish to complete the creation process and close the pop-up. Alternatively, click Save and New to complete the creation process and refresh the pop-up to add another property.
The property is added to Rent Manager .

 More Information

 If your database uses Task Automation , you may see the following pop-up upon clicking Save and Finish or Save and New :

 Newly created properties are not automatically added to your Task Automation schedules. If you want the new property to have automated postings, you must add it to each desired Task Automation schedule, unless that schedule has **All Properties selected.

 If you add the new property to a property group or property filter and that group or filter is selected for a Task Automation schedule, the property is included in the schedule by default. For more information, refer to Property Groups (Page) .

 Next Steps

 After creating the property, there are other settings you need to set up for you commercial property. These setups are described in the table below.

 Setup
 Description

 Commercial Lease UDFs

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 User defined fields (UDFs) are custom fields you create that allow you to track data that Rent Manager does not track by default. Commercial leases have a unique set of UDFs that is separate from standard lease UDFs.

 Commercial Tenants/Prospects

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Add

 Prospects
 View, Add

 For more information, refer to Control User Access .

 When you add a tenant or prospect and select the commercial property, check the Is Company option to designate the account as a commercial tenant/prospect. This allows you to enter a Company Name and add a commercial lease to the account. For more information, refer to Add a Tenant or Add a Prospect .

 Commercial Leases

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Create multiple leases on a tenant
 Enabled

 Modify tenant movein/moveout dates
 Enabled

 For more information, refer to Control User Access .

 Add leases to a tenants at the commercial property who have Is Company checked on their account. When adding the lease, check Commercial Lease to enable the commercial lease options, including charge escalations, cap amounts for charge types, and commercial recoverable expense (CRE) account information. For more information, refer to Add a Commercial Lease .

 CRE Recurring Charges

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Recurring Charges/Market Rent
 Recurring Charges
 Add

 For more information, refer to Control User Access .

 Commercial recoverable expenses (CRE) fees are primarily used in commercial leases to distribute expenses related to owning and maintaining the facility, such as maintenance, taxes, and insurance and can be split among multiple tenants. For more information, refer to Add a CRE Recurring Charge .

 Track Retail Sales

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 Some commercial tenants, such as those running retail shops, may require you to track your tenant's retail sales. For example, there may be a clause that requires the tenant to bring in a certain amount of income every month or their rent may be a percentage of their monthly sales. You can enable retail sales tracking to start recording tenant monthly sales totals via their commercial lease. For more information, refer to Track Retail Sales on a Commercial Lease .
