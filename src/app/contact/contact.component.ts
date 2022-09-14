import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthService } from '../auth.service';
import { VolunteerprofileService } from '../volunteerprofile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm=this.fb.group({
    name:[''],
    email:[''],
    message:[''],
  
    })


  constructor(private fb:FormBuilder,
     private authService:AuthService,
     private router:Router,
     private toast: HotToastService,
    private volunteerprofile:VolunteerprofileService
     ) { }

  ngOnInit(): void {
  }

  get name(){
    return this.contactForm.get('name'); 
  }

  get email(){
    return this.contactForm.get('email');
  }
  get message(){
    return this.contactForm.get('message');
  }
  
  send(){
    /*
    const formValue = this.volunteerprofile.get;
    this.authService.signUp(formValue.email+ '',formValue.password+'')
    .pipe(
      switchMap((data)=>{
        return this.volunteerprofile.create({
          uid: data.user?.uid,
          fullName: this.volunteerprofile.value.name + "",
          email: this.volunteerprofile.value.email + "",
          message: this.contactForm.value.message + "",
          currentposition: undefined
        })
      }), 
      this.toast.observe({
        loading:'Sending...',
        success:'The Message Was Seccessfully Sent',
        error:(error)=> 'This error Happend:'+error
      })
    )
    .subscribe({
      next: ()=>{
      this.router.navigate(['']);
      }
  }
    );
*/
  }


  

}



