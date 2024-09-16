import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string='Angular Directives';
  age:number = 15;
  data:{name:string, age:number}[] = [{name:'Zoniix', age: 28}, {name:'Ahmed', age: 10}, {name:'Mohamed', age: 23}];
}
