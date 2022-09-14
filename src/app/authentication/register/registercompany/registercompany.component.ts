import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { CompanyprofileService } from 'src/app/companyprofile.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css']
})
export class RegistercompanyComponent implements OnInit {

  companyForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required,Validators.minLength(6)],
    confirmpassword:['',Validators.required],
    companyName:['',''],
    phoneNumber:['',[Validators.required,Validators.minLength(10)]],
    url:['',Validators.required],
    type:['',Validators.required],
    upload:['','']
  }, {Validators:this.passwordMatchingValidator()})

  constructor(private fb:FormBuilder,
     private authService:AuthService,
     private router:Router,
     private toast: HotToastService,
     private companyprofile:CompanyprofileService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.companyForm.get('email'); 
  }

  get password(){
    return this.companyForm.get('password');
  }
  get confirmpassword(){
    return this.companyForm.get('confirmPassword');
  }
  get name(){
    return this.companyForm.get('companyName');
  }

  get phone(){
    return this.companyForm.get('phone');
  }
  get url(){
    return this.companyForm.get('url');
  }
  get type(){
    return this.companyForm.get('type');
  }
  get upload(){
    return this.companyForm.get('upload');
  }
  submit(){
    const formValue = this.companyForm.value;
    this.authService.signUp(formValue.email+ '',formValue.password+'')
    .pipe(
      switchMap((data)=>{
        return this.companyprofile.create({
          uid:data.user?.uid,
          email:data.user?.email + '',
          companyName :this.companyForm.value.companyName+"",
          companyURL:this.companyForm.value.companyURL+"",
          type:this.companyForm.value.type+"",
          //upload:this.companyForm.value.uplaod,


        })
      }), 


      this.toast.observe({
        loading:'Registering User...',
        success:'Seccessfully Registered',
        error:(error)=> 'This error Happend:'+error
      })
    )
    .subscribe({
      next: ()=>{
      this.router.navigate(['']);
      }
  }
    );

  }

  passwordMatchingValidator(): ValidatorFn{
    return(control): ValidationErrors | null =>{
      const password = control.get('password')?.value;
      const confirm = control.get('confirmPassword')?.value;

      if(password && confirm
        && password !== confirm
        ){
          //invaild form input
          return {
            passwordDontMatch:true
          }
        }
        //validation is valid
        return null;


    }
  }
}