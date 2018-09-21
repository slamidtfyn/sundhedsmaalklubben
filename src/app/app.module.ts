import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { WhoamiComponent } from './whoami/whoami.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'ommig',   component:WhoamiComponent },
  { path: 'klubben',   component:InfoComponent },
  { path: 'kontakt',   component:ContactComponent },
  { path: '**',   component:HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    WhoamiComponent, InfoComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,


    RouterModule.forRoot(
      appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

