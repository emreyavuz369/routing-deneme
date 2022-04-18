import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin1',
    loadChildren: () => import('./admin1/admin1.module').then(value => value.Admin1Module)
  },
  {
    path: 'admin2',
    loadChildren: () => import('./admin2/admin2.module').then(value => value.Admin2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
