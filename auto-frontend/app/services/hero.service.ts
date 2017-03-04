/**
 * Created by Ed on 26.11.2016.
 */
import { Injectable } from '@angular/core';
import { HEROES } from '../components/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);;
    }
}