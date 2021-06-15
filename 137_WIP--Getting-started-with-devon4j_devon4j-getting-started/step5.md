CobiGen is integrated via plugin in the VS Code IDE. We will use it to generate code from one single java class based on existing templates.


Run the CobiGen command 'adapt-templates' to generate a new templates folder and save its location in a configuration file.

`devon cobigen adapt-templates`{{execute T1}}




## CobiGen Java


Open the following Java file in the IDE.
`devonfw/workspaces/main/friendexample/core/src/main/java/com/example/friendexample/friendmanagement/dataaccess/api/FriendEntity.java`{{open}}

You can use the plugin simply via the context menu. Make a right click on the Java file (in the explorer on the left or in the editor itself). The context menu will open and you can start the CobiGen Plugin by clicking on 'CobiGen'.

A terminal will open on the bottom of the IDE and CobiGen CLI will start.

You can choose the templates CobiGen should use by entering the numbers in the terminal of the IDE.

`1,3,5,6,8`


