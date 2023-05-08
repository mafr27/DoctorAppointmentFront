import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(){this.resetForm()}

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.userService.usersData={UserId:0,FirstName:'',Lastname:'',Dob:'',Mobileno:'',Email:'',Password:'',Gender:''}
    }
  }

  onSubmit(form:NgForm){
    this.userService.postUsers().subscribe(res => {
      this.userService.getUsers();
      alert("Inserted Successfully!!!")
    },
    err => {
      alert("Not Inserted"+err)
    })
  }

}
