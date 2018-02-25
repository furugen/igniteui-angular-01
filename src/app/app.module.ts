import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavbarModule ,IgxGridModule,IgxSwitchModule,IgxDatePickerModule,IgxCalendarModule } from "igniteui-angular/main";
import "hammerjs";


import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    IgxNavbarModule ,
    IgxSwitchModule,
    IgxDatePickerModule,
    IgxCalendarModule,
    BrowserAnimationsModule,
    IgxGridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
