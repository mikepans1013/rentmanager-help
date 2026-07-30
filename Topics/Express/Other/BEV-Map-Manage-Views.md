# Manage BEV Map Views

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/BEV-Map-Manage-Views.htm

Bird's eye view (BEV) is a tool that allows you to use images of your properties to locate and view various details about units at your properties, similar to viewing a map. This includes an overhead view of the property, shapes or pins to represent units that are linked to their respective accounts, and various overlays to display other specified data for the units.

 You can create map views that act as an overlay to display specific information regarding the units on the map. Each map view has its own legend to identify the information displayed on the overlay. Additionally, Rent Manager provides system map views accounting for information such as the balance due of the tenants of the property or the market rent of the units represented in the map.

 Warning

 Rent Manager Express has improved map-making capabilities, allowing you to create very large map images in bird's eye view that may not be accessible in Rent Manager 12 . If a map image exceeds 2500 x 2500 px, the map will not load in Rent Manager 12 .

 Add a Map View

 Related Privileges

 Group
 Privilege
 Column

 Bird's Eye View (BEV)
 BEV Map Views
 Add, View

 For more information, refer to Control User Access .

 You can create your own custom map views for your BEV maps. To create a new map view, do the following:

 Step 1: Create the Map View

 -
 Go to arrow_forward Rental Info arrow_forward Bird's Eye View (BEV) arrow_forward Manage BEV Map Views .
The Manage BEV Map Views page displays.

 -
 Click Add Map View .

 -
 In the General tile, enter the following information:

 Field
 Description

 Description

 A note that provides more context about the map view's uses and purpose.

 Maps

 The BEV maps where this map view is available to select.

 Name

 A brief, unique name to indicate this map view's purpose.

 Users

 The Rent Manager users who can access this map view when viewing BEV maps.

 More Information

 If this map view should be the default overlay for all maps, in the tile header, check System Default View . If this option is checked, this map view is automatically assigned to all maps that do not have their own default view selected.

 -
 In the Data Filters field, check or uncheck any of the following options:

 Option
 Description

 Show Date Filter

 If checked, allow the user to select an As of Date or Date Range when viewing the map view on a BEV map. This allows the user to filter information to fit specific dates, such as if a tenant has an outstanding balance as of a specified date. This option displays only if, in the Conditional Formatting tile , a script that accepts date values or <Custom Script> is selected.

 Show Floors Filter

 If checked, allow the user to select which floors are included in the map view, allowing only units on those floors to display. This is useful for aerial map views where pins or shapes may be stacked due to units being in the same location on different floors.

 Show Property Filter

 If checked, allow the user to select which properties are included in the map view, allowing only units at that property to display. This is useful for maps that cover multiple properties.

 -
 In the Conditional Formatting tile, enter information into the available fields for your first rule.

 Field
 Description

 Information to Evaluate

 Script functions that examine specific information in the map view for the units and their associated properties, tenants, assets, or violations. The function you select here determines the fields and options available for the rules added below.

 Alternatively, click Custom Script to write your own script to examine information. If writing a custom script, the following options become available.

 Script

 The script to use for this map view. To view the available insertable fields and test your script's output, click Open Script Builder .

 Data Type of Script Result

 Determines the type of data your script outputs on the map view: Text , Numeric ,  Date , or True/False .

 Legend Label

 A name for this label as it displays on the map legend when this map view is selected.

 Step 2: Add Rules

 Rules allow you to determine what information is evaluated and establish the conditions for when a unit is either hidden from the map view or displays in a specified color.

 -
 For your first rule, below the Legend Label , select the method by which you are filtering the selected information. The operators available vary depending on the type of script set in Information to Evaluate field.

 For example, if you are examining units with the script function Open Charges Amount and want to filter for all units that have a total open charge amount below $50, select the operator is less than .

 -
 To the right of your selected operator, enter the value examined in the script. For example, if you are creating a rule for tenants with an Open Charges Amount that is less than $50 to show as green, enter 50 in the field to the right.

 -
 If your rule needs further specification to pull the right data such as creating a number range, you can add additional conditions by clicking Add Condition .

 For example, if your first condition filters for open charges greater than or equal to $50, you can add a condition to also filter those charges to be less than $100. This means the rule applies only to units with open charges that are at least $50 and up to, but not including, $100.

 -
 On the line below your conditions, you can determine what the map displays when the conditions of this rule are met.

 The following options are available:

 Option
 Description

 Do not show on map

 Units that meet the rule's conditions are hidden from the map.

 Set color to

 Units that meet the rule's conditions display in the selected color.

 -
 To add any additional rules to the map view, in the Condition Formatting tile's header, click Add Rule . Then repeat these steps.

 More Information

 Rules are evaluated in the order they are listed on the page. To change the order of the rules, click and hold to drag the rule to a different spot in the list.

 Step 3: Customize Unit Information

 If you need the unit information that displays to be different than the default, you can edit that information for this map view specifically. If you wish to use the default settings, skip these steps and click Save .

 -
 In the Unit Information tile, check Customize Unit information when this view is applied .

 -
 In the tile header, click Edit Unit Information .
The Edit Unit Information pop-up displays.

 -
 Add or remove the fields you wish to display on the unit information's pop-up. For more information, refer to Edit Bird's Eye View (BEV) Default Unit Information (Pop-Up) .

 -
 Click OK .
The pop-up closes.

 -
 Click Save .
The map view is updated and saved.

 Edit a Map View

 Related Privileges

 Group
 Privilege
 Column

 Bird's Eye View (BEV)
 BEV Map Views
 View, Edit

 For more information, refer to Control User Access .

 All map views display in a list on the left. By default, there are multiple system map views that are available and can be customized to suit your needs. Additionally, user-created map views also display in the list. To change the order of the map views in the list, click Reorder Map Views .

 More Information

 To delete a user-created map view, click   arrow_forward   Delete . While you cannot delete a system map view, you can make a system map view unavailable for all BEV maps by unchecking the Active checkbox for that map view.

 The following map views are available by default:

 Map View
 Description

 All Units

 Displays basic information about the unit, such as the colors and unit names on the BEV map itself.

 Balance Due

 Indicates which units have tenants with an outstanding balance. The color of the unit pin or shape indicates how much the tenant owes.

 Delinquency Status

 Indicates which units have tenants with unpaid charges. The color of the unit pin or shape indicates how long they have been delinquent.

 Market Rent Amount

 Indicates the market rent amount established on each unit. The color of the unit pin or shape indicates how much the market rent is worth.

 Move Ins

 Displays which units have a prospect scheduled to move in and when, preventing overlapping leases on a unit.

 Move Outs

 Displays which units have a tenant that has an official move out date established, as specified on their lease details in the Move Out field.

 On Notice

 Displays which units have tenants that have given notice they are moving out, as specified on their lease details in the Notice field.

 Rent Amount

 Indicates the amount of rent the tenant at each unit is charged. The color of the unit pin or shape indicates how much they pay in rent.

 Service Issues

 Displays which units have open or resolved service issues associated.

 Tenant Display Color

 Unit pins and shapes are colored to match the color of the associated tenant as specified on their details page in the Display Color field.

 Unit Availability

 Displays which units are vacant and available on a prospect's move-in date, allowing you to determine which units a prospect can rent.

 Unit Status

 Unit pins and shapes are color coded to indicate their assigned unit status.

 Unit Type

 Unit pins and shapes are color coded to differentiate the unit types of each assigned unit.

 To edit a map view, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Bird's Eye View (BEV) arrow_forward Manage BEV Map Views and select a view from the list.
The selected map view's details display.

 -
 In the General tile, edit the information in the available fields.

 Field
 Description

 Users

 The Rent Manager users who have access to this map view when viewing BEV maps.

 Maps

 The BEV maps for which this map view is available to use.

 -
 If applicable, in the Conditional Formatting tile, make any changes to the current rules established for the map view. These rules vary depending on the map view selected.

 -
 If the map view is a user-created map view, make any other edits to the other tiles available on the map view. The tiles and fields available depend on the map view.

 -
 Click Save .
The map view is updated.
