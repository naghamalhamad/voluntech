import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyprofileService } from './companyprofile.service';


@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {
  constructor( private companyprofile:CompanyprofileService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.companyprofile.isLoggedInUserCompany$;
  }
  
}