# Sync AvidInvoice Information

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/AvidInvoice-Sync-Information.htm

AvidXchange is an integrated partner that provides accounts payable (AP) and payment automation solutions. This feature uses direct integrations between Rent Manager and AvidXchange . Invoices collected and batched by AvidInvoice in the AvidXchange portal can be synced into Rent Manager as individual bills, then paid using AvidPay .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 You can sync vendor, GL account, and job information from Rent Manager to AvidXchange so information is consistent between platforms. If enabled, this information automatically syncs weekly over the weekend, but can also be synced manually as needed.

 Related Preferences

 To enable automatic syncing of data between AvidXchange and Rent Manager , select each option you wish to automatically sync on a weekly basis in the AvidXchange Sync Settings section of system preferences. At least one of these options must be enabled in order to manually sync your AvidInvoice information. For more information, refer to AvidXchange (System Preferences) .

 Warning

 Avid information is updated in Rent Manager every time you perform a sync. However, the information in AvidXchange is updated only in the following situations:

 - If a record is added to AvidXchange that already exists in Rent Manager but is not currently available in AvidXchange 's platform.

 - If a record is flagged as Inactive or does not currently exist in AvidXchange , or if the record is marked as Inactive in Rent Manager .

 To sync AvidXchange information manually, do the following:

 -
 Go to arrow_forward Payables arrow_forward AvidXchange arrow_forward AvidInvoice .
The AvidInvoice Batches page displays.

 -
 At the bottom of the page, click Sync Avid Information .
The Warning pop-up displays.

 -
 On the pop-up message asking if you are sure you wish to proceed, click OK .
The Sync pop-up displays. The following information in Rent Manager and AvidXchange is compared and synced, depending on your selections in system preferences:

 Entity
 Information

 Vendor

 If the option Sync vendors is enabled in system preferences, the following fields on the vendor's details page are synced with AvidXchange :

 More Information

 If there are specific vendors you do not wish to sync with AvidXchange , you can create a vendor-type user-defined field with a Field Type of Yes/No and name it Do Not Sync With AvidXchange . Then for each vendor you wish to exclude from synching, select the option Yes for this UDF on that vendor's account. For more information, refer to Add a User Defined Field .

 1099 Vendor

 The 1099 Vendor checkbox in the Tax Information tile.

 Account Number

 The Account Number field in the Bill Settings tile.

 Active

 The Active checkbox in the General Information tile.

 Name

 The Name field in the General Information tile.

 Vendor Default Address

 The street address, city, state, postal code, and country entered as the default address for each vendor.

 GL Account

 If the option Sync general ledger accounts is enabled in system preferences, the following fields on the GL account's details page are synced with AvidXchange :

 Account Number

 The assigned number of the GL account in the GL Account No field.

 Account Name

 The Name of the GL account.

 Jobs

 If the option Sync jobs is enabled in system preferences, the following fields on the job's details page are synced with AvidXchange :

 Job Name

 The Name of the job in the General Information tile.

 Job Short Name

 The Short Name of the job in the General Information tile.

 -
 Once the sync is completed, click OK to close the confirmation pop-up.
Your Rent Manager and AvidXchange information are synced together to match.

 More Information

 If there are any errors while syncing data, a pop-up displays with the number of errors that occurred.

 To learn more information about any errors that occurred, click View Error Report on the pop-up. The Avid Sync Errors report displays with detailed information on why each piece of information was unable to sync. This report can be accessed only once, so it is recommended you save or print this report for your records.

 If you do not wish to view the report, click OK .
