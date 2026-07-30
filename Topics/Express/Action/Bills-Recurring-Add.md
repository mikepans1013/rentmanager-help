# Add a Recurring Bill

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Bills-Recurring-Add.htm

You can create recurring bill templates to automate expenses that you expect to occur regularly, such as monthly payments to a pest control or trash service vendor. When you set up a recurring bill, Rent Manager automatically creates one-time bills and adds them to your list of bills to pay.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Recurring Bills
 Add, View

 For more information, refer to Control User Access .

 To create a new recurring bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Recurring Bills .
The Recurring Bills page displays.

 -
 Click Add Recurring Bill .

 -
 At the top left, select whether the recurring bill is for a Vendor or an Owner .

 -
 To set up the recurring bill's general details, enter the information below.

 Field
 Description

 Property

 The property the recurring bill is applied to.

 Vendor/Owner

 The name of a vendor or owner who is the recipient of this bill payment.

 If the selected account has any past bills in Rent Manager , you can click Fill from bill history to automatically copy information from the past bill you select and import it into the new bill. The information imported includes the Amount , Default Bank , and any line items on the bill.

 Amount

 The total dollar amount of the bill. The amount in this field must equal the total allocations for this bill.

 Alternatively, if you have multiple lines on the bill, click to populate the total of all fields in the line items' Amount column.

 Invoice #

 If applicable, the bill's reference number or invoice number. The Invoice # displays on the Bills page and in reports, such as the Bills Paid report.

 Terms

 The amount of time before the bill is considered due.

 For example, select ON THE 15th to indicate that the bill is due on the 15th day of the month. Several bill terms are included by default, but you can also add, edit, or remove term options as needed. For more information, refer to Bill Terms (Page) .

 Start Date

 The date on which Rent Manager creates the first instance of the recurring bill.

 End Date

 The date on which Rent Manager creates the last instance of the recurring bill. Alternatively, instead of entering an end date, you can complete the Frequency and Number Left fields to have Rent Manager automatically determine the End Date .

 Frequency

 How often Rent Manager creates the recurring bill over the specified date range. You must enter a number and select a unit of time (i.e., Day(s) , Week(s) , or Month(s) ). For example, a bill with a frequency of 1 month posts once each month, a bill with a frequency of 2 months posts once every two months, and so on.

 Number Left

 The number of remaining times the bill is created before the recurring bill posting ends. The Number Left can be set manually, or Rent Manager can calculate it automatically based on the selected Start Date , End Date , and Frequency .

 -
 To set up the payment details for this bill, enter the information below.

 Field
 Description

 Memo

 An optional message or reference for the bill that displays on certain reports that can be sent to vendors, such as Bill Worksheet .

 Payment Method

 The method by which the bill is paid. This field is automatically populated with the Payment Method selected on the account's details page.

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 Default Bank

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Notification Email

 The email address that receives an email notification for each successful or failed automatic posting of this bill. If entering more than one email address, separate each with a semicolon (;).

 Automate

 Check to have Rent Manager automatically post the bill each time it is created. Automated bills do not require a user to manually post the bill.

 Related Preferences

 To post recurring bills automatically, Recurring Bills must be enabled for task automation in system preferences. For more information, refer to Task Automation (System Preferences) .

 -
 To allocate the bill to expense accounts, click Add Item to add as many line items as needed and enter the information below.

 Field
 Description

 Property

 The property expensed by the recurring bill.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, the specific unit to be expensed by the owner or vendor. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 1099

 Check if the bill should be reported as a 1099 expense.

 More Information

 These expenses are included on account's Owner 1099 or Vendor 1099 reports. For more information, refer to Owner 1099 (Report) or Vendor 1099 (Report) .

 Memo

 A message for the expense item, which displays in the Memo column on the Bills page and the Bill Worksheet report.

 Amount

 The portion of the overall expense amount allocated to this line item. You must allocate the amount to at least one expense account to create the recurring bill.

 -
 To finish, click Save or Save & Close , or to create additional recurring bills, click Save & New .
The recurring bill is activated and, once the recurring bill is posted, the new bills using this template are added to your bills list for the specified frequency. For more information, refer to Post Recurring Bills .
