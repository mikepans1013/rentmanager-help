# Export Minnesota CRP

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Export-Minnesota-CRP.htm

As of tax year 2024, the State of Minnesota requires that all Certificates of Rent Paid (CRPs) be filed electronically through the state's e-Services portal. With Rent Manager , you can export a CSV file with data for your CRPs. The file created by this export tool is specifically designed to meet Minnesota's electronic submission format. You are also required by the State of Minnesota to provide copies of your CRPs to your tenants.

 More Information

 The first time you run a Minnesota CRP form, Rent Manager creates several user-defined fields (UDF) to store specific information required by Minnesota. If you have not yet run a Minnesota CRP in Rent Manager , such as the Minnesota CRP 2018 and Prior or the Minnesota CRP 2019–2023  reports, you must first set up user-defined fields (UDF) to track data unique to Minnesota CRP requirements.

 For more information about setting up CRP UDFs, refer to Minnesota CRP 2018 and Prior (Report) or Minnesota CRP (Report) .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Export Minnesota CRP
 Enabled

 For more information, refer to Control User Access .

 Generate Minnesota CRP

 To create a Minnesota CRP file for electronic filing, do the following:

 -
 Go to  arrow_forward Rental Info arrow_forward General arrow_forward Export Minnesota CRP .
The Export Minnesota CRP page displays.

 -
 Adjust the options as desired. Each option is described below.

 -
 If necessary, rename the system-generated File Name .

 -
 Click Download File .
The CSV file is downloaded. The file is ready for upload to the e-Services portal as-is, but if needed, you can open the file to review the data.

 Export Options

 The export options described below determine what data displays in the export file.

 Properties to Include

 Select each property or a property Group to be included in the export file.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Properties to include properties that are no longer active.

 Preparer Information

 If the tax form was prepared by an agent, check Prepared By Agent and select from the following options to determine how the information displays on the form. All fields are located on the property's details page.

 Related Preferences

 Some fields pull information from the property established as the management company in Management Company (System Preferences) .

 Option
 Description

 Name

 The name that displays as the form's preparer. You can choose to use the property billing name, property name, management company name, or management company billing name.

 Phone

 The phone number associated with the form's preparer. You can select the management company or property default phone number. Or check Override Default Phone and enter an alternate phone number in the Default Phone Number Override field.

 Charges to Include

 The export file includes total paid rent charges associated with any of the selected charge types.

 Data Source

 Select one of the following options to determine at which level the information generate.

 Option
 Description

 Property Based

 The export file generates using the data defined for each property in the property-level user defined fields.

 Unit Based

 The export file generates using the data defined for each unit in the unit-level user defined fields.

 Include Other Rentable Items

 Includes units that are associated with unit types with the Other Rentable Item option checked on the Unit Type details page.

 Sort Options

 Select one of the following options to determine the order in which information in the export file generates.

 Option
 Description

 Account Number

 Sorted numerically by the recipient's system-generated ID number in ascending order (lowest to highest).

 Last Name

 Sorted alphabetically by the recipient's Last Name .

 Unit

 Sorted alphanumerically by the associated Unit name.

 Year

 Select the desired calendar year for which you would like to generate CRP data.

 Credits to Include

 Select each credit charge type to include in the export file. All credits that were issued with the selected types to recipients are included. By default, payments are applied to accounts using the PR - Payment Received charge type.

 Owner Information

 Select from the following options to determine how property owners' information displays in the export file. All fields are located on the property's details page.

 Option
 Description

 Name

 The name that displays as the preparer. You can choose to use the property billing name, property name, management company name, or management company billing name.

 Address

 The address that displays as the property owner's address. You can select an owner's default address, a property's default address or billing address, or the management company's default or billing address.

 Phone

 The phone number associated with the property's owner. You can select the owner or property default phone number. Or check Override Default Phone and enter an alternate phone number in the Default Phone Number Override field.
