Build and Run the Angular Frontend Server


Please change the folder to &#39;../../angular&#39;.

`cd ../../angular`{{execute T1}}


Install the dependencies from the package.json file.

`devon npm install  `{{execute T1}}


This may take some time.



Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/jump-the-queue/angular&#39; in terminal 3 automatically. Alternatively you can click on the + next to &#39;IDE&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/jump-the-queue/angular`{{execute T3}}


Now build and start the app
 

`devon ng serve --host 0.0.0.0 --disable-host-check`{{execute T3 }}

For your local projects you wouldn't add '--host 0.0.0.0' and '--disable-host-check' to the ng command.


Now you can open the following link to use the app. 
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
 

Now the Angular Frontend Server should be running.
