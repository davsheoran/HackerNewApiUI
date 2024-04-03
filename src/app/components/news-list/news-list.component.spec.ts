import { TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { NewsserviceService } from '../../services/newsservice.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('NewsListComponent', () => {
  let service: NewsserviceService;
  let httpSpy:jasmine.SpyObj<HttpClient>;
  let NewsArticles:[
    {
    id:1,
    title:'title1',
    url:'title1.com'
    }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListComponent]
    })
    .compileComponents();
    httpSpy=jasmine.createSpyObj('HttpClient',['get']);
    service = new NewsserviceService(httpSpy);
   });

  it('getNewList should create', () => {
    httpSpy.get.and.returnValue(of(NewsArticles));
    let component=new NewsListComponent(service);
    component.getNewsList();
    expect(component.newsArticles).toEqual(NewsArticles);
  });
});
