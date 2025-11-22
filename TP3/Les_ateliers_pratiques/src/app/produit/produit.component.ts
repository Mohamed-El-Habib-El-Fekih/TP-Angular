import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  ImageUrl:string="assets/voiture.jpg";
  enStock : boolean=true;
  cpt : number=0;
  prix : number=2500.520;
  @Output() msg=new EventEmitter<string>();
  @Input() nomProduit:string="";
  afficherAlerte(): void{
    this.cpt++;
    this.msg.emit("Produit ajouté au panier"+this.cpt.toString());
  }
  alter():void{
    this.enStock=!this.enStock;
  }
  affect(ph :string):void{
    this.nomProduit=ph;
  }
}
