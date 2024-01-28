import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup= new FormGroup({

    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])

  })

   submitForm()
  {
    if(this.loginForm.invalid)
    {
      return;
    }
    console.log(this.loginForm.value);
    this._AuthService.login(this.loginForm.value).subscribe((data)=>{
      if(data.message=='success')
      {
        localStorage.setItem('userToken',data.token)
        this._AuthService.saveUserData();
        this._Router.navigateByUrl('/home')
      }
      else
      {
        alert(data.message)
      }
      // console.log(data);
       
    })
    
  }

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
