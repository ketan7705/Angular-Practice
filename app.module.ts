import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { Employeeomponent } from './employee.component';
import { MessageComponent } from './message.component';
import { ProductComponent } from './product.component';
import { PatientComponent } from './patient/patient.component';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HosptialComponent } from './hosptial/hosptial.component';
import { TextDirective } from './text.directive';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent, Employeeomponent, CustomerComponent, ProductComponent, MessageComponent, PatientComponent, NurseComponent, DoctorComponent, HosptialComponent, TextDirective, CustomerDetailsComponent, CustomerListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
