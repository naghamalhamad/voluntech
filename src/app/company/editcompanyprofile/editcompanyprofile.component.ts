import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { VolunteerprofileService } from 'src/app/volunteerprofile.service';
import { AuthService } from 'src/app/auth.service';
import { switchMap } from 'rxjs';
import { updateProfile, user } from '@angular/fire/auth';
import { FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { CompanyprofileService } from 'src/app/companyprofile.service';
// import { Router } from 'express';
@Component({
  selector: 'app-editcompanyprofile',
  templateUrl: './editcompanyprofile.component.html',
  styleUrls: ['./editcompanyprofile.component.css']
})
export class EditcompanyprofileComponent implements OnInit {

  companyName?:string|null|undefined;
  type?:string|null|undefined;
  url?:string|null|undefined;
  about?:string|null|undefined

  constructor(private authService :AuthService,
    public companyprofile:CompanyprofileService,
    private fb:FormBuilder,
    private toast: HotToastService,
    // public router:Router
    ) { }

    
    companyForm=this.fb.group({
      companyName:this.fb.control(''),
      type:this.fb.control(''),
      url:this.fb.control(''),
      about:this.fb.control('')

})

  ngOnInit(): void {
    this.companyprofile.userState$?.subscribe((updateProfile)=>{
      if(updateProfile){

        this.companyName=updateProfile.companyName;
        this.type=updateProfile.type;
        //this.url=updateProfile.url;
        //this.about=updateProfile.about
        
      }
     }
      )
    }
  


update(){
  this.authService.userState$.pipe(
  switchMap(user=> this.companyprofile.update({
    uid:user?.uid,
   companyName:this.companyForm.value.companyName+'',
   type:this.companyForm.value.type+'',
   //url:this.companyForm.value.url+'',
   //about:this.companyForm.value.about+'',


  })
    )
    
    ).pipe(this.toast.observe({
      loading: 'Updating Company Information...',
      success:'Successfully Updating',
      error:(error)=>'This Error Happend'+error
    }),
    ).subscribe({
      next:()=>{
      this.gotoprofile();

      }
    })
  }
  gotoprofile() {
// this.router.navigate(['/companies/companyProfile'])
  }

}
