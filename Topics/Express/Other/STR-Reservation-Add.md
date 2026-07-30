# Add a Short Term Rental (STR) Reservation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/STR-Reservation-Add.htm

Guests staying at properties with short term rentals are added to Rent Manager through a reservation-specific add wizard. Once guests are created using this wizard, their information is stored in prospect or tenant accounts in your database.

 Warning

 To access the STR tool, at least one of your properties in Rent Manager must have the Short Term Rental or RV/Campground property type assigned.

 Guests can be added into Rent Manager from the Tenants page and/or the Prospects page. This process creates a new guest account as a tenant or as a prospect depending on where the wizard is initiated. The process of creating a guest account differs from the Add Tenant wizard and  Add Prospect wizard because you can select properties with a property type of Short Term Rental or RV/Campground .

 More Information

 You can also set up a custom portal that allows tenants to book their reservations at properties with a RV/Campground property type online. For more information, refer to STR Online Booking (Pop-Up) .

 Step 1: Add Guest Information

 Related Privileges

 The following privileges are required depending on the action you wish to take:

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 Add, View

 Prospects
 Add, View

 In addition to this privilege, the user must have access to at least one property with either a Short Term Rental or RV/Campground property type assigned.

 For more information, refer to Control User Access .

 To add a reservation, follow the steps below:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants | Prospects
The Tenants or Prospects page displays.

 Related Preferences

 Depending on your selection in STR Reservations system preferences, the Add Guest button is available on the Tenants page and/or the Prospects page. For more information, refer to Short Term Rental (STR) Reservations (System Preferences) .

 -
 At the top, click Add Guest .
The Add Tenant Reservation or Add Prospect Reservation page displays.

 -
 In the Account section, enter basic information about the guest that is making a reservation.

 Field
 Description

 First Name

 The first name of the guest.

 Last Name

 The last name of the guest.

 Email

 The email address of the guest.

 Comment

 Any additional notes or information about the guest you wish to display on the account's details page. Check Show on Comment Banner to pin the comment in a banner at the top of the Tenant or Prospect details page.

 -
 In the Addresses section, enter the address(es) for the guest. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the address, such as contact labels.
Use View on Map to view the guest's address in a new tab on your browser or your default map application.

 -
 In the Phone Number section, enter the ten digit Phone number for the guest. Additionally, select the Type that best describes the phone number.

 Step 2: Add User Defined Fields (UDFs)

 The User Defined Fields section displays any user defined fields of the tenant or prospect type. These also display on the User Defined Fields tile on the tenant or prospect's account.

 Enter values for user defined fields to track additional information about your guest as appropriate. To view all tenant or prospect-type UDFs in the database, click View All UDFs .

 Step 3: Add Reservation Information

 After entering any applicable user defined fields, select the Reservation Info tab on the left. Then, in the Reservation Info section, enter the guest's reservation information into the available fields described below.

 Field
 Description

 Property

 The property where the guest wishes to stay.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The unit at the property which the guest is reserving. Alternatively, click to open the Unit Selector and select the unit the guest wishes to reserve.

 More Information

 If applicable, click to lock the reservation and charge the guest a lock fee. Locking guarantees that the guest receives the spot they reserved and apply to only properties with a Property Type of RV/Campground . This option displays only if the property's applicable rate schedule has the option Charge guest a lock fee to guarantee the selected site checked. For more information, refer to Add an STR Rate Schedule .

 Arrival

 The date the guest plans to arrive.

 Departure

 The date the guest plans to leave. Rent Manager automatically checks out the guest on the specified departure date.

 # of Nights

 The calculated number of nights between the Arrival date and the Departure date. If no Departure date is entered, this value displays 0 .

 # of Adults

 The number of adults associated with the reservation. By default, 1 displays.

 # of Children

 The number of children associated with the reservation.

 # of Pets

 The number of pets associated with the reservation.

 Comment

 Any additional information or requests the guest may have.

 Lead Source

 How or where the guest learned about your property or business. For more information, refer to Prospect Lead Sources (Page) .

 Source

 Where the guest account was created. When manually adding a guest account, Rent Manager always displays.

 Confirmation #

 The system generated number that is created once the guest account is saved.

 Step 4: Add RV/Vehicle Information

 After entering the reservation information, select the RV/Vehicle Info tab on the left. Then, in the RV/Vehicle Info section, enter information about the guest’s RV or vehicle into the available fields described below.

 To add a vehicle, click Add Item and enter the information into the available fields described below.

 Vehicle Fields
 Description

 Make

 The make of the guest's vehicle.

 Model

 The model of the guest's vehicle.

 Year

 The year the guest's vehicle was manufactured.

 License

 The license plate number of the guest's vehicle.

 On-Site

 Check to indicate which vehicle(s) the guest intends to park at the property. This column displays only when multiple vehicles are listed.

 Fields specific to RVs display only if the property associated with the reservation has a Property Type of RV/Campground . To add a RV, click Add Item and enter the information into the available fields described below.

 RV/Campground Fields
 Description

 Type

 The guest's RV type ( Fifth Wheel , Hybrid Trailer , Pop-Up Camper , and so on).

 Make

 The make of the guest's RV or vehicle.

 Model

 The model of the guest's RV or vehicle.

 Length

 The value to describe how long the guest's RV is.

 Width

 The value to describe how wide the guest's RV is.

 Year

 The year the guest's RV or vehicle was manufactured.

 License

 The license plate number of the guest's RV.

 Amps

 The amperage(s) of the electrical hookup that the guest's RV requires.

 Slide Outs

 The type(s) of slide outs on the guest's RV.

 # of Slide Outs

 The number of room extenders on the guest's RV.

 Step 5: Add Charges

 After entering the guest's RV or vehicle information, select the Charges tab on the left. In this section, you can establish your guest's recurring charges, and also apply any one-time charges to their account immediately upon creation.

 Enter any needed recurring charges or one-time charges or credits to the tenant account. For more information on adding charges, refer to the headings below.

 Recurring Charges

 If the reservation is for a long term rental, check Set Monthly Rental to enable recurring charges. Recurring charges are charge templates that can be posted regularly, such as daily kayak rental fees, pet fees, or other repeating charges for a flat amount. The Recurring Charges section displays only when adding a reservation for a tenant-type guest.

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Recurring Charge
 Add

 For more information, refer to Control User Access .

 To add a tenant-level flat recurring charge to the account, do the following:

 -
 In the Recurring Charges section, click Add Recurring Charge .
The Add Recurring Charges pop-up displays.

 -
 Enter or select the information for the recurring charge in the available fields described below.

 Option
 Description

 Unit

 The unit selected in the Reservation Info section automatically populates.

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge expenses the GL account linked to the charge type.

 Amount

 The dollar amount charged to the tenant for the selected charge type when this recurring charge is posted.

 Calculation

 instead of entering an Amount , you can enter a custom calculation that use scripts to calculate the amount for the tenant's charge. For more information, refer to Scripting .

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the selection in the Rent Period field in the tenant's Rental Info section.

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 -
 Click Save .
The recurring charge is added to the tenant. Repeat these steps for any additional recurring charges needed for the account.

 One-Time Charges

 One-time charges are single charges or credits you can add to the guest account. When creating a new reservation, they are useful for situations such as pet deposits, a one-time amenity fee, or a cleaning fee. Additionally, one-time charges already applied to units on the property's STR Rate Schedule also display here once the reservation's property and unit are selected.

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Add

 For more information, refer to Control User Access .

 To add a one-time charge to the new guest account, do the following:

 -
 In the One-Time Charges section, click Add Charge .
The Add Charge pop-up displays.

 -
 Enter or select the information for the one-time charge or credit in the available fields described below.

 Option
 Description

 Charge Type

 The charge type to use for this transaction. The posted charge expenses the GL account linked to the charge type

 Unit

 The unit selected in the Reservation Info section automatically populates.

 Date

 The date on which the transaction is applied to the guest account regardless of when the guest account is created.

 Amount

 The dollar amount charged to the guest for this transaction. To credit the guest, enter a negative amount.

 If charging the guest for a partial month, enter the full amount for the month and then click Prorate . Click the drop-down below to learn more. Once you have the Prorated Amount , click Save .

 More Information

 On the Prorate Transaction pop-up, the current charge information displays. In the Days Prorated field, enter how many days for which to prorate the transaction based on a thirty-day period. This is usually the day of the month on which the tenant's lease begins. If needed, you can edit the total amount to prorate in the Full Charge Amount field to adjust the calculation. The Prorated Amount field displays the calculated amount for the remaining days of a thirty-day month.

 For example, the tenant's lease begins on June fourteenth and their monthly rent is $1,200. In the Days Prorated field, enter 14 and in the Full Charge Amount field, enter 1200.00 . The Prorated Amount field displays 560.00 , which is the calculated amount for the remaining sixteen days.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 Reference #

 A number or name to further identify the transaction.

 -
 Click Save .
The one-time charge or credit is added to the tenant. Repeat these steps for any additional one-time transactions needed for the account.

 More Information

 If the reservation is for a property that offers member discounts, you can apply a discount to the reservation by clicking Apply Member Discount . In the Member Discount field, select the appropriate discount option. The discount is applied as a credit within the One Time Charges section. Alternatively, to apply a promotional discount to a guest reservation, click Apply Promotion . From the Promotion field, select the appropriate promotion option. For more information, refer to Short Term Rental (STR) Promotions (Page) or Property STR Settings (Pop-Up) .

 Step 6: Payment Policy Information

 In the Payment Policy section, the total amount due at the time of booking displays. On the Property STR Settings , if anything less than 100% due at booking is selected, the property's payment policy displays, followed by the amount that is currently due. Additionally, if there is a remaining balance, that amount displays on the next line followed by the date the remaining balance must be paid.

 When you are finished entering the guest and reservation information, click Save and New to complete the creation process and refresh the wizard to add another reservation. Alternatively, click Save and Finish to complete the creation process and close the wizard.

 On the Short Term Reservation pop-up, select one of the following options:

 Option
 Description

 Finish

 The reservation for the guest is created without collecting payment or checking them in at this time.

 Check In & Pay

 Collects the payment and checks in the guest at the same time the reservation is created.

 If the Arrival Date differs from today's check-in date, the Check In Warning pop-up displays. Select Yes to set the arrival date to today's check-in date. Otherwise, select No .

 The new guest account and the reservation is saved to your database. To view the new reservation, go to arrow_forward Rental Info arrow_forward Short Term Rentals arrow_forward STR Reservations .

 Step 7: Save the New STR Reservation

 When you are finished entering the guest and reservation information, click Save and New to complete the creation process and refresh the wizard to add another reservation. Alternatively, click Save and Finish to complete the creation process and close the wizard.

 On the Short Term Reservation pop-up, select one of the following options:

 Option
 Description

 Finish

 The reservation for the guest is created without collecting payment or checking them in at this time.

 Check In & Pay

 Collects the payment and checks in the guest at the same time the reservation is created.

 If the Arrival Date differs from today's check-in date, the Check In Warning pop-up displays. Select Yes to set the arrival date to today's check-in date. Otherwise, select No .

 The new guest account and the reservation is saved to your database. To view the new reservation, go to arrow_forward Rental Info arrow_forward Short Term Rentals arrow_forward STR Reservations .
