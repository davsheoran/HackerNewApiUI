import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {path:"",component:NewsListComponent},
  {path:"NewsList",component:NewsListComponent},
  {path:"Article/:newsId",component:ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
