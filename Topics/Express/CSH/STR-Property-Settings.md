# Property STR Settings (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/STR-Property-Settings.htm

To use short term rental (STR) rate schedules, you first need to enable the property-specific settings that are applied to all rate schedules created for the property. These settings allow you to create site groups to organize units that use similar rate schedules together, and enable the types of length of stay that are applicable to the property. Discounts that can be used during booking, and the tax types for various fees are also enabled through the property's STR settings.

 Once you have the applicable STR settings saved, the STR rate schedule options are available on the property.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 Manage STR Rate Schedules
 Enabled

 In addition to these privileges, you must have access to at least one property with a RV/Campground property type assigned.

 For more information, refer to Control User Access .

 Warning

 To access the STR Online Booking tool, at least one of your properties in Rent Manager must have the RV/Campground property type assigned.

 To access STR settings, go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property with a Property Type of RV/Campground . On the action bar to the right, click arrow_forward STR Settings .

 The Property STR Setting pop-up consists of different tabs, each containing options to be applied to any STR rate schedules used on the property. When finished, click Save Settings to apply the STR settings for the property. Each tab is described below.

 General

 This tab allows you to create site groups, select a payment policy, and set an age restriction for RVs.

 Site Groups

 Site groups are a way to group units that use the same rates together. When you add new STR rates, you have the option to select previously created site groups as opposed to selecting each unit individually.

 The following columns are available in this section:

 Column
 Description

 Group Name

 The name entered when the site group was created.

 No. of Units

 The total number of units in the site group.

 Payment Policy

 STR payment policies allow users to establish sets of rules for how guests can pay for their reservations through the STR Online Booking portal. For example, some of your STR properties may require the guest to pay the full amount at the time they book the reservation, while other STR properties only require a partial payment during booking and allow the guest to pay the rest at a later date.

 Restricted RVs

 If Restrict RVs manufactured more than _ years ago is enabled, RV access to your STR Online Booking portal is restricted based on the number of years past its manufactured year. The Message to display on the STR Online Booking portal when RV exceeds age field is displayed for guests that enter information for a RV that exceeds the number of years you have set.

 Rate Settings

 This tab allows you set preferences on how to calculate rates for reservations that have an overlapping length of stay.

 The options below define how you want to apply rates to reservations that overlap in the length of stay. For example, a reservation for ten days has three days that overlap into the next week.

 Option
 Description

 Cascade the partial remaining periods

 Applies the weekly rate for the first seven days and applies the nightly rate for the remaining days in the reservation.

 To cascade the partial remaining periods on weekly rates, Rent Manager uses the following calculation.

 Reservation Fee = Weekly Rate + [Nightly Rate * (Total Reserved Days - 7 Days)]

 Prorate the partial remaining periods

 Applies the weekly rate for the first seven days and applies a prorated weekly rate for the remaining days in the reservation.

 To prorate the partial remaining periods on weekly rates, Rent Manager uses the following calculation.

 Reservation Fee = Weekly Rate + [(Weekly Rate / 7 Days) * (Total Reserved Days - 7 Days)]

 Lengths of Stay

 This tab allows you to check the various length of stay you want to apply rates to. For example, you may have a rate specific to weekly reservations and a rate specific to monthly reservations at a property. Both options need to be selected on the property so you can create STR rates specific to each length of stay. The options selected here are the only lengths of stay to display when you are adding STR rate schedules, so make sure to select all time frames that apply to the property.

 The following options are available on this tab.

 Option
 Description

 Nightly

 Nightly rates apply to this property. This option cannot be unchecked as each property must at least have a nightly rate.

 Weekly

 Weekly rates apply to this property. This option is checked by default.

 Monthly

 Monthly rates apply to this property. This option is checked by default.

 2 Months

 This property has rates for reservations extending to two months.

 3 Months

 This property has rates for reservations extending to three months.

 4 Months

 This property has rates for reservations extending to four months.

 5 Months

 This property has rates for reservations extending to five months.

 6 Months

 This property has rates for reservations extending to six months.

 Taxes & Member Discounts

 This tab allows you to enable specific tax types and determine which lengths of stay for the property they apply to. In addition, you can create any applicable discounts and choose which of those discounts to display on the STR Online Booking Portal.

 Taxes Section Descriptions

 When creating a rate schedule, the tax types can be selected to apply to taxable fees within the rate. To enable additional tax types, click to add a new line, then select the Tax Name and any length of stay to whom the tax type applies.

 The following columns are available when you enable tax types.

 Column
 Description

 Tax Name

 The tax types added to your database display for you to select from. The tax type you select applies to each Length of Stay selected in the row below. For more information, refer to Tax Types (Page) .

 Lengths of Stay

 The options selected on the Lengths of Stay tab apply to the Tax Type .

 Member Discounts Section Description

 If applicable, you can create member discounts, either as a flat fee or a percentage, to be available when booking reservations. To add a new discount, click .

 The following columns are available in this section.

 Column
 Description

 Name

 The name of the discount as entered upon creation.

 Amount

 The total value, monetary or percentage, of the discount.

 Type

 The type of stay, Per Stay or Per Night , that the discount applies to.

 Show on Portal

 When the Allow guest to select discount from the STR Online Booking portal field is unchecked on the discount, No displays. Otherwise, Yes displays in this column.
