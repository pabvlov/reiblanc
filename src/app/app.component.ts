import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  screenWidth!: number;
  fechaNacimiento = moment([1984, 6, 28]).format('YYYY-MM-DD');
  fechaActual = moment().format('YYYY-MM-DD');
  anios = moment(this.fechaActual).diff(moment(this.fechaNacimiento), 'years')+1;
  @HostListener('window:resize', ['$event'])

  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }
}
