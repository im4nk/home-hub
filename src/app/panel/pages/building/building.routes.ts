import { Routes, RouterModule } from '@angular/router';
import { BuildingManagementComponent } from './building-management/building-management.component';
import { ReportsComponent } from './reports/reports.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
    {
        path: 'management',
        component: BuildingManagementComponent,
    },
    {
        path: 'reports',
        component: ReportsComponent,
    },
    {
        path: 'ticket',
        component: TicketComponent,
    }
];

export const BuildingRoutes = RouterModule.forChild(routes);
