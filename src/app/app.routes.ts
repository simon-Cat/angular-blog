import { Routes } from '@angular/router';
import { Main } from '../pages/main/main.component';
import { Posts } from '../pages/posts/posts.component'

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'posts', component: Posts }
];
