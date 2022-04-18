import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRoutingModule } from './entity-routing.module';
import {EmployeeModule} from "./employee/employee.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityRoutingModule,
    EmployeeModule
  ]
})
export class EntityModule { }
