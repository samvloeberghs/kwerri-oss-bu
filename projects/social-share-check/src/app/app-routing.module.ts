import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'facebook-sharing-debugger',
    loadChildren: () => import('./pages/facebook-sharing-debugger/facebook-sharing-debugger.module').then(m => m.FacebookSharingDebuggerModule),
  },
  {
    path: 'twitter-card-validator',
    loadChildren: () => import('./pages/twitter-card-validator/twitter-card-validator.module').then(m => m.TwitterCardValidatorModule),
  },
  {
    path: 'linkedin-post-inspector',
    loadChildren: () => import('./pages/linkedin-post-inspector/linkedin-post-inspector.module').then(m => m.LinkedinPostInspectorModule),
  },
  {
    path: 'tips-and-tricks',
    loadChildren: () => import('./pages/tips-and-tricks/tips-and-tricks.module').then(m => m.TipsAndTricksModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
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
