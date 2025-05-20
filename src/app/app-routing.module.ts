import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { NewTicketsComponent } from './components/new-tickets/new-tickets.component';
import { VariosComponent } from './components/varios/varios.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  {
    path: 'menu', component: MenuComponent,
    children: [
      { path: '', component: InicioComponent }, 
      { path: 'inicio', component: InicioComponent },
      { path: 'my-tickets', component: MyTicketsComponent },
      { path: 'new-tickets', component: NewTicketsComponent },
      { path: 'varios', component: VariosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
