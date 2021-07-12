Now, you have to change properties files inside core to remove special character which might give error while migration.





Run cd migrateSampleApp with this bash-command.
`cd migrateSampleApp `{{execute T1}} 





Switch to the editor and open the file 'devonfw/workspaces/main/migrateSampleApp/core/pom.xml'.

`devonfw/workspaces/main/migrateSampleApp/core/pom.xml`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/migrateSampleApp/core/pom.xml" data-target="replace" data-marker="">
&lt;?xml version=&#34;1.0&#34; encoding=&#34;UTF-8&#34;?&gt;
&lt;project xmlns=&#34;http://maven.apache.org/POM/4.0.0&#34; xmlns:xsi=&#34;http://www.w3.org/2001/XMLSchema-instance&#34;
  xsi:schemaLocation=&#34;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd&#34;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;parent&gt;
    &lt;groupId&gt;com.example.application&lt;/groupId&gt;
    &lt;artifactId&gt;migrateSampleApp&lt;/artifactId&gt;
    &lt;version&gt;${revision}&lt;/version&gt;
  &lt;/parent&gt;
  &lt;artifactId&gt;migrateSampleApp-core&lt;/artifactId&gt;
  &lt;packaging&gt;jar&lt;/packaging&gt;
  &lt;name&gt;${project.artifactId}&lt;/name&gt;
  &lt;description&gt;Core of the server for the migrateSampleApp application - a simple example based on devon4j.&lt;/description&gt;

  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;${project.groupId}&lt;/groupId&gt;
      &lt;artifactId&gt;migrateSampleApp-api&lt;/artifactId&gt;
      &lt;version&gt;${project.version}&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- Bean-Mapping for conversion from TO to Entity and vice versa --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.modules&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-beanmapping-orika&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Security for authorization integration with spring-security --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-security&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.modules&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-web&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Only required if you want to call external REST services within your Java application --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-cxf-client-rest&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;!-- Only required if you want to call external SOAP services within your Java application --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-cxf-client-ws&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Only required if you want to provide REST services within your Java application --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-cxf-server-rest&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;!-- Only required if you want to provide SOAP services within your Java application --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-cxf-server-ws&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Only required if you want to use spring-data to access DB via JPA --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-starter-spring-data-jpa&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- auto-configure datasource
      https://stackoverflow.com/questions/34964066/spring-boot-doesnt-use-datasource-properties
      --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-jdbc&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- JPA 2.2 API --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;javax.persistence&lt;/groupId&gt;
      &lt;artifactId&gt;javax.persistence-api&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Hibernate EntityManager for JPA (implementation) --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
      &lt;artifactId&gt;hibernate-entitymanager&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- QueryDSL JPA for dynamic queries in type-safe and SQL-injection-safe way --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.querydsl&lt;/groupId&gt;
      &lt;artifactId&gt;querydsl-jpa&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.querydsl&lt;/groupId&gt;
      &lt;artifactId&gt;querydsl-apt&lt;/artifactId&gt;
      &lt;scope&gt;provided&lt;/scope&gt;
    &lt;/dependency&gt;

    &lt;!-- For Bean-Validation (JSR 303) --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.hibernate.validator&lt;/groupId&gt;
      &lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Servlet API is required for any JEE web-app --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
      &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
      &lt;scope&gt;provided&lt;/scope&gt;
    &lt;/dependency&gt;

    &lt;!-- Expression Language (EL) is reuqired for servlet related features --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;javax.el&lt;/groupId&gt;
      &lt;artifactId&gt;javax.el-api&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- for SpringDispatcher Servlet --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Database --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.h2database&lt;/groupId&gt;
      &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Flyway for DB Schema version management and migration --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.flywaydb&lt;/groupId&gt;
      &lt;artifactId&gt;flyway-core&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- CXF for REST and Webservices --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.cxf&lt;/groupId&gt;
      &lt;artifactId&gt;cxf-rt-rs-service-description&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Monitoring features for spring --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Aspect Oriented Programming (AOP) for advanced spring features --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- CGLib is required for Spring AOP --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;cglib&lt;/groupId&gt;
      &lt;artifactId&gt;cglib&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Enable JSON logging for easy integration with xPaaS and ELK/Graylog/Splunk/etc. --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;net.logstash.logback&lt;/groupId&gt;
      &lt;artifactId&gt;logstash-logback-encoder&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Tests --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.devonfw.java.modules&lt;/groupId&gt;
      &lt;artifactId&gt;devon4j-test-jpa&lt;/artifactId&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
      &lt;exclusions&gt;
        &lt;exclusion&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
        &lt;/exclusion&gt;
        &lt;exclusion&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;
        &lt;/exclusion&gt;
      &lt;/exclusions&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;

  &lt;profiles&gt;
    &lt;profile&gt;
      &lt;id&gt;embedded&lt;/id&gt;
      &lt;activation&gt;
        &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
      &lt;/activation&gt;
      &lt;dependencies&gt;
        &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
          &lt;!-- workaround as of https://github.com/mojohaus/flatten-maven-plugin/issues/70 --&gt;
          &lt;version&gt;${spring.boot.version}&lt;/version&gt;
        &lt;/dependency&gt;
      &lt;/dependencies&gt;
    &lt;/profile&gt;
  &lt;/profiles&gt;

  &lt;build&gt;
    &lt;plugins&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
        &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
        &lt;configuration&gt;
          &lt;excludes&gt;
            &lt;exclude&gt;config/application.properties&lt;/exclude&gt;
          &lt;/excludes&gt;
        &lt;/configuration&gt;
      &lt;/plugin&gt;
    &lt;/plugins&gt;
  &lt;/build&gt;

&lt;/project&gt;</pre>

