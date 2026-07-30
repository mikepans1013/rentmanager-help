# Add a Vendor

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Vendor-Add.htm

Vendors are the people and businesses that provide you with products and services. Tracking the payments you make to vendors in exchange is a necessary part of managing payables such as paying off bills or credit cards, writing checks, creating POs, and adding vendor credits. Adding vendors in Rent Manager allows you to record the transactions, track your payables, and keep a historical record of product details or services rendered.

 When you create or edit a vendor in Rent Manager , you can enter values into vendor-type user-defined fields (UDFs), select the properties where the vendor is available, and also establish default bill terms and expense accounts for the vendor. Although you can complete the vendor add wizard without this information, creating any UDFs, bill terms, and expense accounts the vendor may need before adding your vendor helps streamline the vendor creation process.

 More Information

 To streamline the creation process, consider setting up vendor UDFs, bill terms, and other information related to your vendors before adding vendor accounts. For more information, refer to Customize Vendor Options .

 Warning

 Before adding a vendor, you must first create at least one property where the vendor is available.

 Step 1: Add Vendor and Company Information

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Vendors
 Add, View

 For more information, refer to Control User Access .

 To create a vendor account, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Vendors .
The Vendors page displays.

 -
 At the top, click Add Vendor .

 -
 On the General Information tile, enter the vendor's information into the available fields described below.

 Field
 Description

 Associated property

 The properties at which the vendor is available to render services. When writing checks or bills for the vendor, only the selected properties are available to expense.

 Check Payee

 The name to use when writing checks to this vendor.

 Email

 The primary email address for sending correspondence to this vendor, such as emailing 1099 tax forms.

 Vendor Name

 The official name of the vendor, contractor, or business.

 -
 On the Miscellaneous tile, enter additional information to further categorize the vendor.

 Field
 Description

 Active

 When checked, this vendor is able to be selected on payables in Rent Manager . If unchecked, the vendor is added as inactive and cannot be selected on payables.

 Category

 A category for this vendor's products and/or services, such as Carpentry or HVAC and Electric . This is used to aid in narrowing down searches in the vendors list.

 Contact Name

 The name of the preferred point-of-contact for this vendor. This could be the payee, a sales representative, or another person at the company.

 Display

 A color to help easily identify vendors of certain types, groups, or any other specifications you prefer, such as 1099 vendors. The color displays as a bar to the left of the vendor in some areas of Rent Manager , such as the Vendors page.

 Private

 When checked, access to this vendor is restricted to Rent Manager users with the privilege listed below.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 View private vendors
 Enabled

 For more information, refer to Control User Access .

 This vendor is a user

 The Rent Manager user linked to the vendor who is reimbursed for any personal charges using Smart Receipts in rmAppSuite Pro . For example, if an employee spends their own money on parts for a maintenance issue, you can create a bill in from rmAppSuite Pro to reimburse the employee for their purchase. For more information, refer to Smart Receipts .

 -
 On the Bill Settings tile, enter the default bill information for this vendor. This information automatically populates when creating a bill or writing a check for this vendor.

 Field
 Description

 Account Number

 Your vendor-provided account number that identifies your specific account with that company.

 Auto-Fill Check/Bill Information

 Check to automatically populate information from the vendor's most recently-entered check or bill into a new check or bill.

 For bills, the total bill amount, default bank, payment method, memo, and all expense line items automatically populate. This information overrides the Default Account setting.

 For checks, the total check amount, memo, and all expense line items automatically populate. You can still edit this information or select a different prior bill/check to pull information from as needed.

 Default Account

 The default GL expense account to use for this vendor when adding line items to checks, bills, and so on.

 Echeck Email

 The email address that receives notifications about eChecks payments. This option is available only if, in the Payment Method field, eChecks is selected.

 Payment Method

 The default payment method to use when paying a bill for this vendor. A check is created and labeled with the corresponding payment method or next available check number. Each payment method is described below.

 ACH

 Create a check in Rent Manager to pay the bill. The check number is set to ACH to show that the bill was paid by an automatic clearing house transaction.

 AvidPay

 Creates a check in Rent Manager to pay the bill via the payment integration provided by AvidXchange using the Post AvidPay . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 Check

 Create a check in Rent Manager to pay the bill. This check can also be printed onto check stock and sent to the vendor. For more information, refer to Print Checks .

 Debit

 Create a check in Rent Manager to pay the bill. The check number is set to Debit to show that the bill was paid by a debit card.

 eChecks

 Create a digital check that is delivered to the payee via email by Safeguard .

 Related Preferences

 This option is available only if eChecks are enabled in system preferences. For more information, refer to eChecks (System Preferences) .

 EFT

 Create a check in Rent Manager to pay the bill. The check number is set to EFT to show that the bill was paid through an electronic funds transfer.

 ePay

 Create a check in Rent Manager to pay the bill. The check number is set to ePay to show that the bill was paid electronically through ePay .

 Related Preferences

 This option is available only if ePay is enabled in system preferences. For more information, refer to General ePay (System Preferences) .

 Terms

 The default bill term used when creating bills for this vendor. This automatically populates when the payment is due based on the term selected.

 Related Preferences

 If you select <Default> , this field populates with the bill term set in the Default Terms field of system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 -
 On the Addresses tile, enter the address(es) for the vendor. Select Default for the address you wish to use in areas such as reports and check details.

 -
 On the Comment tile, enter any additional notes or information about the vendor. To select a memorized comment, click .

 -
 On the Expiration Dates tile, enter the dates on which the vendor's Insurance policy and workers' compensation ( Worker's Comp ) policies expire. These dates prevent users from creating or completing tasks in Rent Manager (such as service issues, checks, and bills) for vendors with expired policies.

 Related Preferences

 If the options in system preferences to ignore expiration dates when creating bills are enabled, Rent Manager does not prevent users from creating bills for vendors with expired policies. For more information, refer to Checks/Bills General (System Preferences) .

 -
 On the Phone Numbers tile, enter any relevant phone numbers for the vendor. The available columns are described below.

 Column
 Description

 Default

 Check to select the primary phone number to use in areas such as reports.

 Extension

 If applicable, the extension used after dialing the phone number to reach the desired point-of-contact for this vendor.

 Name

 The name of each phone number type that currently exists in Rent Manager .

 Number

 The full ten-digit phone number of the associated phone number type.

 T (Is Text Ready)

 Check to mark the phone number as text-enabled, meaning the number can receive text messages.

 This also determines which phone numbers can be sent texts from Rent Manager . For more information, refer to Create a Text Broadcast .

 Step 2: Enter Vendor Tax Information

 The Tax Information tab allows you to specify any tax information for 1099 vendors. If this is not a 1099 vendor, proceed to Step 3: Enter Vendor UDF Values . If this is a 1099 vendor, do the following:

 -
 On the Tax Information tile, select 1099 Vendor .
The tax-related fields become available.

 -
 In the 1099 SocSec#/TaxID# field, enter the vendor's social security number or tax ID number.

 More Information

 Users with the View complete vendor SSNs privilege enabled in the Tenants/Prospects privilege group can view the social security number without an encryption. For more information, refer to Control User Access .

 -
 In the 1099 Category field, select the type of service provided by the vendor. This determines which section of the 1099-MISC form populates information when generating the Vendor 1099 report. For more information, refer to Vendor 1099 (Report) .

 Related Preferences

 If you select <System Default> , this field populates with the category set in the Default 1099 Category field of system preferences. For more information, refer to Vendors (System Preferences) .

 -
 In the YTD 1099 Balance column, enter the current balance of expenses from this year for each applicable Property to include this information in their Vendor 1099 for this year. If no expenses are accrued by this vendor yet, leave this blank.

 Step 3: Enter Vendor UDF Values

 After entering the vendor's general information, select the User Defined Fields tab on the left. On the User Defined Fields tile, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the vendor.

 To view all the vendor-type UDFs in the database, click View All UDFs . For each UDF applicable to the vendor you are adding, enter or select the information in the Value column for the associated UDF.

 Step 4: Save the New Vendor

 Click Save and Finish to complete the creation process and close the pop-up. Alternatively, click Save and New to complete the creation process and refresh the pop-up to add another vendor.
