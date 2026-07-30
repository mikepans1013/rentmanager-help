# Tenant Lease Financial Responsibility

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Lease-Financial-Responsibility.htm

If a tenant breaks their lease and moves out of the unit prior to the Lease End date specified for their lease, some states allow property owners to hold the tenant(s) financially responsible for the remainder of their charges for the lease term. Depending on state laws, these charges usually end either when the tenant's original Lease End date has passed or a new tenant is found to occupy the unit, whichever comes first.

 You can enable financial responsibility in Rent Manager to warn you when a tenant breaks their lease. This allows you to assess the remainder of their charges and any additional fees, and also provides the flexibility to delete charges if needed. This topic guides you through how to set up financial responsibility in Rent Manager and how to use it most effectively.

 Step 1: Enable Financial Responsibility in System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To hold tenants financially responsible for breaking their lease, you must first enable the setting in system preferences by doing the following:

 -
 Go to arrow_forward Administration , then select Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward General .

 -
 Check the option to Prompt to charge unposted recurring charges upon broken lease .

 -
 Click Save .
For any property in the database, a warning displays when a Move Out date is entered on a lease and that date falls before the Lease End date.

 Step 2: Assess Charges When a Lease is Broken

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Modify tenant movein/moveout dates
 Enabled

 Confirm move out
 Enabled

 Receivables
 Tenant Transactions
 Add

 History
 Tenant History/Notes
 Add

 For more information, refer to Control User Access .

 If a tenant is moved out of the unit in Rent Manager , either by manually entering the Move Out date on the tenant's details page or by using the Move Out wizard before the lease was set to end, a pop-up displays asking the user if they wish to post the remaining recurring charges for the tenant. For more information, refer to Move Out Wizard .

 Related Preferences

 If you have the option to Require move out confirmation to stop recurring charge posts enabled as well, the prompt triggers when the move out is confirmed. For more information, refer to General Options (System Preferences) .

 To charge a tenant for the remainder of the recurring charges for their lease term, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select the tenant to move out.
The tenant's details page displays.

 -
 On the Leases tile header, do one of the following:

 Option
 Description

 Move Out Wizard

 Click Move Out to initiate the Move Out wizard. If the tenant has multiple leases, the Select Lease(s) pop-up displays and prompts you to select which lease(s) to move out. For more information, refer to Move Out Wizard .

 Manual Move Out

 Click to open the tenant's leases. On the View Leases pop-up, select the lease to view its details page. In the Move Out field, enter the date on which the tenant vacated the unit.

 -
 Click either Move Out on the Move Out wizard or Save on the Lease Details page.

 -
 On the Financially Responsible pop-up, click Yes to review the recurring charges to post to the tenant's account. Click No if you do not want to post the charges to their account, and a history/note item is added to the tenant account stating Financially Responsible - Unposted recurring charges not posted .

 -
 If you chose Yes to hold the tenant responsible, review the recurring charges to be charged to the tenant's account. To add any additional charges, click Add Charge . To remove a charge from the list, click arrow_forward Delete for the associated charge. For more information, refer to Add a One-Time Charge .

 -
 Click Save .
The charges are added to the tenant account's transactions list. Additionally, a history/note item is added to the account stating Financially Responsible - Unposted recurring charges posted . If the recurring charges were edited before posting, the note instead states Financially Responsible - Unposted recurring charges modified before posted .

 More Information

 If another tenant is moved into the unit before the previous tenant's Lease End date, Rent Manager displays the following warning:

 Review the transactions on the tenant account that previously occupied the unit to determine whether any of the penalty charges need to be deleted or credited. For more information, refer to Tenant Transactions (Pop-Up) .
