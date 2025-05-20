import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { NewTicketsComponent } from './components/new-tickets/new-tickets.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
//import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { VariosComponent } from './components/varios/varios.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InicioComponent,
    MyTicketsComponent,
    NewTicketsComponent,
    MenuComponent,
    VariosComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    //import
    RouterModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    //Component,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
