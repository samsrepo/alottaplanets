import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsContainerComponent } from './containers/planets-container/planets-container.component';
import { PlanetDetailContainerComponent } from './containers/planet-detail-container/planet-detail-container.component';

const routes: Routes = [
  {path: '', component: PlanetsContainerComponent},
  {path: 'details/:name', component: PlanetDetailContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
