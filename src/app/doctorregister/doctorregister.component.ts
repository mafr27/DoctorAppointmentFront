import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  constructor(public doctorService:DoctorService) { }

  ngOnInit(){this.resetForm()}

  resetForm(form?:NgForm){
    if(form!=null){
      form.reset();
    }
    else{
      this.doctorService.doctorData={DoctorId:0,Fname:"",Lname:"",Contactno:"",Specialization:""}
    }
  }

  onSubmit(form:NgForm){
    this.doctorService.postDoctor().subscribe(res => {
      this.doctorService.getDoctor();
      alert("Inserted Successfully!!!")
    },
    err => {
      alert("Not Inserted"+err)
    })
  }


}
