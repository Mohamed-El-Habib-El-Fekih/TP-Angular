import { Component } from '@angular/core';

type tache={
  description:string;
  statut: "complétée" | "non complétée";
  priorite: "haute"|"moyenne"|"basse";
}
@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})

export class TachesComponent {
  taches: tache[]=[
    {description: "Projet entrepôt",
    statut: "non complétée",
    priorite: "moyenne"},
    {description: "Projet anglais",
    statut: "non complétée",
    priorite: "basse"},
    {description: "Projet Angular",
    statut: "non complétée",
    priorite: "haute"},
    {description: "Projet PFA",
    statut: "complétée",
    priorite: "haute"},
    {description: "Projet compilation",
    statut: "complétée",
    priorite: "moyenne"},
  ];
  verif(ta: tache): string{
    if(ta.priorite=="basse")
        return "green";
    if(ta.priorite=="moyenne")
        return "orange";
    return "red";
  }
  switch (val:tache) {
    if(val.statut=="complétée")
        val.statut="non complétée";
    else
        val.statut="complétée";
  }
}
