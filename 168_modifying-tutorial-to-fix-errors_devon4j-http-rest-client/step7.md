To create devon4j service Client. First, You need to create a sample devon4j project.



## Setting up your Java project

Please change the folder to &#39;..&#39;.

`cd ..`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create com.example.application.httprestclient`{{execute T1}}

Then, You need to add required dependency to your application.

Since in this tutorial you will build client on Synchronous call so, you have to add dependency for synchronous consuming REST services via Apache CXF (Java8+)
Add below dependency in core folder pom.xml

----
&lt;dependency&gt;
  &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
  &lt;artifactId&gt;devon4j-starter-cxf-client-rest&lt;/artifactId&gt;
&lt;/dependency&gt;

----
--
changeFile(&#34;httprestclient/core/pom.xml&#34;, { &#34;file&#34;: &#34;files/dependency.txt&#34;, &#34;placeholder&#34;: &#34;&lt;!-- Starter for asynchronous consuming REST services via Jaca HTTP Client (Java11+) --&gt;&#34; })
--
