# Reservation Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Reservation.htm

This class examines information related short-term rental (STR) reservations for guests recorded as tenants or prospects. You can view this information by going to the tenant or prospect's details page and on the Reservations tile, click and select a reservation to open the Reservation Details page.

 This class can be preceded by the Tenant class or Prospect class.

 Example

 [Tenant().Reservation().ReservationProperty]

 Result

 Displays the name of the Property at which the guest's reservation is located on the prospect's Reservation Details page.

 Example

 [Prospect().Reservation().ArrivalDate]

 Result

 Displays the Arrival date listed on the prospect's reservation located on the prospect's Reservation Details page.

 Class Parameters

 A single, optional parameter can be specified for this class: an index.

 Index

 An index allows you to return information about a specific reservation on an account by using a number to identify each reservation listed. For example, if there are three reservations listed on a guest’s account, they are referenced by indexes 0, 1, and 2. You can specify which reservation you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first reservation in the list.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: Reservation.(ReservationCount - 1) . This allows you to return data for the most recent reservation created for the tenant.

 [Tenant().Reservation(ReservationCount - 2).ArrivalDate]

 Displays the arrival date of the second reservation listed for the tenant.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Adults

 [ Class(). Reservation(ReservationCount - 1).Adults]

 Displays the # of Adults listed on the most recent reservation.

 Arrival Date

 [ Class(). Reservation(ReservationCount - 1).ArrivalDate]

 Displays the Arrival date listed on the most recent reservation entered.

 Balance

 [ Class(). Reservation(ReservationCount - 1).Balance]

 Displays the total of any remaining open charges for the most recent reservation.

 Balance Due Date

 [ Class(). Reservation(ReservationCount - 1).BalanceDueDate]

 Displays the date the remaining balance is due for the most recent reservation.

 Booking Date

 [ Class(). Reservation(ReservationCount - 1).BookingDate]

 Displays the date of the most recently created reservation in Rent Manager . If the reservation was made online, the script displays when the reservation was booked from the STR Online Booking portal.

 Charges List

 [ Class(). Reservation(ReservationCount - 1).ChargeList()]

 Displays a list of charges for the most recently made reservation, as listed on the View Transactions page for the reservation.

 More Information

 This function is the same as other ChargesList functions, but when used with the Reservation class, the syntax in the script is written as singular ChargeList.

 Checked In

 [ Class() .Reservation(ReservationCount - 1).CheckedIn]

 Displays the guest check in status of the most recently entered reservation. This function outputs Yes if the guest has a check in date and time or No in all other cases.

 Checked In Date

 [ Class(). Reservation(ReservationCount - 1).CheckedInDate]

 Displays the date and time when Save was clicked upon completing the Check In Registration wizard on the most recent reservation. The output is formatted as displayed below:

 7/21/2026 11:48:26 AM

 Children

 [ Class(). Reservation(ReservationCount - 1).Children]

 Displays the # of Children listed on the most recent reservation.

 Comment

 [ Class(). Reservation(ReservationCount - 1).Comment]

 Displays the Request listed on the most recent reservation.

 Confirmation Number

 [ Class(). Reservation(ReservationCount - 1).ConfirmationNumber]

 Displays the Confirmation # number listed on the most recent reservation.

 Departure Date

 [ Class(). Reservation(ReservationCount - 1).DepartureDate]

 Displays the Departure date listed on the most recent reservation.

 Due At Booking

 [ Class(). Reservation(ReservationCount - 1).DueAtBooking]

 Displays the amount due at time of booking for the tenant or prospect's reservation that occurs last. You can view this information on the tenant or prospect's details page in the Reservations tile by selecting a reservation arrow_forward Transactions tab arrow_forward Payment Policy tile.

 Lead Source

 [ Class(). Reservation(ReservationCount - 1).LeadSource]

 Displays the Lead Source for the most recent reservation entered.

 Long Term Rental

 [ Class(). Reservation(ReservationCount - 1).LongTermRental]

 Displays Yes if Long Term Rental is checked on the most recent reservation and No if not.

 Nights

 [ Class(). Reservation(ReservationCount - 1).Nights]

 Displays the # of Nights based on the difference between on the Arrival date and Departure listed on the most recent reservation.

 Payments

 [ Class(). Reservation(ReservationCount - 1).Payments]

 Displays a list of payments made for the most recent reservation. The function creates a separate line for each payment that includes the date and amount of each transaction.

 Pets

 [ Class(). Reservation(ReservationCount - 1).Pets]

 Displays the # of Pets listed on the most recent reservation

 Reservation Count

 [ Class(). ReservationCount()]

 Displays the number of recent reservations on the guest's account.

 Reservation Property

 [ Class(). Reservation(ReservationCount - 1).ReservationProperty]

 Displays the name of the Property listed on the most recent reservation.

 Reservation Unit Name

 [ Class(). Reservation(ReservationCount - 1).ReservationUnitName]

 Displays the name of the Unit listed on the most recent reservation.

 Short Term Reservation ID

 [ Class(). Reservation(ReservationCount - 1).ShortTermReservationID]

 Displays the internally generated reservation ID of the most recent reservation.

 Source

 [ Class(). Reservation(ReservationCount - 1).Source]

 Displays the source from which the most recent reservation was made. Reservations can be made from Rent Manager or the STR Online Booking Portal.

 Total Charged

 [ Class(). Reservation(ReservationCount - 1).TotalCharged]

 Displays the total amount of charges, including taxes and fees, due for the most recent reservation.

 Transactions

 [ Class(). Reservation(ReservationCount - 1).Transactions]

 Displays a list of charges, credits, and payments for the most recent reservation. A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current owner displays, as shown below.
