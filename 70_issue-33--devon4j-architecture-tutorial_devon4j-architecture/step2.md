### Create devon4j sample application

If you want to create devon4j application on your local machine there are two ways to do it:
* In eclipse as shown [here](https://devonfw.com/website/pages/docs/devon4j.asciidoc_tutorials.html#tutorial-newapp.asciidoc_from-eclipse)
* Using command line as shown [here](https://devonfw.com/website/pages/docs/devon4j.asciidoc_tutorials.html#tutorial-newapp.asciidoc_from-command-line)

Once devonfw-ide is installed , we will create sample devon4j application with name *sampleapp*. Next steps will guide you on how to do it.



## Setting up your java project

Please change the folder to &#39;devonfw/workspaces/main&#39;.

`cd devonfw/workspaces/main`{{execute T1}}

Now you can use devonfw to setup a java project for you by executing the following devon command.

`devon java create com.example.application.sampleapp`{{execute T1}}

Once project is created switch to next tab of IDE. In IDE explorer you can see folder structure like devonfw-&gt; workspaces-&gt;main-&gt;sampleapp . In sampleapp modules such as api,core and server will get created.

