# Primary Owner Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Primary-Owner.htm

This class examines primary owner data on a property account. The primary owner is specified on the property's details page. The class is preceded by the Property class or Financial Property class and can be followed by a primary owner-level scripting function or another class associated with the primary owner.

 Example

 [Property().PrimaryOwner.PaymentMethod]

 Result

 Displays the Payment Method of the primary owner on the owner's details page on the Miscellaneous tile.

 Example

 [Property().PrimaryOwner.PartnerCount]

 Result

 Displays the number of additional owners in the property's ownership.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [ Class(). PrimaryOwner.Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page for the primary owner.

 Contact

 [ Class(). PrimaryOwner.Contact(). Function ]

 This class retrieves contact information for the primary owner.

 Ownership

 [ Class(). PrimaryOwner.Ownership(). Function ]

 This class retrieves data about the Primary Owner listed on the Primary Owner summary card of the property.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Address Count

 [ Class(). PrimaryOwner.AddressCount]

 Displays the number of addresses entered on the details page for the primary owner.

 Balance

 [ Class(). PrimaryOwner.Balance()]

 Displays the primary owner's account balance as of a specified date.

 Bank Balance

 [ Class(). PrimaryOwner.BankBalance()]

 Displays the total balance of the primary owner's bank account(s) as displayed in the Balance field on the primary owner's scoreboard.

 Charges List

 [ Class(). PrimaryOwner.ChargesList()]

 Displays each charge linked to the selected primary owner within a specified date range.

 Comment

 [ Class(). PrimaryOwner.Comment]

 Displays the text entered in the Comment tile of the Owner details page for the primary owner.

 Contribution Account Name

 [ Class(). PrimaryOwner.ContributionAccountName]

 Displays the Contribution Account entered on the Owner details page for the primary owner.

 Contribution Account Number

 [ Class(). PrimaryOwner.ContributionAccountNumber]

 Displays the GL account number for the primary owner's contribution account.

 Display Name

 [ Class(). PrimaryOwner.DisplayName]

 Displays the Display Name entered on the primary owner's General tile.

 Draw Account Name

 [ Class(). PrimaryOwner.DrawAccountName]

 Displays the Draw Account entered on the Owner details page for the primary owner.

 Draw Account Number

 [ Class(). PrimaryOwner.DrawAccountNumber]

 Displays the GL account number for the primary owner's draw account.

 Last Pay Date

 [ Class(). PrimaryOwner.LastPayDate]

 Displays the date the primary owner was last paid as shown on the primary owner's Checks pop-up.

 Name

 [ Class(). PrimaryOwner.Name]

 Displays the Name as entered on the primary owner's General tile.

 Open Charges Amount

 [ Class(). PrimaryOwner.OpenChargesAmount()]

 Displays the total amount of open charges as listed on the primary owner's Management Company pop-up.

 Open Charges List

 [ Class(). PrimaryOwner.OpenChargesList()]

 Displays a list of each of open charge on the primary owner's Management Company pop-up.

 Owner ID

 [ Class(). PrimaryOwner.OwnerID]

 Displays the system-generated ID for the primary owner.

 Owner Last Payment Amount

 [ Class(). PrimaryOwner.OwnerLastPaymentAmount()]

 Displays the dollar amount the owner was last paid as shown on the primary owner's Checks pop-up.

 Partner Count

 [ Class(). PrimaryOwner.PartnerCount]

 Displays the number of unique partners the primary owner has across all their ownerships, as listed on each property's Owners pop-up.

 Partner List

 [ Class(). PrimaryOwner.PartnerList]

 Displays a list of names (separated by commas) for each unique partners the primary owner has across all their ownerships, as listed on each property's Owners pop-up. The output is formatted as displayed below:

 Emily Welsh, Clarkson Inc.

 Payment Method

 [ Class(). PrimaryOwner.PaymentMethod]

 Displays the Payment Method entered on the primary owner's Miscellaneous tile.

 Payments

 [ Class(). PrimaryOwner.Payments()]

 Displays a list of payments for the selected primary owner. The function creates a separate line for each payment that includes the charge type, name, and date the payment was posted to the primary owner's account.

 Portal User Name

 [ Class(). PrimaryOwner.PortalUserName]

 Displays the Username for the primary owner's Owner Web Access account.

 Security Deposit Charged

 [ Class(). PrimaryOwner.SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the primary owner's properties.

 Security Deposit Held

 [ Class(). PrimaryOwner.SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the primary owner's properties.

 Security Deposit Received

 [ Class(). PrimaryOwner.SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the primary owner's properties.

 Security Deposit Refunded

 [ Class(). PrimaryOwner.SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the primary owner's properties.

 Tax ID

 [ Class(). PrimaryOwner.TaxID]

 Displays the Tax ID as entered on the primary owner's General tile.

 Total Charged

 [ Class(). PrimaryOwner.TotalCharged()]

 Displays the total amount of charges posted to the primary owner's Management Company pop-up.

 Total Credits

 [ Class(). PrimaryOwner.TotalCredits()]

 Displays the total amount of credits posted to the primary owner's Management Company pop-up.

 Total Payments

 [ Class(). PrimaryOwner.Payments()]

 Displays the total amount of payments posted to the primary owner's Management Company pop-up.

 Total Reserve

 [ Class(). PrimaryOwner.TotalReserve()]

 Displays the total Reserve amount as entered on the primary owner's Ownerships pop-up.

 Transactions

 [ Class(). PrimaryOwner.Transactions()]

 Displays each transaction associated with the owner within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the primary owner displays, as shown below.

 User Defined Field

 [ Class(). PrimaryOwner.UserDefinedField()]

 Displays the value of the specified owner-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Property().PrimaryOwner.UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.
