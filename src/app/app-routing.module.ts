import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'dungeon', component: DungeonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
