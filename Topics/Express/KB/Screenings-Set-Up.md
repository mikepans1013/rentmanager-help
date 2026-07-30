# Set Up AmRent Screenings

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Screenings-Set-Up.htm

Rent Manager has partnered with AmRent to provide the ability to check a prospect or tenant’s credit, criminal, and eviction history from within Rent Manager . The screening results you receive are generated based on the types of reports that you have contracted with AmRent , the types of databases and report options you define, and the number of people you want screened within a screening report.

 More Information

 Although the Screenings feature is accessible within Rent Manager , the company that provides the screening service is AmRent . Registered users can retrieve screening reports that are based on their account screening requirements and can be instantly viewed or printed. For information about getting an account, contact AmRent .

 Before utilizing AmRent Screenings , you need to enable the feature in system preferences, enter user credentials, and establish default system and property settings.

 Step 1: Enable AmRent Screenings

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To enable AmRent and enter your user credentials, do the following:

 -
 Go to arrow_forward Administration , then go to System Preferences arrow_forward Screening Products arrow_forward Credentials .

 -
 Check Use AmRent Screening Products .

 -
 In the AmRent Username field, enter the account login provided by AmRent .

 -
 In the Screening section, enter the Password provided by AmRent .

 -
 Click Test Connection to verify that the credentials are correct.

 -
 Click Save .
The Screenings feature is enabled in Rent Manager .

 Step 2: Establish System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To choose preferences for AmRent Screenings , do the following:

 -
 Go to arrow_forward Administration , then go to System Preferences arrow_forward Screening Products arrow_forward Screening .

 -
 In the Options section, establish the following preferences:

 Option
 Description

 Adverse Action Letters

 The available letter template(s) when sending a letter to an applicant directly from the screening results   . For example, you may want to include templates to inform prospects that their application was rejected due to the results of their screening, or to inform them of an issue with their financial information.

 Minimum workflow solution to convert prospect to tenant

 The criteria required to change the status of a prospect to a tenant. Select from the following options:

 Approved

 A prospect must be screened and receive an Approved determination on the Workflow Solutions report before they can be converted to a tenant. The Order workflow solutions report option must be enabled to use this option, as it enables AmRent to assign a decision based on your company's RapidReview criteria.

 Conditional

 A prospect must be screened and receive at least a Conditional determination on the Workflow Solutions report before they can be converted to a tenant. The Order workflow solutions report option must be enabled to use this option, as it enables AmRent to assign a decision based on your company's RapidReview criteria.

 None

 No screening criteria is required to change the status.

 Screened

 A prospect must be screened before they can be converted to a tenant.

 Order workflow solutions report

 If you have AmRent 's RapidReview, you can use this option to request a Workflow Solutions report with every screening. This report evaluates the data and then recommends approving or declining an application based on the results of an applicant's credit, criminal, and eviction history.

 More Information

 If you do not have RapidReview, or are unsure, you can contact your AmRent account executive or AmRent customer support to obtain or confirm RapidReview access.

 Use contact default address for screenings

 Uses the address marked as Default for each contact in the View Contacts pop-up, as opposed to the address marked as Default on the account details page.

 -
 In Available Credit Bureaus section, select the credit bureau database(s) that you want to search for a credit report based on your contract with AmRent .

 Warning

 Selecting a database that is not in your contract results in an error and an aborted report. Additionally, selecting multiple credit bureaus results in additional fees.

 -
 In the Reports and Mappings section, establish your available AmRent reports and associated fields in the following subsections:

 Section
 Description

 Available Reports

 A list of specialized reports that must be set up by AmRent . If you do not have any specialized reports set up with AmRent , select only Bundled Screening . If you would like to look into using some of the specialized reports listed, you can contact your AmRent account executive or AmRent customer support for assistance. Click in the according drop-down field in the User column to select which users have access to that report type.

 For more information on each available report, refer to Types of Screening Reports .

 Field Mappings

 The fields that Rent Manager uses for tenant and/or prospect data when performing AmRent Screenings . In most cases, the default settings (first name, last name, social security number, birth date, street address, city, state, and zip) retrieve the equivalent information. However, if you need to look for something specific, you can customize a field mapping to match the fields for AmRent Screenings to the according Rent Manager field.

 To add a field mapping, click Add Item and then click each drop-down arrow to select the appropriate field from the list for each column described below:

 AmRent Fields

 The AmRent screening field to which tenant or prospect mapped fields are imported.

 Prospect Mapped Field

 The associated Rent Manager prospect field that provides the data for the mapped AmRent field.

 Tenant Mapped Field

 The associated Rent Manager tenant field that provides the data for the mapped AmRent field.

 -
 Click Save .
The selected screening preferences are saved.

 Step 3: Set Property Screening Settings

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 If you have properties that need to process screenings using different options or that are set up with unique AmRent credentials, you can modify screening settings on a property-by-property basis.

 To establish screening settings for a specific property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The property's details page displays.

 -
 On the action bar to the right, click arrow_forward Screening Settings .

 -
 On the left, select Override System Preferences .

 -
 Select the credit bureau database(s) that you want to be searched for a credit report based on your contract with AmRent .

 Warning

 Selecting a database that is not in your contract results in an error and an aborted report. Additionally, selecting multiple credit bureaus results in additional fees.

 -
 If you have AmRent 's RapidReview with established approval criteria, select Request workflow solutions report to receive a Workflow Solutions report with every screening. Then, in the Minimum Workflow Solution field, select one of the following options from the drop-down list:

 Option
 Description

 Approved

 A prospect must be screened and receive an Approved determination on the Workflow Solutions report before they can be converted to a tenant.

 Conditional

 A prospect must be screened and receive at least a Conditional determination on the Workflow Solutions report before they can be converted to a tenant.

 None

 No screening criteria is required to change the status.

 Screened

 A prospect must be screened before they can be converted to a tenant.

 -
 In the Default Screening Type field, if you want to generate AmRent Screenings by default for this property, select Screening . Alternatively, if you want to generate income verification requests by default for this property, select Income Verification .

 -
 If needed, establish any specific fields that Rent Manager should use when performing AmRent Screenings by clicking Add Item . Then, enter information in the following columns:

 Column
 Field

 AmRent Fields

 The AmRent screening field to which tenant or prospect mapped fields are imported.

 Prospect Mapped Field

 The associated Rent Manager prospect field that provides the data for the mapped AmRent field.

 Tenant Mapped Field

 The associated Rent Manager tenant field that provides the data for the mapped AmRent field.

 -
 To manage the available screening reports and the users who may generate those reports, click Manage Available Reports . For more information on each available report, refer to Property Screening Settings (Pop-Up) .

 -
 Click Save .
The property-specific screening settings are saved.

 -
 If you have property-specific AmRent credentials, click Credentials .
The AmRent Credentials pop-up displays.

 -
 Select Override System Preferences , then enter the property's AmRent Username and Password .

 -
 Click Test Connection to verify that the credentials are correct.

 -
 Click Save .
The property-specific AmRent credentials are saved.

 -
 On the Property Screening Settings pop-up, click Save .
The property-specific screening settings are saved.

 Next Steps

 Now that you have enabled AmRent Screenings , you are ready to start running screenings for tenants and prospects. You can also set up the Income Verification feature.

 Action
 Description

 Income Verification

 The Income Verification feature allows you to obtain and review tenants' and prospects' banking information without the need to request paper documentation and risk receiving falsified data. You can send income verification invitation links directly from Rent Manager , where recipients are prompted to log into a secure portal and connect their bank account. Financial data is then pulled directly from the bank account(s) provided and a report is generated that includes account balances, transactions, and cash flow.

 For more information, refer to Set Up Income and ID Verification .

 Run screenings

 The Screenings feature can be used to check the credit, criminal, and eviction history of prospects, tenants, or other individuals.

 For more information, refer to Run a Tenant or Prospect Screening and Run a Screening for a Non-Tenant or Prospect .
