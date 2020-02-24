import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'news',
    loadChildren: './pages/news/news.module#NewsModule',
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule',
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
