import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../../planets.service';

@Component({
  selector: 'app-planet-detail-container',
  templateUrl: './planet-detail-container.component.html',
  styleUrls: ['./planet-detail-container.component.scss']
})
/*
 * Container component responsible for retreiving our individual planet data
 * and determining which components should display it
 */
export class PlanetDetailContainerComponent implements OnInit {

  // Stores the data of the selected planet
  planet: Observable<Planet>;

  constructor(private route: ActivatedRoute, private planetService: PlanetsService) { }

  ngOnInit() {
    // Subscribe to our acivated route so we can fetch its params
    this.route.paramMap.subscribe((params) => {
      // Using the name param, get the selected planet's detaild
      this.planet = this.planetService.getPlanet(params.get('name'));
    });
  }

}
