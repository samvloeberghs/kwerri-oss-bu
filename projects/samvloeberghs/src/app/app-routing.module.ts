import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'kwerri',
    loadChildren: './pages/kwerri/kwerri.module#KwerriModule',
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
  },
  {
    path: 'talks-workshops',
    loadChildren: './pages/talks/talks.module#TalksModule',
  },
  {
    path: 'projects',
    loadChildren: './pages/projects/projects.module#ProjectsModule',
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule',
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
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
