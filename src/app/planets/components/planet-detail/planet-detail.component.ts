import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
/*
 * Presentation component responsible for displaying details
 */
export class PlanetDetailComponent implements OnInit {

  // The selected planet to present
  @Input() planet: Planet;

  constructor() { }

  ngOnInit() {
  }

}
