import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: "", component: InputFormComponent}, // homepage route
  { path: "posts", component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
