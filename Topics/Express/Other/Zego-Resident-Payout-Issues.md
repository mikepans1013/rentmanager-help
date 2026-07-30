# Check Resident Payout Issues

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Zego-Resident-Payout-Issues.htm

The Resident Payout Issues page helps you investigate and resolve issues that occur when the Zego Resident Payout feature is used to process security deposit refunds to tenants. Issues typically occur when the refunded security deposits are unable to be posted or recorded in Rent Manager or if the Resident Payout cannot be sent to the tenant.

 This page lists each issue that is recorded and displays its relevant information regarding the security deposit refund. Each issue should be manually reviewed and corrected as necessary. The workflows required to fix each issue vary depending on the issue's type. For more information on Zego Resident Payout, refer to Zego Resident Payout .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Set up and perform ePay operations
 Enabled

 Receivables
 Refund security deposits with a check
 Enabled

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 The following columns display:

 Column
 Description

 Amount

 The total dollar amount associated with the security deposit refund.

 Bank Account

 The general ledger (GL) bank account selected to receive the security deposit refund when the refund was processed.

 Date

 The date on which the Resident Payout security deposit refund was processed.

 Payee

 The name of the recipient of the Resident Payout security deposit refund.

 Property

 The short name of the property associated with the tenant receiving the security deposit refund.

 Rent Manager Payment Reference ID

 The unique identification number associated with the Resident Payout security deposit refund created by Rent Manager when the payout request was sent to Zego . If the Zego Payout ID column does not display, this column is named Payment Reference ID .

 Zego Payout ID

 The unique identification number associated with the Resident Payout security deposit refund assigned by Zego . If this column does not display, contact Zego using the issue's Payment Reference ID to retrieve its Zego Payout ID.

 Resolve Resident Payout Issues

 The workflow for resolving each Resident Payout issue varies depending on the issue. The issue can be resolved by posting the refund check in Rent Manager , resubmitting the Resident Payout refund to Zego , or updating the refund check's allocations when the refund amount does not match the security deposit held.

 Resolve a Post Payout Issue

 If the Resident Payout issue is a refund for the entire amount of the held deposit and has been initiated with Zego , but the transaction record is missing in Rent Manager , the Resident Payout issue can be resolved by posting the payment.

 To resolve a Resident Payout issue by posting the payment, go to   arrow_forward Accounting arrow_forward ePay arrow_forward Resident Payout Issues and select the issue you wish to resolve. Then select one of the following options to resolve the issue:

 Option
 Description

 Post Payment

 Post the security deposit refund and remove the Resident Payout issue record from the list.

 Save for Later

 Closes the Post Payout pop-up without posting the refund or removing the issue record from the list, so the issue can be revisited at a later time.

 Dismiss Issue

 Removes the Resident Payout issue from the list without posting the refund. Contact Zego before removing the issue to confirm it is the best course of action.

 Resolve a Failed Refund Issue

 If Zego does not have a matching record for the security deposit refund, the process to submit the refund must be re-initiated.

 To resolve a Resident Payout Issue by resubmitting the refund, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward ePay   arrow_forward Resident Payout Issues and select the issue you wish to resolve.
The Refund Security Deposit pop-up displays.

 -
 Review and update the information about the refund as necessary. For more information, refer to Refund a Security Deposit .

 -
 Select one of the following options to resolve the issue:

 Option
 Description

 Submit

 Initiates the security deposit refund process via Zego  again and removes the Resident Payout issue from the list.

 Save for Later

 Closes the Refund Security Deposit pop-up without submitting the refund or removing the issue record from the list, so the issue can be revisited at a later time.

 Dismiss Issue

 Removes the Resident Payout issue from the list without submitting the refund. Contact Zego before removing the issue to confirm it is the best course of action.

 Resolve a Payout Allocations Issue

 If the dollar amount of the Resident Payout does not match the deposit amount held, the refund allocations must be updated so that the full held deposit amount is allocated to charges and/or the tenant and there is no amount remaining in the Refund Totals section's Left field.

 To resolve a Resident Payout Issue, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward ePay arrow_forward Resident Payout Issues and select the issue you wish to resolve.
The Refund Security Deposit pop-up displays.

 -
 In the Charge Type section, ensure the Amount to Refund column is equal to the Amount Held column. If the Resident Payout issue has an interest value recorded, the calculated interest is included in the Amount Held column of its associated Charge Type .

 -
 In the Apply to Current Charges and Apply to New Charges sections, ensure the refund amount allocations are correctly applied to open or new charges. If applicable, automatically apply the full amount to all open charges by clicking Auto Allocate . The sum of the Amount Returned to Tenant and all charge allocations must equal the full held deposit and any applicable interest.

 -
 Select one of the following options to resolve the issue:

 Option
 Description

 Post

 Posts the security deposit refund with the updated allocations and removes the Resident Payout issue from the list.

 Save for Later

 Closes the Refund Security Deposit pop-up without posting the refund or removing the issue record from the list, so the issue can be revisited at a later time.

 Dismiss Issue

 Removes the Resident Payout issue from the list without posting the refund. Contact Zego before removing the issue to confirm it is the best course of action.
