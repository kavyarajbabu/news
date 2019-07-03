import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';

const routes: Routes = [
{path:'',redirectTo:'/newslist',pathMatch:'full' },
{path:'newslist',component:NewsListComponent},
{path:'newsitem',component:NewsItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
