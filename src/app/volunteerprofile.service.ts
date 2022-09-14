import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collectionData, CollectionReference, doc, docData, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { from, map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { companydata } from './companyprofile.service';
import { PictureuploadService } from './pictureupload.service';


@Injectable({
  providedIn: 'root'
})
export class VolunteerprofileService {
  //volunteerdata is the interface that we create
  private volunteerprofilecollection:AngularFirestoreCollection<volunteer>;
  userState$?:Observable<volunteer | null | undefined >;
  isLoggedInUserVolunteer$=this.authService.userState$.pipe(
    switchMap((userCredentials)=>{
      if(userCredentials){
        //might be voluntee ror company
        return this.volunteerprofilecollection.doc(userCredentials.uid).get().pipe(
          switchMap(
          (volunteerprofile)=>{
          if(volunteerprofile.exists)return of(true);
          else return of(false);
        }));
      }
      else{
        return of(false);
      }
    })
  )
  value: any;

  

  constructor( private firestore: AngularFirestore,
    private authService:AuthService,
    public pictureupload:PictureuploadService
    ) {
    this.volunteerprofilecollection = this.firestore.collection('volunteerprofile');
    this.userState$ = this.authService.userState$
    .pipe(
      switchMap((data)=>{
        //check if the user uthanticated
        if(data){
          return this.get(data?.uid).pipe(
            map(userObj => {
              
              let userData = {...userObj.data()};
              
              userData.photoURL = data.photoURL ?? '';
              return userData as volunteer;
             
            })
          );
        }
        else {
          return of(null);
        }
      } )
    )
    }


get (id:string){
  return from(this.volunteerprofilecollection.doc(id).get());

}
getAll()  {
      return this.volunteerprofilecollection.doc()
  }
create (profile:volunteer){
return from(this.volunteerprofilecollection.doc(profile.uid).set(profile));

}
update(profile:volunteer){
  return from(this.volunteerprofilecollection.doc(profile.uid).update({...profile}));
}

 
}
export interface volunteer {
id?:string |null|undefined, 
uid?:string,

  email?:string |null|undefined,
  fullName?:string| undefined|null,
  password?:string |null|undefined,
  confirmPassword?:string,
  phoneNumber?:number| undefined|null,
  city?:string | undefined|null,

  currentposition:string| undefined|null,
  about?:string,
  skills?:string|undefined|null,
 
     jobTitle?:string,
     companyName?:string,
     jobDate?:Date|undefined|null,
     jobDescription?:string,
  
    courseTitle?:string,
    courseName?:string,
    courseDate?:Date|undefined|null,
    courseDescription?:string,
    message?:string|undefined|null,
    photoURL?:string|null

  
}
