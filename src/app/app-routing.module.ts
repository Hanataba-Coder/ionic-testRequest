import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'photo', pathMatch: 'full' },
  { path: 'photo', loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule) },
  { path: 'detail', loadChildren: () => import('./photo-detail/photo-detail.module').then( m => m.PhotoDetailPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
