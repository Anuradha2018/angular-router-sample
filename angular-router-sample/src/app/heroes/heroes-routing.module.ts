import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
  { path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes) // Only call RouterModule.forRoot in the 
                                          //root AppRoutingModule (or the AppModule 
                                          // if that's where you register top level 
                                          // application routes). 
                                          // In any other module, you must call the RouterModule.forChild 
                                          // method to register additional routes.
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
