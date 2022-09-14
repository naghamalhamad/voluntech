import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { volunteer, VolunteerprofileService } from 'src/app/volunteerprofile.service';

@Component({
  selector: 'app-allvolunteers',
  templateUrl: './allvolunteers.component.html',
  styleUrls: ['./allvolunteers.component.css']
})
export class AllvolunteersComponent implements OnInit {
volunteers?:volunteer[];
  constructor(public volunteerprofile:VolunteerprofileService,
    public authService:AuthService,
    private router:Router
) { 
       // this.volunteerprofile.getAll().subscribe((data)=>{
        //  this.volunteers=data;
     //   }) 
 


}  ngOnInit(): void {
    
  }
  volunteerprofileimg(){
    this.router.navigate(['volunteer/profile/activites']);

  }
}