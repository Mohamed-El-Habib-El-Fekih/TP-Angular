import { Component,OnInit } from '@angular/core';
import { Students } from './TypeStudent';
import { Student } from './TypeStudent';
@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {
  etuds = Students;
  constructor() {}

  ngOnInit(): void {}
  selectedEtudiant !: Student;
  onSelect(e: Student): void {
    this.selectedEtudiant = e;
  }
}
