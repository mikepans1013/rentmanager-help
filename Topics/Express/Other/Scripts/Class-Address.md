# Address Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Address.htm

This class examines address information. The class can be preceded by the Owner, Primary Owner, Tenant, Contact, Unit, Property, or Prospect class and can be followed by an address-level scripting function. Addresses are found on the entity's details page for all classes except the Contact class, which is found on the View Contacts page.

 Example

 [Tenant().Address().FullAddress]

 Result

 Displays the tenant's full address marked as Default on the tenant's Addresses tile.

 Example

 [Property().Address().State]

 Result

 Displays the state of the property's address marked as Default on the property's Primary Address tile.

 Class Parameter

 This class can specify a single, optional parameter: a name or an index.

 Name

 Enter the label of the address type in quotes to specify that address in the script. This is the recommended method because if the order of the addresses is changed, the index values also change.

 [Prospect.Address("Alternate").FullAddress]

 Displays the prospect's address named Alternate .

 Index

 An index allows you to return information about a specific address on an account by using a number to identify each address listed. For example, if there are three addresses listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which address you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the address marked as Default .

 Addresses are pulled from different locations for each unique parent class. The following table provides the location from which address information for each parent class is found.

 Class

 Location

 Owner

 The Owner details page on the Addresses tile.

 Tenant

 The Tenant details page on the Addresses tile.

 Contact

 The View Contacts page in the Addresses section.

 Unit

 The Unit details page on the Addresses tile.

 Property

 The Property details page on the Addresses tile.

 Prospect

 The Prospect details page on the Addresses tile.

 Vendor

 The Vendor details page on the Addresses tile.

 [Tenant().Address(1).City]

 Displays the address in the first address type listed on the tenant's account that is not checked as Default .

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Warning

 The following address functions display only if they are entered on the Address Details pop-up (which is accessed from all accounts by clicking Details in the Address section):

 - City

 - City State Postal Code

 - Postal Code

 - State

 - Street 1

 - Street 2

 Function
 Description

 City

 [ Class(). Address().City]

 Displays the city of the default address for the specified class.

 City State Postal Code

 [ Class(). Address().CityStatePostalCode]

 Displays the city, state, and postal code of the default address for the specified class. The output is formatted as displayed below:

 Norwood, OH 45212

 Full Address

 [ Class(). Address().FullAddress]

 Displays the full default address for the specified class. The output is formatted as displayed below:

 4600 Hawkins Lane
Unit H-13
Norwood, OH 45212

 Is Default

 [ Class(). Address().IsDefault]

 The default output of this script is always 1 , because Rent Manager always pulls the address marked Default . The exception is when a parameter for a different address is specified, in which case the output is 0 .

 Postal Code

 [ Class(). Address().PostalCode]

 Displays the postal code of the default address for the specified class.

 State

 [ Class(). Address().State]

 Displays the state of the default address for the specified class.

 Street 1

 [ Class(). Address().Street1]

 Displays the first line of the street of the default address for the specified class.

 Street 2

 [ Class(). Address().Street2]

 Displays the second line of the street of the default address for the specified class.

 Type

 [ Class(). Address().Type]

 Displays the address type Label for the default address for the specified class.
