import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule]
})
export class DashboardModule {}
