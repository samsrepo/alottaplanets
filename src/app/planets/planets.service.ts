import { Injectable } from '@angular/core';
import * as Butter from 'buttercms';
import { environment } from '../../environments/environment';
import { Observable, from} from 'rxjs';
import { map, } from 'rxjs/operators';
import { Planet } from './models/planet';

export const butterService = Butter(environment.API_TOKEN);

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor() { }

  // Fetch all items found under the 'planets' page type in butter CMS
  public getPlanets(): Observable<Planet[]> {
    return this.fromPromise(
      butterService.page.list('planets')).pipe(
        map(resp => {
          const mappedPlanets = [];
          for (const i in resp.data.data) {
            if (resp.data.data[i]) {
              // Map each page found to a Planet object
              mappedPlanets.push(this.formatPlanet(resp.data.data[i]));
            }
          }
          return mappedPlanets;
        })
    );
  }

  // Fetch a specific planet using the passed in slug
  public getPlanet(planetSlug: string): Observable<Planet> {
    return this.fromPromise(
      butterService.page.retrieve('planets', planetSlug)).pipe(map(pieces => this.formatPlanet(pieces.data.data))
    );
  }

  // Helper method to convert a promise to an observable
  private fromPromise(promise): Observable<any> {
    return from(<Promise<any>>promise);
  }

      // Format the piece as the application expects
  private formatPlanet(rawPlanet: any): Planet {
    return {...rawPlanet.fields, slug: rawPlanet.slug };
  }
}
