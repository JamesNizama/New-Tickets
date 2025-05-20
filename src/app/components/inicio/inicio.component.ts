import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  // Aquí defines las propiedades que usa el HTML
  displayedColumns: string[] = ['ticketNumber', 'comercio', 'referenciaPago', 'orden', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  ticketNumber: number;
  comercio: string;
  referenciaPago: string;
  orden: string;
  estado: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { ticketNumber: 1, comercio: 'Credicash', referenciaPago: 'REF123', orden: 'ORD001', estado: 'Aprobada' },
  { ticketNumber: 2, comercio: 'Ciudad Express', referenciaPago: 'REF456', orden: 'ORD002', estado: 'Vencida' },
  { ticketNumber: 3, comercio: 'Bienestar Rico', referenciaPago: 'REF789', orden: 'ORD003', estado: 'Pendiente' },
  { ticketNumber: 1, comercio: 'Yimisol', referenciaPago: 'REF123', orden: 'ORD001', estado: 'Pendiente' },
  { ticketNumber: 2, comercio: 'Yimisol', referenciaPago: 'REF456', orden: 'ORD002', estado: 'Aprobada' },
  { ticketNumber: 3, comercio: 'Fincube', referenciaPago: 'REF789', orden: 'ORD003', estado: 'Aprobada' },
  { ticketNumber: 1, comercio: 'Fincube', referenciaPago: 'REF123', orden: 'ORD001', estado: 'Aprobada' },
  { ticketNumber: 2, comercio: 'Fincube', referenciaPago: 'REF456', orden: 'ORD002', estado: 'Aprobada' },
  { ticketNumber: 3, comercio: 'Credicash', referenciaPago: 'REF789', orden: 'ORD003', estado: 'Vencida' },
  { ticketNumber: 1, comercio: 'Credicash', referenciaPago: 'REF123', orden: 'ORD001', estado: 'Vencida' },
  { ticketNumber: 2, comercio: 'Yimisol', referenciaPago: 'REF456', orden: 'ORD002', estado: 'Vencida' },
  { ticketNumber: 3, comercio: 'Yimisol', referenciaPago: 'REF789', orden: 'ORD003', estado: 'Pendiente' },
];
