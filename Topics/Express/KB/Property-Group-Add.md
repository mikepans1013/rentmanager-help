# Add a Property Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Property-Group-Add.htm

Property groups allow you to choose two or more existing properties and group them together under a single heading in Rent Manager . Creating property groups makes selecting a large amount of properties for the sake of postings (recurring charges, management fees, utilities, and so on), generating reports, and filtering (tax ID, owner, zip code, and so on) much easier. Rather than selecting each property individually, you can simply select the property group and perform actions based on every property in the group.

 There are two different ways to add a property group: manually selecting properties or creating a filter for Rent Manager to generate the properties in the group. For example, you can create a group for all your manufactured housing properties, or create a filtered property group for just your properties located in the state of Ohio, by filtering with the zip code of 45249, and managed by Mary Smith.

 Option 1: Add a Property Group by Manually Adding Properties

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Property groups
 Add, View

 For more information, refer to Control User Access .

 Creating a property group allows you to manually group multiple properties under one heading. For example, you can add a property group for all your properties that use subsidized housing and another for all your commercial properties.

 To add a new property group, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Properties/Units arrow_forward Property Groups .
The Property Groups page displays.

 -
 Click Add .

 -
 Enter a unique Name to describe the property group so it is easily recognizable in a list.

 -
 Check the box next to the properties that make up this property group.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 Check Show only selected properties to display only the properties that are selected.

 -
 Click Save & Close to complete the property group creation process and close the pop-up. Alternatively, click Save & New to finish adding the property group and refresh the pop-up to create another group.

 Option 2: Add a Filtered Property Group

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Property groups
 Add, View

 For more information, refer to Control User Access .

 Instead of selecting individual properties to be part of a property group, you can create a dynamic property group based on a specific set of filter conditions. As new properties are added to Rent Manager , they are automatically added to the appropriate filtered property groups.

 To add a filtered property group, do the following:

 -
 From the Add drop-down list, select Add Filtered Property Group .
The Property Group Detail page displays.

 -
 Enter a unique Name to describe the property group so it is easily recognizable in a list.

 -
 In the General Information tile, select the following filter options to determine which properties are automatically added to this group:

 Field
 Description

 Search Options

 Select whether the filtered property group includes properties whose information Contains the data you input into one or more fields, or properties whose information Begins With the data you input into one or more fields.

 The option you select applies to every field in this section.

 Name

 The characters to be used to filter the property group by name.

 For example, if you select the Contains search option and enter the word south , all properties containing the word south in their name are included in the property group.

 Short Name

 The characters to be used to filter the property group by property short name.

 For example, if you selected the Begins With search option and enter the letter w in this field, all properties whose short name begins with the letter W are included in the property group.

 Tax ID

 The characters to be used to filter the property group by tax ID.

 For example, if you selected the Contains search option and enter 099 , all properties whose tax ID contains 099 are included in the property group.

 Manager

 The characters to be used to filter the property group by the manager's name.

 For example, if you selected the Begins With search option and enter Pete in this field, all properties with managers named Pete are included in the property group.

 Street

 The characters to be used to filter the property group by the property's street name.

 For example, if you selected the Contains search option and enter Waterstone in this field, all properties whose street name contains Waterstone are included in the property group.

 City

 The characters to be used to filter the property group by the property's city name.

 For example, if you selected the Contains search option and enter Cincinnati in this field, all properties whose city name contains Cincinnati are included in the property group.

 State

 The characters to be used to filter the property group by the property's state name.

 For example, if you selected the Contains search option and enter OH in this field, all properties whose state name contains OH are included in the property group.

 Zip

 The characters to be used to filter the property group by the property's zip code.

 For example, if you select the Contains search option and enter 45251 in this field, all properties whose zip code contains 45251 are included in the property group.

 Phone

 The characters to be used to filter the property group by the phone number.

 For example, if you selected the Begins With search option and enter 513 in this field, all properties whose default phone number begins with 513 are included in the property group.

 Fax

 The characters to be used to filter the property group by the fax number.

 For example, if you selected the Begins With search option and enter 513 in this field, all properties whose fax number begins with 513 are included in the property group.

 -
 In the Other Filters section, select the following filter options to determine which properties are automatically added to this group:

 In the System Close field, configure to include properties using the selected configuration in the property group.

 Field
 Description

 System Close

 Include properties using the selected configuration in the property group.

 Use system settings

 All properties with the option to Use System Settings are included in the property group. For more information on establishing the system settings for an accounting close date, refer to Accounting Close (System Preferences) .

 No close

 All properties with No Close date selected are included in the property group.

 Specific Date

 All properties with a Specific Date selected are included in the property group.

 Monthly

 All properties with a Monthly close date selected are included in the property group.

 Yearly

 All properties with a Yearly close date selected are included in the property group.

 X days ago

 All properties with a dynamic close date of X days ago selected are included in the property group.

 Period Accounting

 All properties with accounting periods that match the series selected in the Series field and the number of days entered in the Effective After field are included in the property group.

 User Defined Field

 The property-level user defined field (UDF) to be examined. Then, enter a Value that corresponds to the selected user defined field (UDF). All properties that have the entered Value for the selected UDF are included in the property group.

 Owner

 All properties in the portfolio of the selected owner are included in the property group.

 Charge Type

 All properties that have the Rent Charge Type field on the Other Information tile set to the selected charge type are included in the property group.

 Special Late Charge Enabled

 Includes all properties that have the Enable Special Late Charge field checked on the Late Fees pop-up in the property group.

 ePay Enabled

 Includes all properties that have the Enable ePay for this property field checked on the ePay Setting pop-up in the property group.

 Default Bank

 All properties that have the Default Bank field on the Other Information tile set to the selected bank account are included in the property group.

 Property Group

 Includes all properties in that property group in the filtered property group.

 User Defined Field

 The property-level user defined field (UDF) to be examined. Then, enter a Value that corresponds to the selected user defined field (UDF). All properties that have the entered Value for the selected UDF are included in the property group.

 Unit Count

 Include all properties with the selected total number of unit(s) in the property group. The following options are available for filtering properties by their number of units:

 = Equals

 All properties that have a unit count equal to the value entered are included in the property group.

 <> Does not equal

 All properties that have a unit count that does not equal the value entered are included in the property group.

 > Greater than

 All properties that contain more units than the value entered are included in the property group.

 < Less than

 All properties that contain fewer units than the value entered are included in the property group.

 >= Greater than or equal to

 All properties that have a unit count larger than or the same as the value entered are included in the property group.

 <= Less than or equal to

 All properties that have a unit count smaller than or the same as the value entered are included in the property group.

 -
 Click Save & Close to complete the property group creation process and close the pop-up. Alternatively, click Save & New to finish adding the property group and refresh the pop-up to create another group.
