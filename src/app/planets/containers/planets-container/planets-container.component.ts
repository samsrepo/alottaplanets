import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';
import { PlanetsService } from '../../planets.service';

@Component({
  selector: 'app-planets-container',
  templateUrl: './planets-container.component.html',
  styleUrls: ['./planets-container.component.scss']
})
/*
 * Container component responsible for retreiving our planets list
 * and determining which components should display it
 */
export class PlanetsContainerComponent implements OnInit {

  // The list of planets provided by ButterCMS
  planets: Observable<Planet[]>;

  constructor(private planetService: PlanetsService) { }

  ngOnInit() {
    // Initialise our planets with a call to our service
    this.planets = this.planetService.getPlanets();
  }

}
