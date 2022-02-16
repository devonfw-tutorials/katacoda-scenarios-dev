Once the project is created, we will start building the application.

In the files folder, there are some Java files that will be needed in the application development.

We need to copy them into the project as follows:

====


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/httprestservice/core/src/main/java/com/example/application/httprestservice/visitormanagement/service/impl/rest`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'VisitormanagementRestServiceImpl.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/httprestservice/core/src/main/java/com/example/application/httprestservice/visitormanagement/service/impl/rest/VisitormanagementRestServiceImpl.java">
package com.example.application.httprestserver.visitormanagement.service.impl.rest;

import javax.inject.Named;

import com.example.application.httprestserver.visitormanagement.service.api.rest.VisitormanagementRestService;

@Named(&#34;VisitormanagementRestService&#34;)
public class VisitormanagementRestServiceImpl implements VisitormanagementRestService {

  @Override
  public String returnResponseToClient() {

    return &#34;Welcome to REST API world&#34;;
  }

}

</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/httprestservice/core/src/main/java/com/example/application/httprestservice/visitormanagement/service/impl/rest`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'VisitormanagementRestService.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/httprestservice/core/src/main/java/com/example/application/httprestservice/visitormanagement/service/impl/rest/VisitormanagementRestService.java">
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
  @Path(&#34;/clientrequest/&#34;)
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public String returnResponseToClient();

}
</pre>

