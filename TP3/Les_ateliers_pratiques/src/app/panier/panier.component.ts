import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  @Input() msg!:string;
  nomProduitParent = "Ordinateur Portable";
  recev(ph :string):void{
    this.msg=ph;
  }
}
