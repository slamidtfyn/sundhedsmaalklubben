import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const homeRoutes: Routes = [
  { path: 'hjem',  component: HomeComponent }
 
];

@NgModule({
  imports: [
    CommonModule,MaterialModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
