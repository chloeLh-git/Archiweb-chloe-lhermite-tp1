import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lhermite-chloe-exo1';


  public color:string ='';

  public setColor(color:string)
  {
    this.color=color;
  }
}
