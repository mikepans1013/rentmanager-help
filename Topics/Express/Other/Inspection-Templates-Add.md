# Add Inspection Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Inspection-Templates-Add.htm

Inspection templates define the areas and items of a unit that need to be examined. Creating a template for inspections streamlines the inspection process by allowing you to quickly establish the scope of the inspection based on the types of units you manage. The inspections created from these templates can be filled out in Rent Manager , rmAppSuite Pro , or even printed out to be completed on paper.

 More Information

 Before you create your inspection templates, you must create the areas, items, and statuses in your inspection template toolbox. When creating an inspection template, the areas and items available to add to the template are determined by what is in the toolbox. For more information, refer to Edit an Inspection Template Toolbox .

 Step 1: Create an Inspection Template

 Related Privileges

 Group
 Privilege
 Column

 Inspections
 Inspection Templates
 Add, View

 For more information, refer to Control User Access .

 Once available areas, items, and statuses are added, you can create a new inspection template. Any of these elements can be customized for each template, and additional areas, items, and statuses can be added for only this template.

 To create a new inspection template, do the following:

 -
 Go to arrow_forward Services arrow_forward Inspections arrow_forward Inspection Templates .
The Inspection Template page displays.

 -
 Click Add Template .
The Add Inspection Template pop-up displays.

 -
 Select one of the following options:

 Option
 Description

 Copy Existing Template

 Create a copy of an existing template with a similar setup, allowing you to quickly make changes to the areas, items, and statuses. This is ideal if you need to make a template that is similar to an existing one.

 Start From Scratch

 Create a blank inspection template and choose which areas, items, and statuses to add to the template.

 -
 Click Next .

 -
 Enter information into the available fields:

 Field
 Description

 Copy Template From

 The existing inspection template to create a copy of and modify. This option displays only if Copy Existing Template was selected on the previous page.

 Name

 The unique name used to identify the template (such as 2B/1B Inspection or Studio Inspection - Tenant ).

 Will tenants complete this inspection as well?

 If this template is available only for use by management and Rent Manager users, select No .

 If this template is available to use for tenant self-inspections, select Yes . Then in the How do you want tenants to vie the inspection in rmResident field, select one of the following options:

 Simple Mode

 Tenants see each area and can add items as needed, or they can complete the inspection without adding any items. This mode is ideal for inspections where you just want the tenant to note their primary concerns without going too far into detail.

 Detailed Mode

 Tenants see all items in each area. They can either choose which to review, or you can require them to inspect all items. This mode is ideal for inspections where you want the tenants to review every area in detail.

 To require tenants to select a status for every item in the inspection, check Require statuses for all items .

 Tenant Self-Inspection Disabled

 The inspection template is not available for tenant self-inspections. If you selected No in the field above, this option is selected by default.

 This can be changed later at any time.

 Step 2: Set Up Available Areas, Items, and Statuses

 The steps for customizing a templates areas, items, and statuses varies depending on whether you are creating a new template from scratch or if you created a duplicate of an existing template and need to edit the new copy.

 Areas on inspections and inspection templates represent the physical locations that need to be inspected (e.g., bedrooms, kitchens, garages, balconies). Each area includes a list of items that need to be inspected in that location (e.g., floors, walls, cabinets), and each item can be assigned a status to determine if further action needs to be taken (e.g., Poor , Needs Repair , Missing ), or if it is ready to be completed (e.g., Good , Acceptable ).

 New Template

 If you selected Start From Scratch for your template, do the following:

 -
 On the Add Inspection Template pop-up, click Next .

 -
 In the Available Areas section, check each area to add to the inspection. The unit type this inspection template is designed for should determine which areas you select. For example, if the template is for a studio apartment, you likely do not need to add the area named Bedroom .

 When you check an area, the default items included in that area display.

 -
 To view or change the items included in one of the areas, for the area you wish to edit, click Edit Items .

 The Selected Items section displays all items currently in the area.

 -
 To add an available item from your toolbox to the selected area, check that item in the list. To remove an item from the area, in the Selected Items section, click next to that item.

 -
 Once the Selected Items section is customized to include items for that area, click OK to close the pop-up.

 -
 After all areas and items are set, click Add .
The inspection template is created.

 Copied Template

 Related Privileges

 Group
 Privilege
 Column

 Inspections
 Inspection Templates
 View, Edit

 For more information, refer to Control User Access .

 If you selected Copy Existing Template for your template, do the following:

 -
 On the Add Inspection Template pop-up, click Add .
The new copy of the selected inspection template is created.

 -
 From the Templates section on the left, select the new template copy you just created.

 -
 Modify any existing components of the template as needed. Each component is described in the table below.

 Component
 Description

 Area

 To edit an area in the inspection template, for that area's heading, click and select one of the options below.

 Edit

 Allows you to change the name of the area.

 Add Item

 Add an item from the toolbox to the area.

 Delete

 Deletes the area from the template.

 Item

 To edit an item in the inspection template, for that item, click and select one of the options below. When you edit an item, only the individual item in its assigned area is modified. If the same item is in another area on the template, that item is not changed.

 Edit

 Allows you to change the name, help text, and statuses of a specific item.

 Delete

 Removes the individual item from this area only.

 Statuses

 To edit the available statuses (such as Poor , Acceptable , Good , or Missing ) and the flags associated with those statuses ( Action Item , Needs Review , Severe , Image Required , and Note Required ) for a specific item, click arrow_forward Edit on that item. Then in the Statuses section, you can add or remove the statuses that apply to the item and determine which flags apply to each status.

 More Information

 Editing statuses directly from an item affects only that individual item in its assigned area and does not change the statuses of other instances of that item in other areas. Changes made to an items statuses in the toolbox do not affect any items already added to a template. To change the statuses of an item across all areas and templates, you must edit the item's statuses in the inspection toolbox and then re-add that item to all applicable areas and templates.

 -
 To add a new area to the inspection template, at the top, click Add Area . You can either select an available area from the toolbox to add that area with its all its associated items, or you can create a new area from scratch with no preset items by selecting Add New Area . Then click OK .

 Related Privileges

 To add a new area that is not already available in the toolbox, the additional privilege is required:

 Group
 Privilege
 Column

 Inspections
 Inspection Areas
 Add

 For more information, refer to Control User Access .

 -
 To change the order in which areas and items display in the inspection, click and hold to drag and drop that area or item to its new position.

 -
 Click Save .
The inspection template is updated.

 Step 3: Set Default Inspection Templates

 Establishing default inspection templates allows you to define the areas and items of a unit that need to be examined, and automatically use that template when creating a new inspection. Default templates can be established for all units with a specific unit type, or individual units. Setting a default template on a single unit overrides a default unit type template.

 Unit Type Default

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Unit types
 View, Edit

 For more information, refer to Control User Access .

 To set the default inspection template for all units with the same unit type, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Unit Types and select a unit type.
 The unit type's details page displays.

 -
 In the General tile's Inspection Template field, select a template from the drop-down list.

 -
 Click Save .
 Inspections for the unit type now default to the selected template.

 Unit Default

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View, Edit

 For more information, refer to Control User Access .

 To set the default inspection template for an individual unit, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Units and select a unit.
 The unit's details page displays.

 -
 In the Miscellaneous tile's Inspection Template field, select a template from the drop-down list.

 -
 Click Save .
Inspections for this unit now default to the selected template.
