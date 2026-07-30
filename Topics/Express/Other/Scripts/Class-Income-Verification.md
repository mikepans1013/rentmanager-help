# Income Verification Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Income-Verification.htm

The Income Verification class examines details on a contact's income verification request. It is preceded by the tenant- or prospect-level Contact class and can be followed by a scripting function associated with the verification request.

 More Information

 To use this feature, you must have a contract with AmRent and enter income verification credentials in system preferences. For more information, refer to Set Up Income and ID Verification .

 Example

 [Tenant().Contact().IncomeVerification.ApplicantType]

 Result

 Displays the Applicant Type of the first contact on the tenant's income verification request.

 Example

 [Prospect().Contact(1).IncomeVerification.FullName]

 Result

 Displays the first and last name of the second contact on the prospect's income verification request.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 The following examples reflect the syntax that displays when you double-click the functions in the Insertable Fields section.

 Function
 Description

 Applicant Type

 [ Class(). Contact().IncomeVerification.ApplicantType]

 Displays the applicant type for the contact as listed in the income verification request. Possible values include: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Primary , or Spouse .

 Birth Date

 [ Class(). Contact().IncomeVerification.BirthDate]

 Displays the birth date in the associated income verification request for the specified contact.

 City

 [ Class(). Contact().IncomeVerification.City]

 Displays the city in the associated income verification request for the specified contact's current address.

 City State Postal Code

 [ Class(). Contact().IncomeVerification.CityStatePostalCode]

 Displays the city, state, and postal code in the associated income verification request for the specified contact's current address. The output is formatted as displayed below:

 Norwood, OH 45212

 Email

 [ Class(). Contact().IncomeVerification.Email]

 Displays the Email as entered on the Run Income Verification pop-up.

 First Name

 [ Class(). Contact().IncomeVerification.FirstName]

 Displays the first name in the associated income verification request for the specified contact.

 Full Name

 [ Class(). Contact().IncomeVerification.FullName]

 Displays the first and last name in the associated income verification request for the specified contact.

 Last Name

 [ Class(). Contact().IncomeVerification.LastName]

 Displays the last name in the associated income verification request for the specified contact.

 Phone Number

 [ Class(). Contact().IncomeVerification.PhoneNumber]

 Displays the Phone Number as entered on the Run Income Verification pop-up.

 Postal Code

 [ Class(). Contact().IncomeVerification.PostalCode]

 Displays the postal code in the associated income verification for the specified contact.

 State

 [ Class(). Contact().IncomeVerification.State]

 Displays the two-letter state abbreviation in the associated income verification request for the specified contact.

 Status

 [ Class(). Contact().IncomeVerification.Status]

 Displays the current Status of the income verification request for the specified contact.

 Street

 [ Class(). Contact().IncomeVerification.Street]

 Displays the street in the associated income verification for the specified contact.

 Submitted Date

 [ Class(). Contact().IncomeVerification.SubmittedDate]

 Displays the submitted date in the associated income verification for the specified contact.
