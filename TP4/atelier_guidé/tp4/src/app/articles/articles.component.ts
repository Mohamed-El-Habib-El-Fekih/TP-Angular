import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    { titre: 'Article 1', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
    { titre: 'Article 2', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
    { titre: 'Article 3', contenu: 'Contenu de l\'article 3', importance: 'faible' }
  ];
  // Propriétés pour capturer les valeurs des nouveaux articles
  newTitle = '';
  newContent = '';
  newImportance = 'moyenne';
  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
    // Réinitialisation des champs
    this.newTitle = '';
    this.newContent = '';
    }
  }
}
