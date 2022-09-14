import { switchMap, take } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivityService } from 'src/app/activity.service';
import { AuthService } from 'src/app/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { VolunteerprofileService } from 'src/app/volunteerprofile.service';
import { CompanyprofileService } from 'src/app/companyprofile.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    activityName: this.fb.control(''),
    description: this.fb.control(''),
    type:this.fb.control(''),
    range: this.fb.group({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    })
  })

  constructor(public fb: FormBuilder,
    public activity: ActivityService,
    private auth: AuthService, 
    private router: Router,
    private toast: HotToastService,
    public volunteerprofile:VolunteerprofileService,
    public companyprofile:CompanyprofileService) { }
  ngOnDestroy(): void {
      
  }

  ngOnInit(): void {
  }



  submit(){
    //get current authenticated user id 
    //create activity for that userid
    //navigate all activities page

    let subscriber = this.auth.userState$.pipe(take(1)).subscribe((userCreddentials)=> {
      if(userCreddentials){
         this.activity.create({
          activityName: this.form.value.activityName+'',
          companyId:userCreddentials?.uid,
         // companyName:data?.companyName,
          type: this.form.value.type+'',
          //description: this.form.value.description+'',
          range: {...this.form.value.range}
          
      }).pipe(
        this.toast.observe({
          loading:'Registering User...',
          success:'Seccessfully Registered',
          error:(error)=> 'This error Happend:'+error
        }))
        .subscribe(()=> {
          //navigate to all activities page 
        
          this.router.navigate(['company/allvolunteer']);
        })
      }
    });
  }
}
