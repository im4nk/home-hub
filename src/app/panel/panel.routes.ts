export const PANEL_ROUTES = [
    {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'building',
        loadChildren: () => import('./pages/building/building.module').then(m => m.BuildingModule)
    },
];