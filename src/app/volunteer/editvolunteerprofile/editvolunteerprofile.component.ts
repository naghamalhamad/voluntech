import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { VolunteerprofileService } from 'src/app/volunteerprofile.service';
import { AuthService } from 'src/app/auth.service';
import { switchMap } from 'rxjs';
import { updateProfile, user } from '@angular/fire/auth';
import { FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

export interface Skill {
  name: string;
}
@Component({
  selector: 'app-editvolunteerprofile',
  templateUrl: './editvolunteerprofile.component.html',
  styleUrls: ['./editvolunteerprofile.component.css']
})
export class EditvolunteerprofileComponent implements OnInit {

  constructor( private authService :AuthService,
    private volunteerprofile:VolunteerprofileService,
    private fb:FormBuilder,
    private toast: HotToastService,
    private router:Router
) { }

  ngOnInit(): void {
    const volunteerForm = this.fb.group({
      fullName:this.fb.control(''),
    //phoneNumber:this.fb.control(0),
    city:this.fb.control(''),
   // skills:this.fb.array([]),
    jobExperiences:this.fb.control(''),
    Courses:this.fb.control(''),
    availableTimes:this.fb.control(''),
  })

this.volunteerprofile.userState$?.subscribe((updateProfile)=>{
  if(updateProfile){
    this.volunteerForm.setValue({

      uid:updateProfile.uid+"",
      fullName: updateProfile.fullName+"",
      city: updateProfile.city+"",
      currentposition: updateProfile.currentposition+"",
      about: updateProfile.about+"",
     //skills:this.skills,
      jobTitle: updateProfile.jobTitle+"",
      companyName: updateProfile.companyName+"",
      courseTitle: updateProfile.courseTitle+"",
      courseName: updateProfile.companyName+"",
  
    });
  }
 }
  )
}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = [ 'HTML',  'CSS', 'JavaScript'];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.skills.push(value as string);
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
  volunteerForm = this.fb.group({
    uid:[''],

    fullName:[''],
    city:[''],
    //skills:[],
    currentposition:[''],
    about:[''],
    jobTitle:[''],
    companyName:[''],
    courseTitle:[''],
    courseName:[''],

}) 
  submit(){
    this.authService.userState$.pipe(
    switchMap(user=> this.volunteerprofile.update({
  
     id:user?.uid+'',
     fullName:this.volunteerForm.value.fullName,
     city:this.volunteerForm.value.city+"",
     currentposition:this.volunteerForm.value.currentposition+"",
     about:this.volunteerForm.value.about+"",
     //skills:this.skills,
     jobTitle:this.volunteerForm.value.jobTitle+"",
     companyName:this.volunteerForm.value.companyName+"",
     courseTitle:this.volunteerForm.value.courseTitle+"",
     courseName:this.volunteerForm.value.courseName+"",
   

    })
      )
      
      ).pipe(this.toast.observe({
      //popup to note that the process updated successfuly
        loading:'Updating Information...',
        success:'Seccessfully updated',
        error:(error)=>'This Error Happend'+error,
      
      
      }),
      ).subscribe({
        next:()=>{
          this.navgateToProfilePage();
        }
      })

  }
  navgateToProfilePage(){
    this.router.navigate(['/volunteer/Profile/about'])
    }
  
}

