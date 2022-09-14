import { Component, OnInit } from '@angular/core';
import { Activity, ActivityService} from 'src/app/activity.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-activitydetails',
  templateUrl: './activitydetails.component.html',
  styleUrls: ['./activitydetails.component.css']
})
export class ActivitydetailsComponent implements OnInit {
  activities?:Activity[]
  constructor(public activity: ActivityService,
  public authService: AuthService
  ){
    this.activity.getAll().subscribe((data)=>{
      this.activities=data;
  })

}
ngOnInit(): void {
}
  
  }