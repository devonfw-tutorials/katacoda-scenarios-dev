You have successfully built the devon4j rest client.
Let's build and start the service client application.
This might take some time for application to start.
[step]
--
buildJava("httprestclient", false)
--

* Once, application builds successfully. Open new terminal by clicking "+".
* Now, Execute below command to navigate into client server.
`cd devonfw/workspaces/main/httprestclient/server` {{execute T1}}
* Now, Execute below command to start the application.
`devon mvn spring-boot:run` {{execute T1}}

[step]
--
runServerJava("httprestclient/server", { "startupTime": 1000, "port": 8081, "path": "httprestclient" })
--

To test Synchronous method, follow below steps.
* Click on "+" next to terminal tab
* Select "select port to view host"
* Enter the port number "8081" 
* Enter username as "admin" and password as "admin"
* In the url, append "/httprestclient/services/rest/devon4jrestclient/response/"
* You will be able to see response "Welcome to rest api"
