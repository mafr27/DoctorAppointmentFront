import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private objcHttp:HttpClient) { }

  readonly userUrl:"https://localhost:5001/api/doctors";


  usersList: User[];
  usersData: User=new User();

  getUsers() { 
    this.objcHttp.get(this.userUrl).toPromise().then(res => this.usersList = res as User[])
    console.log(this.usersList);
  }

  postUsers() {
    return this.objcHttp.post(this.userUrl, this.usersData);
  }

  putUsers() {
    return this.objcHttp.put(this.userUrl + "/" + this.usersData.UserId, this.usersData)
  }

  delUsers(UserId) {
    return this.objcHttp.delete(this.userUrl + "/" + UserId);
  }

}
