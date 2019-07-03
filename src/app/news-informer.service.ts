import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsInformerService {
  newsEmitter = new EventEmitter()
  newsObj
  constructor() { }
  informChild(data){
    console.log(data)
    this.newsObj=data
    this.newsEmitter.emit(data)
  }
}
