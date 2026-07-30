# Create a Floor Plan

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Marketing-Floorplans.htm

If you use the internet listing services (ILS) marketing integration, floor plans allow you to set up prices, images, and the number of bedrooms and bathrooms for all units at the property of a specific unit type by assigning them to a floor plan.

 Floor plans are available only for properties with a Feed Type of Multi Family . The Feed Type displays at the top right of the Marketing Setup pop-up. For more information, refer to ILS Marketing Feed Types .

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To access floor plans for a property, go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property. Then, click arrow_forward Marketing Setup .

 More Information

 Previously, users had the option to market from the property or unit. Unit marketing configurations are a legacy way of marketing to ILS sites. Now, most ILS sites don't accept marketing data for individual units and instead prefer a property marketing configuration. If you have not converted your unit configuration to a property configuration, the Marketing Setup pop-up displays a message prompting you to use Property Marketing Configuration Wizard . Once you convert to a property configuration, it cannot be reversed. For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 To add a new floor plan, click Add Item . The New Floor Plan Details pop-ups consist of two sections, each containing different options to be applied to any floor plans used at the property.

 Step 1: Add General Information

 In the General section, you can establish the information that your ILS provider displays for each floor plan, such as the name, what unit types apply, price, and the number of bedrooms and bathrooms.

 The following fields are available in this section:

 Field
 Description

 Floor Plan Name

 A unique name for the floor plan, which displays in your ILS feeds.

 Unit Type

 Click to select the unit type(s) that apply to this floor plan.

 Unit types display in this list only if they meet the following conditions:

 -
 The unit type is assigned to the property on the unit type's details page.

 -
 The unit type is not marked as an Other Rentable Item (ORI) .

 -
 The unit type is not currently assigned to another floor plan at the property.

 Price

 Enter a price manually, or select an existing Rent Manager field from the drop-down.

 You can select Unit Field: Market Rent to use the unit market rent as the price for the floor plan. The price displays the market rent established on the Unit details page in the Current Market Rent section for all units with this floor plan. If market rent varies between units, the price for the floor plan displays a range of lowest to highest.

 For example, if the floor plan includes units with market rents of $950 , $1160 , and $1250 , the price displays as 950.00 - 1250.00 .

 Bedrooms

 Enter a price manually, or select an existing Rent Manager field from the drop-down.

 You can select Unit Type Field: Bedrooms to use the number of Bedrooms entered on the unit type's details page. If multiple unit types are selected for the floor plan and the number of bedrooms varies between the unit types, the number of bedrooms for the floor plan displays as a range of least to most. For example, if the floor plan includes a unit type with 2 bedrooms and a unit type with 3 bedrooms, the number of bedrooms displays as 2 - 3 .

 It is considered best practice to ensure that this information matches the number of Bedrooms entered on the unit's details page, because some ILS sites cross-check this information for consistency.

 Bathrooms

 Enter a price manually, or select an existing Rent Manager field from the drop-down.

 You can select Unit Type Field: Bathrooms to use the number of Bathrooms entered on the unit type's details page. If multiple unit types are selected for the floor plan and the number of bathrooms varies between the unit types, the number of bathrooms for the floor plan displays as a range of least to most. For example, if the floor plan includes a unit type with 1.5 bathrooms and a unit type with 2 bathrooms, the number of bathrooms displays as 1.5 - 2 .

 It is considered best practice to ensure that this information matches the number of Bathrooms entered on the unit's details page, because some ILS sites cross-check this information for consistency.

 Marketing Description

 Enter additional information about the floor plan to display with the listing. For example, if you have a floor plan that has multiple unit types with the same number of bedrooms and bathrooms, but one is a single story unit and the other is a two-story townhome, you can use the marketing description to explain the difference in square footage and pricing for the two options.

 Step 2: Add Images

 In the Images section, you can attach images for each floor plan that is included with your ILS feed.

 More Information

 For images to be included in the ILS feed, images must have a valid Image Type and Caption . You can enter this information when you add or view the details of an image. For more information, refer to Add and Assign an Image Type .

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Image Types
 Add, View

 For more information, refer to Control User Access .

 The following actions are available in this section:

 Option
 Description

 Add

 Add a new image to the floor plan or create a new image type with a Type of Floor Plan . Click the drop-downs below for more information.

 To add an image to the floor plan, do the following:

 -
 Click Add or click the drop-down arrow next to Add and select Add Images .

 -
 In the Image Type field, select a floor plan image type.

 -
 Click Upload Images to browse your computer for an image file to attach to the floor plan.

 -
 In the Caption field, enter a name or brief description for the image to display in ILS feeds and in Rent Manager .

 -
 In the Description field, enter any additional information about the image(s).

 -
 If applicable, check Ignore image resize warning if your image(s) are larger than the Max Size allowed by the selected image type. Checking this setting automatically compresses the images and disables the warning the pop-up.

 -
 Click Add Images .

 -
 Click Save .

 To add image types to the floor plan, do the following:

 -
 Click the drop-down arrow next to Add and select Add Image Types .

 -
 Enter a Name .

 -
 In the Type field, enter the type or select an existing type from the drop-down.

 -
 In the Max Size field, enter the maximum size (in KB) allowed for the image, or select an existing size from the drop-down.

 -
 In the Description field, enter any additional information about the image type.

 -
 Click Save .

 Sort

 Reorder the images associated with the floorplan by the image or by the image type. Click the drop-downs below for more information.

 Click Sort or click the drop-down arrow next to Sort and select Sort Images to reorder the images of the same image type. On the Image Sort pop-up, select a floor plan image type from the drop-down list. Set the order of the images as desired, then click Apply .

 To sort by image types, click the drop-down arrow to the right of Sort and select Sort Image Types to set the order in which image types display on this floor plan. On the Image Type Sort pop-up, ensure Floor Plan is selected. Set the order of the image types as desired, then click Apply .

 Details

 View or modify the image's information.

 Delete

 Remove the selected image from the floor plan.

 When finished, click Save to apply the floor plan setups to property-level marketing.
