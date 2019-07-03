import { Component } from '@angular/core';
import { NewsInformerService } from './news-informer.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsInformerService]
})
export class AppComponent {
  title = 'NewsMason';
  svgI
  constructor(public domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('NewsIcon', domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'));
    this.svgI = domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg');
  }
  
}
