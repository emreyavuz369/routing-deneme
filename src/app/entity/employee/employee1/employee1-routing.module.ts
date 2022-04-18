import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Employee1Component} from "./employee1.component";

const routes: Routes = [
  {
    path: '',
    component: Employee1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Employee1RoutingModule { }
