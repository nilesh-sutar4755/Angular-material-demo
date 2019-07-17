import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "modules",
        loadChildren: "./modules/modules.module#ModulesModule"
      }
    ]
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
