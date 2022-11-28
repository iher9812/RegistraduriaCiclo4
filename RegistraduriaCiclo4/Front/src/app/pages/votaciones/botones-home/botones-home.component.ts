import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-home',
  templateUrl: './botones-home.component.html',
  styleUrls: ['./botones-home.component.scss']
})
export class BotonesHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnMesas(){
    this.router.navigateByUrl("mesas");
  }
  btnPartidos(){
    this.router.navigateByUrl("partidos")
  }
}
