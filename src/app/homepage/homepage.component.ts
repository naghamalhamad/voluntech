import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CompanyprofileService } from '../companyprofile.service';
import { VolunteerprofileService } from '../volunteerprofile.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    public authService:AuthService,
    public volunteerprofile : VolunteerprofileService,
    public companyprofile : CompanyprofileService
    ) { }

  ngOnInit(): void {
  }

}