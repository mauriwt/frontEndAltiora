import { Routes } from '@angular/router';
import { NoPageRoutes } from './no-page/no-page.routes';
import { RucRoutes } from './MdPrueba/ruc.routes';


export const routes: Routes = [ ...RucRoutes, ...NoPageRoutes];
