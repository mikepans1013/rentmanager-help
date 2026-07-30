# Move Out Wizard

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Tenants-Move-Out-Wizard.htm

The Move Out wizard is designed to help you easily move a tenant out of an associated unit in Rent Manager . The wizard allows you to enter a move-out date, adjust user defined fields (UDFs), edit contact information, enable a unit status for the vacated unit or an asset status for a vacated or returned asset, and initiate the make-ready process. Once the move out wizard is complete, the tenant's information is updated and any initiated processes can be executed.

 If a tenant has multiple leases, all leases can be moved out at once. Move out actions, such as a make-ready process, assigning a unit status, executing tasks, projects, or writing letters, are executed for only units (not linked or rented assets).

 Step 1: Establish Move Out Actions

 When you move a tenant out of an associated unit in Rent Manager , the Move Out wizard allows you to kick off various actions (enable a unit status, asset status, or begin the make ready process) that may need to take place as a result of the tenant moving out. Although you can complete the wizard without this information, setting up these tools before the conversion helps streamline the move-out process. If these setups are already established in your database, proceed to step 2.

 Option
 Description

 Make Ready Process

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Make ready process
 Add, View

 For more information, refer to Control User Access .

 Rent Manager 's make ready tool helps you prepare vacant units for occupancy and to give an up-to-date visual representation of the unit turnover process. For more information, refer to Set Up the Make-Ready Board for Unit Turnover .

 Unit Status Types

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Unit status types
 Add, View

 For more information, refer to Control User Access .

 Unit status types allow you to set up a variety of unit statuses that further define the availability of a rental unit—one might be vacant but still unavailable, such as during a make ready period. For more information, refer to Unit Status Types (Page) .

 Asset Statuses

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Asset Statuses
 Add, View

 For more information, refer to Control User Access .

 Asset statuses are conditions that you create to describe the state of the asset (e.g., Inventory , In Use , Out for Repair , Out of Service ). For more information, refer to Asset Statuses (Page) .

 Step 2: Add General Account Information

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 When you are ready to move out a tenant, do the following to open the wizard:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant account.
The Tenant details page displays.

 -
 On the Leases tile, click Move Out .
If the tenant has multiple leases, the Select Lease(s) pop-displays. Check each lease to end, and click Next .

 Related Preferences

 If the General Options system preference of Automatically move out 'home' assets is enabled, assets which are considered homes do not display in this pop-up, and are moved out with the unit automatically. If the system preference is not enabled, the home asset displays in this pop-up for manual move-out. For more information, refer to General Options (System Preferences) .

 -
 In the Account tile, verify the First Name and Last Name .
If the tenant is a commercial tenant, Is Company is checked by default.

 -
 In the Addresses tile, verify the address(es) for the tenant. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the tenant's address, such as contact labels.

 Step 3: Enter Lease Information

 Various actions can be performed on this page of the wizard.

 Lease Information

 This tile allows you to establish the date on which the tenant moves out. After entering and/or verifying the tenant's general information, select the Lease tab on the left. In the Lease Information tile, enter the tenant's Move Out Date and verify the Property , Unit , Sq. ft , and End Date are all correct.

 If a blue icon displays next to the Move Out Date , the move out has not been verified. This means active recurring charges continue to post for the tenant. To officially move the tenant out and stop posting recurring charges to the tenant, you must click the move out icon, which changes the color to green.

 Related Preferences

 Verifying a move-out date is only required if the Require moveout confirmation to stop recurring charge system preference is enabled. For more information, refer to General Options (System Preferences) .

 Home

 If the tenant is moving out of a property with a Property Type of Manufactured Housing , you can use the Home tile to update the asset's status. The Home tile simplifies recording if the home was moved and the date the home is to be removed. This tile displays for leases on units with rentable home assets if the home asset is still located on the unit as of the selected Move Out Date . For leases of home assets themselves, this tile always displays once a Move Out Date is selected.

 The following fields are available on this tile:

 Field
 Description

 Has the home moved?

 Determines if the rentable home asset is still located on the unit as of the Location Move Out date.

 No

 The rentable home asset did not move from its unit location.

 Yes

 The rentable home asset moved from its unit location. If checked, enter the Location End Date indicating the date that the home was moved.

 Update the homeowner status if the home is changing ownership

 If the rentable home asset changed ownership, select the new homeowner status from the drop-down menu. For more information, refer to Homeowner Statuses Available on Move Out .

 Depending on the number of available active homeowner statuses, this field displays either as a drop-down menu from which you can select a status, or as a read-only field that either displays the current status or is left blank.

 More Information

 Homeowner status names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Step 4: Kick Off Make Ready

 After entering the tenant's lease information, select the Make Ready tab on the left.

 In the Kick Off Make Ready tile, enter the make ready information for the vacated unit into the available fields described below.

 Field
 Description

 Template

 The make ready template to use for the unit's make ready process. For more information, refer to Make Ready Templates (Page) .

 Start Date

 The date the make ready process begins.

 Manager

 The user to oversee the make ready process.

 Related Privileges

 In the Properties/Units privilege group, the Make ready board privilege to View is required for users to display in the list. For more information, refer to Properties/Units Privilege Group .

 Job

 The job (e.g., Rekey Locks , Bath Reno , Kitchen Reno , Build Parking Garage , and so on) attached to the make ready process. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Comment

 Additional information about the make ready process (e.g., This should be a quick turnaround, the tenant was only there for three months ).

 High Priority

 Check to flag and pin the process to the top of the Make Ready Board .

 Step 5: Set Unit and Asset Statuses

 After entering the make ready information for the vacated unit, select the Unit/Asset Status tab on the left.

 In the Set Unit Status tile, select the unit status information for the vacated unit into the available fields described below.

 Field
 Description

 Unit Status

 The unit status type (e.g., Inactive , Make Ready , Maintenance , and so on) for the vacated unit.

 Start Date

 The date the status goes into effect.

 End Date

 The date the unit status ends.

 In the Set Asset Status tile, select the status for an asset which is being vacated (such as a home-type asset) or being returned to you. Additionally, enter the Start Date , at which time the asset's status takes effect.

 Step 6: Add a Move-Out Meter Reading

 After updating unit and asset statuses for the vacated unit, select the Move-Out Reading tab on the left.

 In the Move-Out Reading tile, you can choose whether to enter a final utility meter reading for the unit. This allows you to calculate utility usage and bill tenants appropriately, even outside your normal utility billing cycle.

 If you select Not right now , you can complete the final meter reading at a later date. If you select Yes , the utilities associated with the unit display. Choose the utilities to enter off-cycle readings for, then proceed to the next step.

 Step 7: Complete the Move Out

 Once you have confirmed all move out settings, click Move Out to complete the process and close the wizard.

 Step 8: Enter Off-Cycle Meter Readings

 If you requested a move-out meter reading in the Move-Out Reading tile, the Select Off-Cycle Reading Method pop-up displays after clicking Move Out . Each utility selected in the Move-Out Reading tile displays on a separate page of the pop-up, allowing for unique preference selections for each utility meter.

 To move between pages, click Next or Previous .

 For each utility, choose one of the following options to enter an off-cycle reading:

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

 Click Submit to close the pop-up after making your selections.

 More Information

 If you close the Select Off-Cycle Reading Method pop-up or click Cancel , the steps completed in the Move Out wizard are not saved. You must restart the wizard and complete it to move the tenant out.
