import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';//for template-driven forms
import { ReactiveFormsModule } from '@angular/forms';//for reactive forms
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { ArrayroutingComponent } from './arrayrouting/arrayrouting.component';
import { ArraydetailsComponent } from './arraydetails/arraydetails.component';
import { ObservableComponent } from './observable/observable.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { DemoserviceService } from './services/demoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormsReactiveComponent,
    ArrayroutingComponent,
    ArraydetailsComponent,
    ObservableComponent,
    FournotfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//template-driven
    ReactiveFormsModule//reactive
  ],
  providers: [DemoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
