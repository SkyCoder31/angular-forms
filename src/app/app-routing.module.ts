import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArraydetailsComponent } from './arraydetails/arraydetails.component';
import { ArrayroutingComponent } from './arrayrouting/arrayrouting.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [{
  path:'',
  component:AppComponent
},
{
  path:"moviebutton",
  component:ArrayroutingComponent
},
{
  path: "moviebutton/:id/:moviegenre/:rating",
  component:ArraydetailsComponent
},
{
  path: "observableHome",
  component:ObservableComponent
},
{
  path:"observable",
  component:ObservableComponent
},
{
  path:"**",
  component:FournotfourComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
