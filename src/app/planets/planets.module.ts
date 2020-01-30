import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsContainerComponent } from './containers/planets-container/planets-container.component';
import { PlanetDetailContainerComponent } from './containers/planet-detail-container/planet-detail-container.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetsComponent } from './components/planets/planets.component';

@NgModule({
  declarations: [PlanetsContainerComponent, PlanetDetailContainerComponent, PlanetDetailComponent, PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
