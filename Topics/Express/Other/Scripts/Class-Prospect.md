# Prospect Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Prospect.htm

This class examines prospect account information and can either be followed by a prospect-level scripting function or another class associated with a prospect.

 Prospect accounts represent the people or businesses that are interested in units that you manage. Prospects can be converted into tenant accounts in Rent Manager .

 More Information

 In prospect-type letters and reports, the Tenant class is considered the default (assumed) class. This is because prospects are considered a type of tenant account.

 A prospect account has unique fields that cannot be found on a tenant account, such as Interest Level and First Contact . The values for these fields can be retrieved using the [Prospect.Function] syntax.

 Some fields appear on both prospect and tenant accounts, such as First Name . The values for these fields can be retrieved using the [Tenant().Function] syntax.

 Example

 [Prospect.ApplicationDate]

 Result

 Displays the date the rental application was submitted by the prospect.

 Example

 [Prospect().Contact().PhoneNumber().FullNumber]

 Result

 Displays the full number and extension of the prospect's default phone number.

 Example

 [Prospect().Reservation().ArrivalDate]

 Result

 Displays the Arrival date listed on the prospect's reservation located on the prospect's Reservation Details page.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 More Information

 If preceded by the Tenant class in a prospect-type letter template or report the Contact By Type Class , Pet Class , or Service Manager Class may also be used to retrieve prospect data.

 Class
 Description

 Address

 [Prospect.Address(). Function ]

 This class retrieves address data from the Addresses tile on the Prospect details page.

 Contact

 [Prospect.Contact(). Function ]

 This class retrieves data from the View Contacts pop-up for the prospect account.

 More Information

 If you want to provide screening information for the prospect, it is recommended that you follow this class with the Screening class.

 Phone Number

 [Prospect().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the prospect.

 Rent Quotes

 [Prospect().RentQuotes(). Function ]

 This class retrieves data about rental quotes on a prospect account

 Reservation

 [Prospect().Reservation(). Function ]

 This class retrieves short term rental (STR) reservation data for the prospect.

 Unit

 [Prospect.Unit(). Function ]

 This class retrieves data from the Reserved Unit summary card for the prospect account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 More Information

 If you are using a Tenant Class function to return information about a prospect, you need to use the following syntax in prospect-type letters and reports: Tenant.Function

 Function
 Description

 Address Count

 [Prospect.AddressCount]

 Displays the total number of addresses listed for the prospect.

 Amenities Count

 [Prospect.AmenitiesCount]

 Displays the number of amenities entered on the prospect's Preferences tile.

 Amenities List

 [Prospect.AmenitiesList]

 Displays a list of preferred amenities (separated by commas) as entered on the prospect's Preferences tile.

 Amenity

 [Prospect.Amenity()]

 Displays name, comment, or price information associated with a preferred amenity specified on the prospect's Preferences tile.

 Amps

 [Prospect.Amps]

 Displays the number of amperes (amps) the outlet is rated for, which is entered in the STR prospect's Preferences tile.

 Application Date

 [Prospect.ApplicationDate()]

 Displays Application Date entered into the Lead Information tile for the prospect.

 CashPay Account Number

 [Prospect.CashPayAccountNumber]

 Displays the CashPay account number assigned by Zego to the prospect.

 Display Color

 [Prospect.DisplayColor]

 Displays the name of the color selected in the Prospect Color field of the prospect's General tile.

 Display Color Code

 [Prospect.DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Prospect Color field of the prospect's General tile.

 Failed Calls

 [Prospect.FailedCalls]

 Displays the number of failed calls as shown on the prospect's History/Notes pop-up. Failed calls are defined as entries on the History/Notes pop-up of the Call type, where the box Spoke with Prospect is unchecked.

 First Contact

 [Prospect.FirstContact]

 Displays the date and time of the first contact with a prospect as shown on the prospect History/Notes pop-up. First contact is defined as the earliest email, visit, or call on the prospect's History/Notes pop-up where the checkbox for Spoke with prospect is checked.

 Floor

 [Prospect.Floor]

 Displays the names of the Preferred Floors as entered on the prospect's Preferences tile.

 Floor Count

 [Prospect.FloorCount]

 Displays the number of Preferred Floors as entered on the prospect's Preferences tile.

 Floor List

 [Prospect.FloorList]

 Displays a list of Preferred Floors , separated by commas, as entered on the prospect's Preferences tile.

 Interest Level

 [Prospect.InterestLevel]

 Displays the ranking from 1 – 10 (with 10 being the highest) to measure the level of interest that the prospect has in renting from you as entered on the prospect's Lead Information tile.

 Interested Units

 [Prospect.InterestedUnits]

 Displays a list of property names and, if specified, the associated unit names, on the prospect's Interested Properties/Units tile.

 Last Contact

 [Prospect.LastContact]

 Displays the date and time of the last contact with a prospect as shown on the prospect's Last Contact summary card. Last contact is established by the latest email, visit, or call on the prospect's History/Notes pop-up where the checkbox for Spoke with prospect is checked.

 Last History Item

 [Prospect.LastHistoryItem]

 Displays the date and time of the last history item, which is the latest entry, as shown on the prospect's History/Notes pop-up.

 Lead Source

 [Prospect.LeadSource]

 Displays the name of the marketing lead source as entered on the prospect's Lead Information tile.

 Lease Agent

 [Prospect.LeaseAgent]

 Displays the name of the leasing agent as entered on the prospect's Lead Information tile.

 Lease Agent Email

 [Prospect.LeaseAgentEmail]

 Displays the email address of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's email address is entered on the user's Contact Information tile.

 Lease Agent Fax Number

 [Prospect.LeaseAgentFaxNumber]

 Displays the fax number of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's fax number is entered on the user's Contact Information tile.

 Lease Agent Phone Number

 [Prospect.LeaseAgentPhoneNumber]

 Displays the phone number of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's phone number is entered on the user's Contact Information tile.

 Lease End Date

 [Prospect.LeaseEndDate]

 Displays the Expected Lease End date as entered in the prospect's Reservation/Expected Lease Information tile.

 Lease Signed Date

 [Prospect.LeaseSignedDate]

 Displays the lease signed date for a prospect whose Status has changed to Tenant .

 Lease Start Date

 [Prospect.LeaseStartDate]

 Displays the Expected Lease Start date as entered on the prospect's Reservation/Expected Lease Information tile.

 Lease Term

 [Prospect.LeaseTerm]

 Displays the Lease Term selection on the prospect's Reservation/Expected Lease Information tile.

 Length

 [Prospect.Length]

 Displays the length entered in the STR prospect's Preferences tile. The output is formatted as displayed below:

 28

 Lost Reason

 [Prospect.LostReason]

 Displays the reason the selected prospect was lost as entered in the prospect's Status summary card.

 Move In Date

 [Prospect.MoveInDate]

 Displays the Move In date as entered in the prospect's Preferences tile. If the prospect is a guest with a short term rental reservation, the date entered in the Arrival field as entered in the STR prospect's Preferences tile displays.

 Move Out Date

 [Prospect.MoveOutDate]

 Displays the Move Out date as entered in the prospect's Preferences tile. If the prospect is a guest with a short term rental reservation, the date entered in the Departure field as entered in the STR prospect's Preferences tile displays.

 Open Charges List

 [Prospect().OpenChargesList()]

 Displays information found on the prospect's View Transactions pop-up.

 Prospect Stage

 [Prospect.ProspectStage()]

 Displays the current Stage as entered on the prospect's Lead Information tile.

 Pull Through

 [Prospect.PullThrough]

 Displays Yes if Pull-Through is checked in the STR prospect's Preferences tile; otherwise, displays No .

 Quote Count

 [Prospect.QuoteCount()]

 Displays the number of rent quotes associated with the prospect.

 Quote List

 [Prospect.QuoteList()]

 Displays a list of rent quotes associated with the prospect.

 Rent Due Date

 [Prospect.RentDueDate]

 Displays the expected rent due date for the prospect as entered in the Reservation/Expected Lease Information tile.

 In that section, when the Rent Period is Monthly , this function returns the Due Day value of 1 - 31 . When the Rent Period is Weekly , this function returns 0 - 6 for the selected Due Day , with 0 for Sunday, 1 for Monday, 2 for Tuesday, etc. When the Rent Period is Daily , a value of 0 is returned.

 Rent Maximum

 [Prospect.RentMaximum]

 Displays the Rent Max as entered on the prospect's Preferences tile.

 Rent Minimum

 [Prospect.RentMinimum]

 Displays the Rent Min as entered on the prospect's Preferences tile.

 Rent Period

 [Prospect.RentPeriod]

 Displays whether Daily , Weekly , or Monthly is selected for the Rent Period field on the prospect's Reservation/Expected Lease Information tile.

 Reserved Move In Date

 [Prospect.ReservedMoveInDate]

 Displays the Reserved Move In date as entered in the prospect's Reservation/Expected Lease Information tile. If the prospect is a guest with a short term rental reservation, the Arrival date as entered in the prospect's Preferences tile displays.

 Reserved Move Out Date

 [Prospect.ReservedMoveOutDate]

 Displays the Reserved Move Out date as entered in the prospect's Reservation/Expected Lease Information tile. If the prospect is a guest with a short term rental reservation, the Departure date as entered in the prospect's Preferences tile displays.

 Reserved Quote Additional Recurring

 [Prospect.ReservedQuoteAdditionalRecurring]

 Displays the total of all selected recurring charges in the rent quote with the Reserved status, excluding the Rent amount.

 Reserved Quote One-Time Charge

 [Prospect.ReservedQuoteOneTimeCharge]

 Displays the total amount of all one-time charges in the rent quote with the Reserved status.

 Reserved Quote Rent

 [Prospect.ReservedQuoteRent]

 Displays the Rent amount entered in the rent quote with the Reserved status.

 Stage Count

 [Prospect.StageCount()]

 Displays the current stage number of the prospect as they progress through the leasing process.

 Stage List

 [Prospect.StageList()]

 Displays the description, date, and time of the current stage as entered on the prospect's Lead Information tile.

 Status

 [Prospect.Status]

 Displays the current status as listed on the prospect Status summary card. This function outputs Tenant , Prospect , Lost , or Lost-Rejected .

 Total Calls

 [Prospect.TotalCalls]

 Displays the total number of calls as listed on the prospect's History/Notes pop-up.

 Total Emails

 [Prospect.TotalEmails]

 Displays the total number of emails as listed on the prospect's History/Notes pop-up

 Total History Items

 [Prospect.TotalHistoryItems]

 Displays the total number of notes as listed on the prospect's History/Notes pop-up.

 Total Visit

 [Prospect.TotalVisit]

 Displays the total number of visits as listed on the prospect's History/Notes pop-up.

 Unit Type Count

 [Prospect.UnitTypeCount]

 Displays the number of preferred unit types as specified on the prospect's Preferences tile.

 Unit Type List

 [Prospect.UnitTypeList]

 Displays a list of preferred unit types as specified on the prospect's Preferences tile.

 Unit Type Name

 [Prospect.UnitTypeName]

 Displays the name of a preferred unit type as specified on the prospect's Preferences tile.

 Unit User Defined Field

 [Prospect.UnitUserDefinedField()]

 Displays the value or name associated with a unit-type user defined field as specified on the prospect's Unit User Defined Information tile.

 Unit User Defined Field Count

 [Prospect.UnitUserDefinedFieldCount]

 Displays the number of unit-type user defined fields specified on the prospect's Unit User Defined Information tile.

 Unit User Defined Field List

 [Prospect.UnitUserDefinedFieldList]

 Displays a list of unit-type user defined fields (separated by commas) specified on the prospect's Unit User Defined Information tile.

 User Defined Field

 [Prospect.UserDefinedField()]

 Displays the value defined for the specified user defined field as shown on the prospect's User Defined Fields pop-up. An example is shown below.

 [Prospect.UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.

 Width

 [Prospect.Width]

 Displays the width listed in the STR prospect's Preferences section. The output is formatted as displayed below:

 9
