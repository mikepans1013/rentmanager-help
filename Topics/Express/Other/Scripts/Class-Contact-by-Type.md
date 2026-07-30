# Contact by Type Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Contact-by-Type.htm

This class typically examines contacts assigned to the defined Type and can be followed by either a contact-level scripting function or another class associated with the contact. You must have Contact Types set up in Rent Manager to use this script because all of the information is drawn from the Contact Types page.

 More Information

 The ContactByType class is considered a child class of the Tenant class. If you wish to examine contact-type information for a prospect, you need to use the following syntax in prospect-type letters and reports:

 [Tenant().ContactByType().Function]

 Example

 [Tenant().ContactByType("Cosigner").PhoneNumber().FullNumber]

 Result

 Displays the full Default phone number of the tenant's first contact assigned the Cosigner contact type.

 Class Parameter

 A single parameter should be specified for this class: a name.

 Name

 Enter the name of the contact type to examine. Optionally, add an index to the name to further specify which of a contact type to examine. Index is a value that relates to the number of instances the same contact type appears in a list of contacts. If no index is passed, Rent Manager defaults to 0 , which represents the first instance of the contact type in the list.

 [Tenant().ContactByType("Caretaker").FullName]

 Displays the full name of the tenant's first contact assigned the Caretaker contact type.

 [Tenant().ContactByType("Caretaker,1").FullName]

 Displays the full name of the tenant's first additional contact assigned the Caretaker contact type.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Tenant().ContactByType().Address(). Function ]

 This class retrieves address data for a contact Type from the Addresses section on the View Contacts pop-up for the tenant account.

 Phone Number

 [Tenant().ContactByType.PhoneNumber(). Function ]

 This class retrieves phone number data for a contact Type listed on the View Contacts pop-up for the tenant account.

 Screening

 [Tenant().ContactByType().Screening. Function ]

 This class retrieves screening data for a contact Type listed on the View Contacts pop-up for the tenant account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Age

 [Tenant().ContactByType().Age]

 Displays the age of the tenant contact based on the Birthday field.

 Annual Income

 [Tenant().ContactByType().AnnualIncome]

 Displays the Annual Income of the tenant contact as entered on the View Contacts pop-up.

 Birth Date

 [Tenant().ContactByType().BirthDate]

 Displays the tenant contact's Birthday as entered on the View Contacts pop-up.

 Car

 [Tenant().ContactByType().Car]

 Displays the Vehicle as entered on the tenant contact's View Contacts pop-up.

 Contact ID

 [Tenant().ContactByType().ContactID]

 Displays the system-generated identification number of the tenant contact.

 Email

 [Tenant().ContactByType().Email]

 Displays the Email as entered on the tenant contact's View Contacts pop-up.

 Employer

 [Tenant().ContactByType().Employer]

 Displays the Employer as entered on the tenant contact's View Contacts pop-up.

 Federal Tax ID

 [Tenant().ContactByType().FederalTaxID]

 Displays the Soc Sec # on the tenant contact's View Contacts pop-up.

 First Name

 [Tenant().ContactByType().FirstName]

 Displays the First Name as entered on the contact's View Contacts pop-up.

 Full Name

 [ Class(). ContactByType().FullName()]

 Displays information from the specified contact type's View Contacts pop-up.

 Greeting Name

 [Tenant().ContactByType().GreetingName]

 Displays the First Name and Last Name as entered on the specified contact type's View Contacts pop-up.

 Image Path

 [Tenant().ContactByType().ImagePath]

 Displays the file path of the image uploaded to the specified contact type's View Contacts pop-up.

 Is Primary

 [Tenant().ContactByType().IsPrimary]

 Displays 1 if the selected contact type is checked as Primary on the View Contacts pop-up. Otherwise, displays 0 .

 Last Name

 [Tenant().ContactByType().LastName]

 Displays the Last Name as entered on the specified contact type's View Contacts pop-up.

 License

 [Tenant().ContactByType().License]

 Displays the License as entered on the specified contact type's View Contacts pop-up.

 Middle Name

 [Tenant().ContactByType().MiddleName]

 Displays the Middle Name as entered on the specified contact type's View Contacts pop-up.

 Show On Bill

 [Tenant().ContactByType().ShowOnBill]

 Displays 1 if Show On Statement/Labels is checked on the specified contact type's View Contacts pop-up. Otherwise, 0 displays.

 Type Description

 [Tenant().ContactByType().TypeDescription]

 Displays the Description as entered on the Contact Types Details pop-up.

 Type Name

 [Tenant().ContactByType().TypeName]

 Displays the Type name selected on the specified contact type's View Contacts pop-up.
