Above image display detailed structure of devon4j application. As shown above jump-the-queue application contains different components like queuemanagement, visitormanagement etc

Each component is divided into following layers:
* [client layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-client-layer.asciidoc) for the front-end (GUI).

* [service layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-service-layer.asciidoc) for the services used to expose functionality of the back-end to the client or other consumers. 
For example, in jtqj-api-&gt;queuemangement-&gt;service-&gt;api-&gt; rest contains interfaces for rest services. In core module jtqj-core-&gt;queuemanagement-&gt;service-&gt;impl-&gt; rest you will be able to see implementation of service.

* [batch layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-batch-layer.asciidoc) for exposing functionality in batch-processes (e.g. mass imports).

* [logic layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-logic-layer.asciidoc) for the business logic.
For example, in jtqj-api-&gt;queuemangement-&gt;logic-&gt;api contains ETO(Entity Transfer Object) , CTO(Composite Transfer object), some logic interfaces. In core module jtqj-core-&gt;queuemanagement-&gt;logic-&gt;impl you will be able to see usecase implementation.

* [data-access layer](https://github.com/devonfw/devon4j/blob/master/documentation/guide-dataaccess-layer.asciidoc) for the data access (esp. persistence).
For example, in jtqj-api-&gt;queuemangement-&gt;dataaccess-&gt;core contains entities, spring data repositories etc

====



### Key Principles:
devon4j application follows some fundamental principles  for all decisions about architecture, design, or choosing standards, libraries, and frameworks. 
It follows key principles such as KISS, open,patterns, solid. More detils can be found [here](https://github.com/devonfw/devon4j/blob/master/documentation/architecture.asciidoc#key-principles).

### Architecture Principles:
Additionally devon4j architecture is based on [architecture principles](https://github.com/devonfw/devon4j/blob/master/documentation/architecture.asciidoc#architecture-principles) such as Component Oriented Design, Homogeneity.

### Application Architecture:

For the architecture of an application we distinguish the following views:

* The **Business Architecture** describes an application from the business perspective. It divides the application into business components and with full abstraction of technical aspects.

* The **Technical Architecture** describes an application from the technical implementation perspective. It divides the application into technical layers and defines which technical products and frameworks are used to support these layers.

* The **Infrastructure Architecture** describes an application from the operational infrastructure perspective. It defines the nodes used to run the application including clustering, load-balancing and networking. This view is not explored further in this guide.

Detailed description about devon4j business and technical architecture can be found [here](https://github.com/devonfw/devon4j/blob/master/documentation/architecture.asciidoc#application-architecture)




