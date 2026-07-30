# Owner Prospect Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Owner-Prospect.htm

This class examines owner prospect account information and can be followed by either an owner prospect–level scripting function or another class associated with the owner prospect.

 Example

 [OwnerProspect().Address().PostalCode()]

 Result

 Displays the postal code of the address marked as Default for the owner prospect.

 Example

 [OwnerProspect().HistoryCount()]

 Result

 Displays the number of history items associated with the owner prospect.

 Class Parameters

 This class can be passed a single, optional parameter: an ID.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the account's creation date. This number does not display on any window but may be used within scripting. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Owner().OwnerProspectID] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 More Information

 An ID may be passed to this class only when OwnerProspect is considered the parent class in a script as shown in the below example.

 [OwnerProspect(252).Address().City]

 Displays the city of the address checked Default for the owner prospect with the system-generated account ID number 252.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [OwnerProspect().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner Prospect details page.

 Contact

 [OwnerProspect().Contact(). Function ]

 This class retrieves contact information for the owner prospect.

 Owner

 [OwnerProspect().Owner(). Function ]

 This class retrieves data about an owner that was converted from an owner prospect.

 Phone Number

 [OwnerProspect().PhoneNumber(). Function ]

 This class retrieves phone number data for the owner prospect.

 Property

 [OwnerProspect().Property(). Function ]

 This class retrieves data from the Properties pop-up for the owner prospect account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Address Count

 [OwnerProspect().AddressCount]

 Displays the number of addresses entered on the Addresses tile for the owner prospect.

 Application Date

 [OwnerProspect().ApplicationDate]

 Displays the Application Date entered into the Lead Information tile for the owner prospect.

 Comment

 [OwnerProspect().Comment]

 Displays the text entered in the Comment tile of the Owner prospect details page.

 Display Color

 [OwnerProspect().DisplayColor]

 Displays the name of the color selected in the Display Color field of the owner prospect's Miscellaneous tile.

 Display Name

 [OwnerProspect().DisplayName]

 Displays the Display Name entered on the owner prospect's Account tile.

 Email

 [OwnerProspect().Email]

 Displays the Email Address as entered on the owner prospect's Miscellaneous tile.

 History Count

 [OwnerProspect().HistoryCount()]

 Displays the total number of history/notes on the prospect's History/Notes pop-up.

 Interest Level

 [OwnerProspect().InterestLevel]

 Displays the ranking from 1 – 10 (with 10 being the highest) to measure the level of interest that the owner prospect has in owning your property as entered on the owner prospect's Lead Information tile.

 Lead Source

 [OwnerProspect().LeadSource]

 Displays the name of the marketing lead source as entered on the owner prospect's Lead Information tile.

 Name

 [OwnerProspect().Name]

 Displays the Name as entered on the owner prospect Account tile.

 Note

 [OwnerProspect().Note()]

 Displays information about the most recent note on the owner prospect's History/Notes tile.

 Owner Prospect ID

 [OwnerProspect().OwnerProspectID]

 Displays the system-generated ID number for the owner prospect.

 Phone Number Count

 [Owner Prospect().PhoneNumberCount]

 Displays the total count of phone numbers as entered on the owner prospect's Phone Numbers tile.

 Property Count

 [OwnerProspect().PropertyCount]

 Displays the number of properties on the owner prospect's Properties pop-up.

 Property List

 [OwnerProspect().PropertyList]

 Displays the list of properties (separated by commas) on the owner prospect's Properties pop-up.

 Sales Rep

 [OwnerProspect().SalesRep]

 Displays the name of the Sales Representative as selected on the owner prospect's Lead Information tile.

 Sales Rep Email

 [OwnerProspect().SalesRepEmail]

 Displays the email address of the sales representative selected on the prospect's Lead Information tile. The sales representative's email address is entered on the user's Contact Information tile.

 Sales Rep Fax Number

 [OwnerProspect().SalesRepFaxNumber]

 Displays the fax number of the sales representative selected on the prospect's Lead Information tile. The sales representative's fax number is entered on the user's Contact Information tile.

 Sales Rep Phone Number

 [OwnerProspect().SalesRepPhoneNumber]

 Displays the phone number of the sales representative selected on the prospect's Lead Information tile. The sales representative's phone number is entered on the user's Contact Information tile.

 Set History Filter

 [OwnerProspect().SetHistoryFilter()]

 This function is designed to filter the total collection of owner prospect history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Status

 [OwnerProspect().Status]

 Displays the current Status as listed on the owner prospect's scoreboard.

 Unit Count

 [OwnerProspect().UnitCount()]

 Displays the number of units at each property, as entered in the Unit Count column for each Property defined on the owner prospect Properties pop-up.

 User Defined Field

 [OwnerProspect().UserDefinedField()]

 Displays the value of the owner prospect-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [OwnerProspect.UserDefinedField("Contract")]

 Displays the value for the Contract user defined field.
