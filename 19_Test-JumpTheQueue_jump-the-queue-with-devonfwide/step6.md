Change the url to the backend server


Switch to the IDE and open the file "devonfw/workspaces/main/jump-the-queue/angular/src/environments/environment.ts".

`devonfw/workspaces/main/jump-the-queue/angular/src/environments/environment.ts`{{open}}


Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/jump-the-queue/angular/src/environments/environment.ts" data-target="replace" data-marker="">
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
    production: boolean;
    baseUrlRestServices: string;
} = {
    production: false,
    baseUrlRestServices: &#39;https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/jumpthequeue/services/rest&#39;,
};
  </pre>

