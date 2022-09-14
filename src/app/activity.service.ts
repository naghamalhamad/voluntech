import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { CompanyprofileService } from './companyprofile.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activitiesCollection:AngularFirestoreCollection<Activity>;
  currentUserActivities$?:Observable<Activity[] |null|undefined>;


  constructor( private firestore:AngularFirestore,
    private authService:AuthService,
    public companyprofile:CompanyprofileService) {

      this.activitiesCollection = this.firestore.collection('activities');
      this.currentUserActivities$=this.authService.userState$
      .pipe(
        switchMap((data)=>{
          //check if the user uthanticated
          if(data){
            return this.getCompanyActivities(data?.uid);
 
          }
          else {
            return of(null);
          }
        } )
      )
      }
     

  get (id:string){
    return from(this.activitiesCollection.doc<Activity>(id).get());
  
  }
  getAll():Observable<Activity[]>{
    return this.activitiesCollection.valueChanges({'idField':'uid'}) as Observable<Activity[]>;
  }
  getCompanyActivities(companyId:string){
    return this.firestore.collection<Activity>('activities', ref=> ref.where("companyId",'==',companyId))
    .valueChanges({'idField':'id'});                
  }
  create (activity:Activity){
    //return add activity with new id
  return from(this.activitiesCollection.add(activity));
  
  }

  delete(id:string){
    return from(this.activitiesCollection.doc(id).delete());
  }

}
export interface Activity{
    id? :string,
    activityName:string |null|undefined,
    companyName?:string |null|undefined,
    type?:string,
    decription?:string,
    range:{
      start?:Date|null|undefined,
      end?:Date|null|undefined 
    },
    companyId:string|null|undefined
  }
 