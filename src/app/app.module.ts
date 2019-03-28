import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountRepComponent } from './count-rep/count-rep.component';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { FormatChronometerPipe } from './format-chronometer.pipe';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountRepComponent,
    ChronometerComponent,
    FormatChronometerPipe,
    HomeComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
