import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Input()color:string ='';

  @Output()colorCarre=new EventEmitter<string>();

}
