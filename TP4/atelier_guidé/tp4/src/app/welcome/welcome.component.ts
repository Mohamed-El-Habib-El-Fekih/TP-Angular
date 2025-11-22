import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  // Propriété indiquant si l'utilisateur est connecté
  isLoggedIn: boolean = false;
  // Méthode pour basculer l'état de connexion
  toggleLogin() {
  this.isLoggedIn = !this.isLoggedIn;
  }
}
