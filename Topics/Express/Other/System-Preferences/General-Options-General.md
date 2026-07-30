# General Options (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/General-Options-General.htm

These system preferences allow you to select general system settings for your Rent Manager database.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward General .
The System Preferences: General Options - General page displays.

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 Each setting is described below:

 Option
 Description

 Stop Transaction popup info. (Setting this can increase performance)

 Check to disable transaction details from displaying when hovering over a transaction on the a transaction ledger for tenants, prospects, owners and vendors. Disabling this feature can improve performance on slower systems.

 Disable automatic update notification

 Check to disable the automatic reminders to update the database if a Live Update is not performed in 30 days.

 Enable Auto-Login (uses Windows login for Rent Manager login)

 Check to log into both Windows and Rent Manager 12 . This requires the user's Windows login to match the user’s Rent Manager 12 login. After logging into your computer, you must open a web browser to access Rent Manager Express .

 Warning

 If Zego ePay is enabled for your database, you will be unable to use this feature due to the advanced password security ePay requires.

 Require Multifactor Authentication (MFA) to log in

 Enable this setting to require users to use an authentication app to log in to Rent Manager .

 More Information

 This option is available only from the default Rent Manager database location. For more information, refer to Manage Locations (Pop-Up) .

 Warning

 Once enabled, users across all your database locations are required to use a authenticator app to log in to Rent Manager . This change is effective immediately so it is suggested you speak to your team about this change before enabling the setting.

 Prorate recurring charges for tenants based on their move out date (if enabled for charge type)

 Check to automatically prorate monthly recurring charges for tenants with a move in date before the post date in the same month or a move out date during the month for which charges are being posted, provided that the charge types are set to Prorate by Day .

 Prorate recurring charges when the charge starts or ends during posting month (if enabled for charge type)

 Check to automatically prorate monthly recurring charges that start or end after the first of the month for which charges are being posted, provided that the charge types are set to Prorate by Day .

 Round prorated charges to the nearest dollar

 Check to automatically round prorated amounts to the nearest dollar using the banker's rounding method. This applies to prorated recurring charges and one-time charges.

 Always prorate based on 30 days in a month

 Check to prorate charge types set to Prorate by Day based on 30 days even in months of 28, 29, or 31 days.

 Allow multiple tenants to occupy the same unit (roommates)

 Check to allow multiple primary tenant accounts to be assigned to the same unit. Each tenant account is designated as Primary , listed independently, and has its own tenant account number and tenant-level charges and transactions.

 More Information

 When you add a roommate, child, spouse, or other tenant through contacts, you are adding additional people under one primary account holder’s account, which is not affected by this option.

 Additionally, this option does not apply to Short Term Rentals.

 Disable locking of History/Notes items

 Check to prevent users from locking the history/notes they record for a property, vendor, tenant, prospect, and so on. Keeping history/notes unlocked allows other users to update the notes.

 Require a category on History/Notes items

 Check to require that users select a history category when creating history/note entries.

 Warn when depositing to other than the default bank

 Check to display a warning when depositing funds to a bank that is not the property's default bank.

 Require moveout confirmation to stop recurring charge posts

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Confirm move out
 Enabled

 For more information, refer to Control User Access .

 Check to require that a tenant's Move Out date be verified before recurring charges stop posting to the tenant's account.

 Entering a Move Out date results in a move-out icon displaying on the lease, meaning that the move out has not been verified.

 The move out is not confirmed until the move-out icon is clicked, turning it green:

 Prompt to charge unposted recurring charges upon broken lease

 Check to enable lease financial responsibility for tenants who break their lease by moving out before their lease has ended. If enabled, Rent Manager prompts you to review and post recurring charges for the tenant that occur after their Move Out date but before their Lease End date. Optionally, you can delete charges or add additional fees.

 Enable Job Costing

 Check to enable job costing in Rent Manager , allowing you to track income and expenses associated with jobs completed by your business.

 More Information

 Enabling this option will add three job costing privileges to the accounting privilege group.

 Automatically create a lease for linked 'home' assets or units

 Check to automatically generate an additional lease when there is a home-type asset linked to a unit via an asset type that has the option Assets of this type are homes enabled (or vice versa) selected during the tenant move-in process.

 Don't allow duplicate asset names

 Check to prevent users from updating an asset name or creating a new asset with a name that is already in use by an existing asset.

 Automatically move out 'home' assets

 Check to automatically move out the linked home asset (a home-type asset linked to a unit via an Asset Type that has Assets of this type are homes enabled) with the unit during the move out process, and bypass the move out selection window.

 More Information

 The move out selection window is bypassed only if the tenant's only leases are a unit and its linked home asset. If any additional leases are present, the lease selection form displays.

 Inherit recurring charges from the home asset's financial property

 If enabled, tenants leasing an asset inherit recurring charges from the asset's associated financial property.

 Manage Unit licenses by location

 Check to display the Manage Location Unit Licensing Limits user privilege. This system preference displays only in default Rent Manager locations where per unit licensing is enabled. For more information, refer to System Privilege Group .

 Default Unit Sort

 In the Multiple Tenant Leases in List section, select the default method for displaying tenants in the tenants page when tenants have more than one lease.

 Show Active Lease with Lowest Sort Order

 One tenant record displays in the tenants page, and each lease is listed individually on the tenant's details page.

 Show Separate Record Per Lease

 One tenant record per lease displays in the tenants page. Each lease is still listed individually on the tenant's details page.
