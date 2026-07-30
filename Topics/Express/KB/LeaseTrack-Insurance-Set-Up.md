# Activate and Set Up LeaseTrack Insurance

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/LeaseTrack-Insurance-Set-Up.htm

To set up insurance tracking in Rent Manager , you must establish your settings and applicable properties. You can also opt to set up a Master policy with LeaseTrack and set up the associated fees. There are three levels of coverage from LeaseTrack : HO4, Tracking, and Enforcement.

 Coverage Option
 Description

 HO4

 Allows tenants and manufactured housing homeowners to purchase insurance from Millennial Specialty Insurance (MSI) directly from their Tenant Web Access (TWA) portal.

 Tracking

 Allows tenants and manufactured housing homeowners to upload their insurance coverage (whether from MSI or another provider) via TWA, allowing you to track their insurance coverage in Rent Manager .

 Enforcement

 Allows you to establish a Master policy insurance plan through LeaseTrack , which automatically enrolls tenants and manufactured housing homeowners with no insurance or insufficient coverage and charges a monthly fee.

 More Information

 For more information on insurance tracking through LeaseTrack , refer to LeaseTrack Insurance .

 Enable Insurance

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Manage Insurance Setup
 Enabled

 For more information, refer to Control User Access .

 More Information

 In order to set up a Master policy in Rent Manager , you must first create an account with LeaseTrack and establish the terms of the policy. To set up an account, make changes to the Master policy's start date, or charge posting dates, call (800) 945-5990.

 The first time you set up insurance tracking, you must first enable the feature before establishing settings. You can also set up your Master policies at this time as desired for enrolling tenants in that policy if they are lacking coverage, or you can add them at a later time after you have set up insurance tracking.

 To enable and set up insurance tracking in Rent Manager , do the following:

 -
 Go to arrow_forward Administration , then select Rental Info arrow_forward Properties/Units arrow_forward Insurance .
The Insurance page displays.

 -
 Click Activate .
The Activate Insurance pop-up displays.

 -
 Check Allow data to be shared with LeaseTrack . Click to review the disclaimer.

 -
 Enter information into the available fields.

 Field
 Description

 Allow LeaseTrack to email tenants directly

 If checked, LeaseTrack has permission to contact tenants and homeowners for you about insurance requirements and upload instructions.

 Track insurance at these properties

 Select each applicable property you wish to track insurance policies for. Properties of the following property types are not included in the list: Short Term Rental , RV/Campground , and Association .

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit types to exclude from tracking

 If there are specific unit types you do not wish to track insurance for (such as unit types used for commercial leases or storage units), select the types of units to exclude from insurance tracking.

 -
 Click Next .

 -
 On the next page, select one of the options below:

 Option
 Description

 No

 If you do not have a Master policy established with LeaseTrack for any of your properties, select No . Tenants and homeowners can still enroll in insurance policies, but if they do not, then they are not covered by a Master policy.

 You can add a Master policy at a later time if needed.

 More Information

 If you select No , there are no further fields to fill out on this pop-up. Click Activate to complete the process. The selected properties are enabled for insurance tracking.

 Yes

 If you have a Master policy established with LeaseTrack for at least one property, select Yes . Additional fields for your Master policy information display.

 Warning

 Once this setting is enabled, lease policies are evaluated to determine if they should be added to the Master policy provided they meet at least one of the following requirements:

 -
 A new lease is added.

 -
 An existing lease is renewed.

 -
 An insurance policy is uploaded.

 -
 The unit associated with the lease has a site classification of Resident Owned or Employee Owned for homeowners insurance or Community Owned - Occupied , Community Owned - Employee , or Lease to Own for renters insurance. Additionally, leases with resident owned RVs are not eligible.

 Leases with insurance policies that don't meet the minimum requirements for insurance are given a grace period to get adequate insurance coverage before being charged for enrollment in the Master policy.

 LeaseTrack automatically pushes periodic charges to Rent Manager for any tenants and homeowners enrolled in the Master policy based on the configuration established during the LeaseTrack account creation process. The grace period and charge posting dates are all configured by your contract with LeaseTrack .

 -
 If you selected Yes , in the LeaseTrack Policy Number field, enter the policy number for your Master policy and click Verify . This policy number is provided by LeaseTrack and should begin with MSIRM .

 -
 After you have verified your policy number, enter information in the additional fields described below.

 Field
 Description

 Default Amount

 Enter the default dollar amount of the charge posted each month from LeaseTrack to apply to all properties. After you complete this setup process, you can adjust the amount as needed for each property individually. The maximum amount you can enter is 50 .

 More Information

 The recommended amount to charge for a Master policy is dependent on the policy option you established with LeaseTrack . For example, the recommended amount to charge for a 100K Master policy is between $14 and $20, the recommended amount to charge for a 300K Master policy is between $17 and $23, and so on.

 Default Charge Type

 The charge type for Rent Manager to use for the charges from LeaseTrack .

 Master Policy

 Once your policy number is verified, this field populates with the liability covered by the Master policy (e.g., 100K Renters Insurance , 100K Homeowners Insurance , 300K Renters Insurance , 300K Homeowners Insurance , and so on).

 This field is read-only and cannot be edited.

 Properties to include in master policy

 Each applicable property the Master policy applies to. Properties of the following property types are not included in the list: Short Term Rental , RV/Campground , and Association .

 More Information

 Properties display in this list even if they were not selected in the Track insurance at these properties field for insurance tracking on the previous page. If you select a property in this field that is not selected in prior field, that property is enabled for both the Master policy and insurance tracking.

 -
 If you have additional Master policies for other properties to add, click Add Master Policy . Fill out the fields as needed for each additional Master policy.

 -
 Click Activate .
You can now track which tenants and homeowners have insurance and their policy's coverage. Additionally, accounts without sufficient coverage at the selected properties are now auto-enrolled in the Master policy according to your contract with LeaseTrack .

 More Information

 Leases where the option Don't require insurance is checked are excluded from the Master policy. For more information, refer to Lease Details (Page) .

 Enable Tenants and Homeowners to Purchase Insurance

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 If you have Tenant Web Access (TWA) enabled in your database, this option (HO4) is automatically enabled for your tenants and homeowners. If you previously disabled the option and wish to enable it again, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward General .

 -
 Check Allow Tenant to Purchase Insurance .

 -
 Click Save .
Tenants and homeowners now have the option to purchase insurance via TWA.
