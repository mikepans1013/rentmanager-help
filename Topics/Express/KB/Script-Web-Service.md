# Web Service Scripts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Web-Service.htm

Web service scripting functions pull data directly from the values entered and submitted through an online application. This is particularly useful when creating automated notifications for submitted online applications because you can provide a personalized email and/or text notification using specific information from the prospect or tenant application.

 From the email or text message section of an automated notification for Application Submitted , click arrow_forward Script Builder for web service scripting. For more information, refer to Scripting .

 Scripting functions for online applications are available in the Insertable Fields panel for the following:

 -
 Contact

 -
 Prospect

 -
 Tenant

 -
 User Defined Field

 Warning

 In order for the following web service scripting functions to contain data, the online application field from which the script is pulling must be matched to the corresponding Rent Manager field.

 Contact Scripts

 Web service scripting functions for contacts are used to pull data for a selected contact directly from a submitted online application.

 Web service scripts for contacts are inserted as *{rmwebsvc_people_fieldname_ # }* where people indicates contacts and # refers to the index for additional contacts listed after the primary tenant/prospect. When using these scripts, you must replace # with a numeric index. For example, entering 1 selects the first additional contact listed after the primary tenant or prospect.

 Function
 Description

 Birthday

 *{rmwebsvc_people_bdate_#}*

 The data the applicant entered for the contact's Birthday on the online application.

 Email

 *{rmwebsvc_people_email_#}*

 The data the applicant entered for the contact's Email on the online application.

 Employer

 *{rmwebsvc_people_employer_#}*

 The data the applicant entered for the contact's Employer on the online application.

 First Name

 *{rmwebsvc_people_fname_#}*

 The data the applicant entered for the contact's First Name on the online application.

 Last Name

 *{rmwebsvc_people_lname_#}*

 The data the applicant entered for the contact's Last Name on the online application.

 License

 *{rmwebsvc_people_license_#}*

 The data the applicant entered for the contact's License on the online application.

 Soc Sec #

 *{rmwebsvc_people_ssn_#}*

 The data the applicant entered for the contact's Soc Sec # on the online application.

 Vehicle

 *{rmwebsvc_people_car_#}*

 The data the applicant entered for the contact's Vehicle on the online application.

 User Defined Field

 *{rmwebsvc_eudf_fieldname_#}*

 The data the applicant entered for the contact-type user defined field (UDF) on the online application.

 Web service scripts for contact UDFs are inserted as *{rmwebsvc_eudf_fieldname_ # } * where # refers to the index for additional contacts listed after the primary tenant/prospect. When using these scripts, you must replace # with a numeric index. For example, entering 1 selects the first additional contact listed after the primary tenant or prospect.

 More Information

 In order for the UDF web service scripting fields to contain data, the online application fields from which the script is pulling must be matched to the corresponding Rent Manager UDF.

 *{rmwebsvc_eudf_minor_1}*

 The data for the Minor user defined field of the first additional contact listed after the primary tenant or prospect.

 Prospect Scripts

 Web service scripting functions for prospects are used to pull data for a primary prospect directly from a submitted online application.

 More Information

 Note that similar to other areas of Rent Manager where tenants and prospects have certain fields in common, a tenant web service script may provide data for the same field if the applicant is a prospect.

 Function
 Description

 # People

 *{rmwebsvc_num_of_people}*

 The data the applicant entered for their # People on the online application.

 Application Date

 *{rmwebsvc_applicationdate}*

 The data the applicant entered for their Application Date on the online application.

 Birthday

 *{rmwebsvc_bdate}*

 The data the applicant entered for their Birthday on the online application.

 Comment

 *{rmwebsvc_comment}*

 The data the applicant entered for their Comment on the online application.

 Display Color

 *{rmwebsvc_display}*

 The data the applicant entered for their Display on the online application.

 Email

 *{rmwebsvc_email}*

 The data the applicant entered for their Email on the online application.

 Employer

 *{rmwebsvc_employer}*

 The data the applicant entered for their Employer on the online application.

 First Name

 *{rmwebsvc_fname}*

 The data the applicant entered for their First Name on the online application.

 Interest Level

 *{rmwebsvc_interest_level}*

 The data the applicant entered for their Interest Level on the online application.

 Last Name

 *{rmwebsvc_lname}*

 The data the applicant entered for their Last Name on the online application.

 License

 *{rmwebsvc_license}*

 The data the applicant entered for their License on the online application.

 Soc Sec #

 *{rmwebsvc_ssn}*

 The data the applicant entered for their Soc Sec # on the online application.

 Vehicle

 *{rmwebsvc_car}*

 The data the applicant entered for their Vehicle on the online application.

 User Defined Field

 *{rmwebsvc_pudf_fieldname}*

 The data the applicant entered for prospect-type user defined field (UDF) on the online application.

 More Information

 In order for the UDF web service scripting fields to contain data, the online application fields from which the script is pulling must be matched to the corresponding Rent Manager UDF.

 *{rmwebsvc_pudf_driver's_license_photo}*

 The data the applicant entered for the Driver's License Photo user defined field on the online application.

 Tenant Scripts

 Web service scripting functions for tenants are used to pull data for a primary tenant directly from a submitted online application.

 More Information

 Note that similar to other areas of Rent Manager where tenants and prospects have certain fields in common, a tenant web service field may provide data for the same field if the applicant is a prospect.

 Function
 Description

 Birthday

 *{rmwebsvc_bdate}*

 The data the applicant entered for their Birthday on the online application.

 Default City

 *{rmwebsvc_pcity}*

 The data the applicant entered for their City on the online application.

 Default Phone

 *{rmwebsvc_phone_primary}*

 The data the applicant entered for their Phone on the online application.

 Default State

 *{rmwebsvc_pstate}*

 The data the applicant entered for their State on the online application.

 Default Street 1

 *{rmwebsvc_pstreet1}*

 The data the applicant entered for their Street1 on the online application.

 Default Street 2

 *{rmwebsvc_pstreet2}*

 The data the applicant entered for their Street2 on the online application.

 Default ZIP

 *{rmwebsvc_pzip}*

 The data the applicant entered for their Postal Code on the online application.

 Display Color

 *{rmwebsvc_display}*

 The data the applicant entered for their Display on the online application.

 Email

 *{rmwebsvc_email}*

 The data the applicant entered for their Email on the online application.

 Employer

 *{rmwebsvc_employer}*

 The data the applicant entered for their Employer on the online application.

 First Name

 *{rmwebsvc_fname}*

 The data the applicant entered for their First Name on the online application.

 Last Name

 *{rmwebsvc_lname}*

 The data the applicant entered for their Last Name on the online application.

 License

 *{rmwebsvc_license}*

 The data the applicant entered for their License on the online application.

 Move In Date

 *{rmwebsvc_movein}*

 The data the applicant entered for their Move In on the online application.

 Move Out Date

 *{rmwebsvc_moveout}*

 The data the applicant entered for their Move Out on the online application.

 Soc Sec #

 *{rmwebsvc_ssn}*

 The data the applicant entered for their Soc Sec # on the online application.

 Vehicle

 *{rmwebsvc_car}*

 The data the applicant entered for their Vehicle on the online application.

 User Defined Field

 *{rmwebsvc_cudf_fieldname}*

 The data the applicant entered for the tenant-type user defined field (UDF) on the online application.

 More Information

 In order for the UDF web service scripting fields to contain data, the online application fields from which the script is pulling must be matched to the corresponding Rent Manager UDF.

 *{rmwebsvc_cudf_permission_to_send_texts}*

 The data the applicant entered for the Permission to Send Texts user defined field on the online application.
