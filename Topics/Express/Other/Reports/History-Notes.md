# History/Notes (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/History-Notes.htm

The History/Notes report allows you to view the history/note items that have been entered during a selected Date Range or containing a specific key word for any entity that matches your specified criteria. In addition to filtering the entities that display in the report, the report options allow you to filter by history categories, history/note types, and users who created the notes.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to History/Notes .

 For more information, refer to Control User Access .

 To view the History/Notes report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Tenants arrow_forward History/Notes .
The Reports: History/Notes page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Include History/Notes For

 Check each entity to display history/notes. Only notes from these entities that are associated with the properties you selected display.

 Each option you may select is described below.

 Option
 Description

 Property

 Includes history/notes for all the Properties to Include .

 Unit

 Includes history/notes for all units at the Properties to Include .

 Tenant

 Includes history/notes for all tenants that lease from any of the Properties to Include .

 The options selected for the Tenants to Include option determine which types of tenants are included.

 Owner

 Includes history/notes for all owners that have an ownership percentage in any of the Properties to Include .

 When Owner is selected, the Include Owner Prospects report option is available.

 Vendor

 Includes history/notes for all vendors who are associated with any of the Properties to Include .

 Prospect

 Includes history/notes for all prospects whose default property is in the Properties to Include .

 Issue

 Includes history/notes for all issues that are linked to any of the Properties to Include .

 Asset

 Includes history/notes for all assets that are in service at any of the Properties to Include .

 Bill

 Includes history/notes for all bills with one or more line items that expense any of the Properties to Include .

 Recurring Bill

 Includes history/notes for all recurring bills with one or more line items that expense any of the Properties to Include .

 Violation

 Includes history/notes for all violations that are linked to any of the Properties to Include .

 Types to Include

 Check each option to include history/notes of that Type in the report.

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 This option must be selected for prospects to display.

 Notes Containing the Following

 Type in the field to narrow the report results to match the entered criteria. For example, entering noise filters results to display only history note items that include the word noise in the note's Note , Result , or Category fields.

 Users to Include

 Select each user to display history/notes created by that user. Select <Unassigned> to include system created history/notes. Optionally, check Include Inactive Users to include user accounts no longer marked as active.

 Include Owner Prospects

 Check to include owner history/notes that were originally entered on the owner prospect's History/Notes page when the owner was an owner prospect.

 Categories to Include

 Check each history/note category to filter the report results so only history/notes assigned to the selected category display. To view history/notes that are not assigned a Category , select <Unassigned> . For more information, refer to History Categories (Page) .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 This report is organized by history/note entities, which act as subheadings. Information about each history/note is further organized into columns. The columns that display in the report are described below.

 Column
 Description

 Date

 The date and time that each history/note was entered in Rent Manager .

 History Category

 The group that the Rent Manager user chose for each history/note.

 History Type

 The system generated name used to identify what kind of history/note is being viewed. For example, a history/note with the type System indicates the note was generated by Rent Manager .

 Note

 The contents of each history/note, as entered in the Note field on History Details .

 User

 The username of the user who created each history/note. If the history/note was created automatically by Rent Manager , <Unassigned>  displays.
