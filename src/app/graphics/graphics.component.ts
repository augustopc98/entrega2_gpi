import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-gfg',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class GfgComponent{
    a ="GeeksforGeeks";

}



