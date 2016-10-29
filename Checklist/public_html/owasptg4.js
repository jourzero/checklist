
// OWASP's
var lst = new Array(
                    "Conduct search engine discovery/reconnaissance for information leakage (OTG-INFO-001)<a href=\"https://www.owasp.org/index.php/Conduct_search_engine_discovery/reconnaissance_for_information_leakage_%28OTG-INFO-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Fingerprint Web Server (OTG-INFO-002)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Server_%28OTG-INFO-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Review Webserver Metafiles for Information Leakage (OTG-INFO-003)<a href=\"https://www.owasp.org/index.php/Review_Webserver_Metafiles_for_Information_Leakage_%28OTG-INFO-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Enumerate Applications on Webserver (OTG-INFO-004)<a href=\"https://www.owasp.org/index.php/Enumerate_Applications_on_Webserver_%28OTG-INFO-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Review Webpage Comments and Metadata for Information Leakage (OTG-INFO-005)<a href=\"https://www.owasp.org/index.php/Review_webpage_comments_and_metadata_for_information_leakage_%28OTG-INFO-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Identify application entry points (OTG-INFO-006)<a href=\"https://www.owasp.org/index.php/Identify_application_entry_points_%28OTG-INFO-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Map execution paths through application (OTG-INFO-007)<a href=\"https://www.owasp.org/index.php/Map_execution_paths_through_application_%28OTG-INFO-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Fingerprint Web Application Framework (OTG-INFO-008)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Application_Framework_%28OTG-INFO-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Fingerprint Web Application (OTG-INFO-009)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Application_%28OTG-INFO-009%29\" target=\"_blank\">  [Ref] </a>",
                    "Map Application Architecture (OTG-INFO-010)<a href=\"https://www.owasp.org/index.php/Map_Application_Architecture_%28OTG-INFO-010%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Network/Infrastructure Configuration (OTG-CONFIG-001)<a href=\"https://www.owasp.org/index.php/Test_Network/Infrastructure_Configuration_%28OTG-CONFIG-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Application Platform Configuration (OTG-CONFIG-002)<a href=\"https://www.owasp.org/index.php/Test_Application_Platform_Configuration_%28OTG-CONFIG-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Test File Extensions Handling for Sensitive Information (OTG-CONFIG-003)<a href=\"https://www.owasp.org/index.php/Test_File_Extensions_Handling_for_Sensitive_Information_%28OTG-CONFIG-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Review Old, Backup and Unreferenced Files for Sensitive Information (OTG-CONFIG-004)<a href=\"https://www.owasp.org/index.php/Review_Old,_Backup_and_Unreferenced_Files_for_Sensitive_Information_%28OTG-CONFIG-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Enumerate Infrastructure and Application Admin Interfaces (OTG-CONFIG-005)<a href=\"https://www.owasp.org/index.php/Enumerate_Infrastructure_and_Application_Admin_Interfaces_%28OTG-CONFIG-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Test HTTP Methods (OTG-CONFIG-006)<a href=\"https://www.owasp.org/index.php/Test_HTTP_Methods_%28OTG-CONFIG-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Test HTTP Strict Transport Security (OTG-CONFIG-007)<a href=\"https://www.owasp.org/index.php/Test_HTTP_Strict_Transport_Security_%28OTG-CONFIG-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Test RIA cross domain policy (OTG-CONFIG-008)<a href=\"https://www.owasp.org/index.php/Test_RIA_cross_domain_policy_%28OTG-CONFIG-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Role Definitions (OTG-IDENT-001)<a href=\"https://www.owasp.org/index.php/Test_Role_Definitions_%28OTG-IDENT-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Test User Registration Process (OTG-IDENT-002)<a href=\"https://www.owasp.org/index.php/Test_User_Registration_Process_%28OTG-IDENT-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Account Provisioning Process (OTG-IDENT-003)<a href=\"https://www.owasp.org/index.php/Test_Account_Provisioning_Process_%28OTG-IDENT-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Account Enumeration and Guessable User Account (OTG-IDENT-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Account_Enumeration_and_Guessable_User_Account_%28OTG-IDENT-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weak or unenforced username policy (OTG-IDENT-005)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_or_unenforced_username_policy_%28OTG-IDENT-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Credentials Transported over an Encrypted Channel (OTG-AUTHN-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Credentials_Transported_over_an_Encrypted_Channel_%28OTG-AUTHN-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for default credentials (OTG-AUTHN-002)<a href=\"https://www.owasp.org/index.php/Testing_for_default_credentials_%28OTG-AUTHN-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weak lock out mechanism (OTG-AUTHN-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_lock_out_mechanism_%28OTG-AUTHN-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for bypassing authentication schema (OTG-AUTHN-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Bypassing_Authentication_Schema_%28OTG-AUTHN-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Test remember password functionality (OTG-AUTHN-005)<a href=\"https://www.owasp.org/index.php/Testing_for_Vulnerable_Remember_Password_%28OTG-AUTHN-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Browser cache weakness (OTG-AUTHN-006)<a href=\"https://www.owasp.org/index.php/Testing_for_Browser_cache_weakness_%28OTG-AUTHN-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weak password policy (OTG-AUTHN-007)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_password_policy_%28OTG-AUTHN-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weak security question/answer (OTG-AUTHN-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_security_question/answer_%28OTG-AUTHN-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for weak password change or reset functionalities (OTG-AUTHN-009)<a href=\"https://www.owasp.org/index.php/Testing_for_weak_password_change_or_reset_functionalities_%28OTG-AUTHN-009%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weaker authentication in alternative channel (OTG-AUTHN-010) <a href=\"https://www.owasp.org/index.php/Testing_for_Weaker_authentication_in_alternative_channel_%28OTG-AUTHN-010%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing Directory traversal/file include (OTG-AUTHZ-001)<a href=\"https://www.owasp.org/index.php/Testing_Directory_traversal/file_include_%28OTG-AUTHZ-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for bypassing authorization schema (OTG-AUTHZ-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Bypassing_Authorization_Schema_%28OTG-AUTHZ-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Privilege Escalation (OTG-AUTHZ-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Privilege_escalation_%28OTG-AUTHZ-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Insecure Direct Object References (OTG-AUTHZ-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Insecure_Direct_Object_References_%28OTG-AUTHZ-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Bypassing Session Management Schema (OTG-SESS-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_Management_Schema_%28OTG-SESS-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Cookies attributes (OTG-SESS-002)<a href=\"https://www.owasp.org/index.php/Testing_for_cookies_attributes_%28OTG-SESS-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Session Fixation (OTG-SESS-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_Fixation_%28OTG-SESS-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Exposed Session Variables (OTG-SESS-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Exposed_Session_Variables_%28OTG-SESS-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Cross Site Request Forgery (CSRF) (OTG-SESS-005)<a href=\"https://www.owasp.org/index.php/Testing_for_CSRF_%28OTG-SESS-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for logout functionality (OTG-SESS-006)<a href=\"https://www.owasp.org/index.php/Testing_for_logout_functionality_%28OTG-SESS-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Session Timeout (OTG-SESS-007)<a href=\"https://www.owasp.org/index.php/Test_Session_Timeout_%28OTG-SESS-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Session puzzling (OTG-SESS-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_puzzling_%28OTG-SESS-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Reflected Cross Site Scripting (OTG-INPVAL-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Reflected_Cross_site_scripting_%28OTG-INPVAL-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Stored Cross Site Scripting (OTG-INPVAL-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Stored_Cross_site_scripting_%28OTG-INPVAL-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for HTTP Verb Tampering (OTG-INPVAL-003)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Verb_Tampering_%28OTG-INPVAL-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for HTTP Parameter pollution (OTG-INPVAL-004)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Parameter_pollution_%28OTG-INPVAL-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for SQL Injection (Oracle,NoSQL,MS,My,Postgre) (OTG-INPVAL-005)<a href=\"https://www.owasp.org/index.php/Testing_for_SQL_Injection_%28OTG-INPVAL-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for LDAP Injection (OTG-INPVAL-006)<a href=\"https://www.owasp.org/index.php/Testing_for_LDAP_Injection_%28OTG-INPVAL-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for ORM Injection (OTG-INPVAL-007)<a href=\"https://www.owasp.org/index.php/Testing_for_ORM_Injection_%28OTG-INPVAL-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for XML Injection (OTG-INPVAL-008)<a href=\"https://www.owasp.org/index.php/Testing_for_XML_Injection_%28OTG-INPVAL-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for SSI Injection (OTG-INPVAL-009)<a href=\"https://www.owasp.org/index.php/Testing_for_SSI_Injection_%28OTG-INPVAL-009%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for XPath Injection (OTG-INPVAL-010)<a href=\"https://www.owasp.org/index.php/Testing_for_XPath_Injection_%28OTG-INPVAL-010%29\" target=\"_blank\">  [Ref] </a>",
                    "IMAP/SMTP Injection (OTG-INPVAL-011)<a href=\"https://www.owasp.org/index.php/Testing_for_IMAP/SMTP_Injection_%28OTG-INPVAL-011%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Code Injection (LFI,RFI) (OTG-INPVAL-012)<a href=\"https://www.owasp.org/index.php/Testing_for_Code_Injection_%28OTG-INPVAL-012%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Command Injection (OTG-INPVAL-013)<a href=\"https://www.owasp.org/index.php/Testing_for_Command_Injection_%28OTG-INPVAL-013%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Buffer overflow (Heap,Stack,FormatString)(OTG-INPVAL-014)<a href=\"https://www.owasp.org/index.php/Testing_for_Buffer_Overflow_%28OTG-INPVAL-014%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for incubated vulnerabilities (OTG-INPVAL-015)<a href=\"https://www.owasp.org/index.php/Testing_for_Incubated_Vulnerability_%28OTG-INPVAL-015%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for HTTP Splitting/Smuggling (OTG-INPVAL-016)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Splitting/Smuggling_%28OTG-INPVAL-016%29\" target=\"_blank\">  [Ref] </a>",
                    "Analysis of Error Codes (OTG-ERR-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Error_Code_%28OTG-ERR-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Analysis of Stack Traces (OTG-ERR-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Stack_Traces_%28OTG-ERR-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Weak SSL/TLS Ciphers, Insufficient Transport Layer Protection (OTG-CRYPST-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_SSL/TLS_Ciphers,_Insufficient_Transport_Layer_Protection_%28OTG-CRYPST-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Padding Oracle (OTG-CRYPST-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Padding_Oracle_%28OTG-CRYPST-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Sensitive information sent via unencrypted channels (OTG-CRYPST-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Sensitive_information_sent_via_unencrypted_channels_%28OTG-CRYPST-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Business Logic Data Validation (OTG-BUSLOGIC-001)<a href=\"https://www.owasp.org/index.php/Test_business_logic_data_validation_%28OTG-BUSLOGIC-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Ability to Forge Requests (OTG-BUSLOGIC-002)<a href=\"https://www.owasp.org/index.php/Test_Ability_to_forge_requests_%28OTG-BUSLOGIC-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Integrity Checks (OTG-BUSLOGIC-003)<a href=\"https://www.owasp.org/index.php/Test_integrity_checks_%28OTG-BUSLOGIC-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Test for Process Timing (OTG-BUSLOGIC-004)<a href=\"https://www.owasp.org/index.php/Test_for_Process_Timing_%28OTG-BUSLOGIC-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Number of Times a Function Can be Used Limits (OTG-BUSLOGIC-005)<a href=\"https://www.owasp.org/index.php/Test_number_of_times_a_function_can_be_used_limits_%28OTG-BUSLOGIC-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for the Circumvention of Work Flows (OTG-BUSLOGIC-006)<a href=\"https://www.owasp.org/index.php/Testing_for_the_Circumvention_of_Work_Flows_%28OTG-BUSLOGIC-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Defenses Against Application Mis-use (OTG-BUSLOGIC-007)<a href=\"https://www.owasp.org/index.php/Test_defenses_against_application_mis-use_%28OTG-BUSLOGIC-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Upload of Unexpected File Types (OTG-BUSLOGIC-008)<a href=\"https://www.owasp.org/index.php/Test_Upload_of_Unexpected_File_Types_%28OTG-BUSLOGIC-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Upload of Malicious Files (OTG-BUSLOGIC-009)<a href=\"https://www.owasp.org/index.php/Test_Upload_of_Malicious_Files_%28OTG-BUSLOGIC-009%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for DOM based Cross Site Scripting (OTG-CLIENT-001)<a href=\"https://www.owasp.org/index.php/Testing_for_DOM-based_Cross_site_scripting_%28OTG-CLIENT-001%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for JavaScript Execution (OTG-CLIENT-002)<a href=\"https://www.owasp.org/index.php/Testing_for_JavaScript_Execution_%28OTG-CLIENT-002%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for HTML Injection (OTG-CLIENT-003)<a href=\"https://www.owasp.org/index.php/Testing_for_HTML_Injection_%28OTG-CLIENT-003%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Client Side URL Redirect (OTG-CLIENT-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Client_Side_URL_Redirect_%28OTG-CLIENT-004%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for CSS Injection (OTG-CLIENT-005)<a href=\"https://www.owasp.org/index.php/Testing_for_CSS_Injection_%28OTG-CLIENT-005%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Client Side Resource Manipulation (OTG-CLIENT-006)<a href=\"https://www.owasp.org/index.php/Testing_for_Client_Side_Resource_Manipulation_%28OTG-CLIENT-006%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Cross Origin Resource Sharing (OTG-CLIENT-007)<a href=\"https://www.owasp.org/index.php/Test_Cross_Origin_Resource_Sharing_%28OTG-CLIENT-007%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Cross Site Flashing (OTG-CLIENT-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Cross_site_flashing_%28OTG-CLIENT-008%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing for Clickjacking (OTG-CLIENT-009)<a href=\"https://www.owasp.org/index.php/Testing_for_Clickjacking_%28OTG-CLIENT-009%29\" target=\"_blank\">  [Ref] </a>",
                    "Testing WebSockets (OTG-CLIENT-010)<a href=\"https://www.owasp.org/index.php/Testing_WebSockets_%28OTG-CLIENT-010%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Web Messaging (OTG-CLIENT-011)<a href=\"https://www.owasp.org/index.php/Test_Web_Messaging_%28OTG-CLIENT-011%29\" target=\"_blank\">  [Ref] </a>",
                    "Test Local Storage (OTG-CLIENT-012)<a href=\"https://www.owasp.org/index.php/Test_Local_Storage_%28OTG-CLIENT-012%29\" target=\"_blank\">  [Ref] </a>",
                    "Server Site Request Forgery (SSRF)<a href=\"http://www.hpenterprisesecurity.com/vulncat/en/vulncat/java/server_side_request_forgery.html\" target=\"_blank\">  [Ref] </a>");

var lst_bak = new Array;
lst_bak=lst_bak.concat(lst);
 
var key = new Array();
var phase = new Array("Information Gathering","Configuration and Deployment Management Testing","Identity Management Testing","Authentication Testing","Authorization Testing","Session Management Testing","Input Validation Testing","Testing for Error Handling","Testing for weak Cryptography","Business Logic Testing","Client Side Testing","Misc Testing");

//1. Information Gathering

key["Conduct search engine discovery/reconnaissance for information leakage (OTG-INFO-001)<a href=\"https://www.owasp.org/index.php/Conduct_search_engine_discovery/reconnaissance_for_information_leakage_%28OTG-INFO-001%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Fingerprint Web Server (OTG-INFO-002)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Server_%28OTG-INFO-002%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Review Webserver Metafiles for Information Leakage (OTG-INFO-003)<a href=\"https://www.owasp.org/index.php/Review_Webserver_Metafiles_for_Information_Leakage_%28OTG-INFO-003%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Enumerate Applications on Webserver (OTG-INFO-004)<a href=\"https://www.owasp.org/index.php/Enumerate_Applications_on_Webserver_%28OTG-INFO-004%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Review Webpage Comments and Metadata for Information Leakage (OTG-INFO-005)<a href=\"https://www.owasp.org/index.php/Review_webpage_comments_and_metadata_for_information_leakage_%28OTG-INFO-005%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Identify application entry points (OTG-INFO-006)<a href=\"https://www.owasp.org/index.php/Identify_application_entry_points_%28OTG-INFO-006%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Map execution paths through application (OTG-INFO-007)<a href=\"https://www.owasp.org/index.php/Map_execution_paths_through_application_%28OTG-INFO-007%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Fingerprint Web Application Framework (OTG-INFO-008)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Application_Framework_%28OTG-INFO-008%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Fingerprint Web Application (OTG-INFO-009)<a href=\"https://www.owasp.org/index.php/Fingerprint_Web_Application_%28OTG-INFO-009%29\" target=\"_blank\">  [Ref] </a>"]=1;
key["Map Application Architecture (OTG-INFO-010)<a href=\"https://www.owasp.org/index.php/Map_Application_Architecture_%28OTG-INFO-010%29\" target=\"_blank\">  [Ref] </a>"]=1;

//2. Configuration and Deployment Management Testing 

key["Test Network/Infrastructure Configuration (OTG-CONFIG-001)<a href=\"https://www.owasp.org/index.php/Test_Network/Infrastructure_Configuration_%28OTG-CONFIG-001%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Test Application Platform Configuration (OTG-CONFIG-002)<a href=\"https://www.owasp.org/index.php/Test_Application_Platform_Configuration_%28OTG-CONFIG-002%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Test File Extensions Handling for Sensitive Information (OTG-CONFIG-003)<a href=\"https://www.owasp.org/index.php/Test_File_Extensions_Handling_for_Sensitive_Information_%28OTG-CONFIG-003%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Review Old, Backup and Unreferenced Files for Sensitive Information (OTG-CONFIG-004)<a href=\"https://www.owasp.org/index.php/Review_Old,_Backup_and_Unreferenced_Files_for_Sensitive_Information_%28OTG-CONFIG-004%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Enumerate Infrastructure and Application Admin Interfaces (OTG-CONFIG-005)<a href=\"https://www.owasp.org/index.php/Enumerate_Infrastructure_and_Application_Admin_Interfaces_%28OTG-CONFIG-005%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Test HTTP Methods (OTG-CONFIG-006)<a href=\"https://www.owasp.org/index.php/Test_HTTP_Methods_%28OTG-CONFIG-006%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Test HTTP Strict Transport Security (OTG-CONFIG-007)<a href=\"https://www.owasp.org/index.php/Test_HTTP_Strict_Transport_Security_%28OTG-CONFIG-007%29\" target=\"_blank\">  [Ref] </a>"]=2;
key["Test RIA cross domain policy (OTG-CONFIG-008)<a href=\"https://www.owasp.org/index.php/Test_RIA_cross_domain_policy_%28OTG-CONFIG-008%29\" target=\"_blank\">  [Ref] </a>"]=2;

//3. Identity Management Testing

key["Test Role Definitions (OTG-IDENT-001)<a href=\"https://www.owasp.org/index.php/Test_Role_Definitions_%28OTG-IDENT-001%29\" target=\"_blank\">  [Ref] </a>"]=3;
key["Test User Registration Process (OTG-IDENT-002)<a href=\"https://www.owasp.org/index.php/Test_User_Registration_Process_%28OTG-IDENT-002%29\" target=\"_blank\">  [Ref] </a>"]=3;
key["Test Account Provisioning Process (OTG-IDENT-003)<a href=\"https://www.owasp.org/index.php/Test_Account_Provisioning_Process_%28OTG-IDENT-003%29\" target=\"_blank\">  [Ref] </a>"]=3;
key["Testing for Account Enumeration and Guessable User Account (OTG-IDENT-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Account_Enumeration_and_Guessable_User_Account_%28OTG-IDENT-004%29\" target=\"_blank\">  [Ref] </a>"]=3;
key["Testing for Weak or unenforced username policy (OTG-IDENT-005)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_or_unenforced_username_policy_%28OTG-IDENT-005%29\" target=\"_blank\">  [Ref] </a>"]=3;

//4. Authentication Testing 

key["Testing for Credentials Transported over an Encrypted Channel (OTG-AUTHN-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Credentials_Transported_over_an_Encrypted_Channel_%28OTG-AUTHN-001%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for default credentials (OTG-AUTHN-002)<a href=\"https://www.owasp.org/index.php/Testing_for_default_credentials_%28OTG-AUTHN-002%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for Weak lock out mechanism (OTG-AUTHN-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_lock_out_mechanism_%28OTG-AUTHN-003%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for bypassing authentication schema (OTG-AUTHN-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Bypassing_Authentication_Schema_%28OTG-AUTHN-004%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Test remember password functionality (OTG-AUTHN-005)<a href=\"https://www.owasp.org/index.php/Testing_for_Vulnerable_Remember_Password_%28OTG-AUTHN-005%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for Browser cache weakness (OTG-AUTHN-006)<a href=\"https://www.owasp.org/index.php/Testing_for_Browser_cache_weakness_%28OTG-AUTHN-006%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for Weak password policy (OTG-AUTHN-007)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_password_policy_%28OTG-AUTHN-007%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for Weak security question/answer (OTG-AUTHN-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_security_question/answer_%28OTG-AUTHN-008%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for weak password change or reset functionalities (OTG-AUTHN-009)<a href=\"https://www.owasp.org/index.php/Testing_for_weak_password_change_or_reset_functionalities_%28OTG-AUTHN-009%29\" target=\"_blank\">  [Ref] </a>"]=4;
key["Testing for Weaker authentication in alternative channel (OTG-AUTHN-010) <a href=\"https://www.owasp.org/index.php/Testing_for_Weaker_authentication_in_alternative_channel_%28OTG-AUTHN-010%29\" target=\"_blank\">  [Ref] </a>"]=4;

//5. Authorization Testing

key["Testing Directory traversal/file include (OTG-AUTHZ-001)<a href=\"https://www.owasp.org/index.php/Testing_Directory_traversal/file_include_%28OTG-AUTHZ-001%29\" target=\"_blank\">  [Ref] </a>"]=5;
key["Testing for bypassing authorization schema (OTG-AUTHZ-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Bypassing_Authorization_Schema_%28OTG-AUTHZ-002%29\" target=\"_blank\">  [Ref] </a>"]=5;
key["Testing for Privilege Escalation (OTG-AUTHZ-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Privilege_escalation_%28OTG-AUTHZ-003%29\" target=\"_blank\">  [Ref] </a>"]=5;
key["Testing for Insecure Direct Object References (OTG-AUTHZ-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Insecure_Direct_Object_References_%28OTG-AUTHZ-004%29\" target=\"_blank\">  [Ref] </a>"]=5;

//6. Session Management Testing

key["Testing for Bypassing Session Management Schema (OTG-SESS-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_Management_Schema_%28OTG-SESS-001%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for Cookies attributes (OTG-SESS-002)<a href=\"https://www.owasp.org/index.php/Testing_for_cookies_attributes_%28OTG-SESS-002%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for Session Fixation (OTG-SESS-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_Fixation_%28OTG-SESS-003%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for Exposed Session Variables (OTG-SESS-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Exposed_Session_Variables_%28OTG-SESS-004%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for Cross Site Request Forgery (CSRF) (OTG-SESS-005)<a href=\"https://www.owasp.org/index.php/Testing_for_CSRF_%28OTG-SESS-005%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for logout functionality (OTG-SESS-006)<a href=\"https://www.owasp.org/index.php/Testing_for_logout_functionality_%28OTG-SESS-006%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Test Session Timeout (OTG-SESS-007)<a href=\"https://www.owasp.org/index.php/Test_Session_Timeout_%28OTG-SESS-007%29\" target=\"_blank\">  [Ref] </a>"]=6;
key["Testing for Session puzzling (OTG-SESS-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Session_puzzling_%28OTG-SESS-008%29\" target=\"_blank\">  [Ref] </a>"]=6;


//7. Input Validation Testing

key["Testing for Reflected Cross Site Scripting (OTG-INPVAL-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Reflected_Cross_site_scripting_%28OTG-INPVAL-001%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for Stored Cross Site Scripting (OTG-INPVAL-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Stored_Cross_site_scripting_%28OTG-INPVAL-002%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for HTTP Verb Tampering (OTG-INPVAL-003)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Verb_Tampering_%28OTG-INPVAL-003%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for HTTP Parameter pollution (OTG-INPVAL-004)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Parameter_pollution_%28OTG-INPVAL-004%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for SQL Injection (Oracle,NoSQL,MS,My,Postgre) (OTG-INPVAL-005)<a href=\"https://www.owasp.org/index.php/Testing_for_SQL_Injection_%28OTG-INPVAL-005%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for LDAP Injection (OTG-INPVAL-006)<a href=\"https://www.owasp.org/index.php/Testing_for_LDAP_Injection_%28OTG-INPVAL-006%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for ORM Injection (OTG-INPVAL-007)<a href=\"https://www.owasp.org/index.php/Testing_for_ORM_Injection_%28OTG-INPVAL-007%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for XML Injection (OTG-INPVAL-008)<a href=\"https://www.owasp.org/index.php/Testing_for_XML_Injection_%28OTG-INPVAL-008%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for SSI Injection (OTG-INPVAL-009)<a href=\"https://www.owasp.org/index.php/Testing_for_SSI_Injection_%28OTG-INPVAL-009%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for XPath Injection (OTG-INPVAL-010)<a href=\"https://www.owasp.org/index.php/Testing_for_XPath_Injection_%28OTG-INPVAL-010%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["IMAP/SMTP Injection (OTG-INPVAL-011)<a href=\"https://www.owasp.org/index.php/Testing_for_IMAP/SMTP_Injection_%28OTG-INPVAL-011%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for Code Injection (LFI,RFI) (OTG-INPVAL-012)<a href=\"https://www.owasp.org/index.php/Testing_for_Code_Injection_%28OTG-INPVAL-012%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for Command Injection (OTG-INPVAL-013)<a href=\"https://www.owasp.org/index.php/Testing_for_Command_Injection_%28OTG-INPVAL-013%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for Buffer overflow (Heap,Stack,FormatString)(OTG-INPVAL-014)<a href=\"https://www.owasp.org/index.php/Testing_for_Buffer_Overflow_%28OTG-INPVAL-014%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for incubated vulnerabilities (OTG-INPVAL-015)<a href=\"https://www.owasp.org/index.php/Testing_for_Incubated_Vulnerability_%28OTG-INPVAL-015%29\" target=\"_blank\">  [Ref] </a>"]=7;
key["Testing for HTTP Splitting/Smuggling (OTG-INPVAL-016)<a href=\"https://www.owasp.org/index.php/Testing_for_HTTP_Splitting/Smuggling_%28OTG-INPVAL-016%29\" target=\"_blank\">  [Ref] </a>"]=7;

//8.Testing for Error Handling

key["Analysis of Error Codes (OTG-ERR-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Error_Code_%28OTG-ERR-001%29\" target=\"_blank\">  [Ref] </a>"]=8;
key["Analysis of Stack Traces (OTG-ERR-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Stack_Traces_%28OTG-ERR-002%29\" target=\"_blank\">  [Ref] </a>"]=8;

//9. Testing for weak Cryptography

key["Testing for Weak SSL/TLS Ciphers, Insufficient Transport Layer Protection (OTG-CRYPST-001)<a href=\"https://www.owasp.org/index.php/Testing_for_Weak_SSL/TLS_Ciphers,_Insufficient_Transport_Layer_Protection_%28OTG-CRYPST-001%29\" target=\"_blank\">  [Ref] </a>"]=9;
key["Testing for Padding Oracle (OTG-CRYPST-002)<a href=\"https://www.owasp.org/index.php/Testing_for_Padding_Oracle_%28OTG-CRYPST-002%29\" target=\"_blank\">  [Ref] </a>"]=9;
key["Testing for Sensitive information sent via unencrypted channels (OTG-CRYPST-003)<a href=\"https://www.owasp.org/index.php/Testing_for_Sensitive_information_sent_via_unencrypted_channels_%28OTG-CRYPST-003%29\" target=\"_blank\">  [Ref] </a>"]=9;

// 10. Business Logic Testing

key["Test Business Logic Data Validation (OTG-BUSLOGIC-001)<a href=\"https://www.owasp.org/index.php/Test_business_logic_data_validation_%28OTG-BUSLOGIC-001%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Ability to Forge Requests (OTG-BUSLOGIC-002)<a href=\"https://www.owasp.org/index.php/Test_Ability_to_forge_requests_%28OTG-BUSLOGIC-002%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Integrity Checks (OTG-BUSLOGIC-003)<a href=\"https://www.owasp.org/index.php/Test_integrity_checks_%28OTG-BUSLOGIC-003%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test for Process Timing (OTG-BUSLOGIC-004)<a href=\"https://www.owasp.org/index.php/Test_for_Process_Timing_%28OTG-BUSLOGIC-004%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Number of Times a Function Can be Used Limits (OTG-BUSLOGIC-005)<a href=\"https://www.owasp.org/index.php/Test_number_of_times_a_function_can_be_used_limits_%28OTG-BUSLOGIC-005%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Testing for the Circumvention of Work Flows (OTG-BUSLOGIC-006)<a href=\"https://www.owasp.org/index.php/Testing_for_the_Circumvention_of_Work_Flows_%28OTG-BUSLOGIC-006%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Defenses Against Application Mis-use (OTG-BUSLOGIC-007)<a href=\"https://www.owasp.org/index.php/Test_defenses_against_application_mis-use_%28OTG-BUSLOGIC-007%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Upload of Unexpected File Types (OTG-BUSLOGIC-008)<a href=\"https://www.owasp.org/index.php/Test_Upload_of_Unexpected_File_Types_%28OTG-BUSLOGIC-008%29\" target=\"_blank\">  [Ref] </a>"]=10;
key["Test Upload of Malicious Files (OTG-BUSLOGIC-009)<a href=\"https://www.owasp.org/index.php/Test_Upload_of_Malicious_Files_%28OTG-BUSLOGIC-009%29\" target=\"_blank\">  [Ref] </a>"]=10;

// 11. Client Side Testing

key["Testing for DOM based Cross Site Scripting (OTG-CLIENT-001)<a href=\"https://www.owasp.org/index.php/Testing_for_DOM-based_Cross_site_scripting_%28OTG-CLIENT-001%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for JavaScript Execution (OTG-CLIENT-002)<a href=\"https://www.owasp.org/index.php/Testing_for_JavaScript_Execution_%28OTG-CLIENT-002%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for HTML Injection (OTG-CLIENT-003)<a href=\"https://www.owasp.org/index.php/Testing_for_HTML_Injection_%28OTG-CLIENT-003%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for Client Side URL Redirect (OTG-CLIENT-004)<a href=\"https://www.owasp.org/index.php/Testing_for_Client_Side_URL_Redirect_%28OTG-CLIENT-004%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for CSS Injection (OTG-CLIENT-005)<a href=\"https://www.owasp.org/index.php/Testing_for_CSS_Injection_%28OTG-CLIENT-005%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for Client Side Resource Manipulation (OTG-CLIENT-006)<a href=\"https://www.owasp.org/index.php/Testing_for_Client_Side_Resource_Manipulation_%28OTG-CLIENT-006%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Test Cross Origin Resource Sharing (OTG-CLIENT-007)<a href=\"https://www.owasp.org/index.php/Test_Cross_Origin_Resource_Sharing_%28OTG-CLIENT-007%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for Cross Site Flashing (OTG-CLIENT-008)<a href=\"https://www.owasp.org/index.php/Testing_for_Cross_site_flashing_%28OTG-CLIENT-008%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing for Clickjacking (OTG-CLIENT-009)<a href=\"https://www.owasp.org/index.php/Testing_for_Clickjacking_%28OTG-CLIENT-009%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Testing WebSockets (OTG-CLIENT-010)<a href=\"https://www.owasp.org/index.php/Testing_WebSockets_%28OTG-CLIENT-010%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Test Web Messaging (OTG-CLIENT-011)<a href=\"https://www.owasp.org/index.php/Test_Web_Messaging_%28OTG-CLIENT-011%29\" target=\"_blank\">  [Ref] </a>"]=11;
key["Test Local Storage (OTG-CLIENT-012)<a href=\"https://www.owasp.org/index.php/Test_Local_Storage_%28OTG-CLIENT-012%29\" target=\"_blank\">  [Ref] </a>"]=11;

// 12. Misc Testing

key["Server Site Request Forgery (SSRF)<a href=\"http://www.hpenterprisesecurity.com/vulncat/en/vulncat/java/server_side_request_forgery.html\" target=\"_blank\">  [Ref] </a>"]=12;



 
function $(id){return document.getElementById(id);} 

var firstTime = true;
 
function populate()
{
var ck = $("ck");
ck.innerHTML = '';
var data = '';
var a = false;var b=false;var c=false; var d = false;var e=false;var f=false;var g=false;var h = false;var i = false;var j=false;var k=false;var l=false;var m=false;
	for (var i=0;i<=lst.length-1;i++)
	{		
		switch(key[lst[i]])
		{
			case 1:
			if(a===false){data += '<fieldset class="c1"><legend>Phase 1</legend><h2>Phase 1. ' + phase[0] + ' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-1\').style.display!=\'none\'){$(\'phase-1\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-1\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[&#8212;]</a></h2><span style="display:block" id="phase-1">';a=true;}
			break;
			case 2:
			if(b===false){data += '</fieldset><fieldset class="c2"><legend>Phase 2</legend></span><h2>Phase 2. ' + phase[1] + ' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-2\').style.display!=\'none\'){$(\'phase-2\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-2\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-2">';b=true;}
			break;
			case 3:
			if(c===false){data += '</fieldset><fieldset class="c3"><legend>Phase 3</legend></span><h2>Phase 3. ' + phase[2]+ ' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-3\').style.display!=\'none\'){$(\'phase-3\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-3\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-3">';c=true;}
			break;				
			case 4:
			if(d===false){data += '</fieldset><fieldset class="c4"><legend>Phase 4</legend></span><h2>Phase 4. ' + phase[3]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-4\').style.display!=\'none\'){$(\'phase-4\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-4\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-4">';d=true;}
			break;			
			case 5:
			if(e===false){data +='</fieldset><fieldset class="c5"><legend>Phase 5</legend></span><h2>Phase 5. ' + phase[4]+ ' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-5\').style.display!=\'none\'){$(\'phase-5\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-5\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-5">';e=true;}
			break;				
			case 6:
			if(f===false){data +='</fieldset><fieldset class="c6"><legend>Phase 6</legend></span><h2>Phase 6. ' + phase[5]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-6\').style.display!=\'none\'){$(\'phase-6\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-6\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-6">';f=true;}
			break;				
			case 7:
			if(g===false){data += '</fieldset><fieldset class="c7"><legend>Phase 7</legend></span><h2>Phase 7. ' + phase[6]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-7\').style.display!=\'none\'){$(\'phase-7\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-7\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-7">';g=true;}
			break;	

			case 8:
			if(h===false){data += '</fieldset><fieldset class="c7"><legend>Phase 8</legend></span><h2>Phase 8. ' + phase[7]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-8\').style.display!=\'none\'){$(\'phase-8\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-8\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-8">';h=true;}
			break;	
			case 9:
			if(j===false){data += '</fieldset><fieldset class="c7"><legend>Phase 9</legend></span><h2>Phase 9. ' + phase[8]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-9\').style.display!=\'none\'){$(\'phase-9\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-9\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-9">';j=true;}
			break;				
			case 10:
			if(k===false){data += '</fieldset><fieldset class="c7"><legend>Phase 10</legend></span><h2>Phase 10. ' + phase[9]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-10\').style.display!=\'none\'){$(\'phase-10\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-10\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-10">';k=true;}
			break;
                        case 11:
			if(l===false){data += '</fieldset><fieldset class="c7"><legend>Phase 11</legend></span><h2>Phase 11. ' + phase[10]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-11\').style.display!=\'none\'){$(\'phase-11\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-11\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-11">';l=true;}
			break;
                        case 12:
			if(m===false){data += '</fieldset><fieldset class="c7"><legend>Misc Tests</legend></span><h2>' + phase[11]+' &nbsp;&nbsp;<a class="toggle" href="javascript:void(0)" onclick="if($(\'phase-12\').style.display!=\'none\'){$(\'phase-12\').style.display=\'none\';this.innerHTML=\'[+]\';}else{$(\'phase-12\').style.display=\'block\';this.innerHTML=\'[&#8212;]\';}">[+]</a></h2><span style="display:none" id="phase-12">';m=true;}
			break;
		}
		
		// used vars: rt, ck, vt, vk, lnk,note

                var checked = function(){if(localStorage.getItem("ck-"+i)==="true"){return "checked"}else{return ""};}();
		data += (i+1) + ". <input type='checkbox' onclick='localStorage.setItem(\"ck-" + i + "\", $(\"ck-" + i + "\").checked);getstatus();' id='ck-" + i + "' " + checked + " /><span>" + lst[i] + checked + "</span>";
                data += "<br\/>";
	}
	
	ck.innerHTML = data;
	//$('btnStatus').disabled = '';$('btnReport').disabled = '';
    //$('loading').style.display='none';$('site').focus();
    if(firstTime!==true){window.location='#end';firstTime=true;}    
        
}