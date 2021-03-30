= Eclipse Integration

== 1 Installation
Remark: CobiGen is preinstalled in the devonfw/devon-ide.

1.1  Preconditions
    -&gt; Eclipse 4.x

    -&gt; Java 7 Runtime (for starting eclipse with CobiGen). This is independent from the target version of your developed code

1.2. Installation steps
    1. Open the eclipse installation dialog
    menu bar → Help → Install new Software…

    2. Open CobiGen’s update site
       Insert the update site of your interest into the filed Work with and press Add …​

    Stable releases: https://dl.bintray.com/devonfw/cobigen.p2/






If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p cobigen-devon4j-template`{{execute T1}}

`cd  cobigen-devon4j-template`{{execute T1}}


Now clone the repository to your local directory.

`git clone https://github.com/devonfw/cobigen.git`{{execute T1}}

