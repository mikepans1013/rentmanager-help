# Recent Online Applications (Dashboard Tile)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Dashboard-Tiles/Recent-Online-Applications.htm

The Recent Online Applications dashboard tile helps track rental applications submitted by prospects through Apply Now . The tile can be customized to display applications within a set number of days for selected properties. In addition, you can choose to include or exclude various application or screening statuses.

 The information on this dashboard tile is represented in a list.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit own dashboards
 Enabled

 Tenants/Prospects
 Application
 View

 To view this tile in system dashboards, you must be listed as an assigned user for the system dashboard that includes this tile.

 For more information, refer to Control User Access .

 Filter Information

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit dashboard data filters
 Enabled

 For more information, refer to Control User Access .

 To filter the information that displays in the dashboard tile, click   arrow_forward   Settings to open the Recent Online Applications Data Filters pop-up. The available filter options are listed below.

 Option
 Description

 Days to Include

 The number of days in the past to display applications on the tile. For example, to list applications that are at least one week old, enter 7 .

 Property Filter

 Each property's prospects with submitted rental applications are included in the tile results. To include all current and future properties, select <All Properties> . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Exclude completed Applications

 Excludes applications that are already completed from displaying on the tile.

 Exclude in progress applications

 Excludes applications that are not yet completed from displaying on the tile.

 Screening statuses to include

 To display applicants that have at least one person who is not yet screened, check Not Screened . To display applications where all applicants and sub-applicants are screened, check Screened .

 ID Verification Statuses to Include

 To only display applicants with specific ID verification statuses, check the statuses to include from the drop-down list.

 Income Verifications Statuses to Include

 To only display applicants with specific income verification statuses, check the statuses to include from the drop-down list.

 Ignore dashboard property filter

 If checked, override the property filter configured on the Dashboard .

 Column Descriptions

 The information that displays on the tile is organized into the following columns.

 Column
 Description

 Applicant

 The name of the primary applicant.

 Date

 For unfinished applications, the date an application was started displays. For completed applications, the date an application was submitted displays.

 ID Verification

 The status of the ID verification of each applicant. The ID Verification and Income Verification orders are run concurrently.

 The following statuses can display for this column:

 In Progress

 The ID Verification screening is enabled in the online application, but no confirmation response has been received from Ibbie.

 None

 There is no ID Verification order for the applicant's application.

 Overridden

 The applicant's identity was not verified, and a Rent Manager user accessed the Continue Income Verification pop-up and selected Continue Income Verification . This action allows the applicant to resubmit the Income Verification order while bypassing the ID verification check.

 Resent

 The applicant was prompted to resubmit an ID Verification order after a Rent Manager user accessed the Resend ID Verification pop-up and selected Resend .

 Unable to Verify

 The ID verification order was submitted, but an error code response was received by Ibbie.

 Verified

 The applicant has passed the ID verification and passcode authentication checks. A confirmation response was received from Ibbie.

 Income Verification

 The status of the income verification of each applicant.

 The following statuses can display for this column:

 Completed

 The applicant(s) has fully completed the income verification process in their application.

 If there are multiple applicants, the total number of completed applicants displays. For example, if 3 out of 4 total applicants in a single application received income verification requests and only 1 has completed it, the status 1 of 3 Completed displays.

 Error

 There is an error in the income verification process.

 If there is an error with sending the link to the applicant, the status Invitation Error displays.

 Expired

 The most recent income verification link has expired.

 If the applicant has an expired income verification link and requested a new link through Tenant Web Access (TWA) , the status Expired - Link Requested displays, prompting the user to resend an income verification link.

 Failed to Create Order

 Rent Manager is unable to send the income verification order due to missing or invalid fields.

 None

 There is no income verification for the recipient's application.

 Related Preferences

 To determine if an income verification should be included for an online application, select the system web preference Require income verification with online applications . For more information, refer to Tenant Web Access Apply Now General (System Web Preferences) .

 Received

 The applicant was received, but not submitted, the most recent link to complete the income verification.

 Submitted

 The applicant's income verification has been submitted by the applicant(s), but not yet completed.

 Property

 The property short name associated with the application.

 Screened

 If an AmRent screening was completed on all applicants, Yes displays. If there is at least one applicant who has not been screened, No displays.

 Unit

 The name of the unit associated with the application.
