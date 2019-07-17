import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule]
})
export class AuthenticationModule {}
