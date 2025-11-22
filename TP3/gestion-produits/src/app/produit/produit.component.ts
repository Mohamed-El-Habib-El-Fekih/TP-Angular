import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  @Output() ajouterAuPanier = new EventEmitter<string>();
  enStock: boolean = true;
  @Input() nomProduit: string = 'Produit Par Défaut';
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
