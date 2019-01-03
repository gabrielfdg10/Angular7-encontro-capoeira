import { ScheduleModule } from './modules/schedule/schedule.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './modules/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterModule } from './modules/register/register.module';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'entrar', component: LoginComponent},
  { path: 'painel', component: DashboardComponent },
  { path: 'agenda', component: ScheduleComponent },
  { path: 'cadastro', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    LoginModule,
    DashboardModule,
    ScheduleModule,
    LoginModule,
    RegisterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
