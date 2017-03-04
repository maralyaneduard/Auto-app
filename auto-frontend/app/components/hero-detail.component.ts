/**
 * Created by Ed on 26.11.2016.
 */
import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template: ` <div *ngIf="hero"> 
                    <h1>selected hero name {{hero.name}}</h1>
                    <input [(ngModel)]="hero.name"/>
                </div>`
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}