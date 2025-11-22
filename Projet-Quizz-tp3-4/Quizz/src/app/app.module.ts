import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { ScoreComponentComponent } from './score-component/score-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    GameComponentComponent,
    QuestionComponentComponent,
    ScoreComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
