# Marketing Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Marketing.htm

This class examines data about property or unit marketing, such as online listing information. The class can be preceded by the Property class or the Unit class and can be followed by a marketing-level scripting function. Functions in this class typically evaluate fields on the Marketing Setup pop-up of the specified property or unit.

 More Information

 The parent class for Marketing functions must match the level in which online listings are enabled. For example, if you wanted to generate the Feed Type within a unit-type letter template for a unit with property marketing enabled, you would use the following script:

 [Property().Marketing.FeedType]

 To generate information for a unit when property-level marketing is enabled, Property must be the parent class.

 Example

 [Property().Marketing.Laundry]

 Result

 Displays the selection(s), separated by commas, checked in the Laundry drop-down list on the property's Marketing Setup pop-up in the Features section.

 Example

 [Unit().Marketing.CompanyName]

 Result

 Displays the Company Info as entered on the unit's Marketing Setup pop-up in the Contact Information section.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Agent Email

 [ Class() .Marketing.AgentEmail]

 Displays the leasing agent's Email Address as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent First Name

 [ Class() .Marketing.FirstName]

 Displays the leasing agent's First Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent Last Name

 [ Class() .Marketing.LastName]

 Displays the leasing agent's Last Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent Phone

 [ Class() .Marketing.AgentPhone]

 Displays the leasing agent's Phone Number as entered in the Marketing Setup pop-up's Advanced Settings .

 Company City

 [ Class(). Marketing.CompanyCity]

 Displays the company's City as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Info

 [ Class(). Marketing.CompanyInfo]

 Displays the Company Name as entered on the Marketing Setup pop-up in the Contact Information section.

 Company State

 [ Class(). Marketing.CompanyState]

 Displays the company's State as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Street Address

 [ Class(). Marketing.CompanyStreetAddress]

 Displays the company's Street address as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Website

 [ Class(). Marketing.CompanyWebsite]

 Displays the Company Website as entered on the Marketing Setup pop-up in the Contact Information section.

 Company ZIP

 [ Class(). Marketing.CompanyZIP]

 Displays the company's Postal Code as entered on the Marketing Setup pop-up in the Contact Information section.

 Contact Email

 [ Class() .Marketing.ContactEmail]

 Displays the Contact Email as entered on the Marketing Setup tab in the Contact Information section.

 Contact Phone

 [ Class() .Marketing.ContactPhone]

 Displays the Contact Phone as entered on the Marketing Setup pop-up in the Contact Information section.

 Deposit Fees

 [ Class() .Marketing.DepositFees]

 Displays the security Deposit Fee(s) required for rental as entered on the Marketing Setup pop-up in the Listing Details section.

 Feed Type

 [ Class() .Marketing.FeedType]

 Displays the Feed Type as entered in the Marketing Setup pop-up's Advanced Settings .

 Image Count

 [ Class(). Marketing.ImageCount()]

 Displays the number of images assigned to the Images section. Only images associated with the image type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list.

 Image URL

 [ Class(). Marketing.ImageURL()]

 Displays the file path to the source file of the selected image on the Images section. Only images associated with the type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list.

 Images

 [ Class() .Marketing.Images()]

 Displays the image from the property or unit Images section. Only images of the type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list are evaluated.

 Incl. Utilities

 [ Class() .Marketing.Incl.Utilities]

 Displays the selection(s), separated by commas, checked in the Incl. Unities drop-down list on the Marketing Setup pop-up in the Features section.

 Latitude Coordinate

 [ Class() .Marketing.LatitudeCoordinate]

 Displays the Latitude as entered in the Marketing Setup pop-up's Advanced Settings .

 Laundry

 [ Class() .Marketing.Laundry]

 Displays the selection(s), separated by commas, checked in the Laundry drop-down list on the Marketing Setup pop-up in the Features section.

 Lease Terms

 [ Class() .Marketing.LeaseTerms]

 Displays the selection(s), separated by commas, checked in the Lease Terms drop-down list on the Marketing Setup pop-up in the Listing Details section.

 Listing URL

 [ Class() .Marketing.ListingURL]

 Displays the Listing URL as entered in the Marketing Setup pop-up's Advanced Settings .

 Longitude Coordinate

 [ Class() .Marketing.LongitudeCoordinate]

 Displays the Longitude as entered in the Marketing Setup pop-up's Advanced Settings .

 Marketing Description

 [ Class() .Marketing.MarketingDescription]

 Displays the text or value as entered on the Marketing Setup pop-up in the Marketing Description section.

 Marketing Name

 [ Class(). .Marketing.MarketingName()]

 Displays the Marketing Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Named Insured

 [Tenant().Lease().Insurance().NamedInsured]

 Displays the full name of the Named Insured associated with the policy on the tenant's primary lease.

 Pets

 [ Class() .Marketing.Pets]

 Displays the selection(s), separated by commas, checked in the Pets drop-down list on the Marketing Setup pop-up in the Features section.

 Price

 [ Class() .Marketing.Price]

 Displays Price as entered on the Marketing Setup pop-up in the Listing Details section.

 Property Type

 [ Class() .Marketing.PropertyType]

 Displays the Property Type as entered in Marketing Setup pop-up's Advanced Settings .

 Rental Classification

 [ Class(). .Marketing.RentalClassification]

 Displays the Rental Classification as entered in the Marketing Setup pop-up's Advanced Settings .

 Rental Type

 [ Class() .Marketing.RentalType]

 Displays the Rental Type as entered in the Marketing Setup pop-up's Advanced Settings .

 Status

 [ Class() .Marketing.Status]

 Displays the selection in the Status field in Rent Manager .

 Unit Number

 [ Class(). .Marketing.UnitNumber]

 Displays the Unit Number as entered on the Marketing Setup pop-up in the Listing Details section.

 Virtual Tour URL/ Filepath

 [ Class() .Marketing.VirtualTourURL_Filepath]

 Displays the Virtual Tour URL as entered in the Marketing Setup pop-up's Advanced Settings .
