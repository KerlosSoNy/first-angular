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
  title='Angular Directives';
  data = [{name:'Zoniix', age: 28}, {name:'Ahmed', age: 10}, {name:'Mohamed', age: 23}];
}
