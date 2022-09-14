import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatChipsModule} from '@angular/material/chips';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { MatIconModule} from '@angular/material/icon';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { getFirestore } from "firebase/firestore";
import { provideFirestore } from '@angular/fire/firestore';   
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule} from '@angular/material/core';
import { HotToastModule } from '@ngneat/hot-toast';
import { CompanyComponent } from './company/company.component';
import { AuthenticationLayoutComponent } from './authentication/authentication-layout/authentication-layout.component';
import { RegistervolunteerComponent } from './authentication/register/registervolunteer/registervolunteer.component';
import { RegisterLayoutComponent } from './authentication/register/register-layout/register-layout.component';
import { CompanyLayoutComponent } from './company/company-layout/company-layout.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerLayoutComponent } from './volunteer/volunteer-layout/volunteer-layout.component';
import { AboutComponent } from './about/about.component';
import { AddactivityComponent } from './company/addactivity/addactivity.component';
import { AllvolunteersComponent } from './company/allvolunteers/allvolunteers.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';
import { EditcompanyprofileComponent } from './company/editcompanyprofile/editcompanyprofile.component';
import { VolunteerdetailsComponent } from './company/volunteerdetails/volunteerdetails.component';
import { ContactComponent } from './contact/contact.component';
import { AllactivitiesComponent } from './volunteer/allactivities/allactivities.component';
import { ApplyComponent } from './volunteer/apply/apply.component';
import { CompanydetailsComponent } from './volunteer/companydetails/companydetails.component';
import { EditvolunteerprofileComponent } from './volunteer/editvolunteerprofile/editvolunteerprofile.component';
import { VolunteerprofileComponent } from './volunteer/volunteerprofile/volunteerprofile.component';
import { ActivitydetailsComponent } from './volunteer/activitydetails/activitydetails.component';
import { CompanyprofilepostedComponent } from './company/companyprofile/companyprofileposted/companyprofileposted.component';
import { VolunteerprofileactivitiesComponent } from './volunteer/volunteerprofile/volunteerprofileactivities/volunteerprofileactivities.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    CompanyComponent,
    AuthenticationLayoutComponent,
    RegistervolunteerComponent,
    RegisterLayoutComponent,
    CompanyLayoutComponent,
    VolunteerComponent,
    VolunteerLayoutComponent,
    AboutComponent,
    AddactivityComponent,
    AllvolunteersComponent,
    CompanyprofileComponent,
    EditcompanyprofileComponent,
    VolunteerdetailsComponent,
    ContactComponent,
    AllactivitiesComponent,
    ApplyComponent,
    CompanydetailsComponent,
    EditvolunteerprofileComponent,
    VolunteerprofileComponent,
    ActivitydetailsComponent,
    CompanyprofilepostedComponent,
    VolunteerprofileactivitiesComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    MatIconModule,
    provideStorage(() => getStorage()),
    provideFirestore(() =>getFirestore()),
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,

   AngularFirestoreModule,
   MatDialogModule,
   MatNativeDateModule,
   AngularFireModule
 


   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
