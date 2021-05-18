The below commands are used, to run the angular front end.
npm install
ng serve



Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/devon4ng-application-template&#39; in terminal 2 automatically. The first click will open a new terminal and the second one will change the directory. Alternatively you can click on the &#39;+&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/devon4ng-application-template`{{execute T2}}


Now build and start the app
 

`devon ng serve --host 0.0.0.0 --disable-host-check`{{execute T2 }}

For your local projects you wouldn't add '--host 0.0.0.0' and '--disable-host-check' to the 'ng' command.


Now you can open the following link to use the app. 
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
 

