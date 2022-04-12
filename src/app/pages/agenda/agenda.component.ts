import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  mensaje ="Hola mundo";
  data:any = [
    'Clases de Español | 9:00 a.m. - 10:00 a.m.',
    'Clases de Matematicas | 10:00 a.m. - 11:00 a.m.',
    'Clases de Ingles | 12:00 a.m. - 13:00 p.m.',
    'Clases de Fisica | 13:00 p.m. - 14:00 p.m.',
    'Clases de Trigonometria | 14:00 p.m. - 15:00 p.m.',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
