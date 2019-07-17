import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthenticationComponent } from "./authentication.component";

const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
