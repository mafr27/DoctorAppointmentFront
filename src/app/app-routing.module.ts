import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';

const routes: Routes = [
  {path:"userregister",component:UserregisterComponent},
  {path:"doctorregister",component:DoctorregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
