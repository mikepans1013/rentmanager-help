# Contact Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Contact.htm

This class examines contacts on tenant, prospect, or vendor accounts. When this class is preceded by the Tenant, Prospect, or Vendor class, it can be followed either by a contact-level scripting function or another class associated with the contact. This class can also be preceded by the Owner class. However, these classes can only use a subset of the available functions.

 Example

 [Tenant().Contact().Email]

 Result

 Displays the Email address of the first contact listed on the tenant's account.

 Example

 [Prospect().Contact().FirstName]

 Result

 Displays the First Name of the first contact listed on the prospect's account.

 Example

 [Prospect().Contact().IncomeVerification().Status]

 Result

 Displays the income verification Status for the first contact listed on the prospect's account.

 Class Parameter

 This class can be passed a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific contact on an account by using a number to identify each contact listed. For example, if there are three contacts listed on a tenant's account, they are referenced by indexes 0, 1, and 2. You can specify which contact you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first contact in the list.

 More Information

 An index can be specified only for the Contact class if it is preceded by the Tenant, Vendor, or Prospect class. If it is preceded by the Owner class, no index can be specified.

 [Tenant().Contact(1).FirstName]

 Displays the First Name of the second contact listed on the tenant's account.

 [Tenant().Contact(2).LastName]

 Display the Last Name of the third contact listed on the tenant's account.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 More Information

 If the class is preceded by the Owner class, you can only follow with the PhoneNumber class.

 Class
 Description

 Address

 [ Class(). Contact().Address(). Function ]

 This class retrieves address data from the Addresses section on the View Contacts pop-up for the tenant or prospect account.

 Income Verification

 [ Class(). Contact().IncomeVerification(). Function ]

 This class retrieves income verification data from a contact listed on the View Contacts pop-up for the tenant or prospect account.

 Phone Number

 [ Class(). Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for vendor or owner account, or from a contact listed on the View Contacts pop-up for the tenant or prospect account.

 Screening

 [ Class(). Contact().Screening. Function ]

 This class retrieves screening data for a contact listed on the View Contacts pop-up for the tenant or prospect account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 More Information

 If you are using an owner-type letter template, the Contact class can either be followed by the PhoneNumber class or the Email function.

 Function
 Description

 Active

 [ Class(). Contact().Active]

 Displays whether the contact has Active checked on the View Contacts pop-up. The function displays True if the contact is active. Otherwise, False displays.

 Warning

 The Active function applies only when it is used with the Tenant or Prospect classes.

 Address Count

 [ Class(). Contact().AddressCount]

 Displays the total number of addresses entered on the View Contacts pop-up.

 Age

 [ Class(). Contact().Age]

 Displays the age of the contact based on the Birthday field.

 Annual Income

 [ Class(). Contact().AnnualIncome]

 Displays the Annual Income of the contact as entered on the View Contacts pop-up.

 Birth Date

 [ Class(). Contact().BirthDate]

 Displays the contact's Birthday as entered on the View Contacts pop-up.

 Board Member Status

 [ Class(). Contact().BoardMemberStatus()]

 Displays whether or not the association board member is currently active, was active, or will be active.

 Board Role

 [ Class(). Contact().BoardRole()]

 Displays the role of the association board member.

 Board Term End

 [ Class(). Contact().BoardTermEnd()]

 Displays the term end date of the association board member.

 Board Term Start

 [ Class(). Contact().BoardTermStart()]

 Displays the term start date of the association board member.

 Car

 [ Class(). Contact().Car]

 Displays the Vehicle as entered on the contact's View Contacts pop-up.

 Comment

 [ Class(). Contact().Comment()]

 Displays the text entered in the Comment section of the vendor's contact.

 Committee Name

 [ Class(). Contact().CommitteeName()]

 Displays the name of the committee to which the contact was added.

 Contact ID

 [ Class(). Contact().ContactID]

 Displays the system-generated identification number of the contact.

 Email

 [ Class(). Contact().Email]

 Displays the Email as entered on the contact's View Contacts pop-up.

 Employer

 [ Class(). Contact().Employer]

 Displays the Employer as entered on the contact's View Contacts pop-up.

 Federal Tax ID

 [ Class(). Contact().FederalTaxID]

 Displays the Soc Sec# on the contact's View Contacts pop-up.

 First Name

 [ Class(). Contact().FirstName]

 Displays the First Name as entered on the contact's View Contacts pop-up.

 Full Name

 [ Class(). Contact().FullName()]

 Displays information from the contact's View Contacts pop-up.

 Greeting Name

 [ Class(). Contact().GreetingName]

 Displays the First Name and Last Name as entered on the contact's View Contacts pop-up.

 Image

 [ Class(). Contact.Image(Contact.ImagePath())]

 Displays the image uploaded to the contact's View Contacts pop-up.

 Image Path

 [ Class(). Contact().ImagePath]

 Displays the file path of the image uploaded to the contact's View Contacts pop-up.

 Is Board Member

 [ Class(). Contact().IsBoardMember()]

 Displays whether or not the contact is an active association board member in Rent Manager 12 .

 Is Committee Member

 [ Class(). Contact().IsCommitteeMember]

 Displays whether or not the contact is an association committee member in Rent Manager 12 .

 Is Primary

 [ Class(). Contact().IsPrimary]

 Displays 1 if the contact is checked as Primary on the View Contacts pop-up. Otherwise, displays 0 .

 Last Name

 [ Class(). Contact().LastName]

 Displays the Last Name as entered on the contact's View Contacts pop-up.

 License

 [ Class(). Contact().License]

 Displays the License number as entered on the contact's View Contacts pop-up.

 Middle Name

 [ Class(). Contact().MiddleName]

 Displays the Middle Name as entered on the contact's View Contacts pop-up.

 Name

 [ Class(). Contact().Name]

 Displays the Name as entered on the contact.

 Phone Number Count

 [ Class() .Contact().PhoneNumberCount]

 Displays the total count of phone numbers as entered on contact's View Contacts pop-up.

 Screening Count

 [ Class(). Contact().ScreeningCount]

 Displays the number of screening reports on the contact’s History/Notes pop-up.

 Show On Bill

 [ Class(). Contact().ShowOnBill]

 Displays 1 if Show On Statement/Labels is checked on the contact's View Contacts pop-up. Otherwise, 0 displays.

 Type Description

 [ Class(). Contact().TypeDescription]

 Displays the Description as entered on the Contact Types Details pop-up.

 Type Name

 [ Class(). Contact().TypeName]

 Displays the Type name selected on the contact's View Contacts pop-up.

 User Defined Field

 [ Class(). Contact().UserDefinedField()]

 Displays the value of a contact-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Contact().UserDefinedField("Is Minor")]

 Displays the value for the Is Minor user defined field.
