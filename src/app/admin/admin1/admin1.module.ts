import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { Admin1Component } from './admin1.component';


@NgModule({
  declarations: [
    Admin1Component
  ],
  imports: [
    CommonModule,
    Admin1RoutingModule
  ]
})
export class Admin1Module { }
