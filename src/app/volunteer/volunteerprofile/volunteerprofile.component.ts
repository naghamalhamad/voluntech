import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PictureuploadService } from 'src/app/pictureupload.service';
import { VolunteerprofileService } from 'src/app/volunteerprofile.service';


@Component({
  selector: 'app-volunteerprofile',
  templateUrl: './volunteerprofile.component.html',
  styleUrls: ['./volunteerprofile.component.css']
})
export class VolunteerprofileComponent implements OnInit {

  constructor(public authService:AuthService, private route:Router,
    private uploadService:PictureuploadService,
    public volunteerprofile:VolunteerprofileService
    ) { }

    id?:string;
    fullName?:string;
    email?:string;
    phoneNumber?:number|null|undefined;
    city?:string;
    skills?:string[]|null|undefined;
 
    jobTitle?:string;
    companyName?:string;
    jobDate?:Date|undefined|null;
    jobDescription?:string;
 
   courseTitle?:string;
   courseName?:string;
   courseDate?:Date|undefined|null;
   courseDescription?:string;
   message?:string|undefined|null;
   photoURL?:string|null;

  ngOnInit(): void {
  }

editpage(){
this.route.navigate(['/volunteer/editvolunteer']);
}

submit(event:Event){
  const input=<HTMLInputElement> event.target;
  const obj = input?.files?.[0] as File;
  this.uploadService.uploadImage(obj).subscribe();

}

aboutpage(){
  this.route.navigate (['volunteer/profile/about']);
}

activitiespage(){ 
  this.route.navigate(['volunteer/profile/activites']);
}

}