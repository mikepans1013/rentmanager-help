# Contact List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Contact-List.htm

This function displays a list of contact names associated with the selected tenant.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below:

 Class
 Syntax

 Tenant

 [Tenant().ContactList()]

 Displays information found on the tenant's View Contacts pop-up.

 Vendor

 [Vendor().ContactList()]

 Displays information found on the vendor's View Contacts pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ContactList( "ContactType" , "Delimiter" , "IncludeInactive" )]

 ContactType

 Specify the contact type you want Rent Manager to list. If no contact type is specified, the function defaults to displaying the names of all contacts.

 [ContactList(“Roommate”)]

 Displays all contact names identified as roommates.

 Delimiter

 Separate multiple entities with a delimiter such as or , and , or & . If no delimiter is specified, Rent Manager displays each entity separated by commas .

 More Information

 In order to define a delimiter, the first parameter position must be defined. In this example, an empty set of quotation marks in the first position tells Rent Manager to use the default value of all contact types .

 [ContactList(""," and ")]

 Displays all contact names with a spaced and between them.

 More Information

 It is recommended to include the spaces you wish to display between the delimiter and the entity name as Rent Manager defaults to no spaces between.

 IncludeInactive

 Warning

 The IncludeInactive parameter applies to the function only when it is used with the Tenant class. If using this function with the Vendor class, there is no IncludeInactive parameter.

 Specify whether to include inactive contacts. By default, False is used. To include the tenant's inactive contacts, enter True .

 [ContactList("","","True")]

 Displays the names of all the tenant's active and inactive contacts separated by commas.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ContactList("Roommate"," or ")]

 Displays the full name of every "Roommate" contact of the tenant, separated by or .

 The output is formatted as displayed below:

 Jonathan Samuels or Marcus West

 [Tenant().ContactList("Co-signer")]

 Displays the full name of every "Co-signer" contact of the tenant separated with commas by default.

 The output is formatted as displayed below:

 Mary Adams, Christine Crosby

 [Tenant().ContactList("Tenant,Occupant"," and ")]

 Displays the full name of every "Tenant" and "Occupant" contact of the tenant, separated by and .

 The output is formatted as displayed below:

 Abigail Brewis and Shaun Ahgren and Charlie Gooden

 [Tenant().ContactList(""," & ")]

 Displays the full name of every contact of the tenant, separated by & .

 The output is formatted as displayed below:

 Diana Stone & Carmen Stone & Jordan Jensen

 [Tenant().ContactList(""," or ","True")]

 Displays the full name of every active and inactive contact of the tenant, separated by or .

 The output is formatted as displayed below:

 Mark Stevens or Gary Huber or Mary Wagner

 [Vendor().ContactList()]

 Displays the full name of every contact of the vendor, separated with commas by default.

 Ralph Koenig, Sierra Culbertson
