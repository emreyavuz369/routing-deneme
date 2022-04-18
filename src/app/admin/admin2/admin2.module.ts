import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin2RoutingModule } from './admin2-routing.module';
import { Admin2Component } from './admin2.component';


@NgModule({
  declarations: [
    Admin2Component
  ],
  imports: [
    CommonModule,
    Admin2RoutingModule
  ]
})
export class Admin2Module { }
