import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-h',
  templateUrl: './info-h.component.html',
  styleUrls: ['./info-h.component.css']
})
export class InfoHComponent implements OnInit {
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
  }

}
