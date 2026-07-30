# Add a Report Writer Report

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Report-Writer-Add.htm

The Report Writer manager tool in Rent Manager allows you to create and manage custom reports using Report Writer . The Report Writer (RW) reports use both insertable fields specific to the type of report, as well as scripting for more customizable options. For example, if you are a leasing agent that needs to regularly update tenants about events at your property, you can create a custom report that has just the name, email, and phone numbers of your current tenants so that you always have that information on hand.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Entity report writer templates
 Add, View

 The Entity varies based on Report Writer template type(s) the user wishes to create.

 For more information, refer to Control Custom Report Access .

 To add a report to Report Writer , do the following:

 -
 Go to   arrow_forward   Report Writer .
The Report Writer Manager page displays.

 -
 On the action bar to the right, click .
The Add Report pop-up displays.

 -
 On the pop-up, in the Select report type drop-down, choose the entity type for the report you want to add.

 -
 In the Insertable Fields tile, double-click each scripting function you wish to display as a column on the report. To insert an empty column without a formula, double-click Blank Column .

 -
 In the Report Columns tile, make optional adjustments to the fields located under the following columns.

 Column

 Description

 Header

 The name of the column that displays on the actual report.

 Formula

 The full scripting function used to generate the column's data.

 Width

 The width, in inches, of the column on the actual report.

 Total

 If checked, a total value displays on the report at the bottom of the column.

 Hide

 If checked, the column data is processed when the report is generated but does not display the column on the report.

 More Information

 To make more advanced changes, such as the column's spacing, alignment, and any filters that may apply to the column, click arrow_forward Settings . For more information, refer to Report Writer Advanced Column Options (Pop-Up) .

 -
 In the Report Options tile, enter information into the following fields.

 Option
 Description

 Report Name

 The internal name of the report which displays on the Report Writer Manager page.

 Report Title

 The name that displays at the top of the actual report.

 To insert variables into the report title, click . Each variable is described below.

 Create Date

 Inserts the date the report was generated.

 As of Date

 Inserts the date the report is run for.

 Selected Properties

 Inserts the properties examined in the report.

 Report Subtitle

 The text which displays underneath the Report Title on the actual report.

 To insert variables into the report subtitle, click . Each variable is described below.

 Create Date

 Inserts the date the report was generated.

 As of Date

 Inserts the date the report is run for.

 Selected Properties

 Inserts the properties examined in the report.

 Report Location

 The areas of Rent Manager where this report is accessible. Each option is described below.

 None

 The report is available only on the Report Writer Manager page.

 Report Menu

 The report is available from the Report Writer menu of the report type (e.g., Tenant , Prospect , Owner , and so on).

 Right-Click

 The report is available from the row actions menu of the selected entity in an entity list(e.g., Tenant , Prospect , Owner , and so on).

 Both

 The report is available from the Report Writer menu item drop-down list and directly from specific entities.

 More Information

 To set the order in which the column scripts are executed for each row, click Execution Order . By default on the Execution Order pop-up, the columns display as rows from top to bottom matching the order in which columns are listed from left to right on the report.

 Click and hold the icon to drag and drop the columns into the order in which the report should generate the results. The execution order determines only the order in which the columns are calculated in Rent Manager , not the order in which the columns display on the actual report.

 -
 In the Sample Report tile, review how the columns and report options you have selected display on the report.

 -
 When you are satisfied with the report you have created, click Save and Test to run the report in Rent Manager . Otherwise, click Save to save your progress or finish creating the report.
