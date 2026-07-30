# Unit Type Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Unit-Type.htm

This class examines unit type data as entered on the unit's details page. It is preceded by the Unit class and can be followed by a unit type-level scripting function.

 Example

 [Unit().UnitType.Bedrooms]

 Result

 Displays the number of bedrooms for the unit type of the unit.

 Example

 [Tenant().Lease().Unit().UnitType.Bathrooms]

 Result

 Displays the number of bathrooms for the unit type of the tenant's leased unit.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Bathrooms

 [Unit().UnitType.Bathrooms]

 Displays the number of bathrooms as entered on the unit type's General tile.

 Bedrooms

 [Unit().UnitType.Bedrooms]

 Displays the number of bedrooms as entered on the unit type's General tile.

 Description

 [Unit().UnitType.Description]

 Displays the text entered in the Description field on the unit type's General tile.

 Is Other Rentable Item

 [Unit().UnitType.IsOtherRentableItem]

 Displays True if unit type has Other Rentable Item checked on the General tile. Otherwise, displays False .

 Name

 [Unit().UnitType.Name]

 Displays the Unit Type name as entered on the unit type General tile.

 Unit Type ID

 [Unit().UnitType.UnitTypeID]

 Displays the system generated unit type ID for the unit type.

 Unit Type Image

 [Unit().UnitType.UnitTypeImage()]

 Displays a selected image uploaded to the unit type details page.
