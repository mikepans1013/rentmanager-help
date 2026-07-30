# Set Up an Association Property

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Association-Property-Set-Up.htm

Associations in Rent Manager allow you to utilize specific tool sets for a property such as committees and boards, violations, architectural requests, surveys, and making property files available in Tenant Web Access (TWA) . This topic guides you through the steps to set up all the necessary elements of your association in Rent Manager to fit your business needs.

 Step 1: Create an Association Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Add

 Property Bank Settings
 View, Edit

 Management fee setup
 Add

 For more information, refer to Control User Access .

 The first step is to create the property for your association. You also need to create units for the property to represent each rentable space, such as a single family home or apartment.

 More Information

 In Rent Manager , the definition of a property applies to any entity with its own financial data (i.e., generates revenue and incurs expenses). This means you should create a property in Rent Manager for each financial entity. For example, if you have a homeowners association (HOA) where each neighborhood has its own finances that are tracked separately, you would create each neighborhood as an individual property. However, if the all neighborhoods under the HOA share financial data tracking, you would create only one property and add a unit to the property for each individual home unit from all neighborhoods.

 To create your association property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties .
The Properties page displays.

 -
 At the top, click Add Property .
The Add Property wizard displays.

 -
 In the Property Type field, select Association .

 -
 Enter information into the remaining available fields for the property. For more information, refer to Add a Property .

 -
 Click Save and Finish .
The association property is added to Rent Manager .

 More Information

 After you have created your association property, you must add units to the property and then add the tenants to those units. This is crucial for setting up your boards and committees because you must select tenant contacts as the board and committee members. For more information, refer to Add a Unit and Add a Tenant .

 Step 2: Set Up the Association Committee

 If your property is an association such as a homeowners association (HOA), you may have committees of people related to various aspects of the association (e.g., a social committee). If you have a committee that reviews requests for architectural changes to a home such as planting trees, adding gardens, or painting, committee members may view and vote on tenant requests in the TWA portal.

 Create a Committee

 Related Privileges

 Group
 Privilege
 Column

 Associations
 Manage Committees
 Enabled

 For more information, refer to Control User Access .

 To add an association committee to a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Properties/Units arrow_forward Association Committees .
The Committees page displays.

 -
 Click Add Committee .
The Add Committee pop-up displays.

 -
 Enter the following information:

 Field
 Description

 Description

 A note to explain the purpose of the committee.

 Display Name

 The name of the committee that displays in the Tenant Web Access (TWA) portal.

 Name

 The name of the committee that displays internally in Rent Manager .

 View Architectural Request on TWA

 If checked, allows members of this committee to be able to view architectural requests in TWA.

 Vote on architectural requests

 If checked, allows members of this committee to be able to vote on architectural requests in TWA.

 -
 Click Save to accept your changes and close the pop-up.
The new committee is added and automatically available for all association-type properties.

 Add Committee Members

 Related Privileges

 Group
 Privilege
 Column

 Associations
 Manage Committees
 Enabled

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To establish the committee members for an association property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select an association-type property from the list.
The property's details page displays.

 -
 On the action bar to the right, select arrow_forward Committee Members .
The Committee Members pop-up displays.

 -
 Click Add .
The Add Committee Member pop-up displays.

 -
 Enter the following information:

 Field
 Description

 Comments

 Any additional comments regarding this committee member.

 Committee

 The association committee on which to assign the member.

 Contact Name

 The contact name of the committee member, selected from the tenant's list of contacts. This is useful for scenarios where there are multiple contacts on a tenant account, and the committee member is not the primary tenant.

 Email

 The email address that the committee member uses to log into Tenant Web Access .

 If the email address was not previously entered on the contact information, Rent Manager prompts you to update the email address for this contact. Click Yes to confirm.

 More Information

 If the entered email address does not match an existing Tenant Web Access account, Rent Manager will ask the user to create a Tenant Web Access account for the email address.

 Tenant

 The primary tenant account of the committee member.

 -
 Click Save
The member is added to the committee.

 -
 Repeat these steps until all committee members are added for all necessary committees at the association property.

 Step 3: Set Up the Association Board

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 Board members are the governing body of an association and an integral part of your association. Assigning members to a property's board allows you to access additional board-specific features like member polls and surveys, sharing specific property files amongst board members, and viewing and voting on architectural requests.

 To add an association board member to a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select an association-type property from the list.
The property's details page displays.

 -
 On the action bar to the right, click arrow_forward Board Members .
The Board Members pop-up displays.

 -
 Click Add .
The Board Member Details pop-up displays.

 -
 Enter the following information:

 Field
 Description

 Comments

 Additional comments regarding this board member, such as Can fill in for the secretary on occasions the secretary is out .

 Contact Name

 The contact name of the board member, selected from the tenant's list of contacts. This is useful for scenarios where there are multiple contacts on a tenant account, and the board member is not the primary tenant.

 Email

 The email address that the board member uses to log into Tenant Web Access (TWA) .

 If the email address was not previously entered on the contact information, Rent Manager prompts you to update the email address for this contact. Click Yes to confirm.

 More Information

 If the entered email address does not match an existing Tenant Web Access account, Rent Manager will ask the user to create a Tenant Web Access account for the email address.

 Tenant

 The primary tenant account of the board member.

 Term End date

 The date on which the contact completes their term as a board member. On this date, the contact loses access to board-specific property files and TWA items.

 Term start date

 The date on which the contact starts as a board member. On this date, the contact gains access to board-specific property files and TWA items.

 -
 Click Save .
The member is added to the association board.

 -
 Repeat these steps until all board members are added to the association property.

 Next Steps

 After you have set up your association property, you can set up any additional tools you wish to use for this property, such as violations, reports, and sharing property files.

 Option
 Description

 Publish TWA Reports

 You can publish reports to Tenant Web Access for committee members, board members, or all tenants at the property. These reports can be publishing individually on a one-time basis, or you can schedule reports to run at regular intervals and automatically be shared to TWA. For more information, refer to Publish Association Reports to Tenant Web Access (TWA) .

 Violations

 Violations are used to track and document instances when tenants break the community standards established for your properties, such as those with a homeowners association. By replicating your rules and regulations in Rent Manager , you can track and manage tenants with violations, infraction penalties, and penalty escalations and link them to specific codes in your bylaws. For more information, refer to Set Up Violations .

 Property Files

 You can upload relevant documents and files for your association property and, optionally, make any of those files available to tenants and/or board members in TWA. You can upload images, PDFs, and word processor documents and organize these files into folders. For more information, refer to Add a Property File .

 Surveys

 Surveys can be created to connect with your tenants and collect their feedback on your properties, units, management, amenities, and service issues. For example, you may want tenants provide feedback on your property before they move out, or automatically send satisfaction surveys when a service issue is completed. You may also create a survey for TWA requesting suggestions for improving the community pool, gather votes for potential new amenities, or poll tenants on their interest in a holiday-themed community event. For more information, refer to Add and Activate a Survey and Add and Publish a Survey to Tenant Web Access (TWA) .

 Architectural Requests

 You can use the architectural requests tool to document any requests that need to be approved by association members, such as planting trees, adding gardens, or repainting the building a specific color. You can even create customizable request forms to make sure you receive all the information you need to proceed with a request. For more information, refer to Add an Architectural Request Form and Add an Architectural Request .
