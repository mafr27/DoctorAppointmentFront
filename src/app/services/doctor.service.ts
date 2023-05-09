import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private objcHttp:HttpClient) { }

  readonly doctorUrl:"https://localhost:5001/api/doctors";


  doctorList: Doctor[];
  doctorData: Doctor=new Doctor();

  getDoctor() { 
    this.objcHttp.get(this.doctorUrl).toPromise().then(res => this.doctorList = res as Doctor[])
    console.log(this.doctorList);
  }

  postDoctor() {
    console.log(this.doctorData)
    return this.objcHttp.post(this.doctorUrl, this.doctorData);
  }

  putDoctor() {
    return this.objcHttp.put(this.doctorUrl + "/" + this.doctorData.DoctorId, this.doctorData)
  }

  delDoctor(DoctorId) {
    return this.objcHttp.delete(this.doctorUrl + "/" + DoctorId);
  }

}
