import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { CreateComponent } from './create/create.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
   { path:'', redirectTo:'/welcome', pathMatch:'full'},
   { path:"welcome",component:WelcomeComponent},
   { path:"question",component:QuestionComponent},
   { path:"create",component:CreateComponent},
   { path:"result",component:ResultComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
