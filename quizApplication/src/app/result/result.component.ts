import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})


export class ResultComponent implements OnInit {
  public answers: any=[];
  public quizJSON: any={};
  public totalScore: number=0;
  ngOnInit(): void {  
    var temp=localStorage.getItem("quizJSON")!;
    this.quizJSON=JSON.parse(temp);
    temp=localStorage.getItem("quizAnswers")!;
    this.answers=JSON.parse(temp);
    this.calculateScore();
  }
  calculateScore()
  {
    for(let i=0;i<this.quizJSON.questions.length;i++)
    {
      let answerGiven=this.answers[i]>0;
      if( answerGiven && this.quizJSON.questions[i].options[this.answers[i]].correct) 
      {
        this.totalScore+=10;
      }
    }
  }
}
