In single-page-applications as the application size increases its loading speed decreases (since typically the entire application is loaded at once). Lazy loading is a design pattern that defers initialization of objects until it is needed. Angular handles lazy loading through the routing module which redirects to requested pages. Those pages can be loaded at start or on demand. In this tutorial you will build a simple app to understand how lazyloading is implemented in Angular.

## Prerequisites
* devonfw-ide installed
* Basic Angular knowledge

## Learning goals
In this tutorial you will learn how to:
* create an Angular application using the devon command
* look how all modules are loaded by an application at the begining (eager loading)
* implement lazy loading and understand its concept and advantages



The definition of each step of this tutorial can be found at https://github.com/devonfw-tutorials/tutorials/tree/main/devon4ng-lazy-loading

Feel free to fix any errors you find yourself. You just need to create a pull request to the tutorials repository with your changes.
You can find a description of what to look for when creating a pull request at the devonfw contribution guide: https://devonfw.com/website/pages/docs/CONTRIBUTING.asciidoc.html#contributing.asciidoc_pull-requests
