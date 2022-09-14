import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CompanyprofileService } from './companyprofile.service';
import { VolunteerprofileService } from './volunteerprofile.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router,
     public authService:AuthService,
     public companyprofile:CompanyprofileService,
     public volunteerprofile:VolunteerprofileService
    ){

  }
  title = 'Mainpage';
  login(){
    this.router.navigate(['login']);
  }
  logout(){
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['']);
    });
  }
  register(){
    this.router.navigate(['register']);
  };
  homepage(){
    this.router.navigate(['']);
  }
  volunteerprofileimg(){
    this.router.navigate(['volunteer/profile']);
  }
  companyprofileimg(){
    this.router.navigate(['company/profile']);
  }
  activities(){
    this.router.navigate(['volunteer/allactivities']);
  }
  volunteers(){
    this.router.navigate(['company/allvolunteers']);
  }
  contact(){
    this.router.navigate(['contactus']);
  }
  about(){
    this.router.navigate(['about']);
  }
  add(){
    this.router.navigate(['company/addactivity']);
  }
  

  
}