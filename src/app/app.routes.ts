import { Routes } from '@angular/router';
import { HomeComponent } from './ng-routing/home/home.component';
import { ContactComponent } from './ng-routing/contact/contact.component';
import { AboutComponent } from './ng-routing/about/about.component';
import { PageNotFoundComponent } from './ng-routing/page-not-found/page-not-found.component';

/**
 * Tomar en cuenta las importaciones porque son importantes para poder realizar el ruteo de las páginas
 * importante importar "Routes" en app.routes.ts
 * importante importar "RouterModule" en app.component.ts, se utiliza para que las rutas sean identificables como links
*/

export const routes: Routes = [
    /**
     * Estamos definiendo una entrada a home, desde que se inicia el proyecto, es decir, si no hay una URL especificada, muestra
     * el contenido de home.
     * {
     *  path: '',
     *  component: HomeComponent,
     * },
    */
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        /* Con esto lo que logramos es indicar que redireccione a un path específico */
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
