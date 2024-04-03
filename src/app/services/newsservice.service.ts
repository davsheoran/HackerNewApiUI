import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news-article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private httpclient:HttpClient) { }
  //baseurl:string="https://localhost:7021/api/news/";
  baseurl:string="http://localhost:5271/api/news/";
  getNewList(fetchNewCount:number):Observable<NewsArticle[]>
  {
    return this.httpclient.get<NewsArticle[]>(`${this.baseurl}GetNewsPageArticles?fetchNewCount=${fetchNewCount}`);
  }
}
