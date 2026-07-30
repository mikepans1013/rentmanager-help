# AvidXchange (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/AvidXchange.htm

AvidXchange is a provider of accounts payable (AP) and payment automation solutions. There are two services available for importing and paying bills using AvidXchange 's integration with Rent Manager : AvidInvoice and AvidPay . These preferences are used to set up the AvidXchange integration and determine how transactions imported from AvidInvoice and processed with AvidPay are handled in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward AvidXchange .
The System Preferences: AvidXchange page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 AvidXchange Account Information

 This section displays information about the AvidXchange account connected to Rent Manager . If you have not yet set up AvidXchange , only Set Up Connection displays and you must enter your account details to access and view other information.

 Option
 Description

 Accounting System ID

 The vendor ID associated with your AvidXchange account. This field is read-only.

 Set Up Connection

 Establish account information for AvidXchange . To set up the AvidXchange connection, click Set Up Connection , enter the AvidXchange account's Username and Password and click Next . Then, in the Accounting System ID field, select the vendor ID associated with your AvidXchange account from the drop-down list and click Finish .

 Test Connection

 Verifies that Rent Manager and AvidXchange are connected. The Connection Test Result pop-up displays the connection statuses for AvidInvoice and AvidPay .

 Username

 The email address associated with your AvidXchange account. This field is read-only.

 AvidXchange Settings

 This section sets how bills are imported and paid using AvidInvoice and AvidPay . Each option is described below.

 Option
 Description

 Automatically post AvidPay  checks when paying bills

 Determines whether bills with the Pay Method set to AvidPay are automatically submitted to AvidPay for processing or if the submission must be completed manually. For more information, refer to Post AvidPay (Page) .

 If enabled, Rent Manager automatically submits payments for any bills paid from the Pay Bills page that have the Pay Method set to AvidPay . For more information, refer to Pay Bills .

 More Information

 With this option enabled, users that can pay bills do not need the privilege to Submit user’s own AvidPay check batches .

 AvidPay Entity ID

 The Rent Manager information used for the AvidPay Entity ID, which can be used to search checks in the AvidXchange Portal. Select one of the following to use as the AvidPay Entity ID:

 Use bank GL Account

 The general ledger (GL) account number of the bank associated with the check.

 Use Property short name

 The short name of the property on the check's first line item.

 Link purchase order on imported bills from AvidInvoice

 If enabled, AvidInvoice purchase order (PO) numbers are automatically linked to bills created in Rent Manager when importing from the AvidXchange portal. For more information, refer to Import Avid Bills .

 Additionally, with this preference enabled, the Show unmatched Avid PO#'s only filter option and Avid PO # column display on the Bills page.

 Mark imported bills as unapproved

 Requires manual approval of each bill imported via AvidPay before they can be paid in Rent Manager .

 Related Preferences

 This system preference is only applicable if the Require bills to be approved before they can be paid option is also enabled in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Reset AvidInvoice From Date

 Clears the starting date from which AvidInvoice imports batches of invoices into Rent Manager that were collected by AvidInvoice . The next time an AvidInvoice batch is imported, the user is prompted to enter a new From Date .

 Set payment type to AvidPay by default when importing from AvidInvoice

 If enabled, the Pay Method field for bills that are imported into Rent Manager from AvidInvoice is automatically set to AvidPay .

 Use batch posting date when importing from AvidInvoice

 If enabled, the batch's posting date set in the AvidXchange Portal is used when importing invoices instead of the default invoice date. This becomes the posting date of the bill.

 AvidXchange Sync Settings

 This section sets the Rent Manager entities you wish to synchronize with AvidXchange . Synchronization occurs on a weekly basis over the weekend.

 Warning

 AvidXchange information is updated in Rent Manager every time data is synchronized. However, that information in AvidXchange is updated only in the following situations:

 -
 If a record is added to AvidXchange that already exists in Rent Manager but is not currently available in AvidXchange 's platform.

 -
 If a record is flagged as Inactive or does not currently exist in AvidXchange , or if the record is marked as Inactive in Rent Manager .

 Option
 Description

 Auto sync completion email

 The email address to receive the detailed results of your automatic, weekly synchronization.

 Sync general ledger accounts

 General ledger (GL) information in AvidXchange is updated to match GL information from Rent Manager .

 Sync jobs

 Job information in AvidXchange is updated to match job information from Rent Manager .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Sync vendors

 Vendor information in AvidXchange is updated to match vendor information from Rent Manager . Additionally, select Include private vendors to include vendors with Private checked on the vendor's details page in any syncs that are performed.
