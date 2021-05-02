Usually, the name of the workspace repository is a concatenation of &#34;workspace-&#34; and the name of your playbook-folder.
In this tutorial, we will use this repository here:

https://github.com/devonfw-tutorials/workspace-devon4ng

Its name is the concatenation of &#39;workspace-&#39; and &#39;devon4ng&#39;.
The runners will look for a tutorial folder, which is named &#39;devon4ng&#39;. 



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/tutorials/devon4ng`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'index.asciidoc' will be created automatically inside the newly created folder.

<pre class="file" data-filename="tutorials/devon4ng/index.asciidoc">
= Devon4ng architecture
== Learn more about devon4ng layered architecture  

====

In this scenario you will learn about the architecture of a devon4ng project.

## Prerequisites
* basic TypeScript knowledge
* a Angular project   

## Learning goals
In this tutorial you will learn about: 
* devon4ng layered architecture
* devonfw reference client architecture
* different kinds of components and modules

====

[step]
--
restoreWorkspace()
--
</pre>



 Because the folder name already matches the second half of repository name, we don&#39;t need to add any parameters.  
 If the folder name does not match the workspace name, you can specify the second half with {&#34;workspace&#34;: &#34;devon4ng&#34;}
 Here is an example:





If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/tutorials/devon4ng-architecture`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'index.asciidoc' will be created automatically inside the newly created folder.

<pre class="file" data-filename="tutorials/devon4ng-architecture/index.asciidoc">
= Devon4ng architecture
== Learn more about devon4ng layered architecture  

====

In this scenario you will learn about the architecture of a devon4ng project.

## Prerequisites
* basic TypeScript knowledge
* a Angular project   

## Learning goals
In this tutorial you will learn about: 
* devon4ng layered architecture
* devonfw reference client architecture
* different kinds of components and modules

====

[step]
--
restoreWorkspace({&#34;workspace&#34;: &#34;devon4ng&#34;})
--
</pre>

Both ways will clone &#39;https://github.com/devonfw-tutorials/workspace-devon4ng.git&#39; into our workspace directory. 

Now you know, which name to choose for your repository and how to use &#39;restoreWorkspace&#39; inside your tutorials.

A quick summary: 

1) naming convention is the concatenation of &#39;workspace-&#39; and &#39;[name]&#39;

2) &#39;restoreWorkspace()&#39;&#39; will use the folder name as [name]

3) &#39;restoreWorkspace({&#34;workspace&#34;: &#34;name&#34;})&#39; will use the parameter as [name]
