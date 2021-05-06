Now, lets make the SecondLeftModule load lazily. For this, you need to change `component` to `loadChildren` and refer `SecondLeftModule` in the file `first-routing.module.ts`. Next, you need to remove `SecondLeftModule` from the `imports` array of `first.module.ts`. After that you need to route the `ContentComponent` within the `second-left-routing.module.ts`.


Switch to the IDE and open the file 'devonfw/workspaces/main/level-app/src/app/first/first-routing.module.ts'.

`devonfw/workspaces/main/level-app/src/app/first/first-routing.module.ts`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/level-app/src/app/first/first-routing.module.ts" data-target="replace" data-marker="">
import { NgModule } from &#39;@angular/core&#39;;
import { Routes, RouterModule } from &#39;@angular/router&#39;;
import { ContentComponent as ContentLeft} from &#39;./second-left/content/content.component&#39;;
import { ContentComponent as ContentRight} from &#39;./second-right/content/content.component&#39;;
import { FirstComponent } from &#39;./first/first.component&#39;;

const routes: Routes = [
  {
    path: &#39;&#39;,
    component: FirstComponent
  },
  {
    path: &#39;second-left&#39;,
    loadChildren: () =&gt; import(&#39;./second-left/second-left.module&#39;).then(m =&gt; m.SecondLeftModule),
  },
  {
    path: &#39;second-right&#39;,
    component: ContentRight
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
</pre>



Switch to the IDE and open the file 'devonfw/workspaces/main/level-app/src/app/first/first.module.ts'.

`devonfw/workspaces/main/level-app/src/app/first/first.module.ts`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/level-app/src/app/first/first.module.ts" data-target="replace" data-marker="">
import { NgModule } from &#39;@angular/core&#39;;
import { CommonModule } from &#39;@angular/common&#39;;

import { FirstRoutingModule } from &#39;./first-routing.module&#39;;
import { FirstComponent } from &#39;./first/first.component&#39;;

import { SecondRightModule } from &#39;./second-right/second-right.module&#39;;

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SecondRightModule,
  ]
})
export class FirstModule { }
</pre>



Switch to the IDE and open the file 'devonfw/workspaces/main/level-app/src/app/first/second-left/second-left-routing.module.ts'.

`devonfw/workspaces/main/level-app/src/app/first/second-left/second-left-routing.module.ts`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/level-app/src/app/first/second-left/second-left-routing.module.ts" data-target="replace" data-marker="">
import { NgModule } from &#39;@angular/core&#39;;
import { Routes, RouterModule } from &#39;@angular/router&#39;;
import { ContentComponent } from &#39;./content/content.component&#39;;

const routes: Routes = [
  {
    path: &#39;&#39;,
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLeftRoutingModule { }
</pre>

