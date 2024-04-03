import { TestBed } from '@angular/core/testing';
import { NewsserviceService } from './newsservice.service';
import { NewsArticle } from '../models/news-article.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('NewsserviceService', () => {
  let service: NewsserviceService;
  let httpSpy:jasmine.SpyObj<HttpClient>;
  let NewsArticles:[
    {
    id:1,
    title:'title1',
    url:'title1.com'
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpSpy=jasmine.createSpyObj('HttpClient',['get']);
    service = new NewsserviceService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getNewsList should return expected data', () => {
    httpSpy.get.and.returnValue(of(NewsArticles));
    service.getNewList(1).subscribe(
      {next:(newsList)=>
      {
        expect(newsList).toEqual(NewsArticles);
      }}
    );
    expect(httpSpy.get).toHaveBeenCalledTimes(1);
  });
});
