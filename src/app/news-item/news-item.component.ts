import { Component, OnInit } from '@angular/core';
import { NewsInformerService } from '../news-informer.service';
import { HttpClient } from '@angular/common/http';
import { isUndefined } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass']
})
export class NewsItemComponent implements OnInit {

  constructor(private readonly newsInformer: NewsInformerService, private readonly http: HttpClient,
              private readonly router:Router,private readonly route:ActivatedRoute) { }
newsObj = undefined;
api = '23506870fabf4a06b24d45d5cd64e06d';
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=23506870fabf4a06b24d45d5cd64e06d
baseURL = 'https://newsapi.org/v2/top-headlines';
source = '';
searchText = '';
_data = [];
  ngOnInit() {
    console.log(this.newsInformer.newsObj);
    this.newsInformer.newsEmitter.subscribe(obj => {
      this.newsObj = obj;
    });
    if(isUndefined(this.newsInformer.newsObj)){
      this.router.navigate(['/newslist'],{relativeTo:this.route})
    }
    this.source = this.newsInformer.newsObj.id;
    this.newsObj = this.newsInformer.newsObj;
    this.constructURLandCall();
  }
  constructURLandCall() {
   let urlstr = this.baseURL;
   if (this.source.length > 0) {
     urlstr = urlstr.concat('?sources=');
     urlstr = urlstr.concat(this.source);
   }
   if (this.searchText.length > 0) {
  urlstr = urlstr.concat('&q=');
  urlstr = urlstr.concat(this.searchText);
}
   urlstr = urlstr.concat('&pageSize=50');
   urlstr = urlstr.concat('&apiKey=').concat(this.api);

   this.http.get(urlstr).subscribe((obj?: { articles?: any }) => {
      this._data = obj.articles;
    });
  }

}
