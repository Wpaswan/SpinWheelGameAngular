import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWheelModule } from 'ngx-wheel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { PrizeComponent } from './prize/prize.component';
import { Prize1Component } from './prize1/prize1.component';
import { Prize2Component } from './prize2/prize2.component';
import { Prize3Component } from './prize3/prize3.component';
import { Prize4Component } from './prize4/prize4.component';
import { Prize5Component } from './prize5/prize5.component';
import { Prize6Component } from './prize6/prize6.component';
import { Prize7Component } from './prize7/prize7.component';
import { Prize8Component } from './prize8/prize8.component';
import { Prize9Component } from './prize9/prize9.component';
import { Prize10Component } from './prize10/prize10.component';
import { Prize11Component } from './prize11/prize11.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    PrizeComponent,
    Prize1Component,
    Prize2Component,
    Prize3Component,
    Prize4Component,
    Prize5Component,
    Prize6Component,
    Prize7Component,
    Prize8Component,
    Prize9Component,
    Prize10Component,
    Prize11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWheelModule,
    BrowserAnimationsModule,
    MatDialogModule ,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
