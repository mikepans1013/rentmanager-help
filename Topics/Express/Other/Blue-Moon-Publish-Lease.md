# Publish a Blue Moon Lease

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Blue-Moon-Publish-Lease.htm

Blue Moon is a software from the National Apartment Association (NAA) that provides industry-standard leasing documents that are compliant with your state and/or industry association (e.g., NAA, TAA, GAA, AANC). Blue Moon can be integrated with Rent Manager to export your tenant and prospect information directly into Blue Moon leasing documents. Your contract with Blue Moon determines which leasing documents are available for you to generate. You can create these Blue Moon leases in Rent Manager and then send them electronically for tenants or prospects to sign.

 More Information

 In order to use Blue Moon to generate leasing documents and create leases, you must first purchase a license(s) from the NAA , then enable and configure your Blue Moon integration. For more information, refer to Set Up Blue Moon .

 Related Privileges

 Group
 Privilege
 Column

 Blue Moon

 Create lease
 Enabled

 Edit fields during lease creation
 Enabled

 Override Blue Moon default values in Other Fields
 Enabled

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 For more information, refer to Control User Access .

 Step 1: Create a Lease

 You can generate a Blue Moon lease for prospects or tenants in your database. To generate a Blue Moon lease, do the following:

 -
 Navigate to the desired entity and start the lease creation using the table below.

 Entity
 Navigation

 Prospect

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects . For the prospect receiving the lease document, click arrow_forward Blue Moon : Create Lease .

 Tenant

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant. Then on the Leases tile, click .

 -
 In the Calculated Fields tile, review the fields below. These fields pull information directly from Rent Manager , but you can edit the fields as needed.

 Field
 Description

 Address

 The street address marked as Default for the unit, as specified on the unit's details page in the Addresses tile. The city, state, and zip code populate from Blue Moon based on the serial number and property ID entered on the associated property's user-defined fields.

 Late Charge Daily

 The daily late fees charged to the tenant for overdue charges, as specified on the property's Late Fees pop-up in the Per Day Options section in the Amount field. If this amount is overridden on the tenant level, the per-day Amount pulls from the tenant's Late Fees pop-up.

 Late Charge Initial

 The fixed late fee charged to the tenant for overdue charges, as specified on the property's Late Fees pop-up in the Fixed Amount field. If this amount is overridden on the tenant level, the Fixed Amount pulls from the tenant's Late Fees pop-up.

 Late Charge Percent

 The percentage to charge the tenant in late fees for overdue charges, as specified on the property's Late Fees pop-up in the Percent field. If this amount is overridden on the tenant level, the Percent pulls from the tenant's Late Fees pop-up.

 Lease End

 The final date of the lease before it expires. For tenants, this date is specified on their lease's details pop-up in the Lease End field. For prospects, this date is specified on their prospect details page in the Expected Lease End field.

 Lease Start

 The date on which the lease begins. For tenants, this date is specified on their lease's details pop-up in the Lease Start field. For prospects, this date is specified on their prospect details page in the Expected Lease Start field.

 Rent

 The dollar amount charged in rent based on the unit's current market rent value, as specified on the unit's View Market Rent pop-up in the Amount column for the most recent date.

 Security Deposit

 The dollar amount held for the security deposit, as specified on the tenant's details page in the Security Deposit field, or on the prospect's details page in the Security Deposit Held field.

 Unit Number

 The name of the unit, as specified on the unit's details page in the Name field.

 -
 In the Residents/Occupants tile in the according Resident # and Occupant # fields, select the contact(s) on the account who are signing the lease and/or living in the unit.

 More Information

 The contacts available to select in each of these fields are determined by your contact type settings for Blue Moon in system preferences. For more information, refer to Blue Moon General (System Preferences) .

 Field
 Description

 Resident #

 Designates the tenant/prospect contact(s) that are signing the Blue Moon lease.

 Occupant #

 Designates the tenant/prospect contact(s) that are living in the rental unit but are not signing the Blue Moon lease.

 - If the contacts selected as a Resident # need to electronically sign the lease, check Request eSignature .

 -
 Click Next .

 Step 2: Select Forms

 The form selection pages vary depending on whether or not you checked Request eSignature on the previous page.

 eSignature Requested

 If you checked Request eSignature , do the following:

 -
 In the eSign Forms tile, check each Blue Moon form you wish to send for the tenant or prospect to sign electronically.

 -
 Click Next .

 -
 In the Printed Forms tile, check each Blue Moon form you wish to print out for the tenant or prospect that does not need an electronic signature.

 -
 Click Next .

 No eSignature

 If you did not check Request eSignature , in the Forms tile, check each Blue Moon form you wish to print out for the tenant or prospect that does not need an electronic signature. Then click Next .

 Step 3: Set Other Fields

 In the Other Fields tile, a list of all the required Blue Moon fields for the selected forms displays. Any fields that are mapped in system preferences and pull a value from that mapped field also display. In the Value column, the value of the mapped Rent Manager field or user-defined field displays.

 To verify your Blue Moon data fields, do the following:

 -
 In the Other Fields tile, review the fields to ensure fields are pulling the correct information. If any fields are incorrect, enter the correct data.

 More Information

 The information that populates in the Value column is based on your Blue Moon field mapping settings in system preferences. For more information, refer to Blue Moon Form & Fields Setup (System Preferences) .

 -
 To add a non-required Blue Moon field that does not currently have any mapped data, click Add Field .

 Fields already included in the Other Fields tile display a read-only checkmark.

 -
 Check the field(s) you wish to enter information for on the Blue Moon lease and click Add .
The pop-up closes and the fields are added to the Other Fields tile.

 -
 Enter data in any remaining blank fields.

 -
 Click Next .

 More Information

 If the option Request eSignature is unchecked, this is the final page of the Blue Moon lease creation pop-up. Click Create to complete generating the lease. Otherwise, proceed to the next step for configuring the eSignature.

 Step 4: Fill Out eSignature Information

 If the option Request eSignature was checked, this is the final step of the Blue Moon lease creation process.

 To configure your eSignature information, do the following:

 -
 In the Resident eSignature Info tile, enter the following information for each resident on the lease:

 Field
 Description

 Delivery Method

 Whether the resident wishes to receive the lease information and submit their signature via Email or Text Message .

 Email

 If Email is the selected delivery method, enter the resident's email address to receive the Blue Moon lease. The email that populates by default is pulled from the contact's Email field.

 Phone

 If Text Message is the selected delivery method, enter the resident's text-enabled phone number to receive the Blue Moon lease. The phone number that populates by default is pulled from the contact's Phone Numbers tile. The phone number marked as Default displays if it also has T checked to indicate it is text enabled. Otherwise, the first text-enabled number listed on the tile displays.

 -
 In the Owner/Representative eSignature Info tile, the contact information for the property owner or representative populates from the Blue Moon portal's general settings. If needed, edit the information as needed.

 Field
 Description

 Email

 The primary email address of the property owner or representative.

 Name

 The full name of the property owner or representative overseeing the lease.

 Phone

 The primary phone number of the property owner or representative.

 -
 Click Create .
A pop-up preview of the Blue Moon forms displays.

 -
 Review the documents to ensure everything is accurate, then click Send Lease .
The Blue Moon lease is created and sent to the designated resident(s) for electronic signature.

 Next Steps

 Once your Blue Moon lease is created, you can view the lease and track its eSignature progress.

 Action
 Description

 View lease PDF

 You can view a PDF copy of the Blue Moon lease, whether or not it was sent for electronic signature. For tenants and prospects, these documents can be viewed on the History/Notes pop-up by clicking for that history/note item. For more information, refer to Prospect History/Notes (Pop-Up) and Tenant History/Notes (Pop-Up) .

 For tenants, you can also view these document's from the lease's details pop-up by clicking View Documents . For more information, refer to Lease Details (Page) .

 Track eSignature

 You can track the progress of your Blue Moon lease forms that have requested an eSignature. From the Blue Moon eSignatures page you can also view, resend, or delete existing Blue Moon lease documents with pending eSignature requests. For more information, refer to Blue Moon eSignatures (Page) .
