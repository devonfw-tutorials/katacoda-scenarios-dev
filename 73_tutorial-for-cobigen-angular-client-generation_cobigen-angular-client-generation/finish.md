Now you can go through api module of your java project and use Cobigen again to generate your client.
[step]
== Running CobiGen to generate to your Angular code
--
cobiGenJava("cobigenjavaexample/api/src/main/java/com/example/application/cobigenjavaexample/customermanagement/logic/api/to/CustomerEto.java",[1])
--
The angular code generation is done now and the generated code is stored in the workspace/main/devon4ng-applicaiton-template directory. Make sure the backend server url is configured in environemts/enviroment.ts file.

The below commands are used, to run the angular front end.
npm install
ng serve

[step]
--
runClientNg("devon4ng-application-template"), { "startupTime": 200, "port": 4200, "path": "" })
--

Conclusion: In this Tutorial we learned the following things below.
How to create a java project
How  to generate the Angular source code using CobiGen

