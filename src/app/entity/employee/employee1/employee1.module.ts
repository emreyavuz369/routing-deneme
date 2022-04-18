import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee1RoutingModule } from './employee1-routing.module';
import { Employee1Component } from './employee1.component';


@NgModule({
  declarations: [
    Employee1Component
  ],
  imports: [
    CommonModule,
    Employee1RoutingModule
  ]
})
export class Employee1Module { }
