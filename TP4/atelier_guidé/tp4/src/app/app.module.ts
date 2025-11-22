import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormsModule } from '@angular/forms';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ArticlesComponent,
    ListeEtudiantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
