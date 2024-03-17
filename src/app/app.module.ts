import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HeaderComponent } from './components/header/header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    HeaderComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
  ],
  providers: [
    provideClientHydration()
    ,provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
