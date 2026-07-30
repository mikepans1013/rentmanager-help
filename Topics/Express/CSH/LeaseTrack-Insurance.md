# Insurance (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/LeaseTrack-Insurance.htm

These settings allow you to enable and set up insurance tracking through an integration with LeaseTrack . Additionally, you can require tenants and homeowners to be included on a Master policy insurance plan if they currently have no insurance, or if their insurance coverage is inadequate. For more information, refer to LeaseTrack Insurance .

 If you have not yet set up LeaseTrack insurance tracking in Rent Manager , the image below displays. To track insurance or use a Master policy, click Activate to set up the integration for the first time. For more information, refer to Activate and Set Up LeaseTrack Insurance .

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Manage Insurance Setup
 Enabled

 For more information, refer to Control User Access .

 To access your insurance settings, go to arrow_forward Rental Info Setup arrow_forward Properties/Units arrow_forward Insurance .

 Tracking Option: Track Insurance

 The General Settings section allows you to set up Rent Manager to track insurance for leases at specified properties.

 Related Preferences

 To enable the HO4 option which allows tenants to purchase insurance via Tenant Web Access (TWA) , you must enable the Allow Tenant to Purchase Insurance option in system web preferences. For more information, refer to Tenant Web Access General (System Web Preferences) .

 Each option is described below.

 Field
 Description

 Allow LeaseTrack to email tenants directly

 If checked, LeaseTrack has permission to contact tenants for you about insurance requirements and upload instructions.

 Enable insurance tracking

 If checked, insurance tracking is currently enabled for Rent Manager . If you uncheck this box, insurance and any established master policies are disabled.

 Properties to include in tracking

 Select each applicable property you wish to track insurance policies for. Properties of the following property types are not included in the list: Short Term Rental , RV/Campground , and Association .

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Units types to exclude from tracking

 If there are specific unit types you do not wish to track insurance for, such as unit types used for commercial leases or storage units, select the types of units to exclude from insurance tracking.

 Enforcement Option: Master Policy Enrollment

 More Information

 In order to set up a Master policy in Rent Manager , you must first create an account with LeaseTrack and establish the terms of the policy. To set up an account or make changes to the Master policy's start date or charge posting dates, call 800-945-5990.

 The Master Policies section allows you to set up Master policies provided by LeaseTrack , which automatically enrolls tenants and/or homeowners with no insurance or insufficient coverage and charges a monthly fee.

 More Information

 If one of your properties is currently associated with a Master policy but needs to be moved to a different policy you already established (such as upgrading a property's coverage from 100K to 300K), you can transition the properties. You can do so when adding a new master policy or, in the Master Policies section, click the drop-down arrow to the right of Add Properties and select Transition Properties .

 In the Transition Date field, select the date on which tenants and/or homeowners at the selected properties are officially covered by the new selected policy. If any properties in the list need a different transition date applied, you can enter that date in the property's associated Transition Date column. These properties are still temporarily listed in their prior Master policy with (Transitioning) appended until the transition is complete.

 Master Policies

 In the left panel of this tile, the type of Master policy (e.g., 100K Renters/Homeowners Insurance , 300K Renters/Homeowners Insurance ) displays, as well as your LeaseTrack -provided Master policy number. If you need to update the policy number, click arrow_forward Edit .

 Warning

 To delete a Master policy, click arrow_forward Delete . This action cannot be undone and any tenants or homeowners currently enrolled in that Master policy are unenrolled. If there are specific properties that should be added to another policy, make sure you transition that property to another Master policy. This can be done using the Transition Properties button or during the process of adding a new Master policy.

 Insurance Details

 This section determines the setup for the tenant or homeowner charges for the Master policy. The available fields are described below.

 Field
 Description

 Default Amount

 The default dollar amount of the charge posted each month from LeaseTrack to apply to all properties. After you complete this setup process, you can adjust the amount as needed for each property individually. The maximum amount you can enter is 50 .

 More Information

 The recommended amount to charge for a Master policy is dependent on the policy option you established with LeaseTrack . For example, the recommended amount to charge for a 100K Master policy is between $14 and $20, the recommended amount to charge for a 300K Master policy is between $17 and $23, and so on.

 Default Charge Type

 The charge type for Rent Manager to use for the charges from LeaseTrack .

 This section also allows you to view a list of all the properties currently applied to the selected Master policy. To add a property to the Master policy, click Add Properties . To remove a property, select that property in the list and click arrow_forward Remove From Policy .

 The columns in this section are described below.

 Column
 Description

 # of Tenants with Policy

 The number of tenants or homeowners at the property currently enrolled in and covered by the Master policy. These numbers update at the end of the month when LeaseTrack refreshes policies.

 Charge Amount

 If the property should charge an amount that is different from the established Default Amount , enter that amount in this column. Otherwise, the default amount populates with (Default) appended.

 Property

 The name of the property set up for auto-enrollment in the selected Master policy.

 Transition Date

 If the property is in the process of transitioning to the selected Master policy, the date on which that property is officially covered by this policy displays.

 This column displays only if there are currently properties transitioning to the selected policy.

 More Information

 To view further details about a property's pending transition between policies or change the transition date, select the property in the Insurance Details section and click arrow_forward Transition Details .
