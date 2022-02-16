Here , you can see &#34;VisitormanagementRestServiceImpl.java&#34; is annotated with @Named to make it a spring-bean. To get return response to client &#34;returnResponseToClient()&#34; can be accessed via HTTP GET under the URL path &#34;/visitormanagement/v1/clientrequest&#34;. It will return its result (String) as JSON (see @Produces in VisitormanagementRestService).

Then, we can launch the application and do GET requests.

====


Switch to the editor and open the file 'devonfw/workspaces/main/httprestservice/core/src/main/resources/application.properties'.

`devonfw/workspaces/main/httprestservice/core/src/main/resources/application.properties`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/httprestservice/core/src/main/resources/application.properties" data-target="replace" data-marker="">
# This is the configuration file shipped with the application that contains reasonable defaults.
# Environment specific configurations are configured in config/application.properties.
# If you are running in a servlet container you may add this to lib/config/application.properties in case you do not
# want to touch the WAR file.

server.port=8081
server.servlet.context-path=/httprestservice
spring.application.name=httprestservice

security.expose.error.details=false

spring.jpa.hibernate.ddl-auto=validate

# Datasource for accessing the database
# https://github.com/spring-projects/spring-boot/blob/d3c34ee3d1bfd3db4a98678c524e145ef9bca51c/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/jdbc/DatabaseDriver.java
spring.jpa.database=h2
# spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
# spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa

# Hibernate NamingStrategy has been deprecated and then removed in favor of two step naming strategy ImplicitNamingStrategy and PhysicalNamingStrategy
spring.jpa.hibernate.naming.implicit-strategy=org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

# https://github.com/devonfw/devon4j/issues/65
# https://vladmihalcea.com/the-open-session-in-view-anti-pattern/
spring.jpa.open-in-view=false

# to prevent that Spring Boot launches batch jobs on startup
# might otherwise lead to errors if job parameters are needed (or lead to unwanted modifications and longer startup times)
# see http://stackoverflow.com/questions/22318907/how-to-stop-spring-batch-scheduled-jobs-from-running-at-first-time-when-executin
spring.batch.job.enabled=false

# Flyway for Database Setup and Migrations
spring.flyway.locations=classpath:db/migration

</pre>



Please change the folder to &#39;httprestservice&#39;.

`cd httprestservice`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

