# Add an Owner

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Owners-Add.htm

In Rent Manager , owners are the people or organizations that own the properties you manage. If you are a fee-based management company, you utilize the owner features in Rent Manager to perform tasks like receive owner contributions, collect management fees, and pay owners their equity distributions. This topic covers creating owners in your Rent Manager database so you can track their contributions, management fees, and distributions at your properties.

 Step 1: Add Owner and General Information

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 Add, View

 For more information, refer to Control User Access .

 To create an owner account, do the following:

 -
 Go to arrow_forward Owners arrow_forward General arrow_forward Owners .
The Owners page displays.

 -
 At the top, click   Add Owner .

 On the left, the Owner Information tab is selected by default when you open the wizard.

 -
 In the General Information section, enter the owner's information into the available fields described below.

 Field
 Description

 Name

 The name of the owner, which is used when referencing the owner throughout Rent Manager and for correspondence generated from Rent Manager to the owner.

 More Information

 If you plan on providing this owner a 1099 form for their taxes, you can optionally use the value entered here for the name on the Owner 1099 and Owner 1099 Copy B reports.

 Display Name

 The name that displays on the Owners page. This is helpful if, for example, the owner is a limited liability company (LLC) but you want to see a contact's name instead.

 Tax ID

 The tax ID (or Social Security number) of the tenant.

 More Information

 If you plan on providing this owner a 1099 form for their taxes, you can optionally use the value entered here for the name on the Owner 1099 and Owner 1099 Copy B reports.

 -
 In the Miscellaneous section, enter additional account information into the available fields described below.

 Field
 Description

 Email

 The primary email address for this owner, which is used for correspondence generated from Rent Manager .

 Display (Color)

 A color to help identify owners of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the owner in some areas of Rent Manager , such as the Owners list page.

 Payment Method

 The default method for how Rent Manager records distribution payments to this owner. Choose one of the following payment methods:

 ACH

 An automated transfer handled by your bank that uses the automated clearing house (ACH) network for added security.

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 You must have the eChecks system preferences option to Automatically process eChecks when paying for Owner Bills to post eChecks automatically. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer directly from Rent Manager .

 Related Preferences

 You must have an ePay account with Zego and the owner ePay system preferences set up to enable this option. For more information, refer to Owner ePay (System Preferences) .

 NACHA

 A universal file type used to request the transfer of funds electronically as an ACH transaction.

 Check Payee

 This field automatically populates with the Name field. If the name to whom checks should be made out is different, enter that name instead.

 More Information

 If you plan on providing this owner a 1099 form for their taxes, you can optionally use the value entered here for the name on the Owner 1099 and Owner 1099 Copy B reports.

 -
 In the Addresses section, enter the address(es) for the owner. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the owner's address.

 -
 In the Comment section, enter any additional notes or information about the owner you wish to display on the Owner Listing report, as well as to be used in scripting for letter templates and Report Writer .

 -
 In the Accounts section, enter additional account information into the available fields described below.

 Related Preferences

 The option <Use Default> uses the GL account defined in the owner settings system preferences.
For more information, refer to Owner Settings (System Preferences) .

 Field
 Description

 Draw Account

 The GL account used to record distributions paid to this owner. This is typically linked to an equity account (e.g., 3002 Owner Distribution ).

 Contribution Account

 The GL account used for contributions made by this owner. This is typically linked to an equity account (e.g., 3003 Owner Contribution ).

 -
 In the Phone Numbers section, enter any relevant phone numbers for the owner. The available columns are described below.

 Column
 Description

 Default

 Check to set this phone number as the contact to use in reports and other areas of Rent Manager that pull the owner's phone number. Only one default number can be selected for the owner.

 Name

 The name of each phone number type that currently exists in Rent Manager .

 T (Is Text Ready)

 Check to mark the phone number as text-enabled, meaning the number can receive text messages.

 This is also used with Text Broadcasting to determine which phone numbers can be sent texts from Rent Manager .

 Number

 The full ten-digit phone number associated with the phone number type.

 Extension

 If applicable, the extension that must be dialed for this phone number.

 Step 2: Enter Owner UDF Values

 After entering the owner's general information, select the User Defined Fields tab on the left. In the User Defined Fields section, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the owner.

 To view all the owner-type UDFs in the database, click View All UDFs . For each UDF applicable to the owner you are adding, enter or select the information in the Value column for the associated UDF. For more information, refer to Owner-Type User Defined Fields (Pop-Up) .

 Step 3: Save the New Owner

 Once you have established the owner-type UDFs, click Save and Finish to complete the owner creation process and close the wizard. Alternatively, click Save and New to finish adding the owner and refresh the wizard to add another owner account.
