import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor(private router: Router) { }
  public name: String="";
  public quizJSON: any={};
  public currentQuesIndex: number=0;
  public answers: any=[];
  
ngOnInit(): void {
  this.name=localStorage.getItem("name")!;
  var temp=localStorage.getItem("quizJSON")!;
  this.quizJSON=JSON.parse(temp);
}
nextQues() {
  if( this.currentQuesIndex<this.quizJSON?.questions?.length-1)
  this.currentQuesIndex++;
}
prevQues() {
  if( this.currentQuesIndex>0)
  this.currentQuesIndex--;
  
}
answerOption(currentQuesIndex: number,item: any, optionIndex: number)
{
this.answers[currentQuesIndex]=optionIndex;
}
submitQuiz()
{
  if(confirm("Submitting will end the quiz.Are you sure you want to submit?")) {
    localStorage.setItem("quizAnswers",JSON.stringify(this.answers));
    this.router.navigate(["/result"]);
  } 
}
clearAnswer(currentQuesIndex: number) 
{
  this.answers[currentQuesIndex]=-1;
}
}

