# Management Company (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Owners-Management-Company.htm

Adjust these preferences to identify one of your properties as your management company for the sake of collecting management fees, and how the collection of those management fees are shown in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Owners
 Owners
 View

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Management Company .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding section below.

 Management Company

 Field
 Description

 Property

 Select the property account you created for your management company.

 Associated Vendor

 Select the vendor account you created for your management company.

 Income Chart Account

 Select the income GL account you wish to record income when you post management fees.

 Income Charge Type

 Select the charge type you wish to record the owner's expense for management fees.

 Management Fees

 Select what transactions Rent Manager creates when management fees are posted.

 Field
 Description

 Create a bill

 Creates a system generated bill for each property for the cost of its management fees after management fees are posted. The management company is selected as the vendor and the owner’s property is the expensed property on the bill.

 Charge the owner

 Uses the Income Charge Type selected above to create a charge in the Management Company section of the owner's account for the amount of management fees owed, after they are posted.

 Create an invoice

 Creates an invoice to the owner for the management fee charge. You can enable this option only if the option for Charge the owner is also enabled.

 Write a check

 Creates a check written from each owner’s property to the management company for the cost of its management fees. The management company is the vendor and the owner’s property is the expensed property on the check.

 More Information

 If Write a check and Create a bill are both enabled, the check written pays the bill created by the system.

 Add a payment

 Automatically pays the charge created on the owner account (via option Charge the owner or Create an invoice ) using funds from the property's default bank account.

 This transaction is the management company receiving the check created from the Write a check method. The previous check transaction withdraws money from the property trust account and this payment shows that check being received by the management company.

 You can enable this option only if the options for Charge the owner and Write a check are also enabled.

 Create a deposit

 Creates a deposit into the management company's default bank account using the Income Chart Account defined above. This represents the received management fee check payment being deposited into the management company’s bank account.

 You can enable this option only if the options for Charge the owner , Write a check , and Add a payment are also enabled.

 Receivables

 Check Add a payment from the owner when a bill is paid to the management company to have Rent Manager automatically put a payment on the owner account when bills are created that have the vendor set to the management company. The payment is intended to pay the invoice created by a billable expense on the same bill.

 To have Rent Manager automatically put a payment on the owner account when a bill that has the vendor set to the management company is paid, check Add a payment from the owner when a bill is paid to the management company . The payment is intended to pay the invoice of any bill payable to the management company, including bills created and paid when management fees are posted as well as those that are created independently.

 If you check this option, you can select any combination of the following options:

 Option
 Description

 Deposit the payments for commingled funds

 If the expensed property in a bill has commingled funds (meaning its operating bank is the same as the management company), check this option to automatically deposit the check that is created when the bill is paid. Since money won't move bank accounts, this merely updates the allocation of the funds.

 Deposit the payments for non-commingled funds

 If the expensed property in a bill has non-commingled funds (meaning the expensed property and your management company do not use the same default bank), check this option to automatically deposit the check that is created when the bill is paid. This updates the allocation of the funds in Rent Manager , but you still need to make this transfer in the real-world.

 Allow manual allocation of payment at the same time bills are paid

 To ensure the check payment goes towards the invoice originally created from the bill, check this option to manually allocate the payment when bills are paid.
