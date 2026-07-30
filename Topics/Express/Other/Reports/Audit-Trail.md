# Audit Trail

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Audit-Trail.htm

The Audit Trail report allows administrators to monitor user actions that affect financial data, setup, and other important aspects of your database. User actions are classified by audit types to help you identify and filter the report contents.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Audit Trail .

 For more information, refer to Control User Access .

 To view the Audit Trail report, do the following:

 -
 Go to  arrow_forward System arrow_forward Admin arrow_forward Audit Trail .
The Reports: Audit Trail page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Users to Include

 Select each user for which tracked actions display in the report. Select <Unassigned> to include tracked actions associated with system-generated audits. Optionally, check Include Inactive Users to include user accounts no longer marked as active.

 Audit Types

 Select from the following audit types to determine the information that display in the report:

 Type
 Description

 Account Add

 Displays when a tenant, prospect, owner, or owner account is created. Also displays when one-time charges are added or removed from an account.

 Account Group

 Displays each time a tenant is added or removed from an account group. The system-generated ID displays to identify each tenant that was added or removed.

 Allocation Clear

 Displays each time a user removes payment allocations for tenants, prospects, vendors, or owners.

 Asset Move

 Displays each instance of an asset being moved in the following ways:

 -
 A unit is converted to an asset via the Unit to Asset Conversion Wizard .

 -
 A unit converted to an asset is moved via the Unit Migration Wizard .

 -
 An asset's financial property is changed via the Financial Property Migration Wizard .

 Avid Invoice

 Displays each time a user overrides the accounting close date or changes the post date when importing invoices from AvidInvoice .

 Avid Vendor Sync

 Displays each time vendors are synced to AvidXchange .

 Bank Deposit

 Displays changes made to deposits when adding payments, removing payments, or changing information such as the date of the deposit.

 Bill Void

 Displays the date and description of bills that are voided.

 CashPay Cancel

 Displays each Zego CashPay transaction canceled.

 CashPay Payment

 Displays changes made to Zego CashPay payments.

 Charge Modify

 Displays recurring charges edited using the Modify Recurring Charges tool.

 Check Payee Change

 Displays each time a Payee is changed on a check.

 Check Print

 Displays each time a blank check is printed from the Print Checks page.

 Check Void

 Displays the date and description of checks that are voided.

 COGS Journal Impacted

 Displays each time a journal entry is created through using the Cost of Goods Sold (COGS) feature to create, delete, or modify service issues, purchase orders, or invoices.

 Contact

 Displays each time a new contact is added to a tenant or prospect account, including when a contact is created by adding a new tenant or by converting a prospect to a tenant.

 Create

 This audit type occurred in Rent Manager Xi when the following conditions were met:

 -
 In Management Company Settings , fees are posted using the option Charge to customer .

 -
 In Management Company Settings , a charge type has been selected for posting management fees as new charges to customer.

 -
 A recurring (auto) charge is created for a customer account that uses the same charge type identified in the previous step.

 This audit type displays only if your data is converted from Rent Manager Xi to Rent Manager 12 .

 Delete

 Displays any time a deletion is made. For example, deleting a charge type, transaction, tenant, recurring charge, deposit, bill, or an invoice is included in this audit type. The system-generated ID or name displays in the Description to identify the entity where the item was removed.

 ePay

 Displays ePay activity such as:

 -
 ePay reports are generated.

 -
 ePay system preferences are changed.

 -
 Property ePay information is changed.

 -
 Property ePay is enabled or disabled.

 -
 Property ePay bank is changed.

 ePay Refund

 Displays each time a refund is made via ePay .

 Estimate

 Displays status updates made to estimates past their expiration date.

 Eviction

 Displays each time a tenant eviction is deleted or changes are made to the following eviction fields:

 -
 Start Date

 -
 Eviction Reason

 -
 Close Date

 -
 Eviction Outcome

 History

 Displays the date and the account from which a history/note item is deleted.

 Import

 Displays when external data is imported into your database.

 Import Override

 Displays when you imported payments for tenants that have Don't Accept Payments checked on the tenant's details page and selected Ignore the Don't Accept Payments option and import all payments when prompted to override the Don't Accept Payments option.

 Insurance

 Displays when a user performs one or more of the following actions:

 -
 A property is added or removed from insurance tracking.

 -
 A property is added or removed from the master policy.

 -
 A property's master policy charge amount is changed.

 -
 A master policy transition is added for the property.

 -
 The property's policy transition date is changed.

 -
 The property is currently enabled for insurance tracking on update.

 -
 Setting changes, such as enabling or disabling insurance tracking or changing a policy's default charge amount.

 Inventory Items

 Displays each instance of an inventory item being edited in the following ways:

 -
 An inventory item is deleted.

 -
 An item's quantity is increased or decreased manually or via purchase orders.

 -
 An item's cost is updated via invoices.

 Invoice

 Displays the invoice number when unsaved invoices were canceled in Rent Manager Xi. This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Journal Void

 Displays the date and description of journal entries that are reversed.

 Late Fee Override

 Displays when new late fees are entered in the Allocations section on the Payment Allocations window in Rent Manager 12 .

 Late Fee Post

 Displays each instance of late fees being calculated in the following ways:

 -
 Late fees are posted.

 -
 Tenants meet the criteria for late fees but did not have late fees posted to their account.

 -
 Default late fee amounts were overridden before posting.

 Lease Add

 Displays each time new leases are added for a tenant, either by adding a new tenant or adding a new lease to an existing tenant. The system-generated ID displays to identify the corresponding tenant account.

 Lease End

 Displays each time a tenant’s Lease End date is edited since the lease was created. The system-generated ID displays to identify the corresponding tenant account.

 Lease Signed

 Displays each time a tenant’s Lease Sign date is edited since the lease was created. The system-generated ID displays to identify the corresponding tenant account.

 Lease Start

 Displays each time a tenant’s Lease Start date is edited since the lease was created. The system-generated ID displays to identify the corresponding tenant account.

 Lease Unit

 Displays each time the units associated with a tenant's lease changes. The system-generated ID displays to identify the corresponding tenant account.

 License Update

 Displays each time a user’s license was updated in the standalone version of Rent Manager .

 Loan

 Displays each time loans are added, updated, defaulted, or deleted.

 Location

 Displays each time a Rent Manager location is added or deleted.

 Lockbox Payment

 Displays each time a Zego Pay Lockbox payment is made.

 Make Ready

 Displays each time the last remaining item in a make-ready process is deleted or removed, and the user chooses to delete the make ready process when prompted.

 Marketing Overwrite Values

 Displays each time the system preferences option to Override Field Values is used to edit the existing values for unit or property ILS marketing.

 Merge

 Displays each time Merge Charge Types , Merge GL Accounts , Merge Users , Merge Prospects , or Merge Vendors is used.

 Move In

 Displays each time a tenant’s Move In date is edited. The system-generated ID displays to identify the corresponding tenant account.

 Move Notice

 Displays each time a tenant’s Notice date is edited. The system-generated ID displays to identify the corresponding tenant account.

 Move Out

 Displays each time a tenant’s Move Out date was edited. It also displays when a move-out confirmation is changed to confirmed or unconfirmed, and if the system preferences option to Require moveout confirmation to stop recurring charge posts is enabled. The system-generated ID displays to identify the corresponding tenant account.

 Owner Prospect Status Changed

 Displays each time the Status of an owner prospect is edited.

 Ownership Transfer

 Displays each time the Ownership Transfer Wizard is used to transfer ownership between owners.

 Partner Integration

 Displays when a user performs one or more of the following actions:

 -
 Activates or requests activation for a partner token.

 -
 Contacts partner sales or support via email in Rent Manager .

 -
 Deactivates a partner integration.

 -
 Updates the partner's notification email address, location, property, or bank settings.

 Post AvidPay Checks

 Displays each time a user pays AvidPay invoice batches.

 Posting

 Displays each time security deposit interest or management fees are posted. Also displays when a user edits the GL Start Date in system preferences.

 Preference Changed

 Displays each time system web preferences or system preferences are changed by a user.

 Prior Owner Transaction

 Displays each time a user backdates a transaction that affects previous postings for management fees or owner distributions.

 Prospect Stage Change

 Displays each time a prospect stage on a prospect account is edited by clicking in the Lead Information tile on the prospect's details page.

 Prospect Stage Delete

 Displays each time a prospect stage is deleted from a prospect account.

 Prospect Status Change

 Displays each time a prospect’s Status is changed to a tenant, a prospect is lost or rejected, or a tenant is changed back to a prospect.

 Purchase Order

 Displays each time purchase orders receive a reply from a user who is not part of the workflow.

 Reconcile Removed

 Displays each time a reconciliation is removed from a bank deposit, journal detail, credit card transaction, or check.

 Reservable Amenity Reservation Request

 Displays the name of the amenity reservation request when deleted.

 Retention

 Displays if the Purge ePay Data button in system preferences was used. This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Rollback

 Displays the name and type of each posting rollback performed.

 Screening

 Displays each instance of screening actions if they are performed in one or more of the following ways:

 -
 Screenings are run on a tenant or prospect.

 -
 An error occurs during screening.

 -
 AmRent screening settings are changed.

 -
 A screening report is viewed.

 -
 A screening is deleted.

 -
 An Income Verification screening is run on a tenant or prospect.

 -
 An Income Verification screening is viewed.

 -
 An Income Verification screening is deleted.

 Security

 Displays during the following instances:

 -
 Successful and failed log-in attempts. Failed log ins display the computer name, the server seat, and the username for the user attempting to log in.

 -
 A user is locked out for too many failed log-in attempts.

 -
 Privileges associated with user roles are updated. The user role name also displays.

 -
 If you use the legacy per-user licensing, this audit type displays when a password was reset using the RMO Account Passwords Register .

 -
 A user resubscribed an email address to an email list, or the user confirmed an override to send an email to an unsubscribed email address.

 Service Tech Time

 Displays the check-in or check-out times on service issues and when service hours are added via Rent Manager or rmAppSuite Pro .

 System

 Displays each instance of various system modifications, such as the following:

 -
 Removing a tenant from an association board or committee.

 -
 Entering the ePay password to access ePay settings.

 -
 Clearing the expiration dates for Insurance or Workers Comp on a vendor account.

 System Maintenance

 Displays each time the database is restored through the Rent Manager Xi file menu option Restore Data Backup and the backup to which it was restored. It also displays if the Clear Databases option was used. This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Tenant Transaction

 Displays each time tenant transactions are deleted or modified or when security deposits are transferred.

 Time Zone Invalid

 Displays when Rent Manager Xi can't determine from which time zone users are logging in from. This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Unit Convert

 Displays each time the Unit to Asset Conversion Wizard is used to convert an existing unit into an asset.

 Unit Move

 Displays each time the Unit Migration Wizard is used to move a unit to a different property.

 Update

 Displays each time certain items were updated, such as the following:

 -
 Name changes to various entities, such as charge types and contacts.

 -
 Some system preference changes, such as the System Preferences: ePay  - Security page.

 -
 Deactivation or deletion of report batches.

 -
 Changes to certain Rent Manager entries such as invoices.

 -
 On bills, the Approved field is checked or unchecked.

 -
 On checks, the amount or bank is changed.

 User Update

 Displays each time users are made active or inactive.

 Utility

 Displays each time the utility meter types for a unit were changed or added in the meter readings window in Rent Manager Xi. This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Version Update

 Displays when the RM2000 executable product version number changed during a Rent Manager Xi Live Update . This audit type displays only if data was converted from Rent Manager Xi to Rent Manager 12 .

 Violation

 Displays the violation's code name and account number when a violation is deleted. It also displays changes made to violation code names.

 VPO

 Displays each time a Virtual Post Office (VPO) error occurred during processing. If your database was converted from Rent Manager Xi, it also displays confirmation that VPO addresses converted from Rent Manager Xi to Rent Manager 12 correctly.

 Web Chat

 Displays the account name, queue name, and initial message when a web chat conversation is deleted. For more information, refer to My Conversations (Web Chat) (Page) .

 Web Product

 Displays each time a tenant or prospect is linked to a Tenant Web Access web user account. It also displays when a TWA account username is updated.

 Web User Account

 Displays the username, account type, and account name when a Web Portal Suite user account is deleted.

 Search Description

 Enter criteria to further filter the report results for the selected users and audit types. For example, entering 31 filters results to the actions of the selected audit types that have an account number, date, address, and so on. that includes 31 .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Description

 The actions taken by the user with the relevant information.

 User

 The username of the person who performed each action.

 Date

 The date and time that the action was performed.

 Audit Type

 The category of the action taken by the user.
