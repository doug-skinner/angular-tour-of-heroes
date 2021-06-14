import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AddHeroDialogComponent } from '../add-hero-dialog/add-hero-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  openDialog(): void {
    this.dialog.open(AddHeroDialogComponent, { data: { heroes: this.heroes } });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
