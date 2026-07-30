# Blue Moon Form & Fields Setup (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Blue-Moon-Form-Fields-Setup.htm

Blue Moon software, which provides industry-standard leasing documents compliant with your state and/or industry association (e.g., NAA, TAA, GAA, AANC), can be integrated with Rent Manager to export your tenant and prospect information directly into Blue Moon leasing document(s). These system preferences allow you to enter your Blue Moon account information and assign the user-defined fields (UDFs) to use for identifying leasing documents to use at each property.

 Each Blue Moon leasing document contains data fields that must be associated with Rent Manager data fields. These system preferences are used to set up Blue Moon forms to retrieve tenant and prospect data from the corresponding Rent Manager or user-defined fields (UDFs).

 More Information

 Before you can establish these preferences, you need to enable Blue Moon in Rent Manager and activate the desired forms in your Blue Moon portal. For more information, refer to Set Up Blue Moon .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Blue Moon arrow_forward Form & Field Setup . If you have not yet set up forms and fields for Blue Moon , click Get Forms & Fields to import the forms enabled in your Blue Moon portal.

 Filter Options

 The following filter options are available for these forms and fields.

 Option
 Description

 Form

 The specific form to review and edit.

 Hide mapped fields

 Removes fields with established Prospect Mapping and Tenant Mapping fields for all listed forms.

 Show required fields only

 Limits fields to only the information required by Blue Moon .

 Blue Moon Forms

 Each form enabled in Blue Moon and imported to Rent Manager displays in its own section. The following columns display for each form:

 Column
 Description

 Blue Moon Field

 The Blue Moon data field that receives tenant and prospect information when you export Rent Manager data to Blue Moon .

 Locked

 Indicates that the field typically should not be edited when creating Blue Moon leases.

 Related Privileges

 To edit locked Blue Moon fields, the following privilege is required:

 Group
 Privilege
 Column

 Blue Moon

 Edit Blue Moon Locked Fields
 Enabled

 For more information, refer to Control User Access .

 Multiple Forms

 Indicates that the Blue Moon field is used on multiple forms and can have only one mapping setup for all associated forms.

 Prospect Mapping

 The Rent Manager , user-defined field (UDF), or charge type(s) used when exporting prospect data to Blue Moon .

 Required

 Indicates that Blue Moon requires Rent Manager data mapping to be set up for this field.

 Tenant Mapping

 The Rent Manager , user-defined field (UDF), or charge type(s) used when exporting tenant data to Blue Moon .

 Map Form Fields

 Since the majority of fields on Blue Moon leases and forms do not have exact counterparts in Rent Manager , you can determine what data Blue Moon retrieves from Rent Manager by mapping fields for tenants and prospects.

 To set up mapping for a specific form, locate the form in the list and click Map Form Fields . Then, in the Prospect Mapping and Tenant Mapping sections, select from the following options.

 Option
 Description

 Charge Type

 Pulls the total amount of all active tenant- or prospect-level recurring charges for the charge type(s) selected in the Charge Type drop-down list. This option does not display for all mappable fields.

 Rent Manager Field

 Pulls from a specified Rent Manager field. In the Source field, select an entity type from the drop-down list, then in the Rent Manager Field field, select a Rent Manager field associated with that entity.

 User Defined Field

 Pulls from a specified user-defined field (UDF) value. In the UDF Source field, select an entity type from the drop-down list, then in the UDF field, select a UDF associated with that entity.

 Edit Calculated Fields

 By default, any rent and security deposit values in Blue Moon are mapped to Rent Manager fields. Rent amounts are mapped to the active market rent for the tenant or prospect's unit, while security deposits are mapped to the security deposit held on the tenant or prospect account.

 If you want to use a different Rent Manager field or user-defined field (UDF) for mapping these values, you can override them on the tenant and/or prospect level by clicking Edit Calculated Fields at the top of the page. Each option is described below.

 Rent

 On the Rent tab, select Override Default Mapping to use a Rent Manager field, user-defined field (UDF), or charge type to use as the Rent value when creating a new Blue Moon lease for prospects and tenants. The following options are available in the Prospect Mapping and Tenant Mapping sections:

 Option
 Description

 Charge Type

 Pulls the total amount of all active tenant- or prospect-level recurring charges for the charge type(s) selected in the Charge Type drop-down list.

 Rent Manager Field

 Pulls from a specified Rent Manager field. In the Source field, select an entity type from the drop-down list, then in the Rent Manager Field field, select a Rent Manager field associated with that entity.

 User Defined Field

 Pulls from a specified user-defined field (UDF) value. In the UDF Source field, select an entity type from the drop-down list, then in the UDF field, select a UDF associated with that entity.

 Security Deposit

 On the Security Deposit tab, select Override Default Mapping to use one of the following Rent Manager fields or a user-defined field (UDF) as the Security Deposit value when creating a new Blue Moon lease for prospects and tenants. The following options are available in the Prospect Mapping and Tenant Mapping sections:

 Option
 Description

 Security Deposit Charged

 Pulls from the total dollar amount of charges posted to the tenant or prospect that are associated with a security deposit charge type. For more information on security deposit charge types, refer to Security Deposit General Options (System Preferences) .

 Security Deposit Held

 Pulls from the amount entered on the tenant or prospect's details page in the Security Deposit Held field.

 User Defined Field

 Pulls from a specified user-defined field (UDF) value. In the UDF Source field, select an entity type from the drop-down list, then in the UDF field, select a UDF associated with that entity.
