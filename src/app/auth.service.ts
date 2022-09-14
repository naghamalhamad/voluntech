import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userState$ = this.fireAuth.authState; //save the user state 

  authService: any;
  companyprofilecollection: any;
//used to check the user state and do action accourding to it
//observable type (user or null)
  constructor(private fireAuth: AngularFireAuth) { 

    //FUNCTIONS
  }
  signIn (email:string, password: string){//take email and password to login
    return from(this.fireAuth.signInWithEmailAndPassword(email,password));
    
  }
  signOut (){//logout
    return from(this.fireAuth.signOut());
    
  }
  profile(){
    return from(this.fireAuth.user);
  }

  signUp(email:string, password:string){//take the email and password to 
    //create (register) new user and give it id
    
    return from(this.fireAuth.createUserWithEmailAndPassword(email, password));
  }
}