import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsInformerService } from '../news-informer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

interface Sources {
  sources?: [];
}
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
  apiKey = '23506870fabf4a06b24d45d5cd64e06d';
  expand = false;
  sourcesUrl = 'https://newsapi.org/v2/sources?pagesize=5&apiKey=23506870fabf4a06b24d45d5cd64e06d';
  sourcesList = [];
  bkpSourcesList;
  sourceCode = '';
  countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz',
    'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in',
    'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl',
    'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  constructor(private readonly http: HttpClient, private readonly newsInformer: NewsInformerService,
              private readonly router: Router, private readonly route: ActivatedRoute,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start();
    this.http.get(this.sourcesUrl).subscribe((dat: Sources) => {
      this.sourcesList = dat.sources;
      this.bkpSourcesList = dat.sources;
      this.ngxService.stop();
    });
  }
  gotoNews(item) {
    this.newsInformer.informChild(item);
    this.router.navigate(['/newsitem'], { relativeTo: this.route });
  }
  change() {
    this.sourcesList = this.bkpSourcesList;
    const tempList = [];
    this.sourcesList.map(it => {
      if (it.id.toLowerCase().match(this.sourceCode.toLowerCase())) {
        tempList.push(it);
      }
    });
    this.sourcesList = tempList;
  }
}
