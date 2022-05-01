import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'homecontent', component : HomecontentComponent},
                        {path:'',redirectTo : '/homecontent',pathMatch:'full'},
                        {path:'loginpage', component : LoginComponent},
                        {path:'register', component : RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
