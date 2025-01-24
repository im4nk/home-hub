import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ShareModule } from '../../../share/share.module';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ShareModule,
    DashboardRoutes
  ]
})
export class DashboardModule { }
