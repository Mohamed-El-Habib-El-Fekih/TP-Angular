import { Component } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent {
  score: number=0;
  wrong_answer: number=0;
  correct_answer: number=0;
  rep!:string;
  isReponse: boolean = false;
  questions = [
    { question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',ans: false,rep:""
    },
    { question: 'Quelle est la capitale de l Algerie ?',
      options: ['Alger', 'Tunis', 'Tanja'], reponse: 'Alger',ans: false,rep:"" },
    { question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu',ans: false,rep:"" }
  ];
  isCorrect(option: string, question: any): boolean {
    return option === question.reponse;
  }
  onSelectOption(selectedOption: string, question: any) {
    if(!question.ans)
    {
      question.ans = true; // Marquer la question comme répondue
      this.isReponse = selectedOption === question.reponse;
      if (selectedOption === question.reponse)
      {
        this.score += 10;
        this.correct_answer++;
      }
      else
      { 
        this.score -= 5;
        this.wrong_answer++;
      }
    }
  }
}
