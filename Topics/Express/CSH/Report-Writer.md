# Report Writer (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Report-Writer.htm

Report Writer allows you to create your own custom reports to meet your business needs. Report Writer uses both insertable fields specific to the type of report, as well as scripting for more customizable options. For example, you could create a report to list detailed pet information for tenants or contact information for owners.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Report writer templates
 View, Edit

 Specific Report Writer template privileges must be enabled for each entity-type for which you wish to delete Report Writer reports (e.g., Owner report writer templates ).

 For more information, refer to Control Custom Report Access .

 To access Report Writer , go to arrow_forward Report Writer . Then, in the Report Type section, select an option to view existing custom reports associated with that entity, and select a report.

 Insertable Fields

 The Insertable Fields section is a list of all available scripting functions that can be used to create dynamic content. For example, you can add the Account Name function to automatically populate a tenant's system-generated ID as a column on the report. Only functions related to the current report type display.

 To add a column to the report using an insertable field, double-click the function name. The function is then added to the Report Columns section and displayed in the Sample Report section.

 In Report Writer , there is an insertable field for Blank Column , which inserts an empty column with no Formula . This column can then be edited to include whatever header or formula you need for the report. Alternatively, it can be left blank and the Header name removed to act as additional spacing between columns.

 Report Columns

 The Report Columns section contains the insertable fields added to the report. The columns can be removed, adjusted, or edited as desired. This determines the columns which display on the custom report, the name of the columns, the order in which they display, and the width of each column. The custom report uses scripting to determine the information each column retrieves.

 To add columns to the report, use the Insertable Fields section on the left. To make more advanced changes, such as the column's spacing, alignment, and any filters that may apply to the column, click and select Settings .

 Column Descriptions

 After an insertable field is added, the following columns are available in the Report Columns section:

 Column

 Description

 Header

 The name of the column that displays on the actual report.

 Formula

 The scripting used to generate the column's data.

 Width

 The width of the column on the actual report.

 Total

 If checked, a total value displays on the report at the bottom of the column.

 Hide

 If checked, the column data is processed when the report is generated but does not display the column on the report.

 Report Options

 The options available in Report Options section of the designer apply to the entire report including customizing the name and subtitle of the report with scripting or font styles. To manage additional options, such as the visual separation method or page formatting click Advanced .

 Warning

 Click Execution Order to set the order in which the column scripts are executed for each row. In the Execution Order pop-up, the columns display as rows from top to bottom representing the order in which columns would display from left to right on the report. The top row equates to the left-most column.

 The execution order determines only the order in which the columns are calculated in Rent Manager , not the order in which the columns display on the actual report.

 Option
 Description

 Report Name

 The internal name of the report which displays on the Report Writer Manager page.

 Report Title

 The name that displays at the top of the actual report.

 To insert variables into the report title, click . Each variable is described below.

 Create Date

 Inserts the date the report was created.

 As of Date

 Inserts the date the report is run for.

 Selected Properties

 Inserts the name of the properties the report is run for.

 Report Subtitle

 The text which displays underneath the Report Title on the actual report.

 To insert variables into the report subtitle, click . Each variable is described below.

 Create Date

 Inserts the date the report was created.

 As of Date

 Inserts the date the report is run for.

 Selected Properties

 Inserts the name of the properties the report is run for.

 Report Location

 The areas of Rent Manager where this report is accessible. Each option is described below.

 None

 The report is available only on the Report Writer Manager page.

 Report Menu

 The report is available from the Report Writer menu of the report type (e.g., Tenant , Prospect , Owner , and so on).

 Right-Click

 The report is available from the right-click menu of the selected entity (e.g., Tenant , Prospect , Owner , and so on).

 Both

 The report is available from the Report Writer menu item drop-down list and the Right-Click Menu .

 Sample Report

 The Sample Report section displays a preview of the custom report based on the options and columns established in the Report Columns and Report Options sections. The sample report updates in real time as you make changes to the report settings.

 To generate a test version of the report using actual Rent Manager data, click Test , adjust the report options as desired, then click Generate Report .
