import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { AdresseComponent } from './adresse/adresse.component'

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ProfilComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
