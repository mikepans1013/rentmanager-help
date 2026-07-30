# Pay Bills with AvidXchange

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/AvidXchange-Bills-Pay.htm

AvidXchange is an integrated partner that provides accounts payable (AP) and payment automation solutions. This feature uses direct integrations between Rent Manager and AvidXchange . Invoices collected and batched by AvidInvoice in the AvidXchange portal can be synced into Rent Manager as individual bills. You can generate check transactions to pay these bills, which can then be posted to AvidPay for real-world payment distribution to vendors. You can opt to automate most of this process, or make it as hands-on as your business's workflow needs.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Preferences

 In order to use AvidXchange in Rent Manager , you must first enable it in system preferences by clicking Set Up Connection , then enter your AvidXchange credentials. Additionally, there are various preferences you can configure to customize how Rent Manager handles your invoices and paying the associated bills using AvidXchange . For more information, refer to AvidXchange (System Preferences) .

 Step 1: Import Bills from the AvidInvoice

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 AvidInvoice

 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 If you have enabled any of the options in the AvidXchange Sync Settings section of your system preferences, the information from your AvidXchange portal is synced down to Rent Manager and vice versa on a weekly basis. However, you can click the Sync Avid Information button to immediately manually sync the information from this page before importing invoices. If no sync settings are enabled, this button does not display. For more information, refer to Sync AvidInvoice Information .

 Before you can pay your bills with AvidPay , you must first download your invoices from your AvidXchange portal into Rent Manager as bills. If you have already imported your bills, proceed to the next step.

 To import from AvidInvoice , do the following:

 -
 Go to arrow_forward Payables arrow_forward AvidXchange arrow_forward AvidInvoice .
The AvidInvoice page displays.

 -
 Select each AvidInvoice batch you wish to import to Rent Manager . For more information, refer to Import Avid Bills .

 -
 At the bottom of the page, click Import .
The invoices in your AvidXchange portal are imported to Rent Manager as bills.

 More Information

 If you receive an error message stating the batches failed to import, you can click the Error Report button to view a report explaining why the import failed.

 Step 2: Pay Bills with AvidPay

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 View

 Allow user to Pay Bills
 Enabled

 For more information, refer to Control User Access .

 After you have imported your AvidXchange invoices to Rent Manager as bills, you can set those bills to be paid with AvidPay . You can then automatically have AvidPay send payments to these vendors or you can choose to manually control when AvidPay will fulfill payment.

 Manually Pay Bills with AvidPay

 There may be situations in which you want to record a bill payment in Rent Manager but you are not ready to have AvidPay process the vendor payment in the real world. Paying the selected bills manually allows you to separate the two actions so that you can control when the payment shows up in your financial records and the moment when the actual payment is sent to the vendor. You can also use this feature to manually pay bills without the use of AvidInvoice or when you need to approve bill payments.

 Related Preferences

 These steps apply only if the Automatically post AvidPay checks when paying bills option is not enabled in your system preferences. For more information, refer to AvidXchange (System Preferences) .

 If you are paying your bills manually via AvidPay , do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 In the Pay column, check each bill you wish to pay with AvidPay .

 Related Preferences

 If the Require bills to be approved before they can be paid option is enabled in system preferences, the Apv column must also be checked for that bill. If the Enable owner bill approval option is enabled in system preferences, you must also check the Owner Apv column. For more information, refer to Set Up Bill Approval .

 -
 In the Bank field, select the bank or credit card to be expensed to pay the associated bill via AvidPay .

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 In the Pay Method column, set each of these bills to AvidPay .

 -
 Click Pay Bills .
The Payment Info pop-up displays.

 -
 Enter the necessary information into the available fields. For more information, refer to Pay Bills .

 -
 Click Pay .
The bill is paid with a payment method of AvidPay in Rent Manager , but is not yet posted to AvidXchange .

 Automatically Pay Bills with AvidPay

 If you wish to have your AvidPay payments processed automatically as soon as possible, you can set up your database to expedite the process and simplify the steps.

 Related Preferences

 These steps apply only if both of the following options are enabled in your system preferences:

 -
 Set the payment type to AvidPay by default when importing from AvidInvoice

 -
 Automatically post AvidPay checks when paying bills

 For more information, refer to AvidXchange (System Preferences) .

 To have Rent Manager automatically process your AvidPay bill payments, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 In the Pay column, check each bill you wish to pay with AvidPay . The Pay Method should automatically be set to AvidPay .

 Related Preferences

 If the Require bills to be approved before they can be paid option is enabled in system preferences, the Apv column must also be checked for that bill. If the Enable owner bill approval option is enabled in system preferences, you must also check the Owner Apv column. For more information, refer to Set Up Bill Approval .

 -
 In the Bank field, select the bank or credit card to be expensed to pay the associated bill via AvidPay .

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Click Pay Bills .
The Payment Info pop-up displays.

 -
 Enter the necessary information into the available fields. For more information, refer to Pay Bills .

 -
 Click Pay .
The bill is paid with a payment method of AvidPay and automatically posted to AvidXchange .

 More Information

 When processing AvidPay bill payments automatically, this is the final step. You do not need to manually post the checks from the Post AvidPay page mentioned in Step 3 below.

 Step 3: Post AvidPay

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Submit user's own AvidPay check batches

 Enabled

 Submit other users' AvidPay check batches
 Enabled

 For more information, refer to Control User Access .

 If you are manually processing your AvidPay bill payments (meaning the Automatically post AvidPay checks when paying bills option is not enabled in system preferences), you need to post those payments via AvidPay when you are ready for them to be processed by AvidXchange .

 To post your AvidPay payments, do the following:

 -
 Go to arrow_forward Payables arrow_forward AvidXchange arrow_forward Post AvidPay .
The Post AvidPay page displays with a list of all bills paid with a Payment Method of AvidPay .

 More Information

 The list also displays any vendor checks that were written with the AvidPay option checked and were not automatically posted at the time the check was written.

 -
 Select each check or payment you wish to submit to AvidPay for payment distribution to the associated vendors.

 Warning

 Be sure to verify all the information is correct before submitting. Once you have posted the checks and payments to AvidXchange , you can no longer adjust the vendor or payment amount.

 -
 Click Post .
The selected payments are posted to AvidPay to be processed via AvidXchange .
