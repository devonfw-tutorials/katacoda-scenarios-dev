devonfw-ide has been installed for you.

First, clone the `QueryDslTutorial` repository from GitHub. It contains an application with a simple REST service.


Please change the folder to &#39;devonfw/workspaces/main&#39;.

`cd devonfw/workspaces/main`{{execute T1}}



Now clone the repository to your local directory.

`git clone https://github.com/EduardKrieger/QueryDslTutorial.git`{{execute T1}}

In order to use Querydsl, we need to add the Querydsl dependencies to our Maven project and configure the Maven APT plugin. 
The JPAAnnotationProcessor will find domain types annotated with the javax.persistence.Entity annotation and generate query types for them.
