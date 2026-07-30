# Create Renewal Offers with Rent Increase Approval

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Lease-Renewal-Offers-Rent-Increase-Approval.htm

The Create Renewal Offers page allows you to view and filter tenants with upcoming expiring leases, renew recurring rent charges, create renewal offers, and notify the tenant of the renewal offer. You can also choose the lease term(s) options you want to provide and set an expiration date so renewals are completed promptly.

 More Information

 Lease renewals are generated only for residential leases, so any leases marked as a Commercial Lease do not generate lease renewals.

 Related Preferences

 The workflow for creating renewal offers differs depending on whether or not the Require approval of renewal rent increases before sending offer option option is enabled in system preferences. The workflow in this topic is applicable if the option is enabled.

 To create renewal offers when rent increase approval is not enabled, refer to Create Renewal Offers .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Lease Renewal Offers
 Add, View

 For more information, refer to Control User Access .

 Step 1: Select Tenants

 More Information

 Before generating renewal offers for your tenants, ensure that all renewal rent increases are set and approved for those tenants first. For more information, refer to Set Renewal Rent Increase .

 To create new renewal offers and select the recipient(s) to receive those offers, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Create Renewal Offers .

 More Information

 You can also create individual renewal offers from the each tenant's details page. On the Leases tile, select arrow_forward Create Renewal Offer . When creating renewals in this way, the Select Tenants tab is replaced by the Select Rent Charge Types tab.

 -
 In the Select Properties drop-down list, check each property whose tenants you wish to create renewal offers for.

 -
 In the Find Tenants section, filter the listed tenants using the available options.

 Field
 Description

 Leases Expiring Within

 The earliest ( From ) and latest ( To ) lease expiration date to include tenants with expiring leases in that date range.

 Current Lease Term

 The duration(s) of the current lease(s) with set renewal increases. To include tenants without a defined lease term, select <No Lease Term> . For more information, refer to Lease Terms (Page) .

 Unit Type

 The assigned category for the tenant's currently leased unit or rentable asset.

 User Defined Field

 A tenant-type user-defined field (UDF) and corresponding User Defined Value .

 Include tenants without approved rent increases

 If checked, tenants with set renewal increases that are not yet approved display. These tenants cannot be selected for renewal offers until their increases are approved.

 -
 In the Selected (X) section, select the tenant(s) that you are offering a lease renewal.

 -
 Click Next .
 The Choose Term Offers tab displays.

 Step 2: Choose Term Offers

 On the Choose Term Offers tab, select the lease term(s) you wish to allow tenants to choose. Rent charges cannot be modified during this process and always use the set renewal increase rates. If you have tenants with multiple lease terms, a drop-down displays for each term with associated tenants listed (e.g., Current Term: 12 Months ).

 At the top, select one of the available options for the term(s) you are offering.

 Option
 Description

 Offer Current Term

 Generated lease renewal offer(s) allow the tenant(s) to choose only the lease term associated with their existing lease.

 Offer New Term

 Allows users to select a different lease term for the generated lease renewal offer(s). The recipient(s) can choose only the selected lease term.

 Offer Multiple Terms

 Allows users to select one or more lease terms for the generated lease renewal offer(s). The recipient(s) can choose from one of the selected lease terms.

 Once you select the offered lease term(s), click Next to proceed to the Modify Additional Charges tab.

 Step 3: Modify Additional Charges

 On the Modify Additional Charges tab, if the recipient has active non-rent recurring charges, you can also make adjustments to those charges in the Additional Recurring Charges section. In the One-time Charges section, you can add one-time charges associated with the recipient's lease renewal offer by clicking Add One-Time Charge .

 Additional Recurring Charges

 The following columns are available on the Additional Recurring Charges section.

 Column
 Description

 Charge Type

 The charge type associated with the additional recurring charge. This field is read-only for existing recurring charges.

 Charge Adjustment

 The method used to modify the additional recurring charge. This column is available only when modifying active non-recurring rent charges.

 No Increase

 Do not increase the additional recurring charge(s) for this renewal.

 Increase by Amount

 Increase the additional recurring charge(s) by a specific dollar amount for this renewal.

 Increase by Set Percent

 Increase the additional recurring charge(s) by a set percentage for this renewal.

 Specific Amount

 A full dollar amount is used for the additional recurring charge(s) for this renewal.

 Amount

 The dollar amount to use for the additional recurring charge.

 New Comment

 An optional note explaining the additional recurring charge. To select a memorized comment, click .

 One-Time Charges

 The following columns are available on the One-Time Charges section.

 Column
 Description

 Charge Type

 The charge type associated with the one-time charge.

 Unit Type

 The unit types available for the selected renewal offers.

 Amount

 The dollar amount to use for the one-time charge.

 New Comment

 An optional note explaining the one-time charge. To select a memorized comment, click .

 Once you have established the charges and/or adjustments, click Next to proceed to the Review Offers tab.

 More Information

 Recurring charges that are inherited from the property, unit, or unit type cannot be modified during the renewal offer creation process. If property-, unit-, or unit type–level recurring charges need to be changed for a lease, this should be done before generating lease renewal offers. For more information, refer to Property Recurring Charges (Pop-Up) , Unit-Level Recurring Charges (Pop-Up) , and Unit Type-Level Recurring Charges (Pop-Up) .

 Step 4: Review Offers

 On the Review Offers tab, verify the lease renewal offer information and address any alerts that display. To view and/or modify renewal offer information and charges, click Open Detailed View to display the Renewal Offer Details pop-up. For more information, refer to Lease Renewal Offer Details (Pop-Up) .

 Column
 Description

 (Alert)

 If there are any alerts for the tenant's lease renewal offer, click to open the Alerts pop-up and review the message(s). If you need to make corrections to address any of the alert messages, click Cancel and make the necessary changes and return to the lease renewal process afterward. If no corrections are needed, click Dismiss .

 Name

 The tenant's name, along with the property and unit associated with their current lease.

 Lease End

 The end date for the tenant's current lease.

 Current Term

 The tenant's current lease term.

 Current Rent

 The total amount of active recurring rent charges on the tenant's current lease.

 Lease Term(s)

 A column displays for each lease term included on the generated renewal offer(s).

 Current Additional

 The total amount of active non-rent recurring charges on the tenant's current lease.

 New Additional

 The total amount of non-rent recurring charges included on the lease renewal offer.

 Once you confirm that the lease renewal offers are correct, click Next to proceed to the Send Offers tab.

 Step 5: Send Offers

 On the Send Offers tab, select the delivery method to use when distributing renewal offers to the recipient(s). Depending on the delivery method, different fields are available.

 To send the renewal offer(s) to each selected recipient, do the following:

 -
 In the Send Offers section, select the desired Delivery Method from the drop-down list.

 More Information

 This section is titled Publish Document to TWA if, on the Choose Term Offers tab, you selected the Offer Multiple Terms . Multiple term offers can be processed only via Tenant Web Access (TWA) . You can choose to send any signable documents at a later time ( Publish Later ), send them immediately ( Publish Now ), or, if you use Blue Moon for lease documents, Send Blue Moon document later . For more information, refer to Blue Moon .

 Option
 Description

 Publish Signable Documents

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View, Edit

 Tenant templates/packets
 View, Edit

 Publish document packets
 Enabled

 Signable templates
 View

 Additionally, on the Communication tab, you must have access to the desired signable template(s).

 For more information, refer to Control Letter / Email Template Access .

 Select a lease renewal signable template or document packet in the Document drop-down list to send each offer recipient via Tenant Web Access (TWA) .

 Write Letters

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View, Edit

 Tenant templates/packets
 View, Edit

 Additionally, on the Communication tab, you must have access to the desired letter template(s).

 For more information, refer to Control Letter / Email Template Access .

 Select a lease renewal letter template in the Document drop-down list to send each offer recipient.

 Create Document Packet

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View, Edit

 Tenant templates/packets
 View, Edit

 Publish document packets
 Enabled

 Additionally, on the Communication tab, you must have access to the desired document packet(s).

 For more information, refer to Control Letter / Email Template Access .

 Select a document packet from the Document Packet Name drop-down list to send each offer recipient.

 Compose Email

 Related Privileges

 Group
 Privilege
 Column

 System
 Compose Email
 Enabled

 For more information, refer to Control User Access .

 Send an email to each offer recipient.

 -
 In the Offer Expiration section, select the duration of time before the renewal offer recipient(s) can no longer sign the generated offer.

 Option
 Description

 No Expiration Date

 The lease renewal offer does not expire.

 Current Lease Expiration

 The lease renewal offer expires the same day as the Lease End date for each recipient's current lease.

 In X Days

 The lease renewal offer expires in the number of days entered in the Days field.

 X Days before Lease Expiration

 The lease renewal offer expires in the number of days entered in the Days field, relative to the Lease End date for each recipient's current lease. For example, if a tenant's current lease expires on 5/29/ 2026 and you enter 7 in the Days field, the tenant can sign the renewal until 5/22/ 2026 .

 -
 If, in the Delivery Method field, you selected Publish Signable Documents or Create Document Packet , an additional section displays at the bottom of the page. Each section is described below.

 Option
 Description

 Publish Signable Documents

 The Offer Recipients section displays filtering options and a list of tenant contacts. Select each contact that needs to complete the selected signable document(s).

 More Information

 If a signer does not have an email address entered on the tenant account's View Contacts pop-up, they cannot view or sign the document in TWA. The offer is still added to the Lease Renewal Board and can be manually published from that page. For more information, refer to Lease Renewal Board (Page) .

 Contact Types Filter

 The tenant contact type(s) to include in the list of signers.

 Applicant Types Filter

 The application type(s) to include in the list of signers.

 Recipient Message

 A comment that the recipient can view in TWA when accessing the document.

 Landlord Signature (sign by manager before publishing)

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Sign document packets
 Enabled

 For more information, refer to Control User Access .

 Sign the document before sending it to each recipient. The signature populates with the First Name and Last Name entered on your Rent Manager user account.

 Warning

 It is recommended to leave this option unchecked until the document has been signed by the recipient(s), as it becomes legally binding with both the landlord and recipient(s) signatures.

 Create Document Packets

 The Lease Renewal Packet Documents section displays each letter and/or signable template included in the document packet. All documents are included by default, but you can deselect the document(s) you do not wish to send.

 -
 Click Create or Next .
The lease renewal offer is created and can be viewed on the Lease Renewal Board .
