import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [
    HttpService
  ]
})
export class RegisterModule { }
