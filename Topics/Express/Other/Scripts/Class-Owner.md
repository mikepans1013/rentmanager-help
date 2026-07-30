# Owner Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Owner.htm

This class typically examines owner account information and can be followed by either an owner-level scripting function or another class associated with the owner.

 Example

 [Owner().BankBalance()]

 Result

 Displays the total balance of the owner's bank account(s) as shown in the Balance field on the owner's scoreboard.

 Example

 [Owner().Address().FullAddress]

 Result

 Displays the full address of the owner's default address.

 Example

 [Owner().Contact().PhoneNumber().FullNumber]

 Result

 Displays the full number and extension of the owner's default phone number.

 Class Parameters

 This class can specify a single, optional parameter: an ID.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the account's creation date. This number does not display on any page but may be used within scripting. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Owner().OwnerID] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 [Owner(402).DisplayName]

 Displays the Display Name of the owner with the system-generated ID of 402.

 Index

 An index allows you to return information about a specific owner by using a number to identify each owner listed. For example, if there are three owners listed, they are referenced by indexes 0, 1, and 2. You can specify which owner you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first owner added to the property.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Owner().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page.

 Contact

 [Owner().Contact(). Function ]

 This class retrieves contact information for the owner.

 Owner Prospect

 [Owner().OwnerProspect(). Function ]

 This class retrieves data about an owner who was converted from an owner prospect.

 Ownership

 [Owner().Ownership(). Function ]

 This class retrieves data from the Ownership pop-up of the owner account.

 Partner

 [Owner().Partner(). Function ]

 This class retrieves data about an owner who is a partner of the specified owner.

 Phone Number

 [Owner().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the owner.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Address Count

 [Owner().AddressCount]

 Displays the number of addresses entered on the owner's details page.

 Balance

 [Owner().Balance()]

 Displays the owner's account balance as of a specified date.

 Bank Balance

 [Owner().BankBalance()]

 Displays the total balance of the owner's bank account(s) as displayed in the Balance field on the owner's scoreboard.

 Charges List

 [Owner().ChargesList()]

 Displays each charge linked to the selected owner within a specified date range.

 Comment

 [Owner().Comment]

 Displays the text entered in the Comment tile of the Owner details page.

 Contribution Account Name

 [Owner().ContributionAccountName]

 Displays the Contribution Account entered on the Owner details page.

 Contribution Account Number

 [Owner().ContributionAccountNumber]

 Displays the GL account number for the owner's contribution account.

 Display Name

 [Owner().DisplayName]

 Displays the Display Name entered on the owner's General tile.

 Draw Account Name

 [Owner().DrawAccountName]

 Displays the Draw Account entered on the Owner details page.

 Draw Account Number

 [Owner().DrawAccountNumber]

 Displays the GL account number for the owner's draw account.

 History Count

 [Owner().HistoryCount()]

 Displays the total number of history/notes on the owner's History/Notes pop-up.

 Last Pay Date

 [Owner().LastPayDate]

 Displays the date the owner was last paid as shown on the owner's Checks pop-up.

 Name

 [Owner().Name]

 Displays the Name as entered on the owner General tile.

 Note

 [Owner().Note()]

 Displays information about the most recent note on the owner's History/Notes tile.

 Open Charges Amount

 [Owner().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the owner's Management Company pop-up.

 Open Charges List

 [Owner().OpenChargesList()]

 Displays a list of each of open charge on the owner's Management Company pop-up.

 Owner ID

 [Owner().OwnerID]

 Displays the system-generated ID for the owner.

 Owner Last Payment Amount

 [Owner().OwnerLastPaymentAmount()]

 Displays the dollar amount the owner was last paid as shown on the owner's Checks pop-up.

 Ownership Count

 [Owner().OwnershipCount]

 Displays the total number of properties owned by the owner.

 Ownership List

 [Owner().OwnershipList]

 Displays a list of short name(s) (separated by commas) for each of the owner's properties.

 Partner Count

 [Owner().PartnerCount]

 Displays the number of unique partners the owner has across all their ownerships, as listed on each property's Owners pop-up.

 Partner List

 [Owner().PartnerList]

 Displays a list of names (separated by commas) for each unique partners the owner has across all their ownerships, as listed on each property's Owners pop-up. The output is formatted as displayed below:

 Emily Welsh, Clarkson Inc.

 Payment Method

 [Owner().PaymentMethod]

 Displays the Payment Method entered on the owner's Miscellaneous tile.

 Payments

 [Owner().Payments()]

 Displays a list of payments for the selected owner. The function creates a separate line for each payment that includes the charge type, name, and date the payment was posted to the owner's account.

 Portal User Name

 [Owner().PortalUserName]

 Displays the Username for the owner's Owner Web Access account.

 Security Deposit Charged

 [Owner().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the owner's properties.

 Security Deposit Held

 [Owner().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the owner's properties.

 Security Deposit Received

 [Owner().SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the owner's properties.

 Security Deposit Refunded

 [Owner().SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the owner's properties.

 Set History Filter

 [Owner().SetHistoryFilter()]

 This function is designed to filter the total collection of owner history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Tax ID

 [Owner().TaxID]

 Displays the Tax ID as entered on the owner's General tile.

 Total Charged

 [Owner().TotalCharged()]

 Displays the total amount of charges posted to the owner's Management Company pop-up.

 Total Credits

 [Owner().TotalCredits()]

 Displays the total amount of credits posted to the owner's Management Company pop-up.

 Total Payments

 [Owner().Payments()]

 Displays the total amount of payments posted to the owner's Management Company pop-up.

 Total Reserve

 [Owner().TotalReserve()]

 Displays the total Reserve amount as entered on the owner's Ownerships pop-up.

 Transactions

 [Owner().Transactions()]

 Displays each transaction associated with the owner within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current owner displays, as shown below.

 User Defined Field

 [Owner().UserDefinedField()]

 Displays the value of the owner-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Owner().UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.
