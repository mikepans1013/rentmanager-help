# Post Recurring ePay

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/ePay-Recurring-Post.htm

Zego ePay automatically transfers money either from ePay payments you make to others or that you receive from others in the real world and deposits them into the actual bank account(s). Recurring ePay allows you to pull payments from tenants based on the account information set up on the tenants'  ePay settings. This is useful for tenants who may not want to submit payments through Tenant Web Access (TWA) or AutoPay but still want to pay electronically.

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Take tenant payments
 Enabled

 ePay

 Setup and perform ePay operations
 Enabled

 Perform ePay batch processing
 Enabled

 For more information, refer to Control User Access .

 To post recurring ePay payments, do the following:

 -
 Go to   arrow_forward Receivables arrow_forward Payments arrow_forward Post Recurring ePay . If prompted, enter the ePay password to authenticate your ePay account and click Authenticate .
The Post Recurring ePay Payments page displays.

 -
 In the top left of the page, select the Properties for which to post ePay payments. Alternatively, select a property Group from the drop-down list.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 In the Use a post date field, enter or select the desired posting date. The date can be no more than one month into the future and cannot be in the past.

 Warning

 The payment is processed with Zego today no matter what date you enter in Rent Manager .

 -
 Click Fill List .
The center section populates with tenants from the selected properties who are set up to use ePay for batch payments. Uncheck any tenants for whom you don't want to process an ePay payment. The following columns are available on this page:

 Column
 Description

 Balance

 The total dollar amount the tenant owes.

 Charge

 The open amount to be paid by the tenant in this posting as determined on the tenant's ePay Settings pop-up, in the Batch Calculation field.

 Fee

 The platform fee(s) assessed to the tenant as defined in system preferences. For more information, refer to Tenant ePay (System Preferences) .

 Last Period

 The date of the last posting period.

 Last Post

 The date of the last posting.

 Post Day

 The day of the month that an ePay batched posting should be made on this tenant's account. This is inherited from the Posting Day on the tenant's ePay Settings pop-up.

 Warning

 If you have Task Automation set up for recurring ePay and it has not yet run for the current month, the tenant is charged the next time the automation runs regardless of the date selected in this field. For example, if your recurring ePay automation is set to run on the 15th of the month and you manually process a payment batch with a Posting Day of 3 , any tenants included in that payment batch are charged again when the automation runs on the 15th.

 Pre-Processing Error

 If applicable, any errors that prevent a payment from being processed, such as missing or incorrect information about a tenant's address or payment method.

 Property

 The tenant's primary property.

 Status

 After clicking Post , real-time messages regarding the payment display, such as whether the transaction was approved or declined.

 Tenant

 The name of the tenant whose payment is included.

 Total

 The total amount to be paid by the tenant, using the following formula:

 Total = Charge + Fee

 -
 Verify that the totals at the bottom of the page are correct. The following fields display in this section:

 Field
 Description

 Selected Accounts

 The total number of accounts selected to be included in the recurring ePay posting.

 Total Accounts

 The total number of accounts populated on the page.

 Total Amount

 The total dollar amount, including fees, of all the ePay payments being posted.

 Total Balance

 The total dollar amount of all of the ePay payments in the posting.

 Total Charge

 The total dollar amount of all the charges being paid in the posting.

 Total Fee

 The total dollar amount of platform fees charged in the posting.

 -
 Click Post and then Yes to confirm the posting.

 Related Preferences

 Depending on your system preferences, a receipt may display to send to the tenants for which you processed payments. For more information, refer to Batch ePay (System Preferences) .

 -
 After clicking Post , real-time messages regarding the payment display, such as whether the transaction was approved or declined. Click Confirm to close the pop-up and finalize the posting or click Cancel to start over.

 More Information

 If a payment returns an error, it is still included in any recurring ePay postings for ten days after the tenant's posting period, then removed from the populated list. For example, if you receive an error posting recurring ePay on 10/1/ 2026 for a tenant whose posting day is the first of the month, Zego tries to reprocess the payment every time you post recurring ePay through 10/10/ 2026 . If the payment still fails, Zego stops attempting to process the payment for postings on or after 10/11/ 2026 .
