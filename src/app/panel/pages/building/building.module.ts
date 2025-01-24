import { NgModule } from '@angular/core';
import { BuildingRoutes } from './building.routes';
import { ShareModule } from '../../../share/share.module';
import { BuildingManagementComponent } from './building-management/building-management.component';
import { ReportsComponent } from './reports/reports.component';
import { TicketComponent } from './ticket/ticket.component';
@NgModule({
  declarations: [
    BuildingManagementComponent,
    ReportsComponent,
    TicketComponent
  ],
  imports: [
    ShareModule,
    BuildingRoutes
  ]
})
export class BuildingModule { }
