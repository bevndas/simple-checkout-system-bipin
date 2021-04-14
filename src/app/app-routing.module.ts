import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NopageComponent} from './shared/components/nopage/nopage.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
