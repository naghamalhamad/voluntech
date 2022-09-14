import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterLayoutComponent } from './authentication/register/register-layout/register-layout.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RegistercompanyComponent } from './authentication/register/registercompany/registercompany.component';
import { RegistervolunteerComponent } from './authentication/register/registervolunteer/registervolunteer.component';
import { CompanyGuard } from './company.guard';
import { AddactivityComponent } from './company/addactivity/addactivity.component';
import { AllvolunteersComponent } from './company/allvolunteers/allvolunteers.component';
import { CompanyLayoutComponent } from './company/company-layout/company-layout.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';
import { EditcompanyprofileComponent } from './company/editcompanyprofile/editcompanyprofile.component';
import { VolunteerdetailsComponent } from './company/volunteerdetails/volunteerdetails.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotloggedGuard } from './notlogged.guard';
import { VolunteerGuard } from './volunteer.guard';
import { AllactivitiesComponent } from './volunteer/allactivities/allactivities.component';
import { ApplyComponent } from './volunteer/apply/apply.component';
import { CompanydetailsComponent } from './volunteer/companydetails/companydetails.component';
import { EditvolunteerprofileComponent } from './volunteer/editvolunteerprofile/editvolunteerprofile.component';
import { VolunteerLayoutComponent } from './volunteer/volunteer-layout/volunteer-layout.component';
import { VolunteerprofileComponent } from './volunteer/volunteerprofile/volunteerprofile.component';

const routes: Routes = [    {path:'', component:HomepageComponent, pathMatch: 'full'},
{path:'contactus',component:ContactComponent},
{path:'about',component:AboutComponent},

{path:'login',component:LoginComponent},
{path:'register', component:RegisterComponent , canActivate:[NotloggedGuard]},
{path:'register', component:RegisterLayoutComponent,children:[
{path:'registervolunteer',component:RegistervolunteerComponent},
{path:'registercompany',component:RegistercompanyComponent},
]},

{path:'company',component:CompanyLayoutComponent,canActivate:[CompanyGuard],children:[
  {path:'allvolunteers',component:AllvolunteersComponent},
  {path:'addactivity',component:AddactivityComponent},
  {path:'volunteerdetails',component:VolunteerdetailsComponent},
  //  {path:'activities',component:ActivitiesComponent},
  


  {path:'companyprofile',component:CompanyprofileComponent,children:[
    {path:'aboutcompany',component:CompanyprofileComponent},
    {path:'postedactivities',component:CompanyprofileComponent},
    {path:'editcompany',component:EditcompanyprofileComponent}
  ]},
]},
  
{path:'volunteer',component:VolunteerLayoutComponent,canActivate:[VolunteerGuard], children:[
 
  {path:'allactivities',component:AllactivitiesComponent},
  //{path:'activitydetails',component:ActivitydetailsComponent},
  {path:'apply',component:ApplyComponent},
  {path:'companydetails',component:CompanydetailsComponent,children:[
  // {path:'aboutcompany',component:AboutComponent},
//     {path:'companyactivites',component:PostedactivitiesComponent}
  ]},
  {path:'profile',component:VolunteerprofileComponent,canActivate:[VolunteerGuard],children:[
    {path:'about',component:VolunteerprofileComponent},
    //{path:'activities',component:VolunteerprofileactivitiesComponent},
    {path:'edit',component:EditvolunteerprofileComponent}
    
  ]},


]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

