# STR Online Booking (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/STR-Online-Booking.htm

The STR Online Booking pop-up allows you to customize your Short Term Rental (STR) Online Booking portal for your STR properties. This includes the appearance of the site, what information it requests from guests, and any policies or confirmation messages your guests view.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Manage STR Rate Schedules
 Enabled

 In addition to these privileges, you must have access to at least one property with a RV/Campground property type assigned.

 For more information, refer to Control User Access .

 Warning

 To access the STR Online Booking tool, at least one of your properties in Rent Manager must have the RV/Campground property type assigned.

 To manage the Online Booking portal for an STR property, go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property with a Property Type of RV/Campground . Then on the action bar to the right, click arrow_forward Marketing Setup and then STR Online Booking .

 Related Preferences

 This page is available only if both of the following settings are enabled in system web preferences:

 -
 The database location for STR Online Booking in the Licensing section. For more information, refer to Licensing (System Web Preferences) .

 -
 The property in the STR Online Booking section. For more information, refer to RV/Campground Online Booking General (System Web Preferences) .

 The STR Online Booking pop-up consists of three tabs, each containing different options that can be applied to any STR rate schedules used on the property. When finished making your desired changes, click Save to apply the STR Online Booking settings for the property.

 General Tab

 This tab allows you to manage the settings for your STR Online Booking portal. These settings determine the appearance of the Online Booking portal, as well as the information guests are required to enter. This is helpful if you decide the site should not follow the requirements that were set in system web preferences.

 The following fields are available on this tab:

 Field
 Description

 Background Image

 The image that displays in the background of your Online Booking portal. To edit this image, click and select an image file from your computer or network.

 Site Header Color

 The color to use in the header of your Online Booking portal. To change the color, click the current color in the field.

 Each section on this tab is described below.

 Available Sites

 If Ask the guest to indicate number of children is checked, guests are required to provide information about how many children are included in the reservation during booking.

 Map View

 If Show Interactive Map View is checked, the Online Booking portal includes an interactive map created via bird's eye view (BEV) in Rent Manager 12 . In the Select Birds Eye View Map field, choose which BEV map to display on the portal. Only BEV maps linked to the property are available to select.

 Override System Web Preferences

 If checked, any settings established here apply to only this property and override the settings in system web preferences. If unchecked, these fields cannot be edited. For more information, refer to RV/Campground Online Booking Guest Info (System Web Preferences) .

 The following fields are available in this section:

 Field
 Description

 Other Vehicle Info

 Allows you to select what information guests are required to provide regarding their vehicle when booking a reservation via the Online Booking portal.

 Require Make and Model

 Requires guests to provide the make and model of their vehicle (e.g., Chevrolet Traverse ).

 Require license plate #

 Requires guests to provide the registered number (or alphanumeric string) on the vehicle's license plate.

 Require year

 Requires guests to provide the model year of the vehicle.

 Allow guest to enter additional vehicles

 If a guest has more than one vehicle arriving for the reservation, they can enter information for more than one vehicle.

 Lead Source

 If Allow the guest to select how they heard about your campground by enabling the lead sources below is checked, guests can select any of the sources checked in the Lead Source drop-down. This provides data that can be included when running reports to track lead source performance.

 Settings Tab

 If Override System Web Preferences is checked, any settings established here apply to only this property and override the settings in system web preferences. If unchecked, these fields cannot be edited. For more information, refer to STR Online Booking RV/Campground Settings (System Web Preferences) .

 This tab controls the property's reservation limits and the custom message that displays when a booking is successfully created. Each section on this tab is described below.

 Settings

 The following fields are available in this section:

 Field
 Description

 Type of account created when booking a reservation

 Determines whether guests who make reservations via the STR Online Booking portal are added to Rent Manager as a Tenant account or Prospect account.

 Related Preferences

 This setting applies only to the STR Online Booking portal and does not affect the selection in the Guest Account section of Short Term Rental Reservations in system preferences for booking reservations directly in Rent Manager .

 Number of days in the future a guest may book a reservation

 This determines how far in the future, based on when the reservation is submitted, that guests are allowed to make reservations via the STR Online Booking portal.

 More Information

 Reservations can be set for any date, so long as the Arrival and  Departure dates fall on or under the set number of days or date. For example, if you set the last available Date to 6/30/ 2026 and a guest attempts to select a date range of 6/29/ 2026 – 7/1/ 2026 on the STR Online Booking portal, they are not permitted to schedule the reservation because it goes past the date you entered.

 The options below determine how to calculate this time period.

 Days

 The maximum number of days in the future for which a guest can make a reservation. For example, enter 30 to allow guests to make a reservation up to thirty days in the future from the current date.

 Date

 The last available Date for which a guest can make a reservation. For example, if you enter 12/10/ 2026 , reservations can be made only on or before December 10, 2026 .

 Number of days in advance required to book a reservation

 The minimum amount of notice, in days, that must be provided on all new reservations scheduled via the STR Online Booking portal. This ensures you have enough time to prepare for any new reservations. The options below determine how to calculate this time period.

 Days

 How many days from the current date for which a reservation Arrival date may be scheduled. For example, if you enter 3 days , reservations submitted on 5/1/ 2026 can be made only on 5/4/ 2026 or after

 Allow same day bookings

 Allow guests to set a reservation as soon as they want, including for today's date.

 Stay Options

 The following fields are available in this section:

 Field
 Description

 Allow guest to submit an application for reservations that exceed the maximum nights allowed

 If checked, allows guests the option to submit an application for an extended stay at an available unit when their length of stay is longer than the Maximum nights allowed for a reservation . This creates a prospect account for the guest in Rent Manager and allows them to proceed with the normal Apply Now procedure.

 Related Preferences

 To allow guests to use the Apply Now feature for units on the STR Online Bookings portal, the following system web preferences must be set:

 - The option Enable Apply Now must be checked. For more information, refer to Tenant Web Access Apply Now General (System Web Preferences) .

 - The units must be included in the Units/Unit Types to Include section. For more information, refer to Tenant Web Access Apply Now Included Units (System Web Preferences) .

 Maximum nights allowed for a reservation

 If checked, limits the number of consecutive days which can be scheduled for a single reservation via the STR Online Booking portal. For example, if you enter 10 , then guests cannot book a reservation that exceeds a ten day duration. If unchecked, guests can book a reservation for any duration.

 In the Message to display if reservation exceeds maximum nights allowed text box, enter the message to display for guests who attempt to book a reservation that exceeds the set limit.

 Minimum nights required for a reservation

 If checked, this option to require a minimum number of days to book a reservation via the STR Online Booking portal. For example, if you enter 2 , then guests cannot book a reservation that is for only one day.

 In the Message to display if reservation does not meet minimum stay requirement text box, enter the message to display for guests who attempt to book a reservation that does not meet the set minimum.

 Booking Success Message

 The message to display when guests complete the booking process for their reservation via the STR Online Booking portal. The guest's reservation confirmation number displays above this message in the portal when a booking is finalized.

 Policies Tab

 This tab allows you to set the policies, terms, and conditions that your guests need to view and agree to before finalizing their booking. Each section on this tab is described below.

 Policy Names

 The first section shows a list of all policies available for guests to view on the STR Online Booking portal. These policies display as hyperlinks in the portal when booking a reservation. To add a new policy, click in the section header.

 Terms and Conditions

 In the Terms and Conditions section, the text box displays the current terms and conditions that guests must read and agree to before finalizing their booking. You are allowed to enter up to 1000 characters in this section. Terms and conditions are established per property which enables to you set unique terms for each of your sites.
