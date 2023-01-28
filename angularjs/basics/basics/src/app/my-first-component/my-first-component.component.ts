import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent {
  public collection: IMyFirstComponentElement[] = [{name: "name1"}, {name: "name2"}];
  @Input() public inputVariable: string = "";
}

interface IMyFirstComponentElement {
  name: string;
}