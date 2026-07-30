# Process Zego Pay Lockbox Payments

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Zego-LockBox-Process-Payments.htm

The Zego Pay Lockbox integration provides an alternative way for tenants to submit physical payments, such as checks or money orders. Instead of mailing or dropping off payments at a front office, payments are mailed to a P.O. box that is managed by Zego . Zego then processes the payments and uploads them directly to the tenant's account in Rent Manager . The integration reduces the amount of time your office and employees spend on handling and processing physical payments as well as the risk of incorrect data entry related to those payments.

 More Information

 Transactions created from the Zego Pay Lockbox integration are not able to be refunded through the ePay refund function on the tenant's transactions list. If a refund is required, ensure the payment cleared the tenant's bank (usually at least six business days from the first business day the transaction was processed), and refund the tenant via a check. For more information, refer to Refund an ePay Payment .

 Related Preferences

 In order to use the Zego Pay Lockbox process, Zego must assign you a P.O. box and you must enabled your Lockbox settings in system preferences. For more information, refer to Tenant Lockbox ePay (System Preferences) .

 The Zego Pay Lockbox uses the following workflow:

 -
 A tenant mails their check or money order to the P.O. box address provided by Zego .

 -
 The payment is received by Zego and processed within twenty-four hours of receipt.

 -
 Zego uses the information provided on the envelope, payment, and any other information enclosed to locate the tenant's account in the correct Rent Manager database.

 More Information

 Zego requires shared data to ensure the payments are posted to the correct accounts. If a tenant is unable to be found, the property management company is contacted to make the choice to apply the payment to a tenant account of their selection or if the payment is returned via mail to the sender. Following all the steps in this topic ensures that payments are applied in a timely manner.

 -
 As soon as the account matching the payment is found, Zego applies the payment to the tenant's transactions and this is reflected in your Rent Manager database. Checks display with a Reference # of LB CK followed by the specific check number, and money orders display as LB MO followed by the specific money order number.

 More Information

 The payment is dated in Rent Manager as the date it is processed by Zego , not the postmark date. For example, if a check is dated and mailed on the 1st of the month, but it takes five days to get to the P.O. box and then another day to process the payment, Zego dates the payment in Rent Manager as received on the 6th of the month.

 -
 The payment is applied to the default bank as set in system preferences. For more information, refer to Tenant ePay (System Preferences) .
If the property overrides the ePay system preferences, the payment is applied to the property's ePay Settings pop-up Bank Account field. For more information, refer to Property ePay Settings (Pop-Up) .

 -
 Zego follows the deposit settings set up in system preferences. For more information, refer to Advanced ePay (System Preferences) .
The payment and the deposit are entered into Rent Manager and ready to follow the rest of your accounts receivable processes in Rent Manager .

 More Information

 Currently, there is not a way to automatically charge tenants platform fees on payments made through Zego Pay Lockbox. If platform fees need to be charged, they have to be manually added to the tenant's transactions. For more information, refer to Add a One-Time Charge .
