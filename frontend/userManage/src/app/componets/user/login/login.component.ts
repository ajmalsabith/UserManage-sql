import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup

  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService){}

  ngOnInit(): void {
    this.loginform= new FormGroup({
      name:new FormControl(''),
      email:new FormControl('')
    })
  }

  submit(){
    let user= this.loginform.getRawValue()
    if(user.name=='' || user.email==''){
      this.toaster.error('please fill data')
    }
    
    this.http.post('http://localhost:5000/login',user).subscribe((res:any)=>{
      
      this.toaster.success(res.message)
      this.router.navigate(['/home'])
    },(err)=>{
      this.toaster.error(err.message)
    })

  }
}
