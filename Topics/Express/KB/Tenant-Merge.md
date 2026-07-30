# Merge Tenant Accounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Tenant-Merge.htm

If you have duplicate tenant accounts for the same individual, those accounts can be merged together if the duplicate tenant account is linked to a prospect record. Rent Manager can combine accounts using the   Merge tool. This tool's main purpose is to merge prospect accounts into tenant accounts or other prospect accounts. However, if you have a duplicate tenant account that was formerly a prospect account, the tenant can be reverted back into a prospect and then merged into the desired tenant account using this tool.

 To merge duplicate tenant accounts, you first revert the tenant back to a prospect account and then use the   Merge tool to combine those accounts.

 The process of merging copies the account (and all contacts) into another existing account, as detailed below.

 Warning

 If a tenant account was not originally a prospect account when entered into Rent Manager , the account cannot be reverted. The transactions and information from the tenant account must be manually added to a new prospect account, which can then be converted to a tenant. Then the original tenant account must be deleted. Additionally, deleting a tenant account and merging accounts cannot be undone.

 Step 1: Revert a Tenant Account Back to a Prospect

 To merge tenant accounts, you must first revert one account back to a prospect status, and then use the Merge Prospects pop-up to combine the accounts.

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
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select the account for which you wish to change the status.
The prospect's details page displays.

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
 Prospects
 View

 Merge Prospects
 Enabled

 For more information, refer to Control User Access .

 To merge prospect accounts, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Merge Prospects .
The Merge Prospects pop-up displays.

 -
 In the Select the Source and Destination Accounts section, enter the following information:

 Field
 Description

 Destination Tenant

 The account that the Source Prospect is being merged into.

 Merge Prospect To

 Select Tenant .

 Source Prospect

 The prospect account whose information is being merged into the Destination Tenant . If both prospect accounts have the same name, click and enter the prospect's name in the Search field, then select the correct account from the list.

 -
 In the Source Prospect Options section, ensure Delete the Source Prospect is checked.

 -
 In the Address Mapping section, determine how the source prospect's address(es) are to be merged into the destination tenant account. For example, you may wish to match the source prospect's Primary address with the destination tenant's address type of Billing . The following columns display in this section:

 Column
 Description

 Destination Contact Address Type

 The available tenant address types.

 More Information

 If an account-type and contact-type source address have the same selection in the Destination Contact Address Type column, the contact-type address takes precedence.

 Source Address Type

 The address type that was entered for the prospect (either in the prospect's Addresses or Contact tiles). The source prospect's address(es) that are located on the prospect's Addresses tile are preceded with Account , and addresses listed on the prospect's Contacts tile are preceded with Contact .

 -
 Click Merge .
The Source Prospect account is merged into the Destination Tenant account, and the Source Prospect account is deleted.
