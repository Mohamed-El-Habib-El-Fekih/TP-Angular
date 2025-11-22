import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
type Article={titre: string, contenu: string, prix: string,niveau_stock: number};
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  
  titre!: string;
  contenu!: string;
  prix!: string;
  niveau_stock!: number;
  color:string="red";
  articles: Article[]=[  { titre: 'Ordinateur portable HP Pavilion',
    contenu: 'Processeur Intel i5, 8 Go de RAM, SSD 512 Go. Parfait pour le travail et le divertissement.', prix: "elevee",niveau_stock:10},
    { titre: 'Casque Bluetooth Sony WH-1000XM5',
    contenu: 'Réduction active du bruit, autonomie de 30 heures, design confortable et élégant.', prix: "moyenne",niveau_stock:30},
    { titre: 'Montre connectée Fitbit Versa 4',
    contenu: 'Suivi du sommeil, fréquence cardiaque, GPS intégré et plus de 6 jours d\'autonomie.', prix: "faible",niveau_stock:70}];
  inserer()
  {
    this.articles.push({titre:this.titre,contenu:this.contenu,prix:this.prix,niveau_stock:this.niveau_stock});
    this.titre="";
    this.contenu="";
  }
  incrementer(val: Article):void{
    val.niveau_stock++;
  }
  decrementer(val: Article):void{
    val.niveau_stock--;
  }
  getStockColor(val :number):string{
      if(val>=50)
          return "green";
      else if(val<20)
          return "red";
      return "orangered";
  }
}

