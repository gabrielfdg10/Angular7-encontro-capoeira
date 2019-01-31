import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatExpansionModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    RouterModule  
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
