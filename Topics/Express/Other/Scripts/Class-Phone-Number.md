# Phone Number Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Phone-Number.htm

This class provides functions for retrieving data about a phone number for a specified class. Phone numbers are found on the details pages for tenants, properties, units, owners, and vendors. Phone numbers for contacts are found on the View Contacts page of the tenant for whom they are contacts.

 Example

 [Tenant().Contact(1).PhoneNumber().Number]

 Result

 Displays the Default phone number (excluding the extension) for the first additional contact of the tenant as listed on the tenant's View Contacts page.

 Example

 [Property().PhoneNumber().Type]

 Result

 Displays the Default phone number's type for the selected property as listed on the Property details page.

 Class Parameter

 This class can specify a single, optional parameter: a name or an index.

 Name

 Specify the name of the phone number type to examine.

 [Prospect().Contact().PhoneNumber("Work").Extension]

 Displays the extension defined for the phone number with the "Work" phone number type.

 Index

 An index allows you to return information about a specific phone number on an account by using a number to identify each phone number listed. For example, if there are three phone numbers listed on a contact’s account, they are referenced by indexes 0, 1, and 2. You can specify which phone number you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the phone number marked as Default .

 More Information

 Refer to Phone Number Indexing for a complete explanation of how phone numbers are indexed.

 Phone numbers are pulled from different locations for each unique parent class. The following table provides the location from which phone number information for each parent class is found.

 Class
 Location

 Owner

 The Owner details page on the Phone Numbers tile.

 Tenant

 The Tenant details page on the Phone Numbers tile.

 Contact

 The tenant's View Contacts page in the Phone Numbers section.

 Property

 The  Property details page on the Phone Numbers tile.

 Prospect

 The Prospect details page on the Contacts tile.

 Vendor

 The Vendor details page on the Phone Numbers tile.

 [Tenant().Contact().PhoneNumber(1).Number]

 Displays the tenant's first additional phone number as defined from the top of the Phone numbers section on the View Contacts page.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Extension

 [ Class(). PhoneNumber().Extension]

 Displays the extension of the phone number for the specified class.

 Full Number

 [ Class(). PhoneNumber().FullNumber]

 Displays the full phone number (including the extension) for the specified class.

 Is Default

 [ Class(). PhoneNumber().IsDefault]

 Displays 1 if the phone number is checked as Default ; otherwise, 0 displays.

 Is Text Ready

 [ Class(). Contact().PhoneNumber().IsTextReady]

 Displays 1 if the contact's the phone number has T (SMS/Text Ready) checked on the View Contacts pop-up. Otherwise, displays 0 .

 Number

 [ Class(). PhoneNumber().Number]

 Displays the phone number (excluding extension) for the specified class.

 Type

 [ Class(). PhoneNumber().Type]

 Displays the phone number's type for the specified class.
