

![devon4j_proj_structure1.jpg](./assets/devon4j_proj_structure1.jpg)



As shown above, sampleapp contains 3 modules i.e api, core and server.

api: It contains API for sampleapp.The API contains the required artifacts to interact with your application via remote services. This can be REST service interfaces, transfer-objects with their interfaces and datatypes but also OpenAPI or gRPC contracts.

core: It is the core of the application.In this module you can write actual business logic with service implementation, as well as entire logic layer and dataaccess layer.

batch: optional module for batch layer. In this example we have not created it.

server: This module bundles the entire app (core with optional batch) typically as a bootified WAR file.

If you want to know more about modules and project structure refer [here](https://github.com/devonfw/devon4j/blob/master/documentation/guide-structure.asciidoc#project-structure).

devon4j application follows [multilayered architecture](https://en.wikipedia.org/wiki/Multitier_architecture).

Each component is divided into following layers:
* [client layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-client-layer.asciidoc) for the front-end (GUI).

* [service layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-service-layer.asciidoc) for the services used to expose functionality of the back-end to the client or other consumers.

* [batch layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-batch-layer.asciidoc) for exposing functionality in batch-processes (e.g. mass imports).

* [logic layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-logic-layer.asciidoc) for the business logic.

* [data-access layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-dataaccess-layer.asciidoc) for the data access (esp. persistence).

