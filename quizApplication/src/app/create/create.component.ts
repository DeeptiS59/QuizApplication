import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @ViewChild("JSON")JSONKey!:ElementRef;

  createQuiz()
{ 
  debugger;
localStorage.setItem("quizJSON",this.JSONKey.nativeElement.value)

}
}
