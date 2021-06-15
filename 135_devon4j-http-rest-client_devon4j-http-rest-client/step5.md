You already have a Java interface VisitormanagementRestService to invoke.
You have to create rest client i.e. Devon4jRestClient.java and it&#39;s implementation class.


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/HttpRestClientdevon4j/api/src/main/java/com/devonfw/httpclient/httpRestClientdevon4j`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'Devon4jRestClient' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestClientdevon4j/api/src/main/java/com/devonfw/httpclient/httpRestClientdevon4j/Devon4jRestClient">
package com.devonfw.httpclient.httpdevon4jclient;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path(&#34;/devon4jrestclient&#34;)
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface Devon4jRestClient {

  @GET
  @Path(&#34;/response/&#34;)
  public String showResponse();
}

</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/HttpRestClientdevon4j/core/src/main/java/com/devonfw/httpclient/httpRestClientdevon4j`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'Devon4jRestClientImpl' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/HttpRestClientdevon4j/core/src/main/java/com/devonfw/httpclient/httpRestClientdevon4j/Devon4jRestClientImpl">
package com.devonfw.httpclient.httpdevon4jclient;

import javax.inject.Inject;
import javax.inject.Named;

import com.devonfw.httprestapi.restapi.visitormanagement.service.api.rest.VisitormanagementRestService;
import com.devonfw.module.service.common.api.client.ServiceClientFactory;

@Named(&#34;RestClientService&#34;)
public class Devon4jRestClientImpl implements Devon4jRestClient {

  @Inject
  private ServiceClientFactory serviceClientFactory;

  @Override
  public String showResponse() {

    String result = callSynchronous();
    System.out.println(result);
    return result;
  }

  private String callSynchronous() {

    VisitormanagementRestService visitormanagementRestService = this.serviceClientFactory
        .create(VisitormanagementRestService.class);
    // call of service over the wire, synchronously blocking until result is received or error occurred
    String resultFromAPICall = visitormanagementRestService.returnResponseToClient(&#34;Request sent to API&#34;);
    return resultFromAPICall;
  }

}

</pre>



* As you can see synchronous invocation of a service is very simple and type-safe. The actual call of showResponse will technically call the remote service(i.e. VisitormanagementRestService) over the wire ( via HTTP) including marshaling the arguments (converting String to JSON) and un-marshalling the result (e.g. converting the received JSON to String).
* Here in Devon4jRestClientImpl, there is a method &#34;callSynchronous&#34; which will call the VisitormanagementRestService and return the object of VisitormanagementRestService to visitormanagementRestService.

* With visitormanagementRestService, it is calling the method &#34;returnResponseToClient(String)&#34; of server.

* The response from server will be stored in &#34;resultFromAPICall&#34; as the return type of result is String.




After getting response, you can handle the response in your implementation. Here you can see that response is getting handled in &#34;showResponse&#34; method.
