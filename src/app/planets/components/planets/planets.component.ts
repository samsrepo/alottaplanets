import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
/*
 * Presentation component responsible presenting list of planets
 */
export class PlanetsComponent implements OnInit {

  @Input() planets: Planet[];

  constructor() { }

  ngOnInit() {
  }

}
