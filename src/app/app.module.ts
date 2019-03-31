import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from 'angularfire2/database'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';

/**
 * username   testuser3@test.com
 * password   test123
 */


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    WelcomeComponent,
    HeaderComponent,
    CourseDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   //Google Firebase Modules 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path: 'welcome', component: WelcomeComponent },
      {path: 'courses', component: CourseListComponent}, 
      {path: 'courses/:id',component:CourseDetailsComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
