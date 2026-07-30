# Add an STR Rate Schedule

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/STR-Rates-Add.htm

Short term rental (STR) rate schedules allow you to establish rates used to charge for reservations with differentiations for weekdays, weekends, holidays, and seasons, providing you with an easy way to calculate STR rates. Within a rate schedule, you can set up rates that apply for a specified period of time. For example, if you use one rate schedule for your peak season, you can create individual rates for each month of the season so you can charge different rates and fees throughout the season, depending on your property's needs.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 Manage STR Rate Schedules
 Enabled

 For more information, refer to Control User Access .

 Warning

 To access the STR Online Booking tool, at least one of your properties in Rent Manager must have the RV/Campground property type assigned.

 Step 1: Create or Edit a Rate Schedule

 To create or edit a rate schedule, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Properties and select an RV/Campground -type property from the list.
The Properties page displays.

 -
 On the STR Rate Schedules tile header, click .
The Rate Schedule pop-up displays.

 -
 To edit an existing rate schedule, select that schedule from the list. To create a new schedule, click Add Rate Schedule .
The STR Rates details pop-up or the Add Rate Schedule pop-up displays.

 -
 If you are adding a new rate schedule, enter information into the available fields and click Save . If you are editing an existing rate schedule, select the rate on the left and you can edit these fields in the Schedule Information tile.

 Field
 Description

 End/End Date

 The last date on which the rates in this schedule apply.

 Name/Rate Schedule Name

 The name of the overall rate schedule that contains the individual rate and fee calculations. For example, if the rate schedule is only being run during the summer of 2026 , the rate schedule name could be Summer 2026 Special .

 Start/Start Date

 The first date on which the rates in this schedule apply.

 Step 2: Add a Rate

 You can assign rates by unit type using the properties established site groups. Site groups organize STR units or unit types into categories, allowing you to establish separate rates for each site group as needed.

 To add a rate to your rate schedule, do the following:

 -
 On the left, click Add Rate .
The Add New Rate pop-up displays.

 -
 Enter information into the available fields.

 Field
 Description

 Charge Type

 The charge type used for the base rent charge for the reservations that meet this rate's conditions.

 Rate Name

 The unique name of the rate. For example, if the rate is only applicable to campsites and not RV spots, you could name the rate Campsites .

 Units Included

 The types of units that this rate applies to, as defined by the property's site groups. Only one rate can be created per site group. For more information, refer to Add a Site Group .

 -
 Click Save .
The pop-up closes and the rate's details can now be set for the schedule.

 -
 In the Rate Information section, select one of the following options:

 Option
 Description

 Different rates per night

 If you want to use a different rate for each night, such as higher rates on the weekend or lower rates on Mondays and Tuesdays, select this option and enter a price for each night of the week.

 Nightly Rate

 The base nightly price to reserve the unit.

 Step 3: Establish Dynamic Rate Information

 When adding rates to your rate schedules, you have the option to set dynamic pricing that adjusts rates in real-time based on market conditions. This allows you to more precisely manage your reservation revenue, such as decreasing prices if you have a large percentage of unreserved sites or offering lower prices for guests who book well in advance. If you do not wish to use dynamic rates, skip to Step 4: Add Special and Extended Rates .

 To add a dynamic rate, do the following:

 -
 In the Rate Information section, check Enable Dynamic Rates .
The Add Dynamic Rate pop-up displays.

 -
 At the top of the pop-up, add information into the available fields:

 Field
 Description

 Active

 Check to enable this dynamic rate so it is applied to reservations when the established conditions are met.

 Apply rate for guests staying on the following days

 The dynamic rate is applied only to the selected days of the week during the guest's stay. For example, if only Saturday and Sunday are applied and the guest is staying for a full week, this rate is applied only to two of the days that are examined to calculate the total price of their reservation.

 Apply rate to reservations made x to y days prior to booking

 The dynamic rate is applied only to reservations that are made during a specified period of time prior to the first day of the reservation. This can be useful for granting discounted rates to guests who book their stay well in advance.

 In the available fields, enter the range of time when this rate applies. For example, if you enter 30 in the first field and 365 in the second, then the dynamic rate applies only to reservations made at least 30 days, but no more than a year, in advance.

 Name

 A unique name to identify this dynamic rate for the selected rate schedule.

 -
 In the Rate Change section, you can determine how the price changes for this rate schedule depending on how many sites are reserved during the reservation dates.
You can set the rate to either Increase or Decrease by a specified dollar amount. Alternatively, check Percent to change the price by a percentage instead of a specified dollar amount, then enter the percent value.

 For example, to charge ten percent less for weekday stays, you can select Decrease , then check Percent and enter 10 in the adjacent field.

 Then determine if this rate applies only when the property has a specified percentage of its units reserved during the guest's scheduled stay. If this rate change should apply regardless of how many reservations the property has, set the fields to 0 and 100 %. If this rate change applies only if at least half of the property's units are reserved during the guest's scheduled stay, enter 0 and 50 %.

 -
 To add any additional conditions to the dynamic rate, click Add Rate Change . For example, you could set a rate change that decreases the price of reservations when less than 50% of sites are reserved and then set a second rage change that increases the price if less than 20% of sites are available. Any reservations that are made between that set occupancy follow the standard rate pricing established in the Rate Information section.

 -
 After all rate changes are added, click OK .
The pop-up closes and the dynamic rate is added in the Dynamic Rates section.

 -
 To add any additional dynamic rates, click Add Another Dynamic Rate .

 Step 4: Add Special and Extended Rates

 For each rate, you can add conditions for extended stays and other special pricing exceptions, such as holiday rates. To add these rate conditions, do the following:

 -
 In the Extended Stay Rates section's Rate column, enter the price to charge for longer reservations that meet the listed durations. The options that display in the Length of Stay column are determined by the property's STR settings. For more information, refer to Property STR Settings (Pop-Up) .

 -
 In the Special Rates section, click Add Item to add any special pricing conditions.
The Add Special Rate pop-up displays.

 -
 Enter information into the available fields.

 Field
 Description

 Description

 A name for the special rate that provides context for its purpose.

 End Date

 The last date on which the special rate applies.

 Minimum nights required to receive rate

 This rate is applied only to reservations if they meet or exceed the entered value. For example, if you enter 3 , this rate does is not applied to reservations that are only 2 nights long, and instead the reservation uses the base rate.

 Nightly Rate

 The special price charged to the guest per each night of their reservation.

 Start Date

 The first date on which the special rate applies.

 -
 To save this special rate and refresh the pop-up to add another, click Add & New . Otherwise, click Add & Close to save the special rate and close the pop-up.
The special rate is added to the section.

 More Information

 To make changes to a special rate, click arrow_forward Delete to delete the rate, then add the rate again with your changes.

 Step 5: Add Additional Fees

 The Fees section displays the additional fees that are added to the total cost the guest pays. These fees can be set to charge nightly for vehicles, guests, pets, to guarantee a selected site, or any other additional fees you need to charge.

 Nightly Guest Fees

 To add a fee for additional guests on a nightly basis, do the following:

 -
 In the Nightly Guest Fees section, select one of the following options:

 Option
 Description

 Individual

 Charges a fee for each adult or child over a set number of guests. For example, if your rate is priced for 2 adults and you want to charge an additional $20 for each additional adult guest on the reservation, check the first box and enter 20 and 2 in the respective boxes ( 20 dollars for each adult over 2 adults ).

 None

 Don't charge a fee for additional guests.

 Total Guests

 Charges a fee for any additional guests over a set number of guests total, regardless of age. For example, if your rate is priced for 3 guests regardless of age and you want to charge an additional $15 for every additional guest on the reservation, enter 15 and 3 in the respective boxes ( 15 dollars for each guest over 3 guests ).

 -
 In the Applies To field, select each length of stay that is applicable to receive these nightly guest fees.

 -
 To separate this fee from the base price of the reservation on the guest's receipt, check Show as separate charge . Then in the Charge Type field, select the charge type to assign to the fee transaction. The charges display as separate line items on statements and financial reports.

 Nightly Pet Fees

 To add a fee for pets on a nightly basis, do the following:

 -
 Check the box to enable the pet fees, then enter the amount to charge for each pet or additional pet. For example, if your rate does not cover pets and you want to charge an additional $10 for every pet on the reservation, enter 10 and 0 in the respective boxes ( 10 dollars for each pet over 0 pets ).

 -
 In the Applies To field, select each length of stay that is applicable to receive these nightly pet fees.

 -
 To separate this fee from the base price of the reservation on the guest's receipt, check Show as separate charge . Then in the Charge Type field, select the charge type to assign to the fee transaction. The charges display as separate line items on statements and financial reports.

 Nightly Vehicle Fees

 To add a fee for vehicles on a nightly basis, do the following:

 -
 Check the box to enable the vehicle fees, then enter the amount to charge for each vehicle or additional vehicle. For example, if your rate covers only one vehicle and you want to charge an additional $25 for every additional vehicle on the reservation, enter 25 and 1 in the respective boxes ( 25 dollars for each vehicle over 1 vehicles ).

 -
 In the Applies To field, select each length of stay that is applicable to receive these nightly vehicle fees.

 -
 To separate this fee from the base price of the reservation on the guest's receipt, check Show as separate charge . Then in the Charge Type field, select the charge type to assign to the fee transaction. The charges display as separate line items on statements and financial reports.

 Lock Fee

 Lock fees offer guests a chance to pay an additional fee to guarantee that they receive the site they selected for their reservation. To enable a lock fee, check Charge guest a lock fee to guarantee the selected site , then enter information into the available fields:

 Field
 Description

 Charge Type

 The charge type used for the lock fee charge.

 Lock Fee

 The total dollar amount charged to the guest to lock the reservation.

 Taxable

 If checked, the guest also pays tax in addition to the flat dollar amount in the Lock Fee field.

 Additional Fees

 This section allows you to add fees that are not accounted for in the previous sections, such as cleaning fees or amenity fees. These fees are automatically itemized separately from the base rate on the guest's receipt and on statements and reports.

 To add additional fees, do the following:

 -
 Click Add Item .
The Add Additional Fee pop-up displays.

 -
 In the Fee Info tile, enter information in the available fields.

 Field
 Description

 Charge Type

 The charge type to assign to the fee transaction.

 Comment

 Additional information about the purpose of the fee, such as Cleaning Fees .

 -
 In the Fee Amount tile, select one of the available options. If the guest should also pay tax on this fee, check Taxable .

 Option
 Description

 Flat Fee

 Charge a single flat amount for each reservation. Enter that amount in the available field, then select if this fee is applied Per Stay (once for the whole reservation) or Per Night (the charge is calculated for each night reserved).

 Percentage

 Charge a percentage of the base price of the guest's stay for every reservation. Enter the percent value in the available field, then select if this fee is applied Per Stay (a percentage of the total price) or Per Night (a percentage of each individual night's price).

 -
 Click Save .
The fee is added to the rate.

 -
 Add any additional fees as needed.

 Step 6: Save the Rate Schedule

 After you have set up all the prices and fees for your rate, click Save . You can now add additional rates as needed for any other site groups by clicking Add Rate on the left until all rates have been added to your rate schedule.

 More Information

 To test how reservations are priced using your rate schedule, click Test Rate . For more information, refer to Test a Short Term Rental (STR) Rate .
