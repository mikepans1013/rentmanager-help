# Ownership Transfer Wizard Results

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Ownership-Transfer-Results.htm

The Ownership Transfer Wizard allows you to move property ownership from one property to another in the event that the property is sold, inherited, etc. The original property is archived to preserve the historical records of the previous owner(s) and allow the new owner(s) to start the new ownership with a clean slate. Transferring ownership via this method results in the following:

 -
 A new property is created with the data from the source property.

 -
 New units are created with the data from the source units.

 -
 Tenants and prospects associated with the source property are re-associated with the new property and units.

 The headings below detail how specific types of data are handled with the transfer. Many changes are determined by how you have assigned properties.

 For example, if you selected that ***All Properties have access to an application template, the newly created property retains permission to use the template. However, if that template can only be used by some properties (even the old property you transferred), you must go into the application template and enable the new property in order to use the template for the new version of the property.

 Data That Needs the New Property Selected

 The following data is not automatically transferred to the new property after the transfer wizard. You must manually add the property to the tool or feature.

 More Information

 The ***All Properties option means all current and future properties, which automatically includes the new property created after the transfer. If the tool or feature has ***All Properties selected, you do not have to manually add the new property to it.

 Data
 Description

 Application Templates

 To add the new property to an application template, from the list of application templates, click arrow_forward Assign Properties for the application you wish to add the new property to. For more information, refer to Set Up Apply Now Application Settings .

 Automated Notifications

 To add the new property to automated notifications, from the automate notifications list, select the notification you wish to add the new property to. Then in the Properties field, select the new property. For more information, refer to Automated Notifications (Page) .

 Bills (one-time)

 To move one-time bills to the new property, you must change the assigned Property on the bill's details. For more information, refer to Bill Details (Page) .

 Jobs

 To move an existing job to the new property, you must change the assigned Property on the job's details. For more information, refer to Job Details (Page) .

 Task Automation

 The task automations listed below must have the new property added. To add the new property, you must select it in the Properties field of the automation's details.

 -
 Gross potential rent (GPR)

 -
 Late fees

 -
 Loans receivable late fees

 -
 Loans receivable postings

 -
 Management fees

 -
 Recurring charges

 -
 Recurring ePay

 -
 Recurring journals

 -
 Utilities

 Violation Code Groups

 To add the new property to violation code groups, you must select the new property in the Properties field of the code group's settings. For more information, refer to Violation Code Group Settings (Pop-Up) .

 Data That Transfers to the New Property Automatically

 The following data is automatically transferred from the old property to the new property. You do not have to add the new property to permissions.

 Data
 Description

 Applications

 Incomplete applications from prospects are assigned to the new property. Completed applications remain with the source property.

 Asset Location

 The location of the asset listed on the asset's details page in Asset Location (or Home Location ) tile is updated from the old property to the new.

 Bills (recurring)

 Recurring bills are transferred to the new property.

 More Information

 If, during the transfer wizard, you did not select Set the property inactive , the recurring bills will post for both the new and source property. To stop the bills from recurring at the source property, set an End Date for the source property's bill. For more information, refer to Recurring Bill Details (Page) .

 Bird's Eye View

 The associated maps and unit shapes are moved to the new property and units.

 Charges (open)

 Open charges are transferred to the new property after crediting the source property.

 If you selected Use an offsetting credit (negative charge) to transfer the open charge's remaining balance as of during the transfer, then any unpaid portions of partially paid open charges are created as new charges on the new property with the original charge date. A credit is added to the source property to offset the paid portion of the original charge.

 Custom Forms

 Custom forms associated with the source property and/or units are copied to the new property and/or units with the same user privileges and settings.

 Document Packets

 Document packets are transferred to the new property.

 Estimates

 Open estimates and memorized estimates are transferred to the new property.

 History/Notes

 Existing notes remain on the source property and its associated units and a note is added to indicate the transfer occurred.

 A history/note item is also added to the new property and its associated units to indicate the transfer occurred.

 Inspections

 Open inspections and inspection templates are transferred to the new property.

 Invoices (open and memorized)

 Open and memorized invoices are linked to the new property and/or units.

 Invoices are considered charges in the transfer wizard. If you selected Use an offsetting credit (negative charge) to transfer the open charge's remaining balance as of during the transfer, then any unpaid portions of existing, partially paid invoices are created as new invoices and linked to the new property and/or units.

 More Information

 Memorized invoices transfer to the new property only if they have a unit selected in the Unit field. If no unit is tied to the memorized invoice, it remains on the source property and does not transfer to the new property. For more information, refer to Memorized Invoice Details (Page) .

 Journals (memorized)

 Memorized journals are transferred to the new property.

 Leases (current and future)

 Tenant leases with a move-in date on or after the wizard’s Property Transfer Date are transferred to the new property.

 Current tenants will have a new lease created for the new property with a move-in date set to the date of the transfer. The lease start, lease end, and lease sign dates of the original lease are added to the new lease. The old leases have a move-out date set to the day before the transfer and remain on the source property.

 Loans

 Loans (both payable and receivable) are transferred to the new property, and all charges posted after the transfer are posted to the new property. Any initial charges—such as the sale of the home or asset—remain with the source property.

 Property Settings

 Certain property settings are transferred to the new property. The settings that transfer are listed below.

 Banks

 The bank selections in the property's Bank Settings field are transferred. For more information, refer to Property Details (Page) .

 Marketing

 Property-level marketing setups and the associated online listing results are transferred. For more information, refer to Property Marketing Setup (Pop-Up) .

 Images

 Property image types and images added to the property are transferred.

 Late Fees

 Property-level late fee setups are transferred. For more information, refer to Property Late Fees (Pop-Up) .

 Screening

 Property-level screening settings are transferred. For more information, refer to Property Screening Settings (Pop-Up) .

 Related Preferences

 The screening password for the property is reset to the password established in system preferences. For more information, refer to Screening Products Credentials (System Preferences) .

 Privileges

 Property privileges for users are transferred to the new property, allowing them to access the new property as they accessed the source property.

 Accounting Close

 Property-level accounting close settings are transferred. For more information, refer to Property Accounting Close (Pop-Up) .

 Prospects

 Prospect accounts are transferred to the new property.

 Purchase Orders (POs)

 Open purchase orders are transferred to the new property and/or units, even if there are partially-paid invoices or bills associated with the PO.

 Recurring Charges

 Current and future recurring charges are transferred to the new property and/or units. Past recurring charges remain on the source property/units.

 Reporting

 For report batches, memorized reports, and report automation, the source property is made inactive and the new property is added to the batch.

 Service Issues

 Open issues, memorized issues, and recurring issues are transferred to the new property. Any issues that are part of a project are also transferred if they were assigned to the source property. Closed issues remain linked to the source property.

 Subsidies

 Subsidies transfer with the tenant to the new property.

 Units

 All units are transferred to the new property. The following unit-specific settings are also transferred to the new units on the new property:

 Marketing

 Unit-level marketing setups and the associated online listing results are transferred. For more information, refer to Unit Marketing Setup (Pop-Up) .

 Images

 Unit image types and images added to the unit are transferred.

 Unit Types

 The unit types assigned to the property are transferred, including unit types marked as Other Rentable Item . For more information, refer to Unit Types (Page) .

 Utilities

 Utility setups and meter readings that have not yet been posted are transferred to the new property.

 Vendors

 Vendor associations are transferred to the new property and 1099 balances for the current year are transferred to the new property. 1099 balances for the prior year(s) remain with the source property.

 Open vendor credits are also transferred to the new property.

 Data That Is Not Transferred

 Some data cannot be transferred via the transfer wizard. The information listed in the table below remains with the source property.

 Data
 Description

 Asset Financials

 For assets that have Track Financials checked, the assets' financial information is not transferred to the new property. If assets were included with the sale of the property, the assets should be recreated with the new property set as the financial property. For more information, refer to Add an Asset .

 Warning

 It is recommended that you do not use the Financial Property Migration Wizard to change the financial property of the existing assets to the new property, as this will transfer all past financial data to the new owner and make the historical financial data inaccurate. For more information, refer to Financial Property Migration Wizard .

 Budget

 Budget data is not transferred to the new property and must be imported or manually entered. For more information, refer to Budget (Page) .

 Credits

 Open and partially used credits are not transferred to the new property and must be added to the new property. For more information, refer to Add a Credit .

 ePay

 Property ePay information is not transferred and must be added to the new property. For more information, refer to Property ePay Settings (Pop-Up) .

 Inventory Items

 Items that have Track Inventory checked remain on the source property.

 Related Preferences

 This applies only if the Track inventory by property option is enabled in system preferences. For more information, refer to P.O./Inventory (System Preferences) .

 Invoices (paid)

 Paid invoices remain linked to the source property and/or units. Partially-paid invoices will be zeroed out with offsetting credits and remain linked to the source property and/or unit.

 Leases (past)

 Leases for past tenants remain linked to the source property.

 Make Ready

 Open make-ready processes are not transferred to the new property. Open make-ready processes must be completed on the source property, or recreated on the new property. For more information, refer to Assign a Make Ready Process .

 Payments

 Payments remain on the source property and are not transferred to the new property. This includes partially allocated payments and undeposited payments.

 Task Automation

 The following task automations do not transfer to the new property:

 -
 ePay deposit reconciliation

 -
 Accounts receivable (AR)

 -
 Asset depreciation
