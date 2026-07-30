# Set Up Bill Approval

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Bills-Approval-Set-Up.htm

You can set up bill approval in Rent Manager to ensure that bills that exceed certain dollar amounts are not paid until they are reviewed and approved by specific users that have the privileges to approve those bills. Additionally, you can enable owner bill approval so that when a bill is added to Rent Manager , the owner can review and approve that bill via Owner Web Access (OWA) before it can be paid by a user in Rent Manager .

 Bill approval is a tool that grants you better control of bill payment in Rent Manager by assuring that they are not paid until they are reviewed by specific people first. You can establish up to three payment tiers of varying amounts so that these bills cannot be paid until specific users approve the bill for payment. For example, you could designate certain users to approve bills up to only $100, others up to $1,000, some up to $10,000, and then have one or two users who are permitted to approve any bill regardless of its amount.

 Additionally, if an owner of a property you manage wants to view and approve bills for their property before they are paid by your management company, you can also opt to enable owner bill approval. This allows you to establish a threshold amount for any of an owner's properties. Then when a bill that exceeds that amount is added to Rent Manager , the owner will receive an email and prompt them to view the bill in Owner Web Access (OWA) . From OWA, the owner can choose whether or not to approve the bill for payment. Once approved, Rent Manager updates to show that the bill has been approved by the owner to be paid and your management company can then pay the bill via Rent Manager .

 More Information

 After you have enabled bill approval (and optionally owner bill approval), users with the proper approval privileges can review and approve bills waiting to be paid on the Pay Bills page. To approve a bill for payment, check the box in the Apv column next to the bill. Bills with a checked box in the Owner Apv column have been approved for payment by the owner via OWA. For more information, refer to Pay Bills .

 Step 1: Enable Bill Approval

 The first step is to prevent Rent Manager users from being able to pay bills without approval. You must first enable bill approval and establish up to three bill amount tiers in system preferences, then give privileges to specific users that allow them to approve bills up to a certain tier amount (tier 1, tier 2, and so on).

 Set Up Bill Approval and Set Tier Amounts

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To require bill approval, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Checks/Bills arrow_forward General .

 -
 In the Approval section, check Require bills to be approved before they can be paid .

 -
 In the Bill Approval Maximums section, enter the dollar amounts for each approval tier. Users with tier 1 bill approval can approve bills up to the amount you enter in the Tier 1 field, users with tier 2 bill approval can approve bills up to the amount in the Tier 2 field, and so on. For example, you could enter 100 in Tier 1 field and users with tier 1 bill approval can only approve bills that are $100 or less.

 More Information

 To require that all bills require approval regardless of the bill's dollar amount, enter 0 for all tiers.

 -
 Click Save .
Bill approval is now required in Rent Manager . An Aprvd column now displays on the Bills page and an Apv column now displays on the Pay Bills page.

 Grant Tier Approval Privileges to Users

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 Once the maximum dollar amounts are set up for each tier, you can establish which Rent Manager users can approve bills and the maximum tier amount they can approve. Repeat these steps for all users needed.

 To edit a user's bill approval privileges, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users and select a user account. Then select the Privileges tab.

 -
 Expand the Payables section.

 -
 Check the following privileges to determine the user's level of bill approval access:

 Privilege
 Description

 Approve bills less than or equal to tier 1

 The user can approve bills that have a total amount less than or equal to the dollar amount entered in the Tier 1 field of system preferences.

 Approve bills less than or equal to tier 2

 The user can approve bills that have a total amount less than or equal to the dollar amount entered in the Tier 2 field of system preferences.

 Approve bills less than or equal to tier 3

 The user can approve bills that have a total amount less than or equal to the dollar amount entered in the Tier 3 field of system preferences.

 Approve all bills

 The user can approve any bill regardless of the total amount.

 In order to enable the privilege for higher tiers, all lower tiers below that tier must also be enabled. For example, in order to check Approve bills less than or equal to tier 2 , you must first check Approve bills less than or equal to tier 1 .

 More Information

 If the user should not be able to approve bills at all, uncheck all the privileges listed above.

 -
 Click Save .
The user's privileges are saved.

 Step 2: Enable Owner Bill Approval

 Once you set up bill approval, you have the option to enable owner bill approval. Once it is set up at the system level, you can then customize it per property based on each owner's needs.

 Related Privileges

 To ensure that bills requiring owner approval can be paid at times when the owner is not available, consider granting a user the following privilege:

 Group
 Privilege
 Column

 Payables
 Override owner bill approval
 Enabled

 Approve bills less than or equal to tier #
 Enabled

 A user with these privileges can check the checkbox in the Apv column of the Pay Bills page, even if the owner has not yet approved it.

 The user is still limited by the tier amounts in system preferences, meaning that the dollar amount of the bill must also be less than or equal to the maximum tier # they have the privileges to approve. For example, if they have only Approve bills less than or equal to tier 1 and the tier 1 limit is $100 but the bill is for $200, they cannot approve the bill even with Override owner bill approval .

 For more information, refer to Control User Access .

 Set Up Owner Bill Approval

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set up owner bill approval, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Owner Settings .

 -
 Check Enable owner bill approval .

 -
 Click Save .
Owner bill approval is enabled and the Owner Apv column is added to the Pay Bills page.

 Customize Owner Bill Approval by Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 After you have enabled owner bill approval at the system level, you can then enable it by property. Even if it is enabled at the system level, owners are only prompted to approve bills if it is also enabled on the property level.

 To enable owner bill approval for a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property. Then on the action bar, click arrow_forward Owners .
The property's Owners page displays.

 -
 Check Require owners to approve bills .

 -
 In the Threshold Amount field, enter the minimum dollar amount that needs owner approval before it can be paid. For example, if the owner needs to approve all bills that total $400 or more, enter 400 .

 -
 Click Save .
The owner now will now receive an email notification to approve any bills that meet or exceed the threshold amount.

 More Information

 In order for an owner to receive email notifications for bills that need approval, their email address must be added to their owner account in the Email Address field. For more information, refer to Owner Details (Page) .
