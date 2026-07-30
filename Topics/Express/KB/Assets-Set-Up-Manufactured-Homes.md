# Set Up Manufactured Homes as Assets

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Assets-Set-Up-Manufactured-Homes.htm

Rent Manager helps you manage a manufactured home community by allowing you to treat your physical homes as assets and lease them to tenants, just like units. You can link that home asset to a unit (which represents a lot) so that whenever one is rented, the other is also rented. This also allows you to track which lot each asset it tied to if your assets can move locations.

 Additionally, rent charges can be configured to automatically populate when moving tenants into a unit tied to an asset. Optionally, you can track the home's location, status, warranty, and maintenance information and keep detailed records about the home on the Asset detail page.

 You can also enable the tracking of financials to connect the asset to a property, which tracks expenses and income associated with that asset. Financial reports such as the Profit & Loss and the Unit Profit & Loss may also be generated for homes which are assets.

 Step 1: Create Home-Type Assets

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Asset Types
 Add, View, Edit

 For more information, refer to Control User Access .

 The first step in setting up manufactured homes as assets is to create a home asset type in Rent Manager .

 To create an home asset type, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Assets arrow_forward Asset Types .
The Asset Types page displays.

 -
 Click Add Asset Type .

 -
 Enter information into the available fields.

 Field
 Description

 Assets of this type are homes

 Check to designate assets of this type as home-type assets.

 Default Workflow

 The predetermined workflow this asset type follows, such as Maintenance and Repairs . For more information, refer to Asset Workflow Process .

 Description

 Additional information about when to use this type of asset.

 Name

 The name of the home-type asset (e.g., Multi-Section , Single-Section , and so on).

 -
 To finish, click Save & Close , or to create additional asset types, click Save & New .
The asset type is added to Rent Manager .

 Step 2: Set Up System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Renting home assets, such as manufactured homes, is often done in tandem with the lot they sit on. You can manually create separate leases for the asset and unit or you can enable system preferences to add the second lease automatically when creating the first lease. Additionally, you can enable system preferences to automatically move out a home asset when a tenant's lease is up.

 For more information, refer to General Options (System Preferences) .

 General Options

 To set up system preferences to automatically add the second lease for home-type assets and move a tenant out of the home asset, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General .
The System Preferences: General Options - General page displays.

 -
 In the General section, check or uncheck the following options.

 Option
 Description

 Automatically create a lease for linked 'home' assets or units

 If checked, automatically generates an additional lease when there is a home-type asset linked to a unit during the tenant move-in process or when adding a new lease to a tenant.

 Automatically move out 'home' assets

 If checked, automatically moves out the linked home-type asset at the same time as the unit during the move-out process.

 -
 To finish, click Save .
The selected system preferences are updated in Rent Manager .

 Tenant Charge Setup

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To track the income on your home asset, you can assign charge types for their charges in system preferences. These system preferences allow you to automatically generate both recurring and one-time charges for new tenants when a prospect is converted to a tenant with the move-in wizard, or when you create a tenant using the tenant add wizard.

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Tenant Charge Setup .
The System Preferences: General Options - Tenant Charge Setup page displays.

 -
 In the Default Recurring Charges section, click Add Recurring Charge to add a new row.
The Recurring Charge Setup pop-up displays.

 -
 Enter the desired Charge Type into the search field (e.g., Lot or RC ).

 -
 Enter an optional Comment that displays in the Comment column for the default recurring charge.

 -
 In the Where does this tenant-level charge come from? section, select Asset Rent to generate a recurring charge with the amount from the leased unit's linked home-type asset, as entered on the asset's details page in the Rent Amount field.

 -
 Click OK .
The charge is added to the list and the pop-up closes.

 -
 Click Save .
The recurring charge is added to the tenant.

 Property-Level Tenant Charge Setup

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 If a property requires a unique default recurring and/or one-time charge setup, you can create a property default charge setup to override the system tenant charge setup.

 To override these settings for a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property.
The property's details page displays.

 -
 On the action bar to the right, go to arrow_forward Tenant Charge Setup .
The Tenant Charge Setup pop-up displays.

 -
 Select Override System Preferences .

 -
 Make the desired changes.

 -
 Click Save .
The property's tenant charge setup is updated.

 Create Home Assets

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Manage Assets
 Add, View

 For more information, refer to Control User Access .

 To add a home-type asset, do the following

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Assets .
The Assets page displays.

 -
 Click Add Asset .

 -
 In the General tile's Asset Type field, select an asset type defined as a home to enable the appropriate fields in the wizard.

 -
 Enter the appropriate details for your home asset. For more information on each field in the wizard, refer to Add an Asset .

 -
 Click Save and Finish to complete the asset creation process and close the pop-up. Alternatively, click Save and New to finish adding the asset and refresh the pop-up to add another asset.
The home asset is added to the list of available assets.

 Link the Asset Location

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Modify tenant movein/moveout dates
 Enabled

 For more information, refer to Control User Access .

 If you have assets that are already added but do not have a location set, you can update these home-type assets and assign a location from the asset's details page. This has to be set in order to utilize the options Automatically create a lease for linked 'home' assets or units and Automatically move out 'home' assets in system preferences. For more information, refer to Add an Asset Location .

 Next Steps

 When you create a lease, you are able to generate a lease for both the unit and the home asset simultaneously. This can be done when creating a new tenant, adding a lease to an existing tenant, or moving in a prospect. When taking these actions, you can also add a homeowner status to assets associated with the lease.

 The following table outlines each method of creating leases for manufactured homes.

 Option
 Description

 Adding a tenant

 Create a new tenant and assign them to a property where home-type assets are located. For more information on the move-in process, refer to Add a Tenant .

 Adding a lease to existing tenant

 When you add multiple leases to a tenant and select a unit, you can check the Assets option to view home-type assets. For more information, refer to Add Multiple Leases for Tenants .

 Moving in prospect

 When you move in a prospect via the Move In wizard, you can create a lease based on the Unit selected in Rental Info . For more information, refer to Move In Wizard .

 Adding a homeowner status

 A homeowner status of a home-type asset indicates the asset's current legal ownership status. It can be added to determine what site classification is applied to an asset on a unit's lease. For more information, refer to Homeowner Statuses (Pop-Up) and Site Classification .
