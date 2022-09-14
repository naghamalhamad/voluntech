import { Component, OnInit } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:this.fb.control('',[Validators.required, Validators.email]),
    password:this.fb.control('',[Validators.required,Validators.minLength(6)])
  })
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router: Router,
    private toast: HotToastService ) { }
  

  formStatus?: string;

  ngOnInit(): void {
  }
  
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    this.authService.signIn(this.loginForm.controls.email.value + '',
    this.loginForm.controls.password.value + '')
    .pipe(
      this.toast.observe({
        loading:'Signing in...',
        success:'Welcome To Voluntech',
        error:(error)=> 'This error Happend:'+error
      }))
    .subscribe({
      next: (data)=> {
        this.router.navigate(['']);
      }
 
    });
    //login in firebase
     //success => go to home 
     //else => alert

  }
  register(){
    this.router.navigate(['register'])
   }
}