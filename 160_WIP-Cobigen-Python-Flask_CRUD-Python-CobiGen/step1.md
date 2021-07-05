

Run the CobiGen command 'adapt-templates' to generate a new templates folder and save its location in a configuration file.

`devon cobigen adapt-templates`{{execute T1}}




Please change the folder to &#39;workspaces/main&#39;.

`cd workspaces/main`{{execute T1}}


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/.cobigen/templates/CobiGen_Templates/src/main/templates`{{execute T1}}

`cd  /root/.cobigen/templates/CobiGen_Templates/src/main/templates`{{execute T1}}


Now clone the repository to your local directory.

`git clone https://github.com/devonfw-forge/cobigen-python-templates.git`{{execute T1}}

