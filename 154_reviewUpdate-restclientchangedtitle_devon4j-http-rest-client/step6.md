You have successfully built the devon4j rest client.
Let&#39;s build and start the service client application.
This might take some time for application to start.


Please change the folder to &#39;httprestclient&#39;.

`cd httprestclient`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

* Once, application builds successfully. Open new terminal by clicking &#34;+&#34; and wait for it to load.
* Now, Copy and execute below command to navigate into client server.
`cd devonfw/workspaces/main/httprestclient/server`
