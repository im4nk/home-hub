import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './public/layout/layout.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { PanelLayoutComponent } from './panel/layout/panel-layout/panel-layout.component';
import { PANEL_ROUTES } from './panel/panel.routes';
import { PUBLIC_ROUTES } from './public/public.routes';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: PUBLIC_ROUTES
      },
      {
        path: 'panel',
        component: PanelLayoutComponent,
        children: PANEL_ROUTES
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
