As explained in REST document, With JAX-RS it is important to make sure that each service method is annotated with the proper HTTP method.

Let&#39;s create devon4j server.


## Setting up your Java project

Please change the folder to &#39;devonfw/workspaces/main&#39;.

`cd devonfw/workspaces/main`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create HttpRestAPIdevon4j`{{execute T1}}



Please change the folder to &#39;HttpRestAPIdevon4j&#39;.

`cd HttpRestAPIdevon4j`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 





If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/resources/db/migration/1.0`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'V0005__Create_Visitor.sql' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/resources/db/migration/1.0/V0005__Create_Visitor.sql">
create table Visitor(
  id BIGINT NOT NULL AUTO_INCREMENT,
  modificationCounter INTEGER NOT NULL,
  username VARCHAR(255),
  password VARCHAR(255),
  CONSTRAINT PK_Visitor PRIMARY KEY(id)
);
</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/resources/db/migration/1.0`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'V0006__Master_data.sql' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/resources/db/migration/1.0/V0006__Master_data.sql">
INSERT INTO Visitor (id, modificationCounter, username, password) VALUES (0, 1, &#39;mike@mail.com&#39;, &#39;mike@123&#39;);
INSERT INTO Visitor (id, modificationCounter, username, password) VALUES (1, 1, &#39;tanya@mail.com&#39;, &#39;tanya@123&#39;);
</pre>



Create the new folder 'core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/dataaccess/api'.

The '-p' parameter ensures, that the whole directory structure is created.

`mkdir -p core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/dataaccess/api`{{execute T1}}



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/dataaccess/api`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'VisitorEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/dataaccess/api/VisitorEntity.java">
package com.devonfw.httprestapi.restapi.visitormanagement.dataaccess.api;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.devonfw.httprestapi.restapi.general.dataaccess.api.ApplicationPersistenceEntity;
import com.devonfw.httprestapi.restapi.visitormanagement.common.api.Visitor;

@Entity
@Table(name = &#34;Visitor&#34;)
public class VisitorEntity extends ApplicationPersistenceEntity implements Visitor {

  private String username;

  private String password;

  private static final long serialVersionUID = 1L;

  /**
   * @return username
   */
  public String getUsername() {

    return this.username;
  }

  /**
   * @param username new value of {@link #getusername}.
   */
  public void setUsername(String username) {

    this.username = username;
  }

  /**
   * @return password
   */
  public String getPassword() {

    return this.password;
  }

  /**
   * @param password new value of {@link #getpassword}.
   */
  public void setPassword(String password) {

    this.password = password;
  }

}

</pre>



## CobiGen Java


Start CobiGen CLI and pass the file as parameter by executing the following command.
`devon cobigen generate HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/dataaccess/api/VisitorEntity.java`{{execute T1}}

CobiGen will ask you which files to generate. You can enter the numbers separated by commas. 
`1,3,5,6,8`{{execute T1}}

CobiGen will now generate code based on the source file and the templates you have passed.




Switch to the editor and open the file 'devonfw/workspaces/main/HttpRestAPIdevon4j/api/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/api/rest/VisitormanagementRestService.java'.

`devonfw/workspaces/main/HttpRestAPIdevon4j/api/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/api/rest/VisitormanagementRestService.java`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/api/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/api/rest/VisitormanagementRestService.java" data-target="replace" data-marker="">
package com.devonfw.httprestapi.restapi.visitormanagement.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;

import com.devonfw.httprestapi.restapi.visitormanagement.logic.api.Visitormanagement;
import com.devonfw.httprestapi.restapi.visitormanagement.logic.api.to.VisitorEto;
import com.devonfw.httprestapi.restapi.visitormanagement.logic.api.to.VisitorSearchCriteriaTo;

/**
 * The service interface for REST calls in order to execute the logic of component {@link Visitormanagement}.
 */
@Path(&#34;/visitormanagement/v1&#34;)
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface VisitormanagementRestService {

  /**
   * Delegates to {@link Visitormanagement#findVisitor}.
   *
   * @param id the ID of the {@link VisitorEto}
   * @return the {@link VisitorEto}
   */
  @GET
  @Path(&#34;/clientrequest&#34;)
  public String returnResponseToClient(String args);

}</pre>



Switch to the editor and open the file 'devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/impl/rest/VisitormanagementRestServiceImpl.java'.

`devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/impl/rest/VisitormanagementRestServiceImpl.java`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/visitormanagement/service/impl/rest/VisitormanagementRestServiceImpl.java" data-target="replace" data-marker="">
package com.devonfw.httprestapi.restapi.visitormanagement.service.impl.rest;

import javax.inject.Inject;
import javax.inject.Named;

import com.devonfw.httprestapi.restapi.visitormanagement.logic.api.Visitormanagement;
import com.devonfw.httprestapi.restapi.visitormanagement.service.api.rest.VisitormanagementRestService;

/**
 * The service implementation for REST calls in order to execute the logic of component {@link Visitormanagement}.
 */
@Named(&#34;VisitormanagementRestService&#34;)
public class VisitormanagementRestServiceImpl implements VisitormanagementRestService {

  @Inject
  private Visitormanagement visitormanagement;

  @Override
  public String returnResponseToClient(String args) {
    args = &#34;welcome to rest api&#34;;
    return args;
  }
}</pre>



Switch to the editor and open the file 'devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/general/service/impl/config/BaseWebSecurityConfig.java'.

`devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/general/service/impl/config/BaseWebSecurityConfig.java`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestAPIdevon4j/core/src/main/java/com/devonfw/httprestapi/restapi/general/service/impl/config/BaseWebSecurityConfig.java" data-target="replace" data-marker="">
package com.devonfw.httprestapi.restapi.general.service.impl.config;

import javax.inject.Inject;
import javax.servlet.Filter;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.devonfw.module.security.common.api.config.WebSecurityConfigurer;
import com.devonfw.module.security.common.impl.rest.AuthenticationSuccessHandlerSendingOkHttpStatusCode;
import com.devonfw.module.security.common.impl.rest.JsonUsernamePasswordAuthenticationFilter;
import com.devonfw.module.security.common.impl.rest.LogoutSuccessHandlerReturningOkHttpStatusCode;

/**
 * This type serves as a base class for extensions of the {@code WebSecurityConfigurerAdapter} and provides a default
 * configuration. &lt;br/&gt;
 * Security configuration is based on {@link WebSecurityConfigurerAdapter}. This configuration is by purpose designed
 * most simple for two channels of authentication: simple login form and rest-url.
 */
public abstract class BaseWebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Inject
  private UserDetailsService userDetailsService;

  @Inject
  private PasswordEncoder passwordEncoder;

  @Inject
  private WebSecurityConfigurer webSecurityConfigurer;

  /**
   * Configure spring security to enable a simple webform-login + a simple rest login.
   */
  @Override
  public void configure(HttpSecurity http) throws Exception {

    String[] unsecuredResources = new String[] { &#34;/login&#34;, &#34;/security/**&#34;, &#34;/services/rest/login&#34;,
    &#34;/services/rest/logout&#34; };

    // disable CSRF protection by default, use csrf starter to override.
    http = http.csrf().disable();
    // load starters as pluggins.
    http = this.webSecurityConfigurer.configure(http);

    http.httpBasic().and()
        //
        .userDetailsService(this.userDetailsService)
        // define all urls that are not to be secured
        .authorizeRequests().antMatchers(unsecuredResources).permitAll().anyRequest().authenticated().and()
        // configure parameters for simple form login (and logout)
        .formLogin().successHandler(new SimpleUrlAuthenticationSuccessHandler()).defaultSuccessUrl(&#34;/&#34;)
        .failureUrl(&#34;/login.html?error&#34;).loginProcessingUrl(&#34;/j_spring_security_login&#34;).usernameParameter(&#34;username&#34;)
        .passwordParameter(&#34;password&#34;).and()
        // logout via POST is possible
        .logout().logoutSuccessUrl(&#34;/login.html&#34;).and()
        // register login and logout filter that handles rest logins
        .addFilterAfter(getSimpleRestAuthenticationFilter(), BasicAuthenticationFilter.class)
        .addFilterAfter(getSimpleRestLogoutFilter(), LogoutFilter.class);
  }

  /**
   * Create a simple filter that allows logout on a REST Url /services/rest/logout and returns a simple HTTP status 200
   * ok.
   *
   * @return the filter.
   */
  protected Filter getSimpleRestLogoutFilter() {

    LogoutFilter logoutFilter = new LogoutFilter(new LogoutSuccessHandlerReturningOkHttpStatusCode(),
        new SecurityContextLogoutHandler());

    // configure logout for rest logouts
    logoutFilter.setLogoutRequestMatcher(new AntPathRequestMatcher(&#34;/services/rest/logout&#34;));

    return logoutFilter;
  }

  /**
   * Create a simple authentication filter for REST logins that reads user-credentials from a json-parameter and returns
   * status 200 instead of redirect after login.
   *
   * @return the {@link JsonUsernamePasswordAuthenticationFilter}.
   * @throws Exception if something goes wrong.
   */
  protected JsonUsernamePasswordAuthenticationFilter getSimpleRestAuthenticationFilter() throws Exception {

    JsonUsernamePasswordAuthenticationFilter jsonFilter = new JsonUsernamePasswordAuthenticationFilter(
        new AntPathRequestMatcher(&#34;/services/rest/login&#34;));
    jsonFilter.setPasswordParameter(&#34;j_password&#34;);
    jsonFilter.setUsernameParameter(&#34;j_username&#34;);
    jsonFilter.setAuthenticationManager(authenticationManager());
    // set failurehandler that uses no redirect in case of login failure; just HTTP-status: 401
    jsonFilter.setAuthenticationManager(authenticationManagerBean());
    jsonFilter.setAuthenticationFailureHandler(new SimpleUrlAuthenticationFailureHandler());
    // set successhandler that uses no redirect in case of login success; just HTTP-status: 200
    jsonFilter.setAuthenticationSuccessHandler(new AuthenticationSuccessHandlerSendingOkHttpStatusCode());
    return jsonFilter;
  }

  @SuppressWarnings(&#34;javadoc&#34;)
  @Inject
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

    auth.inMemoryAuthentication().withUser(&#34;admin&#34;).password(this.passwordEncoder.encode(&#34;admin&#34;)).roles(&#34;Admin&#34;);
  }

}
</pre>




Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/devonfw/workspaces/main/HttpRestAPIdevon4j/server&#39; in terminal 2 automatically. The first click will open a new terminal and the second one will change the directory. Alternatively you can click on the &#39;+&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/devonfw/workspaces/main/HttpRestAPIdevon4j/server`{{execute T2}}

Start the server in terminal 2 by running the 'maven' command 'mvn spring-boot:run'.

Because this terminal runs the server we will not use it for any other command.
 

`devon mvn spring-boot:run`{{execute T2 }}

This will take some time.

* In above example we have created VisitormanagementRestService and it&#39;s implementation i.e. VisitormanagementRestServiceImpl using JAX-RS standard.
* Here, &#34;VisitormanagementRestServiceImpl.java&#34; is annotated with @Named to make it a spring-bean.
* To get return response to client &#34;returnResponseToClient()&#34; can be accessed via HTTP GET under the URL path &#34;/visitormanagement/v1/clientrequest&#34;. It will return its result (String) as JSON (see @Produces in VisitormanagementRestService). 

Now, Java server should be running.
Now, You have to create devon4j service Client.
