import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payment-security';
  constructor(private router: Router) { }


  selectOption(value:any){
    // console.log(value.value)
    value=value.value
    if (value==="Payment Security"){
      this.router.navigate(['payment-security']);
    }
    else{
      if (value==="Terms of Service"){
        this.router.navigate(['terms']);
      }
    }
  }
}
