Last but not least add a step. A step consists of an explanation, a function to execute and an optional explanation of the result of the step. You can find a list with the currently available function on https://github.com/devonfw-tutorials/tutorial-compiler/wiki/Functions.

In this tutorial we will add a simple step which creates a new file.


Switch to the IDE and open the file 'tutorials/myTutorial/index.asciidoc'.

`tutorials/myTutorial/index.asciidoc`{{open}}


Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="tutorials/myTutorial/index.asciidoc" data-target="replace" data-marker="">
= Title of my new tutorial
====
In this section you can write the description of the tutorial. This can consist of several lines.

The description should explain the tutorial in a few words and explain what is to be learned.
====

Before the &#39;[step]&#39; keyword the explanation is written.
The explanation can consist of multiple lines.
[step]
--
createFile(&#34;pathToTheFile/fileName.txt&#34;)
--</pre>

