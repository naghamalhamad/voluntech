import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { AuthService } from './auth.service';
import { VolunteerprofileService } from './volunteerprofile.service';

@Injectable({
  providedIn: 'root'
})
export class PictureuploadService {

  constructor( private fireStorage:AngularFireStorage, private authService:AuthService) { }
  uploadImage(image:File){
    const filePath = `$'profile_images/${image.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    const uploadTask = this.fireStorage.upload(filePath,image);
    return uploadTask.snapshotChanges().pipe(
      finalize(()=>{
        storageRef.getDownloadURL()
        .subscribe((data)=>{
          this.authService.userState$.subscribe((user)=>{
            user?.updateProfile({
              photoURL:data

            })
          })
 
        });

      }));
}
}