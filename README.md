# StoreTestTask
### Angular App link
https://store-test-task.netlify.app

### Ngrx documentation
https://ngrx.io/docs
##### Install ngrx store
* npm install @ngrx/store --save
* ng add @ngrx/store@latest --minimal false
##### Install store-devtools
* npm install @ngrx/store-devtools --save
* ng add @ngrx/store-devtools@latest
##### Install effects
* npm install @ngrx/effects --save
* ng add @ngrx/effects@latest
##### Install router-store
* npm install @ngrx/router-store --save
* ng add @ngrx/router-store@latest

##### Install @ngrx/schematics
* npm install @ngrx/schematics --save-dev

##### Generate the initial state management files within a store folder and register it within the app.module.ts.
* ng generate @ngrx/schematics:store State --root --state-path /store --module app.module.ts

##### Install Angular Material
* ng add @angular/material

##### Start testing
>ng test --code-coverage

