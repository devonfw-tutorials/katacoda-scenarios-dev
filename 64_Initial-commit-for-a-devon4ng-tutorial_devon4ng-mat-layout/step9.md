Next, we will create a sidenav. But before that lets create a couple of components to navgate between, the links of which we will add to the sidenav. You can use the `ng generate component` (or `ng g c` command for short) to create Home and Data components. But here, we will create them manually. We nest them in the `pages` sub-directory since they represent our pages.


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'home.component.html' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home/home.component.html">
&lt;h2&gt;Home Page&lt;/h2&gt;

</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'home.component.scss' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home/home.component.scss">
h2 {
    text-align: center;
    margin-top: 50px;
}
</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'home.component.ts' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/home/home.component.ts">
import { Component, OnInit } from &#39;@angular/core&#39;;

@Component({
  selector: &#39;app-home&#39;,
  templateUrl: &#39;./home.component.html&#39;,
  styleUrls: [&#39;./home.component.scss&#39;]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'data.component.html' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data/data.component.html">
&lt;h2&gt;Data Page&lt;/h2&gt;

</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'data.component.scss' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data/data.component.scss">
h2 {
    text-align: center;
    margin-top: 50px;
}
</pre>



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'data.component.ts' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/devon4ng-mat-layout/src/app/pages/data/data.component.ts">
import { Component, OnInit } from &#39;@angular/core&#39;;

@Component({
  selector: &#39;app-data&#39;,
  templateUrl: &#39;./data.component.html&#39;,
  styleUrls: [&#39;./data.component.scss&#39;]
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

</pre>

