import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero-dialog',
  templateUrl: './add-hero-dialog.component.html',
  styleUrls: ['./add-hero-dialog.component.css'],
})
export class AddHeroDialogComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    // public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero[]
  ) {}

  ngOnInit(): void {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.data.push(hero));
  }
}
