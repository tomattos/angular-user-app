import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then(module => module.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
