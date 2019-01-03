import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(private router: Router) { }
  public logged: boolean;
  @Output() navigationEmitter = new EventEmitter();
  ngOnInit() {

  }

  navigate(option){
    this.navigationEmitter.emit(option);
  }

}
