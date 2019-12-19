import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule,
  MatIconModule,/*MatToolbar that provides a container for headers, titles, or actions.*/
  MatCardModule,/*MatCard that provides a content container for text, photos, and actions in the context of a single subject.*/
  MatButtonModule,/*MatButton that provides a native  <button>  or  <a>  element enhanced with Material Design styling and ink ripples.*/
  MatProgressSpinnerModule/*MatProgressSpinner that provides a circular indicator of progress and activity.*/ } from '@angular/material';
  
@NgModule({
  imports:      [ BrowserModule, 
  FormsModule, 
  HttpClientModule, 
  AppRoutingModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
