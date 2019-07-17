import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModulesRoutingModule } from "./modules-routing.module";
import { Module1Component } from "./module1/module1.component";

@NgModule({
  declarations: [Module1Component],
  imports: [CommonModule, ModulesRoutingModule]
})
export class ModulesModule {}
