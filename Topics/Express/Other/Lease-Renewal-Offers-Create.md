# Create Renewal Offers

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Lease-Renewal-Offers-Create.htm

The Create Renewal Offers page allows you to view and filter tenants with upcoming expiring leases, renew recurring rent charges, create renewal offers, and notify the tenant of the renewal offer. You can also choose the lease term(s) options you want to provide so the tenant can select which term they'd like to renew for and set an expiration date so renewals are completed promptly.

 More Information

 Lease renewals are generated only for residential leases, so any leases marked as a Commercial Lease do not generate lease renewals.

 Related Preferences

 The workflow for creating renewal offers differs depending on whether or not the Require approval of renewal rent increases before sending offer option option is enabled in system preferences. To create renewal offers when rent increase approval is required, refer to Create Renewal Offers with Rent Increase Approval .

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

 To create new renewal offers and select the recipient(s) to receive those offers, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Create Renewal Offers .

 More Information

 You can also create individual renewal offers from the each tenant's details page. On the Leases tile, select arrow_forward Create Renewal Offer . When creating renewals in this way, the Select Tenants tab is replaced by the Select Rent Charge Types tab.

 -
 In the Select Properties drop-down list, check each property whose tenants you wish to create renewal offers for.

 -
 In the Select Rent Charge Type drop-down list, select the rent charge type you are updating. Only one charge type can be updated at a time.

 -
 If applicable, uncheck Include Rentable Assets and Other Rentable Items . When checked, the Modify Additional Leased Items tab is included in the workflow and renewals for primary units are bundled with renewals for ORI units and rentable assets in a single offer.

 More Information

 This field displays only if at least one selected tenant leases an asset or other rentable item (ORI) with a recurring charge type that differs from the type selected in the Select Rent Charge Type field. For example, if the tenant leases an apartment unit with a rent recurring charge type RC and a parking space ORI with the recurring charge type PARK , and RC is selected in the Select Rent Charge Type field, the Include Rentable Assets and Other Rentable Items field displays.

 -
 In the Find Tenants section, filter the listed tenants using the available options.

 Field
 Description

 Leases Expiring Within

 The earliest ( From ) and latest ( To ) lease expiration date to include tenants with expiring leases in that date range.

 Current Lease Term

 The duration(s) of the current lease(s) with set renewal increases. To include tenants without a defined lease term, select <No Lease Term> . For more information, refer to Lease Terms (Page) .

 Unit Type

 The assigned category for the tenant's currently leased unit.

 User Defined Field

 A tenant-type user-defined field (UDF). Tenants with the corresponding value in the User Defined Value field are included.

 -
 In the Selected (X) section, select the tenant(s) that you are offering a lease renewal.

 -
 Click Next .
The Choose Term Offers tab displays.

 Step 2: Choose Term Offers

 When approval is not required for renewal rent increases, rent charge adjustments can be made for tenants with or without a set renewal rent increase. The available fields for adjusting rent and/or lease terms vary depending on the selected option. Each option is described below.

 Once you have established the desired options, click Next to proceed to the Modify Additional Leased Items or Modify Additional Charges tab.

 Offer Current Term

 If you select Offer Current Term , the following fields are available in the Adjust Rent section.

 Field
 description

 Rent Increase

 The method and amount used to modify the rent charge(s) for each renewal offer.

 No Increase

 Do not increase the renewal rent charge(s).

 Increase by Amount

 Increase the renewal rent charge(s) by a specific dollar amount.

 Increase by Percent

 Increase the renewal rent charge(s) by a set percentage.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s), which is entered in the Amount field.

 Calculation

 A scripted formula to calculate the new renewal rent charge(s), which is entered in the Amount field. To open the Script Builder for scripting assistance, click .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s). For more information, refer to Unit Market Rent (Pop-Up) and Asset Market Rent (Pop-Up) , respectively.

 Rent Charge Comment

 An optional note to add to the recurring rent charge(s) for each renewal offer.

 Override tenants with set increases

 If checked, the options selected in this section supersede any set renewal rent increase amounts. Otherwise, the options selected in this section affect only tenants without set renewal rent increases.

 Offer New Term

 If you select Offer New Term , the following fields are available in the Adjust Rent and Select a Term section.

 Field
 Description

 Rent Increase

 The method and amount used to modify the rent charge(s) for each renewal offer.

 No Increase

 Do not increase the renewal rent charge(s).

 Increase by Amount

 Increase the renewal rent charge(s) by a specific dollar amount.

 Increase by Percent

 Increase the renewal rent charge(s) by a set percentage.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s), which is entered in the Amount field.

 Calculation

 A scripted formula to calculate the new renewal rent charge(s), which is entered in the Amount field. To open the Script Builder for scripting assistance, click .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s).

 Rent Charge Comment

 An optional note to add to the recurring rent charge(s) for each renewal offer.

 Override tenants with set increases

 If checked, the options selected in this section supersede any set renewal rent increase amounts. Otherwise, the options selected in this section affect only tenants without set renewal rent increases.

 Terms

 The desired lease term to offer the selected tenant(s).

 Offer Multiple Terms

 If you select Offer Multiple Terms , there are three options available for how the lease renewal offer's rent is adjusted:

 -
 To make a uniform rent adjustment for all offered lease terms, select Increase same amount for each term .

 -
 To customize rent adjustments for each offered lease term, select Increase different amounts for each term .

 -
 To utilize the rent offset amount established for each offered lease term, select Use Rent Offset . For more information, refer to Lease Term Rent Offset (Pop-Up) .

 More Information

 Providing multiple lease terms for renewal offers are available only for users with Tenant Web Access (TWA) who use signable documents for completing renewals.

 The following fields are available in the Adjust Rent and Select Terms section.

 Field
 description

 Rent Increase

 The method and amount used to modify the rent charge(s) for each renewal offer, which is applied to all selected lease terms.

 This field displays only if Increase same amount for each item is selected.

 No Increase

 Do not increase the renewal rent charge(s).

 Increase by Amount

 Increase the renewal rent charge(s) by a specific dollar amount, which is entered in the Amount field.

 Increase by Percent

 Increase the renewal rent charge(s) by a set percentage.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s), which is entered in the Amount field.

 Calculation

 A scripted formula to calculate the new renewal rent charge(s), which is entered in the Amount field. To open the Script Builder for scripting assistance, click .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s).

 Current Term Rent Increase

 The method and amount used to modify the rent charge(s) for each recipient's current lease term. Other lease terms use the rent offset amount established on the Lease Term details page, and can be viewed in the Offset Amount column. For more information, refer to Lease Term Rent Offset (Pop-Up) .

 This field displays only if Use Rent Offset is selected.

 No Increase

 Do not increase the renewal rent charge(s).

 Increase by Amount

 Increase the renewal rent charge(s) by a specific dollar amount, which is entered in the Amount field.

 Increase by Percent

 Increase the renewal rent charge(s) by a set percentage.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s), which is entered in the Amount field.

 Calculation

 A scripted formula to calculate the new renewal rent charge(s), which is entered in the Amount field. To open the Script Builder for scripting assistance, click .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s).

 Rent Charge Comment

 An optional note to add to the recurring rent charge(s) for each renewal offer.

 Override tenants with set increases

 If checked, the options selected in this section supersede any set renewal rent increase amounts. Otherwise, the options selected in this section affect only tenants without set renewal rent increases.

 Term(s)

 The desired lease term(s) to offer the selected tenant(s). The columns available in this section differ depending on the selected adjustment option.

 Rent Adjustment

 If Increase different amounts for each term is selected, you must establish rent adjustment options for each selected lease term.

 No Increase

 Do not increase the renewal rent charge(s) for this lease term.

 Increase by Amount

 Increase the renewal rent charge(s) for this lease term by a specific dollar amount, which is entered in the Amount field.

 Increase by Percent

 Increase the renewal rent charge(s) for this lease term by a set percentage.

 New Amount

 A full dollar amount is used for the lease term's new renewal rent charge(s), which is entered in the Amount column.

 Calculation

 A scripted formula to calculate the lease term's new renewal rent charge(s), which is entered in the Amount column by clicking Open Script Builder .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s).

 Step 3: Modify Additional Leased Items

 On the Modify Additional Leased Items tab, you can update rent increases for lease terms associated with assets and other rentable items (ORI).

 The available fields on this tab are the same as those available for the term offer you select on the Choose Term Offers tab. For example, if you select Offer New Term , the selected term also applies to asset and ORI leases. For the new asset or ORI term, you can select a Rent Increase , Amount , and Rent Charge Comment .

 Once you have added any additional charges, click Next to proceed to the Modify Additional Charges tab.

 More Information

 This tab displays only if, on the Select Tenants tab, the option Include Rentable Assets and Other Rentable Items is checked.

 Field
 description

 Rent Increase

 The method and amount used to modify the rent charge(s) for each renewal offer.

 No Increase

 Do not increase the renewal rent charge(s).

 Increase by Amount

 Increase the renewal rent charge(s) by a specific dollar amount, which is entered in the Amount field.

 Increase by Percent

 Increase the renewal rent charge(s) by a set percentage which is entered in the Amount field.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s), which is entered in the Amount field.

 Calculation

 A scripted formula to calculate the new renewal rent charge(s), which is entered in the Amount field. To open the Script Builder for scripting assistance, click .

 Use Market Rent

 The current market rent value for the associated unit(s) and/or asset(s) is used for any renewal rent charge(s).

 Rent Charge Comment

 An optional note to add to the recurring rent charge(s) for each renewal offer.

 Override tenants with set increases

 If checked, the options selected in this section supersede any set renewal rent increase amounts. Otherwise, the options selected in this section affect only tenants without set renewal rent increases.

 Step 4: Modify Additional Charges

 On the Modify Additional Charges tab, you can add one-time transactions by clicking Add Charge and entering information in the available columns. Additionally, you can update other recurring charges associated with the tenant's lease.

 Once you have added any additional charges, click Next to proceed to the Review Offers tab.

 Additional Recurring Charges

 The following fields are available for existing recurring charges.

 Field
 Description

 Charge Adjustment

 The method and amount used to modify the additional recurring charges(s).

 Increase by Amount

 Increase the additional recurring charge by a set dollar amount which is entered in the Amount field.

 Increase by Set Percent

 Increase the additional recurring charge by a set percentage which is entered in the Amount field.

 No Increase

 Do not increase the additional recurring charge.

 Specific Amount

 Set a new dollar amount for the additional recurring charge which is entered in the Amount field.

 New Comment

 An optional note for the additional recurring charge. To select a memorized comment, click .

 One-Time Charges

 The following fields are available for one-time charges.

 Field
 Description

 Amount

 The dollar amount for the one-time transaction.

 Charge Type

 The charge type for the one-time transaction.

 New Comment

 An optional note for the one-time transaction. To select a memorized comment, click .

 Unit Type

 The unit type to apply the one time-transaction to.

 Step 5: Review Offers

 On the Review Offers tab, verify the lease renewal offer information and address any alerts that display. To view and/or modify renewal offer information and charges, click Open Detailed View to display the Renewal Offer Details pop-up. For more information, refer to Lease Renewal Offer Details (Pop-Up) .

 Column
 Description

 (Alert)

 If there are any alerts for the tenant's lease renewal offer, click to open the Alerts pop-up and review the message(s). If you need to make corrections to address any of the alert messages, click Cancel and make the necessary changes and return to the lease renewal process afterward. If no corrections are needed, click Dismiss .

 Current Additional

 The total amount of active non-rent recurring charges on the tenant's current lease.

 Current Rent

 The total amount of active recurring rent charges on the tenant's current lease.

 Current Term

 The tenant's current lease term.

 Lease End

 The end date for the tenant's current lease.

 Lease Term(s)

 A column displays for each lease term included on the generated renewal offer(s).

 Name

 The tenant's name, along with the property and unit associated with their current lease.

 New Additional

 The total amount of non-rent recurring charges included on the lease renewal offer.

 Once you confirm that the lease renewal offers are correct, click Next to proceed to the Send Offers tab.

 Step 6: Send Offers

 On the Send Offers tab, select the delivery method to use when distributing renewal offers to the recipient(s). Depending on the delivery method, different fields are available.

 To send the renewal offer(s) to each selected recipient, do the following:

 -
 In the Send Offers section, select the desired Delivery Method from the drop-down list.

 More Information

 This section is titled Publish Document to TWA if, on the Choose Term Offers tab, you selected the Offer Multiple Terms . Multiple term offers can be processed only via Tenant Web Access (TWA) . You can choose to send any signable documents at a later time ( Publish Later ), send them immediately ( Publish Now ), or, if you use Blue Moon for lease documents, Send Blue Moon document later . For more information, refer to Blue Moon .

 Option
 Description

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

 Send Email

 Related Privileges

 Group
 Privilege
 Column

 System
 Compose Email
 Enabled

 For more information, refer to Control User Access .

 Send an email to each offer recipient.

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

 -
 In the Offer Expiration section, select the duration of time before the renewal offer recipient(s) can no longer sign the generated offer.

 Option
 Description

 Current Lease Expiration

 The lease renewal offer expires the same day as the Lease End date for each recipient's current lease.

 In X Days

 The lease renewal offer expires in the number of days entered in the Days field.

 No Expiration Date

 The lease renewal offer does not expire.

 X Days before Lease Expiration

 The lease renewal offer expires in the number of days entered in the Days field, relative to the Lease End date for each recipient's current lease. For example, if a tenant's current lease ends on 5/29/ 2026 and you enter 7 in the Days field, the tenant can sign the renewal until 5/22/ 2026 .

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
