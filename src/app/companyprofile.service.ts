import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collectionData, CollectionReference, doc, docData, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { from, map, Observable, of, switchMap } from 'rxjs';
import { PictureuploadService } from './pictureupload.service';

@Injectable({
  providedIn: 'root'
})

export class CompanyprofileService {
  setValue(arg0: { uid: string; updateProfile: companydata; "": string; city: string; }) {
    throw new Error('Method not implemented.');
  }
  //companydata is the interface that we create

  public companyprofilecollection:AngularFirestoreCollection<companydata>;
  userState$?:Observable<companydata | null | undefined>;
  isLoggedInUserCompany$=this.authService.userState$.pipe(
    switchMap((userCredentials)=>{
      if(userCredentials){
        //might be volunteeror company
        return this.companyprofilecollection.doc(userCredentials.uid).get().pipe(
          switchMap(
          (companyprofile)=>{
          if(companyprofile.exists)return of(true);
          else return of(false);
        }));
      }
      else{
        return of(false);
      }
    })
  )
  
  constructor( private firestore: AngularFirestore,
    private authService:AuthService,
    public pictureupload:PictureuploadService) {
    this.companyprofilecollection = this.firestore.collection('companyprofile');
    this.userState$ = this.authService.userState$
    .pipe(
      switchMap((data)=>{
        //check if the user uthanticated
        if(data){
          return this.get(data?.uid).pipe(
            map(userObj => userObj.data())
          );
        }
        else {
          return of(null);
        }
      } )
    )
  }

  get (id:string){
    return from(this.companyprofilecollection.doc(id).get());
  
  }
 create (profile:companydata){
  return from(this.companyprofilecollection.doc(profile.uid+"").set(profile));
  
  }
  update(profile:companydata){
    return from(this.companyprofilecollection.doc(profile.uid+"").update({...profile}));
  }

}

 export interface companydata{
  uid?:string|null|undefined,
  id?:string|null|undefined,
  companyName?:string |null|undefined,
  email?:string |null|undefined,
  password?: |null|undefined,
  confirmPassword?:string |null|undefined,
  phoneNumber?:number |null|undefined,
  companyURL?:string |null|undefined,
  type?: string|null|undefined,
  uplaod?:string|null|undefined,
  photoURL?:undefined|null



 }