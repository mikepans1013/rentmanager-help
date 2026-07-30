# Ownership Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Ownership.htm

This class examines an owner's ownership as displayed on the Ownership page. It is preceded by the Owner, Financial Property, or Property classes and can be followed by either an ownership-level scripting function or another class associated with the ownership of the owner.

 Example

 [Owner().Ownership().ContractFrom]

 Result

 Displays the date on which the contract starts for the first ownership listed on the Ownership page for the owner.

 Example

 [Property().Ownership().Reserve]

 Result

 Displays the reserve amount required for the ownership.

 Class Parameter

 This class can specify a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific ownership on an account by using a number to identify each ownership listed. For example, if there are three ownerships listed on a owner’s account, they are referenced by indexes 0, 1, and 2. You can specify which ownership you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first ownership in the list.

 [Owner.Ownership(1).Reserve]

 Displays the reserve amount required for the first additional ownership listed for the current owner.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Property

 [ Class(). Ownership().Property(). Function ]

 This class retrieves data about the Property listed on the Ownership pop-up for the owner account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Contract From

 [ Class(). Ownership().ContractFrom]

 Displays the date the owner became a client of the management company for the ownership. This corresponds to the Contract Start date on the owner Ownership pop-up.

 Contract To

 [ Class(). Ownership().ContractTo]

 Displays the date the owner stopped being a client of the management company for the ownership. This corresponds to the Contract End date on the owner Ownership pop-up.

 Owner Contract ID

 [ Class(). Ownership().OwnerContractID]

 Displays the system-generated contract ID number of the ownership.

 Percentage Owned

 [ Class(). Ownership().PercentageOwned]

 Displays the percentage of ownership as entered on the owner's Ownership pop-up.

 Reserve

 [ Class(). Ownership().Reserve]

 Displays the Reserve amount required for the ownership as listed on the owner's Ownership pop-up.
