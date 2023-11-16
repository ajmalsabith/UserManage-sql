import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerform!:FormGroup

  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService){}

  ngOnInit(): void {
    this.registerform= new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      age:new FormControl('')
    })
  }

  submit(){
    let user= this.registerform.getRawValue()
    if(user.name=='' || user.email=='' || user.age==''){
      this.toaster.error('please fill data')
    }
    this.http.post('http://localhost:5000/register',user).subscribe((res:any)=>{
      
      this.toaster.success(res.message)
      this.router.navigate(['/login'])
    },(err)=>{
      this.toaster.error(err.message)
    })

  }

}
