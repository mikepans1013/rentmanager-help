# Delete a Tenant

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Tenant-Delete.htm

Rent Manager gives you three options to handle tenants you no longer manage in your database. The first option, and best practice, is to make the tenant inactive. A tenant is considered inactive if all their leases have Move In and Move Out dates in the past, or a Move In date set in the future. This can be managed on the tenant details page's Leases tile. Information about inactive tenants remains in Rent Manager and may be included in reports wherever the Tenants to Include option is available and Past and/or Future is selected. For example, you can use the inactive option for a tenant that has moved out in order to preserve valuable historical and financial data.

 Should you find that deleting a tenant is the best option for your business, there are two deletion methods available in Rent Manager : complete or merge.

 If you have created a tenant account by mistake and do not need to maintain any historical data or financial records for the tenant, the complete method is the best option. Alternatively, if you have duplicate tenant accounts for the same individual, those accounts can be merged together if the duplicate tenant account is linked to a prospect record . Rent Manager can combine accounts using the   Merge option. The   Merge option's main purpose is to merge prospect accounts into tenant accounts or another prospect account. However, if you have a duplicate tenant account that was formerly a prospect account, the tenant can be reverted back into a prospect and then merged into the desired tenant account.

 Make a Tenant Inactive

 Making a tenant inactive ensures that all the information regarding the tenant remains in Rent Manager for you to access if you need it again. Inactive tenants can also be included in reports wherever the Tenants to Include option is available and Past and/or Future is selected.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To make a tenant inactive, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants .
The Tenants page displays.

 -
 Select the desired tenant from the Tenants page.
The Tenant details page displays.

 -
 On the Leases tile, click Move Out .
If the tenant has multiple leases, the Select Lease(s) pop-displays. Check each lease to end, and click Next .

 -
 Complete the Move Out wizard and click Move Out . For more information, refer to Move Out Wizard .

 Merge Tenant Accounts

 To merge duplicate tenant accounts, you need to revert the tenant account back to a prospect and then use the Merge option to combine the accounts. The process of merging copies the account (and all contacts) into another existing account, as detailed below.

 More Information

 If you have a tenant account that was not originally a prospect account when entered into Rent Manager , the account cannot be reverted. The tenant account must be deleted and the transactions and information from the tenant account must be manually added to a new prospect account. Additionally, deleting a tenant account cannot be undone.

 Step 1: Revert a Tenant Account Back to a Prospect

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Prospects
 View, Edit

 Change account status to a prospect
 Enabled

 For more information, refer to Control User Access .

 To revert a tenant account back to a prospect, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects .
 The Prospects page displays.

 -
 Select the account for which you wish to change the status.
 The Prospect details page displays.

 -
 At the top right of the page, click Update Status .
 The Change Prospect Status pop-up displays.

 -
 In the New Status field, select Prospect .

 -
 Click Save .
 The tenant account is converted back to prospect status and no longer displays as a tenant in Rent Manager .

 Step 2: Merge Prospect to Tenant with Wizard

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Merge Prospects
 Enabled

 For more information, refer to Control User Access .

 To merge prospect accounts, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and click Merge .
 The Merge Prospects pop-up displays.

 -
 In the Select the Source and Destination Accounts section, enter the following information:

 Field
 Description

 Merge Prospect To

 Whether the prospect account is being merged into another Prospect account or a Tenant account. For this situation, select Tenant .

 Source Prospect

 The duplicate prospect account whose information is being merged into another account. If both prospect accounts have the same name, click and enter the prospect's name in the Search field, then select the correct account from the list.

 Destination Tenant

 The account that the Source Prospect is being merged into.

 -
 In the Source Prospect Options Section , ensure Delete the Source Prospect is checked.

 -
 Click Merge .
The Source Prospect account is merged into the Destination Tenant account, and the Source Prospect account is updated with the selected status.

 Delete a Tenant

 If you created a tenant by accident and do not wish to maintain any historical data or financial records for the tenant, the complete method is the best option. Deleting a tenant from Rent Manager is final and cannot be undone. You cannot delete a tenant with transactions tied to their account.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Delete

 For more information, refer to Control User Access .

 To delete a tenant, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants .
The Tenants page displays.

 -
 Select the desired tenant from the Tenants page.
The Tenant details page displays.

 -
 On the action bar to the right, click arrow_forward Delete Tenant .
The Confirm Delete pop-up displays.

 -
 Click Yes .
The tenant is deleted from your Rent Manager database.
