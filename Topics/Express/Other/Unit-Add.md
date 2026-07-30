# Add a Unit

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Unit-Add.htm

Properties in Rent Manager are defined as financial entities, but much of your data (such as tenant payments, service issues, and so on) is linked to specific units at those properties. Even if you have a property that is a single-family home and only has one unit, you should still create a single unit for that property to ensure all the information in your database is recorded accurately and you can perform any needed actions for that home. The Add Unit wizard allows you to create the unit(s) at your properties, either one at a time, or you can create a group of similar units in a single batch to save time.

 Related Preferences

 By default, these rental spaces in your Rent Manager database are called Units . You can customize the entity name in system preferences to meet your business needs. For example, if you primarily own properties that are university housing, you can change Unit to Dormitory . This updates the entity name for your entire Rent Manager database, so be sure to choose an entity name that works best for all your business purposes. For more information, refer to Entity Types (System Preferences) .

 Adding a single unit is best for properties that only have one unit. It can also be used for properties with multiple units if you have a few units that are very different from the majority. If a property has multiple similar units, it is most efficient to add those units in a batch. The fields available and how they apply to the unit(s) vary depending on the selected method.

 Warning

 Before adding units, you must first create the property where the unit is located and the unit type(s) used to categorize the units. For more information, refer to Add a Property and Add a Unit Type .

 More Information

 To streamline the creation process, consider setting up unit UDFs, amenities, floors, and other information related to your units before adding unit accounts. For more information, refer to Customize Unit Options .

 Step 1: Add Unit(s) and General Information

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 Add, View

 For more information, refer to Control User Access .

 To create your unit(s), do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Units .
The Units page displays.

 -
 At the top, click Add Units .

 -
 Select whether you wish to add a Single Unit or Multiple Units .

 -
 Click Next .

 -
 On the Details tile, enter the general information about the unit(s) into the available fields described below.

 Field
 Description

 Name

 The name or number of the unit at the property (e.g., 113 , 2A , RA-209 ). This name must be unique at the selected property, but can be used again for units at other properties.

 This field displays only when adding a single unit. For multiple units, naming is addressed later in the wizard on the Multiple Units tile.

 Property

 The property at which the unit(s) is located.

 Unit Type

 The category or layout that describes the unit(s), such as 2B1B , SFH , Storage , and so on.

 Floor

 The floor where the unit(s) is located (e.g., ground , top , 3rd , and so on).

 Active Start

 The date on which the unit(s) becomes active and available to rent.

 If the unit(s) has always been available to rent, leave this field blank. Units can only be rented over periods of time in which they are active.

 Active End

 The date on which the unit(s) is no longer active and becomes unavailable to rent, if applicable.

 If there is no planned date on which the unit(s) becomes unavailable, leave this field blank. Units cannot be rented during dates where they are listed as inactive.

 -
 On the Additional Info tile, enter the applicable information into the available fields described below. To automatically pull the information from the selected Unit Type into the Bedrooms , Bathrooms , and Inspection Template fields, click Fill From Unit Type .

 Field
 Description

 Amenities

 All amenities available at this unit(s). You can select unit-level amenities that apply to only this unit(s) or that are available to all units at the property.

 For example, if the unit(s) has a washer and dryer in unit, you could select a unit-level amenity named W/D in unit . If the unit(s) has access to the property's community pool, you could also select a unit-level amenity named Pool Access , even thought the pool is not in the unit itself.

 Market Rent Amount

 The estimated rent amount expected for this unit based on similar properties in similar areas.

 More Information

 This field does not determine the actual rent charge amount for leasing the unit(s). The rent amount charged to tenants is determined by the recurring charges related to their lease.

 Square Footage

 The size of the unit(s) in square feet. This field is crucial for any commercial units that use the square footage of the unit for charge calculations.

 Max Occupancy

 The maximum number of occupants allowed to live in the unit(s). For non-residential units, such as garages or storage, enter 0 .

 Display Color

 A color to help identify units of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the unit in some areas of Rent Manager , such as the Units list page.

 Bedrooms

 The number of legal bedrooms in the unit(s).

 Bathrooms

 The number of bathrooms in the unit(s), including half-baths (e.g., 1 , 1.5 , 2 , and so on).

 Inspection Template

 The default inspection form template to use when performing an inspection on this unit(s). For more information, refer to Inspection Templates (Page) .

 Step 2: Create Naming Convention for Batch of Units

 If you selected to add Multiple Units , you need to establish how Rent Manager names each unit. If you selected to add a Single Unit , skip this step and proceed to Step 3: Add Additional Unit Information .

 On the Multiple Units tile, enter the applicable information into the available fields described below.

 Field
 Description

 Unit First Number/Letter

 The number or letter of the first unit in this batch.

 Unit Last Number/Letter

 The number or letter of the last unit in this batch.

 Increment Unit By

 A whole number by which to increment the first unit number or letter through the last number or letter.

 For example, if you pick an increment value of 1 , units are created for every single value between your Unit First Number/Letter and Unit Last Number/Letter ( 1, 2, 3, 4 or A, B, C, D ).

 If you specify any other value, units are created only for each value in the incremental sequence. For example, if you specify a range of units between 1 and 8 or A and H with an increment of 2 , then four units are created ( 1, 3, 5, 7 or A, C, E, G ).

 Pad Numbers with 0

 Adds 0 to the beginning of each unit number so that all unit names have the same amount of digits. This applies only to units named with numbers.

 For example, if the Unit First Number/Letter is 1 and Unit Last Number/Letter is 100 , the first unit's name would be 001 to match the last unit's name of 100 .

 Unit Prefix

 Apply any characters to display immediately before the unit numbers or letters. Spaces and punctuation are considered characters.

 Unit Suffix

 Apply any characters to display immediately after the unit numbers or letters. Spaces and punctuation are considered characters.

 Units To Be Created

 This field displays a preview of the names of all the units being created in this batch. You can adjust the fields above as needed until the unit names meet the correct criteria.

 Total Units

 This field displays the number of units being created in this batch based on the criteria entered in the fields above.

 Warning

 If you use per unit Rent Manager licensing, the number of units must be fewer than the number of available unit licenses that you have. You can view the number of available licenses that you have on the Assign Unit Licenses page.

 For more information, refer to Assign Unit Licenses .

 Step 3: Add Additional Unit Information

 After naming your units and adding the general information, do the following:

 -
 On the Addresses tile, enter the address(es) for the unit. Check Default for the address you wish to use in reports and other areas of Rent Manager that pull the unit's address, such as invoices. To populate the address from the selected property, click Property Address .

 More Information

 If you selected to add Multiple Units , you can automatically populate each unit's name to the associated unit. To add the unit name to the address, place your cursor in the address field where the unit name should display and click Unit Name . The variable [U] is added and a preview of these addresses for each unit displays below with the first unit's address as an example.

 -
 On the Comment tile, enter any additional notes or information about this unit, such as a reminder that these units have not yet had their appliances upgraded.

 Step 4: Enter Security Deposit and UDF Information

 After establishing general unit information, you can add any default security deposit information and enter any user-defined field values.

 -
 On the Default Security Deposit tile, enter the applicable information in the available fields described below. This information automatically populates when leasing the unit to a tenant or prospect.

 Field
 Description

 Charge Type

 The charge type to use for this security deposit charge.

 Related Preferences

 Only charge types defined as security deposit charge types in system preferences display in the list. For more information, refer to Security Deposit General Options (System Preferences) .

 Amount

 The default dollar amount of each unit's security deposit. This amount can be changed when leasing this unit(s).

 Comment

 An optional note about this security deposit charge to further identify the charge on the tenant's transactions page.

 -
 On the User Defined Fields tile, enter the information in the Value column for the associated UDF.

 More Information

 Only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the units. To view all the unit-type UDFs in the database, click View All UDFs and select values for any applicable UDFs.

 -
 Click Save and Finish to complete the creation process and close the pop-up. Alternatively, click Save and New to complete the creation process and refresh the pop-up to add another batch of similar unit.
The unit(s) is added to the property.
