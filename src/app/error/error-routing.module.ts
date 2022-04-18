import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error.component";

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
