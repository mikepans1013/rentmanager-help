# Partner Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Partner.htm

This class examines partner account information located on the owner Ownership page. It is preceded by the Owner class and can be followed by a partner-level scripting function or an other class associated with the partner.

 Example

 [Owner().Partner().SecurityDepositHeld()]

 Result

 Displays the total amount of all security deposits currently held for all tenants across all the properties of the partner who shares ownership with the selected owner.

 Class Parameter

 This class can specify a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific partner on an owner account by using a number to identify each partner listed. For example, if there are three partners listed on a owner’s account, they are referenced by indexes 0, 1, and 2. You can specify which partner you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first partner in the list.

 [Owner().Partner(1).PaymentMethod]

 Displays the Payment Method of the first additional partner who shares ownership in the properties owned by the selected owner as entered on the owner's Miscellaneous tile.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Owner().Partner().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page for the owner's partner.

 Contact

 [Owner().Partner().Contact(). Function ]

 This class retrieves contact information for the partner.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Payment Method

 [Owner().Partner().PaymentMethod]

 Displays the Payment Method entered on the owner's Miscellaneous tile for the partner who shares ownership in the properties.

 Portal User Name

 [Owner().Partner().PortalUserName]

 Displays the Username for the owner partner's Owner Web Access account.

 Security Deposit Charged

 [Owner().Partner().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the properties of the partner who shares ownership with the selected owner.

 Security Deposit Held

 [Owner().Partner().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the properties of the partner who shares ownership with the selected owner.

 Security Deposit Received

 [Owner().Partner().SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the properties of the partner who shares ownership with the selected owner.

 Security Deposit Refunded

 [Owner().Partner().SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the properties of the partner who shares ownership with the selected owner.
