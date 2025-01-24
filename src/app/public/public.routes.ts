export const PUBLIC_ROUTES = [
    {
        path: '',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    }
];
