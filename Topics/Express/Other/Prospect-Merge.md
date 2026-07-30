# Merge Prospects

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Prospect-Merge.htm

Rent Manager provides the ability to copy one prospect and all contacts on that account into another current prospect or current tenant account. The source prospect and each associated contact are transferred as new contacts on the Contacts tile of the destination account, and after the merge is completed, history/note items are generated on both accounts to document the merge. Additionally, Tenant Web Access users who do not exist on the destination account have their web user credentials transferred.

 This tool is helpful if, for example, you have contacted a prospect and taken detailed notes and then that same person submits an online application and becomes a second prospect in your Rent Manager database. If a prospect account was created in-office or via Apply Now that has a screening or charges/payments (e.g., an application fee) tied to it, but a separate tenant account was created when they signed their lease, you can use this tool as a way to merge these accounts.

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

 Warning

 Data not copied in when merging prospects includes the following:

 -
 ePay information

 -
 Values for prospect-type user defined fields (UDFs)

 -
 The values on the prospect's details page

 -
 The Primary designation of a contact

 -
 The Show on Statements/Labels designation of a contact

 Step 1: Select the Source and Destination Accounts

 To merge prospect accounts, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and click Merge .
The Merge Prospects pop-up displays.

 -
 In the Select the Source and Destination Accounts section, enter the following information:

 Field
 Description

 Merge Prospect To

 Select whether the prospect account is being merged into another Prospect account or a Tenant account.

 Source Prospect

 Select the prospect account whose information is being merged. If both prospect accounts have the same name, click and enter the prospect's name in the Search field, then select the correct account from the list.

 More Information

 Prospects with an application status of In Progress cannot be merged until their application is completed or canceled.

 If the source prospect has screening results below the minimum acceptable standards, the following privilege is also required:

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Override workflow solution from screening
 Enabled

 For more information, refer to Control User Access .

 Destination Prospect/Tenant

 Select the account that the Source Prospect is being merged into.

 Step 2: Update the Source Prospect Account

 In the Source Prospect Options section, choose how to handle the Source Prospect account after the merge is completed.

 Option 1: Delete the Account

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Prospects
 View, Edit

 For more information, refer to Control User Access .

 If the Source Prospect account should be deleted after the merge, check Delete the Source Prospect and click Merge . This option is available if the prospect was a duplicate account, or was a contact of a prospect and never intended to have a separate account.

 Option 2: Update the Account Status

 If the Source Prospect account should not be deleted, do the following:

 -
 Uncheck Delete the Source Prospect .

 -
 Enter the following information:

 Field
 Description

 New Source Prospect Status

 The account status to apply to the Source Prospect account. Each option is described below.

 Prospect

 Indicate that the prospect is still a potential tenant. This creates a secondary account for the Source Prospect .

 Lost/Rejected

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Change Account Status to Lost/Lost-Rejected
 Enabled

 For more information, refer to Control User Access .

 Indicate that the prospect was rejected due to their application or other factors.

 Lost

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Change Account Status to Lost/Lost-Rejected
 Enabled

 For more information, refer to Control User Access .

 Indicate that the prospect decided not to rent from you.

 Reason

 The option that best explains why the prospect was lost from the drop-down list. For more information, refer to Lost Reasons (Page) . This field is available only if, in the New Source Prospect Status , you selected Lost or Lost/Rejected

 Related Preferences

 If the Require a reason when setting a prospect as lost or lost-rejected option is enabled is system preferences, this field must have an option selected. For more information, refer to Prospect (System Preferences) .

 Description

 Additional information to explain why the prospect was rejected. This field is available only if, in the New Source Prospect Status , you selected Lost or Lost/Rejected

 -
 If you want to transfer records of all payments and charges from the Source Prospect account to the Destination Prospect or Destination Tenant account, check Move Source Prospect transactions . Otherwise, uncheck Move Source Prospect transactions to keep all payments and charges on the Source Prospect account.

 -
 Click Merge .

 -
 Click Yes on the confirmation pop-up.
The Source Prospect account is merged into the Destination Prospect or Destination Tenant account, and the Source Prospect account is updated with the selected status.
