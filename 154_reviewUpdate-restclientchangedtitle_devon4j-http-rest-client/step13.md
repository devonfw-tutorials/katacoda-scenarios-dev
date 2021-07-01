

* Once, application builds successfully. Open new terminal by clicking &#34;+&#34; and wait for it to load.
* Now, Copy and execute below command to navigate into client server.
  `cd devonfw/workspaces/main/httprestclient/server`{{execute T1}}
* Now, Copy and execute below command to start the application.
  `devon mvn spring-boot:run`{{execute T1}}
To test Synchronous method, follow below steps.
* Click on &#34;+&#34; next to terminal tab
* Select &#34;select port to view host&#34;
* Enter the port number &#34;8081&#34; 
* In the url, append &#34;/httprestclient/services/rest/devon4jrestclient/response/&#34;
* Enter username as &#34;admin&#34; and password as &#34;admin&#34;
* You will be able to see response &#34;Welcome to rest api&#34;



