

Switch to the editor and open the file 'devonfw/workspaces/main/QueryDslTutorial/pom.xml'.

`devonfw/workspaces/main/QueryDslTutorial/pom.xml`{{open}}




Replace the content in the file as it is shown in the following segment of code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/QueryDslTutorial/pom.xml" data-target="insert" data-marker="&lt;QueryDslDependencies&gt;">
        &lt;dependency&gt;
                &lt;groupId&gt;com.querydsl&lt;/groupId&gt;
                &lt;artifactId&gt;querydsl-apt&lt;/artifactId&gt;
                &lt;version&gt;4.1.3&lt;/version&gt;
                &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
                &lt;groupId&gt;com.querydsl&lt;/groupId&gt;
                &lt;artifactId&gt;querydsl-jpa&lt;/artifactId&gt;
                &lt;version&gt;4.1.3&lt;/version&gt;
        &lt;/dependency&gt;
</pre>



Switch to the editor and open the file 'devonfw/workspaces/main/QueryDslTutorial/pom.xml'.

`devonfw/workspaces/main/QueryDslTutorial/pom.xml`{{open}}




Replace the content in the file as it is shown in the following segment of code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/QueryDslTutorial/pom.xml" data-target="insert" data-marker="&lt;AnnotationProcessor&gt;">
        &lt;plugin&gt;
            &lt;groupId&gt;com.mysema.maven&lt;/groupId&gt;
            &lt;artifactId&gt;apt-maven-plugin&lt;/artifactId&gt;
            &lt;version&gt;1.1.3&lt;/version&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;process&lt;/goal&gt;
                        &lt;/goals&gt;
                            &lt;configuration&gt;
                                &lt;outputDirectory&gt;target/generated-sources/java&lt;/outputDirectory&gt;
                                    &lt;processor&gt;com.querydsl.apt.jpa.JPAAnnotationProcessor&lt;/processor&gt;
                            &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
        &lt;/plugin&gt;</pre>

