import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatInputModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
