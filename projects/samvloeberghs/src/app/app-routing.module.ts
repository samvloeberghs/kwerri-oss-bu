import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'kwerri',
    loadChildren: () => import('./pages/kwerri/kwerri.module').then(m => m.KwerriModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'talks-workshops',
    loadChildren: () => import('./pages/talks/talks.module').then(m => m.TalksModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule),
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
