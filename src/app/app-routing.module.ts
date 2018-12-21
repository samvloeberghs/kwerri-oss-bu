import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
