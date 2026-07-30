# Set Up Web Developer Suite

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Web-Developer-Suite-Set-Up.htm

Web Developer Suite allows you to use Web Availability, a licensed feature that integrates Rent Manager property and unit availability data with a custom website by creating an HTML search form for your website that searches the Rent Manager database in real time and returns data concerning available properties and/or units to your website. Essentially, when potential prospects search your website, this feature searches your Rent Manager database and shows them what is available based on the availability settings established in Rent Manager .

 This topic describes the functionality of Web Developer Suite for web developers so that your Rent Manager data can integrate with your website for unit and property availability. Further, the topic provides sample templates (known as profiles in Rent Manager ) which can be used to upload Rent Manager property and unit availability data to your website, and also explains scripts you can use to design your own templates.

 Requirements

 In order to use Rent Manager 's Web Availability option, you must have the following requirements:

 -
 You must have Web Developer Suite .

 -
 You must enable the Enable Availability Web Access option in system preferences. For more information, refer to Licensing (System Web Preferences) .

 -
 If you are not hosting your site on the Rent Manager server, you must have a copy of the RentManagerWebAgent.dll file provided by LCS .

 In Rent Manager , you create templates that display both the list of results, as well as the detailed information about each property or unit in the list. You can use the basic template for a quick and easy option to work from, or create more customized templates using HTML code. Additionally, HTML templates provide the option to define or link to a CSS style sheet to design your template if you are using an iFrame to embed your unit and property availability into your website.

 For each template, you establish the criteria that determines what makes a property or unit available to display in the output of a user's search results. On your website, you must include a search page where users can submit keywords or search strings and pull the applicable information from your Rent Manager database to the search results page.

 Associated Rent Manager Features

 Rent Manager provides multiple features that allow you to customize the information that can be pulled into your website. As a web developer, you may not be involved in Rent Manager 's day-to-day operation, but you must verify these features are properly defined in the database before you can set up their associated scripting variables in your Web Availability templates.

 User-Defined Fields (UDFs)

 User-defined fields allow you to define custom information that is not tracked in Rent Manager by default. Property-level and unit-level UDFs are used for Web Availability to display this information on your website for the applicable properties and units. This can be used to pull strings of text or an image.

 The scripting variables used for user-defined fields are provided below. The red text indicates where you enter the name of the UDF.

 Option
 Description

 Property-level UDFs

 *{propuserdef: udffieldname }*

 Unit-level UDFs

 *{unituserdef: udffieldname }*

 For more information on property and unit UDFs, refer to Property User Defined Fields (Pop-Up) and Unit User Defined Fields (Pop-Up) .

 Images

 You can pull images from a unit or property's Images tile in Rent Manager by establishing which image type from which to pull the images. Image types are a function of Rent Manager that allow you to organize images into different categories in your database. For more information on image types, refer to Add and Assign an Image Type .

 The scripting variable used for displaying images is provided below. The red text indicates where you enter the name of the image type as it displays Rent Manager .

 *{imagetyperaw: imagetypename }*

 Using this scripting variable pulls all the images of that image type for the unit or property, so you need to only enter the variable once for each unit type you wish to include. For example, if you have a unit image type named Web Unit Images that is specifically used for photos of the units you wish to display on the website, you can use the code *{imagetyperaw:Web Unit Images}* in your website code. This pulls all images from that unit's Images tile that have an image type of Web Unit Images .

 Amenities

 Amenities in Rent Manager allow you to track features or conveniences at your units and properties, such as fireplaces, patios, pools, and so on.

 The scripting variable used for amenities is provided below. The red text indicates where you enter the name of the amenity in Rent Manager .

 *{amen: amenityfieldname }*

 To manage amenities, go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Properties/Units arrow_forward Amenities . For more information, refer to Assign Amenities .

 Floors

 Rent Manager allows you to track the floors available at a property or the floor where a unit is located. For more information on how to add floors, refer to Floors (Page) .

 This is not a required field, so there may be units that do not have a floor assigned in Rent Manager . If you are filtering by floor, only units with a floor defined are examined.

 The scripting variable used for floors is provided below.

 *{floor}*

 Square Footage

 Square footage is used by numerous scripting variables to calculate and return the according property and unit data. This is not a required field, so there may be properties or units that do not have a square footage established in Rent Manager . If you filter results by a scripting value that calculates based on square footage, only properties and units with a square footage defined are examined.

 The table below describes where you can set the square footage for units and properties.

 Entity

 Location

 Property

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property. Then, in the Other Information tile, enter the total square footage of the property in the Total Sq Ft field.

 Unit

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Units and select a unit. Then, in the Miscellaneous tile, enter the total square footage of the unit in the Square Footage field.

 Defining Templates

 In order to display your property and unit availability data from Rent Manager on your website, you first define templates in Rent Manager and then call on the templates in a search form on your website. This involves enabling Web Availability in system web preferences, then establishing the availability settings to determine when a unit or property is available, as well as how these results display in the website search results.

 When setting up your availability templates (called profiles in Rent Manager ), there are three types of template structures (also known as retrieval methods in Rent Manager ) to choose from: Basic , HTML , and API . You can create multiple profiles, but only the unit profile and property profile set as default are used for your website. For more information on creating and managing availability profiles, refer to Availability Profile (System Web Preferences) .

 Search Form Tools for Your Website

 You can set up your site to display the available properties and/or units as the results of a search form or in the URL using a query string. If you are not hosting your website on the Rent Manager server, you must have a copy of the RentManagerWebAgent.dll file installed in your bin folder.

 Query String

 When using a query string, the available properties or units are displayed based on the values passed in the URL. If no values are passed, all properties or units that are currently available display. To limit the results and display only available properties or units with a particular field value (such as Unit Type ), add that field to the query string.

 The example below is a query string that displays only available units with a Unit Type of Apartment . The red text indicates information that you must replace with your website's URL and your Rent Manager Company Code . The green text indicates the part of the query string which passes the unit type value.

 https:// YourSiteName .com/YourResults?rmwebsvc_command=search_result& CompanyCode &locations=&fromsearch&mode=javaScript& unittypeeq=apartment

 Search Form

 When using an HTML search form, the prospect's search submits search strings that pull up the relevant information for the search result page. To establish your search form's settings and format, you must first define the data set for specific hidden outputs.

 The available hidden inputs are described in the table below.

 Hidden Input

 name="xxx"

 Required?

 Value

 value="xxx"

 corpid

 Check

 Officially known as your Company Code , which points to your Rent Manager database. This is provided when you sign up for web access, and can also be found at the top of Rent Manager .

 headerfooter

  

 Enter True to display the header and footer in the output, or False to hide the header and footer. The header and footer includes information such as Page 1 of 3 and Previous and Next navigation buttons.

 If this input is not specified, the default is True .

 locations

  

 The list of database locations to include, separated by commas.

 maxperpage

  

 Enter a numeric value to determine the maximum number of results to display per page. If this input is not specified, the default maxperpage is 10 .

 mode

 Check

 Specifies if you are using javaScript or RawOutput .

 If using RawOutput , the table header/footer and page numbering is suppressed and the output displays only what is in the template.

 rmwebsvc_command

 Check

 Specifies the type of template (side page) to use.

 Use the values provided below to return the associated output.

 Property Detail

 PropertyDetail

 Property List

 PropertyListing

 Unit Detail

 Detail_View

 Unit List

 Search_Result

 template

  

 The name of the template you wish to use.

 Example

 Below is an example of hidden inputs for a search form. Additionally, you must replace the instance of Your CorpID (marked in red ) with your Rent Manager Company Code .

 <form action="" method="get">
<input type="hidden" name="rmwebsvc_command" id="rmwebsvc_command"
value="PropertyListing" />
<input type="hidden" name="corpid" id="corpid" value=" Your CorpID " />
<input type="hidden" name="locations" id="locations" value="default" />
<input type="hidden" name="mode" id="mode" value="javaScript" />
<input type="hidden" name="headerfooter" id="headerfooter" value="true" />
<input type="hidden" name="maxperpage" id="maxperpage" value="5" />
</form>

 Filters

 Filters limit what information displays on the website by applying specific criteria to the data submitted from a Rent Manager variable. This allows you to present multiple views of the stored data in a dataset without changing or affecting the data so that only values meeting the specified filtering criteria display on the website.

 The filter criteria is established through filter expressions composed of comparison operators (using names based on Rent Manager variables) or filter variables.

 More Information

 When it comes to filter expressions, the spaces, colons, and hyphens in Rent Manager variables should be replaced with underscores. For example, the variable unituserdef:pets accepted should be written in the following way as a filter: unituserdef_pets_accepted .

 Comparison Operators

 The available comparison operators are described in the table below. If no conditional is specified, lk is used by default.

 Comparison Operators

 Description

 eq (EQ)

 Equal to

 ge (GE)

 Greater than or equal to

 gt (GT)

 Greater than

 le (LE)

 Less than or equal to

 lk (LK)

 Like

 lt (LT)

 Less than

 ne (NE)

 Not equal to

 More Information

 The difference between Equal to and Like is that Equal to analyzes the entire string for an exact match, while Like analyzes the string character by character looking for similar patterns.

 Availability Filter Variable

 The variable filter below is used only if you are using a unit availability template that filters availability by Vacancy and Unit Status .

 availabilitydate

 This variable is not used in the *{xxx}* format. It is passed in the filter form as a parameter as the date used to determine which units are available. If it is not passed, all units available on the current date return in the results.

 Sample Filter Expressions

 The table below provides various examples of filter expressions.

 Filter Variables

 Description

 city

 No comparison operator is specified, so the default operator like is used. Therefore, this returns properties/units with a City that is similar to the specified value.

 flooreq

 Returns units that are located on Floor the matches the specified value.

 marketrentge

 Returns units with a Market Rent amount that is greater than or equal to the specified value.

 unituserdef_number_of_windowsgt

 This analyzes the unit UDF for Number of Windows and returns units with a number greater than the specified value.

 Online Applications

 When creating a website, you may wish to link a user to an online application form where they can submit their information to apply for a unit. Below we provide the code for linking to the proper Apply Now website for prospects to submit their applications online.

 Apply Now is a Rent Manager feature that allows prospective tenants to securely submit an online application and automates the process of receiving rental applications, collecting application fees, and screening prospects. You can also create and customize the application forms via Rent Manager 's application designer. For more information, refer to Apply Now Applications .

 Link to Apply Now

 To direct the prospect to a general Apply Now link where they manually select the property and unit they wish to apply for, use the link below in your code. The red text indicates information that you must replace with your Rent Manager Company Code .

 https:// CompanyCode .twa.rentmanager.com/applynow

 If you would like to provide a more specialized link that preselects a property, or a property and unit, you can add a more specific URL that defines that information.

 For example, to direct a prospect to apply for a specific unit, use the link below in your code. The red text indicates information that you must replace your Rent Manager Company Code . The green text indicates the part of the query string which passes the property and unit values.

 https:// CompanyCode .twa.rentmanager.com/applynow?pid= PropertyID &uid= UnitID

 For more information on how to customize and use Apply Now links, refer to Create and Customize Apply Now Links .

 Scripting Variables

 Specific variables are available for you to use to pull property-level and unit-level data. You can use both unit and property variables to pull unit information. Each of these fields can be found in the Insertable Fields of script builder. For more information, refer to Scripting .

 Property Variables

 Property variables can be used in your templates to display property-specific information. Property-specific variables generally begin with p , but not always. Most fields listed in the table are located on each property's details page in Rent Manager unless otherwise specified.

 Insertable Field

 Variable

 Rent Manager Data

 Append Unit List

 *{unitlist}*

 A list of units at the property.

 Append Unit Type List

 *{unittypelist}*

 A list of unit types at the property.

 Billing City

 *{pbillcity}*

 The city listed for the property's address marked as Billing .

 Billing CSZ

 *{pbillcsz}*

 The city, state, and zip code listed for the property's address marked as Billing .

 Billing Name 1

 *{pbillname1}*

 The name entered in the Other Information tile's Billing Name 1 field.

 Billing Name 2

 *{pbillname2}*

 The name entered in the Other Information tile's Billing Name 2 .

 Billing State

 *{pbillstate}*

 The state listed for the property's address marked as Billing .

 Billing Street 1

 *{pbillstreet1}*

 The first line of the street listed for the property's address marked as Billing .

 Billing Street 2

 *{pbillstreet2}*

 The second line of the street listed for the property's address marked as Billing .

 Billing Zip

 *{pbillzip}*

 The zip code listed for the property's address marked as Billing .

 City

 *{pcity}*

 The city listed for the property's address marked as Default .

 Comments

 *{pcomments}*

 Any text entered in the Other Information tile's Comment field.

 CSZ

 *{pcsz}*

 The city, state, and zip code listed for the property's address marked as Default .

 Email

 *{pemail}*

 The property's email address specified in the General tile's Email field.

 Manager

 *{pmanager}*

 The name of the property's primary manager entered in the General tile's Manager field.

 Maximum Square Feet

 *{maxsquarefeet}*

 The largest amount entered in the Square Footage field on the General tab of a unit.

 Maximum Vacant Square Feet

 *{maxvacantsquarefeet}*

 The largest amount entered in the Square Footage field for an unoccupied unit.

 Minimum Square Feet

 *{minsquarefeet}*

 The smallest amount entered in the Square Footage field for a unit.

 Minimum Vacant Square Feet

 *{minvacantsquarefeet}*

 The smallest amount entered in the Square Footage field for an unoccupied unit.

 Phone

 *{pphone}*

 The phone number marked as Default for the property.

 Property Detail URL

 *{propertydetailurl}*

 The URL to the website's detail page for the property.

 Property ID

 *{ppid}*

 The unique, system-generated account number for the property in Rent Manager .

 Property Name

 *{ppropertyname}*

 The entire name of the property entered in the General tile's Full Name field.

 Property Type

 *{pproptype}* or *{ptype}*

 The category selected in the General tile's Property Type field.

 Property User Defined Fields

 *{propuserdef: udfname }*

 For example:

 *{propuserdef:school district}*

 The value entered on the property for the specified property-level UDF, located on the property's UDFs tile.

 Replace the red text with the UDF's Name . If the name contains more than one word, spaces are used to separate the words.

 Short Name

 *{pshortname}*

 The abbreviated name of the property entered in the General tile's Short Name field.

 State

 *{pstate}*

 The state listed for the property's address marked as Default .

 Street 1

 *{pstreet1}*

 The first line of the street listed for the property's address marked as Default .

 Street 2

 *{pstreet2}*

 The second line of the street listed for the property's address marked as Default .

 Tax ID

 *{ptaxid}*

 The tax ID number entered in the Other Information tile's Property Tax ID field.

 Total Occupied Square Feet

 *{occupiedsquarefeet}*

 The total amount of the Square Footage entered on all occupied units at the property.

 Total Square Footage

 *{ptotalsquarefootage}*

 The property's entire square footage amount entered in the Other Information tile's Total Sq Ft field.

 Total Units

 *{totalunits}*

 The total number of units at the property.

 Total Vacant Units

 *{totalvacantunits}*

 The total number of units at the property that are currently vacant.

 Vacant Square Feet

 *{vacantsquarefeet}*

 The total amount of the Square Footage entered on all vacant units at the property.

 Zip

 *{pzip}*

 The zip code listed for the property's address marked as Default .

 Unit Variables

 Unit variables can be used in your templates to display unit-specific information. Most fields listed in the table are located on each unit's details page in Rent Manager unless otherwise specified.

 Insertable Field

 Variable

 Rent Manager Data

 Amenities

 *{amen: amenityname }*

 For example:

 *{amen:Ceiling Fan}*

 Returns Yes if the unit has the specified amenity on the Amenities pop-up, and No if it does not.

 Replace the red text with the amenity's Name . If the name contains more than one word, spaces are used to separate the words.

 Amenity List

 *{amenitylist}*

 Generates an unordered list of the amenities specified on the unit's Amenities pop-up.

 Availability Date Result

 *{availabilitydateresults}*

 The information returned depends on the Search Date selected for the unit profile in use, and the additional settings established for the option.

 If Single Date is selected, the date the unit becomes available displays. If the unit was never occupied, it returns blank.

 If Date Range is selected, a list of dates or date ranges on which the unit becomes available displays separated by commas.

 Bathrooms

 *{bathrooms}*

 The number of bathrooms in the unit entered in the Miscellaneous tile's Bathrooms field.

 Bedrooms

 *{bedrooms}*

 The number of bedrooms in the unit entered in the Miscellaneous tile's Bedrooms field.

 City

 *{city}*

 The city listed for the unit's address marked as Default .

 CSZ

 *{csz}*

 The city, state, and zip code listed for the unit's address marked as Default .

 Floor

 *{floor}*

 The floor on which the unit is located as specified in the General tile's Floor field.

 Market Rent

 *{marketrent}*

 The current market rent Amount entered on the unit's View Market Rent pop-up.

 Property ID

 *{pid}*

 The unique, system-generated account number for the unit's property in Rent Manager .

 Property Name

 *{propname}*

 The Full Name of the unit's property entered on the property's details page.

 Property Type

 *{proptype}*

 The type of property (such as Apartment or Single Family ) where the unit is located, as selected on the property's details page in the Property Type field.

 Raw Amenity List

 *{amenitylistraw}*

 Returns a list of all amenities that includes the amenity name, description, and displays Yes or No depending on whether or not the unit has that amenity.

 Raw Google Map URL

 *{mapurl}*

 The URL to the unit's location on Google maps.

 Raw Image Type

 *{imagetyperaw: imagetype }*

 For example:

 *{imagetyperaw:Web Unit Images}*

 A list of links to the web collection images. Each link is separated by | (pipe character).

 Replace the red text with the name of the image type to display. All images of that type on the property's Images tile display. If the name contains more than one word, spaces are used to separate the words. The name must match the image type name in Rent Manager exactly.

 Square Footage

 *{squarefootage}*

 The square footage amount of the unit entered in the General tile's Square Footage field.

 State

 *{state}*

 The state listed for the unit's address marked as Default .

 Street 1

 *{street1}*

 The first line of the street listed for the unit's address marked as Default .

 Street 2

 *{street2}*

 The second line of the street listed for the unit's address marked as Default .

 Unit Detail URL

 *{detailurl}*

 The URL to the website's detail page for the unit.

 Unit ID

 *{unitid}*

 The unique, system-generated account number for the unit in Rent Manager .

 Unit Name

 *{unit}*

 The name of the unit entered in the General tile's Name field.

 Unit Type Description

 *{unittype}*

 The text entered in the Description field of the unit's unit type.

 Unit Type ID

 *{unittypeid}*

 The unique, system-generated account number for the unit's unit type in Rent Manager .

 Unit User Defined Field

 *{unituserdef: UDFname }*

 For example:

 *{unituserdef:Smoking Allowed}*

 The value entered on the unit for the specified unit-level UDF, located on the unit's UDFs tile.

 Replace the red text with the UDF's Name . If the name contains more than one word, spaces are used to separate the words. The name must match the UDF name in Rent Manager exactly.

 Zip

 *{zip}*

 The zip code listed for the unit's address marked as Default .

 Recursion Feature

 Templates can be parsed recursively, meaning that if you define a script within a script, Rent Manager searches the database until a value is found. This function is particularly useful with user-defined fields (UDFs) and multisites. For example, you can assign a scripting variable as its field value and point to the value of the corresponding UDF. This feature can be used for property and unit UDFs.

 For example, consider a scenario where you have a property with the following two UDFs and values entered on the property's UDFs tile:

 UDF Name
 Value

 Test1

 Hello World!

 Test2

 *{propuserdef:Test1}*

 In this scenario, if you define *{propuserdef:Test2}* on an availability template, the system sees that the Test2 UDF is pointing to the Test1 UDF, and therefore returns Test1 's value of Hello World! in the output.

 Sample Search Forms and Templates

 Below are sample templates and search form coding you can reference when creating your own. Depending on the code you enter, the format and style of the search form may change. Below is an example of a search form:

 The examples below determine the web pages that display during the following workflow used by the prospect on your website:

 -
 An initial search page where the prospect enters their filter criteria.

 -
 The property list that is narrowed down by the search criteria the prospect entered.

 -
 The property detail page for the property that the prospect selects from the list.

 -
 The unit list for the selected property.

 -
 The unit detail page for the unit selected by the prospect.

 Initial Search Form Page

 The code below defines an example of a search form that displays the initial search results. Additionally, you must replace the instance of Your CorpID (marked in red ) with your Rent Manager Company Code .

 <!-- Replace "Your Page To Display Results" in the action of the form with your desired search results page, such as Search_Result -->
<form action="Your Page To Display Results" method="get">
<input type="hidden" name="rmwebsvc_command" id="rmwebsvc_command" value="search_result" />
<!-- Replace "Your CorpID" with your Company Code in the value field of rmwebsvc_corpid -->
<input type="hidden" name="rmwebsvc_corpid" id="rmwebsvc_corpid" value=" Your CorpID " />
<input type="hidden" name="rmwebsvc_mode" id="rmwebsvc_mode" value="JavaScript" />
<input type="hidden" name="rmwebsvc_locations" id="rmwebsvc_locations" value="default" />
<input type="hidden" name="fromsearch" value="fromsearch" />
<table align="center">
<tr>
<td>City</td>
<td><input name="citylk" type="text" /></td>
</tr>
<tr>
<td>State</td>
<td><input name="statelk" type="text" /></td>
</tr>
<tr>
<td>Zip</td>
<td><input name="ziplk" type="text" /></td>
</tr>
<tr>
<td>Bedrooms</td>
<td>
<select name="unituserdef_bedroomseq">
<option value="1">1</option>
<option value="2">2</option>
</select>
</td>
</tr>
<tr>
<td>Desired Move In Date</td>
<td><input name="availabilitydate" type="text" /></td>
</tr>
<tr>
<td>&nbsp;</td>
<td><input type="submit" value="Search/View All" /></td>
</tr>
</table>
</form>

 Property Listing Example

 The code below defines an example of the property listing returned by a prospect's search. The code is set in a repeatable format.

 <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td><a href='*{propertydetailurl}*'><img src="*{propuserdef:Exterior Picture}*" border="0" /></a></td>
<td>
<table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td><a href='*{propertydetailurl}*'>*{ppropertyname}*</a></td>
</tr>
<tr>
<td>Type *{ptype}*</td>
</tr>
<tr>
<td>Street *{pstreet1}*</td>
</tr>
</table>
</td>
</tr>
</table>

 Property Details with Appended Unit Listing Example

 The code below defines an example of the selected property's detail page, followed by a list of the units at the property. You can append the available unit list to the same property detail web page by inserting *{unitlist}* before the final </div> in the code.

 <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td>*{ppropertyname}*</td>
<td><a href='*{propertymapurl}*'>Get Directions</a></td>
</tr>
</table>
<table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td><img src="*{propuserdef:Exterior Picture}*" /></td>
<td>Property Description *{propuserdef:Property Description}*</td>
</tr>
</table>
<!-- append unit list -->
*{unitlist}*

 Unit Listing Example

 The code below defines an example of the unit listing returned when the prospect selects a property.

 <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<tr>
<td>Unit/Suite: *{unit}*</td>
<td>Square Footage: *{squarefootage}*</td>
<td><a href='*{detailurl}*'>Unit Details</a></td>
</tr>
</table>

 Unit Detail Example

 The code below defines an example of the unit details returned when the prospect selects a unit.

 <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td>*{street1}*, *{city}*, *{state}* *{zip}*</td>
<td><a href='*{mapurl}*'>Get Directions</a></td>
</tr>
</table>
<br />
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<tr>
<td><img src="*{UNITUSERDEF:unit exterior}*" /></td>
<td>
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<tr>
<td>Unit Description: *{unituserdef:Unit Description}*</td>
</tr>
<tr>
<td>Square Footage: *{squarefootage}*</td>
</tr>
</table>
</td>
</tr>
</table>
<br />
<table align="center" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td><img src="*{unitserdef:Unit interior 1}*" /></td>
<td><img src="*{unitserdef:Unit interior 2}*" /></td>
<td><img src="*{unitserdef:Unit interior 3}*" /></td>
</tr>
</table>
<br />
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<tr>
<td>Additional Details *{unituserdef:Additional Details}*</td>
</tr>
</table>

 Search Result Page Example

 The search result page displays the HTML added in the template established in the Rent Manager system web preferences when defining templates. This page requires the RentManagerWebAgent.dll file provided by LCS .

 The server-side code <% thisAvailableUnits.GetContent(); %> indicates where the template data is inserted into the page.

 Warning

 In the code provided below, the portions of the code shaded in blue must be created in a new web page, or included in your existing web page.

 Additionally, you must replace the instance of CorpID (marked in red ) with your Rent Manager Company Code .

 <%@ Page Language="C#" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Text" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Text.RegularExpressions" %>
<%
RentManager.WebAgent.availableUnits thisAvailableUnits = new
RentManager.WebAgent.availableUnits();
thisAvailableUnits.URL = "https:// CorpID .ua.rentmanager.com/";
thisAvailableUnits.corpID = " CorpID ";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Search Results</title>
</head>
<body>
<% thisAvailableUnits.GetContent(); %>
</body>
</html>
