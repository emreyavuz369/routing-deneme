import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityModule} from "./entity/entity.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(value => value.HomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EntityModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
