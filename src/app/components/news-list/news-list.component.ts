import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../../services/newsservice.service';
import { NewsArticle } from '../../models/news-article.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit  {

  newsArticles: NewsArticle[] = [];
  masterNewsArticles: NewsArticle[] = [];
  start: number = 0;
  end: number = 10;
  pageSize: number = 10;
  currentPage = 1;
  loader: boolean = true;
  searchtext: string = '';
  fetchNewCount:number=200;//Fix news count which can update dynamically if requried
  constructor(private newsservice: NewsserviceService) {
  }
    
  ngOnInit(): void {
    this.showloader();
    this.getNewsList();
  }
  getNewsList() {
    
    this.newsservice.getNewList(this.fetchNewCount)
      .subscribe({
        next: (News) => {
          this.newsArticles = News;
          this.masterNewsArticles = News;
          this.hideloader();
        },
        error: (er) => {
          this.hideloader();
          console.error(er);
        }
      });
  }
  getPageData(pageNo: number) {
    this.currentPage = pageNo;
    this.setStartEnd();
  }
  setPageSize(event: any) {
    this.pageSize = Number.parseInt(event.target.value);
    this.currentPage = 1;
    this.setStartEnd();
  }
  setStartEnd() {
    this.start = (this.currentPage - 1) * this.pageSize;
    this.end = this.start + this.pageSize;
  }
  filterNews() {
    if (this.searchtext.trim() !== '') {
      this.newsArticles = this.masterNewsArticles.filter(news =>
        news.title.toLowerCase().includes(this.searchtext.toLowerCase())
      );
    }
    else {
      this.newsArticles = this.masterNewsArticles;
    }
    this.currentPage = 1;
    this.setStartEnd();
  }
  showloader()
  {
    this.loader=true;
  }
  hideloader()
  {
    this.loader=false;
  }
}
