import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, rank: 1, hero_name: 'All-Might', real_name: 'Toshinori Yagi', quirk: 'One for All - Superhuman Strength, Speed, & Stamina'},
      {id: 2, rank: 2, hero_name: 'Endeavour', real_name: 'Enji Todoroki', quirk: 'Hellflame - Generate and control fire at will'},
      {id: 3, rank: 3, hero_name: 'Hawks', real_name: 'Unknown', quirk: 'Fierce Wings - Telekinetic control of the movement of each individual one of his feathers on his wings'},
      {id: 4, rank: 4, hero_name: 'Best Jeanist', real_name: 'Tsunagu Hakamata', quirk: 'Fiber Master - Can manipulate fibers at will, works better with denim than sweats'},
      {id: 5, rank: 5, hero_name: 'Edgeshot', real_name: 'Shinya Kamihara', quirk: 'Foldaboy - Manipulate the thinness of his body & stretch his limbs. Able to transform faster than the speed of sound.'},
      {id: 6, rank: 6, hero_name: 'Mirko', real_name: 'Rumi Usagiyama', quirk: 'Unknown - Presumed to be a rabbit-based quirk given her rabbit-like features'},
      {id: 7, rank: 7, hero_name: 'Crust', real_name: 'Unknown', quirk: 'Unknown'}
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}