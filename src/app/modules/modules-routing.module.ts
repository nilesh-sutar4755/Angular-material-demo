import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Module1Component } from "./module1/module1.component";

const routes: Routes = [
  {
    path: "module1",
    component: Module1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {}
