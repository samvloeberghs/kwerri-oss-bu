import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'facebook-sharing-debugger',
    loadChildren: './pages/facebook-sharing-debugger/facebook-sharing-debugger.module#FacebookSharingDebuggerModule',
  },
  {
    path: 'twitter-card-validator',
    loadChildren: './pages/twitter-card-validator/twitter-card-validator.module#TwitterCardValidatorModule',
  },
  {
    path: 'linkedin-post-inspector',
    loadChildren: './pages/linkedin-post-inspector/linkedin-post-inspector.module#LinkedinPostInspectorModule',
  },
  {
    path: 'tips-and-tricks',
    loadChildren: './pages/tips-and-tricks/tips-and-tricks.module#TipsAndTricksModule',
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
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
