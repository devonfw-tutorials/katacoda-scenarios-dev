## Configuration 
An application needs to be configurable in order to allow internal setup but also to allow externalized configuration of a deployed package (e.g. integration into runtime environment). 


Switch to the editor and open the file 'devonfw/workspaces/main/httprestclient/core/src/main/resources/config/application.properties'.

`devonfw/workspaces/main/httprestclient/core/src/main/resources/config/application.properties`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/httprestclient/core/src/main/resources/config/application.properties" data-target="replace" data-marker="">
# This is the spring boot configuration file for development. It will not be included into the application.
# In order to set specific configurations in a regular installed environment create an according file
# config/application.properties in the server. If you are deploying the application to a servlet container as untouched
# WAR file you can locate this config folder in ${symbol_dollar}{CATALINA_BASE}/lib. If you want to deploy multiple applications to
# the same container (not recommended by default) you need to ensure the WARs are extracted in webapps folder and locate
# the config folder inside the WEB-INF/classes folder of the webapplication.

server.port=8081
server.servlet.context-path=/client
# Datasource for accessing the database
# See https://github.com/devonfw/devon4j/blob/develop/documentation/guide-configuration.asciidoc#security-configuration
#jasypt.encryptor.password=none
#spring.datasource.password=ENC(7CnHiadYc0Wh2FnWADNjJg==)
spring.datasource.password=
spring.datasource.url=jdbc:h2:./.httpdevon4jclient;

# print SQL to console for debugging (e.g. detect N+1 issues)
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Enable JSON pretty printing
spring.jackson.serialization.INDENT_OUTPUT=true

# Flyway for Database Setup and Migrations
spring.flyway.enabled=true
spring.flyway.clean-on-validation-error=true

service.client.default.url=http://localhost:8081/restapi/services/rest
service.client.app.restapi.url=http://localhost:8081/restapi/services/rest
service.client.default.timeout.connection=120
service.client.default.timeout.response=3600
service.client.app.restapi.auth=basic
service.client.app.restapi.user.login=admin
service.client.app.restapi.user.password=admin</pre>



Please change the folder to &#39;httprestclient&#39;.

`cd httprestclient`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.



## Service Discovery
* service.client.default.url :- It is used to set the default url of server and it is added for service discovery.
* service.client.app.restapi.url :- This property provide base url of REST in your application. It follows format such as &#34;service.client.app.«application».url&#34;. Here, «application» refers to the technical name of the application providing the service.

## Timeouts
* service.client.default.timeout.connection:- It is used to set the default timeout for particular connection.
* service.client.default.timeout.response:- It is used to set the default timeout for particular response.

## Headers
* service.client.app.restapi.auth:- It is used for customization of Service Header. Here it is used for basic authentication.

## Authentication
* service.client.app.restapi.user.login:- It is used to set username of server for authentication
* service.client.app.restapi.user.password:- It is used to set password.



Now, after configuration you have to start the client application.
