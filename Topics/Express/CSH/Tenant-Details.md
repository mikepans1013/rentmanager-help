# Tenant Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-Details.htm

In Rent Manager , tenant accounts correspond with leases. You can create tenant accounts for any individual or company who rents with you, such as businesses that lease commercial spaces, individuals and families who lease residential spaces, or members who belong to a home owner's association (HOA).

 A tenant's details page stores information about who is leasing at your property, such as their name, contact information, lease renewal information, pets, violations, Tenant Web Access (TWA) account details, and notes about your interactions with them.

 Related Preferences

 Since tenants are broad entities that work differently depending on your business, you also have the ability to change the name of the entity as it displays in Rent Manager . For more information, refer to Entity Types (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and manage a tenant's details, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.

 The following tiles display by default. If a custom layout is applied to your details page, you might not see all of the following tiles. For more information about creating and assigning layouts, refer to My Layouts (Page) and System Layouts (Page) .

 Additionally, the information that displays on the scoreboard at the top of the page may vary depending on your database's scoreboard setups. For more information, refer to Scoreboards (Page) .

 More Information

 Some Rent Manager integrations may display additional banners of information below the scoreboard regarding the feature.

 Addresses

 This tile displays the addresses associated with this tenant account, including any custom address types. You can enter the tenant's address manually, or click Copy Address from Unit to use the Primary address from the details page for the unit on the tenant's first lease.

 Contacts

 This tile displays phone numbers and email addresses for the tenant and other additional occupants of their unit. Communication with tenants, such as emails and phone calls, are sent to the primary contact information listed in this tile by default. If the tenant is associated with an Association -type property and is designated as a board and/or committee member, an indicator ( Board Member , Committee Member , or Board Member | Committee Member ) displays next to their name.

 Estimates

 This tile displays recorded anticipated costs for parts and labor needed to complete projects, itemize the costs, and provide a total amount due including any markups and/or taxes you add. This tile is available only through a custom layout, for more information, refer to Add a Personal Layout .

 Column
 Description

 Days Old

 The number of days between the current date and the estimate's Create Date as it displays on the Estimates page.

 Estimate #

 The unique system-generated number assigned to the estimate.

 Job

 If applicable, the job Name , as it displays on the job's General tile, associated with the estimate. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Reference

 A user-created identifier for the estimate.

 Status

 The current stage of the estimate. Only active estimates with the status of Draft or Awaiting Approval display.

 Total

 The total dollar amount of all inventory items, including any added markup or tax.

 Evictions

 When a tenant is currently in an open eviction process, the Evictions tile displays at the top of the details page and includes information about the current stage of the assigned eviction workflow. This tile is customizable and displays different information depending on your setup and the assigned workflow. For more information on how to customize the Eviction tile, refer to Eviction Workflows (Page) . For more details about the information that can display in the Eviction tile, refer to Evictions (Page) .

 After an eviction is closed, if the process ends in an eviction, the Eviction tile at the top displays at-a-glance information about the most recent eviction case. If the process does not end in eviction, the Eviction tile no longer displays.

 All Evictions

 On the details pages for all tenant accounts with a closed eviction, the All Evictions tile displays at the bottom of the page and includes the following information:

 Field
 Description

 Outcome Type

 If the tenant was evicted or not as a result of this eviction case.

 Close Date

 The date on which the eviction was closed in Rent Manager .

 Outcome

 The end result of the eviction case against this tenant. For more information, refer to Eviction Outcomes (Page) .

 Eviction Started

 The date on which the eviction case against the tenant was opened in Rent Manager .

 Eviction Reason

 The cause for which the eviction case was opened. For more information, refer to Eviction Reasons (Page) .

 General

 This tile displays information about the tenant and the details of their primary lease.

 Field
 Description

 First Name

 The tenant's first name that displays on reports and scripting.

 Last Name

 The tenant's last name that displays on reports and scripting.

 Property

 The default property associated with the tenant.

 Rent Period

 The expected rental period that determines if the tenant has charges posted to their account on a daily, weekly, or monthly basis.

 Due Day

 The day of the month on which rent is due for this tenant.

 If Rent Period is Monthly , there are options to select the day of the month ( 1–31 ) on which the tenant's rent is due. The default is 1 (the first of the month).

 If Rent Period is Weekly , there are options to select the day of the week ( Sunday–Saturday ) on which the rent is due (the default is Sunday ).

 Comment

 An optional comment to provide additional information about the tenant. To display this comment under the tenant scoreboard, check Show on Comment Banner .

 History/Notes

 This tile displays the most recent history/note items on the tenant's account. History/notes record information about interactions and communication with tenants, such as phone conversations or explanations of transactions. Rent Manager creates history/note items for system actions, such as the initial account set up or service requests. You can also add additional items from the tile.

 Column
 Description

 Date

 The date the note was created.

 Type

 The system-generated history/note type. For example, if the history/note item is linked to a service issue, the Service Issue type displays.

 Note

 The information to describe the history/note item (e.g., Confirmed inspection notice was received ). If no text is entered, the column displays blank.

 Leases

 This tile displays information about the tenant's current lease. including the start and end date and the lease terms. If the tenant has multiple leases, each lease displays as a separate row in the tile. You can renew the tenant's lease from this tile.

 Warning

 If a tenant has multiple leases, units can be reordered on the Leases tile by clicking and using to move units up and down the list. Reordering the list alters the output of existing scripts. New units are added to the bottom of the section. For more information, refer to Lease Indexing .

 Field
 Description

 Expected MO

 The date on which the tenant is expected to vacate the unit.

 Home

 If there is a home type asset linked to the unit, the Home field of the linked asset displays.

 Insurance

 If LeaseTrack insurance tracking is enabled in Rent Manager , the information that displays depends on the status of the insurance policy for the selected lease, including manufactured housing leases. If the tenant or homeowner is enrolled in a master policy, the master policy's liability limit and type are displayed here.

 For more information, refer to LeaseTrack Insurance .

 Related Preferences

 This field displays only if Enable insurance tracking is checked. For more information, refer to Activate and Set Up LeaseTrack Insurance .

 Lease Documents

 Published signable documents or manually uploaded lease documents associated with the tenant.

 Lease End

 The date on which the lease expires.

 Lease Sign

 The date on which the tenant signed the lease document.

 Lease Start

 The date on which the lease begins or began.

 Lease Term

 The duration of the lease.

 Move In

 The date on which the tenant moves into the unit.

 Move Out

 The date on which the tenant vacates the unit.

 Notice

 The date on which the tenant provided notice that they intend to move out of the unit.

 Property

 The property at which the tenant is leasing a unit.

 RV

 If a resident-owned RV is on the lot, the RV field displays that there is an RV on Lot .

 Unit

 The unit that the tenant is leasing.

 Miscellaneous

 This tile displays additional information about the tenant and rules regarding their lease terms. You can enable additional rules such as waiving late fees and limiting payment options.

 Field
 Description

 Tax Type

 The type of tax applied to invoices created for this tenant. Tax types are used when products are sold in areas with different tax amounts. For more information, refer to Tax Types (Page) .

 Display Color

 A color to help identify tenants of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the tenant in some areas of Rent Manager , such as the Tenants list page.

 Subsidies

 If the tenant qualifies for subsidized rental housing (such as Section 8, FEMA, HUD, and so on), select the subsidy that applies to this tenant. Otherwise, leave this field blank.

 Leasing Agent

 The user who acted as the tenant's leasing agent, if applicable. Users with the option Sales Rep/Leasing Agent selected on the user's details page display in this list.

 Statement Method

 The tenant's preferred delivery method for tenant statements. Each option is described below.

 <Use Property Default>

 Indicate that the tenant prefers to receive tenant statements using the default Statement Method set on the property's details page. The default method is displayed in parentheses. For example, if the property's Statement Method is set to Print , the field displays <Use Property Default> (Print) .

 No Statement

 Indicate that the tenant does not prefer to receive tenant statements. When generating tenant statements, any tenants with a Statement Method of No Statement do not display in the results and no statement is generated for them.

 Email

 Indicate that the tenant prefers to receive tenant statements as PDF email attachments. When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has Email or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Print

 Indicate that the tenant prefers to receive printed tenant statements. When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has Print or All selected.

 VPO

 Indicate that the tenant prefers to receive printed tenant statements mailed through Virtual Post Office (VPO) . When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has VPO or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Related Preferences

 This option displays only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO Defaults (System Preferences) .

 Don't Charge Late Fee

 If this tenant is exempt from late fees, check this option to prevent Rent Manager from applying any late fees to this tenant account when they are posted for the tenant's property.

 Don't Accept Checks

 Prevents all users from applying check payments to this tenant's account. When adding a payment to the tenant's open receivables, a message stating Do not accept checks from this tenant displays. Additionally, the user cannot submit the payment if a check number is added to the Reference # field; the user must select Cash , MO , or CC .

 Don't Accept Partial Payments

 Prevents any partial payments from being processed for this tenant. A partial payment is considered anything below the tenant's current balance due as of the payment date.

 Don't Accept Payments

 Prevents any payments from being processed for this tenant.

 Don't Send AR Automation Notifications

 Prevents any automated accounts receivable notifications for open or delinquent charges from being sent to this tenant. For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Don't Allow TWA Payments

 Prevents any web users associated with the tenant account from making ePay payments via Tenant Web Access (TWA) .

 Pets

 This tile displays the details for each pet entered on the tenant's account. It displays only if there are pet types established in your database.

 Recurring Charges

 This tile displays the active recurring charges that post to the tenant's account at specified intervals. You can add new recurring charges, including commercial recoverable expenses (CRE) charges, from this tile.

 Column
 Description

 Inherited from

 Indicates which recurring charges are set at the tenant level and which recurring charges are inherited from the property, unit type, or unit level.

 Charge Type

 The charge type associated with this recurring charge.

 Comment

 Descriptive information about the recurring charge.

 Frequency

 The number of months, weeks, or days that should elapse between each posting of the recurring charge. For example, if a tenant has a Monthly rent period, a frequency of 1 means the recurring charge posts once every month, and a frequency of 3 means the recurring charge posts once every three months.

 From Date

 The first date on which this recurring charge is applied to the tenant's account when recurring charges are posted.

 To Date

 The final date on which this recurring charge can be posted to the tenant's account. After this date, this recurring charge is no longer applied to the account when recurring charges are posted.

 Amount

 The amount of the corresponding charge type that posts to the tenant's account.

 Reservations

 If the tenant is a guest associated with a short term rental (STR) property, the Reservations tile displays with details for each STR reservation on the tenant's account. If a guest has multiple reservations, the tile displays a table with columns instead.

 Field
 Description

 Property

 The property at which the reservation was made.

 Unit

 The name of the unit the tenant reserved.

 Arrival

 The start date of the tenant's occupancy of the unit.

 Departure

 The end date of tenant's occupancy of the unit.

 # Nights

 The calculated number of nights between the Arrival date and the Departure date. If no Departure date is entered, this value displays 0 .

 This field displays only for tenants with a single reservation.

 Request

 Any additional information about the reservation.

 Source

 The origin of the reservation. If the reservation was created by a user, RentManager displays. If the reservation was created by the tenant thorough the Online Booking Portal, OnlineBooking  displays.

 Confirmation #

 The reservation's system-generated confirmation number.

 Status

 The current check-in status of the tenant's reservation. This field displays only for tenants with multiple reservations.

 Service Issues

 The maintenance requests or scheduled service appointments linked to this tenant's unit. Select Open or Closed to switch between information about service issues that need to be completed and information about previous requests that were already completed. In addition, you can add new issues from this tile.

 Column
 Description

 #

 The system-generated ID of the issue.

 Issue

 The Description of the task or work associated with the issue.

 Due

 The date by which the issue must be completed.

 Category

 The classification that describes the issue.

 Priority

 The urgency with which the issue needs to be completed.

 Status

 The condition that describes the current progress of the issue, such as New or Work In Progress .

 Assigned To

 The user who is to complete the issue.

 Transactions

 The most recent transactions processed for the tenant's account, including posted charges and payments made. You can record tenant payments and add additional charges from this tile.

 If the tenant is enrolled in Flexible Rent, their Flexible Rent status displays (i.e., Active or Deactivated ). For more information, refer to Flexible Rent .

 Column
 Description

 Date

 The date the charge, credit, or payment posted to the account.

 Reference #

 If applicable, the note entered by a user describing the type ( CASH , MO , the check number, and so on) of transaction.

 Description

 The system-generated details to provide context for the transaction.

 Amount

 The total value of the transaction. Payments and credits display with a negative value while charges display with a positive value.

 Balance

 The total amount due on the account after the transaction is applied.

 UDFs

 User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six tenant-type UDFs with values and used to track information that Rent Manager does not track by default.

 Workflow Project

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Workflow Projects
 View

 For more information, refer to Control User Access .

 If the tenant is linked to an active workflow, this tile displays each stage of that workflow process and the number of steps that are completed for each stage. Additionally, you can view each step and its assigned user by clicking to display the Workflow Project Overview .

 This tile displays only if the associated workflow project was created from a template with the Show workflow projects on tenant details option enabled. For more information, refer to Workflow Template Details (Pop-Up) .
