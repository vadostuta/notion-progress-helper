import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: ()=> import('./modules/start/start.module').then(m=> m.StartModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path: 'updates',
    loadChildren: ()=> import('./modules/updates/updates.module').then(m=> m.UpdatesModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
