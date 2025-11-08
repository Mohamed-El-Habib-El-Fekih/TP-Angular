import { Component } from '@angular/core';
import { Student } from './TypeStudent';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiant : Student={
    id:1,
    name:'Ali',
    lastname : 'Ben Saleh',
    average : 17.5
  };
}
