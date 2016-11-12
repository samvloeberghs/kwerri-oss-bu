import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        data : {
          metadata : {
            title : 'Sam Vloeberghs',
            description : 'My name is Sam Vloeberghs. I\'m a Ghent based freelance software engineer and Internet entrepreneur, building webapplications and trying to make the world wide web a better place for you to spend your days.',
          }
        }
      }
    ])
  ],
})
export class AppRoutingModule { }
