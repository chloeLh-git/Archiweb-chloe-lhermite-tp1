import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

@Output()backgroundColor=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

public getColorCarre(colorCarre:string){
    this.backgroundColor.emit(colorCarre);
}

}
