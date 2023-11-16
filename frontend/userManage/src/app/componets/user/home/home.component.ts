import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  userdata:any

  constructor(private router:Router,private http:HttpClient,private toaster:ToastrService){}
  ngOnInit(): void {
    this.http.get('http://localhost:5000/userfind').subscribe((res)=>{
      this.toaster.success('data get')
      this.userdata=res
    },(err)=>{
      this.toaster.error('somthing wrong..!')
    })
  }

}
