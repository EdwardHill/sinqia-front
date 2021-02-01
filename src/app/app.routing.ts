import { Perfil } from './_shared/model/enum/perfil';
import { AuthGuard } from './_modules/auth/services/auth.guard';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'administrador',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        data: { perfil: [Perfil.ADMIN.valor] },
        loadChildren: './_modules/administrador/administrador.module#AdministradorModule'
    },
    {
        path: 'cliente',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        data: { perfil: [Perfil.CLIENTE.valor] },
        loadChildren: './_modules/cliente/cliente.module#ClienteModule'
    },
   
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'auth',
            loadChildren: './_modules/auth/auth.module#AuthModule'
        }]
    },


    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './dashboard/dashboard.module#DashboardModule'
    //         }, {
    //             path: 'components',
    //             loadChildren: './components/components.module#ComponentsModule'
    //         }, {
    //             path: 'forms',
    //             loadChildren: './forms/forms.module#Forms'
    //         }, {
    //             path: 'tables',
    //             loadChildren: './tables/tables.module#TablesModule'
    //         }, {
    //             path: 'maps',
    //             loadChildren: './maps/maps.module#MapsModule'
    //         }, {
    //             path: 'widgets',
    //             loadChildren: './widgets/widgets.module#WidgetsModule'
    //         }, {
    //             path: 'charts',
    //             loadChildren: './charts/charts.module#ChartsModule'
    //         }, {
    //             path: 'calendar',
    //             loadChildren: './calendar/calendar.module#CalendarModule'
    //         }, {
    //             path: '',
    //             loadChildren: './userpage/user.module#UserModule'
    //         }, {
    //             path: '',
    //             loadChildren: './timeline/timeline.module#TimelineModule'
    //         }
    //     ]
    // }, {
    //     path: '',
    //     component: AuthLayoutComponent,
    //     children: [{
    //         path: 'pages',
    //         loadChildren: './pages/pages.module#PagesModule'
    //     }]
    // },
    {
        path: '**',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
];
