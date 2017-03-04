/**
 * Created by Ed on 26.11.2016.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
                <ul class="heroes">
                 <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="selectedHero===hero">
                  <span class="badge">{{hero.id}}</span> {{hero.name}}
                 </li>
                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title = "Tour of Heroes";
    public selectedHero:Hero;
    public heroes: Hero[];

    constructor(private heroService:HeroService){}

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero){
        this.selectedHero = hero;
    }
}