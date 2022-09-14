import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { VolunteerprofileService } from 'src/app/volunteerprofile.service';

export interface Skill {
  name: string;
}
@Component({
  selector: 'app-registervolunteer',
  templateUrl: './registervolunteer.component.html',
  styleUrls: ['./registervolunteer.component.css']
})

export class RegistervolunteerComponent implements OnInit {

  volunteerForm = this.fb.group({
    fullName:this.fb.control('',Validators.required),
    email:this.fb.control('',[Validators.required,Validators.email]),
    phoneNumber:this.fb.control(0,Validators.required),
    password:this.fb.control('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:this.fb.control('',[Validators.required,Validators.minLength(8)]),
    city:this.fb.control('',Validators.required),
    currentposition:this.fb.control('',Validators.required),
    skills:this.fb.control('',Validators.required),
    about:this.fb.control('',Validators.required),
    jobTitle:this.fb.control('',Validators.required),
    companyName:this.fb.control('',Validators.required),
    courseTitle:this.fb.control('',Validators.required),
    courseName:this.fb.control('',Validators.required),
  },{Validators:this.passwordMatchingValidator()})

//add all the constructors that want to use 
  constructor(private fb:FormBuilder,
    public authService:AuthService,
    private router:Router,
    private toast: HotToastService,
    private volunteerprofile:VolunteerprofileService) { }
  ngOnInit(): void {
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = ['HTML','CSS','JavaScript'];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.skills.push(value as string);
      console.log(this.skills)
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  get email(){
    return this.volunteerForm.get('email'); 
  }

  get password(){
    return this.volunteerForm.get('password');
  }
  get confirmpassword(){
    return this.volunteerForm.get('confirmPassword');
  }

  submit(){ // take only the emaila nd password to login in
    const formValue = this.volunteerForm.value;
    this.authService.signUp(formValue.email+ '',formValue.password+'') 
  .pipe( 
    switchMap((data)=>{
      return this.volunteerprofile.create({
        uid: data.user?.uid + '',
        email: data.user?.email + '',
        fullName: this.volunteerForm.value.fullName + "",
        //skills:this.skills,
        //phoneNumber: this.volunteerForm.value.phoneNumber??0,
        city: this.volunteerForm.value.city,
        currentposition:this.volunteerForm.value.currentposition+"",
        about:this.volunteerForm.value.about+"",
        jobTitle: this.volunteerForm.value.jobTitle,
        companyName:this.volunteerForm.value.companyName+"",
        courseTitle:this.volunteerForm.value.courseTitle+"",
        courseName:this.volunteerForm.value.courseName+"",

      })
    }),
    
  
  //popup to descrip the regesteration/login process
        this.toast.observe({
          loading:'Registering User...',
          success:'Seccessfully Registered',
          error:(error)=> 'This error Happend:'+error
        })
    )
    .subscribe({ //the nex step after succissfuly registeration
      next: ()=>{
      this.router.navigate(['']);
      }
  }
    );

  }

 passwordMatchingValidator(): ValidatorFn{ //cross validation to validate password and confirm password to be the same
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