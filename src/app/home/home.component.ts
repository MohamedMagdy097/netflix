import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    mainDesc:string = "Unlimited movies, TV shows, and more";
    pricePlans:string = "Watch anywhere. Cancel anytime.";
    subDesc:string = "Ready to watch? Enter your email to create or restart your membership.";
}
