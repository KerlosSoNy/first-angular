import { Component } from "@angular/core";
import { NavUlComponent } from "../../components/nav-ul/nav-ul.components";

@Component({
  selector: "app-navbar",
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [NavUlComponent],
  styleUrl: './navbar.component.css'
})

export class AppNavBar {
  title='Hello Kerlos'
  from="First Screen"
  isDisabled : boolean = false;
  isActive : boolean = false;
  imgUrl='https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png'
  counter: number = 0
  buttonClick(){
    this.isActive = !this.isActive
    if(this.title === 'Hello Angular'){
      this.title = 'Hello Kerlos'
    }else{
      this.title = 'Hello Angular'
    }
    this.counter += 1
  }
  // 13 KeyCode for Enter
  // 27 KeyCode for Escape
  // 32 KeyCode for Space
  // 8 KeyCode for Backspace
  // 16 KeyCode for Shift
  // 17 KeyCode for Control
  keyPressUP(event: KeyboardEvent ){
    if(event.keyCode === 13){
      this.buttonClick()
    }
    console.log(event?.target)
  }



  handleChange (event: HTMLInputElement ){
    // if The Type of event is KeyboardEvent
    // let valueOfInput = (event.target as HTMLInputElement).value
    // this.title = valueOfInput

    // if The Type of event is HTMLInputElement
    this.title = event?.value
  }
}
