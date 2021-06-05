import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  public logo!: string;

  constructor() { }

  ngOnInit(): void {
    this.logo='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/3689.png'
  }
}
