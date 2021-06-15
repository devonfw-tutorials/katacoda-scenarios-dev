This is a getting started tutorial. You will be guided through the necessary steps, with short explanations on what you are doing. You do not need to understand everything at this point - you get it later.

Before you can start writing your fist business logic you will have to setup your development environment. We will do this with devon IDE. devon IDE is a tool that sets up your environment according to settings stored in a repository. This settings are usually provided by your project.


## devonfw setup



Create the directory where the devonfw IDE will be installed.

`mkdir devonfw`{{execute T1}}

`cd devonfw`{{execute T1}}


To install devonfw execute the following commands. More information about setting up your IDE on https://devonfw.com/website/pages/docs/devonfw-ide-introduction.asciidoc.html#setup.asciidoc

First you have do download and extract the installation files.

`wget -c https://bit.ly/2BCkFa9 -O - | tar -xz`{{execute T1}}

Now start the installation process. The tools that are installed within the IDE can be configured in a settings repository. A repository that you can use has already been created by the setup script. It is located in the '/root/devonfw-settings' folder.

`bash setup /root/devonfw-settings/settings.git`{{execute T1}}

The installation process may take a while.

Accept the licence agreements.
`yes`{{execute T1}}


The installer will ask you if you want to enter secrets for your maven repository. You can simply skip this by pressing 'Enter'.
 

The devonfw IDE is now installed. To use the new 'devon' commands you have the open a new terminal or use the following command:

`. ~/.bashrc`{{execute T1}}

