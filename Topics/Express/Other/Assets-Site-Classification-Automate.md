# Automate Site Classifications

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Assets-Site-Classification-Automate.htm

For manufactured housing-type properties, units are assigned a site classification that defines the relationship between the unit (or site) and the manufactured home (typically a home-type asset) that occupies it. This helps property managers understand which units are income-producing, which are resident-owned, and how occupancy is distributed across a community.

 By default, Rent Manager automatically updates a unit's site classification based on a number of factors, such as the linked asset's homeowner status, the asset's location, the unit's status, and more. Keeping this automation enabled ensures that your assets and units are seamlessly synced as the status of your home assets changes.

 If you are not using home-type assets to track your manufactured homes in Rent Manager , or simply wish to have more manual control over how site classifications are assigned, you can disable this automation and update your units manually. The automation can be enabled and disabled at both the system-level and property-level, allowing you to configure site classification settings to meet the unique needs of your portfolio.

 More Information

 Rent Manager has pre-defined factors that determine which site classification the automation assigns to a unit. For more information, refer to Site Classification .

 Automate Site Classifications System-Wide

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Manage Homeowner Statuses & Site Classifications
 Enabled

 For more information, refer to Control User Access .

 You can enable and disable the automation at the system level to determine whether Rent Manager automatically updates each unit's site classification at all manufactured housing-type properties. By default, site classification automation is enabled system-wide.

 Enable Site Classification Automation

 To enable site classification at the system-level, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Assets arrow_forward Homeowner Statuses & Site Classifications .
The Homeowner Statuses & Site Classifications page displays.

 -
 On the Site Classifications tab, click Automation Settings .
The Site Classification Automation Settings pop-up displays.

 -
 Check Set site classification automatically across the system , then select options for the following fields:

 Field
 Description

 Site Classification Automation Start

 The date on which Rent Manager begins automatically updating your units' site classifications. This option displays only if site classification automation was disabled previously.

 System Default Site Classification

 The default site classification to assign to units if the automation is disabled . This option does not affect units when automation is enabled .

 -
 Click Save .
Site classification automation is enabled system-wide. The site classification for each unit is automatically updated based on the variety of factors used in Rent Manager 's calculation.

 Disable Site Classification Automation

 Warning

 Disabling site classification automation removes all site classification history added by the automation for the units at all properties with a Property Type of Manufactured Housing .

 To disable site classification at the system-level, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Assets arrow_forward Homeowner Statuses & Site Classifications .
The Homeowner Statuses & Site Classifications page displays.

 -
 On the Site Classifications tab, click Automation Settings .
The Site Classification Automation Settings pop-up displays.

 -
 Uncheck Set site classification automatically across the system and click Save .
The Set Site Classification pop-up displays.

 -
 Select a System Default Site Classification that is set as the site classification for all units at properties with a Property Type of Manufactured Housing when the automation is disabled.

 More Information

 If you have previously disabled site classification automation, you must select which units to apply the System Default Site Classification to. Choose one of the following options:

 Option
 Description

 Update only new units (without site classification)

 Units that do not already have a default site classification are assigned the System Default Site Classification . Units assigned a default site classification when the automation was disabled previously retain their previous classification.

 Update all units

 All units are assigned the System Default Site Classification . Units assigned a default site classification when the automation was disabled previously have their previous classification overwritten with the new selection.

 -
 In the table below, leave <Use Default> selected to apply the System Default Site Classification to units of the corresponding unit type. Optionally, select an alternative Site Classification for each Unit Type listed. The new selection overrides the System Default Site Classification for units of those unit types.

 More Information

 Only unit types associated with units at properties with a Property Type of Manufactured Housing display. For more information, refer to Property Details (Page) .

 -
 Click Set Classifications .
Site classification automation is disabled system-wide and each unit's site classification is updated according to the options selected.

 Automate Site Classifications for a Single Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 You can enable and disable the automation at the property-level to determine whether Rent Manager automatically updates the site classification for units at the specified properties.

 Enable Site Classification Automation

 To enable site classification automation at a single property, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The property's details page displays.

 -
 Click arrow_forward Automation Settings .
The Site Classification Automation Settings pop-up displays.

 -
 Check Set site classification automatically , then select options for the following fields:

 Field
 Description

 Site Classification Automation Start

 The date on which Rent Manager begins automatically updating site classifications for the property's units. This option displays only if site classification automation was disabled previously.

 System Default Site Classification

 The default site classification to assign to units at the property if the automation is disabled . This option does not affect units when automation is enabled .

 -
 Click Save .
Site classification automation is enabled for the property. The site classification for each unit is automatically updated based on the variety of factors used in Rent Manager 's calculation.

 Disable Site Classification Automation

 Warning

 Disabling site classification automation removes all site classification history added by the automation for the units at the selected property.

 To disable site classification automation at a single property, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
 The property's details page displays.

 -
 Click arrow_forward Automation Settings .
The Site Classification Automation Settings pop-up displays.

 -
 Uncheck Set site classification automatically and click Save .
The Set Site Classification pop-up displays.

 -
 Select a System Default Site Classification that is set as the site classification for all units at the property when the automation is disabled.

 More Information

 If you have previously disabled site classification automation, you must select which units to apply the System Default Site Classification to. Choose one of the following options:

 Option
 Description

 Update only new units (without site classification)

 Units that do not already have a default site classification are assigned the System Default Site Classification . Units assigned a default site classification when the automation was disabled previously retain their previous classification.

 Update all units

 All units are assigned the System Default Site Classification . Units assigned a default site classification when the automation was disabled previously have their previous classification overwritten with the new selection.

 -
 In the table below, leave <Use Default> selected to apply the System Default Site Classification to units of the corresponding unit type. Optionally, select an alternative Site Classification for each Unit Type listed. The new selection overrides the System Default Site Classification for units of those unit types.

 -
 Click Set Classifications .
Site classification automation is disabled for the property and the site classifications for units at the property are updated according to the options selected.
