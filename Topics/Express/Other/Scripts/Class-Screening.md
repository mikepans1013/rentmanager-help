# Screening Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Screening.htm

This class examines tenant or prospect screening information. The class is preceded by the Contact class and can be followed by a screening-level scripting function, which retrieves data from the screening associated with the entity's account.

 Example

 [Tenant().Contact().Screening.AnnualIncome]

 Result

 Displays the annual income in the screening for the primary contact of the current tenant account.

 Example

 [Prospect().Contact().Screening.BirthDate]

 Result

 Displays the birth date in the screening for the primary contact on the prospect's account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Annual Income

 [ Class(). Contact().Screening.AnnualIncome]

 Displays the annual income of the contact as listed in the screening.

 Applicant Type

 [ Class(). Contact().Screening.ApplicantType]

 Displays the applicant type for the contact as listed in the screening. Possible values include: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Primary , or Spouse .

 Birth Date

 [ Class(). Contact().Screening.BirthDate]

 Displays the birth date in the associated screening for the specified contact.

 City

 [ Class(). Contact().Screening.City]

 Displays the city in the associated screening for the specified contact's current address.

 City State Postal Code

 [ Class(). Contact().Screening.CityStatePostalCode]

 Displays the city, state, and postal code in the associated screening for the specified contact's current address. The output is formatted as displayed below:

 Norwood, OH 45212

 Details

 [ Class(). Contact().Screening.Details()]

 Displays selected details in the associated screening for the specified contact and class. Each block of screening details is shown in a line as a string of one or more specified screening fields. If no fields are specified in the Format parameter, the results display by default the Agency, Score, Date, Min, Max, and Factors separated by spaces. Additional variables are available to display in each line. An example is shown below.

 [Tenant.Contact.Screening.Details("$_Name \t$_Score \t$_Agency \t$_Date \n")]

 Displays a new line with a customized list of the name, score, agency, and date for the primary contact of the current tenant account.

 First Name

 [ Class(). Contact().Screening.FirstName]

 Displays the first name in the associated screening for the specified contact and class.

 Formatted Workflow Solution Text

 [ Class(). Contact().Screening.FormattedWorkflowSolutionText]

 Display the formatted workflow solution text describing the workflow solution code in the associated screening for the specified contact and class. Up to two lines are returned, split with a new line.

 Full Name

 [ Class(). Contact().Screening.FullName]

 Displays information from the screening correlating contact's View Contacts pop-up.

 Last Name

 [ Class(). Contact().Screening.LastName]

 Displays the last name in the associated screening for the specified contact and class.

 Middle Name

 [ Class(). Contact().Screening.MiddleName]

 Displays the middle name in the associated screening for the specified contact and class.

 Monthly Rent

 [ Class(). Contact().Screening.MonthlyRent]

 Displays the monthly rent in the associated screening for the specified contact and class.

 Phone Number

 [ Class(). Contact().Screening.PhoneNumber]

 Displays the phone number in the associated screening for the specified contact and class.

 Postal Code

 [ Class(). Contact().Screening.PostalCode]

 Displays the postal code in the associated screening for the specified contact and class.

 State

 [ Class(). Contact().Screening.State]

 Displays the two-letter state abbreviation in the associated screening for the specified contact and class.

 Street

 [ Class(). Contact().Screening.Street]

 Displays the street in the associated screening for the specified contact and class.

 Submitted Date

 [ Class(). Contact().Screening.SubmittedDate]

 Displays the submitted date in the associated screening for the specified contact and class.

 Workflow Solution Code

 [ Class(). Contact().Screening.WorkflowSolutionCode]

 Displays the workflow solution code in the associated screening for the specified contact and class. Possible values include: No Workflow Solution , Approved , Declined , Warning , Conditional Approval , or Pending .

 Workflow Solution Text

 [ Class(). Contact().Screening.WorkflowSolutionText]

 Displays the workflow solution text explaining the workflow solution code in the associated screening for the specified contact and class.
