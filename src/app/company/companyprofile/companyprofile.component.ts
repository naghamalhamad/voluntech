import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CompanyprofileService } from 'src/app/companyprofile.service';
import { PictureuploadService } from 'src/app/pictureupload.service';



@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
user: any;

  constructor(public companyprofile:CompanyprofileService,
    public authService:AuthService, private router:Router,
    public uploadpicture:PictureuploadService
    ) { }

  ngOnInit(): void {
  }
  editprofile(){
    this.router.navigate(['company/editcompany']);
  }
  aboutcompany(){
    this.router.navigate(['company/profile/about']);
  }
  postedactivities(){
    this.router.navigate(['company/profile/postedactivities']);
  }
}
