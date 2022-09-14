import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VolunteerprofileService } from './volunteerprofile.service';




@Injectable({
  providedIn: 'root'
})
export class VolunteerGuard implements CanActivate {
  constructor(private volunteerprofile:VolunteerprofileService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.volunteerprofile.isLoggedInUserVolunteer$;
  }
  
}
