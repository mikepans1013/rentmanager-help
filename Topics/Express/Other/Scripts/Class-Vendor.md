# Vendor Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Vendor.htm

This class examines vendor account information as entered on the vendor's details page. It can either be followed by a vendor-level scripting function or another class associated with a vendor.

 Example

 [Vendor().Address().FullAddress]

 Result

 Displays the vendor's full address (Street1, Street2, City, State, Postal Code) that is marked as Default on the vendor Addresses tile.

 Example

 [Vendor().PaymentMethod]

 Result

 Displays the default payment method to be used when a bill should be paid for the selected vendor as entered in the Payment Method field on the vendor Bill Settings tile.

 Example

 [Vendor().Contact().PhoneNumber().FullNumber]

 Result

 Displays the full number and extension of the vendor's default phone number.

 Class Parameters

 This class can specify a single, optional parameter: an ID.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the account Create Date . This number does not display on any page, but may be used within scripting. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Vendor().VendorID] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 [Vendor(223).Balance()]

 Displays the balance of the vendor with an account number of 223.

 More Information

 A vendor ID may be specified only when the Vendor class is considered the parent class in a script as shown in the example.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Vendor().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Vendor details page.

 Contact

 [Vendor().Contact(). Function ]

 This class retrieves contact information for the vendor.

 Phone Number

 [Vendor().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the vendor.

 Service Manager

 [Vendor().ServiceManager(). Function ]

 This class retrieves data from service issues linked to a vendor.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Account Number

 [Vendor().AccountNumber]

 Displays the Account Number entered on the Bill Settings tile for the vendor.

 Address Count

 [Vendor().AddressCount]

 Displays the number of addresses entered for the vendor.

 Auto Fill Checks

 [Vendor().AutoFillChecks]

 Displays True if Auto-Fill Check/Bill Information is checked on the vendor's Bill Settings tile and False if unchecked.

 Balance

 [Vendor().Balance()]

 Displays the vendor's account balance as of a specified date.

 Balance 1099

 [Vendor().Balance1099]

 Displays the YTD 1099 Balance , which can be entered by clicking the YTD Balances button on the Tax Information tile for the vendor.

 Calc 1099 Checks

 [Vendor().Calc1099Checks()]

 Displays the calculated 1099 check balance as of a specified date for the vendor.

 Category

 [Vendor().Category]

 Displays the text entered in the Category field on the vendor's details page.

 Check Payee Name

 [Vendor().CheckPayeeName]

 Displays the name to use when writing checks for the vendor, as entered in the Payee field on the General tile for the vendor.

 Comment

 [Vendor().Comment]

 Displays the text entered in the Comment tile of the Vendor details page.

 Contact Count

 [Vendor().ContactCount()]

 Displays the number of contacts associated with the vendor.

 Contact List

 [Vendor().ContactList()]

 Displays a list of contacts associated with the vendor.

 Create Date

 [Vendor().CreateDate]

 Displays the date the vendor was created and first saved.

 Default Account

 [Vendor().DefaultAccount]

 Displays the Default Account selected on the vendor's Bill Settings tile.

 Default Phone Number

 [Vendor().DefaultPhoneNumber]

 Displays the vendor's phone number marked as Default on the View Contacts pop-up.

 History Count

 [Vendor().HistoryCount()]

 Displays the total number of history/notes on the vendor's History/Notes pop-up.

 Insurance Expiration Date

 [Vendor().InsuranceExpirationDate]

 Displays the Insurance Expiration Date as entered on the vendor's Miscellaneous tile.

 Is 1099

 [Vendor().Is1099]

 Displays True if 1099 Vendor is checked on the vendor's Tax Information tile; otherwise, displays False .

 Is Active

 [Vendor().IsActive]

 Displays True if Active is enabled on the vendor General tile; otherwise, displays False .

 Is Private

 [Vendor().IsPrivate]

 Displays 1 if Private is checked on the vendor's General tile; otherwise, displays 0 .

 Name

 [Vendor().Name]

 Displays the Name as entered on the vendor General tile.

 Note

 Vendor().Note()]

 Displays information about the most recent note on the vendor's History/Notes tile.

 Payment Method

 [Vendor().PaymentMethod]

 Displays the Payment Method entered on the vendor Bill Settings tile.

 Set Contact Type Filter

 [Vendor().SetContactTypeFilter()]

 This function is designed to filter the total collection of contacts associated with the vendor based on the assigned parameter values.

 Set History Filter

 [Vendor().SetHistoryFilter()]

 This function is designed to filter the total collection of vendor history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Tax ID

 [Vendor().TaxID]

 Displays the 1099 tax ID as entered on the vendor Tax Information tile.

 Total Bills

 [Vendor().TotalBills()]

 Displays the total amount of bills posted to the Vendor Transactions pop-up.

 Total Credits

 [Vendor().TotalCredits()]

 Displays the total amount of credits as listed on the Vendor Credits pop-up.

 Total Paid

 [Vendor().TotalPaid()]

 Displays the total amount of payments made with a Checks payment method as listed on the Vendor Transactions pop-up.

 Total Payment

 [Vendor().TotalPayment]

 Displays the total amount of payments received on specified charge types within a date range for the vendor.

 Update Date

 [Vendor().UpdateDate]

 Displays the most recent date and time that the vendor account was updated and saved.

 User Defined Field

 [Vendor().UserDefinedField()]

 Displays the value of the vendor-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Vendor().UserDefinedField("Recommended By")]

 Displays the value for the Recommended By user defined field.

 Vendor ID

 [Vendor().VendorID]

 Displays the system-generated vendor ID number.

 Workers Comp Expiration Date

 [Vendor().WorkersCompExpirationDate]

 Displays the Workers Comp Expiration Date as listed on the vendor Miscellaneous tile.
