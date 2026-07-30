# Screening Settings (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Screening-Products.htm

Rent Manager has partnered with AmRent to provide the ability to check a prospect or tenant’s credit, criminal, and eviction history from within Rent Manager . The screening results you receive are generated based on the types of reports that you have contracted with AmRent , the types of databases and report options you define, and the number of people you want screened within a screening report.

 More Information

 If specific properties require different settings for their screenings, you can go to the screening settings on those properties and check the option to override the settings in system preferences. Then you can set up the screening options at the property level. For more information, refer to Property Screening Settings (Pop-Up) .

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Screening Products arrow_forward Screening .
The  System Preferences: Screening Products - Screening page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Options

 In this section, determine how to handle specific aspects of screenings such as address options, requirements for tenant conversion, and which letters can be set as options to send to prospects who fail their screenings.

 Option
 Description

 Adverse Action Letters

 These letters are commonly sent to prospects who failed a screening and explains why their application was denied. After establishing which letters can be used, you can generate the adverse action letters for a screened prospect from their account or screening details.

 Minimum workflow solution to convert prospect to tenant

 The criteria required to change the status of a prospect to a tenant. For more information, refer to Change a Prospect Status .

 Select from the following options:

 Approved

 A prospect must be screened and receive an Approved determination on the Workflow Solution report before they can be converted to a tenant. The Order workflow solutions option must be enabled to use this option, as it enables AmRent to assign a workflow solution based on your company's RapidReview criteria.

 Conditional

 A prospect must be screened and receive at least a Conditional determination on the Workflow Solution report before they can be converted to a tenant. The Order workflow solutions report option must be enabled to use this option, as it enables AmRent to assign a workflow solution based on your company's RapidReview criteria.

 None

 No screening criteria is required to change the status.

 Screened

 A prospect must be screened before they can be converted to a tenant.

 Order workflow solutions report

 If you have AmRent 's RapidReview, you can check this option to request a Workflow Solution report with every screening. This report evaluates the data and then recommends approving or declining an application based on the results of an applicant's credit, criminal, and eviction history.

 More Information

 If you do not have RapidReview, or are unsure, you can contact your AmRent account executive or AmRent customer support to obtain or confirm RapidReview access.

 Use contact default address for screenings

 If checked, the screening pulls the default address associated with each contact. If unchecked, the default address on the primary contact is used for all contacts.

 Available Vendors

 Check one or more vendor database(s) that you want to be searched for a credit report based on your contract with AmRent .

 Warning

 Two vendor databases are available: AmRent and Credit Report (via TransUnion). If Credit Report is enabled, it may result in additional fees. Additionally, if you select Credit Report without having that option in your contract with AmRent , the report errors out and is aborted.

 Reports and Mappings

 In the Available Reports subsection is a list of specialized reports that must be set up by AmRent . If you do not have any specialized reports set up with AmRent , select only Bundled Screening . If you would like to look into using some of the specialized reports listed, you can contact your AmRent account executive or AmRent customer support for assistance. Click in the according drop-down field in the User column to select which users have access to that report type.

 The following reports are available from AmRent :

 Option
 Description

 Bundled Screening

 Returns credit, criminal, rental record, and eviction information. If you have not contracted any additional specialized reports with AmRent , this is the only option that displays.

 Collection Credit Report

 Returns credit data, indicates a consumer's ability to pay, and provides skip tracing without formulating a Workflow Solution . The report is intended for companies managing collections in-house instead of using a collections company.

 Commercial Screening

 Returns credit, criminal, and eviction information. The report is intended for owners of commercial businesses instead of the business itself.

 Credit Only

 Returns credit data without formulating a Workflow Solution .

 Criminal Only

 Returns criminal data (beyond criminal records from credit reports) without formulating a Workflow Solution .

 Workflow Solutions,
 Credit Only

 Returns credit data and displays a Workflow Solution to approve or decline an application based on the criteria you have set up with AmRent . This is typically run for a guarantor not residing in the property.

 Workflow Solutions, Criminal Only

 Returns criminal data (beyond criminal records from credit reports) and displays a Workflow Solution to approve or decline an application based on the criteria you have set up with AmRent .

 In the Field Mappings subsection, select the fields that Rent Manager uses for tenant and/or prospect data when performing AmRent Screenings . In most cases, the default settings (first name, last name, social security number, birth date, street address, city, state, and zip) retrieve the equivalent information. However, if you need to look for something specific, you can customize a field mapping to match the fields for AmRent Screenings to the according Rent Manager field.

 To add a field mapping, click Add Item and then click each drop-down arrow to select the appropriate field from the list for each column.

 Column
 Description

 AmRent Fields

 The AmRent screening field to which tenant or prospect mapped fields are imported.

 Prospect Mapped Field

 The associated Rent Manager prospect field that provides the data for the mapped AmRent field.

 Tenant Mapped Field

 The associated Rent Manager tenant field that provides the data for the mapped AmRent field.
