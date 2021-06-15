As explained in REST document, With JAX-RS it is important to make sure that each service method is annotated with the proper HTTP method.

Let&#39;s create devon4j server.


## Setting up your Java project

Please change the folder to &#39;devonfw/workspaces/main&#39;.

`cd devonfw/workspaces/main`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create com.example.application.httprestserver`{{execute T1}}



Please change the folder to &#39;httprestserver&#39;.

`cd httprestserver`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.



Create the new folder 'core/src/main/java/com/example/application/httprestserver/general/service/api/rest'.

The '-p' parameter ensures, that the whole directory structure is created.

`mkdir -p core/src/main/java/com/example/application/httprestserver/general/service/api/rest`{{execute T1}}



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/httprestserver/api/src/main/java/com/example/application/httprestserver/general/service/api/rest`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'VisitormanagementRestService.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/httprestserver/api/src/main/java/com/example/application/httprestserver/general/service/api/rest/VisitormanagementRestService.java">
package com.example.application.httprestserver.visitormanagement.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path(&#34;/visitormanagement/v1&#34;)
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface VisitormanagementRestService {

  @GET
  @Path(&#34;/clientrequest&#34;)
  public String returnResponseToClient(String args);

}
</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/httprestserver/core/src/main/java/com/example/application/httprestserver/general/service/impl/rest`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'VisitormanagementRestServiceImpl.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/httprestserver/core/src/main/java/com/example/application/httprestserver/general/service/impl/rest/VisitormanagementRestServiceImpl.java">
package com.example.application.httprestserver.visitormanagement.service.impl.rest;

import javax.inject.Inject;
import javax.inject.Named;

import com.example.application.httprestserver.visitormanagement.service.api.rest.VisitormanagementRestService;

@Named(&#34;VisitormanagementRestService&#34;)
public class VisitormanagementRestServiceImpl implements VisitormanagementRestService {

  @Override
  public String returnResponseToClient(String args) {
    args = &#34;welcome to rest api&#34;;
    return args;
  }
}
</pre>



Switch to the editor and open the file 'devonfw/workspaces/main/httprestserver/core/src/main/java/com/example/application/httprestserver/general/service/impl/config/BaseWebSecurityConfig.java'.

`devonfw/workspaces/main/httprestserver/core/src/main/java/com/example/application/httprestserver/general/service/impl/config/BaseWebSecurityConfig.java`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/httprestserver/core/src/main/java/com/example/application/httprestserver/general/service/impl/config/BaseWebSecurityConfig.java" data-target="replace" data-marker="">
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

* In above example we have created VisitormanagementRestService and it&#39;s implementation i.e. VisitormanagementRestServiceImpl using JAX-RS standard.
* Here, &#34;VisitormanagementRestServiceImpl.java&#34; is annotated with @Named to make it a spring-bean.
* To get return response to client &#34;returnResponseToClient()&#34; can be accessed via HTTP GET under the URL path &#34;/visitormanagement/v1/clientrequest&#34;. It will return its result (String) as JSON (see @Produces in VisitormanagementRestService). 

Now, Java server should be running.
Now, You have to create devon4j service Client.
